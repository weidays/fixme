---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan not spinning? Common causes are a failed capacitor, motor, or contactor. Fixes and repair costs from $0 DIY to $650."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor is replaced"
appliesTo: "Most Carrier split-system condensers (Comfort, Performance, Infinity series) with a single-phase PSC condenser fan motor and a dual run capacitor; ECM/variable-speed Infinity units differ and report faults to the board."
tags:
  - carrier
  - air-conditioner
  - condenser-fan
  - capacitor
  - contactor
parts:
  - name: Dual run capacitor
    search: carrier ac dual run capacitor 45+5 mfd 440v
  - name: Condenser fan motor
    search: carrier condenser fan motor 1/4 hp 208-230v
  - name: Contactor (single pole)
    search: ac condenser contactor 1 pole 30 amp 24v coil
datePublished: 2026-07-31
dateModified: 2026-07-31
reviewedBy: ""
faq:
  - q: Can I run my Carrier AC with the outdoor fan not spinning?
    a: No. Running the compressor without the condenser fan lets head pressure and temperature climb fast, which can burn out the compressor within minutes. Shut the system off at the thermostat until it's fixed.
  - q: Why does my Carrier fan spin if I push it with a stick?
    a: That's the classic sign of a dead run capacitor. The motor needs the capacitor's phase kick to start; once nudged it can keep turning. It's a common, relatively cheap repair, but capacitors store a dangerous charge.
  - q: Is a stuck outdoor fan a DIY fix?
    a: Basic checks like clearing debris, resetting the breaker, and cleaning the coil are safe. But capacitor, motor, and contactor work involves stored electrical charge and 240V line power, so it is rated pro for good reason.
  - q: How much does a Carrier condenser fan motor cost to replace?
    a: Expect roughly $300 to $650 installed, depending on motor size and whether a matching capacitor is replaced. The motor part alone runs about $90 to $250.
---

## What this code means

"Outdoor fan not spinning" isn't a numeric fault code on most Carrier air conditioners — it's a symptom you observe at the condenser (the outdoor unit). The compressor may hum or run while the fan blade on top sits still, or the whole unit may be silent.

On standard single-stage and two-stage Carrier condensers, the outdoor fan is a simple PSC (permanent split capacitor) motor with no self-diagnostics — so there's no error code, just a stopped blade. On **Infinity variable-speed units** with an ECM fan motor and a communicating control board, a fan fault can trigger a stored fault code you'd read from the Infinity thermostat's service menu. If you have an Infinity system showing an actual code, note it — the diagnosis path differs.

A non-spinning fan is a **pro-level, time-sensitive problem**: the compressor should never keep running without airflow across the outdoor coil.

## Common causes, ranked by probability

1. **Failed run (or dual run) capacitor** — the single most common cause. The capacitor gives the fan motor the starting torque it needs. When it weakens or dies, the motor hums but won't start.
2. **Seized or burned-out condenser fan motor** — worn bearings, overheating, or an internal winding failure. Often smells burnt and the blade won't turn freely by hand.
3. **Contactor not pulling in** — the relay that sends 240V to the fan and compressor may have pitted contacts or a failed 24V coil, so nothing outdoors gets power.
4. **Debris jamming the fan blade** — sticks, leaves, or a bent blade physically blocking rotation.
5. **Tripped breaker or blown low-voltage fuse** — no power to the condenser at all.
6. **Overheated motor on thermal cutout** — a marginal motor shuts itself off when hot and restarts when cool, so it works in the morning but quits in the afternoon.
7. **Control board or ECM fault (Infinity units)** — on variable-speed models the board commands the fan; a board or motor-module failure stops it and usually logs a code.

## Safe checks before you call anyone

These are safe with the system off — do **not** open the electrical panel on the condenser.

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. If it's battery-powered, replace the batteries.
- **Air filter:** A clogged filter can cause icing and shutdowns that look like an outdoor problem. Replace if dirty.
- **Breaker:** Check both the indoor furnace/air-handler breaker and the outdoor disconnect breaker. Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Visible debris:** With the system fully off at the thermostat and breaker, look through the top grille for leaves, sticks, or a cottonwood mat blocking the blade. Clear anything obvious without reaching into the unit's wiring.
- **Coil and airflow:** A heavily clogged outdoor coil raises pressures and heat; gently rinse the outside of the coil with a garden hose (power off).
- **Supply vents:** Make sure interior vents are open and unblocked.
- **Condensate:** A full condensate pan or clogged drain can trip a float switch and shut the whole system down — check for standing water at the indoor unit.

Do not spin the blade to "get it going" and leave it running, and do not repeatedly reset a unit that keeps stopping. If the fan won't run after these checks, shut the system off and call a technician.

## How a technician will diagnose it

A good tech will:

1. **Kill power at the disconnect** and safely **discharge the capacitor** before touching anything — the capacitor holds a lethal charge.
2. **Test the capacitor** with a meter against its rated microfarads (μF). A reading far below the label rating confirms a bad capacitor.
3. **Check the contactor** — inspect for pitted/welded contacts and verify the 24V coil energizes on a cooling call.
4. **Test the fan motor** — check windings for resistance/continuity, spin the blade for bearing drag, and verify 240V reaches the motor when the contactor closes.
5. **Verify low-voltage supply** and any control-board fuse.
6. **On Infinity/communicating systems**, read stored fault codes and check the ECM fan module and board commands.

A trustworthy quote names the specific failed part (capacitor, motor, or contactor), not just "replace everything."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan sits still; blade spins freely by hand | Failed run capacitor | Shut system off; don't force-run it | Discharge and test capacitor, replace with matching μF/voltage |
| Fan won't turn, blade stiff or won't spin by hand | Seized/burned-out motor | Turn off, clear obvious debris only | Test windings/bearings, replace condenser fan motor |
| Unit totally silent outdoors, compressor also off | Contactor or tripped breaker/fuse | Reset breaker once | Test contactor coil/contacts, replace if pitted |
| Fan runs mornings, stops when hot | Overheating motor on thermal cutout | Note when it quits for the tech | Confirm marginal motor, replace before compressor damage |
| Leaves/sticks jamming blade | Physical obstruction | Power off, remove visible debris | Inspect blade for bending, rebalance or replace |
| Infinity unit shows a fault code | Board/ECM fan fault | Record the code | Read stored codes, test ECM module and control board |

## Repair costs

Ranges are typical US installed prices; your market and unit size vary.

- **Run / dual run capacitor:** ~$120–$300 installed (part is $15–$40).
- **Contactor:** ~$150–$350 installed.
- **Condenser fan motor:** ~$300–$650 installed; motor part alone ~$90–$250, plus a matching capacitor often replaced with it.
- **Blade / fan assembly:** ~$150–$400 if bent or damaged.
- **Control board (Infinity/communicating):** ~$400–$900+ installed.
- **Diagnostic / service call:** ~$90–$180, often credited toward the repair.

If the compressor ran hot without airflow for a while, ask the tech to check the compressor and refrigerant charge — the underlying fan failure can cascade into a much costlier problem.

## Related codes

- **Carrier AC Not Cooling: Causes, Fixes & Repair Costs** — a stopped fan is one reason a system stops cooling; this covers the broader no-cool diagnosis.
- **Carrier AC Frozen Evaporator Coil: Causes & Fixes** — airflow and refrigerant issues that can accompany outdoor unit problems.
