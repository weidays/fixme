---
title: "Amana Furnace 9 Flashes: High-Stage Pressure Switch Open"
code: "9 flashes"
description: "Amana furnace 9 flashes means the high-stage pressure switch failed to close on high fire. Causes, safe checks, and repair costs of $0–$1,200."
brand: amana
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if the inducer (draft) motor needs replacement"
appliesTo: >
  Applies to two-stage Amana gas furnaces (AMVC, ACVC, AMVM, and similar variable/two-stage models) using integrated ignition control boards that report faults with LED flash codes. Single-stage furnaces do not use this code. On some board revisions the same fault may show as a different count or as a dual-stage pressure switch fault — always confirm against the legend on the blower-door label.
tags:
  - amana
  - furnace
  - pressure-switch
  - two-stage
  - flash-code
parts: []
datePublished: 2026-09-20
dateModified: 2026-09-20
reviewedBy: ""
faq:
  - q: Can I run my Amana furnace on low heat if it shows 9 flashes?
    a: Low stage is still being pressure-proven by its own switch, so the furnace is not firing on an unproven draft. The problem is that whatever is blocking high fire — a restricted vent, a plugged drain, bad tubing, or a tired inducer — usually gets worse, and low fire alone will leave the house under-heated on cold days. Get it diagnosed rather than living on low stage.
  - q: Does the 9-flash code reset on its own?
    a: On most Amana boards the control retries automatically when the pressure switch closes. If the fault persists it can drop to low stage or lock out until the switch proves closed and power is cycled.
  - q: Is 9 flashes the same as the 3-flash pressure switch code?
    a: No. Three flashes is a pressure switch stuck open on the main/low stage. Nine flashes specifically means the high-stage switch did not close when the furnace called for high fire.
  - q: Why does it only fail on cold, windy days?
    a: High fire runs hardest when demand is high. A partially blocked flue, a marginal switch, or a weak inducer is most likely to fail to prove pressure under those conditions.
---

## What this code means

Nine flashes on an Amana two-stage furnace means the **high-stage pressure switch failed to close when the furnace called for high fire**. Two-stage furnaces have two pressure switches (or a dual switch): one proves draft on low fire, another proves the stronger draft needed for high fire. When the control energizes high stage, it expects the high-stage switch to close within a set time. If it doesn't, the board posts 9 flashes.

This is a **safety interlock working as designed**. The pressure switch confirms the inducer motor is actually moving enough combustion air and flue gas before the furnace will run at full input. If that airflow isn't proven, the control blocks high fire to prevent unsafe combustion.

Behavior varies by board: many Amana controls will drop the furnace back to **low stage** and keep heating at reduced output, while others hold the high-stage call and retry. Persistent failures may result in a hold that clears only after the switch proves closed and power is cycled. Because diagnosis requires opening the cabinet and testing pressures, this is **pro-level** work.

## Common causes, ranked by probability

This ordering reflects what actually shows up on 9-flash calls: faults that are marginal enough to pass on low fire but not on high fire. Restrictions in the vent and condensate path come first because they can starve high-stage draft while low stage still proves; a degraded inducer usually turns up behind them.

1. **Blocked or restricted flue / intake vent** — nests, ice, snow, debris, or a sagging concentric vent reduce airflow so high-stage draft is never reached. Restricted vent-intake terminations are one of the most frequent findings on condensing two-stage units.
2. **Clogged condensate drain or trap** on high-efficiency models — a backed-up trap raises pressure in the collector box and prevents the high switch from seeing the correct signal.
3. **Plugged inducer drain port or collector box** — condensate buildup inside the inducer housing restricts flow.
4. **Cracked, kinked, water-logged, or disconnected pressure switch tubing** — the small hose feeding the high-stage switch can crack, fill with condensate, or slip off its port.
5. **Weak or failing inducer (draft) motor** — as bearings wear or the wheel loses efficiency, the motor can still generate enough draft for low fire but not the higher pressure needed to close the high-stage switch.
6. **Faulty high-stage pressure switch** — the switch diaphragm or contacts fail and never close even with correct draft.
7. **Wiring or connector fault** in the high-stage switch circuit — loose or corroded terminals on the switch or board.

Amana's troubleshooting sequence generally has the technician verify actual inducer draft (in inches of water column) against the switch rating before condemning the switch itself.

## Safe checks before you call anyone

These are the only steps a homeowner should do:

- **Check the thermostat** — set it to Heat and several degrees above room temperature so the furnace is actually calling for heat. Replace thermostat batteries if it's battery-powered.
- **Inspect and replace the air filter** — a heavily clogged filter strains airflow and can contribute to draft-related faults. Slide in a clean filter of the correct size.
- **Check the breaker and furnace switch** — confirm the furnace breaker is on and the service switch on or near the furnace is on.
- **Look at exterior vents** — for high-efficiency models, walk outside and make sure the PVC intake and exhaust pipes are clear of snow, ice, leaves, nests, or debris. Clear anything blocking the openings.
- **Check the condensate drain** — if you see water pooling near the furnace or a full condensate trap, a clogged drain can trigger this code. You may clear a visible external drain line, but do not open the cabinet.
- **Confirm supply and return registers are open** throughout the house.
- **One reset only** — you may cycle the furnace power once. If 9 flashes returns, stop and call a technician. Do not repeatedly reset a furnace that keeps faulting.

Do **not** open the cabinet, bypass any switch, or attempt to test or replace the pressure switch, tubing, or inducer yourself.

## How a technician will diagnose it

A qualified tech will typically:

1. Read the flash code and confirm it's the **high-stage** pressure switch, not the low-stage switch (3 flashes).
2. Put the furnace through a heat call and watch it ramp to high fire while measuring **inducer draft in inches of water column** with a manometer.
3. Compare measured draft to the **switch's rated closing pressure** stamped on the switch body.
4. If draft is adequate but the switch doesn't close, **the switch is condemned**.
5. If draft is low, they investigate the cause: inspect the flue and intake for restriction, check the condensate trap and inducer drain, examine the pressure tubing for cracks or water, and evaluate the **inducer motor's condition and current draw**.
6. Check wiring and connectors in the high-stage circuit for looseness or corrosion.

A good quote names the actual failed component and the measured draft reading — not just "replace the pressure switch."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Runs on low heat only, never high fire | Restricted vent path, marginal high switch, or weak inducer | Replace filter; check vents | Measure draft, clear restriction, test/replace switch or inducer |
| 9 flashes on cold/windy days | Restricted flue or intake | Clear snow/ice/debris from exterior vents | Inspect and clear full flue path |
| Water near furnace, then fault | Clogged condensate drain/trap | Clear visible external drain line | Clear trap, collector box, inducer drain port |
| Fault right after high-stage call | Cracked, water-logged, or slipped switch tubing | None — cabinet work | Inspect, reseat, or replace pressure tubing |
| Fault even with good airflow | Failed high-stage pressure switch | None — cabinet work | Confirm draft, replace switch |
| Intermittent 9 flashes | Loose/corroded wiring | One power reset only | Inspect and repair connectors |

## Repair costs

Honest US ranges, parts and labor:

- **DIY safe checks (filter, vents, thermostat, one reset):** $0–$40
- **Service call / diagnostic fee (charged before any repair):** $90–$200 — some companies waive or credit it if you approve the repair
- **Clear condensate drain / trap (pro):** $75–$200
- **Clear or repair flue/intake restriction:** $100–$300
- **Replace pressure switch tubing:** $100–$200
- **Replace high-stage pressure switch:** $150–$350
- **Replace inducer (draft) motor:** $400–$1,200 installed — two-stage and variable-speed Amana models (AMVC, ACVC) sit toward the upper end because the inducer assembly itself is expensive

Most 9-flash calls resolve at the diagnostic or pressure-switch level, so the realistic bill is often just the service call plus a modest repair. Inducer replacement is the top of the range and the least common fix.

## Related codes

- **Amana Furnace 2 Flashes: Pressure Switch Stuck Closed Fix** — switch closed when it should be open.
- **Amana Furnace 3 Flashes: Pressure Switch Stuck Open Fix** — low/main stage pressure switch failed to close (compare directly with this code).
- **Amana Furnace 1 Flashes: Ignition Lockout Fixes** — related draft and combustion faults.
- **Amana Furnace 4 Flashes: Open Thermal Protective Device (Limit or Rollout) Fix** — covers the high-limit switch and, on many boards, the rollout switch; a rollout trip is an emergency, shut the furnace off and call a technician.
