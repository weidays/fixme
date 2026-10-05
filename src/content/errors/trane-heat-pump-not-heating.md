---
title: "Trane Heat Pump Not Heating: Causes, Fixes & Costs"
code: "Not heating"
description: "Trane heat pump not heating? Learn the likely causes (defrost, low refrigerant, reversing valve, capacitor), safe checks, and repair costs."
brand: trane
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $2,500+ if a reversing valve or compressor must be replaced"
appliesTo: "Trane XR, XL, XV heat pumps (e.g., XR14, XR16, XL18i, XV18, XV20i) and older Trane split heat pumps. Diagnostics differ by control: communicating ComfortLink II / Link systems show alert codes at the thermostat or outdoor board, while 24V systems rely on the defrost control board LED and technician testing."
tags:
  - trane
  - heat-pump
  - not-heating
  - defrost
  - reversing-valve
  - refrigerant
  - auxiliary-heat
parts:
  - name: "Replacement HVAC air filter"
    search: "HVAC air filter 16x25x1 MERV 8"
  - name: "AA lithium thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-10-04
dateModified: 2026-10-04
reviewedBy: ""
faq:
  - q: "Is it normal for my Trane heat pump to blow lukewarm air?"
    a: "Yes, to a degree. Heat pump supply air is usually around 85–100°F, which feels cooler than furnace air. It's a problem only if the house can't hold the setpoint or the air is near room temperature."
  - q: "Why is my outdoor unit steaming and the fan stopped?"
    a: "That is almost always a normal defrost cycle. The unit briefly reverses to melt frost off the coil, and steam is the result. A cycle usually ends within about 10 minutes. Call a technician only if the coil stays heavily iced."
  - q: "Should I switch to emergency heat?"
    a: "Emergency heat is a reasonable stopgap if the outdoor unit has failed or is fully iced over and you're waiting on a technician. It runs only the backup heat strips or furnace, so expect higher energy bills. Don't leave it on long term."
  - q: "Can I pour hot water on an iced-up Trane heat pump?"
    a: "Avoid hot water and never chip at the ice. Both can damage the fins and coil. Turn the system off or to emergency heat and have a technician find out why defrost isn't working."
  - q: "Does the heat pump reset itself after a fault?"
    a: "It depends on the control. Many Trane defrost and communicating boards retry automatically after short delays, such as the pressure-switch or anti-short-cycle timers. Some lockouts hold until power is cycled. Reset once at the breaker or thermostat. If the problem returns, call for service."
---

## What this code means

"Not heating" is a symptom, not a single fault code. The Trane heat pump is running, or trying to run, but the house isn't warming. Typical signs:

- The air from the vents feels near room temperature.
- The house can't reach the thermostat setpoint.
- The outdoor unit sits idle.
- The system only keeps up when backup heat runs.

On communicating Trane systems (ComfortLink II, Link with XL/XV variable-speed units), the thermostat or outdoor control often logs an alert code that pinpoints the cause. On conventional 24V systems, a technician reads the defrost board's LED and takes measurements.

**Reset behavior varies by control.**
- Many faults auto-retry after a built-in delay. Examples are the anti-short-cycle timer and the high/low pressure switch trips on many defrost boards.
- Repeated trips on some boards cause a soft or hard lockout that holds until power is cycled.

Check your outdoor unit's service literature (usually on the inside of the control panel cover, viewed by the technician) for exact behavior.

If you have a Trane gas furnace as backup heat and it's the furnace that won't fire, see the furnace pages listed under Related codes.

## Common causes, ranked by probability

1. **Thermostat setup or mode issue.** The thermostat is set to Cool, Fan, or Off, or the setpoint is too low. Dead batteries also cause this. So does wrong heat pump configuration after a thermostat swap, such as O/B reversing valve wiring set to the wrong polarity, which makes the unit cool in heat mode.
2. **Restricted airflow.** A clogged filter, closed registers, or blocked returns starve the indoor coil. This can trip high-pressure protection in heating mode.
3. **Normal defrost or cold-weather limits mistaken for failure.** During defrost the unit briefly delivers cool air. Below the balance point, typically around 25–35°F for standard units, the heat pump alone can't keep up without auxiliary heat.
4. **Outdoor coil iced over / defrost failure.** Possible causes:
   - a faulty defrost control board
   - a failed coil temperature sensor (thermistor)
   - an outdoor fan problem
   - blocked airflow from snow, leaves, or bushes
5. **Failed capacitor or contactor.** The outdoor unit hums or doesn't start at all. This is a very common heat pump service call.
6. **Low refrigerant charge (leak).** Heating output drops, the coil may ice unevenly, and the unit may trip on low pressure.
7. **Reversing valve stuck or solenoid coil failed.** The unit runs but blows cool air in heat mode.
8. **Auxiliary heat not working.** A failed heat strip, sequencer, or limit, or an air handler breaker tripped, leaves the house cold in very cold weather even when the heat pump itself is fine.
9. **Compressor failure.** This is less common. It is diagnosed only after the items above are ruled out.

## Safe checks before you call anyone

- **Thermostat:**
  - Confirm it's set to Heat, with the setpoint several degrees above room temperature.
  - Replace the batteries if it has them.
  - If the thermostat was recently replaced, note that. The technician will want to check heat pump configuration.
- **Air filter:** Replace it if it's dirty, and check that it's the correct size and installed in the direction of the arrow.
- **Breakers and switches:**
  - Check the panel breakers for both the outdoor unit and the indoor air handler or furnace. Electric heat strips often have their own breaker.
  - Check the outdoor disconnect.
  - Reset a tripped breaker **once**. If it trips again, leave it off and call for service.
- **One system reset:** If the unit seems locked out, turn the thermostat off, switch off the breakers for about 5 minutes, then restore power and set Heat. Do this only once.
- **Wait out the delays:** Allow up to about 10 minutes for anti-short-cycle delays or a defrost cycle to finish before deciding something is wrong.
- **Vents and registers:**
  - Open the supply registers.
  - Clear furniture and rugs off the return grilles.
  - Keep snow, leaves, and debris clear of the outdoor unit. Leave about 2 feet of clearance and keep it free of drifting snow. Don't chip at ice.
- **Condensate:** In heating mode the outdoor unit drains defrost melt-water. Make sure it can drain away and isn't refreezing into a block under the unit.
- **Panels:** Make sure the air handler or furnace panels are fully seated. A loose panel can keep the indoor blower from running.
- **Stopgap:** If the outdoor unit isn't working, switch the thermostat to Emergency Heat until a technician arrives.

## How a technician will diagnose it

A competent technician will typically do the following, in roughly this order:

1. **Read the controls.** They pull alert codes from a communicating thermostat or outdoor board, or read the 24V defrost board LED.
2. **Check thermostat signals.** They confirm the thermostat is calling correctly: Y for compressor, O/B for the reversing valve, W/W2 for auxiliary heat. They also check that the O/B setting matches the Trane system, which energizes the reversing valve in cooling.
3. **Measure airflow and temperature split.** They check static pressure or filter and coil condition, and measure supply versus return temperature. A healthy heat pump typically shows a rise of about 15–30°F depending on outdoor temperature.
4. **Test electrical components.** They test the run capacitor (µF against the label), the contactor, and the outdoor fan motor. On a compressor that won't start, they check for an open internal overload.
5. **Check the defrost system.** They inspect the coil, test the coil sensor resistance against Trane's chart, and force a test defrost using the board's test pins.
6. **Check the refrigerant circuit.** They attach gauges or digital probes and compare pressures, superheat, and subcooling to Trane's heating-mode charging data. If the charge is low, they should **leak-search before adding refrigerant**.
7. **Test the reversing valve.** They check the solenoid coil voltage and resistance, and compare temperatures across the valve lines.
8. **Test auxiliary heat.** They check the heat strip elements, sequencers or relays, limits, and breakers.

**Red flags in a quote:**
- "Just add refrigerant" with no leak search.
- A compressor replacement recommended without capacitor, contactor, and winding tests.
- A reversing valve diagnosis made without checking the solenoid coil and thermostat O/B signal first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Nothing runs, indoors or out | Thermostat off or dead batteries, tripped breaker | Set Heat, replace batteries, reset breaker once | Trace low-voltage circuit, transformer, fuse, controls |
| Indoor blower runs, outdoor unit silent | Tripped outdoor breaker or disconnect, failed contactor, timer delay | Check outdoor breaker and disconnect, wait 10 min | Test contactor, capacitor, board, thermostat Y signal |
| Outdoor unit hums but doesn't start | Failed run capacitor, seized fan or compressor | Turn the unit off to prevent overheating | Test and replace capacitor, test motors and compressor |
| Cool air in heat mode, unit running | Thermostat configuration (O/B), stuck reversing valve, defrost in progress | Confirm Heat mode, wait out defrost | Check O/B setting, test valve solenoid, replace valve if stuck |
| Outdoor coil a solid block of ice | Defrost board or sensor failure, fan failure, low charge | Clear snow and debris, switch to Emergency Heat | Force defrost test, test sensor, check fan and charge |
| Steam and fan stopped briefly | Normal defrost | None, wait up to about 10 minutes | Not needed unless it repeats constantly |
| Warm-ish air but house never reaches setpoint | Low refrigerant, dirty filter or coil, cold weather beyond capacity | Replace filter, open registers | Charge and leak check, test aux heat strips and sequencers |
| Fine in mild weather, cold below about 30°F | Auxiliary heat not working | Check the air handler heat strip breaker | Test elements, sequencers, limits, W2 wiring |
| Runs a few minutes, shuts off, restarts later | Pressure switch trips (airflow or charge) | Replace filter, clear outdoor unit | Check pressures, airflow, fan motor, switch operation |

## Repair costs

Typical US ranges, parts plus labor:

| Repair | Typical cost |
|---|---|
| Diagnostic or service call | $90–$250 (higher after hours or on weekends) |
| Thermostat batteries or filter (DIY) | $5–$40 |
| Thermostat reconfiguration or replacement | $100–$450 installed |
| Run capacitor | $120–$400 |
| Contactor | $150–$400 |
| Defrost thermistor or coil sensor | $150–$350 |
| Defrost control board (24V) | $300–$700 |
| Communicating board (XL/XV) | $500–$1,200 |
| Outdoor fan motor | $350–$900 |
| Reversing valve solenoid coil only | $150–$350 |
| Reversing valve replacement | $1,000–$2,500 (brazing, recovery, evacuation, recharge) |
| Leak search and repair plus recharge | $300–$1,500+ (refrigerant type and leak location drive cost) |
| Heat strip element or sequencer | $200–$600 |
| Compressor replacement | $1,800–$4,000+ |

**Warranty first.** Trane offers a 10-year registered limited parts warranty, and many units are covered. On units over about 12–15 years old with a failed compressor or a major leak, replacement is often the better value.

## Related codes

These Trane pages cover a gas furnace used as backup heat. If your system pairs a heat pump with a Trane furnace and the furnace side is the problem, see:

- Trane Furnace Blowing Cold Air: Causes, Fixes & Costs
- Trane Furnace Won't Turn On: Causes, Fixes & Costs
- Trane Furnace Runs Constantly But Not Enough Heat
- Trane Furnace Won't Ignite: Causes, Fixes & Costs
- Trane Furnace Blower Not Running: Causes & Fixes
- Trane Furnace Short Cycling: Causes, Fixes & Costs
