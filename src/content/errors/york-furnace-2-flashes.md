---
title: "York Furnace 2 Flashes: Pressure Switch Stuck Closed"
code: "2 flashes"
description: "York furnace 2 flashes means the pressure switch is closed with the inducer off. Causes, safe checks, and $0–$400 repair costs."
brand: york
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $400 if the pressure switch or wiring is replaced"
appliesTo: >
  Most York single- and two-stage gas furnaces with an integrated control
  board that uses LED flash-code diagnostics (including many G9, TG/TM, and
  Affinity/LX series boards). Flash-code legends vary by board revision —
  always confirm against the legend printed on your control board or the
  door label, as some boards use a different count for this fault.
tags:
  - york
  - furnace
  - pressure-switch
  - error-code
  - control-board
parts: []
datePublished: 2026-09-23
dateModified: 2026-09-23
reviewedBy: ""
faq:
  - q: Can I reset my York furnace myself after 2 flashes?
    a: You may cycle power once at the breaker or furnace switch. If the 2 flashes return, stop and call a technician — the fault is inside the cabinet.
  - q: Is a York 2-flash code dangerous?
    a: It is a safety lockout, not an immediate hazard, but it means the pressure switch logic is faulty. The furnace will not fire until a pro corrects it, so treat it as a no-heat service call.
  - q: How much does it cost to fix a stuck-closed pressure switch?
    a: Expect roughly $150–$400 including parts and labor. The switch itself is inexpensive; most of the cost is diagnosis and labor at typical US service rates.
  - q: Does the 2-flash code clear on its own?
    a: On many York boards the control retries and can auto-reset if the switch opens, but a truly stuck switch will keep re-triggering the lockout until the part or wiring is repaired.
---

## What this code means

On most York gas furnaces, **2 flashes** of the control board's diagnostic LED means the **pressure switch is closed when it should be open** — specifically, the switch reads "closed" while the inducer (draft) motor is **off**.

Under normal operation the pressure switch should be open at rest, then close only after the inducer motor starts and proves adequate draft. If the board sees the switch already closed before the inducer runs, it can't verify safe venting, so it blocks the ignition sequence and posts this fault.

The two most common reasons are a **pressure switch stuck in the closed position** or a **wiring/short problem** that makes the circuit read closed. On many York boards this is a self-checking safety condition — the control may retry and auto-reset if the switch opens, but it will keep re-flagging as long as the fault is present. **Confirm the exact meaning against the legend on your control board**, since flash counts differ across board revisions.

## Common causes, ranked by probability

1. **Pressure switch stuck closed** — the switch contacts have failed or the diaphragm is stuck, so it reads closed at rest.
2. **Shorted or pinched wiring** between the pressure switch and control board, or a wire chafed against sheet metal creating a short.
3. **Incorrect or damaged pressure switch tubing** connection that holds the switch closed (rare, and internal to the cabinet).
4. **Control board fault** misreading the switch state — least common, diagnosed by elimination after the switch and wiring check out.

All of these are inside the furnace cabinet and are technician-level diagnostics.

## Safe checks before you call anyone

These are the only steps a homeowner should perform:

- **Thermostat:** Confirm it's set to Heat and the setpoint is above room temperature. Replace the thermostat batteries if it's battery-powered.
- **Air filter:** Check and replace a dirty filter. It won't clear this specific code, but a clogged filter stresses the whole system.
- **Breaker / furnace switch:** Verify the furnace breaker is on and the service switch (looks like a light switch near the unit) is on. You may **cycle power once** to attempt a reset.
- **Vents and registers:** Make sure supply and return registers are open and unobstructed.
- **Condensate line (high-efficiency models):** Check that the drain line isn't clogged or backed up, since standing water can affect switch behavior.

If **2 flashes** return after one reset, stop here. Do not open the cabinet — the remaining work involves wiring and sensors that must be handled by a professional.

## How a technician will diagnose it

A qualified tech will typically:

- Read the flash code and confirm it against the board's printed legend.
- **Measure the pressure switch at rest** with a multimeter — it should read open with the inducer off. A closed reading confirms a stuck switch.
- Inspect the **switch wiring and terminals** for shorts, chafing, corrosion, or pinched conductors against the cabinet.
- Check the **pressure switch tubing/hose** for kinks or improper routing.
- If the switch and wiring are good, test the **control board** input to rule out a board fault.
- Replace the failed component, then run a full heat cycle to confirm the switch opens and closes at the correct times.

Knowing these steps helps you sanity-check a quote — a fair one usually lists a diagnostic plus the specific part being replaced.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| 2 flashes, no heat, inducer never starts | Pressure switch stuck closed | Cycle power once; check filter/thermostat | Test switch at rest, replace stuck switch |
| Code returns immediately after reset | Shorted or pinched wiring | None — do not open cabinet | Inspect and repair/replace wiring harness |
| Intermittent 2 flashes, sometimes heats | Marginal switch or loose connection | Note when it happens | Test switch, secure terminals, replace as needed |
| 2 flashes plus condensate backup (high-efficiency) | Drain/tubing issue affecting switch | Clear a clogged condensate line if visible | Inspect tubing routing and switch |
| Everything looks normal but code persists | Control board misread | One reset attempt only | Verify board input, replace board if confirmed |

## Repair costs

Honest US ranges, parts plus labor:

- **DIY reset / filter / batteries:** $0
- **Diagnostic / service call:** $80 – $180
- **Pressure switch replacement:** $150 – $350 total
- **Wiring repair (short or chafed harness):** $120 – $300
- **Control board replacement (if confirmed faulty):** $300 – $600+

Most 2-flash calls resolve with a pressure switch or wiring repair, landing in the **$150–$400** range. Board replacement is less common and pushes the cost higher.

## Related codes

- **3 flashes** — Pressure switch open (won't close) after the inducer starts; the opposite condition from this code.
- **Inducer/draft codes** — Faults tied to the inducer motor not running or not proving draft.
- **Ignition / flame-sense codes** — Separate faults for failed ignition or lost flame signal; do not confuse these with the pressure-switch logic above.

Always match the flash count to the legend printed on your specific York control board, since counts and meanings can differ by board revision.
