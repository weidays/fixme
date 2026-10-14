---
title: "Rheem Heat Pump Compressor Not Running: Causes & Fixes"
code: "Compressor not running"
description: "Rheem heat pump compressor not running? Learn the likely causes (capacitor, contactor, pressure lockout), safe checks, and repair costs from $0 to $3,500+."
brand: rheem
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $250 for a capacitor or contactor; $1,800 – $3,500+ if the compressor itself has failed"
appliesTo: "Rheem and Ruud split-system heat pumps, including Classic, Classic Plus and Prestige series. Single-stage units use a basic defrost board. Two-stage and variable-speed units, such as the Prestige RP20 with EcoNet, use a communicating control. On those units, the control stores fault codes and its lockout timing differs by model."
tags:
  - rheem
  - heat-pump
  - compressor
  - capacitor
  - contactor
  - outdoor-unit
parts:
  - name: "Replacement thermostat batteries (AA/AAA)"
    search: "AA lithium batteries thermostat"
  - name: "Furnace/air handler air filter"
    search: "MERV 8 air filter HVAC"
datePublished: 2026-10-13
dateModified: 2026-10-13
reviewedBy: ""
faq:
  - q: "Why does the outdoor fan run but the compressor doesn't on my Rheem heat pump?"
    a: "This is most often a failed run capacitor. It can also be a compressor whose internal overload has tripped and is still cooling down. Overload resets can take an hour or more. If the compressor still won't run after that, a technician needs to test the capacitor and the compressor windings."
  - q: "Can I reset a Rheem heat pump compressor lockout myself?"
    a: "Yes, but only once. Turn the thermostat off, switch off the outdoor disconnect or breaker for about five minutes, then restore power. If the compressor locks out again, stop and call a technician. Repeated resets can damage the compressor."
  - q: "Is it worth replacing the compressor on an older Rheem heat pump?"
    a: "If the unit is past its 10-year compressor warranty and is 12 or more years old, replacing the whole system is usually better value. That is especially true if it uses R-22 refrigerant. A newer unit still under warranty often only incurs labor and refrigerant charges."
  - q: "Will my house still heat if the compressor isn't running?"
    a: "Usually yes, through the backup electric heat strips or a gas furnace, if your system has one. Backup heat is much more expensive to run, so get the compressor repaired promptly. Without backup heat there is no cooling, and heating will fail."
---

## What this code means

"Compressor not running" is a symptom, not a single stored code. It means the outdoor unit is not pumping refrigerant. You may notice any of these signs:

- The outdoor fan spins, but you don't hear the compressor's steady hum.
- The unit hums or clicks and nothing else happens.
- The outdoor unit is completely silent while the thermostat calls for heating or cooling.

How the fault shows up depends on the control board:

- **Basic Rheem defrost boards:** These do not store a "compressor" fault. Pressure-switch trips may cause a soft lockout. That lockout can auto-reset after a delay. After several trips in one call, it holds until power is cycled.
- **Communicating units (EcoNet, two-stage and variable-speed):** These log specific faults on the board or thermostat. Examples include high or low pressure, compressor overload, and inverter faults.

Lockout behavior and reset timing vary by board revision. Check the wiring diagram label inside your unit's service panel, or ask your technician.

If your outdoor unit is flashing a code, see Rheem Heat Pump Flashing Light. If the fan is also dead, see Rheem Heat Pump Outdoor Fan Not Spinning.

## Common causes, ranked by probability

1. **Failed run capacitor (dual capacitor).** This is the most common failure on Rheem outdoor units. It gets more likely after hot summers. Typical sign: the compressor hums or stays off, and the fan may also be weak.
2. **Failed or pitted contactor.** Typical sign: 24V reaches the contactor, but the burned contacts won't pass power to the compressor.
3. **Compressor internal overload tripped.** Typical sign: the compressor shell is hot and the motor shuts itself off until it cools. The overload itself is a symptom. The root cause is often low charge, a dirty coil or a weak capacitor.
4. **High- or low-pressure switch lockout.** The control board stops the compressor to protect it. Common triggers:
   - Low refrigerant (a leak)
   - A blocked or dirty coil
   - A failed outdoor fan
   - A severely restricted indoor filter
5. **No 24V control signal from the thermostat or indoor unit.** Possible causes:
   - Thermostat setting or dead batteries
   - A tripped float or condensate safety switch
   - A blown control fuse
   - A damaged low-voltage wire, often chewed or cut outside
6. **Defrost control board fault.** The board fails to energize the compressor output, or stays stuck in a delay.
7. **Inverter or drive fault (variable-speed models only).** The board will store a specific code.
8. **Failed compressor.** Possible failures:
   - Open or shorted windings
   - A grounded compressor
   - A locked rotor

   This is less common than the electrical causes above, but it is the most expensive.

## Safe checks before you call anyone

- **Thermostat:**
  - Confirm it is set to Heat or Cool, not Emergency Heat.
  - Set the temperature at least 3°F past the current room temperature.
  - Replace the batteries if the display is dim or blank.
- **Wait out the delay.** Many Rheem boards have a 3–5 minute anti-short-cycle delay after the thermostat calls or after power returns. Give the unit 5–10 minutes before assuming a fault.
- **Breakers and disconnect:**
  - Check both breakers in your panel: the outdoor unit and the indoor air handler or furnace.
  - Check the disconnect switch beside the outdoor unit.
  - Reset a tripped breaker once. If it trips again, see Rheem Heat Pump Breaker Keeps Tripping.
- **Air filter.** Replace it if it is dirty. A clogged filter can trip the pressure switch in heat mode.
- **Outdoor coil visibility.** Clear away leaves, snow, and plants within 2 feet of the outdoor unit. Do not open the unit.
- **Condensate.** Look for standing water in the indoor drain pan or a full condensate pump. Many air handlers have a float switch that cuts the thermostat signal to the compressor when the drain backs up. Clearing an accessible drain line is fine.
- **Panels.** Make sure the indoor unit's access panels are fully seated.
- **One reset.** Turn the thermostat off. Switch off the outdoor disconnect for 5 minutes. Restore power, then set the thermostat back to its mode.
  - If the compressor starts and then quits again, stop and call a pro.
  - Do not keep resetting it.

**Do not** open the outdoor unit, touch the capacitor, or push in the contactor by hand. Capacitors hold a dangerous charge even with the power off.

## How a technician will diagnose it

A competent tech will typically:

1. **Confirm 24V at the contactor coil.** If it's missing, they trace back through the board, the safety switches, the float switch and the thermostat wiring.
2. **Check line voltage** (about 240V) in and out of the contactor, and inspect the contacts for pitting.
3. **Discharge and test the run capacitor** with a capacitance meter. It should be within ±6% of the microfarad rating printed on the label.
4. **Check board LEDs and fault history.** On EcoNet units, this includes the stored codes.
5. **Measure compressor windings** (common-run, common-start and run-start) and test for a short to ground. A hot compressor reading "open" may just be a tripped overload. A good tech lets it cool before condemning it.
6. **Measure amp draw on startup.** Locked-rotor amps that never drop point to a seized compressor. The tech may try a hard-start kit as a test.
7. **Connect gauges** to check pressures and refrigerant charge if a pressure switch tripped. Any leak should be found, not just topped off.

**Red flags in a quote:**

- Condemning the compressor without capacitor, contactor, and winding test readings.
- Adding refrigerant repeatedly with no leak search.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor fan runs, compressor silent | Failed capacitor or tripped overload | Wait 1 hour, then do one reset | Test and replace the capacitor; find the cause of the overload |
| Outdoor unit fully silent, indoor fan runs | No 24V signal or a failed contactor | Check thermostat, breakers, disconnect and float switch | Test the contactor, control fuse and low-voltage wiring |
| Loud hum, then click off | Weak capacitor or locked rotor | Turn the system off to protect the compressor | Replace the capacitor, try a hard-start kit, or test the compressor |
| Runs a few minutes, then stops repeatedly | Pressure switch trip (low charge, dirty coil) | Replace the filter and clear debris | Check pressures, find and repair the leak, clean the coil |
| Stopped after a clogged drain | Condensate float switch | Clear the drain line or empty the condensate pump | Repair the drain or pump if it's faulty |
| Fault code on EcoNet thermostat or board | Communicating-control fault | Note the code and do one reset | Diagnose using Rheem's model-specific fault table |
| Breaker trips when the compressor tries to start | Grounded or shorted compressor | Do not reset repeatedly | Megohm and winding tests; possibly replace the compressor |

## Repair costs

Typical US prices, parts and labor:

| Repair | Typical cost |
|---|---|
| Thermostat batteries or filter (DIY) | $5 – $40 |
| Run capacitor replacement | $120 – $300 |
| Contactor replacement | $150 – $350 |
| Hard-start kit | $150 – $350 |
| Control fuse or low-voltage wire repair | $100 – $250 |
| Pressure switch replacement | $200 – $450 |
| Defrost or control board | $350 – $800 |
| Communicating or inverter board (variable-speed) | $600 – $1,500 |
| Refrigerant leak search and repair, plus recharge (R-410A or R-454B) | $400 – $1,500+ |
| Compressor replacement under parts warranty (labor and refrigerant only) | $1,200 – $2,500 |
| Compressor replacement out of warranty | $1,800 – $3,500+ |
| Full outdoor unit replacement | $4,000 – $8,000+ |

Rheem's standard limited warranty covers the compressor for 10 years if the unit was registered on time. Check your registration before approving a compressor replacement.

## Related codes

- Rheem Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Rheem Heat Pump Breaker Keeps Tripping: Causes & Fixes
- Rheem Heat Pump Flashing Light: Causes & Fixes
- Rheem Heat Pump Not Heating: Causes, Fixes & Costs
- Rheem Heat Pump Not Cooling: Causes, Fixes & Costs
- Rheem Heat Pump Short Cycling: Causes, Fixes & Costs
- Rheem Heat Pump Auxiliary Heat On Constantly: Fixes
