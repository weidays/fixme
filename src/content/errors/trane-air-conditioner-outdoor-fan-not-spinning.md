---
title: "Trane Outdoor Fan Not Spinning: Causes, Fixes & Costs"
code: "Outdoor fan not spinning"
description: "Trane AC outdoor fan won't spin? Causes include a bad capacitor, motor, or contactor. See safe DIY checks, tech diagnosis, and $12–$650 repair costs."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$12 DIY capacitor – $650 for a condenser fan motor replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series like 4TTR/4TTX/4TTV). Variable-speed XV units use ECM motors and differ from single-speed PSC designs."
tags:
  - trane
  - air-conditioner
  - condenser-fan
  - capacitor
  - contactor
parts:
  - name: Dual-run capacitor (matched to unit rating)
    search: dual run capacitor 45+5 uF 440v hvac
  - name: Condenser fan motor (OEM-matched)
    search: trane condenser fan motor 1/4 hp 825 rpm
  - name: Contactor (1 or 2 pole, 24V coil)
    search: hvac contactor 30 amp 24v coil single pole
datePublished: 2026-09-04
dateModified: 2026-09-04
reviewedBy: ""
faq:
  - q: Can I spin the fan with a stick to start it?
    a: Only a technician should do this as a diagnostic. If a nudge starts the fan, it almost always points to a failed run capacitor that needs replacement — it is not a fix.
  - q: Why does my compressor run but the outdoor fan doesn't?
    a: The most common cause is a dead capacitor section serving the fan. A seized motor, a bad relay, or wiring can also stop the fan while the compressor still hums.
  - q: Is it safe to keep running the AC with the fan stopped?
    a: No. Without the outdoor fan, the compressor overheats and can lock out or fail. Shut the system off at the thermostat until it's repaired to avoid costly damage.
---

## What this code means

"Outdoor fan not spinning" isn't a blink-code on the Trane control board — it's a symptom you'll notice: the indoor blower runs and the thermostat calls for cooling, but the large fan on top of the outdoor condenser unit sits still. Sometimes the compressor hums along beside it; other times the whole outdoor unit is silent.

The outdoor (condenser) fan pulls air across the coil to reject heat. When it stops, the compressor loses its cooling path, high-side pressure climbs fast, and the unit will overheat and trip its internal protector or lock out. That's why this is a **pro-level** problem: you can safely check a few things, but the core fixes involve high-voltage capacitors and line-voltage wiring inside the disconnect.

On variable-speed **Trane XV** condensers, the fan is an ECM motor driven by the control board, so behavior and diagnosis differ from the single-speed **XR/XL** units that use a run capacitor. Where it matters below, we call that out.

## Common causes, ranked by probability

1. **Failed run capacitor** — By far the most common. The dual-run capacitor stores the jolt the fan motor needs to start spinning. When the fan section fails, the motor buzzes or sits dead while the compressor may still run. (Single-speed PSC motors only — XV ECM units don't use a fan capacitor.)
2. **Seized or burned-out condenser fan motor** — Worn bearings lock up, or the windings fail. Often smells hot or shows a scorched wire.
3. **Bad contactor** — The relay that sends line voltage to the outdoor unit has pitted or stuck contacts, so power never reaches the fan (and often not the compressor either).
4. **Tripped high-pressure or internal overload** — A dirty coil or prior fan failure caused a lockout; the unit protects itself.
5. **Wiring / connection fault** — A loose spade terminal, chewed wire (rodents), or corroded connection at the fan motor.
6. **Debris jamming the blade** — A stick, ice, or the blade contacting the shroud.
7. **Control board or ECM fan fault (XV variable-speed units)** — On XV models the board commands the ECM fan; a board or motor-module fault stops it. Requires Trane-specific diagnostics.

## Safe checks before you call anyone

- **Thermostat:** Confirm it's set to COOL and the setpoint is well below room temp. Replace the batteries if it's battery-powered.
- **Air filter:** A clogged filter starves airflow and can cause protective shutdowns. Swap it if it's dirty.
- **Breaker:** Check both the indoor furnace/air-handler breaker and the outdoor AC breaker. Reset a tripped breaker **once**. If it trips again, stop and call a pro — repeated trips signal a real fault.
- **Outdoor disconnect:** Make sure the pull-out disconnect box near the condenser is fully seated.
- **Look, don't touch:** From outside, see if anything obvious is jamming the fan blade — leaves, a stick, ice buildup, or storm debris. Only clear it with the power off at the disconnect.
- **Supply/return vents:** Confirm indoor vents are open and unblocked.
- **Condensate:** A full condensate pan can trip a float switch and stop the system; check that the drain isn't clogged and any pan overflow switch isn't tripped.

**Do not** open the electrical access panel, touch the capacitor, or spin the fan by hand with power on. Capacitors hold a dangerous charge even with the breaker off.

## How a technician will diagnose it

A good tech follows a logical, verifiable path — use this to sanity-check the quote:

1. **Confirm the call for cooling** at the thermostat and verify 24V is reaching the contactor coil.
2. **Check the contactor** — measures line voltage in and out; inspects contacts for pitting; listens for the pull-in click.
3. **Test the run capacitor** with a meter (microfarad reading vs. the printed rating). A capacitor reading well below spec is condemned.
4. **Check the fan motor** — tests windings for continuity/shorts, checks for a locked rotor, and verifies the motor spins freely with power off.
5. **Inspect wiring** for loose, burned, or rodent-damaged connections at the motor and board.
6. **Check pressures and the internal overload** if the fan seized and the unit locked out from overheating.
7. **On XV units:** connects Trane service tools/diagnostics to read the board's fault data and confirm whether the ECM motor or control module failed.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan won't spin (a nudge starts it) | Failed run capacitor | Shut off at thermostat; don't run it | Test & replace matched dual-run capacitor |
| Fan dead, motor hot/smells burnt | Seized/burned fan motor | Power off; don't restart | Replace OEM-matched condenser fan motor |
| Whole outdoor unit silent, no click | Bad contactor or no 24V | Reset breaker once only | Test & replace contactor; trace 24V circuit |
| Unit ran, then shut off; won't restart | High-pressure lockout / overload | Turn off and let it cool; call pro | Find root cause (fan/coil), clear lockout |
| Fan blade won't turn, visible obstruction | Debris jamming blade | Clear debris with power off at disconnect | Inspect blade, bearings, shroud clearance |
| XV unit, no fan, board shows fault | ECM motor or board fault | Note any error indicators; call pro | Trane diagnostics; replace motor/module/board |

## Repair costs

Honest US ranges, parts + labor (single-speed units unless noted):

- **Run capacitor:** $12–$40 part DIY; **$120–$300** installed with a service call.
- **Contactor:** $10–$30 part; **$150–$350** installed.
- **Condenser fan motor:** **$300–$650** installed (OEM-matched motor plus labor and a new capacitor).
- **Wiring repair / loose connection:** **$100–$250** typically folded into a diagnostic call.
- **High-pressure lockout diagnosis + fix:** **$150–$400+** depending on the root cause.
- **XV ECM fan motor or control module:** **$500–$1,200+** — variable-speed parts and diagnostics cost more.
- **Diagnostic / service call:** **$80–$180**, often credited toward the repair.

A DIY capacitor swap is possible for experienced homeowners, but the capacitor must be safely discharged first and matched exactly to the unit's rating. If you're unsure, this is worth the pro visit.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — start here if the fan spins but you still get warm air, since airflow and refrigerant issues overlap.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for indoor blower/furnace-side faults that can mimic a "no cooling" complaint.
