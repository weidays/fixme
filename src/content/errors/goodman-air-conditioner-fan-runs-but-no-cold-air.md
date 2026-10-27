---
title: "Goodman AC Fan Runs But No Cold Air: Causes & Costs"
code: "Fan runs but no cold air"
description: "Goodman AC blower runs but the air is warm? Learn why the outdoor unit isn't starting: capacitor, contactor, breaker, or float switch. Fixes and costs."
brand: goodman
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $4,000 if the compressor has failed"
appliesTo: "Goodman split-system condensers (such as GSX13/14/16, GSXN, GSXC, GSXM, GLXS and similar) paired with a Goodman furnace or air handler. Model prefixes change over time, so check the model number on your condenser's data plate. Single-stage units use a standard contactor and dual run capacitor. Communicating ComfortBridge and inverter models (for example, GSXC7 and GVXC) have an outdoor control board with diagnostic LEDs, and their fault logic varies by model."
tags:
  - goodman
  - air-conditioner
  - not-cooling
  - outdoor-unit-not-running
  - capacitor
  - contactor
parts:
  - name: "Replacement HVAC air filter (match your size)"
    search: "16x25x1 MERV 8 furnace air filter"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-10-26
dateModified: 2026-10-26
reviewedBy: ""
faq:
  - q: "Why does my Goodman indoor fan run but the outdoor unit stays silent?"
    a: "The thermostat is calling, and the indoor blower is answering. Something is stopping the cooling signal or power from reaching the condenser. The usual causes are a tripped outdoor breaker or disconnect, a failed capacitor or contactor, or a tripped condensate float switch."
  - q: "Should I keep the AC running while I wait for a technician?"
    a: "No. Set the thermostat to OFF. If the outdoor unit is humming but not starting, a stuck compressor or fan can overheat and turn a cheap capacitor repair into a costly motor or compressor failure."
  - q: "Can I replace the capacitor on my Goodman myself?"
    a: "We don't recommend it. Capacitors hold a dangerous charge even with the power off, and the outdoor cabinet carries 240 volts. Capacitor testing and replacement is a short, inexpensive technician job."
  - q: "Does this problem reset itself?"
    a: "Sometimes. A compressor that has tripped its internal thermal overload restarts on its own once it cools, which can take an hour or more. If the unit runs briefly and then quits again, the underlying cause still needs diagnosis."
  - q: "Is a Goodman compressor covered under warranty?"
    a: "Many Goodman condensers carry a 10-year parts limited warranty when the unit was registered on time. Some models also include a longer or lifetime compressor or unit replacement warranty. Labor is usually not covered unless your installer offers it, so check your registration."
---

## What this code means

This is a symptom, not a displayed fault code. The indoor blower runs and air comes out of the vents, but the air is room temperature or only slightly cool.

This page covers the most common version of that symptom on Goodman split systems: **the outdoor condenser isn't running, or its compressor isn't running**.

- **Indoor fan on, outdoor unit silent.** Power or the 24-volt cooling signal (the Y wire) isn't reaching the condenser.
- **Outdoor unit humming or clicking but not starting.** The signal arrives, but the compressor or condenser fan motor can't start.

Some situations are covered on other pages:

- If the outdoor unit runs normally but cooling is weak, see the not-cooling guide.
- If ice is forming on the indoor coil or refrigerant lines, see the frozen coil guide.
- If the compressor hums but the outdoor fan blade doesn't turn, see the outdoor fan guide.

**Whether it resets depends on the cause:**

- A tripped compressor internal overload resets on its own once the compressor cools.
- A tripped condensate float switch resets once the water drains.
- A failed capacitor or contactor will not reset.
- On ComfortBridge and inverter models, some faults clear on their own and others hold until power is cycled. Which faults lock out varies by model.

## Common causes, ranked by probability

1. **Failed dual run capacitor.** This is the most common failure on Goodman condensers. The usual sign is a hum from the outdoor unit with no start. Sometimes the capacitor's top is visibly bulged.
2. **Failed or pitted contactor.** The contactor's contacts can burn, or its coil can fail. Ants and debris in the contactor are a common cause in warm states.
3. **Tripped outdoor breaker or pulled disconnect.** Indoor and outdoor units run on separate circuits, so the blower can run while the condenser has no power.
4. **Condensate float or safety switch tripped.** Many installs wire this switch to cut the Y (cooling) signal while the blower keeps running. It trips when the drain line or pan backs up.
5. **Open high- or low-pressure switch.** Many GSX16, GSXC and GSXN models have these switches. They open from low refrigerant charge or a dirty coil, and some lock out until reset.
6. **Thermostat or wiring fault.** Examples include a bad Y wire connection, an incorrect setup after replacing the thermostat, or wire damage from mowers or pets.
7. **Compressor thermal overload or failed compressor.** The compressor overheats and trips, or it has an open or shorted winding or a locked rotor. Diagnose this only after the parts above have been ruled out.
8. **Outdoor control board fault (ComfortBridge and inverter models only).** The diagnostic LED code on the outdoor board identifies the specific fault.

## Safe checks before you call anyone

- **Thermostat.** Set it to COOL, not FAN ON. Set it at least 3°F below room temperature. Replace the batteries if it has them, and wait 5 minutes, since most thermostats have a compressor delay.
- **Breakers.** At the main panel, find the double-pole breaker labeled for the AC or condenser. If it has tripped, reset it **once**. If it trips again, leave it off and call a technician.
- **Outdoor disconnect.** Check the box on the wall next to the condenser. Make sure the pull-out block is fully seated or the switch is ON. Don't open anything beyond the disconnect cover.
- **Condensate line and float switch.** Look at the drain pan and drain line near the indoor unit. If water is standing in the pan or the float switch is lifted, clear the drain line opening with a wet/dry vacuum at the outdoor drain end. Then give the system about 15 minutes to drain and restart.
- **Air filter.** Replace it if it's dirty. A clogged filter won't stop the condenser from starting, but it can trip pressure switches and freeze the coil.
- **Panels and vents.** Confirm the blower door on the indoor unit is fully seated and all supply registers are open.
- **Wait out a possible overload.** If the outdoor unit was humming and then went quiet, turn the thermostat OFF for an hour. Then try cooling once. If it hums without starting again, turn the system off and call.

Don't remove the condenser's service panel, touch the capacitor, or press in the contactor. The parts behind that panel carry 240 volts, and the capacitor can hold a charge after the power is off.

## How a technician will diagnose it

Use these steps to sanity-check what a technician tells you:

1. **Confirm the signal.** They check for 24 volts across the contactor coil while the thermostat is calling for cooling. If there's no voltage, they trace the problem back through the float switch, pressure switches, and thermostat wiring.
2. **Confirm line voltage.** They check for 240 volts on the line side of the contactor, and then for voltage through the contactor's closed contacts.
3. **Test the capacitor.** They measure its microfarads against its rating (for example, 45/5 µF). A reading outside the tolerance printed on the capacitor means it needs replacing.
4. **Check the compressor.** They measure winding resistance (C–S, C–R and S–R) and check for a short to ground. A compressor that's hot to the touch with an open winding usually means a tripped overload, so they let it cool and retest.
5. **Check refrigerant and switches.** They connect gauges if a pressure switch is open. Low charge means a leak to find; just recharging the system is not a fix.
6. **Read the LED codes (communicating models).** On ComfortBridge and inverter models, they read the outdoor board's LED codes or use the CoolCloud app.

**Red flags in a quote:**

- A recommendation to replace the compressor without winding test readings.
- A refrigerant top-off with no leak search.
- A full system replacement quote before the capacitor and contactor have been tested.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor unit completely silent | Tripped breaker or open disconnect | Reset the breaker once; seat the disconnect | Find the cause of a repeat trip |
| Outdoor unit silent, water in drain pan | Float switch tripped | Clear the drain line; wait and retry | Clean the pan and trap; check the switch wiring |
| Outdoor unit hums, no start | Failed capacitor | Turn the system OFF | Test and replace the capacitor |
| Clicking or buzzing at the outdoor unit, nothing runs | Failed contactor | Turn the system OFF | Replace the contactor |
| Unit runs briefly, then stops for long periods | Thermal overload or pressure switch | Change the filter; rest the system an hour | Check charge, coil, and amp draw |
| Breaker trips right after the compressor tries to start | Grounded or locked compressor | Leave the breaker off | Test the windings; quote the compressor or unit |
| LED code on the outdoor board (ComfortBridge or inverter models) | Board-detected fault | Note the code; turn the system off | Diagnose using the model's fault table |

## Repair costs

These are typical US prices, including parts and labor:

| Repair | Typical cost |
|---|---|
| Service call and diagnosis | $90 – $200 |
| Dual run capacitor | $120 – $350 |
| Contactor | $150 – $350 |
| Condensate drain clearing | $100 – $250 |
| Pressure switch | $200 – $450 |
| Leak repair plus refrigerant recharge (R-410A, or R-32 on newer units; check the refrigerant listed on the unit's data plate) | $400 – $1,500+ |
| Outdoor control board (communicating or inverter models) | $400 – $1,100 |
| Compressor replacement, in warranty (part covered; you pay labor and refrigerant) | $1,500 – $2,800+ |
| Compressor replacement, out of warranty | $2,000 – $4,000 |

A compressor replacement on an older unit often makes replacing the whole condenser the better value. Check your warranty registration before approving major work.

## Related codes

- Goodman AC Running But Not Cooling: Causes & Costs
- Goodman AC Outdoor Fan Not Spinning: Causes & Fixes
- Goodman AC Frozen Evaporator Coil: Causes, Fixes & Costs
- Goodman Heat Pump Compressor Not Running: Causes & Costs
- Goodman Heat Pump Breaker Keeps Tripping: Causes & Costs
- Goodman Heat Pump Not Cooling: Causes, Fixes & Costs
