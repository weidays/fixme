---
title: "York Heat Pump Stuck in Defrost Mode: Causes & Fixes"
code: "Stuck in defrost mode"
description: "York heat pump stuck in defrost? Learn the causes (sensor, board, reversing valve, relay), safe checks, technician fixes, and repair costs."
brand: york
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $1,800+ if the reversing valve must be replaced"
appliesTo: "York (Johnson Controls) split heat pumps with demand-defrost or time/temperature defrost control boards, including YZH, YHM, YH2/YHJ and similar series. Defrost logic, maximum defrost time and fault-code flashes vary by board revision, so check the wiring diagram on your outdoor unit's panel."
tags:
  - york
  - heat-pump
  - defrost
  - defrost-board
  - reversing-valve
  - outdoor-unit
parts:
  - name: "Furnace/air handler air filter"
    search: "HVAC air filter MERV 8 (match your filter size)"
  - name: "Thermostat batteries"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-10-08
dateModified: 2026-10-08
reviewedBy: ""
faq:
  - q: "How long should a York heat pump defrost cycle last?"
    a: "A normal defrost usually lasts 2 to 10 minutes. Most York defrost boards end the cycle on coil temperature and also have a maximum time limit, often around 10 to 14 minutes depending on the board. Steam, a whoosh when the cycle starts and stops, and the outdoor fan pausing are all normal."
  - q: "Is it dangerous to keep running a heat pump stuck in defrost?"
    a: "It is not a gas or fire hazard. However, a unit that stays in defrost cools your home, keeps the backup heat strips running, raises your electric bill, and can strain the compressor. Set the thermostat to emergency heat or turn the system off, then call a technician."
  - q: "Can I reset a York heat pump stuck in defrost?"
    a: "You can turn off power at the outdoor disconnect or breaker for about five minutes, then restore it once. If the unit goes straight back into defrost or stays there again, stop resetting it. A sensor, board, relay or reversing valve fault needs professional diagnosis."
  - q: "Why does my heat pump blow cold air during defrost?"
    a: "During defrost the reversing valve switches the system into cooling mode so hot refrigerant can melt ice on the outdoor coil. The indoor unit normally brings on backup heat to temper that air. If you get cold air for a long time, either the unit is stuck in defrost or the backup heat isn't working."
---

## What this code means

"Stuck in defrost mode" is a symptom, not a numbered fault code. Your York heat pump has entered its defrost cycle and is not coming out of it, or it keeps re-entering defrost over and over.

During a normal defrost, the control board:
- energizes the reversing valve so the system runs in cooling mode,
- stops the outdoor fan,
- usually turns on the indoor backup (auxiliary) heat.

Hot refrigerant then melts frost off the outdoor coil. The board ends defrost when the coil sensor reports the coil is warm enough, often around 50–70°F depending on the board. If that doesn't happen, it ends on a maximum time limit.

When the system appears "stuck," you'll typically notice some of these signs:
- The outdoor fan stays off while the compressor runs.
- The outdoor coil is clean, steaming or even warm.
- The indoor air feels cool or only lukewarm.
- Heat strips run constantly.

**Reset behavior varies by board.** Many York demand-defrost boards terminate defrost on time and return to heating by themselves. Some board revisions will flash a sensor-fault code on the board LED and then fall back to timed defrost. A relay welded shut or a mechanically stuck reversing valve will not clear on its own, even after power is cycled.

This page covers a unit that stays in or keeps cycling into defrost. If your outdoor unit is iced up and **never** enters defrost, see "York Heat Pump Frozen, Not Defrosting."

## Common causes, ranked by probability

1. **Faulty or poorly attached defrost (coil) sensor.** Many demand-defrost boards also use an outdoor air sensor. If the coil sensor reads cold when the coil is actually warm, the board never sees the condition that ends defrost. It then holds defrost until the maximum timer runs out, then starts it again soon after. A loose sensor clip or damaged lead causes the same thing. This is the most common cause on York demand-defrost boards.
2. **Defrost control board failure.** A stuck relay contact on the board can keep the reversing valve energized or the outdoor fan off. A failed timing/logic circuit can do the same.
3. **Reversing valve stuck in the cooling position.** The valve may stay shifted even after the board removes power from the solenoid, often because of sludge or a sticking slide. The coil solenoid itself can also fail energized. The symptom looks like "permanent defrost": cool air indoors and a warm outdoor coil.
4. **Wiring fault or thermostat/control-wire issue.** A shorted or miswired O/B reversing-valve wire is one example. A thermostat configured for the wrong changeover type (O vs. B) can also make the system run in cooling during a heat call, which looks just like defrost.
5. **Low refrigerant charge or airflow problems that cause rapid re-frosting.** The unit exits defrost normally but frosts again so quickly that it seems to be in defrost constantly. A dirty filter or restricted indoor airflow can contribute. Low charge requires a technician.

## Safe checks before you call anyone

- **Check the thermostat.** Confirm it is set to **Heat**, not Cool or Auto. If it's battery-powered, replace the batteries. Don't change installer settings like O/B configuration yourself. Just note what's displayed for the technician.
- **Watch one full cycle.** Normal defrost ends within about 10–15 minutes. Note how long the outdoor fan stays off and whether steam appears. Write down the times; this helps the technician.
- **Replace or check the air filter.** A clogged filter reduces airflow and can cause frequent frosting.
- **Make sure registers and returns are open** and not blocked by furniture or rugs.
- **Clear around the outdoor unit.** Gently remove snow, leaves or debris from around the base, and keep 2 feet clear. Don't chip ice off the coil or open the unit.
- **Do one power reset.** Switch off the outdoor disconnect or breaker for 5 minutes, then restore it. Do this **once**. If the unit goes right back into or stays in defrost, leave it off and don't keep resetting it.
- **Use emergency heat while you wait.** Set the thermostat to **Em Heat** (if available) to keep the house warm and avoid wearing out the compressor.
- **Confirm the access panels are seated.** Make sure the outdoor unit's exterior panels are in place and secure.

## How a technician will diagnose it

A competent tech will typically work through these steps:
1. **Read the defrost board's LED flash code**, if your board has one, to check for sensor or board faults.
2. **Check the coil and ambient sensors** by measuring resistance against York's temperature/resistance chart. They'll also confirm the coil sensor is clipped firmly to the correct tube.
3. **Use the board's test pins** to force a defrost cycle and confirm it terminates properly. The procedure varies by board.
4. **Measure voltage to the reversing-valve solenoid** during heating and defrost.
   - If voltage is present when it shouldn't be, the board or wiring is at fault.
   - If no voltage is present but the system still runs in cooling, the valve is mechanically stuck.
5. **Check relay contacts** for the outdoor fan and reversing valve.
6. **Read refrigerant pressures and temperatures** to evaluate valve shifting (temperature split across the valve) and the refrigerant charge.
7. **Verify thermostat wiring and configuration** (O vs. B).

A replacement board should come with a sensor check first. A reversing-valve quote should be backed by voltage and temperature-split measurements, not a guess.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan off for 15+ minutes, coil clean and warm | Bad or loose defrost sensor | One power reset; use Em Heat | Test and replace the sensor, re-clip it to the coil |
| Defrost every few minutes, short heating periods | Sensor misreading or board fault | Note the cycle times | Ohm-test the sensors, check the board, replace the board if needed |
| Cool air indoors constantly, outdoor coil warm | Reversing valve stuck or energized | Set to Em Heat, call a pro | Test solenoid voltage; replace the coil or valve |
| Unit cools when set to Heat | Thermostat O/B setting or wiring | Confirm Heat mode, replace batteries | Correct the configuration or wiring |
| Outdoor fan never restarts | Stuck fan relay on the board | Turn the system off | Replace the defrost board |
| Frosts again quickly after every defrost | Low charge or low airflow | Replace the filter, open the vents | Find leaks, repair, and recharge |

## Repair costs

These are typical US ranges and include parts and labor:

| Repair | Typical cost |
|---|---|
| Diagnostic or service call | $90–$200 |
| Defrost (coil) sensor replacement | $120–$300 |
| Defrost control board replacement | $250–$650 |
| Reversing valve solenoid coil | $150–$350 |
| Wiring or thermostat configuration fix | $90–$250 |
| Thermostat replacement | $150–$450 |
| Refrigerant leak repair and recharge | $300–$1,500 |
| Reversing valve replacement (brazing, evacuation, recharge) | $900–$1,800+ |

Costs depend on the following:
- **Warranty coverage.** Parts are often still covered under York's limited warranty, so check your registration.
- **Refrigerant type.** Systems using R-22 cost much more to recharge.

## Related codes

York Heat Pump Frozen, Not Defrosting — the opposite failure, where the unit never enters defrost.
York Heat Pump Ice on Outdoor Unit — frost and ice buildup on the outdoor coil.
York Heat Pump Not Heating — for no heat that isn't caused by defrost.
York Heat Pump Not Cooling — relevant to reversing-valve faults in summer.
