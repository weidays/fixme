---
title: "Rheem Heat Pump Short Cycling: Causes, Fixes & Costs"
code: "Short cycling"
description: "Why a Rheem heat pump short cycles: oversizing, low charge, pressure switch trips, thermostat issues. Safe checks, tech diagnosis and $0–$2,500+ repair costs."
brand: rheem
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $150-$450 for a thermostat or control fix, $800-$2,500+ for refrigerant leak repair, $1,500-$3,500+ for a compressor"
appliesTo: "Rheem and Ruud split heat pumps, including Classic, Classic Plus and Prestige series. Single-stage units with a defrost control board report pressure-switch lockouts through LED flash codes. Communicating EcoNet units show fault text on the thermostat. Lockout and retry behavior varies by board, so check the wiring diagram label inside the unit's access panel."
tags:
  - rheem
  - heat-pump
  - short-cycling
  - pressure-switch
  - thermostat
  - refrigerant
parts:
  - name: "Replacement air filter (match size on existing filter)"
    search: "MERV 8 HVAC air filter 16x25x1"
  - name: "AA/AAA thermostat batteries"
    search: "AA alkaline batteries 8 pack"
  - name: "Programmable heat pump thermostat (if replacing a non-communicating stat)"
    search: "programmable heat pump thermostat with auxiliary heat"
datePublished: 2026-10-12
dateModified: 2026-10-12
reviewedBy: ""
faq:
  - q: "How short is too short for a heat pump cycle?"
    a: "Most heat pumps should run at least 8–10 minutes per cycle in mild weather and longer in temperature extremes. Repeated cycles of 2–5 minutes, especially several per hour, indicate short cycling."
  - q: "Is it safe to keep running a short-cycling Rheem heat pump?"
    a: "Short periods won't cause immediate danger, but frequent compressor starts wear the compressor and contactor and can damage them. If the outdoor unit starts and stops every few minutes, schedule service soon instead of leaving it for weeks."
  - q: "Can a dirty filter make a heat pump short cycle?"
    a: "Yes. In heat mode, restricted airflow raises head pressure, which can trip the high-pressure switch. In cooling mode, it can cause icing and a low-pressure trip. Replacing a clogged filter is the first thing to check."
  - q: "Does the unit reset itself after a pressure switch trip?"
    a: "On most Rheem defrost boards, the unit retries automatically after a delay. After several trips in a row, the board typically holds a lockout until power is cycled. The exact count and timing vary by board, so check the label in your unit."
---

## What this code means

"Short cycling" is not a single Rheem fault code. It describes a symptom: the heat pump starts, runs briefly, shuts off, and repeats well before the house reaches the thermostat setpoint.

This page covers short cycling of the **heat pump compressor and outdoor unit** in both heating and cooling. Gas-furnace cycling is covered separately in Rheem Furnace Short Cycling.

On Rheem and Ruud heat pumps, short cycling usually comes from one of two sources:

- **The thermostat or control is calling on and off.** The outdoor unit is simply following those calls.
- **A safety device is stopping the compressor mid-call.** The most common is the high- or low-pressure switch. The defrost control board then waits through an anti-short-cycle delay (commonly about 5 minutes) and tries again.

Repeated pressure trips usually lead to a **soft lockout**, often shown as an LED flash code on the board. Many boards clear soft lockouts on their own. After several trips in one call, many boards hold a **hard lockout** until power is cycled. Retry counts and lockout behavior vary by board generation, so use the diagram inside your unit's panel.

If your unit is showing a blinking LED, also see Rheem Heat Pump Flashing Light.

## Common causes, ranked by probability

1. **Airflow restriction.** A clogged filter, closed registers, or a dirty indoor coil can cause trouble in both modes:
   - In heat mode, restricted airflow raises head pressure and trips the high-pressure switch.
   - In cooling mode, it can drop suction pressure and trip the low-pressure switch.
2. **Thermostat problems.** Common examples:
   - The thermostat sits near a supply register, in sun, or near a lamp.
   - The cycle-rate or differential setting is too tight.
   - Batteries are weak.
   - A heat pump stat is configured incorrectly, such as the wrong O/B reversing valve setting or set up as a gas furnace.
3. **Low refrigerant charge from a leak.** Low charge trips the low-pressure switch, especially in heat mode on cold days.
4. **Dirty or blocked outdoor coil, or outdoor fan problems.** In cooling mode, this causes high head pressure and high-pressure switch trips.
5. **Failing compressor components.** A weak run capacitor or failing contactor can make the compressor overheat. It then trips on its internal thermal overload and restarts once it cools.
6. **Faulty pressure switch, defrost board, or loose wiring.** These can open the safety circuit even when pressures are normal.
7. **Oversized equipment.** An oversized unit satisfies the thermostat in a few minutes. This is common after a replacement done without a load calculation.
8. **Restriction in the refrigerant circuit.** A plugged filter-drier, a failing TXV, or a sticking reversing valve can cause pressure-switch trips.

## Safe checks before you call anyone

- **Air filter.** Replace it if it is gray or clogged. A 1-inch filter typically needs replacing every 1–3 months.
- **Registers and returns.** Open all supply registers and clear furniture or rugs off return grilles.
- **Thermostat:**
  - Replace the batteries.
  - Confirm it is set to Heat or Cool, not Emergency Heat.
  - Make sure no heat source or supply vent is blowing on it.
  - If it was recently installed, check that it is set up for a heat pump. Your installer can verify this.
- **Outdoor unit, from outside only.** Clear leaves, snow, and debris, and trim plants back about 2 feet. Do not open the unit or spray inside the cabinet.
- **Condensate.** Make sure the indoor drain line and pan aren't overflowing. A tripped float switch can cut the call on and off.
- **Panels.** Confirm the indoor unit's access panels are seated properly.
- **One reset.** If the unit appears locked out, turn off the thermostat. Switch off the outdoor disconnect and the breaker for 5 minutes, then restore power. Do this **once**. If short cycling returns, stop and call a technician. Repeated resets can damage the compressor.

## How a technician will diagnose it

- **Read the board.** The tech checks the defrost or control board LED or the EcoNet fault history to tell high-pressure, low-pressure, and other lockouts apart.
- **Time the cycles.** Watching whether the thermostat call (Y) drops shows whether the problem is in the controls or a safety trip.
- **Measure refrigerant pressures.** Using gauges or probes, the tech checks suction pressure, head pressure, superheat, and subcooling against Rheem's charging chart. Signs of low charge lead to leak detection.
- **Check airflow.** This includes total external static pressure, blower speed settings, and the condition of the indoor coil.
- **Test electrical parts.** Expect checks of capacitor microfarads, compressor amp draw, contactor contacts, pressure switch continuity, and wiring.
- **Review sizing.** If everything tests normal, the tech should check unit capacity against a Manual J load.

A legitimate quote should name the specific failed part or the measured problem, such as "low charge, leak at service valve." Be cautious of a vague "add refrigerant" quote with no leak search.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Short cycles with weak airflow at vents | Dirty filter or blocked returns | Replace filter, open registers | Clean indoor coil, check blower and static pressure |
| Indoor blower keeps running but the outdoor unit stops and restarts after about 5 minutes | Pressure switch trip | One power reset | Read the fault, check pressures, repair the cause |
| Cycles only in heat mode on cold days | Low refrigerant charge | Clear snow and ice from around the unit | Find and repair the leak, then recharge to spec |
| Cycles only in cooling mode on hot days | Dirty outdoor coil, fan problem | Clear debris outside | Clean coil, test fan motor and capacitor |
| Outdoor unit hums, stops, and restarts later | Compressor thermal overload or bad capacitor | None | Test and replace capacitor or contactor, check compressor |
| Cycles erratically, thermostat display flickers or goes blank | Weak batteries, wiring issue | Replace batteries | Check thermostat wiring and transformer |
| Very short cycles while every test passes | Oversized unit or thermostat placement | Move heat sources away from the thermostat | Load calculation, relocate stat, adjust staging |

## Repair costs

| Repair | Typical US cost |
|---|---|
| Filter, batteries, clearing debris | $0–$40 DIY |
| Service call and diagnosis | $90–$200 |
| Thermostat replacement, installed | $150–$450 (communicating EcoNet: $300–$700) |
| Run capacitor | $150–$400 |
| Contactor | $150–$400 |
| Pressure switch | $200–$500 |
| Defrost or control board | $350–$900 |
| Indoor or outdoor coil cleaning | $150–$500 |
| Leak search and repair plus recharge | $400–$2,500+ (depends on leak location and refrigerant type) |
| TXV or filter-drier replacement | $600–$1,500 |
| Reversing valve | $900–$2,000 |
| Compressor | $1,500–$3,500+ (parts warranty may apply; labor usually doesn't) |
| Correcting an oversized system | Full replacement, often $6,000–$14,000 |

## Related codes

- Rheem Heat Pump Flashing Light: Causes & Fixes
- Rheem Heat Pump Frozen, Not Defrosting: Causes & Fixes
- Rheem Heat Pump Ice on Outdoor Unit: Causes & Fixes
- Rheem Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Rheem Heat Pump Not Heating: Causes, Fixes & Costs
- Rheem Heat Pump Not Cooling: Causes, Fixes & Costs
- Rheem Furnace Short Cycling: Causes, Fixes & Costs
