---
title: "Lennox Heat Pump Aux Heat On Constantly: Causes & Fixes"
code: "Auxiliary heat on constantly"
description: "Why a Lennox heat pump runs auxiliary heat nonstop: thermostat setup, low charge, sensor or relay faults. Safe checks, pro fixes and repair costs explained."
brand: lennox
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $1,500+ if a refrigerant leak must be found and repaired"
appliesTo: "Lennox split heat pumps (XP, EL, ML, SL series) with electric air handler heat strips or dual-fuel furnace backup. Behavior depends on the thermostat (iComfort, ComfortSense or third-party), outdoor control board and lockout settings. Dual-fuel systems use the furnace as backup instead of strips."
tags: ["lennox", "heat-pump", "auxiliary-heat", "emergency-heat", "high-electric-bill", "thermostat"]
parts:
  - name: "Furnace/air handler air filter"
    search: "lennox healthy climate replacement air filter"
  - name: "Thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-10-09
dateModified: 2026-10-09
reviewedBy: ""
faq:
  - q: "Is it normal for aux heat to come on with a Lennox heat pump?"
    a: "Yes, briefly. Aux heat normally runs during defrost cycles, when you raise the setpoint by a few degrees, and in very cold weather when the heat pump alone can't keep up. If it runs for hours in mild weather (above roughly 35–40°F), something is wrong."
  - q: "Is aux heat running constantly dangerous?"
    a: "It's usually not a safety hazard, but it is expensive. Electric heat strips can cost two to three times as much to run as the heat pump. It can also hide a failing compressor or refrigerant leak that gets more costly to fix the longer it goes."
  - q: "What's the difference between aux heat and emergency heat?"
    a: "The thermostat turns on aux heat automatically to help the heat pump. You select emergency heat manually, and it shuts the heat pump off so only backup heat runs. If someone left the thermostat in EM HEAT, backup heat will run constantly by design."
  - q: "Should I switch to emergency heat until the technician arrives?"
    a: "If the outdoor unit is clearly not running or is iced solid, emergency heat keeps the house warm and stops the heat pump from straining. Expect higher electric bills. Tell the technician you did this."
  - q: "Does this problem reset itself?"
    a: "There is no fault code that clears. Aux heat comes on whenever the thermostat or control decides the heat pump can't keep up. It stops when the underlying cause is fixed or the thermostat settings are corrected."
---

## What this code means

"Auxiliary heat on constantly" is a symptom, not a fault code. Your Lennox thermostat or control is calling for backup heat almost all the time. That backup is either electric heat strips in the air handler or, on dual-fuel systems, the gas furnace.

Lennox systems bring on aux heat (the W1/W2 call) in a few situations:
- The room temperature falls too far below the setpoint.
- The heat pump has been running a long time without closing the gap.
- The outdoor control is running a defrost cycle.
- The thermostat is set to emergency heat.

Several things change how this looks on your system:
- **Thermostat.** iComfort smart thermostats show "Aux Heat" or "Backup Heat." ComfortSense and third-party thermostats show "Aux" or "EM." Smart and Wi-Fi thermostats also use timers and temperature-gap rules ("droop") to decide when to bring on aux heat.
- **Outdoor temperature settings.** Lockout and balance-point settings in the thermostat or iComfort setup decide whether aux heat is allowed at a given outdoor temperature.

Nothing latches or holds a code. Aux heat keeps running for as long as the condition causing it continues.

This page covers aux heat running while the heat pump *is* running. If the heat pump isn't producing heat at all, see Lennox Heat Pump Not Heating. If the outdoor coil is iced, see the frozen and ice-related pages listed under Related codes.

## Common causes, ranked by probability

1. **Thermostat is set to Emergency Heat, or set up wrong.** Common setup errors include:
   - Wrong system type or equipment type.
   - Missing or wrong outdoor temperature lockout / balance point.
   - The aux "droop" or timer is set too aggressively.
   - On dual-fuel systems, the changeover temperature is set too high.
   
   This is especially common after a thermostat replacement.
2. **Large setpoint jumps or deep night setbacks.** Raising the temperature 3°F or more, or recovering from a setback, triggers aux heat on many thermostats. Lennox smart thermostats limit this with "smart recovery," but other thermostats may not.
3. **Restricted airflow.** A dirty filter, closed registers or a dirty indoor coil reduce heat pump output. The thermostat then calls for backup heat.
4. **Low refrigerant charge (leak).** The heat pump runs but delivers lukewarm air, so the thermostat keeps calling aux. This is very common on older units.
5. **Reversing valve problem.** If the valve is stuck partly in cooling position or leaking through, heating capacity drops.
6. **Outdoor unit not running, or running weakly.** Possible causes include:
   - A failed capacitor or contactor.
   - A failed outdoor fan motor.
   - A compressor fault.
   
   In this case the "heat" you feel is almost all from aux.
7. **Defrost problems.** A faulty defrost thermostat/sensor or outdoor control board can repeat defrost cycles or leave the coil iced, which runs aux heat during each defrost. Covered in detail on the defrost-related pages.
8. **Wiring or relay fault.** Possible causes include:
   - A shorted or miswired W/E terminal.
   - A stuck heat-strip sequencer or relay in the air handler.
   - A fault on the dual-fuel control.
   
   When a relay or sequencer is stuck, the strips can stay energized even with no call. Sometimes they run even with the thermostat off.
9. **Undersized system or extreme cold.** Below the heat pump's balance point, which is often in the 20s–30s°F, long aux run times are normal. This is not a fault.

## Safe checks before you call anyone

- **Check the thermostat mode.** Make sure it's in HEAT, not EM HEAT or Emergency. Look for "Aux," "Backup" or "EM" on the display and note which one appears.
- **Replace thermostat batteries** if your model uses them. Weak batteries can cause odd behavior and setting resets.
- **Avoid big setpoint changes.** Raise the temperature 1–2°F at a time, and turn off deep night setbacks for a few days. See whether aux run time drops.
- **Review the iComfort or app settings** if you have them. Look for the backup heat lockout or balance point. Don't change advanced installer settings you don't understand; note them for the technician.
- **Replace the air filter** if it's dirty. Open all supply registers and make sure return grilles aren't blocked.
- **Look at the outdoor unit from outside.** Is the fan spinning? Is the unit humming? Is it encased in ice? Clear snow or leaves from around it, but don't open it or chip ice off the coil.
- **Check breakers.** Make sure the outdoor unit and air handler breakers and the outdoor disconnect are on. If a breaker has tripped, reset it **once**. If it trips again, leave it off and call a technician.
- **Make sure the air handler access panels are seated.** Don't remove them.
- **Check the condensate drain.** Make sure the drain line or pan isn't overflowing.
- **Feel a supply register with the thermostat in HEAT.** Then compare by switching to EM HEAT briefly and back. If both feel about the same, the heat pump may not be contributing.

If the heat strips seem to run with the thermostat OFF, turn the system off at the breaker and call a technician. A stuck relay can overheat the air handler.

## How a technician will diagnose it

A competent technician will typically:

1. **Check the thermostat.** They should review its setup, wiring (O/B, Y, W1/W2, E, outdoor sensor) and lockout/balance-point settings. On iComfort systems they'll check the equipment configuration and any stored alerts.
2. **Watch the system run in HEAT only, with aux disabled or locked out.** They'll check whether the outdoor unit is running. They'll measure supply and return air temperatures. A heat pump in mild weather usually produces a 20°F rise or more.
3. **Check airflow.** This includes static pressure, the indoor coil and blower speed settings.
4. **Check refrigerant performance.** They'll connect gauges and check pressures, superheat and subcooling against the Lennox charging chart. A low charge leads to a leak search; Lennox recommends leak repair, not just a top-off.
5. **Test the reversing valve.** They'll check its operation and the solenoid coil, and use temperature checks for internal bypass.
6. **Electrically test outdoor components.** This covers the capacitor, contactor and fan motor, plus compressor amperage.
7. **Check defrost operation.** This covers the defrost sensor and the board's defrost settings and timing.
8. **Check the heat strips.** They'll confirm the sequencers or relays open when the W call ends. They'll also check strip amperage and the dual-fuel control logic.

A quote that says only "add refrigerant" without a leak check, or "replace the heat pump" without measurements, deserves a second opinion.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Display shows EM or Emergency Heat | Thermostat in emergency mode | Switch to HEAT | None if that fixes it |
| Aux comes on after each setpoint change or in the morning | Setback recovery or aggressive droop setting | Make smaller changes; reduce setbacks | Adjust staging and droop settings |
| Aux runs often since a new thermostat was installed | Thermostat configured wrong or miswired | Note settings and photograph the display | Correct configuration, wiring and lockouts |
| Weak airflow, dirty filter | Airflow restriction | Replace filter; open registers | Clean coil; check blower and static pressure |
| Outdoor unit runs, but air is lukewarm | Low refrigerant charge or reversing valve problem | None beyond the safe checks | Leak search and repair, recharge, valve diagnosis |
| Outdoor fan or compressor not running | Capacitor, contactor, motor or compressor fault | Reset breaker once | Electrical testing and part replacement |
| Outdoor coil iced or constant defrost | Defrost sensor or board fault | Clear snow from around the unit only | Defrost system diagnosis |
| Heat strips run even with the thermostat off | Stuck sequencer or relay, or shorted W wire | Shut off the breaker and call | Replace sequencer/relay; repair wiring |
| Long aux run times only in very cold weather | Below balance point (normal) | Keep a steady setpoint | Verify sizing and lockout settings if bills seem excessive |

## Repair costs

Typical US prices, including labor:

| Repair | Typical cost |
|---|---|
| Thermostat setting correction (DIY) | $0 |
| Service call / diagnostic | $90–$200 |
| Thermostat reconfiguration or rewiring | $100–$250 |
| New thermostat | $50–$350 for the part, $150–$500 installed |
| Lennox iComfort thermostat | $300–$700+ installed |
| Air filter | $10–$60 (Lennox Healthy Climate media filters at the high end) |
| Indoor coil cleaning | $150–$400 |
| Capacitor | $120–$300 |
| Contactor | $150–$350 |
| Outdoor fan motor | $350–$800 |
| Defrost sensor | $150–$350 |
| Outdoor control board | $300–$800 |
| Heat-strip sequencer or relay | $150–$400 |
| Leak search plus recharge | $300–$1,500+ depending on leak location and refrigerant (R-410A, or newer R-454B systems) |
| Evaporator coil replacement | $1,200–$2,800 |
| Reversing valve replacement | $900–$2,000 (brazing and refrigerant work) |
| Compressor replacement | $1,800–$3,500+ |

When the compressor or coil fails on an older unit, many owners weigh full replacement instead.

Check your Lennox warranty before paying for parts. Registered systems often carry a 10-year parts warranty, but labor is usually extra.

## Related codes

- Lennox Heat Pump Not Heating: Causes, Fixes & Costs
- Lennox Heat Pump Frozen and Not Defrosting: Fixes & Cost
- Lennox Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Lennox Heat Pump Stuck in Defrost Mode: Causes & Fixes
- Lennox Furnace Runs Constantly But Not Enough Heat (dual-fuel systems)
- Lennox Furnace Code E180: Outdoor Sensor Fix & Cost
