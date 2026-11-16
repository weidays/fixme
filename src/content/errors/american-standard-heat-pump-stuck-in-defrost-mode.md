---
title: "American Standard Heat Pump Stuck in Defrost Mode: Fixes"
code: "Stuck in defrost mode"
description: "American Standard heat pump stuck in defrost? Causes like a failed defrost sensor, control board or reversing valve, safe checks, and $0–$2,500 repair costs."
brand: american-standard
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $2,500+ if the reversing valve must be replaced"
appliesTo: "American Standard split heat pumps (Silver, Gold, Platinum and AccuComfort lines). Single- and two-stage units use a demand-defrost control board with coil and outdoor temperature sensors. Communicating and variable-speed units (AccuLink/AccuComfort) manage defrost in the inverter or unit controller and may log diagnostic codes. Defrost time limits and sensor locations vary by model and board revision."
tags:
  - heat-pump
  - defrost
  - defrost-board
  - reversing-valve
  - american-standard
  - winter-heating
parts:
  - name: "HVAC air filter (correct size for your return)"
    search: "MERV 8 HVAC air filter 16x25x1"
  - name: "AA lithium batteries for thermostat"
    search: "AA lithium batteries 8 pack"
datePublished: 2026-11-16
dateModified: 2026-11-16
reviewedBy: ""
faq:
  - q: "How long should a normal American Standard defrost cycle last?"
    a: "Most demand-defrost boards end the cycle once the outdoor coil warms to the termination temperature, usually within a few minutes. A built-in safety timer typically ends it after about 10 to 15 minutes at the latest. If defrost runs much longer than that, repeats back-to-back, or never seems to end, something is wrong."
  - q: "What are the signs my heat pump is stuck in defrost?"
    a: "Look for cool or lukewarm air at the vents for a long stretch, the outdoor fan stopped while the compressor keeps running, steady steam from the outdoor unit, or backup and emergency heat running nonstop. You may also see a coil that looks clean and dry while the unit still behaves as if it is defrosting."
  - q: "Can I reset a heat pump that is stuck in defrost myself?"
    a: "You can turn the system off at the thermostat, switch off the outdoor disconnect or breaker for about 5 minutes, and restore power once. If the unit goes right back into a long defrost, stop there and call a technician. Repeated resets will not fix a failed sensor, board or valve."
  - q: "Is it safe to keep running a heat pump stuck in defrost?"
    a: "Not for long. While stuck, the unit is basically air conditioning your home and burning backup heat strips, so your electric bill climbs fast. Set the thermostat to emergency heat if you have it, which shuts down the outdoor unit, and schedule service."
  - q: "Is this the same as a heat pump that is frozen and won't defrost?"
    a: "No, it is the opposite problem. Stuck in defrost means the unit enters defrost and fails to leave it. Frozen and not defrosting means it never starts or finishes a defrost while ice keeps building up. Both can trace back to the defrost control or sensors, but the symptoms and diagnosis are different."
---

## What this code means

"Stuck in defrost mode" is a symptom, not a numbered fault code. On most American Standard heat pumps, the outdoor unit periodically reverses into cooling mode to melt frost off the outdoor coil. During that cycle:

- The outdoor fan stops.
- The reversing valve shifts.
- Auxiliary heat strips usually come on to temper the air coming into your home.

A normal cycle ends when the coil temperature sensor reports the coil is warm enough. If that doesn't happen, the board's maximum-time limit (typically about 10–15 minutes) forces the cycle to end.

"Stuck" usually means one of three things:

- The cycle never ends.
- The unit falls back into defrost over and over.
- The reversing valve or outdoor fan stays in the defrost position even after the board has ended the cycle.

**What varies by model:**

- **Standard single- and two-stage units:** These use a demand-defrost control board and usually show nothing beyond a status LED.
- **Communicating units (AccuLink/AccuComfort):** These may log a diagnostic code on the thermostat or the outdoor unit's display. That code points the technician directly at the fault.

**Reset behavior:** A sensor or board fault usually doesn't latch. The board simply repeats the bad behavior, so cycling power rarely fixes it for long.

## Common causes, ranked by probability

1. **Failed or misplaced defrost (coil) temperature sensor.** If the sensor reads too cold or has slipped off its tube, the board never sees the coil warm up. Defrost then runs to the time limit or restarts right away.
2. **Faulty defrost control board.** A stuck defrost relay or a failed board circuit can hold the system in defrost or fire it constantly.
3. **Reversing valve stuck or its solenoid/coil failing.** The board may end defrost, but the valve stays in cooling position. This produces cold air indoors and a hot outdoor coil.
4. **Failed outdoor ambient sensor (demand-defrost models).** A bad ambient reading makes the board think the coil is frosted and trigger defrost too often.
5. **Low refrigerant charge.** The coil runs very cold, so it frosts quickly and struggles to reach the termination temperature.
6. **Outdoor fan motor or fan-relay issue after defrost.** If the fan doesn't restart when defrost ends, the coil refrosts quickly and the unit appears stuck.

## Safe checks before you call anyone

- **Thermostat:**
  - Confirm it is set to Heat, not Cool or Auto with a low cooling setpoint.
  - Replace the batteries if the display is dim or blank.
- **Emergency heat for comfort:** If your thermostat has an Emergency or Aux Heat mode, use it to stay warm until service. It shuts down the outdoor unit.
- **Air filter:** Replace a dirty filter. Poor airflow makes heating performance worse and muddies the diagnosis.
- **One power reset:**
  1. Turn the thermostat off.
  2. Switch off the outdoor disconnect or the heat pump breaker for 5 minutes.
  3. Restore power and set the thermostat back to Heat.
  4. Do this once only. If defrost behavior returns, call a technician.
- **Outdoor unit, visual only:**
  - Clear snow, leaves and debris from around the unit and off the top grille.
  - Make sure meltwater can drain away and isn't refreezing at the base.
  - Do not chip ice or open the panels.
- **Vents and registers:** Confirm supply registers are open and returns are unblocked.

## How a technician will diagnose it

- Read any diagnostic codes from the communicating thermostat or the outdoor unit display, if your model has one.
- Observe a full defrost cycle by checking:
  - Fan stop and restart
  - Reversing valve shift
  - Aux heat call
  - Total cycle time
- Check that the coil sensor is clipped tightly to the correct tube, then measure its resistance against the temperature chart for that board.
- Use the board's test pins to force a defrost cycle and confirm the board terminates it correctly.
- Measure voltage at the reversing valve solenoid and confirm the valve actually shifts by comparing line temperatures.
- Verify refrigerant charge with gauges and temperature measurements.
- Confirm the outdoor fan and its relay or capacitor restart after defrost.

A good quote should name the specific failed part and explain how it was confirmed.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Cool air for 20+ minutes, outdoor fan stopped | Coil sensor reading cold or loose | Use emergency heat; reset power once | Test/re-secure or replace defrost sensor |
| Defrost starts again minutes after ending | Bad ambient sensor or control board | Check filter and thermostat mode | Test sensors, replace defrost board |
| Fan restarts but indoor air stays cold | Reversing valve or solenoid stuck | Use emergency heat | Test solenoid; replace coil or valve |
| Frequent defrost plus weak heat | Low refrigerant charge | Change filter, clear outdoor unit | Leak search, repair, recharge |
| Fan stays off after defrost, coil refrosts | Fan motor, capacitor or relay | Clear debris from top grille | Test and replace fan motor/capacitor/board |
| High electric bill, aux heat always on | Any of the above | Note symptoms and timing for the tech | Full defrost-cycle diagnosis |

## Repair costs

| Repair | Typical US cost |
|---|---|
| Service call / diagnosis | $90–$250 |
| Defrost coil or ambient sensor replacement | $150–$350 |
| Defrost control board replacement | $300–$750 |
| Communicating/inverter control board (AccuComfort) | $600–$1,500 |
| Reversing valve solenoid coil | $150–$400 |
| Reversing valve replacement (brazing, evacuation, recharge) | $1,200–$2,500+ |
| Leak repair and refrigerant recharge | $300–$1,500+ (varies with refrigerant type and leak location) |
| Outdoor fan motor and capacitor | $300–$700 |

Parts covered by warranty lower the parts cost, but labor is often still billed.

## Related codes

- American Standard Heat Pump Frozen, Not Defrosting: Fixes: the opposite failure, where defrost never runs or finishes.
- American Standard Heat Pump Ice on Outdoor Unit: Fixes: heavy icing and drainage issues.
- American Standard Heat Pump Not Heating: Causes & Fixes: general heating failures beyond defrost.
- American Standard AC Outdoor Fan Not Spinning: Fixes: outdoor fan motor and capacitor problems.
