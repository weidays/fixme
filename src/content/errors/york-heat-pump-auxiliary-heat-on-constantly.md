---
title: "York Heat Pump Aux Heat On Constantly: Causes & Fixes"
code: "Auxiliary heat on constantly"
description: "Why a York heat pump runs auxiliary heat nonstop: thermostat setup, lockout settings, low charge, relay faults. Fixes and repair costs explained."
brand: york
equipment: heat-pump
severity: pro
costRange: "$0 DIY thermostat fix – $1,500+ if a refrigerant leak must be found and repaired"
appliesTo: "York and Johnson Controls split heat pumps (e.g. YZ, YH, YHE series) paired with York or Coleman air handlers or furnaces (dual fuel). How aux heat is staged depends on the thermostat (York Hx, Affinity/Touch, or third-party), the air handler heat-kit control, and the outdoor unit control board. Behavior varies by model and installation."
tags:
  - york
  - heat-pump
  - auxiliary-heat
  - emergency-heat
  - thermostat
  - high-electric-bill
parts:
  - name: "AA thermostat batteries"
    search: "AA alkaline batteries thermostat"
  - name: "Air filter (match your size)"
    search: "MERV 8 furnace air filter 16x25x1"
datePublished: 2026-10-09
dateModified: 2026-10-09
reviewedBy: ""
faq:
  - q: "Is it normal for aux heat to come on sometimes with a York heat pump?"
    a: "Yes. Aux heat is meant to help during defrost cycles, after a large setpoint increase, and in very cold weather when the heat pump can't keep up. It is not normal for aux heat to run most of the time in mild weather, roughly above 35-40°F."
  - q: "What's the difference between aux heat and emergency heat?"
    a: "Aux heat is added automatically alongside the heat pump. Emergency heat is chosen by you, and it turns the heat pump off so only the backup heat runs. If the thermostat is accidentally left in EM HEAT, the backup heat will run constantly."
  - q: "Can I keep running it with aux heat on constantly?"
    a: "Usually yes for a short time, and the house will stay warm. Electric strip heat costs roughly two to three times as much to run as the heat pump. Constant aux can also hide a failed compressor or a refrigerant leak that gets worse. Book service soon."
  - q: "Will my York system reset this by itself?"
    a: "There is no single fault code for constant aux heat. It is a symptom, not a lockout. If a setting is the cause, fixing the setting fixes it right away. If the heat pump has failed or is short of capacity, it continues until a technician repairs it. Outdoor board lockout codes vary by model."
---

## What this code means

"Auxiliary heat on constantly" is not a York flash code. It means the thermostat or control is calling for second-stage backup heat (electric strips, or a gas furnace on dual-fuel systems) almost all the time. You may also see an "AUX" or "AUX HEAT" indicator stay lit.

A York heat pump normally adds aux heat in three situations:

- During defrost
- When the room falls well below the setpoint
- When it's too cold outside for the heat pump to keep up on its own

If aux runs constantly, there are two broad possibilities:

- **A settings or wiring problem.** Aux is being called when it isn't needed.
- **A heat pump problem.** The heat pump isn't producing enough heat, so the thermostat keeps leaning on backup heat.

The second case overlaps with "Not heating" and "Frozen and not defrosting." This page focuses on how to tell which situation you're in, and on the aux-specific causes.

## Common causes, ranked by probability

1. **Thermostat set to Emergency Heat (EM HEAT).** This locks out the compressor so only backup heat runs.
2. **Thermostat configuration.** Common problems include:
   - The thermostat is set up as a gas/electric system instead of a heat pump.
   - Aux heat lockout or balance-point settings are missing or wrong.
   - Recovery or "smart recovery" settings bring on aux after every setback.
   - Large manual setpoint jumps of 2-3°F or more trigger aux.
3. **Heat pump not producing heat.** The compressor or outdoor fan isn't running, there's a failed capacitor or contactor, or the reversing valve is stuck. The thermostat then falls back on aux.
4. **Low refrigerant charge from a leak.** The heat pump runs, but its output is weak.
5. **Outdoor coil iced over or stuck in defrost.** Defrost energizes aux by design. See "Stuck in defrost mode."
6. **Wiring or control fault.** Examples include a W2/E wire miswired or shorted, a heat-kit sequencer or relay welded closed, or an outdoor thermostat or dual-fuel control that has failed. In this case the strips can run even when the thermostat shows no aux call.
7. **Restricted airflow.** A dirty filter or closed registers reduce heat-pump output and can cause high-pressure trips.
8. **Undersized system or very cold weather.** Some aux use below the balance point (often 25-35°F) is expected, not a fault.

## Safe checks before you call anyone

- **Check the mode.** Make sure the thermostat is in HEAT (or AUTO), not EM HEAT or EMERGENCY.
- **Stop making big setpoint jumps.** Raise the temperature 1°F at a time and watch whether AUX turns off. If your thermostat has a setback schedule, try holding a steady temperature for a day.
- **Replace the thermostat batteries** if it uses them.
- **Look at the outdoor unit while AUX shows.** Is the fan spinning and the unit humming? Is the coil covered in solid ice for more than about 90 minutes? Look only. Don't open panels or chip ice.
- **Check the filter.** Replace it if it's dirty. Open any closed supply registers and clear blocked returns.
- **Check the breakers.** Confirm the outdoor unit breaker and its disconnect are on. If a breaker has tripped, reset it once. If it trips again, leave it off and call a technician.
- **Check the access panels.** Make sure the air handler and outdoor unit panels are fully seated.

## How a technician will diagnose it

A sound diagnosis typically includes these steps:

- **Review the thermostat installer setup.** The technician confirms the system type, aux lockout and balance-point temperatures, and droop/recovery settings, and checks the O/B, Y, W2/AUX and E terminals.
- **Measure supply and return temperatures.** They run heat-pump-only and then aux-only to see whether the heat pump alone produces a normal temperature rise.
- **Check the compressor and fans.** This includes compressor and outdoor fan operation, amp draw, the run capacitor, and the contactor.
- **Measure system pressures, superheat and subcooling** to check the refrigerant charge and the reversing valve. If the charge is low, they should look for the leak rather than just add refrigerant.
- **Read outdoor control board fault codes.** York/JCI boards vary by model, and some hold a lockout until power is cycled.
- **Check the defrost system.** This covers the defrost sensor, the board, and defrost timing.
- **Check the heat kit.** They look for welded sequencers or relays and stray voltage on W2, and on dual-fuel systems they check the fossil-fuel kit or outdoor thermostat.

Be cautious about a quote for "add refrigerant" with no leak search, or for a new system before a simple settings check has been done.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| EM HEAT shown, outdoor unit off | Emergency heat selected | Switch to HEAT | None |
| AUX comes on after every schedule change | Recovery or setback settings, large setpoint jumps | Use small steps, hold a steady temperature | Adjust droop and aux lockout settings |
| AUX on, outdoor unit silent | Compressor, capacitor, contactor or breaker | Check and reset the breaker once | Electrical diagnosis and component replacement |
| Outdoor unit runs, air lukewarm, AUX on | Low charge or stuck reversing valve | Replace filter | Find and repair the leak, recharge, or replace the valve |
| Heavy ice, AUX on for a long time | Defrost failure | Visual check only | Test the defrost sensor and board |
| Strips heat with no AUX call | Welded sequencer/relay or wiring fault | Turn off and call | Replace the sequencer or relay, repair wiring |
| AUX only below about 30°F outdoors | Normal balance-point operation | None | Optional load or balance-point review |

## Repair costs

| Repair | Typical US cost |
|---|---|
| Thermostat settings fix | $0 DIY; $90-$200 service call |
| New thermostat installed | $150-$500 |
| Run capacitor | $120-$350 |
| Contactor | $150-$350 |
| Heat-kit sequencer/relay | $150-$400 |
| Defrost sensor or control board | $200-$650 |
| Leak search and repair plus recharge | $400-$1,500+, depending on leak location and refrigerant |
| Reversing valve | $900-$2,000 |
| Compressor | $1,800-$3,500+ (often weighed against replacing the system) |

## Related codes

- York Heat Pump Not Heating: Causes, Fixes & Costs
- York Heat Pump Frozen, Not Defrosting: Causes & Fixes
- York Heat Pump Stuck in Defrost Mode: Causes & Fixes
- York Heat Pump Ice on Outdoor Unit: Causes & Fixes
- York Furnace Runs Constantly But Not Enough Heat: Fixes (dual-fuel systems)
