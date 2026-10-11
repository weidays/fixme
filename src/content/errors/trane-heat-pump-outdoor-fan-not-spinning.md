---
title: "Trane Heat Pump Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane heat pump outdoor fan not spinning? Learn the causes (capacitor, motor, contactor, defrost board), safe checks, and repair costs."
brand: trane
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $1,000+ if the fan motor or control board needs replacement"
appliesTo: "Trane split-system heat pumps (XR, XL, XV series and similar American Standard twins). Single-speed models typically use a PSC fan motor with a run capacitor and a defrost control board; variable-speed models (XV20i, XV18) use an ECM or inverter-driven fan controlled by the outdoor board, so failure points and diagnostic codes differ by model."
tags:
  - trane
  - heat-pump
  - outdoor-fan
  - condenser-fan
  - capacitor
  - fan-motor
parts:
  - name: "Thermostat batteries (AA or AAA)"
    search: "AA alkaline batteries thermostat"
  - name: "Furnace/air handler air filter"
    search: "MERV 8 air filter 16x25x1"
datePublished: 2026-10-10
dateModified: 2026-10-10
reviewedBy: ""
faq:
  - q: "Is it normal for my Trane heat pump outdoor fan to stop in winter?"
    a: "Yes, during a defrost cycle the outdoor fan stops on purpose while the compressor keeps running, often with steam and a whooshing sound. Defrost usually lasts 2 to 10 minutes. If the fan stays off longer than about 15 minutes while the compressor runs, it is a fault."
  - q: "Can I keep running the heat pump if the outdoor fan won't spin?"
    a: "No. Without the fan, the compressor overheats and trips on its internal overload or high-pressure switch, and repeated running this way can damage the compressor. Turn the system off at the thermostat and call a technician. In heating season you can use emergency heat if your system has it."
  - q: "Should I push the fan blade with a stick to start it?"
    a: "No. Pushing the blade suggests a failing capacitor, but it puts you near energized high-voltage parts and moving blades, and it only masks the problem briefly. Leave diagnosis and capacitor replacement to a technician."
  - q: "Is a failed outdoor fan motor covered by Trane's warranty?"
    a: "Usually the fan motor is covered under Trane's registered limited parts warranty, typically 10 years if the unit was registered. Labor is normally not covered unless your installer or an extended plan covers it. Check your registration and model before approving a repair."
---

## What this code means

"Outdoor fan not spinning" isn't a numbered Trane fault code. It's a symptom: the compressor in the outdoor unit may be humming or running, but the large fan on top isn't turning. The fan moves air across the outdoor coil. Without it, the heat pump can't reject heat in cooling mode or absorb heat in heating mode. Refrigerant pressures and compressor temperature then climb quickly.

There's one important exception. In heating mode, the defrost control deliberately stops the outdoor fan during defrost. That pause is normal and usually lasts a few minutes. If the unit is frosting up or stuck in defrost, see the related pages listed below rather than this one.

The fault doesn't clear on its own if a part has failed. However, the compressor's internal overload resets automatically once it cools, so the system may short-cycle on and off. On variable-speed models (XV18/XV20i), the outdoor board may log a fan fault code. It can lock out after repeated faults until power is cycled, and this behavior varies by model and software version.

## Common causes, ranked by probability

1. **Failed or weak run capacitor.** This is the most common cause on single-speed PSC fan motors. A bulging or weak dual capacitor leaves the fan humming without starting, or starting only if pushed. Heat and age are the usual culprits.
2. **Failed outdoor fan motor.** The bearings seize or the windings open. The motor's internal thermal overload may trip so that it runs briefly and then stops. On ECM/inverter models, the motor or its module fails instead of a capacitor.
3. **Contactor or wiring fault.** A pitted contactor, a burned terminal, or a loose or rodent-chewed wire can stop power from reaching the fan while the compressor still runs, or stop both.
4. **Defrost control board fault.** On Trane heat pumps the fan relay is on the defrost board, so a failed relay leaves the fan off even when the compressor runs. Variable-speed systems use an outdoor inverter/control board, and a fault there or a communication error can stop the fan.
5. **Physical obstruction.** Ice buildup, debris, or a bent blade can block rotation. In winter, ice on the fan guard or blade is common.
6. **Defrost cycle (not a fault).** The fan is off while the compressor runs and the unit steams. It should resume within about 10 minutes.

## Safe checks before you call anyone

- **Watch for defrost.** In heating mode, wait 15 minutes. If steam appears and the fan restarts, the system is working normally.
- **Thermostat.** Confirm it's in Heat or Cool with a setpoint that calls for operation. Replace the batteries if the display is weak or blank.
- **Breakers and disconnect.** Check the outdoor unit's breaker and the exterior disconnect box near the unit. Reset a tripped breaker once only. If it trips again, stop and call a technician.
- **Air filter.** A clogged indoor filter doesn't stop the outdoor fan directly. It does strain the system, so replace it if it's dirty.
- **Clear around the unit, from outside only.** Remove leaves, snow, and debris from around the cabinet, keeping about 2 feet of clearance. Don't reach through the fan guard or chip ice off the blades.
- **One reset.** If the system seems locked out, turn the thermostat off, switch off the breaker for 5 minutes, then restore power once.
- **Shut it down if the fan still won't spin.** Turn the system off to protect the compressor and use emergency heat if needed.

## How a technician will diagnose it

- Confirms whether the unit is in defrost or has a true fault, and reads any LED or diagnostic codes on the outdoor board. Variable-speed models show fault history on the board or the communicating thermostat.
- With power safely isolated, spins the blade by hand to check for seized bearings or an obstruction.
- Tests the run capacitor's microfarad rating against its label. A reading more than about 6% low or a bulged case means replacement.
- Checks voltage at the fan motor leads and across the contactor, and inspects for burned terminals.
- Checks fan relay output on the defrost board, or inverter output and communication on variable-speed units.
- Measures motor winding resistance and amp draw, and checks for an open internal overload.
- After the repair, verifies amp draw, rotation direction, and refrigerant pressures to make sure the compressor wasn't stressed.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan off, compressor running, steam from unit (heating) | Normal defrost | Wait 15 minutes | None needed |
| Fan hums but doesn't turn | Weak or failed run capacitor | Shut the system off | Test and replace capacitor |
| Fan runs briefly then stops; motor hot | Motor bearings or overload | Shut the system off | Replace fan motor (and capacitor) |
| Fan and compressor both off, indoor blower runs | Tripped breaker, contactor, or wiring | Reset breaker once | Inspect contactor and wiring, repair |
| Fan silent, compressor runs, no defrost | Defrost board fan relay or wiring | Shut the system off | Test board output, replace board |
| Variable-speed unit, fan off, error on board or thermostat | ECM motor or inverter board fault | Note the code, cycle power once | Diagnose with Trane service data, replace motor or board |
| Fan blocked by ice or debris | Obstruction | Clear around the outside of the unit only | Remove ice, check blade and motor |

## Repair costs

| Repair | Typical US cost (parts + labor) |
|---|---|
| Diagnostic or service call | $75 – $200 |
| Run capacitor replacement | $120 – $350 |
| Contactor replacement | $150 – $350 |
| PSC outdoor fan motor replacement | $350 – $750 |
| ECM or variable-speed fan motor | $600 – $1,200+ |
| Defrost control board | $300 – $700 |
| Variable-speed outdoor inverter/control board | $800 – $1,800+ |
| Fan blade replacement | $150 – $350 |

Prices are higher for after-hours or emergency calls. If the unit is under its registered parts warranty, the parts may be covered and you'd pay labor only.

## Related codes

- Trane Heat Pump Stuck in Defrost Mode: Causes & Fixes
- Trane Heat Pump Frozen, Not Defrosting: Causes & Fixes
- Trane Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Trane Heat Pump Not Heating: Causes, Fixes & Costs
- Trane Heat Pump Not Cooling: Causes, Fixes & Costs
- Trane Heat Pump Aux Heat On Constantly: Causes & Fixes
