---
title: "Goodman Heat Pump Stuck in Defrost Mode: Causes & Fixes"
code: "Stuck in defrost mode"
description: "Goodman heat pump stuck in defrost? Learn the causes (defrost board, sensor, reversing valve, refrigerant), safe checks, and repair costs."
brand: goodman
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $1,800+ if the reversing valve must be replaced"
appliesTo: "Goodman heat pumps such as the GSZ, DSZ, SSZ and GSZC series, using either a demand-defrost control board or an older time/temperature defrost board. Defrost termination temperatures, maximum defrost times and fault LED codes vary by board and model. Check the wiring diagram and the label inside the outdoor unit's control panel."
tags:
  - goodman
  - heat-pump
  - defrost
  - reversing-valve
  - defrost-board
  - outdoor-unit
parts:
  - name: "Air filter (correct size for your air handler or furnace)"
    search: "HVAC air filter MERV 8"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-10-08
dateModified: 2026-10-08
reviewedBy: ""
faq:
  - q: "How long should a normal Goodman defrost cycle last?"
    a: "Most defrost cycles end within 2 to 10 minutes, once the coil sensor reaches its termination temperature. Goodman boards also have a maximum defrost time, typically around 10 to 14 minutes depending on the board, that forces the cycle to end. If the steam and the outdoor fan shutdown last far longer, or keep repeating back to back, something is wrong."
  - q: "Is it normal for steam and a whooshing sound to come from the outdoor unit?"
    a: "Yes. During normal defrost the outdoor fan stops, the reversing valve shifts with a whoosh, and melting frost gives off steam. The problem is when this goes on far longer than about 15 minutes, or the house stays cold while the unit seems to be defrosting constantly."
  - q: "Why does cold air blow from my vents during defrost?"
    a: "During defrost the heat pump briefly runs in cooling mode to warm the outdoor coil. Most systems turn on backup electric heat strips to temper the air. If you get cold air during every defrost, the backup heat or its thermostat wiring may not be working, which is a separate technician check."
  - q: "Can I reset a Goodman heat pump stuck in defrost?"
    a: "You can turn the thermostat to off, then switch off the outdoor unit's breaker or disconnect for about 5 minutes and restore power once. If it goes right back into a long defrost, leave it off or switch to emergency heat and call a technician. Repeated resets can hide a failing part."
  - q: "Should I use emergency heat while waiting for a technician?"
    a: "Yes, if your system has backup heat strips or a furnace. Setting the thermostat to EM HEAT or AUX keeps the house warm and stops the outdoor unit from running, which protects the compressor until the fault is fixed."
---

## What this code means

"Stuck in defrost mode" is not a numbered code. It describes a Goodman heat pump that enters defrost and does not properly leave it. You might see one or more of these signs:

- The outdoor fan stays off for a long time while the compressor runs.
- Steam keeps coming off the unit.
- Cool air blows indoors for extended periods.
- The unit cycles into defrost repeatedly with little heating in between.

In normal defrost, the control board shifts the reversing valve to cooling mode and stops the outdoor fan. The coil warms and the frost melts. The cycle ends when the coil temperature sensor reaches its termination point or the board's maximum defrost timer runs out.

When the unit stays stuck, something is interfering with that process. The usual culprits are:

- the board's defrost relay
- the coil (defrost) sensor
- the reversing valve or its solenoid
- a refrigerant problem that keeps the coil from warming

**How it resets depends on the board:**

- **Demand-defrost boards** in many current GSZ/DSZ units show a status or fault LED. On some boards a sensor fault forces timed defrost cycles.
- **Older time/temperature boards** have no diagnostic LEDs.

A true "stuck" condition is a component fault. It usually does not clear permanently with a power cycle.

This page is about a unit that *won't leave* defrost. If your unit won't *start* defrosting and is iced over, see the related pages listed at the bottom.

## Common causes, ranked by probability

1. **Faulty or poorly attached defrost/coil sensor.** If the sensor reads the coil as colder than it is, or has slipped off its tube, the board never sees the termination temperature. The unit then runs to the maximum defrost time or keeps re-entering defrost. Goodman's troubleshooting starts with the sensor and its resistance-versus-temperature check.
2. **Failed defrost control board.** A welded or stuck relay can keep the reversing valve energized and the outdoor fan off. A board logic failure can also hold defrost.
3. **Reversing valve stuck or solenoid fault.** If the valve sticks in the cooling position, or its solenoid coil stays energized, the system acts as if it's always defrosting even after the board ends the cycle.
4. **Low refrigerant charge (leak).** Low charge causes heavy frosting and a coil that warms slowly. That leads to long, frequent defrost cycles that look "stuck."
5. **Outdoor fan motor or fan relay issue.** If the fan doesn't restart after defrost, the unit can appear stuck. The coil may also refreeze quickly and trigger another defrost.
6. **Severe weather conditions.** Freezing rain, drifting snow, or a blocked coil can lengthen defrost a lot. This is often normal behavior, not a fault.
7. **Thermostat or low-voltage wiring issues.** A miswired O/B terminal, or a thermostat set for the wrong reversing-valve logic, can keep the system in cooling during a heat call. This mimics defrost and is common after a thermostat replacement.

## Safe checks before you call anyone

- **Time the cycle.** Note when the fan stops and steam starts. A cycle under about 15 minutes followed by normal heating is normal defrost.
- **Check the thermostat.** Confirm it is set to HEAT, the setpoint is above room temperature, and the batteries are fresh. If you recently installed a new thermostat, check its heat pump setup. The reversing valve setting is normally "O," energized in cooling, on Goodman equipment. Correct it in the thermostat menu only, not at the wiring.
- **Replace a dirty air filter.** Poor indoor airflow lowers system performance and makes heating problems worse.
- **Make sure indoor vents and registers are open** and not blocked.
- **Look at the outdoor unit from outside it.** Gently clear snow, leaves, or debris from around the base and coil. Keep at least 12–18 inches of clearance and make sure meltwater can drain. Do not chip ice or spray the coil, and don't open any panels.
- **Do one power reset.** Turn the thermostat off, switch off the outdoor unit's breaker or disconnect for 5 minutes, then restore power and set it back to HEAT. If it goes straight back into a long defrost, stop here.
- **Switch to emergency heat (EM HEAT/AUX)** if you have backup heat, and call a technician.

## How a technician will diagnose it

- Confirm the operating mode and watch a full cycle. They check reversing valve position by line temperatures and confirm whether the outdoor fan is running.
- Read the board's LED or fault status (on demand-defrost boards) and check the board's jumper settings for defrost interval and termination.
- Remove the coil sensor and test its resistance against Goodman's temperature chart. They also check that it is clamped to the correct tube.
- Use the board's test pins to force a defrost cycle and confirm it ends correctly.
- Check the voltage at the reversing valve solenoid during heating and defrost. Then check the solenoid coil's resistance and whether the valve physically shifts.
- Measure system pressures and superheat/subcooling to look for low charge, and leak-check if the charge is low.
- Check the outdoor fan motor, its capacitor, and the board's fan relay.
- Confirm the thermostat's O/B wiring and configuration.

A sensible quote should name the specific part that failed and how it was confirmed. Be wary of a recommendation to "replace the board" or "replace the valve" without testing the sensor first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan off and steam for 20+ minutes | Defrost sensor not reaching termination temperature, or a stuck board relay | One power reset, then use EM HEAT | Test or replace the sensor; replace the board if a relay is stuck |
| Defrost repeats every few minutes | Bad sensor, low refrigerant, or fan fault | Clear debris from around the unit | Sensor test, charge check, leak search, fan motor check |
| Cold air indoors during every heat call | Reversing valve stuck in cooling, or O/B setting wrong | Check the thermostat's O/B setting and mode | Solenoid voltage and coil test; valve replacement if needed |
| Fan doesn't restart after defrost | Fan motor, capacitor, or board fan relay | Turn off power and call | Replace the motor, capacitor, or board |
| Long defrost only in freezing rain or snow | Weather-related heavy icing | Keep the unit clear and draining; wait | Usually none; check unit elevation and drainage |
| Problem started after a thermostat install | Wrong reversing valve configuration | Re-check the thermostat setup menu | Correct the low-voltage wiring |

## Repair costs

Typical US prices, including parts and labor:

| Repair | Typical cost |
|---|---|
| Diagnostic or service call | $90–$250 (higher on nights and weekends) |
| Defrost/coil sensor replacement | $150–$350 |
| Defrost control board replacement | $300–$700 |
| Reversing valve solenoid coil | $150–$400 |
| Reversing valve replacement (brazing and recharge required) | $900–$2,000+ |
| Outdoor fan motor | $350–$800 |
| Fan capacitor | $120–$300 |
| Leak search and repair plus recharge | $300–$1,500+ (depends on refrigerant type and leak location) |
| Thermostat reconfiguration or rewiring | $0 DIY setting change, or $100–$250 for a technician |

Parts may be covered by Goodman's parts warranty if the unit was registered. Labor usually is not covered unless you have a separate labor warranty.

## Related codes

- Goodman Heat Pump Frozen and Not Defrosting: Fixes
- Goodman Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Goodman Heat Pump Not Heating: Causes, Fixes & Costs
- Goodman Heat Pump Not Cooling: Causes, Fixes & Costs
