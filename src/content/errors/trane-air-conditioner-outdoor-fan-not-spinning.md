---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning is usually a bad capacitor, motor, or contactor. Learn safe checks, diagnosis, and repair costs from $15 DIY to $700."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$15 DIY capacitor – $700 if the condenser fan motor is replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series) using a single-phase PSC fan motor with a run capacitor; variable-speed XV20i/XV18 ECM units differ and report faults to the board."
tags:
  - outdoor-fan
  - capacitor
  - condenser
  - contactor
  - fan-motor
parts:
  - name: Dual run capacitor (match µF/voltage)
    search: dual run capacitor 45+5 uF 440v
  - name: Condenser fan motor (1/4 HP, match specs)
    search: condenser fan motor 1/4 hp 825 rpm 208-230v
  - name: Fan blade
    search: condenser fan blade replacement 5 blade
datePublished: 2026-06-29
dateModified: 2026-06-29
reviewedBy: ""
faq:
  - q: Can I run my Trane AC if the outdoor fan won't spin?
    a: No. Without the condenser fan, the compressor overheats and pressures spike, which can destroy the compressor in minutes. Shut the system off at the thermostat until it's fixed.
  - q: Why does my outdoor fan start if I push the blade with a stick?
    a: That classic symptom points to a failed run capacitor. The motor needs a start boost it's no longer getting. Never reach into a running unit — diagnose with power off and have a pro replace the capacitor.
  - q: How much does a Trane condenser fan capacitor cost to replace?
    a: The part is typically $15–$40, and a pro replacement runs $150–$350 with diagnostics. It's the most common and cheapest cause of a non-spinning fan.
  - q: Is a stuck outdoor fan a refrigerant problem?
    a: Rarely. A non-spinning fan is almost always electrical — capacitor, motor, or contactor. Refrigerant issues cause poor cooling, not a stopped fan, though both can trip the compressor on high pressure.
---

## What this code means

"Outdoor fan not spinning" describes the condenser fan — the fan on top of (or beside) your outdoor Trane unit — failing to turn while the system is calling for cooling. On most Trane split systems this isn't a numeric fault code; it's a physical symptom you observe.

The outdoor fan's job is to pull air across the condenser coil so the refrigerant can dump heat. If it stops, the compressor keeps running, pressure and temperature climb fast, and the unit will either trip on its internal high-pressure or thermal protection — or, worst case, damage the compressor. That's why this is rated **pro**: even when the fix is a cheap part, running the system this way is risky.

On variable-speed Trane units (XV20i, XV18, some XV models with ECM fan motors), a stopped fan may instead register as a board fault or communicating error, and the diagnosis differs — those are not simple capacitor jobs.

## Common causes, ranked by probability

1. **Failed run capacitor** — by far the most common. The dual capacitor that boosts the fan (and compressor) weakens or fails, so the motor hums but won't start. A telltale sign: the fan starts if nudged.
2. **Burned-out condenser fan motor** — bearings seize or windings fail. The motor may be hot, silent, or tripping on its internal overload.
3. **Failed or pitted contactor** — the relay that sends power to the outdoor unit isn't closing properly, so neither fan nor compressor gets full voltage.
4. **Debris or ice jamming the blade** — sticks, leaves, or a bent blade physically block rotation.
5. **Tripped breaker or blown low-voltage fuse** — no power to the condenser at all.
6. **Loose, corroded, or chewed wiring** — rodent damage or a loose spade connector at the motor or capacitor.
7. **Bad fan blade / loose set screw** — the blade spins free on the shaft or is cracked.
8. **Control board or ECM fault (variable-speed units only)** — the board isn't commanding the motor, or the motor module has failed.

## Safe checks before you call anyone

These are the only checks a homeowner should do. **Do not** open the electrical panel on the condenser, touch the capacitor, or reach near the fan blade — capacitors hold a dangerous charge even with power off.

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. Replace dead thermostat batteries if it's battery-powered.
- **Air filter:** A clogged filter can cause freeze-ups and odd cycling. Replace it if dirty.
- **Breakers:** Check both the indoor (air handler/furnace) and the outdoor AC disconnect breakers. Reset a tripped breaker **once**. If it trips again, stop and call a pro — don't keep resetting.
- **Indoor vents:** Make sure supply and return vents are open and unblocked.
- **Condensate:** Check that the condensate drain pan isn't overflowing and the safety float switch (if present) hasn't shut the system down.
- **Visible debris (power OFF):** Turn the system off at the thermostat and the outdoor disconnect, then look — without reaching in — for obvious leaves or sticks near the top grille.
- **Listen:** If you hear a hum from the outdoor unit but no fan motion, that strongly suggests a capacitor. Note it for the technician, shut the unit off, and call.

If the fan won't spin, **leave the system off** to protect the compressor.

## How a technician will diagnose it

A good Trane tech follows a logical path — use this to sanity-check a quote:

1. **Verify the call for cooling** and confirm 24V is reaching the contactor coil.
2. **Test the contactor** — checks that it pulls in and that line voltage passes through cleanly without pitting.
3. **Discharge and test the run capacitor** with a meter, comparing the measured microfarads (µF) to the rating printed on the can. Out-of-spec = replace.
4. **Check the fan motor** — measures winding resistance, tests for an open internal overload, and spins the blade by hand to feel for seized bearings.
5. **Inspect wiring and connections** at the motor, capacitor, and contactor for burns, corrosion, or rodent damage.
6. **On variable-speed/ECM units:** read board fault codes or use Trane's communicating diagnostics, and test the motor module rather than a capacitor.
7. **Confirm the real fix:** after a capacitor or motor swap, they verify the fan starts on its own and check operating pressures and amp draw.

A quote that jumps straight to a full motor or compressor replacement without testing the capacitor first deserves a second opinion.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but doesn't spin; starts if nudged | Failed run capacitor | None — leave it off, call pro | Discharge & replace capacitor, verify µF |
| Fan silent, compressor runs, unit trips off | Bad fan motor or overload | Shut off to protect compressor | Test windings, replace motor |
| Neither fan nor compressor runs | Contactor or power issue | Reset breaker once; check disconnect | Test/replace contactor, trace power |
| Fan blade blocked or bent | Debris or damaged blade | Power off; note visible debris | Clear jam, straighten/replace blade |
| Fan won't start after recent storm | Tripped breaker or wiring damage | Reset breaker once only | Inspect for surge/rodent damage |
| Variable-speed unit shows board fault | ECM motor or control board | Note the fault code, call pro | Run Trane diagnostics, replace module |

## Repair costs

Ranges are typical US prices including diagnostic fees; your area and unit may vary.

- **Diagnostic / service call:** $80–$180 (often credited toward the repair)
- **Run capacitor (part only, DIY):** $15–$40
- **Run capacitor replacement (pro):** $150–$350
- **Contactor replacement:** $150–$350
- **Condenser fan motor + capacitor:** $300–$700
- **Fan blade replacement:** $80–$250
- **Wiring repair / rodent damage:** $150–$450
- **ECM module / control board (variable-speed units):** $400–$900+

The capacitor is the cheapest and most common fix. If a contractor recommends a new motor, ask whether the capacitor was tested first — a weak capacitor can mimic and even cause motor failure.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — if the fan spins but the house still isn't cooling, start here.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for furnace-side ignition/draft faults, unrelated to the outdoor fan.
