---
title: "Trane Heat Pump Frozen, Not Defrosting: Causes & Fixes"
code: "Frozen and not defrosting"
description: "Trane heat pump iced over and not defrosting? Learn the causes (sensor, defrost board, reversing valve, low charge), safe checks, and repair costs."
brand: trane
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $2,500+ if the reversing valve must be replaced"
appliesTo: "Trane XR, XL, XV and similar heat pumps with demand-defrost control boards, plus ComfortLink II / Link communicating models. Defrost logic, sensor type, timing and fault reporting vary by model and board generation, so check the outdoor unit's service literature."
tags:
  - heat-pump
  - defrost
  - frozen-coil
  - outdoor-unit
  - winter
parts:
  - name: "Furnace/air handler air filter (match your size)"
    search: "HVAC air filter MERV 8 16x25x1"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries 8 pack"
datePublished: 2026-10-05
dateModified: 2026-10-05
reviewedBy: ""
faq:
  - q: "Is it normal for my Trane heat pump to have frost on it in winter?"
    a: "Yes. A light, even frost on the outdoor coil is normal in cold, damp weather. The unit should defrost it periodically, usually within 30–90 minutes of run time depending on the board and conditions. A thick block of ice that stays and keeps growing is not normal."
  - q: "What does a normal defrost cycle look like?"
    a: "The outdoor fan stops, you may hear a whoosh as the reversing valve shifts, and steam rises off the coil. This lasts a few minutes, up to about 10 to 15 depending on the board. Then the unit switches back to heating. Steam during defrost is normal, not smoke."
  - q: "Can I pour hot water on the coil or chip the ice off?"
    a: "Do not chip or scrape the ice. You can bend or puncture the coil fins and tubing and cause a refrigerant leak. Switching to emergency heat and letting the ice melt is safer. The underlying fault still needs a technician."
  - q: "Can I keep running the heat pump while it's iced up?"
    a: "It's best not to. Running a heat pump with a solidly iced coil strains the compressor and can damage it. Switch the thermostat to Emergency or Auxiliary heat if you have it, and call for service."
  - q: "Will the unit reset itself?"
    a: "Defrost is automatic. If the unit fails to defrost, there is usually no lockout that a reset clears. Some communicating Trane boards log a defrost or sensor fault, and that logged fault needs a technician to read it."
---

## What this code means

This is not a numbered flash code. It's a symptom: the outdoor coil of your Trane heat pump is coated in solid ice and the unit is not running its defrost cycle to clear it.

In heating mode, the outdoor coil runs below freezing, so frost on it is expected. Trane heat pumps use a defrost control, usually a demand-defrost board with a coil temperature sensor, to clear that frost. The board briefly reverses the system into cooling mode and stops the outdoor fan so the coil warms and sheds the ice. When that process fails, the ice keeps building. Airflow across the coil drops, heating output falls, and the compressor is put at risk.

A few things vary by model and board generation:

- **Fault reporting.** Some older or simpler boards don't report a failed defrost at all. Some ComfortLink communicating systems may log a sensor or defrost fault at the thermostat or board.
- **Defrost timing.** Defrost interval and duration also differ between boards.

There is no lockout to reset. The ice will stay or grow until the cause is fixed.

## Common causes, ranked by probability

1. **Faulty defrost (coil) sensor or poor sensor contact.** If the sensor misreads coil temperature or has slipped off its clip on the tubing, the board never sees the conditions that call for defrost.
2. **Failed defrost control board.** The board may fail to start defrost, or its defrost relay may not switch the reversing valve and outdoor fan.
3. **Reversing valve or reversing valve solenoid failure.** If the solenoid coil is open or the valve is stuck, the system can't shift into defrost even when the board calls for it.
4. **Low refrigerant charge (leak).** A low charge makes the coil run colder than designed and ice up faster than defrost can clear it. Low charge always means a leak that needs repair.
5. **Outdoor fan relay or contactor fault.** If the fan keeps running during defrost, it blows cold air across the coil and the coil can't warm up enough to melt the ice.
6. **Ambient sensor or board configuration problem.** On some demand-defrost boards, an outdoor air sensor fault or wrong setup can stop defrost from starting. This applies to certain models only.
7. **External conditions that overwhelm defrost.** These include water dripping onto the unit from a gutter or roof, snow drifts around the base, or a coil already packed with debris. They aren't control failures, but they cause heavy icing that looks like one.

## Safe checks before you call anyone

- **Switch to Emergency or Auxiliary heat** at the thermostat if it's available. This keeps the house warm without straining the compressor while the ice melts.
- **Check thermostat settings and batteries.** Confirm Heat mode and a reasonable setpoint, and replace weak batteries.
- **Replace a dirty indoor air filter.** Poor indoor airflow mainly causes indoor-coil problems in cooling, but a clogged filter worsens overall performance and is cheap to rule out.
- **Open supply and return vents** inside the house and make sure furniture isn't blocking them.
- **Look at the outdoor unit from outside without touching the coil.**
  - Clear snow from around the base and top.
  - Make sure gutter or roof runoff isn't dripping onto it.
  - Confirm the unit sits up off the ground so meltwater can drain away.
- **Check the breakers.** Confirm both the indoor and outdoor breakers or disconnect are on. A tripped breaker is worth one reset. If it trips again, stop and call a technician.
- **Watch for a defrost cycle for about 90 minutes of run time.** If you see the fan stop and steam rise, defrost is working and the problem may be conditions or charge.

Don't chip ice, pour water on the coil, or open the outdoor unit's panels.

## How a technician will diagnose it

A competent technician will typically do the following:

- **Thaw the coil** using the unit's own defrost, a forced defrost via the board's test pins, or by running in cooling mode briefly, so the system can be tested properly.
- **Force a defrost from the board** using its test function. This shows whether the board, reversing valve and fan respond. If the forced defrost works normally, the sensor or its mounting is suspect.
- **Check the defrost sensor's resistance** against Trane's temperature/resistance chart, and confirm it's clamped tightly to the correct tube.
- **Check voltage at the reversing valve solenoid** during a defrost call, and measure the coil's resistance.
- **Confirm the outdoor fan stops** during defrost, and check the fan relay and contactor operation.
- **Measure refrigerant pressures, superheat and subcooling** to check charge. If the charge is low, they should leak-search and quote a leak repair, not just "top off."
- **Read stored fault codes** on communicating models or boards with diagnostic LEDs.

Be wary of a quote that jumps straight to a reversing valve or compressor without forced-defrost and electrical tests first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Thick ice, never see fan stop or steam | Defrost sensor or board not starting defrost | Switch to emergency heat; call for service | Test sensor and board, force defrost, replace failed part |
| Fan stops and you hear a click, but ice doesn't clear | Reversing valve or solenoid not shifting | Emergency heat; call | Check solenoid voltage and coil, replace solenoid or valve |
| Fan keeps running during what sounds like defrost | Fan relay or board output fault | Emergency heat; call | Test relay and board, replace board |
| Defrost happens but ice returns quickly, weak heat | Low refrigerant charge | Emergency heat; call | Leak search, repair, evacuate and recharge |
| Ice heaviest on one side or the top | Gutter or roof drip, snow buildup | Clear snow, fix gutter runoff | Inspect for coil damage if icing persists |
| Ice plus poor airflow indoors | Dirty filter or blocked vents adding to the problem | Replace filter, open vents | Check indoor blower and coil if it continues |

## Repair costs

Typical US ranges, including labor:

| Repair | Typical cost | Notes |
|---|---|---|
| Service call / diagnosis | $90 – $250 | Higher after hours or on weekends |
| Defrost sensor replacement | $150 – $350 | |
| Defrost control board | $300 – $750 | Communicating boards run higher |
| Reversing valve solenoid coil | $150 – $400 | |
| Reversing valve replacement | $1,000 – $2,500+ | Brazing, evacuation and recharge |
| Outdoor fan relay or contactor | $150 – $350 | |
| Leak search and repair plus recharge | $300 – $1,500+ | Depends on leak location and refrigerant type (R-22, R-410A or R-454B) |
| Gutter or drainage fix | $0 – $300 | Often DIY or a handyman job |

Parts may be covered if your Trane unit is still under its registered limited warranty. Labor usually isn't covered unless you bought an extended plan.

## Related codes

- Trane Heat Pump Not Heating: Causes, Fixes & Costs
- Trane Heat Pump Not Cooling: Causes, Fixes & Costs
- Trane Furnace Blowing Cold Air: Causes, Fixes & Costs (relevant for dual-fuel systems using a Trane furnace as backup heat)
- Trane Furnace Runs Constantly But Not Enough Heat
