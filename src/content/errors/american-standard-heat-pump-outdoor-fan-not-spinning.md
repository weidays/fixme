---
title: "American Standard Heat Pump Outdoor Fan Not Spinning: Fixes"
code: "Outdoor fan not spinning"
description: "American Standard heat pump outdoor fan not spinning? Causes like a failed capacitor, motor, contactor or defrost board, safe checks, and repair costs."
brand: american-standard
equipment: heat-pump
severity: pro
costRange: "$0 DIY checks – $150-$450 for a capacitor or contactor, up to $900+ for a motor or defrost control board"
appliesTo: "American Standard split-system heat pumps, including Silver, Gold and Platinum series. Single-stage and two-stage units use a defrost control board and a run capacitor. Variable-speed AccuComfort and Link-communicating units use an inverter-driven ECM fan motor and report faults on the outdoor control board or communicating thermostat instead. Fan control and diagnostic LEDs vary by model and board revision."
tags:
  - heat-pump
  - outdoor-fan
  - condenser-fan
  - capacitor
  - defrost-board
  - american-standard
parts: []
datePublished: 2026-11-19
dateModified: 2026-11-19
reviewedBy: ""
faq:
  - q: "Is it normal for my American Standard heat pump's outdoor fan to stop in winter?"
    a: "Yes, for a short time. During a defrost cycle the defrost control turns the outdoor fan off on purpose while the compressor keeps running and steam rises from the coil. This usually lasts about 2 to 10 minutes. If the fan stays off longer than about 15 minutes, or it is off when no defrost is happening, the unit needs service."
  - q: "Can I keep running the heat pump if the outdoor fan is not spinning?"
    a: "No. Turn the system off at the thermostat. Without the fan, head pressure and compressor temperature rise quickly. The high-pressure switch or the compressor's internal overload may trip, and repeated trips can shorten compressor life. In winter you can usually switch the thermostat to Emergency Heat until a technician arrives, if your system has backup heat strips or a furnace."
  - q: "Can I push the fan blade with a stick to start it?"
    a: "Don't do it. Spinning the blade by hand is a common sign of a weak capacitor, but the cabinet holds live high voltage and the capacitor stays charged after power is off. The blade can also start without warning. Leave the test to a technician, who will check the capacitor and motor with a meter."
  - q: "How long does an outdoor fan repair take?"
    a: "A capacitor or contactor replacement usually takes under an hour. A fan motor swap typically takes 1 to 2 hours. Variable-speed models with proprietary motors or boards may need a parts order, which can take several days."
---

## What this code means

"Outdoor fan not spinning" is a symptom, not a numbered fault code. On most American Standard heat pumps you will not see an error on the thermostat. Two exceptions:

- **Communicating systems** (AccuLink, Link-series, AccuComfort variable-speed) may log an outdoor fan or outdoor unit fault on the thermostat or outdoor control board.
- **Conventional systems** may show only a status LED pattern on the defrost board. The meaning of the pattern depends on the board revision.

This page covers what is specific to the heat pump version of this problem. If you only have central air, see the separate AC outdoor fan page.

**The key heat pump difference is defrost.** In heating mode, the defrost control deliberately stops the outdoor fan for a few minutes to melt frost off the coil.

- **Normal defrost:** the compressor keeps humming, the reversing valve may whoosh, and the coil often steams. The fan restarts on its own when defrost ends.
- **Not normal:** the fan stays off well past about 15 minutes, or it won't run in cooling mode at all.

**Resets:** There is no code to clear. If a pressure switch or the compressor overload tripped because the fan stopped, those usually reset on their own once the unit cools. Communicating models may hold a lockout until power is cycled.

## Common causes, ranked by probability

1. **Normal defrost cycle (heating mode).** The fan pauses on purpose. Rule this out first.
2. **Failed or weak run capacitor.** This is the most common real failure on single-stage and two-stage units. Typical signs are a humming motor, or a fan that spins if nudged. Many units use a dual capacitor shared with the compressor.
3. **Failed outdoor fan motor.** Common signs are seized bearings, a burned winding, or an overheated motor that trips its internal protector. On variable-speed models this is an ECM or inverter-driven motor, which costs more to replace.
4. **Defrost control board fault.** The fan relay on the board can fail, so the board never sends power to the fan. A board stuck in defrost also keeps the fan off. Board design varies by model.
5. **Worn or pitted contactor, or a loose or burned wire** to the fan circuit.
6. **Obstruction.** Ice buildup, debris, or a bent blade can physically jam the fan.
7. **Inverter or drive fault (variable-speed models only).** The outdoor drive controls fan speed. A fault here usually logs a code on the communicating thermostat.

## Safe checks before you call anyone

- **Wait out defrost.** In heating mode, watch for up to 15 minutes. If you see steam and hear the compressor running, the fan should restart on its own.
- **Check the thermostat.** Confirm the mode (Heat or Cool) and the setpoint. Replace the batteries if the display is dim or blank.
- **Check power.** Look at the outdoor disconnect switch and the breaker panel. If a breaker tripped, reset it **once**. If it trips again, stop and see the related breaker page.
- **Do one reset of a communicating unit.** Turn the system off at the thermostat and cut power at the breaker for 5 minutes. Then restore power. Do this only once.
- **Clear around the unit.** Remove leaves, snow, and debris from around the cabinet and on the top grille. Keep about 2 feet of clearance. Do not reach through the grille.
- **Replace a dirty indoor air filter.** It won't fix the fan, but it reduces strain on the system.
- **If the fan still won't run**, set the thermostat to Off, or to Emergency Heat in winter, and call for service.

## How a technician will diagnose it

1. **Confirm the operating state.** The tech checks whether the unit is in defrost by reading the defrost board LEDs and checking the defrost sensor and timer status.
2. **Check voltage at the fan leads.**
   - Power present but motor not running points to the capacitor or motor.
   - No power points to the board relay, contactor, or wiring.
3. **Test the capacitor** for microfarads (µF) against its rating.
4. **Test the motor.** This includes winding resistance, a check for a short to ground, and spinning the shaft by hand with power off to feel for bearing drag.
5. **Inspect the contactor and wiring** for pitting, burned spade connectors, or rodent damage.
6. **Check variable-speed models with diagnostics.** On communicating units, the tech reads the fault history and checks the drive's fan output and communication.
7. **Check for collateral damage.** After the repair, the tech confirms the compressor amp draw and pressures, since the compressor may have overheated while the fan was off.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan off in winter, steam on coil, compressor running | Normal defrost | Wait 15 minutes | None if the fan resumes |
| Fan hums but doesn't turn | Weak capacitor or seized motor | Turn system off | Test and replace the capacitor or motor |
| Fan dead, compressor running | Board fan relay, wiring, or motor | Turn system off, use Emergency Heat if needed | Check voltage, replace the board or repair wiring |
| Fan and compressor both dead | Power, contactor, or low-voltage control | Check breaker and disconnect, reset once | Test the contactor and control circuit |
| Fan starts, then stops after minutes | Motor overheating on its internal protector | Clear debris around the unit | Replace the motor and check the capacitor |
| Fan never resumes after defrost | Defrost board or sensor fault | Turn off, call for service | Diagnose the defrost board and sensor |
| Fault shown on communicating thermostat | ECM motor or inverter drive | One power reset | Read the codes, repair the drive or motor |
| Ice or debris jamming the blade | Obstruction | Clear the exterior only, with power off | Free and check the blade and motor |

## Repair costs

These are typical installed US prices. Brand-specific and variable-speed parts sit at the high end.

| Repair | Typical cost |
|---|---|
| Service call and diagnosis | $90–$200 |
| Run or dual capacitor | $150–$400 |
| Contactor | $150–$350 |
| Wiring repair | $100–$300 |
| PSC fan motor (single-stage or two-stage) | $350–$750 |
| ECM or variable-speed fan motor | $600–$1,200+ |
| Defrost control board | $350–$800 |
| Inverter drive board (variable-speed) | $800–$2,000+ |

Warranty matters. American Standard typically covers parts for 10 years on registered units (5 years if unregistered), but labor is usually not covered.

## Related codes

- American Standard AC Outdoor Fan Not Spinning: Fixes
- American Standard Heat Pump Stuck in Defrost Mode: Fixes
- American Standard Heat Pump Frozen, Not Defrosting: Fixes
- American Standard Heat Pump Ice on Outdoor Unit: Fixes
- American Standard Heat Pump Not Heating: Causes & Fixes
- American Standard Heat Pump Not Cooling: Causes & Fixes
- American Standard AC Breaker Keeps Tripping: Causes & Fixes
