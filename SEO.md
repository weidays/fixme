# SEO 与流量监控

## 已经自动在做的

| 项目 | 做法 | 在哪 |
|---|---|---|
| 站内链接 | 每个故障码页底部列出同品牌同设备的相邻故障码，以及共用主板的姊妹品牌同一个码（Carrier↔Bryant、Goodman↔Amana、Trane↔American Standard） | `src/components/RelatedCodes.astro` |
| 故障码总表页 | 每个「品牌 × 设备」组合一张总表，例如 `/brand/carrier/furnace/`，针对 "carrier furnace error codes" 这类大词 | `src/pages/brand/[brand]/[equipment].astro` |
| 面包屑 | 首页 › 品牌 › 故障码总表 › 当前页，同时输出 BreadcrumbList 结构化数据 | 故障码页模板 |
| 结构化数据 | 每页输出 TechArticle、FAQPage、BreadcrumbList；总表页输出 ItemList | 页面模板 |
| sitemap lastmod | 每个故障码页带 `dateModified`，搜索引擎只重爬改过的页 | `astro.config.mjs` |
| IndexNow | 每次部署后，把这次新增或修改的页面推给 Bing（以及 Yandex 等），通常几小时内被抓取 | `scripts/indexnow.ts`，deploy 工作流最后一步 |
| 统一网址 | 所有站内链接都用结尾带 `/` 的正式网址，爬虫不会碰到跳转 | `astro.config.mjs` 的 `trailingSlash` |
| 坏链修复 | 生成的文章里如果出现编造的站内链接，发布前自动改成正确网址；指向不存在页面的链接会被去掉 | `normalizeLinks`（`scripts/_draft-schema.ts`） |

Google 不支持 IndexNow，它靠 sitemap 和 Search Console。

## 需要你在各平台后台做的（一次性）

1. ~~**Cloudflare Web Analytics 令牌。**~~ ✅ 已完成（2026-10-03）。令牌存在 GitHub 的 Secrets 里，部署流程两边都读；每次部署的「Analytics beacon check」步骤会显示是否读到。
   还可以顺手做：Cloudflare → Web Analytics → fixme.vip → 管理网站，把「自动设定」关掉，避免重复计数。
2. **Google Search Console。** 添加「网域」类型资源 `fixme.vip`，用 Cloudflare DNS 加 TXT 记录验证，然后在「站点地图」提交 `https://fixme.vip/sitemap-index.xml`。
3. **Bing Webmaster Tools。** https://www.bing.com/webmasters ，选择「从 Google Search Console 导入」，一键完成。Bing 的数据也会影响 ChatGPT 搜索和 Copilot 的结果。

## 每周看什么（10 分钟）

| 看哪里 | 看什么 | 怎么行动 |
|---|---|---|
| Search Console → 效果 | 曝光高但点击率低的页 | 改标题和描述，让它更像搜索者要的答案 |
| Search Console → 效果 → 查询 | 有曝光但站上没有专门页面的词 | 加进 `content-backlog.json` 顶部 |
| Search Console → 页面 | 「已发现，尚未编入索引」的数量 | 数量持续增加说明内容被认为质量不够，告诉我 |
| Cloudflare Web Analytics | 访问最多的页面和来源 | 流量大的页优先加深内容 |
| https://fixme.vip/admin → Overview | 哪些页带来报价点击和电话点击 | 这些页是赚钱页，优先维护 |
| Actions → Content pipeline | 每天发布了几页、打回几页 | 连续多天发布 0 页，多半是 API 余额用完 |
