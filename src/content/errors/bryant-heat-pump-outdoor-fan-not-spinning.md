---
title: "Bryant Heat Pump Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Bryant heat pump outdoor fan not spinning? Causes include a failed capacitor, motor, or defrost board. Safe checks, tech diagnosis, and $150–$900 repair costs."
brand: bryant
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $900+ if the fan motor or control board needs replacement"
appliesTo: "Bryant split-system heat pumps (Legacy, Preferred, and Evolution series) with PSC or ECM outdoor fan motors. Defrost-board and variable-speed control behavior varies by model. Evolution units may log a fault on the thermostat, while basic units show only LED flashes on the defrost board."
tags: ["heat-pump", "outdoor-fan", "condenser-fan", "capacitor", "fan-motor", "defrost-board"]
parts: []
datePublished: 2026-11-19
dateModified: 2026-11-19
reviewedBy: ""
faq:
  - q: "Is it normal for my Bryant heat pump's outdoor fan to stop in winter?"
    a: "Yes, briefly. During a defrost cycle the outdoor fan intentionally shuts off while the compressor keeps running, and you may see steam rise from the unit. Defrost normally ends within about 10 minutes, and then the fan should restart."
  - q: "Can I keep running the heat pump if the outdoor fan won't spin?"
    a: "No. Without airflow, head pressure and compressor temperature climb quickly. The unit may trip on overload, or the compressor may be damaged. Switch the thermostat to Emergency Heat (in winter) or Off, and call a technician."
  - q: "Should I push the fan blade with a stick to start it?"
    a: "No. That is a common internet tip, but it means reaching into a unit that is powered by high voltage. It also only masks a failing capacitor or motor. Leave the start test to a technician with the power locked out."
  - q: "How much does it cost to fix a Bryant outdoor fan that won't spin?"
    a: "A capacitor replacement typically runs $150 to $400. A PSC fan motor costs $400 to $800 installed. ECM motors and defrost or control boards can exceed $900, depending on model and warranty status."
---

## What this code means

"Outdoor fan not spinning" is a symptom, not a numbered code. On most Bryant heat pumps the outdoor (condenser) fan has two jobs:

- In cooling, it pulls air across the outdoor coil to reject heat.
- In heating, it pulls air across the coil to absorb heat.

On a heat pump, the fan is **deliberately stopped during defrost**. Rule that out first. If the fan stays stopped while the compressor hums or runs outside of defrost, the unit is running without airflow. It will usually trip on high pressure or compressor overload.

Fault reporting depends on the model:

- **Evolution/communicating systems** may log a related fault, such as high pressure or an outdoor fan motor fault, on the thermostat.
- **Basic units** show status only through LEDs on the defrost board.

Pressure-switch lockouts on many Bryant boards reset after a timed delay or a power cycle. Recurring trips are a sign the root cause is still present.

This page covers heat-pump-specific behavior. For the general AC-side version, see the AC outdoor fan page listed in Related codes.

## Common causes, ranked by probability

1. **Normal defrost cycle (heating mode only).** The fan stops for several minutes while frost melts off the coil. This is expected.
2. **Failed or weak run capacitor.** This is the most common real failure on PSC-motor units. The motor hums but won't start, or it starts only after a push.
3. **Failed outdoor fan motor.** Seized bearings or an open winding are typical. These are often age-related or caused by overheating.
4. **Contactor or relay fault.** The contactor may be pitted, or the fan relay on the defrost board may have failed. Either one keeps power from reaching the fan circuit.
5. **Defrost/control board fault.** The board may be stuck in defrost, have a failed defrost thermostat or sensor, or fail to command the fan. On variable-speed models it may not send a signal to an ECM motor.
6. **Physical obstruction.** Ice buildup, debris, or a bent blade can keep the fan from turning.
7. **Wiring problems.** Burnt, loose, or rodent-damaged wiring to the fan motor can cut power.

## Safe checks before you call anyone

- **Watch for defrost.** In heat mode, if you see steam and hear a "whoosh," wait 10–15 minutes. If the fan then restarts, nothing is wrong.
- **Check the thermostat.** Confirm the mode (Heat or Cool) and that the setpoint actually calls for operation. Replace the thermostat batteries if the display is weak.
- **Check the breaker and outdoor disconnect.** Confirm both are on. If the breaker has tripped, reset it **once**. If it trips again, stop and call a technician.
- **Do one reset.** Turn the system off at the thermostat, wait 5 minutes, then turn it back on. Do this only once.
- **Clear the outside of the unit.** Remove leaves, snow, or debris from around the unit and off the top grille without reaching inside. Keep at least 2 feet of clearance.
- **Replace a dirty indoor air filter.** Poor indoor airflow adds stress to the whole system.
- **Shut it down if the fan still won't run.** If the compressor runs or hums but the fan does not, turn the system Off. In cold weather, use Emergency Heat instead to protect the compressor.

## How a technician will diagnose it

A technician should work through these steps:

1. Confirm whether the unit is in defrost. They'll read the board LEDs, check the defrost thermostat or coil sensor, and may run a forced-defrost test to verify the board ends defrost correctly.
2. With the power locked out, test the run capacitor with a meter that reads microfarads (µF). They compare the reading to the rating on the capacitor's label (typically ±6%).
3. Check the fan motor for open or shorted windings and grounding. They'll also spin the shaft by hand to check for seized bearings.
4. Verify line voltage at the contactor and at the fan motor leads. They'll also check the fan output on the defrost board.
5. On ECM or variable-speed models, check the board's control signal to the motor and look for stored fault codes.
6. Inspect the wiring, the blade, and the motor mount.

Expect a clear diagnosis before any parts are replaced. Be wary of a quote that replaces the motor, capacitor, and board all at once without test readings to back it up.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan stops in winter with steam rising, then restarts | Normal defrost | Wait 10–15 min | None needed |
| Fan stays stopped, defrost never seems to end | Defrost board or sensor fault | Switch to Emergency Heat | Test sensor and board; replace the failed part |
| Motor hums, blade doesn't turn | Failed run capacitor | Turn the system off | Test and replace the capacitor |
| No hum, no movement, compressor runs | Failed motor, relay, or wiring | Turn the system off | Voltage checks; replace the motor or relay, or repair wiring |
| Fan blade blocked by ice or debris | Obstruction | Clear the exterior only; don't reach in | Remove ice safely; check for drainage or defrost issues |
| Fan and compressor both dead | Power or contactor issue | Check the breaker and disconnect; reset once | Diagnose the contactor or control voltage |
| Unit trips off repeatedly | High pressure from lack of airflow | Don't keep resetting it | Find and fix the root cause |

## Repair costs

These are typical US ranges, installed, before any warranty coverage.

| Repair | Typical cost |
|---|---|
| Diagnostic visit | $80–$200 |
| Run capacitor | $150–$400 |
| Contactor | $150–$400 |
| Defrost thermostat or coil sensor | $150–$350 |
| PSC outdoor fan motor | $400–$800 |
| ECM/variable-speed outdoor fan motor | $600–$1,200+ |
| Defrost or control board | $350–$900+ |
| Fan blade | $100–$300 |

Check your warranty before paying for parts. Bryant parts warranties are commonly 10 years with registration, though labor is usually not covered.

## Related codes

- **Stuck in defrost mode:** Bryant Heat Pump Stuck in Defrost Mode: Causes & Fixes
- **Frozen and not defrosting:** Bryant Heat Pump Frozen, Not Defrosting: Causes & Fixes
- **Ice on outdoor unit:** Bryant Heat Pump Ice on Outdoor Unit: Causes & Fixes
- **Not heating:** Bryant Heat Pump Not Heating: Causes, Checks & Fixes
- **Not cooling:** Bryant Heat Pump Not Cooling: Causes, Checks & Fixes
- **Outdoor fan not spinning (AC):** Bryant AC Outdoor Fan Not Spinning: Causes & Fixes
- **Compressor not running:** Bryant AC Compressor Not Running: Causes, Checks & Fixes
- **Breaker keeps tripping:** Bryant AC Breaker Keeps Tripping: Causes, Checks & Fixes
