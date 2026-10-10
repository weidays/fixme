---
title: "Goodman Heat Pump Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Goodman heat pump outdoor fan not spinning? Causes ranked (capacitor, motor, contactor, defrost board), safe checks, and repair costs from $0 to $900."
brand: goodman
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150-$350 for a capacitor, $400-$900 for a fan motor, $1,500+ if the compressor overheated"
appliesTo: "Goodman single-stage split heat pumps (GSZ, SSZ, GSZB series and older CPLE/CPKE/CHP units) with PSC fan motors and a defrost control board. Two-stage and variable-speed models (DSZC, GSZC, GSZV, ComfortBridge) use ECM or inverter-driven fan motors and report faults as board codes, so causes and costs differ on those units."
tags:
  - heat-pump
  - outdoor-fan
  - condenser-fan-motor
  - capacitor
  - goodman
parts:
  - name: "Pleated HVAC air filter"
    search: "16x25x1 MERV 8 pleated air filter"
  - name: "AA batteries for thermostat"
    search: "AA alkaline batteries 8 pack"
datePublished: 2026-10-10
dateModified: 2026-10-10
reviewedBy: ""
faq:
  - q: "Is it normal for my Goodman heat pump fan to stop in winter?"
    a: "Yes, for short periods. During defrost the board shuts off the outdoor fan for about 2 to 10 minutes while the coil warms, and you may see steam rising from the unit. If the fan stays off longer than about 15 minutes while the compressor hums, that is a fault."
  - q: "Can I run the heat pump with the outdoor fan not spinning?"
    a: "No. Without airflow across the outdoor coil, head pressure and compressor temperature rise fast. The compressor will trip on its internal overload and can be damaged over time. Turn the system off at the thermostat until a technician checks it."
  - q: "Can I push the fan blade with a stick to get it started?"
    a: "Don't. If the blade starts after a push, the run capacitor is almost certainly weak, but reaching into an energized unit risks serious injury from the blade and high-voltage parts. Leave the system off and tell your technician what you observed."
  - q: "Does this problem reset on its own?"
    a: "There is no stored code to clear on single-stage Goodman units. The fan runs whenever the contactor and board send it power. If the compressor tripped on its internal overload, it resets by itself once it cools, which can take an hour or more. Communicating models may log a fault on the board or thermostat that a technician reads."
---

## What this code means

"Outdoor fan not spinning" is a symptom, not a stored flash code. You see the outdoor unit humming, or the compressor running, while the large fan on top stays still. Sometimes the whole outdoor unit is silent instead.

On most single-stage Goodman heat pumps, the outdoor fan gets power through the contactor whenever the compressor runs. The defrost control board (for example the PCBDM series) turns the fan off only during defrost. A stopped fan therefore means one of three things:

- The unit is in normal defrost.
- The fan isn't getting power.
- The fan motor or its capacitor has failed.

On variable-speed and ComfortBridge models, the inverter board drives the fan and usually logs a fault code. Have a technician read the board on those units rather than relying on this page alone.

Without the fan, the compressor overheats. It trips its internal overload, cools, restarts, and trips again. That repeated cycling shortens compressor life, which is why this is rated a pro-level repair.

## Common causes, ranked by probability

1. **Normal defrost cycle (winter only).** The fan stops for a few minutes, steam rises, and the fan restarts. This is not a fault.
2. **Failed run capacitor.** This is the most common real failure. Most Goodman units use a dual capacitor shared by the compressor and fan. A weak fan side lets the motor hum without starting, or start only after a push.
3. **Failed outdoor fan motor.** Typical signs are seized bearings, an open winding, or a motor that overheats and shuts off on its internal thermal protector.
4. **Pitted or stuck contactor.** The compressor may run with the fan dead if a contact is burned. If the whole unit is dead, the contactor may not be pulling in at all.
5. **Defrost control board fault.** A failed fan relay on the board can keep the fan off, or leave the unit stuck in defrost. That second case is covered on the separate stuck-in-defrost page.
6. **Wiring problems.** Loose, burned, or rodent-chewed wires to the fan motor or capacitor can cut power to the fan.
7. **Obstruction.** Ice, sticks, or debris can jam the blade. A blade loose on the motor shaft can also stop turning while the motor runs.
8. **No power to the outdoor unit.** A tripped breaker, outdoor disconnect, or blown fuse stops both the fan and the compressor.

## Safe checks before you call anyone

- **Wait out a possible defrost (winter).** Watch for up to 15 minutes. Steam with the fan stopped, then the fan restarting, is normal.
- **Check the thermostat.** Confirm it is set to HEAT or COOL with a setpoint that calls for operation. Replace the batteries if the display is weak or blank.
- **Check the breaker.** Look for the outdoor unit's breaker in your main panel. If it has tripped, reset it once. If it trips again, leave it off and call a pro, because a repeat trip points to an electrical or motor fault.
- **Check the outdoor disconnect.** Make sure the disconnect box near the unit is fully on. Don't open or service anything inside it beyond its normal on/off handle or pull-out.
- **Look from outside the unit, with the system off.** Check for visible ice, leaves, or debris resting on top of the fan grille. Clear only what is loose on the outside. Never reach through the grille.
- **Replace a dirty indoor filter.** It won't fix the fan, but it reduces strain on the system.
- **If the fan is stopped and the unit hums, turn the system OFF at the thermostat.** This protects the compressor until a technician arrives.

## How a technician will diagnose it

1. **Confirm the call.** The tech checks for 24V at the outdoor unit and that the unit isn't in defrost. On communicating models, they read the board's fault history.
2. **Check line voltage.** They measure power at the disconnect and contactor, and check the contactor contacts for pitting.
3. **Test the capacitor.** With a meter, they compare measured µF against the rating. The fan side is often 5 µF, and anything more than about 6% below rating is replaced.
4. **Test the fan motor.** They measure winding resistance and check for a short to ground. They spin the shaft by hand with power off to feel for seized bearings, and check amp draw against the nameplate.
5. **Check the defrost board.** They verify the fan relay output on terminals such as DF1/DF2, depending on the board.
6. **Inspect wiring and the compressor.** They look for burned connectors and check whether the compressor has been tripping on its internal overload. Repeated overheating can raise the repair scope.

A quote that replaces the board or motor without first testing the capacitor deserves a question.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan stops in winter, steam rises, restarts within minutes | Normal defrost | Wait and observe | None needed |
| Unit hums, fan still, may start after a push | Weak run capacitor | Turn the system off and call | Test and replace the dual capacitor |
| Fan runs briefly, then stops; motor hot | Failing motor or thermal overload | Turn the system off | Test the motor; replace motor and capacitor |
| Compressor runs, fan never moves, no hum from the motor | Open motor winding, wiring, or contactor | Turn the system off | Check voltage at the motor; repair wiring or contactor |
| Entire outdoor unit silent | Breaker, disconnect, contactor, or no 24V | Check thermostat, reset breaker once, check disconnect | Diagnose power and control circuit |
| Fan off for a long time, coil not icing, heat poor | Defrost board relay fault | Turn the system off | Test and replace the defrost board |
| Blade blocked or visibly loose | Debris, ice, or loose blade setscrew | Clear only loose external debris with power off | Free and secure the blade; check the motor |

## Repair costs

| Repair | Typical US cost (parts + labor) |
|---|---|
| Diagnostic visit | $80 – $200 |
| Dual run capacitor | $150 – $350 |
| Contactor | $150 – $350 |
| Outdoor fan motor (PSC), usually with a new capacitor | $400 – $900 |
| ECM/variable-speed fan motor | $700 – $1,400 |
| Defrost control board | $350 – $700 |
| Wiring repair | $100 – $300 |
| Compressor replacement, if damaged by overheating | $1,500 – $3,500+ |

Goodman's parts warranty (typically 10 years with registration) often covers the motor or board. Labor usually isn't covered.

## Related codes

Goodman Heat Pump Stuck in Defrost Mode: Causes & Fixes
Goodman Heat Pump Not Heating: Causes, Fixes & Costs
Goodman Heat Pump Not Cooling: Causes, Fixes & Costs
Goodman Heat Pump Ice on Outdoor Unit: Causes & Fixes
Goodman Heat Pump Frozen and Not Defrosting: Fixes
Goodman Heat Pump Aux Heat On Constantly: Causes & Fixes
