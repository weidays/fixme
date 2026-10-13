---
title: "Goodman Heat Pump Compressor Not Running: Causes & Costs"
code: "Compressor not running"
description: "Goodman heat pump compressor not running? Learn the causes (capacitor, contactor, pressure switch, defrost board), safe checks and repair costs."
brand: goodman
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150-$450 for a capacitor or contactor, $1,800–$4,000+ if the compressor needs replacement"
appliesTo: "Goodman split heat pumps (GSZ, GSZC, GSZB, DSZC, SSZ series and older CPKJ/CHP models). Single-stage units use a defrost control board with an optional high/low pressure switch lockout. ComfortBridge and communicating variable-speed models (GSZC7, DSZC) report faults through the outdoor board and thermostat. Diagnostic LED codes and lockout behavior differ by board revision."
tags:
  - goodman
  - heat-pump
  - compressor
  - capacitor
  - contactor
  - pressure-switch
  - no-cooling
  - no-heat
parts:
  - name: "Pleated HVAC air filter"
    search: "MERV 8 pleated air filter furnace 16x25x1"
  - name: "AA lithium thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-10-13
dateModified: 2026-10-13
reviewedBy: ""
faq:
  - q: "Why does my Goodman heat pump fan run but the compressor doesn't?"
    a: "The outdoor fan and the compressor share a contactor but often use separate capacitor sections. A failed dual run capacitor, a seized compressor or a tripped internal overload can stop the compressor while the fan keeps spinning. A technician needs to test the capacitor and the compressor windings."
  - q: "Will the compressor restart on its own?"
    a: "Sometimes. The compressor's internal thermal overload resets on its own once the compressor cools down, which can take an hour or more. A high or low pressure switch lockout on Goodman defrost boards usually holds after repeated trips until you cycle power. Cycling power once is fine. Don't keep resetting it."
  - q: "Is it safe to keep running the heat pump with the compressor off?"
    a: "In heating mode, backup electric strips may keep the house warm, but your bills will climb quickly. In cooling mode, you only get fan air. Repeated hard-start attempts can overheat the windings, so turn the system off at the thermostat until a technician has looked at it."
  - q: "Is a non-running compressor covered by Goodman warranty?"
    a: "Goodman compressors usually carry a 10-year parts limited warranty when the unit was registered on time. Some models carry a lifetime compressor warranty. Labor and refrigerant are usually not covered unless you bought an extended labor plan. Have your model and serial number ready."
---

## What this code means

"Compressor not running" is a symptom, not a single flash code. The thermostat is calling, and the indoor blower may run. At the outdoor unit, the compressor is silent. The fan may or may not be turning.

On Goodman heat pumps, the compressor is switched by a contactor. That contactor is controlled by the defrost control board and the thermostat's Y signal.

Several things can block that path:
- Safety devices wired into the circuit, such as high/low pressure switches on many models
- The compressor's own internal overload
- A failed start/run capacitor

Whether it resets on its own depends on the cause:
- **Internal overload:** resets automatically after the compressor cools.
- **Pressure switch:** on many Goodman defrost boards, a trip causes a soft lockout. After repeated trips in one call, the board holds a hard lockout until power is cycled or the thermostat call is removed. Check the board LED and the wiring diagram on your unit's panel, because behavior varies by board.
- **Communicating models:** ComfortBridge and similar models show a specific fault code at the outdoor board and thermostat.

If your outdoor fan is also dead, see the related fan page. If the breaker trips, see the breaker page.

## Common causes, ranked by probability

1. **Failed run capacitor (dual capacitor).** This is the most common cause on Goodman units. The compressor hums or clicks on its overload but won't start. The fan may still spin.
2. **Bad or pitted contactor.** Burned contacts or a failed coil mean no voltage reaches the compressor. Insects or debris between the contacts are also common.
3. **Compressor internal thermal overload open.** The compressor is too hot. This is often caused by low refrigerant charge, a dirty outdoor coil, or a weak capacitor. It resets once cooled.
4. **High or low pressure switch tripped / board lockout.** Typical causes:
   - Low charge from a leak (low-pressure switch)
   - A blocked coil or failed outdoor fan (high-pressure switch)
5. **No 24V call reaching the outdoor unit.** Possible reasons:
   - Thermostat setting or dead batteries
   - Broken low-voltage wire
   - Blown 3A fuse on the indoor board
   - Tripped float switch
6. **Defrost control board fault.** The board fails to energize the contactor, or it's stuck in a delay or lockout.
7. **Seized compressor or open/shorted windings.** This is the least common cause but the most expensive. It is sometimes helped temporarily by a hard-start kit.

## Safe checks before you call anyone

- **Thermostat:** Confirm it's set to Cool or Heat with a setpoint at least 3°F beyond room temperature. Replace the batteries if the display is dim or blank.
- **Wait out the delay:** Many thermostats and Goodman boards have a 3–5 minute anti-short-cycle delay. Give it 5 minutes.
- **Breakers and disconnect:** Check the breaker for the outdoor unit (usually a 2-pole breaker) and the indoor air handler. If one is tripped, reset it once. If it trips again, stop and call a technician.
- **Outdoor disconnect switch:** Make sure the disconnect box next to the unit is on and that the pull-out handle is fully seated.
- **Air filter:** Replace it if it's dirty. A choked filter can cause pressure trips in cooling and in heating mode.
- **Outdoor clearance:** Clear leaves, grass and snow from around the unit from the outside only. Do not open panels or spray inside the cabinet.
- **Condensate line:** If the indoor unit has a float switch and water is standing in the drain pan, clear the drain line at the outside or access tee. A tripped float switch cuts the call.
- **One power reset:** Turn the system off at the thermostat. Switch off the breaker for 5 minutes, then restore it. If the compressor still won't run, or if it runs briefly and stops again, don't repeat this. Call a technician.

Don't touch anything inside the outdoor cabinet. Capacitors hold a dangerous charge even with the power off.

## How a technician will diagnose it

- Read the defrost or outdoor board LED or fault code, and check for pressure-switch lockout.
- Verify 24V at the contactor coil. If it's missing, trace back through the board, the thermostat wiring and the indoor fuse.
- Check line voltage across the contactor, and inspect the contacts for pitting.
- Discharge the capacitor and test it in µF against its rating. A reading below about 6% under spec usually means replacement.
- Measure the compressor windings (C-S, C-R, S-R) and check for a short to ground. A reading of "open" on a hot compressor usually means the internal overload is open. In that case, the tech should let it cool and retest.
- Measure amp draw on start, looking for locked-rotor amps.
- Connect gauges and check the charge and pressures. If low, the tech should find the leak.
- Inspect the outdoor coil and fan operation.

A credible quote names the specific failed part and the test result behind it, for example "capacitor reads 28 µF on a 45 µF rating." Be cautious of a compressor replacement quote that has no winding or amp test behind it.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor unit hums, then clicks off | Failed capacitor or seized compressor | Turn the system off at the thermostat | Test and replace the capacitor; test windings; consider a hard-start kit |
| Fan runs, compressor silent | Bad capacitor section or overload open | Turn off and let it rest 1 hour | Test the capacitor and windings, and check the charge |
| Nothing runs outside, indoor blower runs | No 24V call, contactor fault or tripped breaker | Check thermostat, batteries, breaker and disconnect | Check 24V, the contactor, the indoor fuse and the board |
| Runs a few minutes, then stops repeatedly | Pressure switch trip, low charge or dirty coil | Replace the filter and clear around the unit | Gauge check, leak search, coil cleaning, board lockout reset |
| Breaker trips when compressor tries to start | Shorted compressor or grounded wiring | Reset once only | Megger or ohm test the compressor and inspect wiring |
| Water in pan, system dead | Float switch tripped | Clear the condensate line | Verify the float switch and drain |

## Repair costs

| Repair | Typical US cost (installed) |
|---|---|
| Thermostat batteries, filter, breaker reset | $0–$40 DIY |
| Service call / diagnostic | $90–$200 |
| Run capacitor (dual) | $150–$450 |
| Contactor | $150–$400 |
| Hard-start kit | $200–$450 |
| Pressure switch | $200–$500 (more if refrigerant recovery is needed) |
| Defrost control board | $300–$700 |
| Leak repair plus R-410A or R-454B recharge | $400–$1,500+ |
| Compressor replacement (under parts warranty) | $1,500–$2,800 (labor and refrigerant) |
| Compressor replacement (out of warranty) | $1,800–$4,000+ |
| New heat pump outdoor unit (often weighed against an old compressor) | $4,000–$8,000+ |

## Related codes

- Goodman Heat Pump Not Cooling: Causes, Fixes & Costs
- Goodman Heat Pump Not Heating: Causes, Fixes & Costs
- Goodman Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Goodman Heat Pump Breaker Keeps Tripping: Causes & Costs
- Goodman Heat Pump Short Cycling: Causes, Fixes & Costs
- Goodman Heat Pump Aux Heat On Constantly: Causes & Fixes
- Goodman Heat Pump Blowing Cold Air in Heat Mode: Fixes
- Goodman AC Running But Not Cooling: Causes & Costs
