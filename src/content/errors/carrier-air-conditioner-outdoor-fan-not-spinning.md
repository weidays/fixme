---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier outdoor fan not spinning? Causes include a failed capacitor, motor, contactor or control board — fixes, safe checks, and US repair costs."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $700+ if the condenser fan motor and capacitor both need replacement"
appliesTo: "Most Carrier split-system condensers (Comfort, Performance, Infinity series) with single-phase PSC or ECM outdoor fan motors; symptoms vary by board and motor type"
tags:
  - carrier
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: Dual-run capacitor
    search: carrier dual run capacitor 45/5 uf 440v
  - name: Condenser fan motor
    search: carrier condenser fan motor 1/4 hp 230v
  - name: Contactor 1-pole 30A
    search: ac condenser contactor 30 amp 1 pole 24v coil
datePublished: 2026-06-16
dateModified: 2026-06-16
reviewedBy: ""
faq:
  - q: Can I push the outdoor fan to start it with a stick?
    a: A fan that spins freely once nudged usually has a dead start capacitor. The push trick confirms the diagnosis but is not a repair — the capacitor must be replaced, and you should never keep operating the unit this way because the motor will overheat and fail.
  - q: Why is the compressor running but the outdoor fan is not?
    a: A shared dual-run capacitor can lose only its fan terminal, so the compressor runs while the fan stays still. This causes high-pressure trips and can destroy the compressor within minutes, so shut the system off and call a technician.
  - q: Is it safe to run my AC if the outdoor fan won't spin?
    a: No. Without the condenser fan, the system cannot reject heat, pressures climb fast, and the compressor can overheat or trip. Turn the system off at the thermostat and disconnect until it is repaired.
  - q: How much does a Carrier condenser fan motor cost to replace?
    a: Expect roughly $350 to $700 installed depending on motor horsepower, ECM versus PSC type, and labor rates. The matching run capacitor is usually replaced at the same time for an extra $20 to $80 in parts.
---

## What this code means

"Outdoor fan not spinning" is a symptom, not a stored Carrier fault code — most single-stage Carrier condensers don't store codes for this at all. The outdoor (condenser) fan sits on top of the unit outside and pulls air across the coil to dump the heat your system pulled from the house. When it stops, the compressor may keep running and refrigerant pressures spike quickly.

On Infinity and some Performance variable-speed systems, the control board or outdoor communicating module **can** flag a fan or motor fault — but the exact code wording varies by board generation, so check the displayed code against your specific unit's manual rather than assuming.

If the fan is dead while the compressor hums or buzzes, treat it as urgent: shut the system off to protect the compressor.

## Common causes, ranked by probability

1. **Failed run capacitor** — by far the most common. The dual-run capacitor gives the fan motor its starting torque. When it weakens, the fan won't start (but spins freely if nudged) and hums.
2. **Failed condenser fan motor** — worn bearings, an open winding, or a tripped internal thermal cutout. Often the motor is hot, seized, or won't run even with a good capacitor.
3. **Contactor not pulling in** — if the contactor is bad or its 24V coil isn't energized, neither the compressor nor fan gets power.
4. **Tripped or stuck motor thermal overload** — a hot motor shuts itself off and may restart after cooling, then fail again.
5. **Debris or ice jamming the blade** — leaves, a stick, or a bent blade physically blocking rotation.
6. **Control board or relay fault** — more common on Infinity/communicating systems where the board controls fan speed directly.
7. **Loss of high/low voltage** — blown low-voltage fuse, failed transformer, or a tripped disconnect/breaker.

## Safe checks before you call anyone

These are the only steps a homeowner should do without opening the sealed electrical compartment:

- **Thermostat:** Confirm it's set to COOL and below room temperature so the system is actually calling.
- **Air filter:** A badly clogged filter can cause icing and protective shutdowns; replace if dirty.
- **Breaker:** Check the AC breaker in your panel and reset it once if tripped. If it trips again, stop and call a pro.
- **Outdoor disconnect:** Look at the pull-out disconnect box near the condenser — it should be fully seated.
- **Visible blockage:** With the system OFF, look through the top grille for leaves, sticks, or ice on the blade. Clear loose debris only.
- **Condensate:** A full condensate drain or float switch can stop the system; check for standing water at the indoor unit.

Do **not** open the condenser's electrical panel, discharge a capacitor, or spin the fan with the power on. Capacitors hold a dangerous charge.

## How a technician will diagnose it

A good tech follows a logical sequence so you can sanity-check the quote:

1. **Verifies the call** — confirms 24V is reaching the contactor coil.
2. **Checks the contactor** — measures voltage across the load side; confirms it's pulling in.
3. **Tests the capacitor** — uses a meter to measure microfarads against the rated value (e.g., 5 μF fan side). A reading well below spec confirms a bad cap.
4. **Tests the motor** — checks windings for opens/shorts and resistance to ground, and feels for a seized bearing or tripped thermal.
5. **Checks voltage supply** — confirms 230V at the disconnect and a good low-voltage transformer/fuse.
6. **On communicating systems** — reads board fault history and checks the ECM module and harness.

Expect a diagnostic fee of roughly $80–$180, often credited toward the repair.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but won't start; spins if nudged | Weak/failed run capacitor | Shut system off | Test μF, replace dual-run capacitor |
| Fan dead, compressor humming | Capacitor fan terminal open | Turn off immediately to protect compressor | Replace capacitor, verify compressor health |
| Fan and compressor both dead | Contactor or low-voltage fault | Check breaker/disconnect | Test contactor coil, transformer, 24V fuse |
| Fan blade physically blocked | Debris or bent blade | Clear loose debris, power off | Replace bent blade, inspect motor |
| Fan runs hot then stops, restarts later | Motor thermal overload / failing motor | Stop running unit | Replace condenser fan motor |
| Communicating system shows fan fault | ECM module / board fault | Note the displayed code | Diagnose board, ECM, harness |

## Repair costs

Honest US ranges, parts plus labor:

- **Run capacitor replacement:** $150–$350
- **Contactor replacement:** $150–$350
- **Condenser fan motor (PSC):** $350–$650
- **Condenser fan motor + capacitor together:** $400–$700+
- **ECM motor / module (communicating units):** $500–$1,000+
- **Low-voltage transformer or fuse:** $120–$300
- **Diagnostic fee:** $80–$180 (often credited)

Variable-speed Infinity components cost more than standard PSC parts, and labor rates vary widely by region.

## Related codes

- **Carrier AC Not Cooling: Causes, Fixes & Repair Costs** — broader troubleshooting when cooling is weak or absent.
- **Carrier Furnace Code 31: Causes, Fixes & Costs** — pressure switch faults on the heating side.
- **Carrier Furnace Code 13** and **Code 33** / **Code 34** — furnace-side lockout and ignition diagnostics.
