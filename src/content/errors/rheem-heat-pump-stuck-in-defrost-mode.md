---
title: "Rheem Heat Pump Stuck in Defrost Mode: Causes & Fixes"
code: "Stuck in defrost mode"
description: "Rheem heat pump stuck in defrost? Learn the likely causes (defrost board, coil sensor, reversing valve), safe checks, and repair costs from $0 to $2,500."
brand: rheem
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $2,500 if the reversing valve must be replaced"
appliesTo: "Rheem and Ruud split-system heat pumps with time-temperature or demand defrost control boards, including Classic, Classic Plus and Prestige/EcoNet series. Defrost interval settings, maximum defrost time, sensor type and fault-code display vary by model and board revision."
tags:
  - rheem
  - heat-pump
  - defrost
  - defrost-board
  - reversing-valve
  - winter-heating
parts:
  - name: "Thermostat batteries (AA or AAA)"
    search: "AA alkaline batteries 8 pack"
  - name: "HVAC air filter (match your size)"
    search: "MERV 8 furnace air filter 16x25x1"
datePublished: 2026-10-08
dateModified: 2026-10-08
reviewedBy: ""
faq:
  - q: "How long should a Rheem heat pump defrost cycle last?"
    a: "A normal defrost usually lasts about 2 to 10 minutes. Most Rheem boards end the cycle when the coil sensor reports that the coil is warm. They also have a built-in maximum time, often around 10 to 14 minutes depending on the board. A cycle that runs well past that, or never seems to end, points to a fault."
  - q: "Is steam coming off my outdoor unit a sign it is stuck in defrost?"
    a: "No, not on its own. Steam during defrost is normal because frost is melting off a warm coil. It is only a concern when the steaming continues for a long time, the outdoor fan stays off, and the indoor vents keep blowing cool air."
  - q: "Can I keep running my heat pump while it is stuck in defrost?"
    a: "You can switch to emergency heat to stay warm while you wait for service, but expect high electric bills. Running the system for days in a stuck-defrost state wastes energy and can strain the compressor, so call a technician promptly."
  - q: "Will turning the power off reset a stuck defrost cycle?"
    a: "Cycling the breaker once restarts the defrost control board. That can clear a one-time glitch. If the unit goes straight back into defrost or gets stuck again, a part has failed. Do not keep resetting it."
---

## What this code means

"Stuck in defrost mode" is not usually a numbered fault code. It describes a symptom: the heat pump enters its defrost cycle and fails to exit on time.

During a normal defrost, the Rheem control board does three things:

- It energizes the reversing valve so the system briefly runs in cooling mode.
- It shuts off the outdoor fan.
- It typically brings on auxiliary or strip heat indoors.

This sends hot refrigerant through the outdoor coil to melt frost. The board ends defrost when the coil sensor reads warm, or when the board's maximum defrost timer runs out. That limit is commonly around 10 to 14 minutes, but it varies by board.

When the system stays stuck in defrost, you typically see:

- The outdoor fan staying off
- Long or continuous steaming or whooshing from the outdoor unit
- Cool or lukewarm air at the vents
- Backup heat running nonstop and a spike in your electric bill

Whether a fault is logged depends on the model. Communicating Rheem EcoNet/Prestige units may show a diagnostic message on the EcoNet thermostat. Many conventional (24V) units flash a status LED on the defrost board, and some show nothing at all. A power cycle restarts the board. If a hardware fault is present, the problem returns.

This page covers a unit that **won't leave** defrost. If the unit **never defrosts** and builds up ice, see the related pages listed at the bottom.

## Common causes, ranked by probability

1. **Failed defrost coil sensor (thermistor or defrost thermostat).** If the sensor is damaged, unplugged, or reads cold no matter what, the board never sees the coil as warm. Defrost then runs to the maximum timer every time, or repeats cycle after cycle.
2. **Faulty defrost control board.** A welded defrost relay or a failed board can hold the reversing valve and outdoor fan relay in defrost.
3. **Reversing valve stuck in the cooling position.** The valve slide can stick mechanically, or its solenoid coil can fail. Either way, the system keeps running as if it were in defrost (cooling mode) even after the board ends the cycle. The outdoor fan may come back on, but the indoor air stays cool.
4. **Thermostat O/B setting or wiring mismatch.** Rheem heat pumps energize the reversing valve in cooling (O). A thermostat set to "B" energizes the valve in heating instead, which makes the system blow cool air and mimic stuck defrost. This is especially common right after a new or smart thermostat is installed.
5. **Low refrigerant charge or restricted airflow causing excessive defrosting.** A coil that runs too cold frosts quickly and defrosts constantly. Strictly speaking this is too-frequent defrost rather than a single stuck cycle, but homeowners often describe it the same way.

## Safe checks before you call anyone

- **Confirm it is really stuck.** Watch the outdoor unit for 15 to 20 minutes. If the fan restarts and warm air returns, that was a normal defrost.
- **Check the thermostat.** Make sure it is set to Heat, not Cool or Auto, and replace weak batteries.
  - If a new or smart thermostat was installed recently, open its installer or equipment menu and confirm the reversing valve is set to **energize on cool (O)**. That is the standard setting for Rheem.
  - Do not rewire anything at the thermostat or the unit.
- **Replace a dirty air filter.** Poor airflow makes the coil run colder and defrost more often.
- **Reset power once.** Turn off the thermostat. Switch off the outdoor unit's breaker and outdoor disconnect, wait 5 minutes, then restore power and set the thermostat back to Heat. If it gets stuck again, stop and call a pro.
- **Clear around the outdoor unit.** Remove snow, leaves, or drifts from the sides and top. Do not chip ice off the coil.
- **Check indoor vents and returns.** Make sure they are open and unblocked.
- **Use emergency heat if needed.** Switch the thermostat to Emergency/Aux heat to stay warm until service.

## How a technician will diagnose it

A technician will typically work through these steps:

1. **Read any fault history.** This means the EcoNet diagnostics or the board's LED flash codes, and checking the board's defrost interval jumper setting.
2. **Test the defrost sensor.** They measure its resistance or switching at a known coil temperature against Rheem's chart, and check that it is clipped tightly to the correct tube.
3. **Check the board's outputs.** They confirm 24V at the reversing valve solenoid and outdoor fan relay in each mode, then use the test pins to force defrost and confirm the board ends it properly.
4. **Check the reversing valve.** They measure solenoid coil resistance and use line temperatures and pressures to confirm the valve actually shifts. A valve that stays in the cooling position with the coil de-energized is mechanically stuck.
5. **Check thermostat wiring.** They verify O/B wiring and configuration.
6. **Check refrigerant charge and coil airflow.** They do this if defrost is excessively frequent rather than stuck.

A quote to replace the reversing valve should come only after the technician has ruled out the sensor, the board, and the solenoid coil.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan off for 15+ min, steady steam, cool vents | Defrost sensor reading cold | Reset power once; use emergency heat | Test and replace coil sensor |
| Unit goes straight back into defrost after reset | Failed defrost board or welded relay | Use emergency heat; call for service | Test board outputs, replace board |
| Fan runs again but vents still blow cool | Reversing valve stuck or solenoid coil failed | Check thermostat is on Heat | Test solenoid, replace coil or valve |
| Problem began after a thermostat swap | O/B setting wrong | Set thermostat to energize on cool (O) | Verify and correct thermostat wiring |
| Defrosts every few minutes, weak heat | Low charge or poor airflow | Replace filter; clear around outdoor unit | Leak search, charge check, coil cleaning |

## Repair costs

Typical US prices, parts and labor:

| Repair | Typical cost |
|---|---|
| Thermostat setting correction or filter (DIY) | $0 – $40 |
| Service call and diagnosis | $90 – $200 |
| Defrost coil sensor replacement | $150 – $350 |
| Defrost control board replacement | $300 – $700 |
| Reversing valve solenoid coil | $150 – $400 |
| Reversing valve replacement (brazing, evacuation and recharge) | $1,200 – $2,500 |
| Leak repair and refrigerant recharge | $300 – $1,500+ (depends on leak location and refrigerant type) |

Parts may be covered by Rheem's limited warranty if the unit is registered. Labor usually is not covered unless you have a separate labor warranty.

## Related codes

- Rheem Heat Pump Frozen, Not Defrosting: Causes & Fixes
- Rheem Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Rheem Heat Pump Not Heating: Causes, Fixes & Costs
- Rheem Heat Pump Flashing Light: Causes & Fixes
- Rheem Heat Pump Not Cooling: Causes, Fixes & Costs
