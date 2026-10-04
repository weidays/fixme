---
title: "Goodman Heat Pump Not Cooling: Causes, Fixes & Costs"
code: "Not cooling"
description: "Goodman heat pump not cooling? Reversing valve, O/B thermostat setup, capacitor, low charge and board causes, safe checks and repair costs of $0 to $3,500+."
brand: goodman
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $350 for a capacitor or contactor; $1,200–$2,800 for a reversing valve; $2,000–$4,000+ for a compressor"
appliesTo: "Goodman split-system heat pumps. Single-stage units use a defrost control board with no fault display. Communicating (ComfortBridge) units have an outdoor control that shows fault codes on a 7-segment display. Refrigerant is R-410A on older units and R-32 on newer ones; check the unit data plate."
tags: ["heat-pump", "not-cooling", "reversing-valve", "o-b-setting", "goodman", "cooling-mode"]
parts:
  - name: "Furnace/air handler air filter (match your size)"
    search: "16x25x1 MERV 8 air filter"
  - name: "AA lithium batteries for thermostat"
    search: "AA lithium batteries 8 pack"
datePublished: 2026-10-04
dateModified: 2026-10-04
reviewedBy: ""
faq:
  - q: "Why is my Goodman heat pump blowing warm air in cooling mode?"
    a: "This is usually a heat-pump-only problem. The reversing valve is staying in heating position. Goodman heat pumps energize the reversing valve in cooling through the O terminal. The cause can be a thermostat set to B instead of O, a failed valve coil, a wiring or board fault, or a mechanically stuck valve."
  - q: "Will my Goodman heat pump fix itself if I reset it?"
    a: "Do one reset by turning the thermostat off and switching off the breaker for five minutes. That can clear a tripped safety or a board lockout caused by a short power event. If cooling does not return, or the problem comes back, stop resetting. A hard lockout after repeated pressure trips means something is wrong, and repeated resets can damage the compressor. Call a technician."
  - q: "Is a stuck reversing valve worth repairing?"
    a: "Often, yes. If only the solenoid coil has failed, it is a cheap fix. Replacing the whole valve costs $1,200 to $2,800 because the refrigerant must be recovered and the valve brazed in. That is usually worth it on a unit under about 10 years old, especially if parts are still under warranty."
  - q: "Can I add refrigerant to my heat pump myself?"
    a: "No. Handling refrigerant requires EPA Section 608 certification. A low charge also means there is a leak, and the leak must be found and repaired. Older Goodman units use R-410A and newer ones use R-32, which is mildly flammable and needs specific tools. Check the unit data plate to see which yours uses."
---

## What this code means

"Not cooling" is not a stored fault code. It means your Goodman heat pump runs, or tries to run, in cooling mode but does not lower the indoor temperature.

The general "AC running but not cooling" problem is covered on its own page. This page covers what is different about a **heat pump**.

**Why heat pumps are different:**

- The same outdoor unit heats in winter and cools in summer.
- A **reversing valve** switches between the two modes.
- Goodman heat pumps energize this valve in **cooling**, using the thermostat's **O** terminal.

**What that means in practice:** If the valve, its coil, its wiring or the thermostat setup fails, the unit can run normally but blow **warm air in cooling mode**. A central AC cannot fail this way.

**How fault reporting varies by model:**

- **Single-stage units with a defrost control board:** The board has no fault display, so you get symptoms, not codes.
- **Communicating (ComfortBridge) units:** These have an outdoor control that shows fault codes on a 7-segment display. If you see a code, write it down for the technician. It narrows the diagnosis.
- **Resets:** Lockout behavior varies by control board. A typical Goodman defrost board responds to a pressure-switch trip with a soft lockout and then retries. If the pressure switch trips repeatedly within a run cycle, the board goes into a hard lockout that only a power cycle clears. Communicating controls handle lockouts differently. A hard lockout means a real fault needs technician attention. Do not keep resetting the unit. A cooling failure caused by a bad part continues until that part is repaired.

## Common causes, ranked by probability

The ranking depends on what you see:

- **The outdoor unit runs but you get warm air:** Thermostat O/B setup and reversing valve problems are the most likely causes.
- **The outdoor unit is not running:** A failed capacitor or contactor is more likely than a thermostat setting.

1. **Thermostat set to B instead of O.** This is very common after a new or smart thermostat is installed. Goodman needs O, meaning the valve is energized in cooling. When set to B, the unit heats when you call for cooling, and cools when you call for heat.
2. **Failed outdoor run capacitor or contactor.** The indoor blower runs, but the compressor, outdoor fan, or both do not start. You get no cooling, or only a little. This is the most likely cause when the outdoor unit is not running.
3. **Failed reversing valve solenoid coil, or an open O wire.** The valve never shifts into cooling, so the unit blows warm air.
4. **Low refrigerant from a leak.** Cooling is weak, the coil or suction line may freeze, and the unit runs constantly. A communicating unit may show a low-pressure or charge fault.
5. **Dirty filter or iced indoor coil.** Airflow is restricted, so the coil freezes and cooling drops off.
6. **Clogged condensate drain tripping a float switch.** Many installs have a float switch that cuts power to the outdoor unit when the drain backs up.
7. **Outdoor fan motor failure, or a dirty outdoor coil.** Heat cannot be rejected outdoors. This leads to high-pressure trips and cycling.
8. **Mechanically stuck reversing valve.** The coil works, but the valve slide does not move.
9. **Defrost board or communicating outdoor control fault.** The board does not pass the O signal through, or holds the unit in a lockout.
10. **Compressor failure.** This includes internal overload trips, a locked rotor, or valve damage. It is the least common cause, but the most expensive.

## Safe checks before you call anyone

- **Thermostat:** Set it to COOL, with the setpoint at least 3°F below room temperature. Set the fan to AUTO. Replace the batteries if your thermostat uses them.
- **O/B setting:** If the thermostat was replaced or reset recently, check its installer menu. It must say **O** (some menus say "O/B energize on cool") for a Goodman heat pump. If the unit only blows warm air in COOL mode, this is the first thing to check.
- **Air filter:** Replace it if it is dirty.
- **If the coil or refrigerant line looks iced:**
  1. Set the thermostat to OFF and the fan to ON for 2–4 hours to thaw it.
  2. Then retest.
  3. If it ices again, you have a refrigerant or airflow fault that needs a technician.
- **Breakers and the outdoor disconnect:** Check both the indoor breaker and the outdoor breaker. Make sure the outdoor disconnect is ON. Reset a tripped breaker **once only**. If it trips again, call a technician.
- **Outdoor unit:** Clear away leaves, grass clippings and plants to at least 2 feet around it. Gently hose off visible debris from the outside of the coil, with the power off. Do not remove any panels.
- **Condensate:**
  - Look for water in the drain pan or around the air handler.
  - If a float switch is visible, look to see whether standing water has raised it. This is a visual check only. Do not move, adjust or bypass the float switch.
  - Clear the outside end of the drain line with a wet/dry vacuum.
- **Supply vents and return grilles:** Open them all and make sure nothing blocks them.
- **One power reset:**
  1. Set the thermostat to OFF.
  2. Switch off the breaker for 5 minutes.
  3. Restore power and call for cooling.
  4. Expect a delay of up to about 5 minutes before the compressor starts.

  **Do this once only.** If the unit locks out again, call a technician.

## How a technician will diagnose it

A sound diagnosis typically follows these steps:

1. **Thermostat and low-voltage check.** The tech confirms the O/B setting. They measure 24V at the O terminal and Y terminal at the outdoor unit during a cooling call.
2. **Reversing valve check.** They confirm the coil is getting 24V and test its resistance. Then they check line temperatures. In cooling, the larger suction line should be cold. If it is hot, the valve is stuck in heating position.
3. **Electrical tests.** They test the capacitor against its µF rating, check the contactor's contacts for pitting, and measure compressor and fan motor amps.
4. **Refrigerant check.** They connect gauges or probes and check superheat and subcooling against Goodman's charging chart. If the charge is low, they **leak search** before recharging. "Just topping it off" with no leak search is a red flag.
5. **Board check.** On communicating (ComfortBridge) units, they read the fault history. On standard units, they confirm the defrost board passes the O and Y signals and is not holding a lockout.
6. **Compressor tests.** They check winding resistance and grounding before condemning the compressor.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Warm air in COOL; heats when set to HEAT | Thermostat set to B | Change installer setting to O | Verify wiring at O terminal |
| Warm air in COOL; suction line hot | Valve coil, O wire, or stuck valve | One power reset | Test coil and 24V; replace coil or valve |
| Indoor fan runs, outdoor unit silent or humming | Capacitor, contactor, tripped breaker | Check breaker and disconnect once | Test and replace capacitor or contactor |
| Weak cooling, runs constantly, ice on lines | Low charge or restricted airflow | Replace filter; thaw with fan ON | Leak search, repair, recharge |
| Outdoor unit stops after a few minutes | High pressure, fan motor, dirty coil | Clear debris around unit | Test fan motor; clean coil; read board faults |
| Water near air handler, no cooling | Clogged drain tripped float switch | Clear drain line; do not bypass float switch | Clean pan and trap; check float switch |
| Code showing on outdoor control (communicating units) | Pressure, sensor or communication fault | Note the code; do one reset | Diagnose per Goodman fault table |
| Compressor clicks on and off, breaker trips | Failing compressor or shorted winding | Do not reset again | Test windings; check warranty |

## Repair costs

These are typical US installed prices. They vary by region and season.

| Repair | Typical cost |
|---|---|
| Thermostat O/B fix or new batteries | $0 DIY; $100–$200 service call |
| Run capacitor | $150–$400 |
| Contactor | $150–$400 |
| Reversing valve solenoid coil | $150–$350 |
| Reversing valve replacement (recover, braze, evacuate, recharge) | $1,200–$2,800 |
| Defrost control board / communicating outdoor control | $400–$1,200 |
| Leak search, repair and recharge (more for R-32 or coil replacement) | $300–$1,500+ |
| Outdoor fan motor | $400–$900 |
| Compressor replacement | $2,000–$4,000+ |

**Warranty:** Goodman typically offers a 10-year parts warranty on registered units, but terms vary by model and registration status. Labor is usually not covered unless you have an extended plan. Check your registration before approving a large repair.

## Related codes

- Goodman AC Running But Not Cooling: Causes & Costs (general cooling causes: airflow, charge, outdoor unit)
- Goodman Heat Pump Not Heating: Causes, Fixes & Costs (reversing valve and defrost issues in heating mode)
- Goodman Furnace Leaking Water: Causes, Fixes & Costs (condensate and float switch problems)
- Goodman Air Handler Blower Not Running: Causes & Fixes (no indoor airflow)
- Goodman Heat Pump Short Cycling: Causes, Fixes & Costs
