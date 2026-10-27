---
title: "Rheem AC Fan Runs But No Cold Air: Causes, Fixes & Costs"
code: "Fan runs but no cold air"
description: "Rheem AC fan runs but blows warm air? Learn the causes (capacitor, contactor, refrigerant leak, compressor), safe checks, and repair costs."
brand: rheem
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $150-$450 for a capacitor or contactor, $1,500-$3,500+ for a compressor"
appliesTo: "Rheem and Ruud split-system central ACs (Classic, Classic Plus, Prestige/EcoNet series) paired with an indoor air handler or furnace blower. Single-stage units have no outdoor fault display. Some communicating EcoNet and variable-speed models show diagnostic codes on the outdoor control board or thermostat, and these models differ from single-stage units in lockout behavior."
tags:
  - rheem
  - air-conditioner
  - warm-air
  - capacitor
  - contactor
  - compressor
  - refrigerant-leak
parts:
  - name: "Replacement HVAC air filter (match your size)"
    search: "MERV 8 HVAC air filter 16x25x1"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-10-27
dateModified: 2026-10-27
reviewedBy: ""
faq:
  - q: "Why does my Rheem AC blow air but the air isn't cold?"
    a: "The indoor blower is working, but the outdoor unit is not removing heat. The most common causes are a failed run capacitor, a stuck or burned contactor, a tripped outdoor disconnect, low refrigerant from a leak, or a compressor that won't start. Most of these need a technician."
  - q: "Is it safe to keep running the fan if there's no cold air?"
    a: "Running only the indoor fan is fine. Running the system in cool mode while the compressor is trying and failing to start can overheat the compressor. Shut cooling off at the thermostat until the unit is diagnosed."
  - q: "Can I replace the capacitor myself?"
    a: "We don't recommend it. Capacitors hold a dangerous charge even after the power is off, and the outdoor cabinet has high-voltage terminals. Testing and replacing a capacitor is a technician job, and it is usually one of the cheaper AC repairs."
  - q: "Will my Rheem AC reset itself?"
    a: "Single-stage Rheem units have no lockout to clear. They retry every time the thermostat calls for cooling. Some communicating and variable-speed models lock out after repeated faults, so check the outdoor board or EcoNet thermostat for a code. Try one power reset at the breaker at most, then call for service."
---

## What this code means

"Fan runs but no cold air" is a symptom, not a numbered fault code. On most Rheem split systems, the indoor blower (in the furnace or air handler) runs on its own circuit and keeps moving air even when the outdoor condenser has stopped cooling. You get airflow at the registers, but it is room temperature or warm.

This page covers the case where **the indoor fan definitely runs**. Use the related pages for these neighboring problems:

- If airflow is weak and you see ice, see the frozen coil page.
- If the outdoor fan is still but you hear humming, see the outdoor-fan page.
- For general weak cooling, see the not-cooling page.

On single-stage models there is nothing to "clear." The unit simply tries again on the next cooling call. On Rheem communicating and variable-speed outdoor units, the control board may log a fault and hold a lockout. The details vary by model, so check the outdoor board LED or your EcoNet thermostat for a displayed code.

## Common causes, ranked by probability

1. **Outdoor unit has no power.** A tripped breaker or a pulled or blown disconnect at the outdoor unit can cause this. The indoor blower is on a separate breaker, so it keeps running.
2. **Failed run capacitor (dual capacitor).** This is the most common failure inside the cabinet. The compressor and outdoor fan hum or stay off.
3. **Contactor not pulling in or pitted contacts.** The thermostat calls for cooling, but the contactor never sends line voltage to the compressor.
4. **Thermostat or low-voltage control issue.** Possible causes include:
   - The thermostat is set to "Fan On" instead of Cool.
   - Dead batteries.
   - A broken Y wire.
   - A blown 3- or 5-amp fuse on the furnace or air handler board. This fuse often blows when the condensate float switch or a chafed wire shorts.
5. **Tripped condensate safety (float) switch.** Some installs wire the float switch to cut only the outdoor unit, so the blower keeps running.
6. **Low refrigerant from a leak.** The system runs but cools poorly or not at all. Rheem evaporator coils have documented leak histories, and a pro has to find the leak.
7. **Compressor failure or thermal overload trip.** The compressor may be overheated, grounded, or locked rotor. This is the least common cause, but it is the most expensive.

## Safe checks before you call anyone

- **Thermostat:** Set the mode to **Cool**, set the fan to **Auto**, and set the temperature 3–5°F below room temperature. Replace the batteries if the display is dim or blank. Wait 5 minutes, because many thermostats have a compressor delay.
- **Breakers:** At the main panel, find the breaker labeled AC, condenser, or outdoor unit. Reset it **once** if it is tripped. If it trips again, stop and call a technician.
- **Outdoor disconnect:** Make sure the disconnect box next to the condenser is closed or the pull-out block is inserted fully. Do not open the condenser cabinet.
- **Air filter:** Replace it if it is dirty. A clogged filter won't stop cooling entirely, but it can lead to icing.
- **Condensate line:** Check the drain pan or float switch area at the indoor unit. If you see standing water, clear the line from the access tee with a wet/dry vac, then give the system time to restart.
- **Listen at the outdoor unit:** Note whether the fan spins, whether you hear a hum or buzz, or whether there is silence. This tells the technician a lot.
- **One power reset:** If your model shows a lockout code, turn the breaker off for 5 minutes and then back on, **one time only**.

## How a technician will diagnose it

- Confirm 24V at the outdoor contactor coil when the thermostat calls for cooling. Trace any missing signal back to the thermostat, the Y wire, the board fuse, or the float switch.
- Measure line voltage across the contactor and check for pitted contacts.
- Test the dual run capacitor in microfarads against its rating.
- Measure compressor winding resistance and check for a short to ground. Check amp draw on startup to identify locked rotor or overload.
- If the unit runs, connect gauges or digital probes and measure superheat and subcooling. If the charge is low, they should leak-search with an electronic detector or bubble test, rather than just "topping off."
- On communicating models, read the fault history from the outdoor board or EcoNet control.

Be wary of a quote that adds refrigerant without mentioning a leak search, or one that condemns the compressor before testing the capacitor and contactor.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor unit completely silent | Tripped breaker or disconnect | Reset breaker once; check disconnect | Find the cause of the trip; test wiring |
| Outdoor unit hums, fan doesn't spin | Failed run capacitor | Turn cooling off to protect the compressor | Test and replace capacitor |
| Silent outdoors, thermostat calling | Contactor, Y wire, blown board fuse | Check thermostat mode and batteries | Test 24V; replace contactor or fuse; repair short |
| Water in pan, outdoor unit off | Float switch tripped | Clear condensate line | Repair drain or float switch |
| Unit runs, air slightly cool, coil icing | Low refrigerant / leak | Replace filter | Leak search, repair, recharge |
| Hums, then trips breaker or shuts off | Compressor overload or failure | Stop resetting; call | Test windings and amps; replace compressor or unit |

## Repair costs

| Repair | Typical US cost |
|---|---|
| Thermostat batteries / settings / breaker reset | $0 |
| Service call / diagnostic | $75–$200 |
| Run capacitor replacement | $150–$450 |
| Contactor replacement | $150–$400 |
| Board fuse / low-voltage wire repair | $100–$300 |
| Condensate drain clearing or float switch | $100–$300 |
| Leak search plus recharge (R-410A or R-454B) | $400–$1,500+ |
| Evaporator coil replacement | $1,200–$2,800 |
| Compressor replacement | $1,500–$3,500+ |

Check your Rheem warranty registration before paying for parts. Rheem typically covers registered units for 10 years on parts, including the compressor and coil, but labor is usually not covered.

## Related codes

- Rheem AC Not Cooling: Causes, Fixes & Repair Costs
- Rheem AC Frozen Evaporator Coil: Causes, Fixes & Costs
- Rheem AC Outdoor Fan Not Spinning: Causes, Fixes & Costs
- Rheem Heat Pump Not Cooling: Causes, Fixes & Costs
- Rheem Heat Pump Compressor Not Running: Causes & Fixes
