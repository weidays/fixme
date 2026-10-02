---
title: "Rheem Furnace Short Cycling: Causes, Fixes & Costs"
code: "Short cycling"
description: "Rheem furnace short cycling? Causes include dirty filters, overheating limits, oversizing and flame-sensor faults — fixes and costs from $0 to $1,800."
brand: rheem
equipment: furnace
severity: pro
costRange: "$0 DIY filter swap – $1,800 for an ECM blower motor or proprietary control board"
appliesTo: "Rheem gas furnaces including Classic, Classic Plus, Prestige (R801, R802, R95, R96, R97 series) with integrated furnace control boards; diagnostic behavior varies by board and flash-code set."
tags:
  - short-cycling
  - furnace
  - overheating
  - limit-switch
datePublished: 2026-10-02
dateModified: 2026-10-02
reviewedBy: ""
faq:
  - q: Is it safe to run my Rheem furnace while it short cycles?
    a: Run it only if there is no burning smell, no soot around the furnace or registers, and no carbon monoxide alarm activity — and make sure you have a working CO alarm first. Repeated high-limit trips are exactly the condition associated with heat-exchanger stress and cracking, so change the filter and stop using the furnace if the trips continue. Schedule service promptly.
  - q: Why does my Rheem furnace start then shut off after a minute?
    a: A one-minute run then shutdown often means the furnace is overheating on the high-limit switch, usually from restricted airflow like a clogged filter or closed vents, or a weak flame signal.
  - q: Can a dirty air filter cause short cycling?
    a: Yes. A clogged filter is the single most common cause. It chokes airflow, the heat exchanger overheats, and the high-limit switch cuts the burners until it cools, over and over.
  - q: Will the furnace reset itself after short cycling?
    a: Limit-triggered shutdowns auto-reset once the furnace cools. A hard lockout after repeated trips holds until you cycle power at the switch or breaker, which you should do only once.
---

## What this code means

"Short cycling" describes a Rheem furnace that turns on and off in rapid, repeated bursts instead of running a full heating cycle. It is a behavior, not a single stored fault — depending on your board, you may see a flashing status light, a specific flash code, or no code at all while the furnace keeps restarting.

If your furnace *is* showing a specific flash code, look that code up and follow it instead of this page: the flash-code set differs between Rheem IFC generations, and the legend printed on the inside of your furnace door is the authoritative reference for your board.

The most common mechanism is safety-driven: the furnace lights, overheats because air isn't moving through it fast enough, and the high-limit switch cuts the burners to protect the heat exchanger. Once it cools, the control tries again. Rheem's integrated furnace control (IFC) also short cycles when it can't confirm a stable flame signal or when it's responding to a thermostat that's calling and dropping the call quickly.

Limit-driven cutouts typically **auto-reset** once the furnace cools. If the control counts too many failed or interrupted cycles, many Rheem boards move to a **soft or hard lockout** that holds until power is cycled. Exact lockout rules and flash codes vary by board — check the diagram on the inside of your furnace door.

## Common causes, ranked by probability

Short-cycling causes fall into three failure modes. Work through them in this order — it's a diagnostic path, not a parts list.

**1. Airflow restriction and overheating (most common by a wide margin).** The furnace lights normally, then trips the high-limit switch because heat isn't being carried away fast enough.

- **Dirty or clogged air filter** — restricts return airflow, the heat exchanger overheats, and the high-limit switch repeatedly shuts off the burners. By far the single most common trigger.
- **Blocked or closed supply/return vents** — too many closed registers or returns blocked by rugs, furniture, or drapes starve airflow the same way.
- **Weak or failing blower** — a failing blower motor or a dirty blower wheel moves too little air even with a clean filter. (Technician job.)
- **Duct restriction or a stuck/failed limit switch** — high static pressure or a limit that opens early produces identical symptoms. (Technician job.)

**2. Flame-proving and combustion-sequence faults.** The furnace lights but the control can't confirm or sustain a safe burn, so it drops the burners seconds after ignition and retries.

- **Dirty or degraded flame sensor** — a weak or intermittent flame signal makes the control cut the burners shortly after ignition. (Technician job.)
- **Flue, venting, or pressure-switch faults** — an intermittent inducer or a blocked flue interrupts cycles. (Technician job; overlaps with ignition codes.)
- **Condensate backup on high-efficiency models** — a full trap or blocked drain can trip a float switch mid-cycle.

**3. Thermostat and sizing issues.** The furnace runs correctly but is being asked to start and stop too often.

- **Thermostat problems** — a thermostat mounted in a drafty or heat-source location, loose wiring, dead batteries, or an aggressively set heat anticipator/cycle rate can make the furnace cycle quickly.
- **Oversized furnace** — a unit too large for the home satisfies the thermostat fast, shuts off, then restarts frequently. Common in replacement installs that skipped a load calculation.

**Least likely: control board fault.** A failing IFC can misread inputs and cut cycles short, but this should only be suspected after airflow, flame signal, and thermostat have been ruled out. (Technician job.)

## Safe checks before you call anyone

- **Replace the air filter.** This is the number-one fix for short cycling. If it's gray or you can't see light through it, swap it and run the furnace for a full cycle.
- **Open your vents and check returns.** Make sure supply registers aren't closed and return grilles aren't blocked by rugs, furniture, or drapes.
- **Check the thermostat.** Confirm it's set to Heat with a setpoint above room temperature, and replace the batteries if it's battery-powered. Make sure it isn't sitting in sunlight or near a heat vent.
- **Check the breaker and furnace switch.** Confirm the furnace breaker isn't tripped and the service switch (looks like a light switch near the unit) is on.
- **Check the condensate line (high-efficiency models).** A backed-up drain or full trap can trip a float switch and interrupt cycles. Clear any obvious blockage or standing water at the drain.
- **One reset only.** If the furnace is in lockout, cycle power at the switch or breaker **once**. If it locks out again, stop and call a pro — repeated resets won't fix the fault and can be unsafe.

Everything beyond this — flame sensor, limit switch, blower, wiring, and board tests — is technician work.

## How a technician will diagnose it

A good tech will:

- Read the IFC flash code and cross-reference it with the door-panel legend.
- Watch a full cycle to see exactly when the shutdown happens (at ignition, seconds after flame, or after a longer run).
- Check airflow: filter, blower wheel cleanliness, blower motor amperage, and ductwork restrictions (static pressure test).
- Measure flame signal (microamps) and clean or replace the flame sensor if it's weak.
- Test the high-limit switch and rollout switches for continuity and correct operation.
- Inspect the inducer motor, pressure switch, and flue for intermittent faults.
- Verify thermostat wiring, cycle rate, and — if cycling persists with good airflow — evaluate whether the furnace is oversized for the load.

If a quote jumps straight to a new control board or inducer without an airflow and flame-signal check, ask them to justify it.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Runs a few minutes, shuts off, repeats | Overheating on high-limit from dirty filter | Replace filter, open vents | Test limit switch, check blower/airflow |
| Lights then drops burners in seconds | Weak flame signal / dirty flame sensor | None | Clean or replace flame sensor, measure microamps |
| Cycles fast in short bursts all day | Thermostat location or cycle-rate setting | Replace batteries, relocate heat sources | Correct wiring, adjust cycle rate |
| Starts and stops frequently, home never cold | Oversized furnace | None | Load calc, staging/airflow adjustments |
| Shuts off with blower running long after | Failing blower motor or dirty wheel | None | Clean/replace blower, check amperage |
| Locks out after several tries | Repeated limit or flame trips | One power-cycle reset | Diagnose root fault before reset |
| Cycling with water near furnace base | Blocked condensate / float switch | Clear visible drain blockage | Service trap, float switch, drain |

## Repair costs

- **Air filter:** $10–$40 (DIY).
- **Thermostat batteries:** $5–$15 (DIY).
- **Diagnostic / service call:** $90–$200, and many companies credit it toward the repair if you approve the work.
- **Thermostat replacement:** $120–$350 installed; $20–$250 DIY for the thermostat itself.
- **Flame sensor cleaning or replacement:** $90–$250.
- **High-limit switch replacement:** $150–$350.
- **Pressure switch replacement:** $150–$400 installed.
- **Inducer motor / assembly replacement:** $400–$1,200 installed.
- **Blower motor cleaning or replacement:** $450–$1,800 installed. Older PSC motors sit at the low end of that range; ECM and variable-speed motors sit at the high end, commonly $900–$1,800, because the motor and its control module are often sold together as an assembly.
- **Integrated furnace control board:** $400–$1,200 installed, with proprietary and variable-speed controls at the upper end.
- **Duct or static-pressure corrections:** varies widely; $150 for register fixes up to several thousand for duct modifications.

Many short-cycling calls end with a filter swap and a flame-sensor cleaning — a diagnostic fee in the $90–$200 range plus minor labor, rather than a major part.

## Related codes

Rheem Furnace Won't Ignite: Causes, Fixes & Costs — if your furnace never lights at all rather than lighting and shutting off, start there, since gas-supply and ignition faults are covered under that code.

Rheem Heat Pump Flashing Light: Causes & Fixes — for flashing status lights on Rheem heat pump systems rather than gas furnaces.
