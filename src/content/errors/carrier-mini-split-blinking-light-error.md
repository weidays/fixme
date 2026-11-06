---
title: "Carrier Mini-Split Blinking Light Error: Causes & Fixes"
code: "Blinking light error"
description: "Carrier mini-split blinking light: what the flashes mean, common causes like sensor, communication and refrigerant faults, safe checks and repair costs."
brand: carrier
equipment: mini-split
severity: pro
costRange: "$0 DIY – $1,800+ if an inverter board or compressor component needs replacement"
appliesTo: "Carrier ductless mini-splits, including 38/40MAQ, 38/40MBQ, 38/40MHH and 38/40MUQ series and similar Midea-built platforms. Flash counts, which LED blinks (Operation, Timer, Run) and whether a numeric code shows on the display all vary by series and generation. Always confirm against the service manual for your exact model number."
tags:
  - carrier
  - mini-split
  - ductless
  - blinking-light
  - error-code
  - diagnostics
parts:
  - name: "Remote control batteries (AAA)"
    search: "AAA alkaline batteries 8 pack"
  - name: "Mini-split replacement filter (model-specific)"
    search: "Carrier mini split indoor unit replacement air filter"
datePublished: 2026-11-06
dateModified: 2026-11-06
reviewedBy: ""
faq:
  - q: "What does a blinking light on my Carrier mini-split mean?"
    a: "It is a self-diagnostic fault code. The board flashes a specific LED a set number of times, or shows a code on the display, to identify a fault such as a failed temperature sensor, a communication error between the indoor and outdoor units, or an outdoor inverter protection trip. The exact meaning depends on your model's service manual."
  - q: "Will the blinking light clear on its own?"
    a: "It depends on the fault. Some protection faults, like high or low voltage or overcurrent, can clear once conditions return to normal. Hard faults, like an open sensor or a failed EEPROM, usually keep blinking until the cause is repaired and power is cycled. One power cycle at the breaker is a reasonable first step. If the light comes back, call a technician."
  - q: "Can I keep running the mini-split while the light is blinking?"
    a: "Generally no. The unit has usually stopped or limited operation to protect itself. Repeatedly restarting it can stress the compressor or inverter electronics. Leave it off and schedule service."
  - q: "How do I read the code to tell the technician?"
    a: "Count the flashes between pauses and note which LED is blinking. Some models also show a code on the display or on the outdoor board's LED. Write down your full indoor and outdoor model numbers from the rating labels. This lets the technician bring the right parts."
---

## What this code means

A blinking light on a Carrier ductless mini-split is not a single fault. It is how the indoor unit reports a diagnostic code. Depending on the generation, you may see one of three things:

- An indicator LED (Operation, Timer, Defrost/Run) flashing a set number of times, then pausing.
- A two-character code on the indoor display, such as E1, E5, P1 or F-series codes.
- A code on an LED at the outdoor unit's control board.

The flash count tells the technician which subsystem tripped. It does not identify a specific failed part.

**Which LED and how many flashes map to which fault differs between series** (for example, 38/40MAQ versus 38/40MHH versus older Toshiba-built units). The model-specific service manual is the only reliable decoder.

**Reset behavior also varies:**

- Protection faults (voltage, current, temperature) may clear automatically once conditions normalize.
- Sensor, EEPROM and persistent communication faults typically hold until the cause is fixed and power is cycled.

Overlapping symptoms are covered elsewhere. This page is about reading and acting on the blink itself. For general poor performance, see the Carrier Mini-Split Not Cooling and Not Heating pages.

## Common causes, ranked by probability

These are the documented fault categories behind Carrier mini-split diagnostic flashes, roughly in order of how often technicians find them.

1. **Indoor–outdoor communication error.** This is commonly shown as E1/E5-type codes or a specific flash count. Causes include loose or miswired interconnect wiring, an incorrect wire gauge, splices, damaged cable, or a failing board on either end. It is very common after a new installation or storm damage.
2. **Temperature sensor (thermistor) fault.** An open or shorted sensor triggers this code. Possible sensors are the indoor room sensor, the indoor coil sensor, or the outdoor coil, ambient or discharge sensor.
3. **Power supply / voltage protection.** Supply voltage is too high or too low, often from utility sags, a loose disconnect connection, or a weak circuit. This type may self-clear.
4. **Outdoor inverter protection.** Overcurrent, IPM (power module) fault or compressor drive fault. This is often tied to a failing inverter board or compressor issues.
5. **High-temperature or high-pressure protection.** Possible causes:
   - A dirty outdoor coil or blocked airflow
   - A failed outdoor fan motor
   - Severely clogged indoor filters
   - Refrigerant problems
6. **Fan motor fault (indoor or outdoor).** The board loses the motor's speed feedback signal.
7. **Low refrigerant / refrigerant leak detection.** This appears on models with that protection logic.
8. **EEPROM or main control board failure.** The board fails its parameter memory check.
9. **Condensate float/overflow switch.** This applies where a pump or float switch is fitted. It may stop the unit and trigger an error on some models.

## Safe checks before you call anyone

Limit yourself to these steps:

1. **Record the code first.**
   - Count the flashes between pauses.
   - Note which LED is blinking and any characters on the display.
   - Take a short phone video.
   - Note the model numbers from the indoor and outdoor rating labels.
2. **Check the remote.** Replace the batteries. Confirm the mode (Cool/Heat/Auto) and set point make sense.
3. **Clean the indoor filters.** Lift the front panel and slide out the mesh filters. Rinse them with lukewarm water, let them dry fully, and reinstall.
4. **Check visible airflow.** Make sure the louvers aren't blocked by furniture or curtains. Look for debris, snow or vegetation within about 2 feet of the outdoor unit, and clear it by hand.
5. **Check the condensate drain.** Look for water dripping from the indoor unit or a kinked or blocked visible drain line. If a condensate pump is fitted and its reservoir is visibly full, that points to a drain problem.
6. **Do one power cycle.**
   - Switch off the breaker (and the outdoor disconnect, if you can reach it without opening anything).
   - Wait 5 minutes.
   - Restore power.

   If the blinking returns, stop and call a technician. Do not keep resetting.
7. **Check the breaker.** If the breaker has tripped, you may reset it once. If it trips again, leave it off. See Carrier AC Breaker Keeps Tripping.

Do not open the indoor unit's cover or the outdoor service panel. Do not check wiring or handle refrigerant lines. Line voltage and stored charge in the inverter capacitors are dangerous even with the power off.

## How a technician will diagnose it

A competent technician should:

- **Decode the flash pattern** with the service manual or Carrier's diagnostic tables for your exact model, and check the outdoor board LED if one is present.
- **Verify supply voltage** at the disconnect and terminal block, both at rest and under load.
- **Test communication wiring.** This means checking the interconnect cable for correct terminal order (1-2-3/S), continuity, gauge, and voltage on the signal line. Lost communication is often a wiring issue, not a board.
- **Measure thermistor resistance** against the manual's temperature/resistance chart.
- **Inspect the outdoor unit:**
  - Coil cleanliness
  - Fan motor operation
  - Inverter board, IPM and DC bus voltage
  - Compressor winding resistance
- **Check refrigerant** with gauges and/or superheat and subcooling, and leak-check if low. Refrigerant work requires EPA 608 certification.
- **Replace a board only after ruling out** wiring, sensors and supply power.

**Red flags in a quote:**
- Replacing both boards without testing.
- Adding refrigerant without finding a leak.
- Being unable to tell you which code the unit reported.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Blinks right after power-up, outdoor unit never starts | Communication error | Power-cycle once; note code | Test interconnect wiring and terminals; test boards |
| Code appeared after a storm or outage | Voltage protection or surge-damaged board | Check breaker; one power cycle | Measure supply voltage; inspect boards |
| Runs briefly, then stops and blinks | High-temp/pressure protection, fan fault | Clean filters; clear around outdoor unit | Clean coil, test fan motor, check charge |
| Blinks constantly, never runs | Sensor open/short or EEPROM fault | Record code, call | Measure thermistors; replace sensor or board |
| Weak cooling/heating before code appeared | Low refrigerant | Clean filters only | Leak search, repair, evacuate and recharge |
| Water dripping plus error | Blocked drain or float switch tripped | Check visible drain line for kinks | Clear drain, test pump and float switch |
| Outdoor unit hums or clicks, then error | Inverter/IPM or compressor fault | Turn off; don't keep resetting | Test inverter board and compressor windings |

## Repair costs

Typical US ranges, including parts and labor. Mini-split parts are model-specific and can take time to source.

| Repair | Typical cost |
|---|---|
| Service call / diagnostic | $100–$250 |
| Re-terminate or replace interconnect wiring | $150–$500 |
| Thermistor (temperature sensor) replacement | $150–$350 |
| Indoor or outdoor coil cleaning | $150–$400 |
| Indoor fan motor | $300–$700 |
| Outdoor fan motor | $350–$800 |
| Indoor control board | $300–$700 |
| Outdoor inverter/main board | $600–$1,800 |
| Leak repair and recharge | $400–$1,500+ |
| Compressor replacement | $1,500–$3,500 |

On an older system, consider replacing the condensing unit or the whole system if the compressor has failed. Check whether the unit is still within Carrier's parts warranty first. Registered units often carry longer parts coverage.

## Related codes

- Carrier Mini-Split Not Cooling: Causes, Fixes & Costs
- Carrier Mini-Split Not Heating: Causes, Fixes & Costs
- Carrier Heat Pump Flashing Light: Causes, Fixes & Costs
- Carrier AC Breaker Keeps Tripping: Causes, Fixes & Costs
- Carrier AC Compressor Not Running: Causes, Fixes & Costs
- Carrier AC Outdoor Fan Not Spinning: Causes & Fixes
- Carrier AC Leaking Water: Causes, Fixes & Costs
