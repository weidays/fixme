---
title: "Trane AC Outdoor Fan Not Spinning: Causes, Fixes & Costs"
code: "Outdoor fan not spinning"
description: "Trane AC outdoor fan not spinning? Learn the likely causes (capacitor, motor, contactor), safe homeowner checks, and typical repair costs of $150–$900."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY check – $900+ if the condenser fan motor and capacitor need replacement"
appliesTo: "Trane central air conditioner condensing units (XR, XL, XV and similar series, including American Standard equivalents). Single-stage units use a PSC fan motor with a run capacitor and contactor. Variable-speed XV units use an ECM fan motor driven by the outdoor control board, so the parts and diagnosis differ by model."
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - condenser-fan-motor
  - capacitor
  - contactor
parts:
  - name: "Furnace/air handler air filter (correct size for your return)"
    search: "MERV 8 HVAC air filter 16x25x1"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-10-25
dateModified: 2026-10-25
reviewedBy: ""
faq:
  - q: "Can I keep running my Trane AC if the outdoor fan isn't spinning?"
    a: "No. Without the fan, the compressor can't reject heat. Head pressure and compressor temperature climb fast. The unit may trip on its high-pressure or internal overload protection, and repeated running can shorten compressor life. Turn the system off at the thermostat until it's repaired."
  - q: "Is it safe to push the fan blade with a stick to start it?"
    a: "We don't recommend it. Even when the fan is stopped, the unit is energized at 240 volts and the fan can start suddenly. A fan that only runs after a push almost always has a failed capacitor or a failing motor. A technician should confirm and replace the faulty part."
  - q: "Why does the compressor hum but the fan stays still?"
    a: "On most single-stage Trane units, the compressor and fan share a dual run capacitor. If the fan section of that capacitor fails, or the fan motor's windings or bearings fail, the compressor can keep running while the fan sits still. This is the most common pattern for this problem."
  - q: "Will the outdoor fan reset on its own?"
    a: "There's no lockout code to clear on standard single-stage units. The fan motor's internal thermal overload can reset once the motor cools, which is why the fan may work intermittently. Communicating and variable-speed models may log a fault on the board or the thermostat that a technician reads during diagnosis."
---

## What this code means

This isn't a numbered error code. It's a symptom: the condenser fan on top of your Trane outdoor unit stays still while the system is calling for cooling.

Usually the compressor is humming or running, and the indoor blower is pushing warm or barely cool air.

The outdoor fan pulls air across the condenser coil to get rid of the heat taken from your house. Without it, refrigerant pressure and compressor temperature rise quickly. That's why this is rated pro severity: shut the system off and get it serviced rather than letting it run.

How the fan is powered depends on the model:

- **Single- and two-stage units (most XR and XL models):** a PSC fan motor runs through the contactor and a run capacitor. That capacitor is often a dual capacitor shared with the compressor.
- **Variable-speed XV units:** an ECM fan motor is commanded by the outdoor control board, often with communicating fault reporting to a Trane ComfortLink/Link thermostat.

If your outdoor unit is a heat pump rather than a straight AC, see the separate Trane heat pump page for this symptom. Heat pumps also stop the fan during defrost, which is normal.

## Common causes, ranked by probability

1. **Failed run capacitor (fan side of the dual capacitor).** This is the most common cause on PSC-motor units. Typical signs are that the fan hums but won't start, or it spins only after a nudge. Heat and age degrade capacitors.
2. **Failed condenser fan motor.** Worn bearings, open windings, or a motor that repeatedly trips its internal thermal overload. The fan may be hot, stiff to turn, or work intermittently.
3. **Contactor problems.** Pitted or burned contacts, or a contactor that pulls in only one leg, can stop the fan, the compressor, or both. If nothing outside runs at all, also suspect the thermostat call, the low-voltage circuit, or the outdoor disconnect.
4. **Wiring faults.** A loose, burned, or rodent-chewed wire to the fan motor or capacitor terminals.
5. **Obstruction or seized blade.** Debris, vines, or a bent blade hitting the shroud can stop the fan. A blade loose on its shaft can also leave the motor spinning while the blade doesn't move.
6. **Variable-speed (XV) control issues.** A failed ECM motor, a failed outdoor control board output, or a communication fault. Diagnosis is model-specific and done through the board's fault history or the thermostat's service menu.

## Safe checks before you call anyone

- **Turn the system off at the thermostat** as soon as you notice the fan isn't spinning. This protects the compressor.
- **Thermostat:** confirm it's set to Cool with a setpoint below room temperature. Replace the batteries if the display is dim or blank.
- **Breakers and disconnect:** check the AC breaker in your main panel and the outdoor disconnect switch. If a breaker tripped, you may reset it once. If it trips again, leave it off and call a pro.
- **Air filter:** replace a dirty filter. A clogged filter doesn't stop the outdoor fan, but it adds strain once the system is repaired.
- **Look, don't touch:** from outside the unit, check the top grille for sticks, leaves, or vines that are visibly blocking the blade. Clear debris from around the cabinet, aiming for about 2 feet of clearance. Never reach through the grille, and don't open the top or the service panel.
- **Seat the panels:** make sure the outdoor unit's service panel is fully on and secure.
- **Note what you hear:** a hum, a click with no start, the compressor running, or total silence. Tell the technician. It speeds up diagnosis.

## How a technician will diagnose it

A competent technician will typically work through these steps:

1. Confirm a 24V cooling call at the outdoor unit and check that line voltage is present at the disconnect.
2. Kill power and lock out, then discharge and inspect the capacitor for bulging or leaks. They'll measure microfarads on the fan (FAN–C) terminals against the rated value, usually within ±6%.
3. Spin the blade by hand with power off to feel for bearing drag or a seized shaft. Then check the motor windings for opens or shorts to ground with a meter.
4. Inspect the contactor contacts and measure voltage across both legs when it's pulled in.
5. Check wiring and terminals for burn marks or loose connections.
6. On XV/variable-speed units, read stored fault codes from the outdoor board or communicating thermostat. Then verify the board's signal to the ECM motor before condemning either part.
7. After repair, check amp draw against the motor nameplate and confirm system pressures are normal. The compressor may have run hot.

Be wary of a quote to replace the motor without any capacitor test. A good tech tests the cheap part first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums, doesn't spin; compressor runs | Weak or failed fan capacitor | Turn system off; call for service | Test and replace the run capacitor |
| Fan spins if nudged | Failed capacitor or weak motor start | Turn system off; don't push the blade | Replace the capacitor; test the motor |
| Fan runs a while, then stops; restarts later | Motor overheating on its thermal overload, worn bearings | Turn system off; clear debris around the unit | Check amps and bearings; replace the motor |
| Fan and compressor both off, indoor blower runs | Tripped breaker, no 24V call, failed contactor | Check thermostat, breaker, and disconnect (one reset) | Diagnose the contactor or control circuit |
| Fan silent, no hum, compressor runs | Open motor winding or broken wire | Turn system off | Meter the motor and wiring; repair or replace |
| Blade blocked or rubbing | Debris, bent blade | Clear outside debris only, power off | Replace or realign the blade; check the motor shaft |
| XV unit: fan off, fault on thermostat | ECM motor or board fault | Record the fault code and call | Read board history; replace the ECM motor or board |

## Repair costs

Typical US ranges, including parts and labor:

| Repair | Typical cost | Notes |
|---|---|---|
| Diagnostic or service call | $80–$200 | Often credited toward the repair |
| Run capacitor (dual or single) | $150–$400 | The part itself is cheap; markup varies widely |
| Contactor | $150–$400 | |
| Wiring repair | $100–$300 | |
| PSC condenser fan motor (universal or OEM) | $350–$800 | Capacitor is usually replaced at the same time |
| Fan blade | $100–$300 | Installed |
| Variable-speed ECM fan motor (XV series) | $600–$1,500+ | OEM parts; check warranty |
| Outdoor control board (XV) | $500–$1,200+ | |

Trane's registered limited warranty commonly covers parts for 10 years, but labor usually isn't covered unless you bought an extended plan. Check your registration before authorizing a repair.

## Related codes

- Trane AC Not Cooling: Causes, Fixes & Repair Costs
- Trane Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Trane Heat Pump Compressor Not Running: Causes & Fixes
- Trane Heat Pump Breaker Keeps Tripping: Causes & Fixes
- Trane Heat Pump Loud Noise: Causes, Fixes & Costs
