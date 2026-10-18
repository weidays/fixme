---
title: "Trane Heat Pump Flashing Light: Meaning, Causes & Fixes"
code: "Flashing light"
description: "Trane heat pump flashing light explained: what the outdoor board LED means, common causes like pressure and sensor faults, safe checks, and repair costs."
brand: trane
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $1,800+ if a control board or compressor-related part needs replacement"
appliesTo: "Trane conventional 24V heat pumps (XR/XL and older series) with a defrost control board, plus ComfortLink II and Link communicating models (XV, XL18i/XL20i). LED location, colors and flash meanings vary by board, so always read the code legend on the inside of the access panel or in the service facts for your model."
tags: [trane, heat-pump, flashing-light, diagnostic-led, defrost-board, lockout, communicating-system]
parts: []
datePublished: 2026-10-18
dateModified: 2026-10-18
reviewedBy: ""
faq:
  - q: "Is a flashing light on my Trane heat pump always a problem?"
    a: "No. Many Trane defrost and control boards flash a status LED steadily during normal operation as a heartbeat signal. A change in the pattern, or a different color such as red or amber, is what usually points to a fault. Compare what you see against the legend label inside the unit's access panel."
  - q: "Will the flashing light clear by itself?"
    a: "It depends on the board. Some faults, like a temporary pressure trip, clear automatically after a time delay once conditions return to normal. Repeated pressure trips can cause a soft or hard lockout that holds until power is cycled. Communicating systems also log faults in the thermostat's alert history."
  - q: "Can I reset my Trane heat pump to clear the flashing code?"
    a: "You can turn the heat pump off at the thermostat, switch off the outdoor disconnect or breaker for about five minutes, and then restore power once. If the same flash pattern comes back, stop and call a technician. Repeated resets can damage the compressor."
  - q: "How do I read the flash code without opening the unit?"
    a: "On communicating Trane systems, such as ComfortLink II and Link models, the thermostat or control usually shows the alert in plain text or as a numbered code. On conventional systems the LED is behind a service panel. Reading it is a job for a technician, who can also check the fault history."
---

## What this code means

A flashing light on a Trane heat pump is not a single fault code. It is a diagnostic LED on the outdoor unit's control board that reports system status. What a given pattern means depends on the board:

- **Conventional (24V) Trane heat pumps** use a defrost control board. This board typically flashes a status LED to show normal operation. It uses different flash counts, or a second LED, to report faults:
  - high-pressure or low-pressure switch trips
  - lockouts
  - sensor faults
  - defrost faults
- **ComfortLink II and Link communicating systems** have their own LED patterns. They also send fault codes to the thermostat or system control, where they can be read in plain text.

Because flash meanings differ between board revisions, the only reliable decoder is the legend label inside your unit's access panel. Your model's Service Facts sheet is the other reliable source.

A steady, slow "heartbeat" flash is often normal. A changed pattern, especially with the outdoor unit not running, usually means the board has stopped the compressor to protect it.

Some faults auto-reset after a delay once conditions return to normal. Repeated pressure-switch trips can escalate to a lockout that holds until power is cycled. The exact behavior varies by board.

If your heat pump pairs with a Trane gas furnace, a flashing light on the *indoor* furnace board is a different system. See the furnace flash-code pages listed under Related codes.

## Common causes, ranked by probability

1. **Normal status flash.** Many boards blink continuously to show they are powered and working. Nothing is wrong if the system heats and cools normally.
2. **High-pressure switch trip.** Common triggers:
   - a dirty or blocked outdoor coil (cooling)
   - a clogged filter or weak indoor airflow (heating)
   - an outdoor fan problem
   - refrigerant overcharge
3. **Low-pressure switch trip.** Typically caused by low refrigerant charge (a leak), a restriction, or a failing expansion device.
4. **Lockout after repeated pressure trips.** Some boards lock out the compressor after several trips in one call for heating or cooling.
5. **Defrost sensor (coil thermistor) or ambient sensor fault.** Wiring or sensor failure can trigger a defrost-related flash code.
6. **Low or unstable 24V control voltage, or a wiring or communication fault.** This applies especially to communicating systems.
7. **Failed outdoor control board.** This is diagnosed only after the other causes are ruled out.

## Safe checks before you call anyone

- **Thermostat:** Confirm it is set to the right mode (Heat or Cool) and the setpoint calls for operation. Replace batteries if it uses them. On communicating thermostats, check the alerts or service menu and write down any code shown.
- **Air filter:** A clogged filter is a leading cause of pressure trips in heat mode. Replace it if it is dirty.
- **Vents and registers:** Make sure supply and return grilles are open and unblocked.
- **Outdoor unit surroundings:** Clear leaves, snow, and debris from around the unit without opening it. Keep about 2 feet of clearance.
- **Breakers and disconnect:** Check that the indoor and outdoor breakers are on and the outdoor disconnect is in place.
- **One reset only:** Turn the thermostat off. Then switch off the outdoor breaker or disconnect for 5 minutes, restore power, and turn the system back on. If the flash pattern returns, do not reset again. Call a technician.
- **Condensate:** In cooling mode, check that the indoor condensate line is draining and any float switch hasn't tripped.

Do not open the outdoor unit's electrical panel to read the board. It contains high voltage and capacitors that hold a charge.

## How a technician will diagnose it

1. Read the LED pattern against the unit's legend, and pull stored fault history. On communicating systems, this comes from the thermostat or service tool.
2. Verify line voltage and 24V control voltage, including transformer output and the wiring between the indoor and outdoor units.
3. Check airflow and coils. This includes the indoor blower, filter, the outdoor coil's condition, and outdoor fan motor and capacitor operation.
4. Connect gauges or digital probes to measure pressures, superheat, and subcooling. This confirms charge and identifies restrictions or leaks.
5. Test the high-pressure and low-pressure switches for continuity, and check the defrost and ambient sensor resistance against Trane's temperature/resistance chart.
6. Replace the control board only after the inputs check out and the board still faults.

A credible quote should name the specific fault the LED reported and the measurement that confirmed it. "Replace the board" without testing is a red flag.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Steady slow blink, system works fine | Normal status heartbeat | None | None needed |
| Flashing, outdoor unit off in heat mode | High-pressure trip from poor indoor airflow | Replace filter, open vents, one reset | Check blower, coil, and charge |
| Flashing, outdoor unit off in cooling mode | High-pressure trip from a dirty coil or fan fault | Clear debris around unit, one reset | Clean coil, test fan motor and capacitor |
| Flashing with weak heating or cooling, long run times | Low-pressure trip from low refrigerant | Replace filter, then call | Leak search, repair, recharge |
| Unit locked out after several attempts | Repeated pressure-trip lockout | One power-cycle reset only | Find and fix the root cause of the trips |
| Flash code plus icing or defrost problems | Defrost or ambient sensor fault | Clear snow and ice buildup around the base | Test or replace the sensor |
| Code on a communicating thermostat | Communication or wiring fault | Record the code, check breakers | Test the comm wiring and 24V supply |
| Faults persist with good readings | Failed control board | None | Replace the board |

## Repair costs

| Repair | Typical US cost |
|---|---|
| Diagnostic visit | $80 – $200 |
| Outdoor coil cleaning | $100 – $250 |
| Pressure switch replacement | $150 – $400 |
| Defrost or ambient sensor | $120 – $300 |
| Outdoor fan capacitor | $120 – $300 |
| Outdoor fan motor | $350 – $800 |
| Leak repair and refrigerant recharge | $300 – $1,500+ |
| Defrost control board (conventional) | $300 – $650 |
| Communicating control board (Link/ComfortLink) | $500 – $1,200+ |

Costs vary by region, refrigerant type (R-410A vs. R-454B), and warranty status. Many Trane parts carry a 10-year limited warranty if the unit was registered.

## Related codes

- Trane Heat Pump Won't Turn On: Causes, Fixes & Costs
- Trane Heat Pump Compressor Not Running: Causes & Fixes
- Trane Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Trane Heat Pump Stuck in Defrost Mode: Causes & Fixes
- Trane Heat Pump Frozen, Not Defrosting: Causes & Fixes
- Trane Heat Pump Not Heating: Causes, Fixes & Costs
- Trane Heat Pump Not Cooling: Causes, Fixes & Costs
- Trane Heat Pump Short Cycling: Causes, Fixes & Costs
- Trane Furnace 2 Flashes: System Lockout Causes & Fixes
