# 安全说明（部署前必读）

`/api/diagnose` 会触发付费的 Anthropic API 调用，`/api/report` 会写 KV。两者都对匿名公网开放，因此**上线前必须在 Cloudflare 控制台加 WAF 速率限制规则**——这是代码层用 KV 无法彻底解决的部分（KV 是最终一致的，计数器非原子）。

## 代码内已实现的防护

- **诊断缓存**：同一报错（规范化后哈希）只付费一次，结果缓存复用，不重复扣费
- **Reserve-then-call**：付费调用前先递增 IP/全站计数器，缩小并发竞争窗口；失败不回滚（fail-closed 保护花费）
- **IPv6 /64 分桶**：按 /64 前缀限流，防止单台主机用海量 IPv6 地址刷免费额度
- **全站日上限**（`GLOBAL_DIAGNOSES_PER_DAY`）：最坏情况花费的兜底
- **超额不写 KV**：`/api/diagnose` 命中缓存或超额时不再写队列，避免耗尽额度后仍能刷 KV
- **队列读取两段式 + SCAN_CAP**：用 KV metadata 排序、只 hydrate top N，KV 被刷也不会让管理端点超时
- **请求体 ≤10KB（413）、报错文本 ≤4000 字符**
- **XSS 防护**：`/fix` 的 AI 诊断渲染器先转义全部 HTML，再只转换白名单 markdown，无原始 HTML 注入路径（已安全审计确认）

## 上线前必须做（Cloudflare 控制台）

1. **WAF 速率限制规则**（Security → WAF → Rate limiting rules）：
   - `/api/diagnose`：每 IP 每分钟 ≤ 5 次
   - `/api/report`：每 IP 每分钟 ≤ 20 次
   这是防成本攻击和 KV 洪泛的主防线。KV 计数器只是第二道。
2. **`ADMIN_TOKEN`** 用足够长的随机字符串（队列读取口令）
3. 考虑把 `CLAUDE_MODEL` 设为 `claude-haiku-4-5`——即便发生成本攻击，单次调用成本约为 Opus 的 1/5

## 已知残余风险（MVP 可接受，规模化时处理）

- **计数器竞争**：KV 非原子，极端并发下全站上限可能被略微突破。彻底解决需 Durable Objects 原子计数器；当前用 reserve-then-call + WAF 双层缓解
- **`/api/report` KV 洪泛**：IPv6 轮换可绕过 IP 限流持续建键。WAF 规则是主要缓解；规模化后可加「每日新建键数」全站上限
- **提示注入缓存投毒**：攻击者可预先污染某报错的缓存诊断，被后续用户看到。`queue-to-draft.ts` 产出的是**草稿**，发布前必须人工审校——这是关键关口，不要自动发布 AI 诊断
- **ADMIN_TOKEN 比较非常量时间**：高熵随机 token + Cloudflare 抖动下，远程时序攻击不可行，MVP 可接受
