# Lead 渠道接入指南

所有渠道都在 **https://fixme.vip/admin → Channels** 里配置，保存后一分钟内全站生效，不用重新部署。
下面每个网络都要**你本人申请、等审核**。审核看的是真实流量和内容质量，门槛以对方回复为准。

## 三种接法，对应三类网络

| 你从网络拿到的东西 | 填到后台哪里 | 站上发生什么 | 典型网络 |
|---|---|---|---|
| 一个**追踪电话号码** | Pay-per-call → Tracking phone number | 每个报价框多一个 "Call" 按钮，打进去的合格电话按通计费 | Service Direct、eLocal |
| 一个**追踪链接**（affiliate link） | Partner link → 模板 + 模式 | 用户被送到对方的表单，对方按 lead 付钱 | Modernize（QuinStreet）、Networx |
| 一个**接收 lead 的 API**，或你自己的表格 | Webhook | 每条 lead 实时 POST 过去（JSON，带签名） | 对方的 posting API、Zapier/Make → Google Sheets/CRM |

三种可以同时开：电话按钮、表单 handoff、webhook 备份，互不冲突。

## 按优先级的申请清单

1. **Service Direct（pay-per-call）**：https://servicedirect.com/pay-per-lead-affiliate-program/
   申请 publisher，通过后在他们的后台建 HVAC campaign，拿到追踪号码，填进后台 Phone。
   来电是这个站最值钱的动作，error 页上的人本来就想打电话找人修。
2. **eLocal（pay-per-call）**：https://www.elocal.com/ 。和 Service Direct 二选一或做对照，同样是拿号码。
3. **Modernize（pay-per-lead）**：邮件 affiliates@modernize.com 申请，或走 FlexOffers 上的 Modernize 项目（https://www.flexoffers.com/affiliate-programs/modernize-affiliate-program/）。
   拿到追踪链接后，把 zip 和 sub-id 参数换成 `{zip}` `{subid}` `{src}` 填进模板。
4. **Networx（pay-per-lead）**：https://affiliates.networx.com/ 。同上，拿追踪链接。
5. 聚合网络备选：Profitise（home services affiliate network）。

## Partner 模式怎么选

- **Off**：只用我们自己的表单。lead 存在后台，你手动处理，或靠 webhook 转出去。
- **Handoff**（推荐起步）：用户先填我们的表单，lead 留底；提交后出现 "See available local pros →" 按钮去对方表单，zip 自动带过去。代价是用户要填两次，会有流失。
- **Direct**：所有 "Get free local quotes" 按钮直接去对方表单，不经过我们的表单。转化最高，但我们这边只看得到点击数，没有 lead 记录。affiliate 链接类网络通常只认它自己表单里提交的 lead。拿到链接后可以先 Handoff 跑一周，对比对方报表再决定要不要切 Direct。

跳转由 `/api/go` 负责。它只会跳到后台配置的模板，URL 里的参数改不了目的地。

## Webhook 格式

```json
{
  "event": "lead.created",
  "site": "fixme.vip",
  "id": "lead:2026-09-23T10:00:00.000Z:1a2b3c4d",
  "zip": "75201",
  "name": "Pat",
  "contact": "pat@example.com",
  "contactType": "email",
  "issue": "Carrier furnace code 33, no heat",
  "source": "carrier-furnace-code-33",
  "sourceUrl": "https://fixme.vip/error/carrier-furnace-code-33",
  "createdAt": "2026-09-23T10:00:00.000Z"
}
```

填了 signing secret 时，请求头带 `X-Fixme-Signature: sha256=<HMAC-SHA256(secret, 原始 body) 的十六进制>`，接收方可以验签。
后台的 "Send test lead" 按钮会发一条假 lead，并显示对方返回的 HTTP 状态。

**不写代码就能先用上**：在 Zapier 建一个 "Webhooks by Zapier → Catch Hook"，把生成的 URL 填进来，下一步接 Google Sheets 或 Gmail。

## 接上网络之前：后台就是你的手动渠道

- 每条 lead 在 **Leads** 页有状态：new → contacted → handed off → sold / dead，可以写备注、导出 CSV。
- 新 lead 发邮件到 `LEAD_NOTIFY_EMAIL`（Cloudflare 上要配 `RESEND_API_KEY`）。
- 勾选 **Email → confirmation** 后，留了邮箱的用户会马上收到确认信。
- 这些记录（来源页、时间、ZIP）就是你申请网络时证明"真实、干净流量"的材料。

## 后台还能看什么

- **Overview**：30 天内报价按钮点击、电话按钮点击、partner 跳转、lead 数，以及哪些 error 页带来最多动作。
- **Search demand**：用户搜了但站上没有的码，以及旧网址 404 列表，直接给出可粘贴的 `_redirects` 行。
