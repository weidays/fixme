---
title: "Trane Furnace Blowing Cold Air: Causes, Fixes & Costs"
code: "Blowing cold air"
description: "Trane furnace blowing cold air? Causes from thermostat fan settings to failed ignition, flame sensor & control board, plus fixes and honest US costs."
brand: trane
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if the control board or gas valve needs replacement"
appliesTo: "Trane XR, XC, XV and S-series single, two-stage and modulating gas furnaces with an integrated furnace control (IFC) board; behavior varies by ignition type and board diagnostics."
tags:
  - trane
  - furnace
  - blowing-cold-air
  - no-heat
  - ignition
parts:
  - name: "Pleated furnace air filter"
    search: "16x25x1 pleated furnace air filter merv 11"
  - name: "Thermostat AA batteries"
    search: "aa alkaline batteries thermostat"
datePublished: 2026-09-25
dateModified: 2026-09-25
reviewedBy: ""
faq:
  - q: "Why does my Trane furnace blow cold air then shut off?"
    a: "This usually means the furnace lit but the flame sensor didn't confirm flame, so the board dropped the gas valve and the blower is purging warm-then-cold air before lockout."
  - q: "Is it normal for cold air to blow at the start of a heating cycle?"
    a: "A brief cool draft is normal while the heat exchanger warms up, but if the air never gets warm within a minute or two, the furnace is not sustaining a burn and needs attention."
  - q: "Can my thermostat cause the furnace to blow cold air?"
    a: "Yes. A fan setting left on ON instead of AUTO makes the blower run constantly, moving unheated air between burns. Switch to AUTO and confirm the mode is set to Heat."
---

## What this code means

"Blowing cold air" is not a single flash code on a Trane furnace — it's a symptom that can point to several different conditions on the integrated furnace control (IFC) board. Your furnace's blower is running, but the air coming from the registers is room-temperature or colder than the air you want.

The most important distinction is *when* the cold air happens:

- **Cold air at the very start of a cycle** (first 30–90 seconds) is normal. The blower is designed to wait for the heat exchanger to warm before ramping up, and a short cool draft while combustion stabilizes is expected behavior.
- **Cold air the whole cycle, or warm air that turns cold and the unit shuts down**, means the furnace either isn't igniting, isn't proving flame, or the control board is running the blower without a call for heat.

If the furnace lights and then loses flame, most Trane IFC boards will store a diagnostic flash code and, after a set number of failed tries, go into **lockout that holds until power is cycled** (typically a one-hour auto-retry or a hard lockout depending on board revision). Read the LED **through the sight glass in the closed door only** — do not open the cabinet or remove the blower door to get a better look, because the door switch cuts power and you lose the code along with the running sequence. The flash pattern tells you which specific fault applies, and several of those have their own dedicated pages listed under Related codes. Flash-code meanings themselves vary by control board, so always confirm the pattern against the legend printed on your furnace's board or door label.

## Common causes, ranked by probability

1. **Thermostat fan set to ON instead of AUTO.** The blower runs continuously, so between burns it circulates unheated air. This is the single most common "cold air" complaint and is not a furnace fault at all.
2. **Failed or lockout ignition sequence.** The igniter or ignition attempt fails, so the blower runs its post-purge or the board never energizes the gas valve. This typically ends in a lockout after three failed tries, though the exact trial count and lockout behavior vary by board.
3. **Dirty flame sensor / weak flame signal.** The furnace lights but the flame rod doesn't confirm flame within the trial period, so the board closes the gas valve. You feel warm air briefly, then cold, then shutdown. (See 8 flashes / low flame sense.)
4. **Tripped high-limit or open limit circuit.** An overheating condition (often from a clogged filter or blocked airflow) opens the limit switch, cutting gas but leaving the blower running to cool the exchanger — pushing cold air. (See 4 flashes.)
5. **Pressure switch / inducer fault.** If the board can't prove proper venting, it won't allow ignition, so the blower may run on a fan call while no heat is produced. (See 3 flashes / pressure switch open.)
6. **Control board (IFC) fault or miswired thermostat.** A failing board or crossed W/G wiring can energize the blower without initiating heat.
7. **Gas valve circuit error.** If the valve isn't opening on command, the furnace goes through the motions but never produces heat. (See 7 flashes.)

## Safe checks before you call anyone

These are the only checks a homeowner should perform:

- **Thermostat:** Confirm the mode is set to **Heat** and the setpoint is above room temperature. Set the fan to **AUTO**, not ON — this alone fixes many cold-air complaints.
- **Thermostat batteries:** If your thermostat uses batteries, replace them. A low-battery thermostat can drop the heat call intermittently.
- **Air filter:** Pull the filter and hold it to the light. If it's gray and blocked, replace it. A clogged filter starves airflow, trips the limit, and produces cold-air-then-shutdown cycling.
- **Breaker / switch:** Check the furnace breaker and the on/off switch (looks like a light switch) near the unit. If the breaker is tripped, reset it once.
- **Supply and return vents:** Walk the house and make sure supply registers and return grilles are open and unobstructed by furniture or rugs.
- **Condensate line (condensing / 90%+ models only):** If your furnace has a clear drain line and a condensate trap, check that the line isn't clogged and that a float switch hasn't tripped — a full trap can stop the furnace from firing. Standard-efficiency (80%) furnaces have no condensate drain, so this check doesn't apply to them.
- **One reset:** If the unit is locked out, you may cycle power at the switch or breaker **once**. If it locks out again, stop and call a technician — do not keep resetting.

Do **not** open the furnace cabinet, clean the flame sensor, test wiring, or bypass any safety switch. Those are technician tasks.

## How a technician will diagnose it

A qualified tech will:

1. **Read the LED flash code** on the IFC board and pull any stored fault history.
2. **Watch a full heat cycle** to see exactly where it fails — no ignition, ignition then flame loss, or blower running with no heat call.
3. **Measure the flame signal** in microamps against Trane's spec; a low reading points to a dirty flame sensor or grounding issue.
4. **Test the igniter** for continuity and resistance if ignition never occurs.
5. **Check the pressure switch and inducer** for proper vacuum and venting.
6. **Verify limit switch operation** and inspect airflow if overheating is suspected.
7. **Confirm gas valve operation** and voltage at the valve during the ignition trial.
8. **Verify thermostat wiring** at the board to rule out a crossed W/G connection, and confirm correct line-voltage polarity and grounding at the furnace.

Sanity-check any quote against these steps — a tech should identify the *specific* fault (flame sense, ignition, limit, board) rather than replacing parts blindly.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Cold air only for first minute, then warm | Normal blower delay | None needed | None |
| Blower runs constantly, air never warm | Fan set to ON | Switch thermostat fan to AUTO | Verify board fan settings if issue persists |
| Warm air briefly, then cold, then shutdown | Weak/dirty flame sensor | One reset only | Clean or replace flame sensor, test microamps |
| Igniter glows but no flame, then cold air | Ignition/gas valve fault | One reset only | Test igniter, gas valve, ignition sequence |
| Cold air with dirty filter | Limit trip from low airflow | Replace filter | Test limit switch, inspect blower & ductwork |
| Blower on, inducer not running | Pressure switch / inducer | On condensing (90%+) furnaces only, check the condensate line and trap — a full trap or tripped float switch can block the sequence. On 80% furnaces there is nothing for you to check here. | Test pressure switch, inducer motor, venting |
| Repeated lockouts after resets | Board or gas valve fault | Stop resetting, call pro | Diagnose IFC board and gas valve circuit |

## Repair costs

| Repair | Typical US cost (parts + labor) |
|---|---|
| Thermostat setting / battery fix | $0 DIY |
| Air filter replacement | $15 – $40 DIY |
| Flame sensor clean or replace | $80 – $250 |
| Hot surface igniter replacement | $150 – $350 |
| Pressure switch replacement | $150 – $350 |
| Limit switch replacement | $150 – $400 |
| Gas valve replacement | $350 – $800 |
| Integrated furnace control (IFC) board | $400 – $1,200 |
| Diagnostic / service call | $90 – $180 |

Costs vary by region, model, and whether your furnace is single-stage, two-stage, or modulating. Modulating and communicating XV/XC boards and two-stage or modulating gas valves tend to cost more than XR-series parts, so board and valve jobs on those units routinely land at the top of the ranges above — a $900–$1,200 board quote on a communicating furnace is not automatically out of line.

## Related codes

- **Trane Furnace 3 Flashes: Pressure Switch Error Fixes** — if cold air is from a venting/pressure-switch fault (pressure switch open / inducer). This is a different fault from a pressure switch stuck closed, which flashes a different pattern and needs a different repair.
- **Trane Furnace 4 Flashes: Open Limit Circuit Causes & Fixes** — overheating and airflow-related cold-air cycling.
- **Trane Furnace 5 Flashes: Flame Sensed Without Gas** — abnormal flame-proving behavior.
- **Trane Furnace 7 Flashes: Gas Valve Circuit Error Fixes** — furnace runs but never produces heat.
- **Trane Furnace 8 Flashes: Low Flame Sense Signal Fix** — the classic warm-then-cold flame-loss pattern.
- **Trane Furnace 9 Flashes** — the meaning of this pattern genuinely varies by control board. Some boards use 9 flashes for an igniter circuit problem (no ignition, blower runs cold); many Trane and American Standard boards using the common White-Rodgers-style diagnostic set use 9 flashes for reversed 115V line polarity or a missing ground. Check the flash-code legend printed on your own board or door label before assuming which fault you have, and have a technician confirm polarity and grounding before anyone replaces an igniter.
