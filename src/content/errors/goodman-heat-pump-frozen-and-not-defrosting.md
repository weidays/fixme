---
title: "Goodman Heat Pump Frozen and Not Defrosting: Fixes"
code: "Frozen and not defrosting"
description: "Goodman heat pump iced over and not defrosting? Learn the causes (defrost board, sensor, reversing valve, low charge), safe fixes and repair costs."
brand: goodman
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $2,000+ if the reversing valve must be replaced"
appliesTo: "Goodman split-system heat pumps (GSZ, GSZC, GSZB, SSZ series and similar Amana-branded models) using a demand-defrost or time-temperature defrost control board. Defrost timing, sensor type and fault indication vary by model and board revision; communicating models (e.g. GSZC with ComfortBridge) may log diagnostic codes on the outdoor control."
tags:
  - goodman
  - heat-pump
  - defrost
  - frozen-coil
  - ice
  - winter
parts:
  - name: "Furnace/air handler air filter"
    search: "HVAC air filter MERV 8 16x25x1"
  - name: "Thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-10-05
dateModified: 2026-10-05
reviewedBy: ""
faq:
  - q: "Is some frost on my Goodman heat pump normal in winter?"
    a: "Yes. A light, even layer of frost on the outdoor coil is normal in cold, damp weather. The unit should periodically run a defrost cycle, often with steam rising and the fan stopped, that clears it within roughly 2 to 10 minutes. Solid ice that keeps building through several hours is not normal."
  - q: "Can I chip or hose the ice off my heat pump?"
    a: "Never chip or pry ice. That can puncture the coil and cause a refrigerant leak. Switching the thermostat to emergency heat or off lets the ice melt on its own. Gently running lukewarm water from a garden hose over the coil is generally considered acceptable. Never use hot water, tools or a heat gun."
  - q: "Can I keep running the heat pump while it is iced up?"
    a: "It is best not to. A heavily iced coil cannot absorb heat, so efficiency collapses. Liquid refrigerant can also return to the compressor and damage it. Switch to emergency or auxiliary heat until a technician finds out why defrost failed."
  - q: "Does the Goodman defrost board reset itself?"
    a: "Defrost controls are not lockout devices. They start defrost based on time and coil temperature, so there is nothing for a homeowner to reset. Some boards include a test function, but it requires access inside the outdoor unit and is technician work. Cycling power once at the breaker is a reasonable first step."
---

## What this code means

"Frozen and not defrosting" is a symptom, not a numbered flash code. It means the outdoor coil of your Goodman heat pump is encased in ice that is not clearing.

In heating mode, the outdoor coil runs below freezing, so frost forms. To clear it, the defrost control briefly does three things:

- It reverses the refrigerant flow through the reversing valve.
- It stops the outdoor fan.
- It usually brings on auxiliary heat indoors.

On most Goodman boards, defrost starts after a set run time (commonly selectable 30, 60, 90 or 120 minutes). The coil sensor must also confirm the coil is cold, typically around 30–32°F. Defrost ends when the coil warms up, typically around 55–70°F depending on the board, or after a maximum time of about 10 minutes.

If any part of that chain fails, ice keeps building. Common failures include the board, the sensor, the reversing valve, the refrigerant charge or airflow.

Exact thresholds and timer settings vary by board and model, so check the wiring diagram on the inside of your unit's panel. There is no lockout to clear. The condition persists until the underlying fault is fixed. Communicating models may store a fault code that a technician can read.

**Not every icing problem is a defrost failure.** Ice only on the bottom of the coil, from water dripping off the roof or a blocked drain path under the unit, can look similar but has a different cause.

## Common causes, ranked by probability

These follow the general order in Goodman's defrost troubleshooting: control and sensor first, then airflow and charge, then the reversing valve.

1. **Failed or misreading defrost (coil) sensor/thermostat.** If the sensor never reports a cold coil, the board never starts defrost. A loose clip on the coil tube is also common.
2. **Faulty defrost control board.** A bad timer circuit or defrost relay means defrost never starts, or starts without switching the valve.
3. **Low refrigerant charge (leak).** This makes the coil run far colder than designed and frost faster than defrost can clear. It often goes with weak heating.
4. **Restricted outdoor airflow.** Snow drifts, leaves, a dirty coil, or an outdoor fan motor or capacitor failure can cause rapid icing.
5. **Reversing valve or solenoid coil failure.** The board calls for defrost but the valve does not shift, so the coil never warms.
6. **Restricted indoor airflow.** A dirty filter, closed registers or a weak blower lowers system pressures and worsens frosting.
7. **Water from above or poor drainage.** Roof runoff without a gutter, or a unit sitting too low in snow or ice, can refreeze on the coil. Proper defrost cannot clear water that keeps arriving.
8. **Thermostat/wiring issues.** A wrong O/B setting or miswired auxiliary heat can affect defrost behavior. This is less common on a system that previously worked fine.

## Safe checks before you call anyone

1. **Switch to Emergency Heat (EM/AUX) or turn the system off** to stop further icing and protect the compressor. Let the ice melt naturally. Do not chip it.
2. **Check the air filter** at the furnace or air handler. Replace it if it is dirty.
3. **Open all supply registers and return grilles.** Make sure furniture is not blocking them.
4. **Clear snow, leaves and debris** from around the outdoor unit. Keep about 2 feet of clearance and keep the base above snow level. Do this from the outside only, without opening panels.
5. **Look for water dripping onto the unit** from the roof or a gutter. Note it for the technician.
6. **Check the thermostat.** Confirm it is set to Heat, the batteries are fresh, and the settings have not changed.
7. **Cycle power once.** Turn off the thermostat, switch off the outdoor unit's breaker or disconnect for 5 minutes, and then restore power. Watch whether a defrost cycle (fan stops, steam rises) occurs within an hour or two of heating operation. Do not keep resetting it.
8. **Confirm the outdoor unit's exterior panels are seated.** Missing panels change airflow.

If the coil ices solid again after it has thawed, call a technician. Keep using emergency heat in the meantime.

## How a technician will diagnose it

- **Visual check of the ice pattern.** Uniform ice suggests a defrost or charge problem. Ice only on the bottom suggests drainage or runoff.
- **Forced defrost test.** The technician will short the board's TEST pins, or use the procedure for that board, to force a defrost. They will confirm three things: the outdoor fan stops, the reversing valve shifts with an audible whoosh, and auxiliary heat comes on.
- **Defrost sensor test.** The technician measures resistance or continuity against the chart for that board and checks the sensor's clamp on the coil tube.
- **Board voltage checks.** They test the defrost relay output and the 24 V supply to the reversing valve solenoid.
- **Reversing valve diagnosis.** This includes testing the solenoid coil and measuring line temperatures to see if the valve is stuck or leaking through.
- **Refrigerant pressures, superheat and subcooling.** These are measured in heating mode. If the charge is low, a leak search should follow, not just a top-off.
- **Outdoor fan motor and capacitor check.** The technician also inspects the coil for cleanliness.
- **Indoor airflow check.** This covers static pressure, blower speed and the condition of the coil and filter.

A sound quote should name the failed part and the test that identified it. Be wary of a refrigerant recharge with no leak search, or a board replacement without a forced-defrost test.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Solid ice, unit never seems to defrost | Defrost sensor or board | Switch to EM heat; cycle power once | Forced defrost test; replace sensor or board |
| Fan stops for defrost, but ice stays and no steam appears | Reversing valve or solenoid not shifting | Switch to EM heat | Test solenoid coil and voltage; replace coil or valve |
| Ices quickly, weak warm air indoors | Low refrigerant charge | Check filter; switch to EM heat | Leak search, repair, evacuate and recharge |
| Ices and outdoor fan not spinning | Fan motor or capacitor | Clear debris outside; switch to EM heat | Test and replace capacitor or fan motor |
| Ice only on bottom of coil or base | Roof runoff, poor drainage, unit buried in snow | Clear snow; fix gutter; raise clearance | Install riser or stand, or check drain path |
| Frost builds with dirty filter or closed vents | Low indoor airflow | Replace filter; open registers | Check blower, coil and static pressure |
| Odd defrost behavior after thermostat change | Thermostat setup or wiring | Verify heat pump settings and batteries | Correct O/B and auxiliary wiring |

## Repair costs

Typical US ranges, parts and labor:

| Repair | Typical cost |
|---|---|
| Filter, clearing snow, thermostat batteries (DIY) | $0 – $40 |
| Diagnostic visit | $90 – $200 |
| Defrost sensor/thermostat replacement | $150 – $350 |
| Defrost control board replacement | $250 – $650 |
| Outdoor fan capacitor | $120 – $300 |
| Outdoor fan motor | $350 – $800 |
| Reversing valve solenoid coil | $150 – $400 |
| Reversing valve replacement (brazing, evacuation, recharge) | $1,000 – $2,500+ |
| Leak search and repair plus R-410A or R-32 recharge | $300 – $1,500+ (depends on leak location and refrigerant) |
| Coil cleaning | $100 – $250 |
| Riser or stand for outdoor unit, gutter fix | $75 – $400 |

Goodman parts warranties (often 10 years with registration) may cover the board, sensor or reversing valve. Labor is usually extra unless you have a labor plan.

## Related codes

- Goodman Heat Pump Not Heating: Causes, Fixes & Costs
- Goodman Heat Pump Not Cooling: Causes, Fixes & Costs
- Goodman AC Running But Not Cooling: Causes & Costs
- Goodman Furnace Blowing Cold Air: Causes & Fixes
