# 内容自动化流水线（AI 二审 + 分级放行）

每天自动**同步需求 → 生成草稿 → AI 二审 → 按风险分流**。不涉及燃气/CO 的页面过审即上线；
燃气/CO 类页面进一个**滚动的人工审核 PR**。你日常只看那一个 PR，每周抽查几篇已上线的页。

> 为什么改：旧流程"每天开一个新 PR、人工逐篇审"在 3 个月里积了 91 个没合并的 PR、0 篇上线，
> 而且每天重复生成同样 10 页。零产出比不完美的页面贵得多。

## 它怎么运转

```
每天 cron ──▶ queue-to-backlog.ts   访客在 /fix 搜过但没命中的码 → 插到 backlog 顶部
          ──▶ generate-batch.ts     从 content-backlog.json 取 COUNT 个未覆盖的码生成草稿
          ──▶ review-draft.ts       AI 二审：按 README 质量清单逐条检查（码是否真实存在、
                                    有无编造规格、安全边界、紧急页处理、价格合理性、无假署名、不薄）
                                    不过的页按审稿意见重写一次、再审一次；仍不过才打回
          ──▶ 分流：
                通过 + diy/pro     ──▶ 直接提交到 main → 自动部署上线
                通过 + emergency   ──▶ 进滚动 PR「content/needs-review」等你合并
                不通过             ──▶ 删掉，原因记进 content-rejected.json；同一页失败 2 次就停手，等你处理
```

**审核闸变成两层。** AI 二审拦编造和不安全的内容；你只审燃气/CO 这类真会伤人的页面。
每次运行的 Actions 页面「Summary」会列出当天上线了哪些页、哪些被打回和原因。

## 一次性设置

### 1. 把项目推上 GitHub

```bash
cd /Users/max/Projects/fixme
git init
git add -A
git commit -m "Initial commit: fixme.vip HVAC site"
# 在 github.com 建一个仓库（建议 private），然后：
git remote add origin https://github.com/你的用户名/fixme-vip.git
git branch -M main
git push -u origin main
```

> `.gitignore` 已排除 `node_modules/`、`dist/`、`MEMORY/`、`drafts/`、`archive/`、`.env` —— 密钥和工作日志不会进仓库。

### 2. 在 GitHub 仓库设置 Secrets

仓库 → **Settings → Secrets and variables → Actions → New repository secret**,加三个:

| Secret | 干什么 | 哪来 |
|---|---|---|
| `ANTHROPIC_API_KEY` | 生成内容 + AI 二审 | 你已有的 Anthropic key |
| `ADMIN_TOKEN` | 每天把访客搜过的码同步进 backlog | 和 Cloudflare Pages 上配的同一串 |
| `CLOUDFLARE_API_TOKEN` | 部署 | Cloudflare → My Profile → API Tokens → Create → 用 **"Edit Cloudflare Pages"** 模板 |
| `CLOUDFLARE_ACCOUNT_ID` | 部署 | Cloudflare 任意域名概览页右侧 / URL 里那串 |

可选 **Variables**(不是 Secrets):`CLAUDE_MODEL`(生成模型,默认 claude-opus-4-8)、`REVIEW_MODEL`(二审模型,默认 claude-opus-5;二审是质量闸,不建议降)、`CF_BEACON_TOKEN`(见 DEPLOY.md)。

还要确认一项仓库设置:**Settings → Actions → General → Workflow permissions** 选 "Read and write permissions",并勾选 "Allow GitHub Actions to create and approve pull requests"。旧流程能开 PR 说明这已经是开着的。

### 3. 完成

推上去后两个工作流就激活了:
- **Content pipeline** —— 每天 14:00 UTC 自动跑(也可在 Actions 页手动 **Run workflow**,还能临时改生成数量)
- **Build & deploy** —— 任何东西进 main 时自动跑(流水线自动发布时会主动触发它)

## 日常你要做的

1. **每天 1 分钟**：GitHub 有一个标题为「Pages awaiting human review (emergency / gas)」的 PR。点 **Files changed** 看燃气/CO 页：第一条指引必须是关机、离开、打燃气公司或 911。好就 **Merge**（自动上线）；某一篇不好就在分支上删掉那个文件；整批不要就 **Close**。
2. **每周 10 分钟**：到 Actions → Content pipeline，翻最近几次运行的 Summary，随机点开 3–5 篇已自动上线的页读一遍。发现问题直接在 main 上改或删文件。
3. **偶尔**：看 `content-rejected.json` 里失败 2 次被停掉的码，要么删掉条目让它重试，要么自己写。

## 喂内容飞轮:扩充 backlog

生成器是按 [content-backlog.json](content-backlog.json) 从上往下做的。要让它一直有料、且**优先做真实需求**,有一条自动闭环:

```
访客在 /fix 输入没命中的码 ──▶ POST /api/report 进选题队列(KV)
        ──▶ 每天生成前 queue-to-backlog.ts 拉队列、解析成 {brand, equipment, code, severity}
        ──▶ 新条目按搜索次数插到 backlog 最顶部(带 "_source": "queue", "_count": N)
        ──▶ 当天的草稿优先做这些
```

要启用:仓库 Secrets 加 `ADMIN_TOKEN`(和 Cloudflare Pages 上配的同一串)。没配就静默跳过。

手动跑(本地):

```bash
ADMIN_TOKEN=... npm run queue-sync -- --dry-run   # 先看会加什么
ADMIN_TOKEN=... npm run queue-sync                # 写入 backlog 顶部
npm run queue-sync -- --from saved.json --dry-run # 离线:喂一份保存下来的 /api/queue 响应
npm run queue-sync -- --min-count 2               # 只收被搜过 ≥2 次的
```

解析规则:品牌必须是站内 10 个品牌之一,设备必须能认出(furnace / AC / heat pump / mini split / thermostat),码取「code 33 / 4 flashes / E5」这类,认不出码就退化成症状(Not cooling / Gas smell / Short cycling…)。**认不出品牌或设备的不猜**,脚本会单独列出「needs a human」让你手动决定(大多是垃圾或站外品牌,如 Daikin)。已发布或已在 backlog 里的只显示搜索次数、不重复加。

## 先本地试一下(不花钱、不发请求)

```bash
npx tsx scripts/generate-batch.ts --dry-run
```

会列出"接下来会生成哪 10 个码",但不调 API、不写文件——确认选码逻辑对了再推 GitHub。

## 调参

- **每天几篇**:改 [generate-drafts.yml](.github/workflows/generate-drafts.yml) 里 `count` 默认值(现在 15),或手动触发时填。10 月中前要上 200 篇暖炉页,15/天、七成过审刚好够。
- **本地手动审一篇**:`ANTHROPIC_API_KEY=... npm run review -- --out r.json src/content/errors/xxx.md`
- **几点跑**:改那个 `cron`(UTC 时间)。
- **关掉自动**:Actions 页面把 workflow 禁用,或删 cron 只留手动。
