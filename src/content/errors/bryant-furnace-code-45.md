---
title: "Bryant Furnace Code 45: Control Circuitry Lockout Fixes"
code: "Code 45"
description: "Bryant Furnace Code 45 means a control circuitry lockout from flame-sense, software or gas-valve relay faults. Causes, fixes and $0–$1,200 costs."
brand: bryant
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $1,200 if the control board is replaced"
appliesTo: >
  Bryant 80% and 90%+ gas furnaces with microprocessor control boards (e.g. Plus 80, Preferred and Evolution series). Flash-code legends can vary by board revision; confirm against the label inside your furnace door.
tags:
  - bryant
  - furnace
  - control-board
  - lockout
  - flame-sense
parts: []
datePublished: 2026-09-16
dateModified: 2026-09-16
reviewedBy: ""
faq:
  - q: Does Bryant Code 45 reset on its own?
    a: Yes. Code 45 is a soft lockout that auto-resets after about 1 hour, or immediately if you cycle power. If it returns, the board usually needs replacement.
  - q: Is Code 45 dangerous?
    a: It is not an immediate safety hazard like a gas leak, but the furnace will not run reliably. It points to the control board, so plan a professional diagnosis.
  - q: Can I fix Code 45 myself?
    a: You can try one power-cycle reset and rule out a tripped breaker or switch. The circuit itself is inside the cabinet, so board and flame-sense work is technician territory.
  - q: How much does a Bryant control board cost?
    a: Expect roughly $400 to $1,200 installed for a Bryant furnace control board, depending on model and local labor rates. Basic single-stage 80% boards sit near the low end, while variable-speed and communicating boards (such as those used in Evolution systems) land at the top of the range.
---

## What this code means

Bryant Furnace **Code 45** is a **Control Circuitry Lockout**. The control board has detected a fault in the control circuitry and shut the furnace down to protect it. According to Bryant's documentation, this lockout is triggered by one of three things:

- a **flame-sense circuit failure**,
- a **software self-check error**, or
- a **stuck gas-valve relay** on the control board.

Note that the flame-sense *circuit* means more than the board alone — it includes the flame sensor, its lead wire, and the connectors that carry the signal back to the board, all of which a technician will check before condemning a part.

This is a **soft lockout**: it **auto-resets after about 1 hour**, or immediately if you cycle power to the furnace. A one-time event can be a harmless glitch. But if Code 45 **repeats**, the fault is almost always the control board itself, and replacing the board is the usual fix.

Because the fault lives inside the control circuitry — not in the gas supply, igniter, or venting — this is **pro-level** work. Do not confuse it with ignition or flame-proving codes.

## Common causes, ranked by probability

1. **Failing control board (flame-sense circuit failure).** The most common repeat cause. The board's flame-sensing circuitry has degraded and can no longer read flame current correctly.
2. **Stuck gas-valve relay on the control board.** An internal relay that should switch the gas valve has stuck or is failing, tripping the self-protection lockout.
3. **Software / self-check error.** The board's microprocessor failed an internal check. A single occurrence may clear on reset; recurring errors indicate the board is failing.
4. **Power quality issues / transient event.** A brownout, surge, or momentary loss of power can trigger a one-time lockout that clears and never returns.

If the code returns after a clean reset, treat the **control board as the fix** rather than chasing individual sub-causes.

## Safe checks before you call anyone

These are the only steps a homeowner should perform:

- **Cycle power once.** Turn the furnace switch (or its dedicated breaker) off, wait 30 seconds, and turn it back on. This is your **single allowed reset** — do not repeat resets on a locked-out unit.
- **Check the thermostat.** Confirm it's set to **Heat**, the temperature is above room temperature, and replace the **batteries** if it's battery-powered.
- **Check the breaker.** Make sure the furnace breaker hasn't tripped and the service switch on/near the furnace is **On**.
- **Confirm the basics are clear.** A dirty filter, blocked supply/return grilles, or a clogged condensate line (90%+ furnaces) won't cause Code 45, but sorting them out first removes them from the conversation before a tech arrives.

If Code 45 returns after your single reset, **stop and call a licensed HVAC technician**. Anything inside the cabinet — flame sensor, wiring, relays, the board — is not a DIY repair.

## How a technician will diagnose it

A qualified tech will typically:

1. **Read the fault history** from the board's flash codes and confirm Code 45 is current, not a stale stored code.
2. **Verify incoming power and grounding**, since poor ground or low voltage can imitate control faults.
3. **Measure flame-sense (microamp) current** with a meter during a call for heat to see whether the sensing circuit is reading correctly.
4. **Check the gas-valve relay operation** on the board, confirming it energizes and de-energizes on command.
5. **Inspect wiring harness and connectors** to the valve and flame sensor for corrosion or loose pins that could confuse the board.
6. **Replace the control board** if the self-check, flame-sense circuit, or relay is confirmed faulty — the manufacturer-documented remedy for a repeating Code 45.

Sanity check: if a tech quotes a board replacement, that's consistent with Bryant's own guidance for a recurring Code 45. A quote to replace a gas valve or igniter alone, with no board testing, deserves a second look.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Code 45 flashes once, furnace resumes after ~1 hour | Transient/software glitch or power event | Cycle power once; monitor | Read stored codes, confirm no repeat fault |
| Code 45 returns after reset | Failing control board (flame-sense circuit) | None — call a pro | Test flame-sense current, replace board |
| Furnace won't fire, no gas valve action | Stuck gas-valve relay on board | None — call a pro | Verify relay operation, replace board |
| Intermittent lockouts during storms/brownouts | Power quality / transient | Check breaker, ensure clean power | Verify grounding, consider surge protection |
| Lockout with corroded/loose connectors | Wiring or connector fault feeding the circuit | None — call a pro | Inspect and repair harness/connectors |

## Repair costs

Honest US ballpark ranges (parts + labor vary by region and model):

- **Diagnostic / service call:** $90 – $180
- **Control board replacement (most common fix):** $400 – $1,200 installed — basic single-stage 80% boards sit near the low end, while variable-speed and communicating boards (such as those used in Evolution systems) land at the top of the range
- **Wiring/connector repair:** $120 – $300
- **DIY items you can handle yourself** (filter, thermostat batteries): $10 – $40

A single power-cycle reset costs **$0**. If the code repeats, budget for a board — that's the documented long-term fix.

## Related codes

Flash-code legends vary by board revision, and the 40-series numbering below matches common Carrier/Bryant variable-speed boards — on some older or 80% single-stage boards it differs. Confirm against the label inside your furnace door before assuming a match.

- **Code 34 — Bryant Furnace Code 34: Ignition Proving Failure Fixes** (flame-proving faults, which are distinct from a control-circuit lockout)
- **Code 41 — Bryant Furnace Code 41: Blower Motor Fault Fixes**
- **Code 42 — Bryant Furnace Code 42: Inducer Motor Fault Fixes**
- **Code 44 — Bryant Furnace Code 44: Blower Calibration Fault Fixes**
- **Code 33 — Bryant Furnace Code 33: Meaning, Causes & Fixes**
