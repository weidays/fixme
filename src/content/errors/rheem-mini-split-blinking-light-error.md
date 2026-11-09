---
title: "Rheem Mini-Split Blinking Light: Causes, Fixes & Costs"
code: "Blinking light error"
description: "Rheem mini-split blinking light: what the flash patterns mean, likely causes like sensor, communication or protection faults, safe fixes, and repair costs."
brand: rheem
equipment: mini-split
severity: pro
costRange: "$0 for a reset or filter cleaning – $1,200+ if an inverter board or compressor part is needed"
appliesTo: "Rheem and Ruud-branded ductless mini-split indoor units with an LED indicator panel or display. Flash counts, which LED blinks (run, timer, defrost or operation), and the exact fault each pattern means vary by series and production year. Some units show a two-character code instead. Always match the pattern to the fault table in your model's installation or service manual."
tags:
  - rheem
  - mini-split
  - ductless
  - blinking-light
  - error-code
  - diagnostics
parts:
  - name: "Mini-split remote control batteries (AAA)"
    search: "AAA batteries 24 pack"
datePublished: 2026-11-08
dateModified: 2026-11-08
reviewedBy: ""
faq:
  - q: "Why is the light on my Rheem mini-split blinking?"
    a: "A blinking LED on the indoor unit usually means the control board has detected a fault and is reporting it as a flash pattern. The pattern tells you which fault it is, but the meaning depends on your model, so you need the fault table in your manual or the service label. Some blink patterns are normal status signals, such as defrost or preheat in heating mode."
  - q: "Can I reset a Rheem mini-split that is blinking an error?"
    a: "Yes, once. Turn the unit off with the remote, switch off the breaker or outdoor disconnect for about five minutes, and then turn it back on. If the same blink pattern comes back, leave the unit off and call a technician. Resetting it over and over can hide a problem that is getting worse, such as a compressor or inverter fault."
  - q: "Does a blinking light clear by itself?"
    a: "It depends on the fault and the board. Temporary protection events, such as high or low voltage or a coil getting too hot or too cold, often clear once conditions return to normal. Sensor, communication, and inverter faults usually stay until the cause is fixed and power is cycled. Your model's manual lists which faults are self-clearing and which ones lock the unit out."
  - q: "Is a blinking light on a mini-split during heating normal?"
    a: "Often, yes. Many ductless units blink an indicator LED during defrost or during the warm-start period, when the indoor fan waits for the coil to heat up. These patterns normally stop within about 2 to 15 minutes. A pattern that keeps going or repeats a fixed count is a fault, not a status signal."
---

## What this code means

Rheem ductless mini-splits do not use one universal blinking code. When the indoor unit's control board detects a fault, it flashes an LED on the front panel (usually the run, timer, or operation light) in a repeating count. Some models show a two-character code on the display instead. That count matches a specific fault in the fault table for your model.

**Write down three things before you do anything else:**
- Which LED is blinking.
- How many flashes it gives between pauses.
- Whether the outdoor unit's board LED is also blinking. A technician can read this one; do not open the outdoor unit yourself.

The same flash count can mean different faults on different Rheem series, so do not rely on a generic chart from the internet. Use the fault table in your installation or owner's manual, or the label that is sometimes inside the front grille.

**Normal blinking vs. a fault:**
- **Normal:** a slow blink during defrost or the heating warm-start is a status signal, not a fault. If the unit is heating and the blinking stops on its own within a few minutes, it is normal operation.
- **Fault:** a repeating, fixed flash count, with the unit stopped or barely working, is a fault.

**Does it reset on its own?**
- Protection faults (voltage, coil temperature, high discharge temperature) often reset automatically once conditions return to normal. The unit may retry on its own.
- Communication, sensor, EEPROM, and inverter or compressor drive faults generally hold until the cause is repaired and power is cycled.

Because nearly every fault behind this light is inside the indoor or outdoor cabinet, this is a **pro-level** repair. Your job is to rule out the simple things and record the code.

## Common causes, ranked by probability

1. **Indoor–outdoor communication fault.** This is the most common fault on ductless systems. Causes include:
   - a loose, corroded, or miswired interconnect cable;
   - a damaged communication wire (often from rodents or weather);
   - a failed indoor or outdoor board.

   It often appears after storms, power surges, or recent installation work.
2. **Temperature sensor (thermistor) fault.** An open or shorted sensor on the room air, indoor coil, outdoor coil, outdoor air, or compressor discharge sends a reading the board rejects.
3. **Protection trip.** The unit shuts itself down to prevent damage. Common triggers:
   - high or low supply voltage;
   - indoor coil overheating in heat mode or freezing in cool mode, usually from a clogged filter or blocked airflow;
   - high discharge temperature or high pressure, often from low refrigerant or a dirty outdoor coil.
4. **Fan motor fault.** The indoor blower or outdoor fan motor is not reaching the speed the board expects, or the board gets no feedback signal from it.
5. **Inverter or compressor drive fault (IPM fault).** The board has detected an overcurrent or a fault in the inverter module, or the compressor is failing. These are the most expensive repairs on this list.
6. **Condensate pump or float switch fault.** This applies only to units with an optional condensate pump or a float switch connected to the board.
7. **Control board or EEPROM fault.** A corrupted memory chip or a failed board, sometimes after a power surge.

## Safe checks before you call anyone

These are the only steps a homeowner should take:

- **Record the code.** Count the flashes over two or three cycles and note which LED is blinking. Take a short video on your phone, which helps the technician a lot.
- **Check the remote.** Replace the remote's batteries and confirm the mode (cool, heat, dry, or auto) and the setpoint are correct. A blinking light during heat mode that stops on its own is defrost or warm-start, not a fault.
- **Clean the filters.** Lift the indoor unit's front panel and slide out the mesh filters. Rinse them with lukewarm water, let them dry completely, and put them back. Clogged filters are a common cause of coil overheating or freezing trips.
- **Clear the airflow:**
  - Make sure curtains or furniture are not blocking the indoor unit's louvers.
  - Clear at least 2 feet of space around the outdoor unit. Remove leaves, snow, and debris, but only from the outside of the cabinet.
- **Check the condensate drain.** Make sure the drain line outlet outside is not blocked or buried and that water is not leaking from the indoor unit.
- **Check the power.** Make sure the breaker has not tripped. If it has tripped repeatedly, see the breaker article listed under Related codes and do not keep resetting it.
- **Reset the unit one time:**
  1. Turn the unit off with the remote.
  2. Switch off the breaker or outdoor disconnect for 5 minutes.
  3. Restore power and restart the unit.

  If the same blink pattern returns, stop and call a technician.

Do not open the indoor or outdoor cabinet. Do not unplug the communication wiring, and do not try to test sensors or boards yourself. Inverter boards hold dangerous voltage even after the power is turned off.

## How a technician will diagnose it

A competent technician should do the following:

1. Read the code on the indoor LED, the outdoor board LED or display, and any stored fault history (some models show it through the remote).
2. Look up that exact flash pattern in your model's service manual.
3. Measure supply voltage under load.
4. For communication faults, check the interconnect terminals for the correct wire order, tightness, and corrosion, and measure the communication signal between the indoor and outdoor units.
5. For sensor faults, measure the resistance of each thermistor and compare it to the temperature/resistance chart in the manual.
6. For protection trips, check airflow, check the outdoor coil's condition, and confirm the refrigerant charge using superheat/subcooling or the manufacturer's charging method. Refrigerant work requires EPA 608 certification.
7. For fan or inverter faults, check the motor windings and feedback signal, the IPM, and the compressor windings before recommending a part.

A quote that says "replace the board" without checking the wiring and sensors, or without naming which fault code was read, deserves a second opinion.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Blinking light, no operation, began after a storm or surge | Communication fault or damaged board | Reset the unit once and record the flash count | Check the interconnect wiring and communication signal; replace the board if confirmed |
| Fault blink with a specific count, unit dead | Failed temperature sensor | Record the code | Measure thermistor resistance and replace the sensor |
| Unit runs, stops, blinks, then restarts later | Protection trip from airflow or voltage | Clean the filters and clear the indoor and outdoor units | Check voltage, airflow, and coil temperatures |
| Blinking in cooling mode, ice on the indoor coil | Frozen coil or low refrigerant | Clean the filters and run fan-only mode to thaw | Check the charge and find the leak |
| Blinking with outdoor fan not turning | Outdoor fan motor fault | Clear debris from outside the cabinet | Test the motor and board fan output; replace the motor |
| Blinking with water leaking indoors | Condensate float or pump fault | Clear the visible drain outlet | Clear the drain internally and service the pump or float |
| Brief slow blink in heat mode, then normal heat | Defrost or warm-start (normal) | Wait 15 minutes | None needed |
| Same code returns immediately after a reset | IPM, compressor, or board fault | Leave the unit off | Test the inverter module and compressor windings |

## Repair costs

Typical US prices, including labor, as of 2026:

| Repair | Typical cost |
|---|---|
| Service call and diagnosis | $100–$250 |
| Communication wiring repair or terminal re-termination | $150–$400 |
| Temperature sensor (thermistor) replacement | $150–$350 |
| Indoor control board | $250–$600 |
| Outdoor inverter or main board | $450–$1,200 |
| Indoor blower motor | $300–$700 |
| Outdoor fan motor | $300–$650 |
| Leak repair plus refrigerant recharge | $400–$1,500, depending on leak location and refrigerant type |
| Compressor replacement | $1,500–$3,000+, often weighed against replacing the system |
| Condensate pump replacement | $150–$350 |

Check your warranty before approving work. Rheem mini-split parts warranties commonly run 5–10 years, and the length depends on whether the system was registered. Labor is usually not covered unless your installer provides its own coverage.

## Related codes

Rheem Mini-Split Not Cooling: Causes, Fixes & Costs
Rheem Mini-Split Not Heating: Causes, Fixes & Costs
Rheem Heat Pump Flashing Light: Causes & Fixes
Rheem AC Frozen Evaporator Coil: Causes, Fixes & Costs
Rheem AC Breaker Keeps Tripping: Causes, Fixes & Costs
Rheem AC Outdoor Fan Not Spinning: Causes, Fixes & Costs
Rheem AC Leaking Water: Causes, Fixes & Repair Costs
