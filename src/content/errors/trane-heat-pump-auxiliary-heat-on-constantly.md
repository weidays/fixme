---
title: "Trane Heat Pump Aux Heat On Constantly: Causes & Fixes"
code: "Auxiliary heat on constantly"
description: "Why a Trane heat pump runs auxiliary heat nonstop: thermostat setup, low charge, failed relays, defrost faults. Safe checks and repair costs."
brand: trane
equipment: heat-pump
severity: pro
costRange: "$0 for thermostat or filter fixes – $1,500+ for a refrigerant leak repair and recharge"
appliesTo: "Trane split heat pumps (XR, XL, XV series and similar) paired with electric strip heat in an air handler or with a gas furnace in a dual-fuel setup. Aux/emergency heat logic depends on the thermostat (Trane ComfortLink, Link, or third-party), outdoor temperature lockout settings, and air handler heater relay or sequencer design, which vary by model."
tags:
  - heat-pump
  - auxiliary-heat
  - emergency-heat
  - thermostat
  - high-electric-bill
  - trane
parts:
  - name: "Air filter (match your return grille size)"
    search: "MERV 8 furnace air filter 16x25x1"
  - name: "Thermostat AA batteries"
    search: "AA alkaline batteries 8 pack"
datePublished: 2026-10-09
dateModified: 2026-10-09
reviewedBy: ""
faq:
  - q: "Is it normal for auxiliary heat to come on with a Trane heat pump?"
    a: "Yes, in some situations. Aux heat normally runs during defrost cycles, when you raise the setpoint by several degrees at once, and in very cold weather when the heat pump can't keep up. It should not run all day in mild weather. If it does, something is wrong."
  - q: "Can I just turn off auxiliary heat to save money?"
    a: "Only if the heat pump is actually heating and the house stays comfortable. If the compressor has failed or the system is low on refrigerant, disabling aux heat will leave you with no heat. You also cannot turn off aux heat on most thermostats without turning off the backup during defrost. Have the cause diagnosed rather than masking it."
  - q: "How much does constant auxiliary heat cost to run?"
    a: "Electric strip heat often draws 10 to 20 kW, so it can cost several dollars an hour at typical US rates. That is roughly two to three times what the heat pump costs for the same heat. A sudden spike in your electric bill is often the first clue."
  - q: "What is the difference between aux heat and emergency heat?"
    a: "Aux heat is backup heat that the thermostat adds automatically while the heat pump keeps running. Emergency heat is a mode you select manually. It shuts off the heat pump and runs only the backup heat. If the display shows EM or Emergency, the thermostat may simply have been left in that mode."
---

## What this code means

"Auxiliary heat on constantly" is a symptom, not a numbered fault code. Your thermostat is calling for backup heat almost all the time. That backup is either electric strip heaters in the air handler or, on dual-fuel systems, the gas furnace.

A Trane heat pump normally brings in aux heat in only a few situations:

- during defrost,
- during a large setpoint increase,
- when outdoor temperatures fall below the system's balance point.

When aux heat runs for hours in mild weather, there are usually two possibilities. Either the heat pump is not producing enough heat, or the control system is wrongly calling for backup (or failing to turn it off).

There is no lockout or reset associated with this condition. The thermostat simply keeps asking for aux heat as long as whatever causes it persists.

How aux heat staging works depends on the thermostat:

- Trane Link/ComfortLink communicating thermostats use their own staging logic and outdoor temperature lockouts.
- Conventional thermostats rely on time and temperature-difference settings.

Check your thermostat's installer settings or manual for specifics.

## Common causes, ranked by probability

1. **Thermostat set to Emergency Heat, or configured wrong.** This includes being left in EM heat, the wrong system type selected, too narrow an aux-heat temperature difference, or no outdoor lockout. It is the most common cause and the cheapest fix.
2. **Large setpoint jumps or aggressive setbacks.** Raising the temperature 3°F or more at once, or "recovering" from a night setback, prompts most thermostats to bring on aux heat. On some models it stays on until the setpoint is reached.
3. **Restricted airflow.** A clogged filter, closed registers, or a dirty indoor coil reduces heat pump output, so the thermostat compensates with aux heat.
4. **Heat pump not running or not heating.** Causes include a failed outdoor capacitor or contactor, a tripped outdoor breaker, a failed compressor, or a stuck reversing valve. The strips carry the entire load. See the separate Not heating page.
5. **Low refrigerant charge (leak).** The heat pump runs but produces weak, lukewarm heat, so aux heat runs to make up the difference.
6. **Defrost problems.** A unit that defrosts too often, or that stays iced up, keeps calling for the strip heat used during defrost.
7. **Stuck heater relay or sequencer, or a wiring fault.** The strips stay energized even after the thermostat drops the W2/AUX call. The heat may stay on even with the thermostat satisfied.
8. **Faulty outdoor temperature sensor or misconfigured dual-fuel balance point.** On dual-fuel or communicating systems, a bad outdoor reading can lock out the compressor and run the furnace or strips instead.
9. **Undersized heat pump or genuinely cold weather.** Below roughly 25–35°F, many standard (non-variable-speed) heat pumps rely heavily on aux heat. This is normal design behavior, not a defect.

## Safe checks before you call anyone

- **Check the thermostat mode.** Make sure it says Heat (or Auto), not Emergency/EM Heat. If it was in EM, switch to Heat and watch for an hour.
- **Avoid big setpoint jumps.** Raise the temperature 1–2°F at a time. Consider reducing or turning off deep night setbacks.
- **Replace thermostat batteries** if your model uses them. A weak display can cause erratic behavior.
- **Replace or check the air filter.** A dirty filter is a common, easily fixed cause of poor heat pump output.
- **Open supply registers and clear return grilles.** Move furniture and rugs away from them.
- **Look at the outdoor unit** without opening it.
  - Is the fan spinning and the unit humming while heating?
  - Is it buried in ice or snow? Clear snow and debris from around it by hand. Do not chip ice off the coil.
  - If it is completely silent, check the outdoor unit's breaker and the outdoor disconnect. Reset a tripped breaker once. If it trips again, leave it off and call a technician.
- **Feel the air at a register with aux heat off** (if the thermostat displays when aux is active, wait for a period when it isn't). Heat pump air feels warm but not hot, typically 85–100°F. Cool or room-temperature air while heating points to a heat pump problem.

Stop there. Everything else is technician work: refrigerant, capacitors, relays, sequencers, sensors, and wiring inside the cabinets.

## How a technician will diagnose it

A competent technician will:

- **Review the thermostat's installer settings.** This includes system type, aux-heat temperature difference and time-based staging, outdoor lockout or balance point, and dual-fuel changeover. On communicating Trane systems, they will also check stored alerts in the thermostat or service tool.
- **Check whether the compressor and outdoor fan run on a heat call.** They test the contactor, run capacitor, and line voltage at the outdoor unit.
- **Measure temperature rise across the air handler** with strips off. This confirms how much heat the heat pump alone produces.
- **Connect gauges or use digital probes** to check suction/discharge pressures, superheat, and subcooling. If charge is low, they should perform a leak search, not just "top off."
- **Verify reversing valve operation** in heating mode.
- **Check the strip heat circuit.** They confirm W2/AUX voltage at the air handler, then whether the heater relays or sequencers open when the call ends. A stuck relay keeps strips hot with no call.
- **Test the outdoor temperature sensor and defrost control,** including how often defrost cycles occur.
- **Inspect airflow:** blower speed setting, indoor coil cleanliness, and static pressure.

A good quote names the specific failed component and the measurement that proved it. Be cautious of "add refrigerant" recommendations with no leak search, or a full system replacement proposed without pressure and temperature data.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Display shows EM or Emergency Heat | Thermostat left in emergency mode | Switch to Heat; monitor | None if heat pump runs normally |
| Aux heat comes on every morning | Large setback recovery | Reduce setback; raise setpoint gradually | Adjust staging and lockout settings |
| Aux runs in mild (45°F+) weather | Thermostat misconfigured, low charge, or airflow problem | Check mode, filter, registers | Review settings; check charge and airflow |
| Outdoor unit silent during heat call | Tripped breaker, failed capacitor or contactor, compressor fault | Reset outdoor breaker once | Test and replace electrical components |
| Outdoor unit runs, air is barely warm | Low refrigerant, reversing valve issue | Replace filter | Leak search, repair, recharge; valve diagnosis |
| Heavy frost or ice that won't clear | Defrost control or sensor fault | Clear snow around unit; don't chip ice | Diagnose defrost board and sensors |
| Very hot air, heat runs with thermostat satisfied | Stuck heater relay or sequencer | Turn thermostat off; call | Replace relay or sequencer; check wiring |
| Dual-fuel furnace runs instead of heat pump | Balance point set too high, bad outdoor sensor | Note outdoor temps when it happens | Reset balance point; replace sensor |
| Aux only during very cold snaps | Normal heat pump capacity limit | None | Optional: evaluate sizing or cold-climate unit |

## Repair costs

Typical US ranges, including parts and labor:

| Repair | Typical cost |
|---|---|
| Thermostat mode or settings correction | $0 DIY, or $90–$200 service call |
| Air filter | $10–$40 |
| New thermostat (homeowner-installed basic model) | $40–$250 |
| Technician-installed or communicating Trane thermostat | $250–$700 |
| Run capacitor replacement | $150–$400 |
| Contactor replacement | $150–$350 |
| Heater relay or sequencer replacement | $150–$450 |
| Outdoor temperature sensor or defrost sensor | $150–$400 |
| Defrost control board | $300–$800 |
| Refrigerant leak search and recharge | $300–$900 |
| Leak repair with recharge (depends on location and refrigerant type, R-410A vs. R-454B) | $600–$1,500+ |
| Reversing valve replacement | $1,000–$2,500 |
| Compressor replacement (if under warranty, labor and refrigerant only) | $1,800–$3,500 |

Check your Trane registered limited warranty before approving major parts.

## Related codes

- Trane Heat Pump Not Heating: Causes, Fixes & Costs
- Trane Heat Pump Frozen, Not Defrosting: Causes & Fixes
- Trane Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Trane Heat Pump Stuck in Defrost Mode: Causes & Fixes
- Trane Furnace Runs Constantly But Not Enough Heat (for dual-fuel systems where the furnace is the backup)
