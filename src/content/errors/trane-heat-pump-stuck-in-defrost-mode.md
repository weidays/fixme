---
title: "Trane Heat Pump Stuck in Defrost Mode: Causes & Fixes"
code: "Stuck in defrost mode"
description: "Trane heat pump stuck in defrost? Learn the causes (defrost board, sensor, reversing valve, relay), safe checks, tech diagnosis and repair costs."
brand: trane
equipment: heat-pump
severity: pro
costRange: "$0 DIY checks – $1,800+ if the reversing valve must be replaced"
appliesTo: "Trane split-system heat pumps (XR, XL, XV series and similar) using a demand-defrost control board with a coil temperature sensor. Older or basic models may use time-temperature defrost with a defrost thermostat instead. Communicating ComfortLink II and variable-speed models report faults through the thermostat or outdoor board LEDs, and fault-code meanings vary by board, so check the wiring diagram inside your unit's service panel."
tags:
  - heat-pump
  - defrost
  - defrost-control-board
  - reversing-valve
  - winter-operation
parts:
  - name: "Furnace/air handler air filter"
    search: "furnace air filter 16x25x1 MERV 8"
  - name: "Thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-10-08
dateModified: 2026-10-08
reviewedBy: ""
faq:
  - q: "How long should a Trane heat pump defrost cycle last?"
    a: "A normal defrost usually runs about 2 to 10 minutes and ends once the outdoor coil warms up or the board's maximum defrost time is reached. Many Trane boards cap a cycle at roughly 10 to 15 minutes, but the exact limit depends on the model. Steam rising from the outdoor unit and a brief whoosh when it switches back are normal."
  - q: "Is it normal for the outdoor fan to stop during defrost?"
    a: "Yes. During defrost the outdoor fan stops and the reversing valve shifts so hot refrigerant melts the ice on the coil. If the fan stays off for 20 minutes or more while the compressor keeps running, the unit is likely stuck in defrost."
  - q: "Why is my heat pump blowing cool air in winter?"
    a: "During defrost the system briefly runs in cooling mode. Most setups turn on backup electric heat strips to temper that air. If you get cool air for long stretches, the unit may be stuck in defrost, the backup heat may not be working, or both."
  - q: "Can I reset a Trane heat pump stuck in defrost myself?"
    a: "You can try one reset. Turn the thermostat off, switch off the outdoor unit's breaker or disconnect, wait about 5 minutes, and then restore power. If the unit goes right back into a long defrost, stop and call a technician. Repeated power cycling can stress the compressor."
  - q: "Will running my heat pump stuck in defrost damage it?"
    a: "It can. Long periods in reverse with the fan off can push coil and compressor temperatures and pressures out of their normal range. Running the backup heat at the same time also drives up your electric bill quickly. Switch the thermostat to Emergency Heat (EM Heat) if you have it, and schedule service."
---

## What this code means

"Stuck in defrost mode" is a symptom, not a numbered fault code. The heat pump enters a defrost cycle but never ends it, or it keeps re-entering defrost every few minutes.

During a normal defrost on a Trane heat pump:

- The outdoor control board energizes the reversing valve and stops the outdoor fan.
- It usually brings on auxiliary heat strips so the air from your vents doesn't feel cold.
- When the coil temperature sensor reads that the coil is warm enough, the board ends defrost. On most boards it will also end defrost when a maximum time limit is reached.

If the board never sees a "terminate" signal, or a relay or valve fails to return to heating, the unit can stay in defrost far too long. The signs:

- The outdoor fan stays off.
- The unit may steam continuously.
- The indoor air runs cool or only lukewarm, carried entirely by the backup heat.

Some Trane boards flash an LED fault for a sensor problem, but codes vary by board. Check the label inside the outdoor unit's control panel or your installation manual. There is no lockout to clear. The board re-evaluates defrost every cycle, so a power cycle may temporarily restore normal operation. If the cause is a failed part, though, the problem will return.

This page covers defrost that won't *end*. If your unit is iced over and never *starts* defrosting, see "Frozen and not defrosting" and "Ice on outdoor unit."

## Common causes, ranked by probability

1. **Failed or disconnected coil (defrost) temperature sensor.** On demand-defrost boards, this sensor tells the board when the coil is warm enough to end defrost. If it fails, comes loose from the tube, or is mis-clipped, defrost can run to its maximum time over and over or behave erratically. Many boards flag this with an LED fault.
2. **Faulty defrost control board.** A welded relay, or failed defrost logic, can hold the reversing valve energized and the fan off indefinitely.
3. **Reversing valve stuck in the cooling/defrost position.** If the valve is sticking mechanically or its solenoid stays energized, the system keeps running in reverse even after the board ends defrost.
4. **Outdoor fan motor or fan capacitor failure.** If the fan won't restart after defrost, the unit looks stuck in defrost. Ice also rebuilds quickly, which triggers repeated defrosts.
5. **Low refrigerant charge.** Low charge makes the coil frost quickly and warm up slowly, causing long or back-to-back defrost cycles.
6. **Wiring or thermostat issues.** Wiring faults or incorrect thermostat setup can keep the reversing valve energized. Common examples are a miswired O/B terminal, a shorted thermostat wire, or a thermostat set to the wrong reversing-valve type.
7. **Severe weather or airflow restriction.** Freezing rain, drifting snow, or a blocked coil can make defrost run long. In these cases the unit usually recovers once conditions improve.

## Safe checks before you call anyone

- **Confirm it's really stuck.** A normal defrost is under about 10–15 minutes. Time it. If the fan is off and the unit has been steaming for 20+ minutes, it's likely stuck.
- **Check the thermostat.** Make sure it's set to Heat, not Cool or Auto with a low setpoint. Replace the batteries if the display is dim or blank. If the problem started right after a new thermostat was installed, mention that to your technician, since the reversing valve setting (O vs B) may be wrong.
- **Switch to Emergency Heat.** If your thermostat has EM Heat, use it to keep the house warm and stop the outdoor unit from running until service.
- **Do one power reset.** Set the thermostat to Off. Turn off the outdoor unit's breaker or disconnect, wait 5 minutes, then restore power and return to Heat. Do this only once. If the problem returns, call for service.
- **Replace a dirty air filter.** Poor indoor airflow makes the system work harder in heating mode.
- **Clear around the outdoor unit from the outside only.** Brush away snow and leaves, and keep 2 feet of clearance. Don't chip ice off the coil, and don't pour hot water inside the cabinet. Check that gutters aren't dripping onto the unit.
- **Check the condensate drain.** Make sure the drain at the indoor unit isn't overflowing, and that the access panels on both units are fully seated.

## How a technician will diagnose it

- Read the outdoor board's LED status or fault codes, or the communicating thermostat's alerts on ComfortLink models.
- Check the coil sensor's resistance against Trane's temperature/resistance chart, and confirm the sensor is clipped firmly to the correct tube.
- Use the board's test or forced-defrost function to watch whether the board starts and ends defrost and de-energizes the reversing valve.
- Measure voltage at the reversing valve solenoid during heating and during defrost. Voltage present when it shouldn't be points to the board or wiring. No voltage but still reversed points to a stuck valve.
- Check the outdoor fan motor and run capacitor, and the fan relay output on the board.
- Measure system pressures and temperatures to judge refrigerant charge and how the reversing valve is behaving. Leak search if the charge is low.
- Verify thermostat wiring and O/B configuration.

A good quote names the specific failed part and the test that proved it. Be cautious with "replace the board and the valve just in case" recommendations.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan off and steaming 20+ min, LED fault on board | Coil temperature sensor failed or loose | Switch to EM Heat; one power reset | Test sensor resistance, re-clip or replace sensor |
| Unit never leaves defrost even after sensor checks good | Defrost control board relay or logic failure | Switch to EM Heat | Test board outputs, replace board |
| Board ends defrost but unit still blows cool, coil stays warm | Reversing valve stuck or solenoid energized | Switch to EM Heat | Check solenoid voltage and coil; replace solenoid or valve (refrigerant work) |
| Defrost ends but outdoor fan never restarts | Fan motor, capacitor or fan relay failure | Clear debris from outside only | Test and replace capacitor or motor |
| Frequent, long defrosts and poor heat overall | Low refrigerant charge | Replace filter, clear around unit | Leak search, repair, recharge |
| Started after thermostat swap | Wrong O/B setting or miswiring | Check thermostat setup menu or manual | Correct wiring and configuration |
| Long defrost only during freezing rain or snow | Weather or blocked coil | Clear snow and keep gutters from dripping on unit | Inspect if it doesn't recover in dry weather |

## Repair costs

Typical US ranges, including parts and labor:

| Repair | Typical cost |
|---|---|
| Service call and diagnosis | $90 – $250 |
| Coil (defrost) temperature sensor | $150 – $350 |
| Defrost control board | $300 – $750 |
| Reversing valve solenoid coil | $150 – $400 |
| Reversing valve replacement (brazing, evacuation, recharge) | $900 – $1,800+ |
| Outdoor fan capacitor | $120 – $300 |
| Outdoor fan motor | $350 – $800 |
| Leak repair and refrigerant recharge | $300 – $1,500+, depending on leak location and refrigerant type (R-410A vs R-454B) |
| Thermostat reconfiguration or rewiring | $0 – $200 |

Parts may be covered under Trane's registered limited warranty, but labor usually isn't unless you have a labor plan.

## Related codes

- Trane Heat Pump Frozen, Not Defrosting: Causes & Fixes
- Trane Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Trane Heat Pump Not Heating: Causes, Fixes & Costs
- Trane Heat Pump Not Cooling: Causes, Fixes & Costs
- Trane Furnace Blowing Cold Air: Causes, Fixes & Costs
