---
title: "Bryant Heat Pump Stuck in Defrost Mode: Causes & Fixes"
code: "Stuck in defrost mode"
description: "Bryant heat pump stuck in defrost? Learn the causes (defrost board, sensor, reversing valve), safe checks, and repair costs from $0 to $1,800."
brand: bryant
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $1,800+ if the reversing valve must be replaced"
appliesTo: "Bryant split-system heat pumps (Legacy, Preferred, Evolution lines) with a defrost control board and coil temperature sensor. Defrost timing (30/60/90/120 min jumpers on conventional boards) and diagnostic LED codes vary by model and board revision; communicating Evolution units report faults at the thermostat instead."
tags: ["heat-pump", "defrost", "defrost-board", "reversing-valve", "outdoor-unit", "winter"]
parts:
  - name: "Furnace/air handler air filter"
    search: "16x25x1 MERV 8 air filter"
  - name: "Thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-11-16
dateModified: 2026-11-16
reviewedBy: ""
faq:
  - q: "How long should a Bryant heat pump defrost cycle last?"
    a: "A normal defrost usually lasts about 2 to 10 minutes. Most Bryant defrost boards end the cycle once the coil sensor reads warm, and they force it to end after about 10 minutes even if the coil hasn't warmed up. A cycle that runs much longer than that, or that keeps repeating, points to a fault."
  - q: "Is it normal to see steam and hear a whoosh from the outdoor unit?"
    a: "Yes. When defrost starts and ends, the reversing valve shifts and makes a loud whoosh, and melting frost can give off clouds of steam. The outdoor fan also stops during defrost. None of this is a fault unless the unit stays in that state."
  - q: "Why does my house feel cold while the heat pump is defrosting?"
    a: "During defrost the system briefly runs in cooling mode to warm the outdoor coil. Backup electric heat strips or the furnace normally switch on to temper the air. If you feel cold air during every defrost, the auxiliary heat may not be working. If you feel it constantly, the unit may be stuck in defrost."
  - q: "Can I reset a heat pump that is stuck in defrost?"
    a: "You can turn the thermostat to OFF and switch the outdoor disconnect or breaker off for about 5 minutes, then back on, one time. If the unit goes back into a long or constant defrost, leave it off or on emergency heat and call a technician."
---

## What this code means

"Stuck in defrost" is not a flashing code. It is a symptom: the outdoor unit stays in, or keeps returning to, its defrost cycle. You will usually notice these signs together:

- The outdoor fan stays stopped while the compressor runs.
- Cool or lukewarm air comes from the vents for a long time, with backup heat running nonstop.
- The outdoor coil is clear of ice, or even warm, but the unit still won't go back to heating.

On Bryant's conventional defrost boards, defrost is started by run time plus a cold reading from the coil sensor. It ends when the sensor reads warm, at roughly 65–80°F depending on the board, or when a forced cutoff of about 10 minutes is reached. A unit that runs past that limit, or never shifts back to heat, almost always has a problem with the defrost control, the coil sensor, or the reversing valve circuit.

This page covers a unit that **won't leave** defrost. If the unit is iced up and **won't start** defrost, see "Frozen and not defrosting" instead.

**Reset behavior:** Conventional boards have no latching lockout for this condition. Cycling power restarts the board's timer. On some boards, shorting the TEST pins forces a defrost, but that is a technician step. Communicating Evolution systems may log a fault and keep it in the thermostat's service history until it is cleared.

## Common causes, ranked by probability

1. **Failed or out-of-calibration defrost sensor (coil thermostat).** Bryant's troubleshooting checks the sensor first. If the sensor stays "closed" or reads cold, the board never sees the termination temperature. It may then repeat defrost over and over.
2. **Defrost control board fault.** A stuck relay can hold the reversing valve energized or keep the outdoor fan off. Board logic failures, often after power surges, have the same effect.
3. **Reversing valve problem.** The valve may be sticking in the cooling position, or its solenoid coil may have failed or be miswired. The board ends defrost, but the valve doesn't shift back, so the unit keeps blowing cool air.
4. **Thermostat or control wiring problem (O/B terminal).** A shorted or crossed O/B wire can hold the valve in cooling. On Evolution systems, a communication fault can cause the same symptom.
5. **Low refrigerant charge.** A low charge makes the coil run cold enough to trigger defrost very often, and makes it slow to terminate. A leak has to be found and repaired.
6. **Outdoor fan relay or motor issue right after defrost.** If the fan doesn't restart, the coil refreezes almost at once and the unit goes straight back into defrost. See "Outdoor fan not spinning".

## Safe checks before you call anyone

- **Thermostat:** Make sure it is set to HEAT, not COOL or AUTO with a low setpoint. Replace the batteries if the display is dim or blank.
- **Air filter:** Replace it if it's dirty. Poor indoor airflow raises system pressures and can disturb defrost operation.
- **Supply vents and return grilles:** Open them and make sure nothing is blocking them.
- **Outdoor unit, looking only:** Clear snow, leaves, or drifts away from around the cabinet. Don't chip at the ice, and don't spray the coil with hot water. Confirm all exterior access panels are seated.
- **One power reset:** Set the thermostat to OFF. Switch off the outdoor disconnect and the heat pump breaker for 5 minutes, then restore power and set it back to HEAT. Watch the unit for 30 minutes.
- **If it returns to constant defrost:** Switch the thermostat to EM HEAT, if available, to keep the house warm. Then call for service. Don't keep cycling power.

## How a technician will diagnose it

- **Reads the board:** Checks the defrost board's LED status codes, or the Evolution thermostat's fault history.
- **Tests the defrost sensor:** Checks continuity or resistance against the chart for that model.
- **Forces a defrost cycle:** Jumpers the TEST pins and confirms the board terminates when the sensor is jumpered or warm.
- **Checks the reversing valve:** Measures the 24V signal to the solenoid coil during heat and during defrost. Checks the coil's resistance. Measures line temperatures across the valve ports to spot a valve that is stuck or leaking past internally.
- **Checks the outdoor fan:** Confirms the fan relay and motor restart after defrost.
- **Checks refrigerant charge:** Connects gauges and measures superheat and subcooling. Leak-searches if the charge is low.
- **Checks the wiring:** Inspects the O/B and low-voltage wiring for shorts.

A good quote names the failed part and the test that proved it. "Just add refrigerant" without a leak check is a red flag.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan stays off, compressor runs, coil already clear | Defrost sensor stuck closed or board relay stuck | One power reset, then EM HEAT | Test and replace the sensor or defrost board |
| Defrost ends (fan restarts) but vents still blow cool | Reversing valve stuck, or a solenoid or O/B fault | Confirm the thermostat is set to HEAT | Test the solenoid coil and wiring; replace the coil or valve |
| Defrost repeats every few minutes | Bad sensor, low charge, or fan not restarting | Clear debris and snow around the unit | Check the sensor, charge, fan relay, and motor |
| Problem started after a storm or power surge | Damaged defrost board | One power reset | Replace the board and set the defrost timing jumper |
| Backup heat runs constantly, high electric bill | Unit stuck in defrost or cooling mode | Replace the filter, use EM HEAT | Full defrost-circuit diagnosis |

## Repair costs

| Repair | Typical US cost (parts + labor) |
|---|---|
| Service call / diagnosis | $90 – $200 |
| Defrost sensor (coil thermostat) | $150 – $350 |
| Defrost control board | $300 – $700 |
| Reversing valve solenoid coil | $150 – $350 |
| Reversing valve replacement (includes refrigerant recovery and recharge) | $900 – $1,800+ |
| Leak repair plus recharge | $300 – $1,500+ (depends on refrigerant type and leak location) |
| Outdoor fan motor | $350 – $700 |
| Thermostat wiring repair | $100 – $250 |

## Related codes

- Frozen and not defrosting: Bryant Heat Pump Frozen, Not Defrosting: Causes & Fixes
- Ice on outdoor unit: Bryant Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Not heating: Bryant Heat Pump Not Heating: Causes, Checks & Fixes
- Outdoor fan not spinning: Bryant AC Outdoor Fan Not Spinning: Causes & Fixes
