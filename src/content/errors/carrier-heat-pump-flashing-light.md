---
title: "Carrier Heat Pump Flashing Light: Causes, Fixes & Costs"
code: "Flashing light"
description: "Carrier heat pump flashing light explained: what the flash codes mean, likely causes like pressure or sensor faults, safe fixes, and repair costs."
brand: carrier
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150-$400 for a typical sensor, switch or capacitor repair; $600-$1,500+ for a control board or communicating-system part"
appliesTo: "Carrier outdoor heat pumps (Comfort, Performance, Infinity/Greenspeed series). Non-communicating models with a defrost board show a status LED with flash patterns that vary by board generation. Infinity/communicating units also report detailed fault codes on the wall control and a seven-segment or two-digit display on the outdoor board. Flash-code meanings differ by model, so check the label inside the outdoor unit's control panel."
tags:
  - carrier
  - heat-pump
  - flashing-light
  - status-led
  - fault-code
  - lockout
parts:
  - name: "Thermostat batteries (AA/AAA)"
    search: "AA alkaline batteries thermostat"
  - name: "Replacement air filter (correct size)"
    search: "MERV 8 HVAC air filter 16x25x1"
datePublished: 2026-10-18
dateModified: 2026-10-18
reviewedBy: ""
faq:
  - q: "Is a slowly flashing green or amber light on my Carrier heat pump a problem?"
    a: "Not always. On many Carrier defrost and control boards, a steady slow flash or a steady light is the normal 'standby/OK' heartbeat. A fault is usually shown as a rapid flash or a specific count of flashes followed by a pause. Compare what you see to the code label in the unit before assuming a failure."
  - q: "Will the flashing code clear by itself?"
    a: "It depends on the fault and the board. Many Carrier boards hold a temporary pressure-switch trip and retry automatically after a time delay, typically about 15 minutes. If the same fault repeats several times in a row, the board locks out and holds the code until power is cycled. Some faults are stored in memory even after the unit recovers."
  - q: "Can I reset a Carrier heat pump that is flashing a fault?"
    a: "You can try one reset. Turn the thermostat to Off, switch off the outdoor disconnect and the breaker for about 5 minutes, then restore power. If the same flash pattern returns, stop and call a technician. Repeated resets of a locked-out compressor can damage it."
  - q: "Why does my Infinity thermostat show a code when the outdoor unit is flashing?"
    a: "Infinity and Greenspeed systems are communicating systems. The outdoor board reports its fault to the wall control, which usually displays a more specific message and stores fault history. A technician can read that history, which speeds diagnosis."
---

## What this code means

A flashing light on a Carrier heat pump comes from a status LED on the outdoor unit's control board. That is the defrost board on standard models, or the main control board on Infinity/Greenspeed units. The board uses flash patterns to report its operating state. "Flashing light" is not one fault. You have to read the pattern.

**How to tell a normal flash from a fault flash:**

- **Normal:** A steady light or a slow, even blink usually means the board has power and no fault is active. The exact pattern depends on the board.
- **Fault:** A rapid flash, or a set number of flashes followed by a pause, means a fault. Count the flashes.

**What the fault patterns commonly cover on Carrier boards:**

- Low-pressure or loss-of-charge switch open
- High-pressure switch open
- Compressor or thermal protection trip
- Outdoor coil or ambient temperature sensor (thermistor) fault
- Compressor lockout after repeated trips
- On communicating systems, loss of communication with the indoor unit or wall control

**Reset behavior:**

- On most Carrier boards, a single pressure-switch trip triggers a timed retry (often about 15 minutes) and clears itself if the switch recloses.
- Repeated trips within one call for heating or cooling cause a lockout. The lockout holds until power is cycled at the disconnect or breaker.
- Communicating models store fault history even after recovery.

Flash counts and their meanings differ between board generations. The code key is printed on a label inside the outdoor unit's control access panel. On Infinity systems, the full description appears on the wall control. Always go by your unit's own label rather than a generic chart.

## Common causes, ranked by probability

1. **Airflow-related pressure trip.** A dirty filter or blocked indoor airflow in heat mode, or a blocked outdoor coil in cooling, raises head pressure and opens the high-pressure switch.
2. **Low refrigerant charge (leak).** This opens the low-pressure or loss-of-charge switch, which is often worst in cold weather.
3. **Faulty outdoor coil or ambient thermistor.** A sensor that reads out of range triggers a sensor fault, and it often affects defrost too.
4. **Compressor overload or thermal trip.** This can come from a weak run capacitor, a failing contactor, low voltage, or a compressor that is starting to fail.
5. **Failed pressure switch or wiring fault.** A switch that reads open even though the pressures are normal, or a loose connection at the board.
6. **Communication fault (Infinity/Greenspeed only).** A wiring problem on the ABCD data bus or a mismatch between the indoor and outdoor controls.
7. **Failed control or defrost board.** This is the least common cause and is diagnosed only after the components above test good.

## Safe checks before you call anyone

These are the only steps a homeowner should take:

1. **Note the pattern first.** Count the flashes and look for a pause. Photograph or video the LED through any viewing window, or as shown on the wall control. Do not open panels to find it.
2. **Check the thermostat.** Confirm the mode (Heat/Cool) and the setpoint, and replace the batteries if your model uses them. On an Infinity control, write down any fault message shown.
3. **Replace the air filter if it is dirty.** Restricted airflow is a leading cause of pressure trips.
4. **Open the vents and registers.** Make sure supply and return vents are open and not blocked by furniture.
5. **Clear around the outdoor unit.** Gently remove leaves, snow, or debris from around the outside of the cabinet without touching the fins with tools. Keep about 2 feet of clearance. Don't chip at ice; heavy ice buildup is a technician issue.
6. **Check the breakers.** Confirm the breakers for the indoor and outdoor units are on.
7. **Do one reset.** Set the thermostat to Off, turn off the outdoor disconnect and breaker for 5 minutes, restore power, and call for heat or cooling again.
8. **Call a technician if the fault returns.** If the same pattern comes back, don't keep resetting.

## How a technician will diagnose it

A technician should work through these steps, which you can use to sanity-check a quote:

1. **Read the fault.** They read the board's flash code and stored history (via the Infinity service menu where applicable) and match it to the unit's code label.
2. **Check airflow.** They inspect the filter, blower operation, and the condition of the indoor and outdoor coils.
3. **Measure system pressures.** They take readings with gauges or probes and check superheat and subcooling to confirm or rule out low charge. If charge is low, they should find the leak before recharging.
4. **Test the pressure switches.** They check continuity on the high and low switches.
5. **Measure the thermistors.** They measure resistance and compare it against Carrier's temperature/resistance chart.
6. **Test the electrical components.** This includes the capacitor (µF), the contactor, supply voltage, and compressor amperage and windings.
7. **Check communication wiring.** On Infinity/Greenspeed systems, they verify the ABCD wiring and voltages.
8. **Condemn the board last.** A board should be replaced only after all inputs test good.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Slow, steady blink and the system works | Normal standby or status | None | None |
| Flash code after a long run on a hot or cold day | High-pressure trip from poor airflow | Replace the filter, open vents, clear debris around the unit, do one reset | Clean the coils and check the blower and pressure switch |
| Flash code and weak heat in cold weather | Low charge or loss-of-charge switch | One reset only | Find and repair the leak, then recharge |
| Code plus defrost problems or icing | Coil or ambient thermistor fault | Note the code and clear snow from around the unit | Test and replace the thermistor |
| Compressor hums or won't start, then flashes | Capacitor, contactor, or compressor overload | Check the breaker, do one reset | Electrical tests and part replacement |
| Wall control shows a communication fault | Data wiring or control mismatch | Note the message | Test and repair the ABCD wiring |
| Code persists after all checks | Failed board or switch | Call for service | Diagnose and replace the board |

## Repair costs

These are typical US ranges, parts and labor included:

| Repair | Typical cost |
|---|---|
| Filter (DIY) | $10–$40 |
| Service call and diagnosis | $90–$250 |
| Coil cleaning | $100–$300 |
| Pressure switch replacement | $150–$400 |
| Thermistor (coil or ambient sensor) | $150–$350 |
| Run capacitor | $120–$350 |
| Contactor | $150–$350 |
| Leak search and repair plus refrigerant | $300–$1,500+ (depends on leak location and refrigerant type) |
| Defrost or control board | $400–$900 |
| Infinity/Greenspeed board | $700–$1,500+ |
| Compressor replacement | $1,800–$4,000+ |

Check your warranty before paying for parts. Carrier parts warranties commonly run 10 years when the unit is registered.

## Related codes

- Carrier Heat Pump Won't Turn On: Causes, Fixes & Costs
- Carrier Heat Pump Compressor Not Running: Causes & Fixes
- Carrier Heat Pump Frozen and Not Defrosting: Causes & Fixes
- Carrier Heat Pump Stuck in Defrost Mode: Causes & Fixes
- Carrier Heat Pump Not Heating: Causes, Fixes & Costs
- Carrier Heat Pump Not Cooling: Causes, Fixes & Costs
- Carrier Heat Pump Short Cycling: Causes, Fixes & Costs
- Carrier Heat Pump Breaker Keeps Tripping: Causes & Fixes
