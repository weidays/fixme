---
title: "York Furnace 7 Flashes: Ignition Lockout Causes & Fixes"
code: "7 flashes"
description: "York furnace 7 flashes usually means ignition lockout after failed trials. Causes, safe checks, fixes and repair costs from $0 DIY to $1,200+."
brand: york
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200+ if the igniter, gas valve or ignition control board needs replacement, plus diagnostic"
appliesTo: >
  York single- and two-stage gas furnaces (Affinity, LX, Latitude and comparable
  Johnson Controls-built units) using an integrated ignition control board that
  flashes diagnostics on an LED. Some boards label this as "ignition lockout" or
  "failed to light"; flash-count legends vary between board generations, so always
  confirm the count against the legend printed on the blower-door label.
tags:
  - york
  - furnace
  - ignition-lockout
  - no-heat
  - lockout
parts:
  - name: Furnace air filter
    search: furnace air filter 16x25x1
  - name: Thermostat batteries
    search: AA alkaline batteries
datePublished: 2026-09-23
dateModified: 2026-09-23
reviewedBy: ""
faq:
  - q: What does 7 flashes mean on a York furnace?
    a: On the York boards that use this legend, 7 flashes is ignition lockout — the furnace tried to light the burners the allowed number of times, never proved flame, and shut down. Flash legends differ between York board generations, so confirm the count against the legend on the blower-door label before acting on it.
  - q: Will the York furnace reset itself after 7 flashes?
    a: It depends on the control. Documented behavior for this code is a one-hour lockout, after which the board resets and retries — but some York controls hold lockout until power is cycled and will not auto-retry. You can force a reset once at the switch or breaker, but do not reset repeatedly.
  - q: Can I fix a 7-flash ignition lockout myself?
    a: You can rule out a dirty filter, closed vents, bad thermostat batteries and do one reset. Igniter, flame sensor, gas valve and board work is for a licensed technician.
  - q: Is a York furnace ignition lockout dangerous?
    a: The lockout itself is a safety feature that stops the furnace from releasing gas without ignition. If you smell gas, stop, leave the house, and call your gas utility or 911 from outside — do not reset the furnace.
---

## What this code means

**First, confirm the legend.** York flash-code legends differ between board generations, and the same fault can carry a different count on another control. Read the diagnostic legend printed on the blower-door label (or inside the burner-compartment door) before you act on a count. Some York controls use a different flash count for ignition lockout, and their lockout/retry behavior is not identical.

On York (Johnson Controls) controls that use this legend, seven flashes means **ignition lockout**: the furnace attempted to light the burners for the maximum number of trials allowed and never proved a flame. To stop unburned gas from building up, the board shuts the gas valve and locks out.

The documented behavior for this code is a **one-hour lockout, after which the board resets and retries**. That is not universal across York controls — some hold lockout until power is cycled and do not auto-retry. Check the label legend and the sequence-of-operation on the wiring diagram for your specific furnace. Either way, if the same fault repeats, it will lock out again. You can clear it once immediately by cycling power — but repeated manual resets just dump more gas into a furnace that can't light it, so don't do that.

This is a **flame-proving** failure — the furnace tried and failed to establish and confirm combustion. Because the fix almost always lives inside the cabinet, this is rated **pro**.

## Common causes, ranked by probability

1. **Weak or cracked hot-surface igniter** — the most common cause. The igniter ages, its resistance drifts, and it no longer gets hot enough to light gas within the trial period.
2. **Dirty or misaligned flame sensor** — the burner lights but the board can't "see" a stable flame, so it counts the trial as a failure and eventually locks out.
3. **Low or interrupted gas delivery to the burners** — closed manual gas cock, a failing gas valve, or a clogged burner orifice prevents a clean light.
4. **Bad ground / poor flame-rectification** — a loose burner-ground or control-board ground connection stops the flame signal from being read even when the burner is lit.
5. **Faulty gas valve or valve wiring** — the valve doesn't open on command, so there is no gas to ignite.
6. **Failing ignition control board** — the board mis-sequences ignition or misreads the flame signal, tripping lockout with an otherwise healthy furnace.

A dirty filter or restricted airflow won't directly cause this lockout, but it can trip other faults first — always rule airflow out.

## Safe checks before you call anyone

> **If you smell gas at any point: stop. Do not touch switches or the breaker, do not reset the furnace. Leave the house and call your gas utility or 911 from outside.** A furnace that has been trying and failing to light is exactly the situation where unburned gas can be present, and the one permitted reset is the moment a homeowner is most likely to ignore a gas odor.

With no gas odor present, these are the only steps a homeowner should take on a locked-out furnace:

- **Thermostat:** confirm it's set to Heat and the setpoint is above room temperature. Replace the batteries if it's battery-powered.
- **Air filter:** if it's dirty, replace it. A clean filter rules out an airflow-driven nuisance fault.
- **Breaker / furnace switch:** make sure the furnace breaker is on and the service switch (looks like a light switch near the furnace) is on.
- **Vents and registers:** confirm supply and return registers are open and unblocked.
- **Condensate (high-efficiency models):** check for a full or clogged condensate line/pan, which can trip related lockouts.
- **One reset — only if there is no gas smell:** cycle the furnace switch off for 30 seconds, then on — or wait out the lockout period if your control auto-retries. **Do this only once.** If it locks out again, stop and call a pro.

Do **not** open the burner compartment, clean the flame sensor, jumper any switch, or open the gas valve. That's technician work.

## How a technician will diagnose it

A licensed tech will read the flash code against the legend on the door label, then watch a full ignition sequence and measure it:

- Confirm the lockout on the board and check for any stored history.
- **Test the hot-surface igniter** with a meter — checking resistance and whether it glows to temperature.
- **Verify gas supply and valve operation** — manual cock open, correct inlet and manifold pressure, valve opening on the ignition call.
- **Clean or replace the flame sensor** and measure the **microamp flame-rectification signal** during a light attempt. The minimum acceptable flame current is printed on the furnace wiring diagram and varies by control, so the reading has to be compared against that furnace's own spec.
- **Check burner and control grounds**, wiring harness continuity, and connector integrity.
- **Inspect burners and orifices** for debris or misalignment.
- If the sequence is correct and all inputs are good but lockout persists, **replace the ignition control board**.

A good quote should name what actually failed — "the igniter measured open," or "the flame signal measured below the minimum listed on the wiring diagram" — not just "it needs a board."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Igniter glows, no flame | Weak igniter or no gas at burner | Replace filter, do one reset | Test/replace igniter, check gas valve & pressure |
| Burner lights briefly then drops out | Dirty flame sensor / bad ground | One reset only | Clean/replace sensor, measure microamps, fix ground |
| No igniter glow at all | Failed igniter or board output | Confirm breaker/switch on | Test igniter circuit, replace igniter or board |
| Locks out repeatedly, retries | Repeating ignition failure | Stop resetting, call pro | Full sequence diagnosis and repair |
| Furnace worked, now dead after cold snap | Aged igniter near end of life | One reset, replace filter | Replace hot-surface igniter |
| Lockout with error but flame looks fine | Weak flame signal / board fault | None | Measure rectification, replace sensor or board |

## Repair costs

Honest US ranges, parts and labor:

- **DIY airflow/battery/reset:** **$0–$30** (filter and batteries only).
- **Hot-surface igniter replacement:** **$150–$350** installed — the most common fix.
- **Flame sensor clean or replace:** **$100–$250** (often bundled with a diagnostic).
- **Gas valve replacement:** **$400–$900+** installed, including diagnostic time and labor.
- **Ignition control board:** **$400–$1,200** installed for a York integrated control.
- **Diagnostic / service call:** **$90–$180**, often credited toward the repair.

Age matters: on a 12–15+ year old furnace with a failing igniter and marginal board, weigh repair cost against replacement.

## Related codes

Flash-count meanings vary by York board generation — read the legend on your blower-door label rather than assuming a count matches another furnace or another brand's chart.

- **York Furnace 2 Flashes** — meaning varies by board; check the door-label legend.
- **York Furnace 3 Flashes** — meaning varies by board; check the door-label legend.
- **York Furnace 4 Flashes: Open Limit Switch Causes & Fixes**
- **York Furnace 5 Flashes** — meaning varies by board; check the door-label legend.
- **York Furnace 6 Flashes** — meaning varies by board; check the door-label legend.
