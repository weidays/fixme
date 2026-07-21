---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan not spinning? Causes include a failed capacitor, motor, or contactor. Learn safe checks, fixes, and repair costs ($15–$650)."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$15 DIY capacitor – $650 if the condenser fan motor needs replacement"
appliesTo: "Most Carrier split-system condensers (Comfort, Performance, Infinity series) using single-phase PSC fan motors and dual run capacitors; ECM/variable-speed Infinity units differ and use board-controlled motors."
tags:
  - outdoor-fan
  - condenser
  - capacitor
  - fan-motor
  - contactor
parts:
  - name: Dual run capacitor
    search: "carrier dual run capacitor 45+5 uF 440v"
  - name: Condenser fan motor
    search: "carrier condenser fan motor 1/4 hp 208-230v"
  - name: Contactor (single/double pole)
    search: "carrier ac contactor 30 amp 24v coil"
datePublished: 2026-07-21
dateModified: 2026-07-21
reviewedBy: ""
faq:
  - q: Can I run my Carrier AC if the outdoor fan won't spin?
    a: No. Without the condenser fan, the compressor overheats and head pressure climbs fast, which can trip the compressor or destroy it. Shut the system off at the thermostat until it's repaired.
  - q: Why does the fan start if I push it with a stick?
    a: A fan that spins only after a manual push almost always means a failed or weak run capacitor. The capacitor gives the motor the torque it needs to start; replacing it is a common, inexpensive fix — but it's a pro job on a charged, high-voltage unit.
  - q: How much does it cost to fix a Carrier outdoor fan that won't spin?
    a: A capacitor runs about $15–$60 in parts or $150–$300 installed. A new condenser fan motor typically costs $350–$650 installed. A contactor is roughly $150–$300 installed.
---

## What this code means

"Outdoor fan not spinning" is not a Carrier fault code — it's a physical symptom. On most Carrier split systems, the outdoor unit (the condenser) contains a compressor and a fan motor. That fan pulls air across the condenser coil to reject the heat your system pulled out of the house.

When the fan blade sits still but the compressor is trying to run (you may hear a hum or feel the unit vibrating), the system cannot shed heat. Head pressure spikes, the compressor overheats, and within minutes the unit can trip its internal overload or, worse, damage the compressor. That's why this is rated a **pro** repair: the fix is usually simple, but the diagnosis involves 240V power and a capacitor that can hold a dangerous charge even with the disconnect pulled.

On variable-speed **Infinity** systems with ECM condenser fan motors, a stopped fan is more likely to log a fault at the wall control or outdoor board rather than just sit and hum. Those motors are electronically commutated and don't use a start capacitor, so the causes below apply mainly to standard single-phase PSC-motor units.

## Common causes, ranked by probability

1. **Failed run capacitor.** The single most common cause. The dual capacitor feeds both the fan motor and compressor a starting boost. When the fan side weakens, the blade won't start on its own but may spin if nudged. Cheap part, high-voltage hazard.
2. **Failed condenser fan motor.** Worn bearings, a burned winding, or an internal open. The motor may hum, get hot, or do nothing at all.
3. **Bad contactor.** The contactor is the relay that sends 240V to the fan and compressor. Pitted or stuck contacts can interrupt power to the fan.
4. **Seized fan bearing or obstruction.** Debris, a bent blade, or dried-out bearings physically stop the blade. Motor may hum against the jam.
5. **Tripped breaker or blown low-voltage fuse.** Sometimes the fan doesn't run because the whole outdoor unit is dead. (See safe checks.)
6. **Failed outdoor control board (Infinity/Performance).** On board-controlled and ECM units, a fault in the control board or the 24V signal can stop the fan while the rest of the system tries to run.
7. **Loose or corroded wiring.** A disconnected fan lead or a corroded terminal at the capacitor or motor.

## Safe checks before you call anyone

These are the only checks a homeowner should do. **Do not open the electrical panel on the condenser** — the capacitor stores a lethal charge.

- **Set the thermostat to cool** and lower the setpoint several degrees so there's a real call for cooling. Confirm the indoor blower runs.
- **Check the indoor thermostat batteries** if it's battery-powered — a dying thermostat can send an erratic signal.
- **Check your breakers.** Look for a tripped double-pole breaker labeled AC/condenser in the main panel. Reset it once. If it trips again, stop and call a pro.
- **Check the outdoor disconnect** (the box on the wall next to the condenser). Make sure it's fully seated. Do not open it or touch anything inside.
- **Change or clean the air filter.** A clogged filter causes freeze-ups and pressure problems that mimic outdoor issues.
- **Look and listen from a distance.** Is the blade physically blocked by leaves or debris on top of the unit? Clear visible debris from the top grille only — never reach inside.
- **Feel for airflow at supply vents** and confirm the outdoor unit is at least humming or vibrating.

If the fan still won't spin, turn the system **off at the thermostat** and call a technician. Running a condenser with a dead fan can quickly kill the compressor.

## How a technician will diagnose it

A good tech follows a repeatable sequence — knowing it helps you sanity-check a quote:

1. **Confirm the call for cooling** and verify 24V is reaching the contactor coil.
2. **Pull the disconnect and discharge the capacitor** safely before touching anything.
3. **Test the run capacitor** with a meter against its rated microfarads (µF). An out-of-spec fan side confirms a bad cap.
4. **Check the contactor** for pitted contacts and verify it pulls in and passes 240V.
5. **Test the fan motor** windings for continuity/resistance and check the internal overload.
6. **Spin the blade by hand** (power off) to feel for a seized bearing.
7. On **Infinity/ECM units**, read fault history at the wall control and check the outdoor board and motor communications.

Expect a diagnostic fee of roughly **$90–$180**, often credited toward the repair.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but won't start; spins if nudged | Failed run capacitor | Shut off at thermostat; don't run it | Discharge and replace capacitor, verify µF |
| Fan dead, compressor hums, unit hot | Bad fan motor or overload | Shut off; don't run it | Test windings, replace fan motor |
| Whole outdoor unit dead | Tripped breaker / bad contactor | Reset breaker once | Test contactor, low-voltage fuse, wiring |
| Fan physically won't turn | Debris or seized bearing | Clear visible debris from top only | Free obstruction or replace motor |
| Fan starts then stops repeatedly | Weak motor or capacitor | Shut off; don't run it | Amp-draw test, replace failing component |
| Infinity fault logged, fan still | ECM motor or control board | Note the fault code shown | Read board data, replace motor/board |

## Repair costs

Honest US ranges, parts plus labor:

- **Run/dual capacitor:** $15–$60 part; **$150–$300 installed.**
- **Contactor:** $10–$40 part; **$150–$300 installed.**
- **Condenser fan motor (PSC):** $150–$350 part; **$350–$650 installed.**
- **ECM/variable-speed fan motor (Infinity):** $300–$700 part; **$600–$1,100 installed.**
- **Outdoor control board (Infinity/Performance):** $200–$600 part; **$450–$900 installed.**
- **Diagnostic fee:** $90–$180, often waived if you proceed with the repair.

Prices vary by region, unit age, and parts availability. If your Carrier unit is still under its 10-year parts warranty (with registration), you may only pay labor — ask the tech to check the serial number.

## Related codes

- **[Carrier AC Not Cooling: Causes, Fixes & Repair Costs](/carrier/air-conditioner/not-cooling)** — a stopped outdoor fan is one of several reasons a system stops cooling.
- **[Carrier AC Frozen Evaporator Coil: Causes & Fixes](/carrier/air-conditioner/frozen-evaporator-coil)** — airflow and pressure problems that overlap with condenser issues.
- **[Carrier Furnace Code 31: Causes, Fixes & Costs](/carrier/furnace/code-31)** — for pressure-switch faults on the heating side.
