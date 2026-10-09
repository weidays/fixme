---
title: "Lennox Heat Pump Stuck in Defrost Mode: Causes & Fixes"
code: "Stuck in defrost mode"
description: "Lennox heat pump stuck in defrost? Learn the causes (defrost board, sensor, reversing valve, relay), safe checks, and repair costs from $0 to $1,500+."
brand: lennox
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $1,500+ if the reversing valve must be replaced"
appliesTo: "Lennox split-system heat pumps (Merit ML14XP1/ML17XP1, Elite EL16XP1/EL18XPV, Signature SL18XP1/SL25XPV and older XP-series). Older and mid-range units use a separate defrost control board with a selectable interval of 30/60/90 minutes. iComfort/inverter models manage defrost through the outdoor control and report alert codes to the iComfort/S30/E30 thermostat. Defrost-pin settings, sensor type and alert numbering vary by model and board revision. Check the wiring diagram on the inside of the access panel."
tags:
  - lennox
  - heat-pump
  - defrost
  - defrost-board
  - reversing-valve
  - winter-heating
parts:
  - name: "Furnace/air handler air filter (correct size)"
    search: "Lennox air filter 16x25x1 MERV 8"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries 8 pack"
datePublished: 2026-10-08
dateModified: 2026-10-08
reviewedBy: ""
faq:
  - q: "How long should a Lennox heat pump defrost cycle last?"
    a: "On most Lennox heat pumps a normal defrost ends when the coil sensor reaches its termination temperature, usually within a few minutes. The board also forces an end at a maximum time, typically around 14 minutes on standard defrost controls. A cycle that regularly runs longer, or repeats back-to-back, points to a fault."
  - q: "Is it normal for steam and a whooshing sound during defrost?"
    a: "Yes. When defrost starts and ends, the reversing valve shifts with a loud whoosh. The outdoor fan stops, and steam can rise off the coil. That is normal. It becomes a problem only when the fan stays off and the unit never returns to heating."
  - q: "Can I force my Lennox heat pump out of defrost myself?"
    a: "You can switch the thermostat to off, wait five minutes, and set it back to heat once. Forcing defrost with board test pins or jumpers is a technician procedure inside a high-voltage cabinet. Homeowners should not attempt it."
  - q: "Why does my house get cold air during defrost?"
    a: "During defrost the heat pump runs in cooling mode to warm the outdoor coil. The system normally turns on backup electric heat strips or the furnace to temper the air. If the unit is stuck in defrost, or the backup heat isn't working, you'll feel prolonged cool air indoors."
---

## What this code means

"Stuck in defrost mode" is a symptom, not a numbered code. It means the outdoor unit entered defrost and either never returned to normal heating or keeps re-entering defrost over and over.

**Normal Lennox defrost works like this:**
- The defrost control watches a coil (defrost) sensor and runs a timer.
- On standard boards the timer interval is set by a pin: 30, 60 or 90 minutes of compressor run time.
- When the coil is cold enough, the board energizes the reversing valve into cooling and stops the outdoor fan. It usually also brings on backup heat indoors.
- Defrost ends when the coil sensor reports the termination temperature or a maximum time passes.

**Signs your unit is stuck:**
- The outdoor fan stays off for long periods while the compressor runs.
- The coil is steaming or hot.
- The house gets cool air or runs on backup heat continuously.
- Electric bills spike.

**Fault codes:** Many Lennox defrost boards flash LED patterns, and iComfort-enabled units post alerts to the thermostat. The exact codes vary by board, so check the chart on your unit's panel. Board faults generally do not latch. The unit resumes normally once the condition clears, but a failed component will cause the problem to recur.

If the issue is ice that won't clear, see the separate "frozen and not defrosting" page instead.

## Common causes, ranked by probability

1. **Failed or out-of-position defrost (coil) sensor.** A sensor that reads cold, or has come loose from its tube, never tells the board to end defrost. This is the most common documented cause on Lennox boards.
2. **Defrost control board fault.** A stuck defrost relay or a failed board keeps the reversing valve energized and the outdoor fan off.
3. **Reversing valve stuck or slow to shift.** The valve may stay in cooling position mechanically, or its solenoid coil may fail. The board then appears to be in defrost permanently.
4. **Outdoor fan motor or fan capacitor failure.** If the fan doesn't restart after defrost, the coil re-ices quickly and the board re-enters defrost repeatedly. This looks like a stuck cycle.
5. **Low refrigerant charge.** Low charge keeps the coil cold enough that defrost triggers too often or can't terminate on temperature.
6. **Incorrect defrost interval setting or wiring error.** This is common after a board replacement or a recent install.
7. **Thermostat or backup heat configuration (secondary).** This doesn't cause the stuck cycle itself. It does make defrost feel worse by blowing cold air during defrost.

## Safe checks before you call anyone

- **Thermostat:** Confirm it's set to heat, not emergency heat, with a reasonable setpoint. Replace batteries if the display is weak.
- **One reset:** Set the thermostat to off for 5 minutes, then back to heat. Do this only once. If the problem returns, stop and call a technician.
- **Breakers:** Check that the outdoor unit breaker and the air handler/furnace breaker are on. Reset a tripped breaker once. If it trips again, leave it off.
- **Air filter:** Replace it if dirty. Low indoor airflow raises system stress in heating.
- **Outdoor unit surroundings:** Clear snow, leaves and debris from around the cabinet. Keep about 2 feet of clearance, and make sure roof runoff isn't dripping onto the unit. Do not chip ice off the coil.
- **Panels:** Make sure the exterior access panels are seated and fastened.
- **Watch and note:** Record how long the fan stays off and whether steam appears. Note any LED flashes visible without opening the unit and any thermostat alert codes. This information speeds the technician's diagnosis.

## How a technician will diagnose it

**Electrical checks**
- Reads the defrost board LED or alert codes, and iComfort diagnostics if equipped.
- Verifies the defrost interval pin setting.
- Checks the defrost sensor's position and clamp on the coil.
- Measures sensor resistance against the temperature chart for that board.
- Uses the board's test pins to force a defrost cycle and confirm it terminates correctly.
- Checks the defrost relay output and confirms the reversing valve solenoid gets 24 VAC only when it should.
- Tests the outdoor fan motor amperage and the run capacitor.

**Refrigerant-side checks**
- Uses gauges or temperature probes across the reversing valve to confirm it is shifting fully.
- Checks superheat/subcooling and refrigerant charge. If charge is low, the tech should leak-search before adding refrigerant.

**Indoor checks**
- Confirms backup heat stages energize during defrost.

A good quote names the specific failed component and the test that proved it.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor fan off for 20+ minutes, coil steaming | Defrost sensor loose or failed | One thermostat off/on reset | Re-clamp or replace sensor, verify resistance |
| Fan never restarts, compressor runs nonstop | Stuck relay on defrost board | Check breaker, note LED codes | Test board outputs, replace defrost board |
| Unit stays in cooling mode, cold air indoors | Reversing valve or solenoid stuck | Set thermostat to emergency heat, then call | Test solenoid coil, replace coil or valve |
| Defrosts every few minutes, re-ices fast | Outdoor fan motor/capacitor failure | Clear debris around unit | Test and replace capacitor or fan motor |
| Frequent long defrosts, weak heat | Low refrigerant charge | Replace filter, call for service | Leak search, repair, recharge |
| Started right after new install or board swap | Wrong interval pin or wiring | None beyond one reset | Correct pin setting and wiring |
| Cold blasts during every defrost | Backup heat not staging | Verify thermostat heat settings | Check W/E wiring, heat strips, furnace call |

## Repair costs

These are typical US installed ranges. Costs vary by region, refrigerant type and whether the work happens after hours.

| Repair | Typical cost |
|---|---|
| Service call / diagnostic | $90 – $200 |
| Defrost sensor re-clamp or replacement | $150 – $350 |
| Defrost control board | $300 – $700 (iComfort/inverter controls can exceed $900) |
| Outdoor fan capacitor | $120 – $300 |
| Outdoor fan motor | $350 – $800 |
| Reversing valve solenoid coil | $150 – $400 |
| Reversing valve replacement (brazing, evacuation, recharge) | $900 – $1,500+ |
| Refrigerant leak search and recharge | $300 – $1,500+, depending on leak and refrigerant |

If your unit is under warranty, labor may not be covered, but parts often are. Ask the technician to register the claim.

## Related codes

- Lennox Heat Pump Frozen and Not Defrosting: Fixes & Cost
- Lennox Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Lennox Heat Pump Not Heating: Causes, Fixes & Costs
- Lennox Heat Pump Not Cooling: Causes, Fixes & Costs
- Lennox Furnace Code E180: Outdoor Sensor Fix & Cost
