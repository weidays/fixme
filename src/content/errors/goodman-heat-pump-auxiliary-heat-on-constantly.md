---
title: "Goodman Heat Pump Aux Heat On Constantly: Causes & Fixes"
code: "Auxiliary heat on constantly"
description: "Why a Goodman heat pump runs auxiliary heat nonstop: thermostat setup, low charge, stuck heat strip relay, defrost faults. Fixes and repair costs."
brand: goodman
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $1,500+ if a refrigerant leak must be found and repaired"
appliesTo: "Goodman heat pumps (GSZ, GSZC, DSZC, SSZ series) with air handlers such as AVPTC, ARUF, AMVT, MBVC or MBR, which use HKSX/HKR-style electric heat kits. Communicating ComfortBridge and ComfortNet systems report faults on the thermostat or the board display. 24V systems rely on the thermostat's W2/E logic. Settings such as balance points and aux lockout depend on the thermostat model."
tags: ["heat-pump", "auxiliary-heat", "heat-strips", "high-electric-bill", "goodman"]
parts:
  - name: "Furnace/air handler air filter"
    search: "air handler air filter 16x25x1 MERV 8"
  - name: "Thermostat batteries"
    search: "AA lithium batteries thermostat"
  - name: "Heat pump compatible programmable thermostat"
    search: "heat pump thermostat with auxiliary heat lockout"
datePublished: 2026-10-09
dateModified: 2026-10-09
reviewedBy: ""
faq:
  - q: "Is it normal for aux heat to come on with my Goodman heat pump?"
    a: "Yes, sometimes. Aux heat normally runs during defrost cycles and in very cold weather when the heat pump can't keep up. It also runs when you raise the setpoint by more than about 2–3°F. It is not normal for it to run all the time in mild weather."
  - q: "Will running on aux heat all the time damage my system?"
    a: "Usually it won't cause damage right away. It can raise your electric bill a lot, often doubling or tripling heating costs. Constant aux can also mean the heat pump itself has failed, so a problem like a refrigerant leak gets worse if you ignore it."
  - q: "Does this problem reset on its own?"
    a: "It's not a latched fault code, so there's nothing to reset. If the cause is a thermostat setting, aux stops once you correct the setting. If the cause is a stuck sequencer or relay, or a failed heat pump, aux keeps running until the part is repaired."
  - q: "What is the difference between aux heat and emergency heat?"
    a: "Aux heat is the electric heat strips running alongside the heat pump, and the thermostat turns it on automatically. Emergency heat runs the strips alone with the heat pump locked out, and you select it by hand. If your thermostat is set to EM heat, aux will run constantly."
---

## What this code means

"Auxiliary heat on constantly" is not a flash code on Goodman equipment. It means the electric heat kit in your air handler is energized all or most of the time. Your thermostat may show "AUX" continuously. You might notice a very high electric bill or a faint hot-metal smell at the vents.

On a Goodman system, aux heat turns on in one of two ways:

- **Thermostat call:** On non-communicating systems, the thermostat sends a W2/E signal. On ComfortBridge/ComfortNet systems, the call comes through the communicating control.
- **Defrost board:** The outdoor unit's defrost control energizes W2 during defrost to temper the cold air.

Constant aux therefore has two broad explanations:

- The thermostat or defrost board keeps calling for it, often because the heat pump isn't producing enough heat.
- The heat strips are stuck on even without a call, which points to a welded sequencer or relay in the air handler.

There's no lockout to clear and nothing auto-resets. The condition stops when the cause is fixed.

## Common causes, ranked by probability

1. **Thermostat set to Emergency Heat, or configured incorrectly.** Common setup problems include:
   - EM heat left on
   - The wrong system type selected (conventional/gas instead of heat pump)
   - O/B reversing valve polarity set wrong, which can leave the unit cooling while the strips heat
   - An aux droop or temperature differential set too tight
   - No outdoor aux lockout configured
2. **Large setpoint changes or a recovery/smart-recovery setting.** Deep setbacks followed by a big temperature bump force aux on, and so do "adaptive recovery" features on many thermostats.
3. **Heat pump not producing heat.** This can be a failed compressor or capacitor, a contactor problem, or a low refrigerant charge. It can also be a reversing valve stuck in cooling. The thermostat sees the temperature falling and keeps aux running. See "Not heating" for the full diagnosis.
4. **Outdoor coil iced or stuck in defrost.** If the defrost board stays in defrost, or the coil stays iced, W2 stays energized through the defrost board. A failed defrost thermostat/sensor or defrost control is the usual cause.
5. **Stuck heat strip sequencer or relay in the air handler.** The strips stay energized with no call, sometimes even when the thermostat is off. This is common on older Goodman air handlers with HKR/HKSX kits.
6. **Wiring fault.** A shorted or miswired W2/E conductor, or a jumper between Y and W at the air handler or outdoor unit, can cause it. This is most often found after a recent install or thermostat swap.
7. **Very cold weather below the balance point.** Many Goodman heat pumps need aux below roughly 25–35°F, depending on house load and model. Constant aux is expected then and may not be a fault.

## Safe checks before you call anyone

- **Check the thermostat mode.** Make sure it's set to HEAT, not EM HEAT or EMERGENCY.
- **Avoid big setpoint jumps.** Raise the temperature 1–2°F at a time. Disable "smart recovery" if your thermostat has it.
- **Check the thermostat's system type.** If you can reach the installer settings using the manual, confirm the thermostat is set to heat pump. Note the O/B setting. Goodman uses O (energized in cooling).
  - Don't change wiring.
  - If you aren't sure, leave the settings alone and photograph them for the tech.
- **Replace thermostat batteries** if it uses them.
- **Replace the air filter.** A clogged filter reduces heat pump output and can trip the strips' limits.
- **Open supply registers and clear return grilles.**
- **Look at the outdoor unit from outside.**
  - Is the fan running and the unit humming?
  - Is the coil encased in ice beyond a normal frost that clears within a defrost cycle?
  - Clear snow, leaves or debris from around it.
  - Don't open panels or chip ice.
- **Do a single power reset if behavior seems stuck.** Turn the thermostat off, switch off the air handler and outdoor breakers for 5 minutes, then restore power. If the strips heat with the thermostat OFF, leave the air handler breaker off and call a tech. A stuck sequencer can overheat the strips.
- **Check the condensate drain.** Make sure the line at the air handler is flowing and the float switch isn't tripped.

## How a technician will diagnose it

- **Read stored faults.** On communicating systems, the tech reads faults at the thermostat or the board's 7-segment display.
- **Check 24V signals.** They'll measure W2/E at the air handler with the thermostat calling and not calling. If W2 is hot with no call, they trace whether it's coming from the thermostat or the defrost board.
- **Amp-draw the heat kit.** Current on the strips with no W2 signal confirms a welded sequencer or relay.
- **Check heat pump performance.** Expect checks of:
  - Compressor and fan amps
  - The run capacitor
  - The contactor
  - Suction and liquid pressures, plus superheat or subcooling against the Goodman charging chart
  - Supply/return temperature split with the strips off, typically about 15–25°F in heat mode at moderate outdoor temperatures
- **Check the reversing valve.** They verify the valve shifts using the O-terminal signal and line temperatures.
- **Test the defrost system.** This means checking the defrost sensor resistance and forcing a defrost cycle through the board's test pins to confirm it starts and ends correctly.
- **Inspect wiring.** They'll look for W2/E shorts, an incorrect Y-to-W jumper, and wrong heat kit configuration.

**Red flags in a quote:**
- Recommending a new heat pump before measuring charge and compressor performance
- Adding refrigerant with no leak check

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| "EM" or "Emergency" on display | Thermostat in EM heat | Switch to HEAT | None |
| Aux after every temperature change | Setback recovery or tight droop setting | Use small setpoint changes; disable smart recovery | Reconfigure staging and outdoor aux lockout |
| Cool air from vents with aux on; outdoor unit running | Wrong O/B setting or stuck reversing valve | Note the thermostat settings | Correct O/B; test or replace the reversing valve |
| Outdoor unit silent, aux running | Failed capacitor, contactor or compressor | Check outdoor breaker/disconnect once | Electrical diagnosis and part replacement |
| Outdoor unit runs, weak heat | Low refrigerant charge | Change filter | Leak search, repair, recharge |
| Heavy ice, aux nonstop | Defrost sensor or board failure | Clear debris; don't chip ice | Test sensor/board; force defrost |
| Strips hot with thermostat OFF | Welded sequencer or relay | Turn off air handler breaker | Replace sequencer or relay; inspect strips |
| Constant aux in very cold weather only | Below balance point | None; monitor | Optionally verify sizing and charge |

## Repair costs

Typical US ranges, parts and labor:

| Repair | Typical cost |
|---|---|
| Thermostat settings, filter, batteries | $0–$40 DIY |
| Thermostat reconfiguration / service call | $100–$250 |
| New heat pump thermostat installed | $150–$450 |
| Heat kit sequencer or relay | $150–$400 |
| Defrost sensor | $150–$350 |
| Defrost control board | $250–$600 |
| Run capacitor | $120–$400 |
| Contactor | $150–$400 |
| Wiring repair | $100–$300 |
| Reversing valve solenoid coil | $150–$400 |
| Reversing valve replacement | $1,000–$2,000 |
| Leak search and repair plus R-410A or R-32 recharge | $400–$1,500+ |
| Compressor replacement | $1,800–$3,500 |

Goodman's 10-year parts warranty often covers parts on registered units, but labor isn't covered.

## Related codes

- Goodman Heat Pump Not Heating: Causes, Fixes & Costs
- Goodman Heat Pump Frozen and Not Defrosting: Fixes
- Goodman Heat Pump Stuck in Defrost Mode: Causes & Fixes
- Goodman Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Goodman Furnace Runs Constantly But Not Enough Heat
