# 内容自动化流水线（半自动 + 一键审核）

每天自动**生成草稿 + 校验 + 开 PR**;你扫一眼 **Merge = 一键发布**,合并自动**构建部署**。
保住了 11 年域名和 lead 联盟质检的质量闸,但你日常只需 5 分钟。

## 它怎么运转

```
每天 cron ──▶ generate-batch.ts 从 content-backlog.json 取 10 个未覆盖的码
          ──▶ 调 Anthropic 生成草稿 → 写入 src/content/errors/（在新分支上）
          ──▶ npm run build 校验 schema（不合格直接失败、不开 PR ← 自动挡坏内容）
          ──▶ 开一个 PR

你 ──▶ 在 GitHub 看 PR 的 Files changed，扫内容（准确性/安全/价格）
   ──▶ Merge（一键放行）  或  Close（丢弃整批）

Merge 推到 main ──▶ deploy.yml 自动 build + wrangler pages deploy ──▶ 上线
```

**审核闸 = PR。** 没有任何东西不经你 Merge 就上线。这是和"无脑直发"的根本区别,也是不让 Google 判规模化滥用、不让 lead 联盟拒你的关键。

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
| `ANTHROPIC_API_KEY` | 生成内容 | 你已有的 Anthropic key |
| `CLOUDFLARE_API_TOKEN` | 部署 | Cloudflare → My Profile → API Tokens → Create → 用 **"Edit Cloudflare Pages"** 模板 |
| `CLOUDFLARE_ACCOUNT_ID` | 部署 | Cloudflare 任意域名概览页右侧 / URL 里那串 |

可选:在 **Variables**(不是 Secrets)加 `CLAUDE_MODEL = claude-haiku-4-5` 把生成成本降约 5 倍。

### 3. 完成

推上去后两个工作流就激活了:
- **Generate content drafts** —— 每天 14:00 UTC 自动跑(也可在 Actions 页手动 **Run workflow**,还能临时改生成数量)
- **Build & deploy** —— 你 Merge PR 到 main 时自动跑

## 日常你要做的

1. 收到 PR(GitHub 通知/邮件)
2. 点开 **Files changed**,扫每篇:码义对不对、安全边界在不在、价格合不合理
3. 好 → **Merge**(自动上线);不好 → 直接改 PR 里的文件再合,或 **Close** 丢弃

## 喂内容飞轮:扩充 backlog

生成器是按 [content-backlog.json](content-backlog.json) 从上往下做的。要让它一直有料、且**优先做真实需求**:

```bash
# 看用户搜了但你没覆盖的码（选题队列）：
curl https://fixme.vip/api/queue -H "Authorization: Bearer 你的ADMIN_TOKEN"
```

把高频的码**加到 content-backlog.json 顶部**,下一次生成就优先做它们。backlog 空了生成器会提示你补。

## 先本地试一下(不花钱、不发请求)

```bash
npx tsx scripts/generate-batch.ts --dry-run
```

会列出"接下来会生成哪 10 个码",但不调 API、不写文件——确认选码逻辑对了再推 GitHub。

## 调参

- **每天几篇**:改 [generate-drafts.yml](.github/workflows/generate-drafts.yml) 里 `COUNT` 默认值,或手动触发时填。**质量 > 数量,审核累就调小。**
- **几点跑**:改那个 `cron`(UTC 时间)。
- **关掉自动**:Actions 页面把 workflow 禁用,或删 cron 只留手动。
