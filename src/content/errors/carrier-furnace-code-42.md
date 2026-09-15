---
title: "Carrier Furnace Code 42: Inducer Motor Fault & Fixes"
code: "Code 42"
description: "Carrier Furnace Code 42 means an inducer motor fault. Learn the causes, safe checks, technician diagnosis and repair costs from $0 DIY to $1,200."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if the inducer assembly or control board needs replacement"
appliesTo: "Carrier variable-speed and two-stage condensing furnaces (e.g. Infinity/Performance 58- and 59-series) with ECM/variable-speed inducer control boards. On some single-stage boards inducer faults report under different codes; confirm the legend on your control-board label."
tags:
  - carrier
  - furnace
  - code-42
  - inducer-motor
  - error-code
parts: []
datePublished: 2026-09-15
dateModified: 2026-09-15
reviewedBy: ""
faq:
  - q: Is Carrier Code 42 dangerous?
    a: It is not an immediate safety hazard, but the furnace will not fire without a working inducer, so you'll have no heat until it's repaired by a technician.
  - q: Can I fix Code 42 myself?
    a: Homeowner steps are limited to a thermostat check, filter, and one breaker reset. The inducer motor and control board are inside the cabinet and require a technician.
  - q: Does Code 42 reset on its own?
    a: On many Carrier variable-speed boards the control retries the inducer and clears the fault once a valid speed is confirmed. If it repeats, it holds and needs service. Exact retry and lockout behavior varies by board revision.
  - q: How much does an inducer motor cost to replace?
    a: Expect roughly $400 to $1,200 installed for a Carrier inducer assembly, depending on model, part availability and local labor rates. The ECM/variable-speed inducer assemblies used on the condensing furnaces this code applies to sit at the high end of that range — the part alone often runs $350 to $700 before labor, so a quote near $900 can be entirely legitimate.
---

## What this code means

Carrier Furnace **Code 42** is an **Inducer Motor Fault**. On variable-speed and two-stage condensing control boards, the furnace commands the inducer (draft) motor to spin up at the start of a heat call. The board watches the inducer's actual speed feedback. If the inducer **does not start**, or runs **outside its valid speed range** (too slow, too fast, or unstable), the board flags Code 42 and will not proceed to ignition.

The inducer pulls combustion air through the heat exchanger and pushes exhaust out the flue. Because it also creates the vacuum the pressure switch needs to close, a bad inducer stops the whole ignition sequence — no inducer, no burner.

Exact retry and lockout behavior varies by board revision, so treat the following as typical rather than universal: on many Carrier variable-speed boards the control will **retry** the inducer and clear the fault automatically once a valid speed is confirmed, and if the problem persists across retries the board may hold the fault and stop calling for heat until power is cycled. Check the troubleshooting legend printed inside your furnace's blower door for the behavior your specific board uses.

> Note: Code 42 is specific to the inducer motor and its feedback circuit. It is **not** a gas-supply, flame-proving or ignition-timing problem — those are covered by other codes listed at the bottom of this page.

## Common causes, ranked by probability

1. **Failing or seized inducer motor** — worn bearings, a burned winding, or a motor that spins slowly and can't reach commanded speed. The most common cause of a repeating Code 42.
2. **Inducer speed-feedback (Hall/tach) signal fault** — the motor may spin, but the board can't read a valid speed signal due to a bad sensor or connector.
3. **Loose, corroded or damaged wiring/connector to the inducer** — intermittent contact makes the motor start and stop or report erratic speed.
4. **Debris, ice, or blockage in the inducer wheel or flue** — a partially obstructed wheel runs out of its valid speed range even if the motor is healthy.
5. **Control board fault** — the board mis-drives the inducer or misreads good feedback. Diagnosed only after the motor and wiring are ruled out.

A note on capacitors: you may see "bad inducer capacitor" suggested online as a cheap fix. That applies only to older PSC-style inducer motors on other Carrier platforms. The ECM/variable-speed inducers this code covers generally do not use a run capacitor, so there is no inexpensive capacitor repair for these units.

Standard diagnostic practice is to confirm inducer operation and voltage first, then the feedback signal, then the wiring, and only then the control board — the ranking above follows that order. For the sequence your specific board expects, read the troubleshooting legend on the label inside your blower door.

## Safe checks before you call anyone

These are the only steps a homeowner should do. Everything inside the cabinet is technician work.

- **Check the thermostat:** confirm it's set to Heat and the setpoint is above room temperature. If it's battery-powered, install fresh batteries.
- **Inspect the air filter:** a severely clogged filter can create nuisance faults. Replace it if it's dirty.
- **Cycle the breaker once:** turn the furnace breaker off, wait 30 seconds, and back on — a single reset. If Code 42 returns, stop and call a pro.
- **Check the furnace power switch:** the light-switch-style disconnect near the furnace should be ON.
- **Look at the flue termination outside:** make sure the intake/exhaust pipes aren't blocked by snow, ice, leaves or a nest. Clear only what you can safely reach from the ground; do not disassemble anything.
- **Check the condensate drain:** a backed-up condensate line can trip a safety on condensing furnaces. If you have a visible clog or full trap and know how to clear it, do so.

Do **not** open the cabinet, test the motor, or reset the furnace repeatedly. Repeated resets on a locked-out unit are unsafe and can damage components.

## How a technician will diagnose it

A qualified tech will typically:

1. **Read stored fault history** on the control board to confirm Code 42 and see how often it's tripping.
2. **Verify line and control voltage** reaching the inducer during a heat call.
3. **Watch the inducer start-up** — listening and measuring for slow spin-up, wobble, or a motor that never reaches commanded speed.
4. **Check the speed-feedback signal** (Hall/tach) and its connector for a valid, stable reading.
5. **Inspect wiring and connectors** between the board and the inducer for corrosion, chafing or looseness.
6. **Check the inducer wheel and flue** for debris, ice, or a cracked/loose wheel.
7. **Condemn the control board** only after the motor, feedback and wiring test good.

If a quote jumps straight to "replace the board" without any of the motor and wiring checks above, it's fair to ask why.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| No heat, Code 42 flashes at start of call | Inducer not starting | Cycle breaker once; check thermostat/filter | Test voltage & feedback, replace inducer motor |
| Inducer hums or spins slowly | Failing inducer motor | None safe | Test inducer, replace inducer assembly |
| Fault appears intermittently | Loose or corroded connector | None safe | Inspect and repair inducer wiring/connector |
| Motor runs but code still trips | Bad speed-feedback signal | None safe | Test Hall/tach sensor; replace motor if faulty |
| Rattling or grinding from inducer area | Debris or damaged wheel | Clear visible flue blockage outside | Inspect and clean/replace inducer wheel |
| Code returns after all above check out | Control board fault | None safe | Confirm board driver, replace control board |

## Repair costs

Ranges are typical US installed prices; your area and model will vary.

- **Diagnostic / service call:** $90 – $180
- **Wiring or connector repair:** $120 – $300
- **Inducer motor / assembly replacement:** $400 – $1,200 installed. The **ECM/variable-speed inducer assemblies** on the condensing furnaces this code applies to are among the more expensive inducers and sit at the **high end** of that range — the part by itself frequently runs $350 – $700 before any labor. A $900 quote on this equipment is not automatically an overcharge.
- **Control board replacement:** $400 – $1,200 installed. Boards for Infinity/variable-speed platforms commonly reach the top of that range and can exceed $1,000.

There is no inducer capacitor line item here, because the variable-speed/ECM inducers covered by Code 42 generally don't use one.

DIY cost is **$0** — the only homeowner steps here (filter, batteries, breaker reset) are essentially free. Every component-level repair for Code 42 is technician work.

## Related codes

- **Carrier Furnace Code 41 — Blower Motor Fault:** the main blower's counterpart to this inducer fault.
- **Carrier Furnace Code 23 — Pressure Switch Did Not Open:** related to inducer/draft airflow proving.
- **Carrier Furnace Code 31 / Code 32 — Pressure Switch Faults:** vacuum and draft-related issues downstream of the inducer.
- **Carrier Furnace Code 33 & Code 34:** limit and ignition-proving faults that can follow if the inducer under-performs.
- **Carrier Furnace Code 14 — Ignition Lockout:** the ignition sequence that cannot start until the inducer proves good.
