---
title: "American Standard Heat Pump Frozen, Not Defrosting: Fixes"
code: "Frozen and not defrosting"
description: "American Standard heat pump iced up and not defrosting? Learn the causes (defrost sensor, board, reversing valve, charge), safe checks, and repair costs."
brand: american-standard
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $1,800+ if the reversing valve must be replaced"
appliesTo: "American Standard split-system heat pumps with demand-defrost or time/temperature defrost control boards (Silver, Gold and Platinum series, including communicating AccuLink models). Defrost logic, sensor type and alert display vary by model and board revision; older boards use a fixed or jumper-selected defrost interval, while newer demand-defrost and communicating units use coil and outdoor air temperature sensors and may show alerts on the thermostat."
tags:
  - heat-pump
  - defrost
  - frozen-outdoor-coil
  - defrost-control-board
  - reversing-valve
  - winter-heating
parts:
  - name: "Replacement HVAC air filter (match your filter size)"
    search: "furnace air filter MERV 8"
datePublished: 2026-11-13
dateModified: 2026-11-13
reviewedBy: ""
faq:
  - q: "Is it normal for my American Standard heat pump to frost up in winter?"
    a: "Yes. A thin, even layer of white frost on the outdoor coil is normal in cold, damp weather. The unit should periodically run a defrost cycle that clears it, usually with the outdoor fan stopped, a whooshing sound and visible steam. Thick ice that encases the coil and never clears is not normal."
  - q: "How often should an American Standard heat pump defrost?"
    a: "It depends on the control board. Older time/temperature boards check for defrost at a fixed interval, often 30 to 90 minutes of run time. Demand-defrost and communicating models decide based on coil and outdoor temperature sensors, so defrost frequency changes with the weather. A defrost cycle typically lasts from a few minutes up to about 10 to 15 minutes."
  - q: "Can I pour hot water on the ice or chip it off?"
    a: "Do not chip, scrape or pry ice off the coil, because the fins and refrigerant tubing are easily punctured. Shut the heat pump off and let ice melt naturally, or have a technician run a forced defrost. The real issue is why the unit is not defrosting on its own, and that needs diagnosis."
  - q: "Should I use emergency heat while waiting for a technician?"
    a: "If your system has backup electric or gas heat, setting the thermostat to Emergency Heat (Em Heat) stops the outdoor unit and keeps the house warm. This prevents further icing and possible compressor damage. Expect higher energy bills while running on emergency heat."
---

## What this code means

"Frozen and not defrosting" is a symptom, not a numbered fault code. It means the outdoor coil of your American Standard heat pump has built up solid ice in heating mode and the unit is not clearing it with a normal defrost cycle.

In heating mode the outdoor coil runs colder than the outside air, so moisture freezes on it. The defrost control board handles this. It temporarily switches the reversing valve to cooling mode and stops the outdoor fan, which warms the coil and melts the frost. When the coil sensor reaches its termination temperature, or a maximum time passes, the board returns to heating.

How defrost is triggered depends on the board:

- **Older time/temperature boards** start defrost at a set run-time interval, but only when the coil sensor reads cold.
- **Demand-defrost and communicating (AccuLink) boards** compare coil and outdoor air temperatures and defrost only when needed. Some show an alert or service message on a compatible thermostat. Many do not.

This is not a lockout that holds until power is cycled. The defrost board keeps trying to operate normally, so the ice simply keeps building. The behavior of any fault LEDs or alert codes on the outdoor board varies by model. Check the wiring diagram label inside your unit's access panel, or have your technician read it.

**Severity: professional repair.** If a heat pump keeps running fully iced, it heats poorly and can strain the compressor. Switch to Emergency Heat if you have it, and book a technician.

## Common causes, ranked by probability

1. **Failed or poorly attached defrost (coil temperature) sensor.** If the sensor reads too warm or has come loose from the coil tube, the board never sees a cold enough coil to start defrost. Sensor failure is the most common documented cause on American Standard and Trane boards.
2. **Defrost control board fault.** The board may fail to energize the reversing valve or stop the outdoor fan, or it may misread its sensors. On communicating models, a firmware or configuration issue can also play a role.
3. **Reversing valve or solenoid coil failure.** The board calls for defrost, but the valve sticks or its solenoid coil is open, so the unit never actually switches to defrost mode.
4. **Low refrigerant charge (leak).** An undercharged system runs an abnormally cold coil and ices faster than defrost can clear it. Ice often appears unevenly, typically heaviest at the bottom or in one area.
5. **Outdoor fan problem.** A fan that runs weakly or intermittently (bad motor or capacitor) causes heavy icing. A fan relay stuck on during defrost slows the melt.
6. **Site and water conditions.** Gutter runoff dripping onto the unit, a unit sitting too low in snow, or meltwater refreezing at the base can create ice that normal defrost cannot handle. This cause is distinct from a control failure, and the outside of the unit usually shows clues.
7. **Severely restricted indoor airflow (contributing factor).** A clogged filter or closed registers raise system pressures and reduce efficiency. This is rarely the sole cause of outdoor icing, but it is worth ruling out.

## Safe checks before you call anyone

- **Confirm it's really a problem.** Light, even frost that clears every so often (with steam and a whoosh) is normal. Solid ice covering the coil and top for hours is not.
- **Switch the thermostat to Emergency Heat** (if available) to stop the outdoor unit while you wait for service. Check thermostat batteries and settings as well.
- **Replace a dirty air filter** and make sure supply and return registers are open and unblocked.
- **Check the breakers.** If the outdoor unit or air handler breaker has tripped, reset it once. If it trips again, leave it off and call a pro.
- **Look at the surroundings without touching the coil.** Gently clear loose snow away from the sides and top of the cabinet with a broom or by hand. Make sure nothing drips onto the unit from the roof or gutters. Note whether the unit sits on a raised pad or legs. Never chip, hammer or scrape ice off the coil.
- **Make sure the exterior service panels are seated** and closed. Do not open them.

If the ice returns after the unit has been off and has thawed, the defrost system needs professional diagnosis.

## How a technician will diagnose it

A qualified technician will typically do the following, which you can use to sanity-check a quote:

- **Melt the ice safely** by running the unit in a forced or test defrost (many American Standard boards have test pins or a test mode) or by letting it thaw.
- **Test the defrost sensor's resistance** against the manufacturer's temperature chart, and confirm it is clamped tightly to the correct coil tube.
- **Check board outputs during a forced defrost.** They will verify that the board energizes the reversing valve solenoid, stops the outdoor fan, and brings on auxiliary heat. They will also read any fault LEDs or communicating alerts.
- **Check the reversing valve** by measuring solenoid coil continuity and voltage. They will confirm the valve actually shifts by checking line temperatures and pressures.
- **Measure refrigerant charge** with gauges and superheat/subcooling readings, then leak-check if the charge is low.
- **Inspect the outdoor fan** motor, capacitor and blade.
- **Review the installation:** pad height, drainage under the unit, and gutter runoff.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Thick ice, unit never steams or goes quiet for defrost | Failed or loose defrost sensor | Switch to Emergency Heat, then call for service | Test sensor resistance; replace or re-clamp sensor |
| Ice persists; no defrost even in forced test | Defrost control board fault | Emergency Heat; note any thermostat alerts | Verify board outputs; replace or reconfigure board |
| Fan stops for defrost but coil stays iced | Reversing valve or solenoid failure | Emergency Heat | Test solenoid; replace coil or reversing valve |
| Uneven ice, weak heat, long run times | Low refrigerant charge | Replace filter; Emergency Heat | Leak search, repair, recharge |
| Outdoor fan not spinning or spinning slowly | Fan motor or capacitor | Breaker check (one reset) | Replace capacitor or fan motor |
| Ice heaviest on top or at the base; water dripping on unit | Roof runoff or poor drainage | Clear snow around the unit; fix the gutter drip | Raise the unit on a pad or riser; correct drainage |
| Weak airflow at registers | Dirty filter or blocked vents | Replace filter; open registers | Inspect blower and ductwork if the problem persists |

## Repair costs

Typical US ranges, including parts and labor (these vary by region and model):

| Repair | Typical cost |
|---|---|
| Service call / diagnosis | $90 – $200 |
| Defrost (coil) sensor replacement | $150 – $350 |
| Defrost control board replacement | $300 – $750 (communicating boards can cost more) |
| Reversing valve solenoid coil | $150 – $350 |
| Reversing valve replacement (brazing, evacuation, recharge) | $900 – $1,800+ |
| Refrigerant leak search and repair + recharge | $400 – $1,500+ (depends on leak location and refrigerant type) |
| Outdoor fan capacitor | $120 – $250 |
| Outdoor fan motor | $300 – $650 |
| Unit riser/pad or drainage correction | $150 – $500 |
| Air filter (DIY) | $5 – $40 |

Parts under the original warranty may cut costs significantly if your unit is registered, but labor is usually extra.

## Related codes

American Standard Heat Pump Not Heating: Causes & Fixes
American Standard Heat Pump Not Cooling: Causes & Fixes
American Standard AC Frozen Evaporator Coil: Causes & Fixes (indoor coil freezing in cooling mode, a different problem from outdoor coil icing in heat mode)
American Standard Mini-Split Not Heating: Causes & Fixes
