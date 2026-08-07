---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a failed capacitor, motor, or contactor. See safe checks, tech diagnosis and $0–$650 repair costs."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $650 if the condenser fan motor and capacitor are replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series and 2/4TTx model families). Variable-speed XV units use an ECM fan motor; single-stage units use a PSC motor with a run capacitor — parts and diagnosis differ."
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: Dual run capacitor (match microfarad rating)
    search: trane dual run capacitor 45/5 uf
  - name: Condenser fan motor (match HP, RPM, voltage)
    search: condenser fan motor 1/4 hp 208-230v
  - name: Contactor (single or double pole)
    search: hvac condenser contactor 30 amp 24v coil
datePublished: 2026-08-07
dateModified: 2026-08-07
reviewedBy: ""
faq:
  - q: Can I run my Trane AC with the outdoor fan not spinning?
    a: No. Running the compressor without the condenser fan lets pressures and temperatures spike, which can overheat and permanently damage the compressor. Shut the system off at the thermostat.
  - q: Why does the fan start if I push it with a stick?
    a: If the fan runs after a manual nudge, the run capacitor has almost certainly failed. The motor can't generate enough starting torque on its own. This is a common, well-documented capacitor symptom.
  - q: Is a stuck outdoor fan dangerous?
    a: It won't hurt you if you leave the unit off, but continuing to run cooling can destroy a compressor that costs far more than the fan repair. Turn it off and call a pro.
---

## What this code means

"Outdoor fan not spinning" is not a blink code — it's a physical symptom. On a Trane split-system air conditioner, the outdoor unit (the condenser) contains a fan that pulls air across the coil to reject heat. When the compressor runs, that fan should spin every time.

If you hear the compressor humming but the fan blade is still — or the whole outdoor unit is silent while the indoor blower runs — the fan circuit has a fault. Most Trane condensers don't display a fault code for this on the outdoor unit; the failure shows up as poor cooling, a humming outdoor unit, or a high-pressure lockout on communicating XV models.

This is rated **pro** because the most likely fixes involve a capacitor that can hold a lethal charge and 240-volt line wiring. The safe checks below are worth doing first, but the repair itself belongs to a technician for most homeowners.

## Common causes, ranked by probability

1. **Failed run (or dual) capacitor** — By far the most common cause. The capacitor gives the fan motor its starting torque. When it weakens or fails, the motor hums but won't turn, or spins only if nudged. Capacitors are consumables that degrade with heat and age.
2. **Failed condenser fan motor** — Bearings seize or windings burn out. The motor may be hot, silent, or tripping on its internal overload.
3. **Contactor not pulling in or welded** — The contactor is the relay that sends 240V to the compressor and fan. If it isn't closing, nothing outside runs. If contacts are pitted, you may get intermittent operation.
4. **Tripped or failed float switch / high-pressure control** — On some setups a condensate or pressure safety opens the 24V circuit and stops the outdoor unit.
5. **Debris or ice jamming the blade** — Sticks, a bird, or a bent blade can physically block rotation and stall the motor.
6. **Loss of 24V control signal** — A bad transformer, tripped low-voltage fuse, or thermostat wiring fault can prevent the contactor from ever energizing.
7. **Control board fault (communicating XV models)** — Variable-speed Trane units run the ECM fan off a control board; a board or module fault can stop the fan while showing an error on the thermostat.

## Safe checks before you call anyone

These are the only checks a homeowner should do. **Do not open the outdoor electrical panel** — the capacitor can hold a dangerous charge even with power off.

- **Set the thermostat correctly.** Confirm it's on COOL and set several degrees below room temperature. If it's a wireless/battery thermostat, replace the batteries.
- **Check the indoor air filter.** A clogged filter can cause the system to trip safeties. Replace if dirty.
- **Check breakers.** Look for a tripped breaker for the AC (there's often a separate indoor and outdoor breaker) in your main panel. Reset once. If it trips again, stop and call a pro.
- **Check the outdoor disconnect.** The pull-out disconnect box on the wall near the condenser may have been bumped or left partly out. Push it firmly back in if it's loose.
- **Look for visible blockage.** With the unit OFF at the thermostat and breaker, look through the top fan grille for leaves, sticks, or ice on the blade. Do not reach in or force the blade.
- **Check the condensate drain.** A backed-up drain can trip a float switch and shut the unit down. Clear standing water at the indoor drain pan/line if accessible.

If the fan still won't spin after these steps, turn the system OFF and call a technician. Do not repeatedly reset a unit that keeps tripping, and never nudge the fan by hand as a way to keep running.

## How a technician will diagnose it

A good tech follows a logical sequence — use this to sanity-check any quote:

1. **Confirms the symptom** and verifies 240V is present at the disconnect.
2. **Checks for 24V** at the contactor coil to confirm the thermostat is calling and the control circuit is intact.
3. **Tests the contactor** — does it pull in, and are the contacts passing voltage to the fan and compressor?
4. **Tests the capacitor** with a meter, comparing measured microfarads to the rating printed on it. A weak or open cap is the smoking gun.
5. **Tests the fan motor** — checks winding resistance, spins the blade by hand for seized bearings, and confirms it gets voltage but won't run.
6. **Checks safeties** — high-pressure switch, float switch, and low-voltage fuse.
7. **On XV/communicating units**, reads the thermostat error code and inspects the outdoor control board/module.

Expect a diagnostic/service-call fee of roughly **$90–$200**, often credited toward the repair.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan still | Failed run capacitor | Turn unit off; do not nudge blade | Test and replace capacitor |
| Fan spins if pushed by hand | Weak capacitor | Turn off; don't rely on nudging | Replace capacitor |
| Outdoor unit totally silent | Contactor not closing or no 24V | Check breaker/disconnect once | Test contactor, transformer, fuse |
| Motor hot, buzzing, won't turn | Seized/failed fan motor | Shut off to protect compressor | Replace condenser fan motor |
| Fan blocked by debris/ice | Physical obstruction | Power off, look for visible junk | Clear jam, inspect blade/motor |
| Intermittent fan operation | Pitted contactor | Turn off between cycles | Replace contactor |
| No outdoor operation + thermostat error (XV) | Control board/module fault | Note the code | Diagnose/replace board |

## Repair costs

Honest US installed-price ranges (parts + labor). Your quote varies by region and model:

- **Run/dual capacitor:** $150–$350
- **Contactor:** $150–$300
- **Condenser fan motor:** $350–$650 (universal replacement; genuine Trane parts run higher)
- **Fan motor + capacitor together:** $450–$700 (often replaced as a set)
- **Low-voltage fuse / transformer:** $100–$300
- **Clearing a physical jam:** $90–$200 (basically the service call)
- **Control board / ECM module (XV communicating units):** $500–$1,200+

If a tech quotes a full compressor or condenser replacement for a non-spinning fan, get a second opinion — the fan circuit is usually a much cheaper fix.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — a stalled outdoor fan is one common reason a Trane won't cool; that page covers the broader diagnosis.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for indoor furnace/air-handler fault codes rather than outdoor condenser symptoms.
