---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan won't spin? Causes include a bad capacitor, fan motor or contactor. Fixes and repair costs from $0 DIY to $650."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 for a new condenser fan motor"
appliesTo: "Most Carrier split-system condensers (Comfort, Performance, Infinity series) using single-phase PSC or ECM outdoor fan motors; ECM/variable-speed Infinity units diagnose differently and log board faults."
tags:
  - carrier
  - air-conditioner
  - outdoor-fan
  - condenser-fan-motor
  - capacitor
parts:
  - name: Dual run capacitor
    search: carrier ac dual run capacitor 45+5 uf 440v
  - name: Condenser fan motor
    search: carrier condenser fan motor 1/4 hp 208-230v
  - name: Contactor (single pole)
    search: 30 amp single pole contactor 24v coil
datePublished: 2026-07-13
dateModified: 2026-07-13
reviewedBy: ""
faq:
  - q: Can I run my Carrier AC if the outdoor fan isn't spinning?
    a: No. Running the compressor without the condenser fan lets pressures and temperatures spike, which can overheat and permanently damage the compressor. Shut the system off at the thermostat.
  - q: Why does my Carrier fan hum but not turn?
    a: A humming motor that won't start is the classic sign of a failed run capacitor. The motor gets power but lacks the phase shift needed to begin rotating, so it just buzzes and gets hot.
  - q: Is a bad capacitor a DIY fix on a Carrier AC?
    a: Capacitors store a dangerous charge even with power off and must be safely discharged before handling. Because of shock risk and correct sizing, most homeowners should leave this to a technician.
  - q: How much does it cost to fix a Carrier outdoor fan that won't spin?
    a: Repairs range from $0 for a breaker reset to about $150-$400 for a capacitor or contactor, or $300-$650 for a full condenser fan motor replacement including labor.
---

## What this code means

"Outdoor fan not spinning" isn't a numeric fault code on most Carrier air conditioners — it's a symptom you observe at the condenser (the outdoor unit). When your system calls for cooling, the outdoor fan should spin to blow air across the condenser coil and reject heat. If the fan sits still while the unit is running, heat has nowhere to go and pressures climb fast.

On variable-speed **Infinity** systems, the control board may log a related fault or communication error, and the fan behavior is managed by an ECM motor and control module rather than a simple capacitor. On the more common **Comfort** and **Performance** single-stage units, the fan is a standard PSC motor driven by a run capacitor and switched by a contactor — that's where most no-spin failures occur.

**This is a pro-level repair.** The most common causes involve a capacitor that holds a lethal charge and 240V wiring. Turn the system off and don't keep running it.

## Common causes, ranked by probability

1. **Failed run capacitor** — The single most common cause. The dual run capacitor gives the fan motor the "kick" it needs to start. When it weakens or fails, the motor hums but won't turn, or won't start at all.
2. **Seized or burned-out condenser fan motor** — Worn bearings, overheating, or age can lock the motor or open its windings. Often you'll smell a burnt odor or see melted insulation.
3. **Failed contactor** — The contactor is the relay that sends 240V to the fan and compressor. Pitted, stuck, or dead contacts can cut power to the fan.
4. **Tripped breaker or blown low-voltage fuse** — Loss of power to the unit, or a blown 3–5A control fuse on the furnace/air handler board.
5. **Debris jamming the fan blade** — Sticks, leaves, or a bent blade physically blocking rotation.
6. **Bad control board or ECM module (Infinity/variable-speed only)** — On ECM-equipped units, the fan is commanded electronically; a failed module or communication fault can leave it stationary.
7. **Wiring faults** — Corroded, loose, or chewed wires at the motor, capacitor, or contactor.

## Safe checks before you call anyone

These are the only steps a homeowner should do. Do **not** open the condenser electrical panel or touch the capacitor.

- **Thermostat:** Confirm it's set to COOL and the setpoint is several degrees below room temperature. Replace thermostat batteries if applicable.
- **Air filter:** A clogged filter can cause freezing and shutdowns that mimic outdoor problems. Replace if dirty.
- **Breakers:** Check both the indoor (air handler/furnace) and the outdoor (condenser) breakers in your panel. Reset a tripped breaker **once**. If it trips again, stop and call a pro — repeated tripping signals a real fault.
- **Visible debris:** With the system OFF at the breaker, look through the top grille of the outdoor unit for leaves or sticks obstructing the blade. Do not reach into the unit.
- **Indoor vents:** Make sure supply and return vents are open and unblocked.
- **Condensate:** A full condensate pan can trip a safety float switch and shut the system down; check that the drain isn't backed up.
- **Do not** repeatedly cycle the system on and off trying to get the fan to catch — this risks the compressor.

## How a technician will diagnose it

A qualified tech will work through a predictable sequence. Knowing it helps you sanity-check a quote:

1. **Verify the call for cooling** and confirm 24V is reaching the contactor coil.
2. **Kill power and discharge the capacitor** safely before touching anything.
3. **Test the run capacitor** with a meter against its rated microfarad (µF) value — a reading well below spec confirms failure.
4. **Test the fan motor** for open windings, shorts to ground, and whether the shaft spins freely by hand.
5. **Inspect the contactor** for pitting and check that it pulls in and passes voltage to the fan leg.
6. **Check the control fuse** and low-voltage wiring.
7. **On Infinity/ECM units**, read stored board faults, check the ECM module, and verify communication between the control and outdoor unit.

A good tech tests the capacitor first because it's cheap and common — beware anyone who jumps straight to a full motor replacement without showing you a bad capacitor reading.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but won't turn | Failed run capacitor | Shut system off; don't force it | Discharge and test capacitor, replace if out of spec |
| No sound, no fan, compressor also silent | Tripped breaker or dead contactor | Reset breaker once | Test contactor coil, contacts, and 240V supply |
| Fan spins if pushed by hand, then stops | Weak capacitor or worn motor bearings | Do not push blade while powered | Test capacitor and motor amp draw |
| Burnt smell, melted wires, no fan | Burned-out fan motor | Shut off at breaker | Replace condenser fan motor |
| Blade physically blocked | Debris or bent blade | Remove visible debris with power OFF | Clear jam, inspect for blade/motor damage |
| Fan won't run, Infinity board shows fault | ECM module or comms fault | Note the fault code | Read board diagnostics, test/replace ECM module |

## Repair costs

Ranges are typical US installed prices including parts and labor; your area and unit tier vary.

- **Breaker reset / debris removal:** $0 DIY (or a service call minimum, ~$90–$150)
- **Run capacitor replacement:** $150–$400
- **Contactor replacement:** $150–$350
- **Control fuse replacement:** $90–$180
- **Condenser fan motor replacement (PSC):** $300–$650
- **ECM fan motor / module (Infinity variable-speed):** $500–$1,200+ (parts alone can be several hundred dollars)
- **Diagnostic / service call:** $90–$180, often credited toward the repair

If your Carrier condenser is under the manufacturer's parts warranty (typically 10 years with registration), the part may be covered — you'd pay labor only. Ask the tech to confirm.

## Related codes

- **Carrier AC Not Cooling: Causes, Fixes & Repair Costs** — the broader troubleshooting guide when the whole system underperforms.
- **Carrier AC Frozen Evaporator Coil: Causes & Fixes** — a stalled fan can contribute to pressure and temperature problems; freezing has overlapping symptoms.
- **Carrier Furnace Code 13: Meaning, Causes & Fixes** — for blower and control faults on the indoor unit.
- **Carrier Furnace Code 31: Causes, Fixes & Costs** — related pressure switch diagnostics on Carrier control boards.
