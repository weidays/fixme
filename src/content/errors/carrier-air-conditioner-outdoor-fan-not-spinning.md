---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan not spinning? Common causes include a failed run capacitor, bad fan motor, contactor, or control board — plus fixes and repair costs."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650+ if the condenser fan motor and capacitor are replaced"
appliesTo: "Most Carrier split-system central AC condensers (Comfort, Performance, Infinity series) using a single-run or dual-run capacitor and 24V contactor; behavior varies by model and whether a variable-speed ECM fan is used."
tags:
  - carrier
  - air-conditioner
  - outdoor-fan
  - condenser
  - capacitor
parts:
  - name: Dual run capacitor (match microfarad/voltage rating)
    search: dual run capacitor 45+5 uf 440v hvac
  - name: Condenser fan motor
    search: carrier condenser fan motor replacement 1/4 hp
  - name: Contactor (single or double pole 24V coil)
    search: 24v ac contactor 30 amp 2 pole condenser
datePublished: 2026-07-04
dateModified: 2026-07-04
reviewedBy: ""
faq:
  - q: Can I run my AC if the outdoor fan is not spinning?
    a: No. Running the compressor without the condenser fan lets pressures and temperatures spike, which can permanently damage the compressor within minutes. Shut the system off at the thermostat.
  - q: Is a bad capacitor the most likely cause?
    a: For a fan that hums but won't spin, yes — the run capacitor is the single most common failure. It is an inexpensive part, but replacement should be done by a pro because capacitors store a dangerous charge.
  - q: Why does the fan start if I spin it by hand?
    a: A fan that starts after a manual push almost always has a weak or dead run capacitor that can no longer provide starting torque. Do not do this yourself — the unit must be off and the capacitor discharged first.
  - q: How much does it cost to fix a Carrier outdoor fan that won't spin?
    a: A capacitor runs roughly $150–$350 installed, a contactor $150–$400, and a full condenser fan motor $400–$650+ depending on the model and labor rates in your area.
---

## What this code means

"Outdoor fan not spinning" is a symptom, not a stored Carrier fault code. Your indoor system may be calling for cooling and the compressor may even be trying to run, but the fan blade on top of the outdoor condenser unit is not turning. That fan pulls air across the condenser coil to reject the heat your system is removing from the house.

When the fan stops but the compressor keeps running, head pressure climbs fast. Modern Carrier units have a high-pressure switch that should trip and protect the compressor — but you should never rely on that as a substitute for shutting the system down. **If the outdoor fan won't spin, turn cooling off at the thermostat until it's diagnosed.**

On variable-speed Infinity systems with an ECM condenser fan, a stopped fan may instead register as a communication or motor fault on the wall control. Behavior varies by model, so check your specific unit's display.

## Common causes, ranked by probability

1. **Failed run capacitor** — The most common cause by far. The fan hums but won't start, or starts only if nudged. On dual-run capacitors, the fan section can fail while the compressor section still works.
2. **Failed condenser fan motor** — Worn bearings, an open winding, or an overheated motor that has shut off on its internal thermal overload. The motor may be hot to the touch or seized.
3. **Contactor not pulling in** — A pitted, stuck, or failed contactor won't send power to the fan and compressor. Sometimes you'll hear no hum at all.
4. **Obstructed or seized fan blade** — Debris, ice, or a bent blade physically jamming rotation. Grass, leaves, or a stick lodged in the fan is more common than people expect.
5. **Control board or relay fault** — On boards or Infinity systems that switch the fan, a failed relay or board output can leave the fan dead while everything else looks fine.
6. **Loss of 24V control signal or blown low-voltage fuse** — No call reaching the contactor coil means the whole condenser stays off, fan included.
7. **Tripped breaker or open disconnect** — No power to the outdoor unit at all.

## Safe checks before you call anyone

These are the only checks a homeowner should do. Do **not** open the condenser electrical panel — capacitors hold a lethal charge.

- **Thermostat:** Confirm it's set to Cool and the target temperature is well below room temperature. Replace batteries if it's battery-powered.
- **Breaker:** Check the outdoor unit's breaker in your main panel. If it's tripped, reset it once. If it trips again, stop and call a pro.
- **Outdoor disconnect:** The pull-out box on the wall near the condenser should be fully seated.
- **Air filter:** A clogged indoor filter can cause freeze-ups and nuisance shutdowns that mimic outdoor problems — replace if dirty.
- **Visible obstructions:** With the system OFF at the breaker, look through the top grille for leaves, a stick, or ice on the fan blade. Clear only what you can reach without opening any panels.
- **Ice on the unit:** If the coil or fan is iced over, turn off cooling and run the fan-only mode to thaw it, then investigate airflow (see our Frozen Evaporator Coil guide).

If the fan still won't spin after these, it's a pro repair.

## How a technician will diagnose it

Knowing the sequence helps you sanity-check a quote:

1. **Verify the call:** Confirms 24V is present at the contactor coil during a cooling call.
2. **Check contactor:** Measures line voltage across the contactor and confirms it pulls in and passes power.
3. **Test the run capacitor:** Discharges it safely, then reads microfarads against the rating printed on the can. A capacitor reading well below spec is condemned.
4. **Test the fan motor:** Checks windings for continuity/shorts, verifies it's not open on thermal overload, and checks that it's getting voltage but not running.
5. **Inspect the blade and bearings:** Confirms free rotation with power off.
6. **Check the board (if equipped):** On Infinity/ECM systems, reads fault codes at the wall control and checks the motor's communication and power.

A good tech tests the capacitor and motor *before* recommending a full motor replacement — a fan that runs fine on a new capacitor doesn't need a new motor.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but doesn't spin; starts if pushed | Failed run capacitor | Turn system off; don't push blade | Discharge & replace capacitor, verify rating |
| No hum, compressor also silent | Contactor not pulling in / no 24V | Check breaker & disconnect | Test contactor, coil, low-voltage fuse |
| Fan dead, motor hot to touch | Motor thermal overload / failed motor | Shut off, let cool | Test windings, replace fan motor |
| Blade won't turn by hand (power off) | Seized bearings or obstruction | Clear visible debris only | Replace motor if seized |
| Fan won't run on Infinity, wall control shows fault | ECM motor or board fault | Note the fault code shown | Diagnose comm/board/ECM motor |
| Whole condenser dead | Tripped breaker / open disconnect | Reset breaker once | Trace power loss, check board |

## Repair costs

Honest US ranges, parts plus labor. Regional rates and model complexity move these numbers.

- **Run capacitor:** $150–$350 installed. The part is cheap; you're paying for a safe, correct diagnosis and install.
- **Contactor:** $150–$400 installed.
- **Condenser fan motor (standard PSC):** $400–$650+, including a matching capacitor.
- **ECM/variable-speed fan motor (Infinity):** $600–$1,200+ — these motors and their modules are expensive.
- **Control board:** $400–$900+ depending on model.
- **Diagnostic/service call:** $90–$200, often credited toward the repair.

If your unit is more than 12–15 years old and needs a motor plus board, ask your tech to compare repair cost against replacement.

## Related codes

- **Carrier AC Not Cooling: Causes, Fixes & Repair Costs** — broader troubleshooting when the whole system isn't cooling.
- **Carrier AC Frozen Evaporator Coil: Causes & Fixes** — airflow and freeze issues that can accompany fan or pressure problems.
