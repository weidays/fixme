---
title: "Goodman Furnace Blowing Cold Air: Causes & Fixes"
code: "Blowing cold air"
description: "Goodman furnace blowing cold air? Causes include thermostat fan settings, failed ignition, flame-sensor faults & limit trips. Fixes and $0–$1,200 costs."
brand: goodman
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if the gas valve or control board needs replacement"
appliesTo: "Most Goodman gas furnaces including GMVC, GMEC, GMES, GCES, GMS8/GDS8 and GMVM series with integrated ignition control boards; exact diagnostic flash codes vary by board."
tags:
  - goodman
  - furnace
  - blowing-cold-air
  - no-heat
  - ignition
parts:
  - name: Furnace air filter
    search: furnace air filter 16x25x1
  - name: Thermostat batteries
    search: AA thermostat batteries
datePublished: 2026-09-27
dateModified: 2026-09-27
reviewedBy: ""
faq:
  - q: Why does my Goodman furnace blow cold air then shut off?
    a: This usually means the burners lit briefly but the flame sensor failed to prove flame, so the board shut the gas and the blower ran on to purge heat. A technician should clean or replace the flame sensor.
  - q: Is cold air from my furnace an emergency?
    a: Not usually, but you have no heat. If you smell gas or a burning odor, shut the furnace off, ventilate, and call your gas utility or 911 before doing anything else. Otherwise it is a safe but urgent repair.
  - q: Can a wrong thermostat setting cause cold air?
    a: Yes. If the fan is set to ON instead of AUTO, the blower runs constantly and pushes room-temperature air between heat cycles. Set the fan to AUTO and the thermostat to HEAT to rule this out first.
---

## What this code means

"Blowing cold air" is a symptom, not a single Goodman diagnostic flash code. Your furnace blower is running, but the air coming out is cool or room-temperature instead of warm. On a Goodman gas furnace, that points to one of two situations:

1. The blower is running on purpose but the burners never lit, or lit and shut down early (a no-heat/ignition problem).
2. The blower is running when it shouldn't be — usually a thermostat fan setting, or a limit switch that opened and forced the blower on to cool the heat exchanger.

Goodman's integrated control board will often store a diagnostic flash code (viewable through the sight glass on the burner door) that tells the real story. If your board is flashing a specific pattern, use the matching page in **Related codes** below — those are more precise. This page covers the general "warm-air-never-arrives" complaint and how to narrow it down.

Whether the furnace auto-resets or holds depends on *why* it's blowing cold. A single ignition miss will retry. After the allowed number of failed trials — three on most Goodman integrated controls, one on some — the board enters ignition lockout, and on most Goodman boards that lockout clears itself automatically after roughly one hour and the furnace attempts another ignition sequence. Exact trial counts and lockout behavior vary by control, so check the sequence printed on your furnace door label. The important part for you: repeatedly cutting power to "clear" a lockout is not a fix. It just restarts the same failed sequence and hides the fault from the technician. Limit-related shutdowns typically auto-reset once the furnace cools.

**Why this page is rated pro:** the two most likely causes — a fan switch left on ON and dead thermostat batteries — are genuine homeowner fixes, and you should try them first. But once those are ruled out, everything left on the list (ignition, flame sensing, limits, pressure switch, gas valve, control board) is inside the cabinet and is technician work. If the safe checks below don't restore heat, treat it as a pro job.

## Common causes, ranked by probability

Flash-code meanings differ between older single-LED Goodman boards and newer two-LED/diagnostic boards, so confirm any code you see against the legend printed on your furnace door label before relying on the cross-references below.

1. **Thermostat fan set to ON, not AUTO.** The blower runs 24/7 and moves unheated air between calls for heat. Extremely common and completely harmless.
2. **Thermostat not calling for heat / dead batteries.** Wrong mode, a wrong schedule, or a dead battery means no heat call — but the fan may still cycle.
3. **Ignition failure.** The igniter, gas valve, or ignition sequence failed, so burners never lit. The blower may still run and push cold air. (See Goodman Furnace Won't Ignite.)
4. **Flame sensor fault.** Burners light, then the board can't prove flame within a few seconds and shuts off gas — the blower then purges cold air. (See Goodman Furnace 1 Flash and 7 Flashes, if those patterns match your door label.)
5. **Dirty filter or restricted airflow tripping the high-limit.** Overheating opens the limit switch, cutting the burners while the blower keeps running to cool things down. (See Goodman Furnace 4 Flashes.)
6. **Pressure switch / inducer fault.** If the board can't prove venting, it won't allow ignition; the fan may still cycle. (See Goodman Furnace 2 & 3 Flashes.)
7. **Failed control board or gas valve.** Less common, but a bad board or valve can run the blower without ever firing the burners.

## Safe checks before you call anyone

> **Safety first:** If you smell gas or a burning odor anywhere near the furnace, stop. Do not flip switches, reset breakers, or restart the unit. Shut the furnace off if you can do so safely, leave the doors and windows open on your way out, get everyone outside, and call your gas utility or 911 from outside the house. A cold-air complaint often goes with failed ignition, which can mean unburned gas in the cabinet. Come back to this list only after the utility clears the house.

These are the only steps a homeowner should do. Everything else is technician work.

- **Set the fan to AUTO.** On the thermostat, switch the fan from ON to AUTO. If the cold air stops between heat cycles, you're done.
- **Confirm the thermostat is in HEAT** and the setpoint is above room temperature.
- **Replace thermostat batteries** if it uses them, then wait a full heat cycle.
- **Check and replace the air filter.** A clogged filter can overheat the furnace and trip the limit, causing exactly this symptom. Slide in a clean filter of the correct size.
- **Check the breaker.** Make sure the furnace breaker hasn't tripped; reset it once if it has.
- **Check the furnace switch.** The wall-style switch near the unit should be ON.
- **Look at supply vents and registers.** Make sure they're open and unblocked so the furnace isn't overheating from restricted airflow.
- **Check the condensate drain** on high-efficiency (two-pipe) models. A clogged drain can trip the pressure switch and block ignition. If you see standing water, that's a sign for the tech.
- **One reset, then stop.** If the furnace is locked out, cycle power once. If it locks out again, call a pro — do not keep resetting. On most Goodman boards the lockout will also clear on its own after about an hour, and a furnace that simply fails again after that retry needs a technician, not another reset.

## How a technician will diagnose it

A good tech will confirm the complaint and then work the sequence in order:

- **Read the flash code** at the control board's sight glass to see what the furnace last recorded, interpreted against the legend for that specific board.
- **Watch a full firing cycle:** call for heat, confirm inducer starts, pressure switch closes, igniter glows, gas valve opens, and flame is proven.
- **Test the flame sensor** microamp signal — a weak or dirty sensor is a leading cause of "lights then quits."
- **Measure the igniter and gas valve** for correct operation.
- **Check the high-limit and rollout switches** and the airflow (filter, blower wheel, ductwork) if the limit is tripping.
- **Verify pressure switch and inducer** operation and inspect the vent and condensate drain on 90%+ units.
- **Test the control board** outputs only after ruling out the components above.

If a tech quotes a board or gas valve replacement without first showing you a flame-sensor or ignition test, ask them to justify it.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Cold air only between heat cycles | Fan set to ON | Switch fan to AUTO | None |
| No heat call at all | Thermostat mode/batteries | Set to HEAT, replace batteries | Verify thermostat wiring |
| Burners light then shut off, blower runs cold | Dirty/failed flame sensor | None — call a pro | Clean or replace flame sensor |
| Igniter glows, no flame | Ignition/gas valve failure | One reset, then stop | Test igniter, valve, ignition sequence |
| Runs a while, then cold air with fan on | High-limit trip from restricted airflow | Replace filter, open vents | Inspect limit, blower, ducts |
| Never fires, fan cycles | Pressure switch / inducer fault | Check condensate drain | Test pressure switch, inducer, vent |
| Fan runs, burners never fire, no code | Failed control board or gas valve | One reset, then stop | Test board outputs and gas valve |

## Repair costs

Honest US ranges, parts and labor for a Goodman gas furnace:

- **Thermostat fan/battery fix:** $0 DIY.
- **Air filter replacement:** $10–$40 DIY.
- **Flame sensor clean or replace:** $80–$250.
- **Hot-surface igniter replacement:** $150–$350.
- **High-limit or rollout switch replacement:** $150–$400.
- **Pressure switch replacement:** $150–$350.
- **Inducer motor replacement:** $400–$1,200.
- **Gas valve replacement:** $300–$600.
- **Integrated control board replacement:** $400–$1,200. Boards for modulating and variable-speed units such as the GMVC and GMVM series sit at the high end of that range.
- **Diagnostic/service call:** $80–$180, often credited toward the repair.

Your actual cost depends on model, part availability, and local labor rates. Get an itemized quote.

## Related codes

- **Goodman Furnace Won't Ignite: Causes, Fixes & Costs** — when burners never light.
- **Goodman Furnace 1 Flash: Ignition Failure Lockout Fixes** — repeated ignition misses.
- **Goodman Furnace 7 Flashes: Low Flame Signal Fixes** — flame-sensor faults.
- **Goodman Furnace 4 Flashes: Open High-Limit Switch Fix** — overheating from restricted airflow.
- **Goodman Furnace 2 Flashes / 3 Flashes** — pressure switch stuck closed or open.
- **Goodman Furnace Short Cycling: Causes, Fixes & Costs** — if it fires but won't stay on.
- **Goodman Furnace Lockout: Causes, Fixes & Costs** — what lockout means and how to respond.

Flash-code numbering is not identical across every Goodman control, so match any pattern you see to the legend on your furnace door label before following one of these pages.
