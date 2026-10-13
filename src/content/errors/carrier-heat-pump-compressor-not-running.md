---
title: "Carrier Heat Pump Compressor Not Running: Causes & Fixes"
code: "Compressor not running"
description: "Carrier heat pump compressor not running? Learn the likely causes (capacitor, contactor, lockout, pressure switch), safe checks, and repair costs."
brand: carrier
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150-$450 for a capacitor or contactor, $1,800-$4,500+ if the compressor must be replaced"
appliesTo: "Carrier single-stage and two-stage split heat pumps (Performance, Comfort, Infinity series). Diagnostics vary: basic units use a defrost board with a status LED, Infinity and Greenspeed models report faults through the Infinity/Côr control and outdoor board flash codes, and variable-speed units use an inverter drive with its own fault codes. The exact LED codes and lockout timing depend on the board, so check the label inside your outdoor unit's panel."
tags:
  - heat-pump
  - compressor
  - capacitor
  - contactor
  - outdoor-unit
  - carrier
parts:
  - name: "Replacement air filter (match your size)"
    search: "16x25x1 MERV 8 air filter"
  - name: "AA or AAA thermostat batteries"
    search: "AA lithium batteries 8 pack"
datePublished: 2026-10-12
dateModified: 2026-10-12
reviewedBy: ""
faq:
  - q: "Why is my Carrier heat pump fan running but the compressor isn't?"
    a: "The most common reason is a failed run capacitor. Many Carrier units use a dual capacitor that powers both the fan and the compressor, and one side can fail while the other still works. Other causes include a tripped high- or low-pressure switch, a compressor that has overheated and shut off on its internal overload, or a failed compressor. A technician can test the capacitor and switches in a few minutes."
  - q: "How long should I wait after resetting before the compressor starts?"
    a: "Most Carrier heat pump boards have an anti-short-cycle delay of about five minutes after power is restored or after the thermostat calls. Some thermostats add their own delay. If the compressor still hasn't started after 10 to 15 minutes with a clear heating or cooling call, stop and call a technician. Don't keep cycling power."
  - q: "My compressor hums but won't start. Is that dangerous?"
    a: "A humming compressor that doesn't start is drawing high current and getting hot. That usually points to a weak capacitor, a failing contactor, or a seized or locked-rotor compressor. Turn the system off at the thermostat and call a technician. Repeated attempts can damage the compressor windings."
  - q: "Can low refrigerant stop the compressor from running?"
    a: "Yes. Carrier heat pumps have a low-pressure switch, and on many models a loss-of-charge switch. When refrigerant is low, the switch opens and the board holds the compressor off, sometimes until power is cycled. Low refrigerant means there is a leak. Only a licensed technician can find and repair the leak and recharge the system."
---

## What this code means

"Compressor not running" is a symptom, not a single flash code. The outdoor unit gets a call to heat or cool, but the compressor (the large, usually black sealed unit inside the outdoor cabinet) doesn't start. You may hear the outdoor fan spinning with no compressor hum. You may hear a hum or buzz with no start. Or the outdoor unit may be completely silent.

Common signs:
- Heat mode: the system leans on auxiliary or emergency heat, and energy bills climb.
- Cool mode: the indoor air blows at room temperature.

On most Carrier heat pumps, the defrost or outdoor control board will not start the compressor while a safety is open. Those safeties include the high-pressure switch, the low-pressure or loss-of-charge switch, and on some models a discharge temperature sensor.

**Reset behavior varies by board:**
- Many boards apply a roughly 5-minute anti-short-cycle delay.
- Many boards lock out after repeated pressure-switch trips within one call. That lockout clears only when you cycle power or remove the thermostat call.
- Infinity and Greenspeed variable-speed units log a specific fault in the thermostat or service menu. Some of those faults hold until power is cycled.

The compressor's internal thermal overload resets on its own. That can take 30 minutes to a few hours once the compressor cools down.

## Common causes, ranked by probability

1. **Failed or weak run capacitor.** This is the most common cause on single- and two-stage Carrier units. A failed dual capacitor often leaves the fan running while the compressor hums or stays silent.
2. **Failed contactor.** Pitted or burned contacts, or a dead coil, keep power from reaching the compressor. Insects or debris between the contacts can do the same.
3. **Open pressure switch or board lockout.**
   - Low pressure usually comes from a refrigerant leak.
   - High pressure usually comes from a dirty outdoor coil in cooling, a fan that isn't moving air, or a badly restricted indoor airflow in heating.
4. **Compressor internal overload tripped.** Causes include overheating, low charge, a bad capacitor, or low voltage. The compressor stays off until it cools.
5. **No 24V call reaching the outdoor unit.** Possible reasons:
   - Thermostat settings or configuration
   - A broken low-voltage wire
   - A blown control fuse at the furnace or air handler
   - A failed defrost or outdoor control board
6. **Inverter or drive fault (variable-speed Infinity/Greenspeed only).** The drive won't run the compressor until its fault clears or the drive is repaired.
7. **Failed compressor.** Shorted, grounded, or open windings, or a seized compressor, which shows up as a locked rotor. This is the least common cause, but the most expensive.

## Safe checks before you call anyone

1. **Thermostat.** Confirm it's set to HEAT or COOL, the setpoint is well above or below room temperature, and the fan is on AUTO. Replace the batteries if the display is dim or blank. Make sure it isn't set to EM HEAT, which intentionally keeps the compressor off.
2. **Breakers and disconnect.** Check that the outdoor unit's breaker in the main panel is ON. Check that the disconnect box beside the outdoor unit is fully engaged. If the breaker is tripped, reset it once. If it trips again, stop and see Carrier Heat Pump Breaker Keeps Tripping.
3. **One reset.** Turn the thermostat to OFF, switch off the outdoor breaker for 5 minutes, then restore power and set the call again. Wait 10–15 minutes for the time delays. Do this only once. Repeated resets can damage a compressor that is struggling to start.
4. **Air filter.** A clogged filter can trip the high-pressure switch in heat mode. Replace it if it's dirty.
5. **Vents and registers.** Make sure supply registers and return grilles are open and unblocked.
6. **Outdoor unit surroundings.** Clear leaves, snow, and debris from around the unit, keeping about 2 feet of clearance. Confirm all exterior panels are seated. Don't open the electrical panel.
7. **Condensate.** If your indoor unit has a float or condensate safety switch and the drain pan is full, the system may be shut off. Clear a visible clog at the drain line's exterior end if one is accessible.

If the compressor still won't run, turn the system off at the thermostat or use emergency heat, and call a technician.

## How a technician will diagnose it

A competent tech will typically:

- **Check the control signal.** Confirm 24V at the outdoor unit's Y (and O/B) terminals, and read any LED flash codes on the defrost or outdoor board, or the fault history on Infinity controls.
- **Check line voltage.** Confirm 240V at the disconnect and contactor, then check across the contactor's load side when the unit is called.
- **Test the capacitor.** Use a meter to compare measured microfarads against the rating printed on the capacitor. A reading more than about 6% low is a common replacement threshold.
- **Inspect the contactor.** Look for pitting and check the coil voltage.
- **Check compressor amps.** Measure running or locked-rotor amps with a clamp meter.
- **Test the windings.** Measure resistance across C-S-R and check for a short to ground. If the compressor is hot and the windings read open, the tech waits for the internal overload to reset before condemning it.
- **Test pressures.** Connect gauges to check charge, test the pressure switches for continuity, and look for leaks if pressure is low.
- **On variable-speed models,** read the inverter drive's fault codes and follow Carrier's model-specific drive troubleshooting.

**Red flags in a quote:** "You need a new compressor" without winding and amp readings, or a refrigerant top-off without any leak search.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor fan runs, compressor silent | Failed capacitor, open pressure switch, overload tripped | One power reset; check filter | Test and replace capacitor; test switches and charge |
| Compressor hums or buzzes, no start | Weak capacitor, locked rotor | Turn system off; don't keep resetting | Replace capacitor; check windings and amps; possibly add a hard-start kit |
| Entire outdoor unit silent | Breaker or disconnect off, no 24V call, failed contactor, blown control fuse | Check breaker and disconnect; check thermostat mode and batteries | Trace 24V; replace contactor, fuse, or board |
| Runs briefly, then stops; repeats | High or low pressure trip, low charge, overheating | Replace filter; clear debris around outdoor unit | Leak search and repair; clean coil; check outdoor fan |
| Works only in EM/aux heat | Thermostat set to EM HEAT, or compressor locked out | Set thermostat back to HEAT | Clear lockout; diagnose root cause |
| Infinity thermostat shows a fault | Drive, communication, or pressure fault | Note the fault text; one power reset | Read fault history; repair drive or sensors per model |
| Compressor cuts out on hot or cold extremes | Internal overload, airflow problem, low voltage | Check filter and clearance | Check voltage, charge, and airflow |

## Repair costs

Typical US prices, including parts and labor:

| Repair | Typical cost |
|---|---|
| Diagnostic or service call | $100–$250 |
| Run or dual capacitor | $150–$400 |
| Contactor | $150–$400 |
| Hard-start kit | $200–$450 |
| Pressure switch | $200–$500 (more if refrigerant must be recovered) |
| Refrigerant leak repair plus recharge | $400–$1,500+, depending on leak location and refrigerant type (R-410A or R-454B) |
| Defrost or outdoor control board | $350–$900 |
| Inverter drive (variable-speed) | $800–$2,000+ |
| Compressor replacement | $1,800–$4,500+ |

Notes:
- **Control fuse or low-voltage wiring repair** usually falls within the service-call fee or close to it.
- **Compressor warranty:** Carrier's limited warranty commonly covers the compressor for 10 years on registered units, but labor isn't covered. If the compressor fails on an older system, compare the repair price against replacing the whole outdoor unit or system.

## Related codes

- Carrier Heat Pump Not Heating: Causes, Fixes & Costs
- Carrier Heat Pump Not Cooling: Causes, Fixes & Costs
- Carrier Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Carrier Heat Pump Breaker Keeps Tripping: Causes & Fixes
- Carrier Heat Pump Aux Heat On Constantly: Causes & Fixes
- Carrier Heat Pump Blowing Cold Air in Heat Mode: Fixes
- Carrier Heat Pump Short Cycling: Causes, Fixes & Costs
- Carrier Heat Pump Frozen and Not Defrosting: Causes & Fixes
