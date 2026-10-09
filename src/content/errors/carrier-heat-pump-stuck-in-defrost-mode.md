---
title: "Carrier Heat Pump Stuck in Defrost Mode: Causes & Fixes"
code: "Stuck in defrost mode"
description: "Carrier heat pump stuck in defrost? Learn the causes (defrost board, sensor, reversing valve, relay), safe checks, and repair costs from $0 to $1,800+."
brand: carrier
equipment: heat-pump
severity: pro
costRange: "$0 DIY checks – $150-$450 for a sensor or control board, up to $1,000-$2,000+ for a reversing valve"
appliesTo: "Carrier split heat pumps (Comfort, Performance and Infinity series, e.g. 25HCB, 25HCC, 25VNA) using a defrost control board or Infinity/Evolution-communicating outdoor control. Defrost timing, termination temperature, maximum defrost time and fault-code display vary by board and model, so check the wiring diagram on the outdoor unit's service panel."
tags:
  - carrier
  - heat-pump
  - defrost
  - defrost-board
  - reversing-valve
  - outdoor-unit
parts:
  - name: "Thermostat batteries (AA or AAA, per your thermostat)"
    search: "AA alkaline batteries thermostat"
  - name: "HVAC air filter (correct size for your air handler)"
    search: "HVAC air filter MERV 8"
datePublished: 2026-10-08
dateModified: 2026-10-08
reviewedBy: ""
faq:
  - q: "How long should a Carrier heat pump stay in defrost?"
    a: "A normal defrost usually lasts about 2 to 10 minutes. Most Carrier defrost controls end defrost once the coil sensor reaches its termination temperature. If it does not, they end it at a maximum time limit, typically about 10 minutes. If the unit keeps running in defrost well past that, or goes back into defrost again and again, something is wrong."
  - q: "Is it normal to see steam and hear a whoosh from my heat pump?"
    a: "Yes. When defrost starts and ends, the reversing valve shifts with an audible whoosh. The outdoor fan also stops and steam rises off the coil. A short cycle like this is normal. It is a problem only if it lasts a long time or happens every few minutes."
  - q: "Is it safe to keep running a heat pump stuck in defrost?"
    a: "Not for long. In defrost the system is moving heat out of your home and into the outdoor coil. Backup heat runs at the same time to cover the loss, so your electric bill can climb quickly. You also risk the compressor running under conditions that strain it. Switch the thermostat to Emergency Heat (if you have it) and call a technician."
  - q: "Can I fix a stuck defrost myself by jumping the test pins?"
    a: "No. The defrost test pins and all diagnostics are on the control board inside the outdoor unit's service panel, which carries line voltage. Shorting the wrong pins can damage the board. Leave forced-defrost testing to a technician."
---

## What this code means

"Stuck in defrost" is not a numbered fault code. It describes a heat pump that enters defrost and fails to exit it, or one that keeps cycling back into defrost far more often than normal.

**How a normal Carrier defrost works:**

1. The defrost control watches outdoor coil temperature and accumulated run time. Infinity/Evolution systems also use outdoor air temperature.
2. When frost is likely, the control energizes the reversing valve to switch the unit into cooling mode. It also stops the outdoor fan and brings on backup heat strips.
3. Hot refrigerant melts the ice off the outdoor coil.
4. The control terminates defrost when the coil sensor reaches its set temperature, or when the maximum defrost time runs out (commonly about 10 minutes).

**Signs the unit is stuck:**

- The outdoor fan stays off.
- Steam or water keeps coming off the unit.
- Indoor air feels cool or lukewarm unless the heat strips carry the load.
- "Aux" or "Defrost" stays lit on the thermostat.

**Does it reset itself?** Defrost behavior is automatic, so it resets on its own when the cause clears. Some boards and Infinity controls log a fault or flash an LED code if defrost terminates on time instead of temperature, or if a sensor reads out of range. Whether that fault clears by itself or needs a power cycle depends on the board. Check the outdoor unit's wiring diagram or the Infinity UI service screens.

This page covers a unit that cannot get *out* of defrost. If your unit ices up and never *enters* defrost, see "Frozen and not defrosting."

## Common causes, ranked by probability

1. **Failed or misreading defrost/coil sensor (thermistor).** If the sensor reads too cold, comes loose from its tube, or has damaged wiring, the board never sees termination temperature. The unit then sits until the time limit, or keeps restarting defrost. This is the most common documented cause on Carrier units.
2. **Faulty defrost control board or outdoor control.** A stuck relay can hold the reversing valve energized or the outdoor fan off, which keeps the unit in cooling mode. So can a failed timing circuit. On Infinity systems, a failing outdoor control or a communication problem can produce the same symptom.
3. **Reversing valve problems.** The valve can stick mechanically, or its solenoid coil can fail and leave the valve stuck in the cooling position. The system then behaves as if it is permanently in defrost: cold air indoors and no outdoor fan.
4. **Outdoor fan motor or fan capacitor failure.** The outdoor fan is supposed to restart when defrost ends. If it does not, the unit can look stuck in defrost, and the coil refreezes quickly and triggers defrost again. The board is actually ending defrost, but the fan never comes back on.
5. **Low refrigerant charge.** An undercharged system ices up quickly and may not warm the coil enough to reach termination temperature. The result is long or very frequent defrost cycles.
6. **Heavy external icing, or a blocked coil or drainage.** Freezing rain, roof runoff dripping onto the unit, or a unit sitting in snow can reload the coil with ice faster than defrost can clear it. Debris packed in the coil has the same effect.
7. **Thermostat or wiring miscommunication.** On non-communicating systems, a thermostat configured wrong (for example, set up for O/B reversal when the system needs the opposite) can hold the reversing valve in the cooling position.

## Safe checks before you call anyone

These checks do not require opening any panel.

- **Thermostat:** Confirm the mode is set to Heat (not Cool or Auto) and the setpoint is above room temperature. Replace the batteries if the display is dim or blank. If a defrost or aux indicator stays on for more than about 15 minutes, write that down for the technician.
- **Emergency Heat:** If the home is getting cold, switch the thermostat to Emergency Heat (or EM Heat) to stop the heat pump and run on backup heat until service arrives.
- **Air filter:** Replace the filter if it is dirty. A clogged filter lowers indoor coil performance and can worsen frost problems.
- **Breakers and disconnect:** Check that the breakers for the outdoor unit and air handler are on. You may reset the system **once**: turn the thermostat off, switch off the outdoor disconnect or breaker for 5 minutes, then restore power. If the problem returns, stop and call a technician. Do not keep cycling power.
- **Around the outdoor unit:** Clear snow, leaves and debris for about 2 feet around the unit, with your hands or a soft broom only. Make sure the unit is not sitting in water or snow, and that gutters are not dripping onto it.
- **Do not chip ice.** Never hit or scrape ice off the coil, and never pour boiling water on it.
- **Visible vents and registers:** Make sure supply and return registers are open and unblocked.
- **Exterior panels:** Look at whether the outdoor unit's service panel is seated properly, without removing it.

## How a technician will diagnose it

Use these steps to sanity-check what you are told:

- **Observes the cycle.** The tech confirms whether the unit is truly stuck in defrost or is defrosting too often. Key observations are outdoor fan status, reversing valve position (from line temperatures), and backup heat operation.
- **Reads board diagnostics.** They check LED codes on the defrost board, or the fault history and service screens on the Infinity UI. On many Carrier boards, they confirm the defrost interval setting (for example, 30, 60, 90 or 120 minutes).
- **Tests the coil sensor.** They measure the sensor's resistance and compare it with Carrier's temperature/resistance chart. They also confirm the sensor is clipped tightly to the correct tube.
- **Forces a defrost.** They short the board's test pins to force a defrost, then watch whether the board terminates it correctly.
- **Checks the reversing valve.** They test the solenoid coil voltage and resistance, then compare line temperatures to see whether the valve actually shifts.
- **Tests the outdoor fan.** They check the fan motor and capacitor, and confirm the board's fan relay sends power after defrost ends.
- **Checks refrigerant charge.** They connect gauges and measure superheat and subcooling, and leak-check if the charge is low.
- **Checks thermostat wiring.** They verify the O/B configuration and wiring.

**Red flags in a quote:** A tech who recommends a new board or reversing valve without first testing the sensor, the solenoid coil and the outdoor fan is skipping steps. So is anyone who adds refrigerant without finding the leak.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Defrost runs about 10 minutes every cycle, coil never fully clears | Coil sensor misreading or loose | Note how long it runs and how often; switch to EM Heat | Test sensor resistance, re-secure or replace sensor |
| Outdoor fan never restarts, cold air indoors | Board relay stuck, or reversing valve stuck in cooling | Switch to EM Heat; one power reset | Diagnose board outputs, solenoid coil and valve; replace failed part |
| Defrost ends but ice returns within minutes | Outdoor fan motor or capacitor failure, or low refrigerant | Clear debris around the unit; call for service | Test fan and capacitor; check charge and repair leak |
| Frequent defrost during freezing rain or snow | Heavy external icing or runoff onto the unit | Clear snow, fix gutter drip | Raise the unit on a stand, check defrost interval setting |
| Blows cold air in Heat mode, no defrost steam | Thermostat O/B setting wrong or wiring fault | Confirm thermostat mode and setting | Correct thermostat configuration and wiring |
| Fault LED or Infinity alert along with long defrost | Sensor out of range or outdoor control fault | Record the code shown | Read diagnostics, replace sensor or control |

## Repair costs

These are typical US price ranges including labor. Costs vary by region and by model.

| Repair | Typical cost |
|---|---|
| Service call / diagnosis | $90 – $250 |
| Defrost (coil) sensor/thermistor | $120 – $300 |
| Defrost control board (standard) | $250 – $600 |
| Infinity/Evolution outdoor control board | $500 – $1,200 |
| Outdoor fan capacitor | $120 – $300 |
| Outdoor fan motor | $350 – $800 |
| Reversing valve solenoid coil | $150 – $350 |
| Reversing valve replacement (includes refrigerant recovery and recharge) | $1,000 – $2,000+ |
| Refrigerant leak repair and recharge | $300 – $1,500+ (depends on refrigerant type and leak location) |
| Thermostat reconfiguration | Often included in the service call; a new thermostat runs $100 – $400 installed |

Parts under Carrier's limited warranty (often 10 years if the unit was registered) may lower these costs, but labor is usually extra.

## Related codes

- Frozen and not defrosting — Carrier Heat Pump Frozen and Not Defrosting: Causes & Fixes
- Ice on outdoor unit — Carrier Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Auxiliary heat on constantly — Carrier Heat Pump Aux Heat On Constantly: Causes & Fixes
- Not heating — Carrier Heat Pump Not Heating: Causes, Fixes & Costs
- Not cooling — Carrier Heat Pump Not Cooling: Causes, Fixes & Costs
