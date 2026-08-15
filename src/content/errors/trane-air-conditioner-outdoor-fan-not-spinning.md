---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fix Costs"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a bad capacitor, motor, contactor or control board — with US repair cost ranges and safe DIY checks."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650+ if the condenser fan motor is replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series) and packaged units. Behavior varies: single-stage units use a contactor and dual-run capacitor, while variable-speed XV models use an ECM fan and inverter board with no start capacitor."
tags:
  - trane
  - air-conditioner
  - outdoor-unit
  - fan-motor
  - capacitor
parts:
  - name: Dual-run capacitor (motor + compressor)
    search: trane condenser dual run capacitor 45+5 mfd 440v
  - name: Condenser fan motor (universal replacement)
    search: universal condenser fan motor 1/4 hp 825 rpm
  - name: Contactor (single or double pole)
    search: hvac condenser contactor 2 pole 30 amp 24v coil
faq:
  - q: Why is my Trane outdoor fan not spinning but the compressor hums?
    a: This almost always points to a failed run capacitor. The compressor may try to start while the fan sits still, which risks overheating. Shut the system off and call a pro.
  - q: Can I push-start the outdoor fan with a stick?
    a: If it spins freely after a nudge, the capacitor is likely weak. It confirms the diagnosis but is not a fix — running it this way overheats the motor. Turn it off and replace the part.
  - q: Is it safe to keep running my AC if the outdoor fan is dead?
    a: No. Without airflow the compressor overheats and can fail — a much costlier repair. Turn the system off at the thermostat and breaker until it is fixed.
  - q: How much does a Trane condenser fan motor cost to replace?
    a: Expect roughly $300 to $650 installed, depending on whether an OEM or universal motor is used and local labor rates.
datePublished: 2026-08-15
dateModified: 2026-08-15
reviewedBy: ""
---

## What this code means

"Outdoor fan not spinning" isn't a blink code — it's a physical symptom on your Trane condenser (the unit outside). The large fan on top of the outdoor unit pulls air across the condenser coil to reject the heat your AC removes from the house. When it stops turning while the compressor runs (or tries to), heat has nowhere to go, pressures climb fast, and the compressor overheats.

On single-stage Trane units (XR, many XL models), the fan is driven by a standard PSC motor that depends on a **run capacitor** and is switched on by a **contactor**. On variable-speed Trane XV units, the fan is an **ECM/inverter-driven motor** commanded by a control board — these have no start capacitor, and a stalled fan usually means a motor, wiring, or board fault reported through the indoor diagnostics.

Because a running compressor with a dead fan can destroy itself quickly, this is a **pro-level** issue: diagnose safely, then repair it before running the system again.

## Common causes, ranked by probability

1. **Failed dual-run capacitor** — by far the most common cause. The fan side of the capacitor weakens or dies, so the motor can't start. Often the fan will spin if nudged.
2. **Seized or burned-out condenser fan motor** — worn bearings or an open winding. The motor won't turn even with good power and a good capacitor.
3. **Contactor not pulling in** — the relay that sends power to the outdoor unit is pitted, stuck, or not getting a 24V signal, so nothing outside runs.
4. **Tripped internal overload / thermal cutout** — the motor got hot (often from a dying capacitor) and shut itself off temporarily.
5. **Control or thermostat call issue** — no "cool" call reaching the outdoor unit, blown low-voltage fuse, or a tripped float switch cutting the circuit.
6. **Debris jamming the fan blade** — a stick, ice, or bent blade physically blocking rotation.
7. **Inverter/control board fault (XV variable-speed units)** — a failed ECM driver or communication error preventing the board from commanding the fan.

## Safe checks before you call anyone

Do only these — they don't require opening the sealed electrical panel or touching the capacitor (which stores a dangerous charge even with power off).

- **Thermostat:** Confirm it's set to COOL and the setpoint is well below room temperature. Replace weak batteries if it's battery-powered.
- **Breakers:** Check both the indoor air-handler/furnace breaker and the outdoor disconnect/breaker. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Air filter:** A clogged filter can cause freeze-ups that look like outdoor problems. Replace if dirty.
- **Indoor vents:** Make sure supply and return vents are open and unblocked.
- **Condensate:** A full drain pan can trip a float safety switch and shut the whole system down. Clear standing water and clean the drain line if accessible.
- **Look (don't touch) at the outdoor unit:** From outside, check for obvious debris, leaves, or ice on the fan blade. Do **not** reach in or open the panel.

If the fan is dead but the compressor is humming or the unit is hot, **turn the system off at the thermostat and breaker** and call a technician — don't keep resetting it.

## How a technician will diagnose it

Knowing the sequence helps you sanity-check a quote:

1. **Verify the call and power:** Confirms 24V at the contactor and 240V line power to the unit.
2. **Test the contactor:** Checks that the contacts close and pass voltage when energized.
3. **Test the run capacitor:** Measures microfarads (µF) against the rating printed on the label. A fan capacitor reading well below spec is condemned.
4. **Test the fan motor:** Checks windings for resistance/continuity, checks for a seized shaft, and measures amp draw against the nameplate.
5. **Check the motor overload:** Confirms whether a thermal cutout tripped and why.
6. **On XV variable-speed units:** Pulls fault codes from the indoor board/thermostat and tests the inverter/ECM driver — a very different (and pricier) path than a capacitor swap.

A good tech should show you the capacitor µF reading or motor amp draw before recommending a part — that's your proof the diagnosis is real.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan still, compressor hums, unit hot | Failed run capacitor | Turn off at breaker; don't run | Test & replace dual-run capacitor |
| Fan won't spin even when nudged | Seized/burned fan motor | Turn off; don't force it | Replace condenser fan motor |
| Nothing runs outside | Contactor or 24V signal fault | Reset breaker once | Test/replace contactor, trace 24V |
| Fan runs, then stops when hot | Weak capacitor / overload trip | Shut down to prevent damage | Replace capacitor; verify amp draw |
| Whole system dead, indoor & out | Blown low-voltage fuse / float switch | Clear condensate; check filter | Replace 3A fuse, find root cause |
| Blade physically blocked | Debris or bent blade | Remove visible loose debris (power off) | Straighten/replace blade, balance |
| XV unit shows fault code | Inverter/ECM board fault | Note the code; power down | Diagnose board/ECM, replace as needed |

## Repair costs

Honest US ballpark ranges, parts + labor:

- **Diagnostic / service call:** $80 – $180 (often credited toward the repair).
- **Run (dual-run) capacitor:** $150 – $350 installed. The part itself is cheap ($15–$45); most of the cost is labor and the trip.
- **Contactor replacement:** $150 – $350 installed.
- **Low-voltage fuse / minor wiring:** $100 – $250.
- **Condenser fan motor (PSC, universal or OEM):** $300 – $650 installed. OEM Trane motors run higher.
- **Fan blade replacement:** $150 – $350.
- **XV variable-speed inverter/control board:** $600 – $1,400+ installed — the reason these units are pricier to repair.

If the fan ran with a dead compressor for a while, ask the tech to verify the compressor is healthy before you approve a fan-only repair.

## Related codes

- **[Trane AC Not Cooling: Causes, Fixes & Repair Costs](/trane/air-conditioner/not-cooling)** — a dead outdoor fan is one of several reasons a Trane AC stops cooling; start here if cooling is the main complaint.
- **[Trane Furnace Code 90 (2 Blinks): Causes & Costs](/trane/furnace/code-90-2-blinks)** — for furnace-side (heating) diagnostics on Trane equipment.
