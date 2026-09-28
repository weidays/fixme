---
title: "Trane Furnace Blower Won't Shut Off: Causes & Fixes"
code: "Blower won't shut off"
description: "Trane furnace blower runs constantly? Causes include thermostat fan settings, a stuck limit switch or bad control board, plus fixes and repair costs."
brand: trane
equipment: furnace
severity: diy
costRange: "$0 DIY thermostat fix – $600 if the control board needs replacement"
appliesTo: "Most Trane gas furnaces including XR, XC, XV, S9 and XL series with integrated furnace control (IFC) boards; fan behavior varies by board and thermostat wiring."
tags:
  - trane
  - furnace
  - blower
  - fan-wont-stop
  - thermostat
parts:
  - name: "Furnace air filter"
    search: "trane furnace air filter 16x25x1"
  - name: "Thermostat batteries"
    search: "AA alkaline batteries"
  - name: "Programmable thermostat"
    search: "honeywell programmable thermostat"
datePublished: 2026-09-28
dateModified: 2026-09-28
reviewedBy: ""
faq:
  - q: Is it bad if my Trane furnace blower never shuts off?
    a: Continuous airflow isn't dangerous on its own, but a blower that won't stop even in the AUTO fan mode usually points to a stuck relay, limit switch, or control board that needs attention.
  - q: Why does my blower keep running after the heat stops?
    a: A short post-heat fan run of 60 to 180 seconds is normal cooldown behavior. If it runs indefinitely, check whether the thermostat fan is set to ON, then look at the limit switch or control board.
  - q: Can I fix a blower that won't shut off myself?
    a: You can fix it yourself if it's the thermostat fan setting or dead thermostat batteries. Stuck limit switches, relays, and control boards are inside the cabinet and require a technician.
---

## What this code means

A blower that won't shut off isn't a flash-code fault like Trane's numbered LED sequences — it's a behavior, not a lockout. Your indoor blower motor keeps circulating air even when the furnace isn't calling for heat, and the fan won't cycle off the way it should.

On a Trane gas furnace, the integrated furnace control (IFC) board manages the blower. After a heat cycle, the board runs the blower for a timed cooldown (commonly 60–180 seconds depending on the board's setting) and then shuts it off. If the blower runs continuously — through and past that window — the cause is almost always one of three things: the thermostat is telling it to run, a safety switch is holding it on, or the control board itself is stuck.

There is no lockout to "reset" here in most cases. The blower keeps running until the underlying signal or fault is corrected. If a limit switch is holding the blower on because of an overheat condition, that is a real safety response and should not be ignored.

## Common causes, ranked by probability

1. **Thermostat fan set to ON instead of AUTO.** By far the most common reason. In ON mode the blower runs 24/7 by design. This is not a fault — it's a setting.
2. **Thermostat wiring or a failing thermostat holding the G (fan) signal.** A stuck G terminal or a glitchy thermostat can keep the fan energized. Dead thermostat batteries can also cause erratic signaling on battery-powered models.
3. **Open high-limit switch from an overheat condition.** Trane furnaces run the blower continuously when the limit switch trips to purge heat from the heat exchanger. A dirty filter or blocked airflow is the usual trigger — the blower runs to protect the furnace.
4. **Stuck blower relay or fan-on relay on the control board.** The relay contacts weld or stick closed, so the board can't de-energize the blower.
5. **Failed integrated furnace control (IFC) board.** The board's blower timing or logic fails and it never drops the blower output.

Trane doesn't publish a single ranked troubleshooting order for this behavior because it isn't a coded fault — the ranking above reflects how often each cause turns up in the field, easiest and most common first.

## Safe checks before you call anyone

- **Check the thermostat fan setting.** Set it to **AUTO** (not ON) and wait a few minutes. If the blower stops after the cooldown window, you're done — this is the #1 fix.
- **Replace thermostat batteries.** If your thermostat uses AA/AAA batteries, weak batteries can cause erratic fan behavior. Swap in fresh ones.
- **Check and replace the air filter.** A clogged filter causes overheating that trips the limit switch and forces continuous blower operation. Replace a dirty filter with the correct size.
- **Make sure supply and return registers are open.** Blocked airflow overheats the furnace and can hold the blower on. Open closed vents and clear anything covering returns.
- **Cycle the furnace breaker or switch once.** Turn the furnace switch or breaker off for 30 seconds, then back on. If a temporary glitch caused it, this may clear it. Do this once — repeated cycling won't fix a hardware fault.

If the blower still won't shut off after these checks, the problem is inside the cabinet and it's technician work.

## How a technician will diagnose it

- **Confirm the thermostat call.** They'll verify whether the G (fan) terminal is actually energized and whether the thermostat or wiring is holding it on.
- **Check the high-limit switch.** With a multimeter, they'll test whether the limit is open (tripped from overheat) and investigate why — restricted airflow, a failing blower motor, or a cracked heat exchanger.
- **Test the blower relay on the control board.** They'll check whether the fan-on relay contacts are stuck closed.
- **Inspect the IFC board.** If the thermostat, wiring, and limit all check out but the board still outputs to the blower, the board is the culprit.
- **Verify airflow and motor condition.** They'll confirm the blower motor and its capacitor are healthy, since a struggling motor can also trip the limit.

A good tech confirms the actual cause before quoting a board — thermostat and limit issues are far cheaper and more common.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Blower runs constantly, heat works fine | Thermostat fan set to ON | Switch fan to AUTO | None needed |
| Blower behaves erratically, no display | Dead thermostat batteries | Replace batteries | Replace thermostat if faulty |
| Blower runs after every heat cycle indefinitely | Stuck G signal / thermostat fault | Set to AUTO; verify thermostat | Repair wiring or replace thermostat |
| Blower runs hard, air feels weak | Overheat tripping limit (dirty filter) | Replace filter, open vents | Test limit switch, check motor/airflow |
| Blower never stops even with thermostat off | Stuck blower relay | Cycle breaker once | Replace relay or control board |
| Blower runs, board acts glitchy | Failed IFC board | Cycle breaker once | Replace integrated furnace control board |

## Repair costs

| Fix | Typical US cost |
|---|---|
| Thermostat set to AUTO / battery swap | $0 DIY |
| Air filter replacement | $15 – $40 DIY |
| Replacement thermostat | $30 – $250 part, $100 – $300 installed |
| High-limit switch replacement | $150 – $400 installed |
| Blower relay / control board relay | $200 – $500 installed |
| Integrated furnace control (IFC) board | $400 – $600+ installed |
| Blower motor (if failing) | $400 – $800 installed |

The thermostat setting fix is free and resolves most cases. Board and motor replacements are the high end and are genuinely technician work — get a diagnosis confirming the specific failed part before approving a board swap.

## Related codes

- **Trane Furnace 4 Flashes: Open Limit Circuit Causes & Fixes** — if an overheat is forcing your blower on, the same limit switch may throw this code.
- **Trane Furnace Blowing Cold Air: Causes, Fixes & Costs** — related if the blower runs but the air isn't warm.
- **Trane Furnace Short Cycling: Causes, Fixes & Costs** — overlapping airflow and control-board issues.
- **Trane Furnace Keeps Shutting Off: Causes & Fixes** — the opposite problem, often sharing a root cause in airflow or the limit circuit.
