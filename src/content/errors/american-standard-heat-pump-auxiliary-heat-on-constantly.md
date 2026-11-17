---
title: "American Standard Heat Pump Aux Heat Always On: Fixes"
code: "Auxiliary heat on constantly"
description: "American Standard heat pump running aux heat nonstop? Causes like thermostat setup, low charge or a failed relay, safe checks, and $0–$2,500 repair costs."
brand: american-standard
equipment: heat-pump
severity: pro
costRange: "$0 DIY thermostat fix – $2,500+ if the compressor or reversing valve fails"
appliesTo: "American Standard split heat pumps (Silver, Gold, Platinum series) with electric-strip air handlers or dual-fuel furnaces; staging logic differs between conventional 24V thermostats and communicating AccuLink/Link controls"
tags:
  - heat-pump
  - auxiliary-heat
  - emergency-heat
  - thermostat
  - high-energy-bill
parts:
  - name: "Pleated air filter (match your filter size)"
    search: "pleated HVAC air filter MERV 8"
  - name: "AA/AAA thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-11-17
dateModified: 2026-11-17
reviewedBy: ""
faq:
  - q: "Is it normal for aux heat to come on with my American Standard heat pump?"
    a: "Yes, briefly. Aux heat normally comes on during defrost, during a large setpoint increase, or in very cold weather when the heat pump alone can't keep up. If it runs constantly in mild weather (above roughly 35–40°F), something is wrong."
  - q: "What's the difference between aux heat and emergency heat?"
    a: "Aux heat supplements the running heat pump automatically. Emergency heat turns the heat pump off and uses only the backup heat. If your thermostat is set to EM HEAT, the backup will run constantly by design."
  - q: "Why does constant aux heat matter?"
    a: "Electric strip heat costs roughly two to three times as much to run as the heat pump. Constant operation can double or triple a winter electric bill, and it often hides a failing heat pump that needs a technician."
  - q: "Can I just turn off aux heat to save money?"
    a: "Not safely as a fix. If the heat pump isn't working, the house may get too cold and pipes may freeze. Correct any thermostat setting errors, then have a technician find out why the heat pump isn't carrying the load."
---

## What this code means

"Auxiliary heat on constantly" is not a numbered fault code. It describes a symptom. Your thermostat shows AUX (or "Aux Heat On") almost all the time, or your electric bill jumps while the house heats slowly.

On an American Standard heat pump system, aux heat comes from one of two sources:

- **Electric resistance strips** in the air handler.
- **A gas furnace**, on dual-fuel systems.

The thermostat calls for that backup heat (the W2/AUX terminal) when the heat pump can't reach the setpoint fast enough. The system also uses it during defrost.

When aux heat runs nonstop, it usually means one of three things:

- The thermostat is set up to call for it too aggressively.
- The heat pump isn't producing enough heat.
- A control or relay is holding the backup heat on.

This is a running condition, not a lockout, so there is nothing to "reset." It clears only when the underlying cause is fixed.

Behavior varies by control type:

- **Communicating systems (AccuLink/Link):** the thermostat or outdoor control may also log a separate stored alert worth reading.
- **Conventional 24V systems:** these show only the AUX indicator.

If the outdoor unit is iced over or stuck in defrost, see those dedicated pages first.

## Common causes, ranked by probability

1. **Thermostat in Emergency Heat or misconfigured.** Common setup problems include:
   - EM HEAT mode left on.
   - The thermostat set up for a furnace instead of a heat pump.
   - An overly tight aux droop or differential.
   - Too high an "aux lockout" (balance point) outdoor temperature.
2. **Large setpoint changes or deep night setbacks.** Raising the setpoint 3°F or more, or recovering from a setback, triggers aux heat. Non-smart thermostats are especially prone to this.
3. **Extreme cold below the balance point.** Below about 25–35°F, depending on the model and the home, some aux heat runtime is expected.
4. **Restricted airflow.** A dirty filter, closed registers, or a dirty indoor coil reduce capacity. That makes the heat pump lag behind the thermostat.
5. **Low refrigerant charge (leak).** The heat pump runs but delivers lukewarm air, so the thermostat keeps calling for aux.
6. **Outdoor unit not running or not heating.** Possible causes include a failed contactor, capacitor, outdoor fan, or compressor, or a reversing valve stuck in cooling.
7. **Defrost control or sensor fault.** This causes excessive or stuck defrost cycles, and aux heat runs during each one.
8. **Stuck heat sequencer or relay, or a wiring fault.** The strips stay energized even without a call for heat. This can include a W2 jumper or a mis-wired thermostat.
9. **Outdoor temperature sensor fault (communicating or smart thermostats).** A bad reading makes the system think it's colder outside than it is.

## Safe checks before you call anyone

- **Check the thermostat mode.** Make sure it says HEAT, not EM HEAT or Emergency.
- **Check the thermostat setup.** In its installer settings, confirm it's configured as a heat pump. Look for any aux lockout temperature (often 35–40°F is reasonable). Change only settings you can note and restore.
- **Avoid big setpoint jumps.** Raise the temperature 1–2°F at a time and use smaller setbacks for a few days. Then see whether AUX time drops.
- **Replace the thermostat batteries** if your model uses them.
- **Replace the air filter** if it's dirty, and open any closed supply registers.
- **Clear visible return grilles** of furniture and blockages.
- **Look at the outdoor unit from outside the cabinet.** With the system calling for heat, check whether the fan is spinning and the unit humming. Clear snow, leaves, and debris from around it by hand. Don't chip ice or open panels.
- **Check the outdoor breaker and disconnect.** If the breaker is tripped, reset it once. If it trips again, stop and call a pro.
- **Make sure the air handler panels are fully seated.**
- **Check the condensate drain** at the indoor unit for a clog or backup.
- **Check the air at the registers** with the heat pump running and AUX not displayed. Air that feels cool or only slightly warm points to a heat pump problem that needs a technician.

## How a technician will diagnose it

- **Thermostat and wiring.** They'll review the thermostat configuration and staging settings. They'll also check whether W2/AUX has 24V present without a thermostat call, which would indicate a wiring or relay fault.
- **Strip heat circuit.** They'll measure amp draw on the strip heaters and test the sequencers or relays to see if they stay closed after the call ends.
- **Heat pump output.** They'll measure supply and return air temperatures with aux off. A healthy heat pump typically gives roughly a 15–30°F rise, depending on outdoor temperature.
- **Refrigerant pressures and temperatures.** They'll check superheat and subcooling in heating mode and leak-search if the system is undercharged.
- **Outdoor unit components.** They'll inspect the contactor, run capacitor, outdoor fan motor, and compressor amps. They'll also check reversing valve operation.
- **Defrost system.** They'll test the defrost control and coil sensor, and read stored alerts on communicating (AccuLink/Link) systems.
- **Outdoor air sensor.** They'll verify its readings, if the system has one.

A quote should name a specific failed part or setting, backed by readings. "Just add refrigerant" without finding the leak is a red flag.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Display shows EM HEAT | Emergency heat mode selected | Switch to HEAT | None |
| AUX appears after each temperature increase | Large setpoint jumps or setback recovery | Use 1–2°F changes; reduce setback | Adjust staging or droop settings |
| AUX on in mild weather, outdoor unit running | Thermostat misconfigured, low charge, or dirty coil | Check heat pump configuration; replace filter | Verify setup; check charge; repair leak; clean coil |
| Outdoor unit silent during heat call | Tripped breaker, failed contactor or capacitor, compressor issue | Reset breaker once | Test and replace electrical parts or compressor |
| Lukewarm air, outdoor unit running | Low refrigerant or reversing valve stuck | Replace filter | Leak repair and recharge; valve or solenoid repair |
| Frequent or long defrosts with AUX | Defrost control or sensor fault | Clear debris around unit | Test and replace defrost board or sensor |
| Strips hot even with thermostat satisfied | Stuck sequencer or relay, or a wiring short | Turn system off at thermostat; call pro | Replace sequencer or relay; correct wiring |
| Thermostat shows wrong outdoor temperature | Outdoor sensor fault | Note the reading | Replace or relocate sensor |

## Repair costs

| Repair | Typical US cost |
|---|---|
| Thermostat setting correction | $0 DIY; $90–$200 service call |
| New thermostat | $50–$300 for the part; $150–$500 installed. Communicating American Standard controls cost more. |
| Air filter | $10–$40 |
| Indoor coil cleaning | $150–$400 |
| Contactor or capacitor | $150–$400 |
| Outdoor fan motor | $350–$800 |
| Heat sequencer or strip heat relay | $150–$450 |
| Defrost control board | $300–$700 |
| Defrost or outdoor air sensor | $120–$300 |
| Leak search and refrigerant recharge | $300–$1,500+, depending on leak location and refrigerant type |
| Reversing valve replacement | $1,000–$2,500 |
| Compressor replacement | $1,800–$3,500+; may favor full unit replacement on older systems |

## Related codes

- American Standard Heat Pump Not Heating: Causes & Fixes
- American Standard Heat Pump Frozen, Not Defrosting: Fixes
- American Standard Heat Pump Stuck in Defrost Mode: Fixes
- American Standard Heat Pump Ice on Outdoor Unit: Fixes
- American Standard AC Outdoor Fan Not Spinning: Fixes
- American Standard AC Short Cycling: Causes, Fixes & Costs
