# 部署到 Cloudflare Pages

本项目不是 git 仓库，所以走 **direct upload**（`wrangler pages deploy`），不需要 GitHub。
静态站和 `functions/` 目录的 API 会一起部署。

> 这些命令要在**你自己的终端**里跑（需要登录你的 Cloudflare 账号）。

## 一次性准备

```bash
cd /Users/max/Projects/fixme

# 1. 登录（开浏览器授权一次）
npx wrangler login

# 2. 建 KV namespace，记下输出里的 id
npx wrangler kv namespace create FIXME_KV
#   → 把打印出来的 id 填进 wrangler.toml 的 id = "REPLACE_WITH_YOUR_KV_NAMESPACE_ID"
```

## 部署

```bash
npm run build                       # 确保 dist 最新
npx wrangler pages deploy dist      # 首次会让你确认创建项目名（建议 fixme-vip）
```

部署完会给你一个 `https://fixme-vip.pages.dev` 地址，先用它验证。

## 配置环境变量（Pages 控制台 → Settings → Variables and Secrets）

| 变量 | 类型 | 作用 | 不配会怎样 |
|---|---|---|---|
| `ANTHROPIC_API_KEY` | Secret | /api/diagnose 的 AI 诊断 | 诊断按钮返回「暂未开放」，其余正常 |
| `ADMIN_TOKEN` | Secret | /api/leads、/api/queue 读取口令（自己生成一串长随机字符串） | 这两个管理端点返回 503 |
| `RESEND_API_KEY` | Secret | 新 lead 邮件提醒（resend.com 注册拿） | lead 仍存 KV，只是不发邮件 |
| `LEAD_NOTIFY_EMAIL` | 普通 | lead 提醒发到的邮箱 = `weidays4u@gmail.com` | 同上 |
| `CLAUDE_MODEL` | 普通（可选） | 默认 claude-opus-4-8，可设 claude-haiku-4-5 降本 | 用默认 |
| `LEAD_FROM_EMAIL` | 普通（可选） | 验证域名后改成 `leads@fixme.vip` 之类 | 用 onboarding@resend.dev |

> **重要**：站点不配任何 secret 也能上线——静态码页、品牌/设备导航、码查询、**lead 表单存 KV** 全部照常工作。AI 诊断和邮件提醒是配了对应 key 才启用。所以可以**先部署、再逐个补 key**。

设完变量后，重新部署一次（或在控制台 Retry deployment）让变量生效。

## 上线前必做（安全 + SEO）

1. **WAF 速率限制**（Security → WAF → Rate limiting）：`/api/diagnose` ≤5/分、`/api/lead` + `/api/report` ≤20/分。详见 [SECURITY.md](SECURITY.md)。
2. **绑定自定义域名** fixme.vip（Pages → Custom domains）。
3. 上线后到 Google Search Console 提交 `https://fixme.vip/sitemap-index.xml`。

## 后续每次更新

```bash
npm run build && npx wrangler pages deploy dist
```
