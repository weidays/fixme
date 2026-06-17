---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a failed capacitor, motor, or contactor. DIY checks plus repair costs from $0 to $650."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 for a condenser fan motor replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series and earlier 2/4TTR, 2/4TTX units); diagnostics vary on variable-speed XV models with communicating boards"
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: Dual run capacitor
    search: trane dual run capacitor 45+5 mfd 440v
  - name: Condenser fan motor
    search: condenser fan motor 1/4 hp 208-230v replacement
  - name: Contactor relay
    search: ac contactor 30 amp 24v coil 2 pole
datePublished: 2026-06-17
dateModified: 2026-06-17
reviewedBy: ""
faq:
  - q: Can I push the outdoor fan to start it with a stick?
    a: No. If a fan needs a manual push to start, the run capacitor is almost certainly failing. Running it this way overheats the motor and can destroy it. Shut the system off and replace the capacitor.
  - q: Why is my Trane compressor running but the outdoor fan is not?
    a: This usually means a bad fan capacitor (or the fan section of a dual capacitor), a seized fan motor, or a wiring fault. Shut down quickly, because the compressor can overheat without airflow over the coil.
  - q: How much does it cost to fix a Trane outdoor fan that won't spin?
    a: A capacitor runs about $90 to $250 installed. A full condenser fan motor replacement typically runs $300 to $650 depending on the part and labor in your area.
---

## What this code means

"Outdoor fan not spinning" isn't a blinking fault code — it's a physical symptom on your Trane condenser (the outdoor unit). When the system calls for cooling, the outdoor unit should hum to life with the large fan on top pulling air up through the coil. That fan removes the heat your system pulled out of the house.

When the fan stays still, heat has nowhere to go. The compressor may still run, pressures climb fast, and the unit can trip on a high-pressure or internal overload switch within minutes. Left running, this is one of the quickest ways to kill a compressor — the most expensive part in the system.

Because diagnosing it safely means working inside an energized cabinet with high-voltage capacitors, this is rated **pro**. There are a few safe checks below, but the actual repair belongs to a licensed HVAC tech.

## Common causes, ranked by probability

1. **Failed run capacitor** — By far the most common cause. The capacitor gives the fan motor the jolt it needs to start spinning. A weak or dead one leaves the fan humming but motionless, or not moving at all. Many Trane units use a single dual run capacitor for both the fan and compressor.
2. **Seized or burned-out condenser fan motor** — Worn bearings, age, or repeated overheating can lock the motor up. It may smell burnt or feel hot.
3. **Failed contactor** — The relay that sends power to the outdoor unit can have pitted or stuck contacts, leaving the fan dead even when the compressor pulls in (or vice versa).
4. **Tripped overload / high-pressure lockout** — If the unit overheated, an internal switch may have opened and won't reset until things cool. Repeated overheating points back to causes 1–3.
5. **Loss of 24V control signal** — A bad thermostat, broken low-voltage wire, or a tripped float switch can stop the unit from getting the call to run at all.
6. **Debris or ice jamming the fan blade** — Sticks, mud-dauber nests, or a bent blade physically blocking rotation.
7. **Board or module fault (variable-speed XV models)** — Communicating XV units use an electronic motor module rather than a simple capacitor, so the failure modes differ — diagnosis there requires the Trane service tools.

## Safe checks before you call anyone

These are the only steps a homeowner should do without tools or training:

- **Set the thermostat correctly.** Confirm it's on COOL and set several degrees below room temperature so the system is actually calling.
- **Replace the thermostat batteries** if it's battery-powered and the screen is dim or blank.
- **Check your breakers.** Look for a tripped breaker for both the air handler/furnace AND the outdoor unit (often a separate double breaker). Reset a tripped breaker **once**. If it trips again, stop and call a pro — repeated tripping is a real fault.
- **Replace a clogged air filter.** A starved system can short-cycle and overheat.
- **Check the condensate float switch.** A full drain pan can trip a safety float that cuts the cooling call. Clearing a clogged drain may restore operation.
- **Look (don't reach) for obvious blockage.** With the breaker OFF, see if leaves, a stick, or ice is jamming the fan blade.

> **Stop here.** Do not open the electrical panel on the outdoor unit. The run capacitor stores a dangerous high-voltage charge even after power is off, and can injure you badly. Capacitor and motor work is for a technician.

## How a technician will diagnose it

A good tech follows a logical order — here's what a fair diagnosis looks like:

1. **Confirms the call and 24V signal** at the contactor coil with a meter, ruling out thermostat and low-voltage issues.
2. **Safely discharges and tests the run capacitor** with a meter, comparing the reading to its rated microfarad (µF) value. A capacitor reading well below spec is replaced.
3. **Checks the contactor** for pulled-in contacts and proper voltage passing through.
4. **Tests the fan motor** — spins it by hand for bearing drag, checks windings for resistance and shorts, and verifies it gets line voltage when the capacitor is good.
5. **Inspects for a tripped high-pressure or overload switch** and looks for the root cause (low airflow, dirty coil).
6. **On XV/communicating models**, reads fault data from the board/module rather than testing a capacitor.

If a quote jumps straight to "new motor" or "new unit" without a capacitor test first, ask why — the capacitor is cheap and the most common culprit.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but won't spin; pushing it starts it | Failed run capacitor | Shut unit OFF immediately | Test & replace capacitor |
| Compressor runs, fan dead, no hum | Bad fan motor or open winding | Turn system off to protect compressor | Test motor, replace if failed |
| Outdoor unit totally silent | Contactor, breaker, or 24V signal | Reset breaker once; check thermostat | Test contactor & control voltage |
| Fan blade physically stuck | Debris or bent blade | Kill breaker, look for blockage | Clear/straighten or replace blade |
| Ran a while then shut off, fan won't restart | Tripped overload/high-pressure | Let it cool, don't keep resetting | Find root cause of overheating |
| Burnt smell from unit | Overheated motor or wiring | Shut down, leave off | Inspect wiring & motor, replace |

## Repair costs

Honest US ranges, parts and labor included:

- **Run / dual run capacitor:** $90 – $250 installed. The single most common and cheapest fix.
- **Contactor:** $120 – $300 installed.
- **Condenser fan motor:** $300 – $650 installed, depending on horsepower, part availability, and labor rates. OEM Trane motors run higher than universal replacements.
- **Fan blade:** $60 – $200 installed.
- **Diagnostic / service call:** $80 – $180, often credited toward the repair.
- **Electronic motor module (variable-speed XV units):** $400 – $900+ — these are specialty parts and pricier than standard motors.

If a tech recommends replacing the whole condenser, get the specific failed part named and a second opinion — a fan motor or capacitor rarely justifies a full unit replacement on an otherwise healthy system.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — a stopped outdoor fan is one reason a Trane stops cooling; that page covers the broader airflow and refrigerant picture.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — relevant if your air handler side is also acting up alongside the outdoor unit.
