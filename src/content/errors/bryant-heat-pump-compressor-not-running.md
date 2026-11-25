---
title: "Bryant Heat Pump Compressor Not Running: Causes & Fixes"
code: "Compressor not running"
description: "Bryant heat pump compressor not running? Learn the common causes, safe homeowner checks, how pros diagnose it, and repair costs from $0 to $3,500+."
brand: bryant
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150-$450 for a capacitor or contactor, $1,800-$3,500+ for a compressor replacement"
appliesTo: "Bryant split-system heat pumps, including Preferred, Legacy and Evolution series. Single-stage units use a defrost control board and contactor. Two-stage and variable-speed Evolution units use communicating controls and drives, and may show specific fault codes on the thermostat or outdoor board. Diagnostic LED flash patterns vary by board, so check the label inside the service panel or the installation manual for your model."
tags: ["bryant", "heat-pump", "compressor-not-running", "outdoor-unit", "capacitor", "contactor", "pressure-switch"]
parts:
  - name: "Replacement HVAC air filter"
    search: "furnace air filter MERV 8 16x25x1"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-11-24
dateModified: 2026-11-24
reviewedBy: ""
faq:
  - q: "Why does my Bryant heat pump fan run but the compressor doesn't?"
    a: "The outdoor fan and the compressor often share one dual run capacitor. If the compressor side of a dual capacitor fails, the fan can keep spinning while the compressor hums or stays silent. The cause can also be a thermal overload that has tripped, a pressure switch that has opened, or a board that is holding the compressor in a time delay or lockout. A technician needs to test these parts with meters."
  - q: "Is it normal for my Bryant heat pump compressor to wait before starting?"
    a: "Yes. Most Bryant defrost boards and thermostats build in an anti-short-cycle delay of about five minutes after power is restored or after the unit shuts off. Wait at least 5–10 minutes before you decide the compressor has failed. After defrost cycles, some models also pause the compressor briefly for quiet-shift operation."
  - q: "Can I reset my Bryant heat pump if the compressor won't run?"
    a: "You can try one reset. Turn the thermostat off, switch off the outdoor disconnect and the breaker for about five minutes, then restore power and call for heat or cooling. If the compressor still doesn't start, or it starts and stops again, don't keep resetting it. Repeated restarts against a pressure or overload fault can damage the compressor."
  - q: "Does a compressor not running mean I need a new heat pump?"
    a: "Usually not. The most common causes are capacitors, contactors, tripped safeties and control issues, and these cost a few hundred dollars or less to repair. A true compressor failure, such as a seized motor or burned-out winding, is less common. On older or out-of-warranty systems, though, it can make replacing the unit the better value."
---

## What this code means

"Compressor not running" is a symptom, not a single numbered fault. It means the outdoor unit is getting a call for heating or cooling, but the compressor isn't starting or staying on. You might notice any of these signs:

- The outdoor fan spins, but you hear no compressor hum.
- The unit hums or clicks and then goes quiet.
- The whole outdoor unit is silent.

Indoors, you get lukewarm or room-temperature air. In winter, the backup (auxiliary) heat may run constantly.

How the fault shows up depends on the model:

- **Bryant Evolution communicating systems** often display a specific fault on the thermostat. Examples include a pressure switch trip, a high discharge temperature, or a drive or communication fault.
- **Conventional single-stage units** usually show nothing on the thermostat. The defrost board inside the outdoor unit may flash a status LED that a technician can read.

How the fault resets also varies:

- Most Bryant controls include an anti-short-cycle timer of about 5 minutes. This delay is normal.
- Many boards automatically retry after a high-pressure or low-pressure switch trip.
- After several trips in a row, the board locks the compressor out. That lockout typically holds until power is cycled.

Check your model's wiring diagram or service label for the exact behavior.

This page focuses on heat pump–specific causes. If you have a central air conditioner, see the separate Bryant AC compressor page.

## Common causes, ranked by probability

1. **Failed run capacitor (or the compressor side of a dual capacitor).** This is the most common cause. The compressor hums, then trips its internal overload. The outdoor fan may keep running.
2. **Bad contactor or no 24V call to the contactor.** Burned or pitted contacts, a failed coil, or a thermostat or wiring problem can keep power from reaching the compressor.
3. **Anti-short-cycle delay or board lockout.** The defrost board or Evolution control may be holding the compressor off.
   - A delay is normal for up to about 5 minutes.
   - A lockout follows repeated safety trips and needs a technician to find the underlying cause.
4. **Tripped high-pressure or low-pressure switch.**
   - High pressure often comes from a dirty outdoor coil or a failed outdoor fan in cooling mode. In heating mode, it often comes from a very dirty filter or weak indoor airflow.
   - Low pressure usually points to a refrigerant leak or a restriction.
5. **Compressor internal thermal overload open.** The compressor has overheated, often because of low refrigerant charge, a weak capacitor, or low voltage. The compressor may need an hour or more to cool down and reset.
6. **Power supply problems.** These include a tripped breaker, a blown fuse in the outdoor disconnect, or low line voltage. A homeowner can check the breaker. The disconnect fuses are technician work.
7. **Inverter or drive fault on variable-speed Evolution models.** A failed drive, a failed sensor, or a communication loss stops the compressor even when the compressor itself is fine.
8. **Failed compressor.** The motor may be seized, or a winding may be open or shorted to ground. This is less common, but a technician should rule it out before replacing other parts.

## Safe checks before you call anyone

- **Thermostat:** Confirm the mode (HEAT or COOL) and set the temperature at least 3°F beyond the current room temperature. Replace the batteries if the display is dim or blank. Make sure the thermostat isn't set to "Emergency Heat," which deliberately locks out the compressor.
- **Wait out the delay:** Give the system 5–10 minutes after any change before you judge it.
- **Breakers:** Check both the outdoor unit breaker and the indoor air handler breaker in your panel. If one has tripped, reset it once. If it trips again, stop and call a technician. The Bryant Heat Pump Breaker Keeps Tripping page covers this in more detail.
- **One reset:** Turn the thermostat off, then switch off the outdoor disconnect and the breaker. Wait 5 minutes, restore power, and call for heating or cooling. Do this only once.
- **Air filter:** Replace the filter if it is dirty. A clogged filter can trip the high-pressure switch in heating mode.
- **Vents:** Make sure supply and return registers are open and not blocked by furniture or rugs.
- **Outdoor unit:** Clear away leaves, snow, and debris, and keep about 2 feet of space around the unit. Confirm all exterior access panels are seated properly.
- **Condensate:** If your air handler has a float or condensate safety switch, check that the drain pan isn't full of water. A tripped float switch cuts the thermostat call.

**Do not open the outdoor cabinet, touch the capacitor, or push in the contactor.** Capacitors store a dangerous charge even after the power is off.

## How a technician will diagnose it

A technician will typically work through these steps. Use them to sanity-check a quote:

- **Read the faults.** They will check the thermostat and outdoor board for fault history. On Evolution systems, they will read the stored faults from the thermostat service menu.
- **Check voltage at the contactor.** They will verify the 24V control signal at the contactor coil and line voltage across the contactor, under load.
- **Test the capacitor.** They will measure its capacitance in microfarads and compare it to the rating printed on it. A reading more than about 6% low is a common reason to replace it.
- **Check the compressor windings.** They will measure resistance across the common, start, and run terminals, and test each winding to ground. If the compressor is hot, they will allow time for the internal overload to reset.
- **Check the safety switches.** They will test the high- and low-pressure switches for continuity.
- **Check refrigerant pressures.** They will connect gauges and check pressures, superheat, and subcooling. If the charge is low, they should find and repair the leak, not just add refrigerant.
- **Diagnose drive faults.** On inverter models, they will follow the drive's LED fault codes and the manufacturer's troubleshooting tree.
- **Confirm before condemning.** A new compressor is expensive. Expect proof before one is recommended, such as an open or grounded winding, or a compressor that stays locked even with a correct capacitor and correct voltage.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan runs, compressor hums then stops | Weak or failed run capacitor | Turn the system off to protect the compressor | Test and replace the capacitor; check the windings |
| Outdoor unit completely silent | No 24V call, failed contactor, or tripped breaker | Check thermostat mode and batteries; reset the breaker once | Test the control voltage and contactor; repair wiring |
| Compressor starts, then stops within minutes | Pressure switch trip or overload | Replace the filter; clear debris from the outdoor coil area | Check pressures and airflow; find any leak |
| Works after a reset, then quits again | Board lockout after repeated safety trips | Do one reset only, then call | Read the fault history and fix the root cause |
| Thermostat shows a fault (Evolution) | Drive, sensor, or communication fault | Note the fault text or code exactly | Run drive diagnostics; replace the failed component |
| Aux heat runs constantly in winter | Compressor not running, or thermostat set to Emergency Heat | Switch from Emergency Heat back to normal Heat | Diagnose why the compressor isn't starting |
| Loud click, compressor never starts, breaker trips | Shorted or seized compressor | Leave the breaker off | Test the windings; quote a compressor or unit replacement |

## Repair costs

These are typical installed US prices:

| Repair | Typical cost |
|---|---|
| Service call and diagnosis | $90–$250 |
| Run or dual capacitor | $150–$400 |
| Hard-start kit (added to an older compressor) | $200–$450 |
| Contactor | $150–$400 |
| High- or low-pressure switch | $200–$500 (more if refrigerant must be recovered) |
| Defrost or control board | $300–$800 |
| Variable-speed drive or inverter board (Evolution) | $800–$2,000+ |
| Refrigerant leak repair and recharge | $400–$1,500+, depending on the leak location and refrigerant type |
| Compressor replacement | $1,800–$3,500+ (labor and refrigerant are significant even when the part is under warranty) |
| Full heat pump replacement (if compressor replacement isn't worthwhile) | $5,000–$12,000+ |

Bryant compressors often carry a 10-year parts warranty if the unit was registered. Check your registration before you approve a compressor quote.

## Related codes

- Bryant Heat Pump Not Heating: Causes, Checks & Fixes
- Bryant Heat Pump Not Cooling: Causes, Checks & Fixes
- Bryant Heat Pump Breaker Keeps Tripping: Causes & Fixes
- Bryant Heat Pump Aux Heat On Constantly: Causes & Fixes
- Bryant Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Bryant Heat Pump Short Cycling: Causes, Checks & Fixes
- Bryant Heat Pump Blowing Cold Air: Causes & Fixes
- Bryant AC Compressor Not Running: Causes, Checks & Fixes
