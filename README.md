# fixme.vip — HVAC error codes, explained and fixed

程序化 SEO 的**美国 HVAC（暖通）故障码权威站**。每个故障码 = 一个长尾搜索词 = 一个结构化修复页。完整商业逻辑见 [STRATEGY.md](STRATEGY.md)。

## 它在卖什么（一句话）

不卖答案给用户——**用户永不付费**。用程序化 SEO 接住"正在为故障花钱"的房主，两条轨变现：

- **轨 A 配件联盟**（Amazon）：DIY 类故障的页面挂配件链接，靠量
- **轨 B 维修 lead**（Networx / Service Direct 等）：贵的、必须找持证人的故障，把高意图房主交给 lead 网络（$25–75/lead）

对标 PICKHVAC（已用此模型跑通十年）。我们赢在**覆盖**（程序化全覆盖 vs 它零散几十篇）+ **结构**（schema.org + 静态站）。命门是**内容质量**——薄 AI 页会同时撞死在 Google Helpful Content 和 lead 网络的质量审核两道门上。

## 架构

- **Astro 5 SSG** — 纯静态、零 JS 默认、最利 SEO；部署 Cloudflare Pages
- **内容即数据** — 每个码是 `src/content/errors/` 下一个 md，[content.config.ts](src/content.config.ts) 的 zod 在 **build 时**强制 SEO 硬约束（title≤60、desc 50-160、FAQ≥3、型号适用必填）
- **severity 驱动变现分流**：`diy` 页配件区优先、`pro`/`emergency` 页报价 CTA 前置、`emergency` 页顶部红色安全横幅
- **SEO 全套**：每页 TechArticle + FAQPage + BreadcrumbList JSON-LD、canonical/OG、sitemap、robots

## 路由

| 路由 | 作用 |
|---|---|
| `/` | 首页：hero + 即时搜索 + 品牌格 + 设备格 |
| `/error/[slug]` | 核心 SEO 页：码含义 → 排序原因 → 安全 DIY 检查 → 技师视角 → 症状表 → 价格 → FAQ + 两轨变现 |
| `/brand/[brand]` | 品牌列表页（carrier/goodman/trane…） |
| `/equipment/[type]` | 设备列表页（furnace/ac/heat-pump/thermostat/mini-split） |
| `/quote` | 报价 lead 表单（轨 B，带来源页归因 + 蜜罐反垃圾） |
| `/fix` | 码查询工具：本地匹配 + 未命中上报 + AI 诊断（带燃气/CO 安全边界） |
| `POST /api/lead` | lead 捕获：校验 zip/联系方式 + 来源归因 → KV |
| `GET /api/leads` | lead 读取（ADMIN_TOKEN 鉴权） |
| `POST /api/report` | 未命中码入选题队列 |
| `POST /api/diagnose` | AI 诊断（HVAC prompt + 安全边界，IP 日限免） |
| `GET /api/queue` | 选题队列读取（ADMIN_TOKEN） |

## 内容工作流（飞轮）

```bash
npm run dev          # 本地开发
npm run build        # 构建 + schema 校验（不合格直接失败）

# 生成新码页草稿（需 ANTHROPIC_API_KEY）：
ANTHROPIC_API_KEY=sk-... bun scripts/generate-code.ts \
  --brand carrier --equipment furnace --code "Code 13" --severity pro
# 草稿在 drafts/，人工审校后移入 src/content/errors/ 再 build
```

模型默认 `claude-opus-4-8`，可 `CLAUDE_MODEL=claude-haiku-4-5` 降本。

### 发布前质量清单（这是护城河，不是流程）

- [ ] 故障码语义对照过品牌官方文档/安装手册，**没有编造型号特定的规格**
- [ ] 型号适用范围（appliesTo）写清，board/型号有差异的明说
- [ ] 安全边界：不教绕过安全开关、开燃气阀、动制冷剂、反复 reset 锁定机组
- [ ] emergency 类页面引导"关机 + 找持证人"，不诱导 DIY
- [ ] 价格区间真实、原因按概率排序
- [ ] **署名 `fixme.vip Editorial`，`reviewedBy` 留空——找到持证 HVAC 真人审稿前不挂任何资质**

## 待办（上线关键路径）

1. **变现地基**：注册 Service Direct / FlexOffers / CJ 的 publisher，确认 HVAC lead 联盟自助接入 + 流量门槛
2. **质量样本**：人工精修 5–10 篇对标 PICKHVAC 深度的旗舰页（已有 carrier-furnace-code-33 作模板）
3. **轨 A 上线**：Amazon Associates，把 [config.ts](src/config.ts) 的 `AMAZON_TAG` 换成真 tag
4. **真人审稿**：找一个持证 HVAC 技师做 `reviewedBy`，这是质量与信任的关键（也利于 Networx 过审）
5. **铺量**：程序化扩到几百→几千码页，每页过质量清单

## 部署（Cloudflare Pages）

静态站 + `functions/` API 同仓库同部署。

1. 推 GitHub，Pages 关联（build `npm run build`，output `dist`）
2. 建 KV：`npx wrangler kv namespace create FIXME_KV`，id 填进 [wrangler.toml](wrangler.toml)
3. Pages Settings → Variables：
   - `ANTHROPIC_API_KEY`、`ADMIN_TOKEN`、`RESEND_API_KEY`（Secret）
   - `LEAD_NOTIFY_EMAIL`（普通变量）— 新 lead 提醒邮件发到这个邮箱
   - 可选 `CLAUDE_MODEL`、`LEAD_FROM_EMAIL`（域名在 Resend 验证后改成 `leads@fixme.vip` 这类）

### 新 lead 邮件提醒（冷启动期的"接线"）

用户提交 [/quote](src/pages/quote.astro) → lead 存 KV → **best-effort 发邮件提醒你本人**（[lead.ts](functions/api/lead.ts) 里走 Resend HTTP API，`waitUntil` 异步、不阻塞响应、失败不丢 lead）。这样冷启动期你能**人肉撮合**每条 lead，验证 lead 真能成交——这是接 lead 联盟、过审之前最该跑通的一步。

配置：去 [resend.com](https://resend.com) 注册拿 `RESEND_API_KEY`，设 `LEAD_NOTIFY_EMAIL`。未验证域名时只能用默认发件人 `onboarding@resend.dev` 且只能发到你的注册邮箱（够冷启动用）；验证 fixme.vip 后把 `LEAD_FROM_EMAIL` 改成自有发件人即可对外。不配 `RESEND_API_KEY` 时 lead 仍正常存 KV，只是不发邮件。
4. **WAF 速率限制**：`/api/diagnose` ≤5/分、`/api/lead`+`/api/report` ≤20/分（见 [SECURITY.md](SECURITY.md)）
5. 绑定 fixme.vip → Google Search Console 提交 sitemap

## 现状

9 篇种子码页（Carrier ×2、Goodman ×3、Trane、Lennox、Rheem、Honeywell），覆盖 furnace/ac/heat-pump/thermostat 与 diy/pro/emergency 三档 severity。旧的开发者报错站内容与脚本已归档至 `archive/`（gitignore，未删除）。
