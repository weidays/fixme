---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan not spinning? Causes from a failed capacitor to a bad motor or contactor, plus safe checks and honest repair costs."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 for a new condenser fan motor"
appliesTo: "Most Carrier split-system condensers (Comfort, Performance, Infinity series) with single-phase PSC or ECM outdoor fan motors; behavior varies by motor type and board."
tags:
  - carrier
  - air-conditioner
  - outdoor-fan
  - condenser-fan-motor
  - capacitor
parts:
  - name: Dual run capacitor
    search: "carrier dual run capacitor 45+5 mfd 440v"
  - name: Condenser fan motor
    search: "1/4 hp condenser fan motor 208-230v carrier"
  - name: Fan motor blade
    search: "universal condenser fan blade 5 wing"
  - name: Contactor 30 amp 24v coil
    search: "30 amp 2 pole contactor 24v coil carrier"
datePublished: 2026-08-05
dateModified: 2026-08-05
reviewedBy: ""
faq:
  - q: Can I run my Carrier AC if the outdoor fan won't spin?
    a: No. Without the outdoor fan the compressor overheats and can suffer permanent, expensive damage. Shut the system off at the thermostat until it's repaired.
  - q: Why does the compressor hum but the outdoor fan doesn't turn?
    a: This classic symptom usually points to a failed run capacitor or a seized fan motor bearing. The compressor may still try to start while the fan stays dead.
  - q: Is a stuck outdoor fan a DIY fix?
    a: Basic checks like the breaker, filter, and clearing debris are safe DIY. Capacitor and motor work involves stored charge and 240V, so it's rated pro on this page.
  - q: How much does a Carrier condenser fan motor cost to replace?
    a: Expect roughly $300 to $650 installed, depending on motor type (PSC vs ECM) and whether the capacitor and blade are replaced at the same time.
---

## What this code means

"Outdoor fan not spinning" isn't a numeric fault code — it's a symptom you can see and hear at the condenser (the outdoor unit). The fan on top of the outdoor unit is supposed to spin whenever the compressor runs, pulling air across the condenser coil to reject heat.

When the fan stops, heat has nowhere to go. Pressures and temperatures inside the compressor climb fast, and the system will either trip on a high-pressure or thermal protector or, worse, damage the compressor if it keeps running. On most Carrier split systems there is **no dedicated error code** for this — the control board simply energizes the outdoor unit, and the fan either turns or it doesn't. Infinity/Greenspeed variable-speed systems with communicating boards may log a related fault, but the underlying causes are the same.

Because the most common repairs involve a charged capacitor and 240V wiring, this issue is rated **pro**.

## Common causes, ranked by probability

1. **Failed run capacitor** — The single most common cause. The dual run capacitor gives the fan motor its starting torque. When it weakens or fails, the fan won't start (often you'll hear a hum) or spins only if you nudge the blade. A bulging or leaking capacitor top is a dead giveaway.
2. **Seized or worn fan motor bearings** — Age, heat, and moisture wear out the motor. A seized motor won't turn even with a good capacitor; a struggling one runs hot and cuts out on its internal overload.
3. **Failed condenser fan motor (windings)** — The motor itself burns out. Sometimes accompanied by a burnt smell around the unit.
4. **Contactor not pulling in** — The contactor is the relay that sends 240V to the compressor and fan. Pitted, stuck, or non-energized contacts can leave the whole outdoor unit dead or partially powered.
5. **Blade obstruction or damage** — Debris, ice, or a bent/loose blade jammed against the shroud can stop rotation.
6. **Tripped breaker or blown fuse to the outdoor unit** — The disconnect fuse or the breaker feeding the condenser has opened.
7. **Loss of 24V control signal** — A low-voltage wiring fault, bad transformer, or failed board means the contactor never gets told to close.
8. **Board or ECM module failure** — On communicating/variable-speed Infinity units, the fan is driven by a module that can fail. This varies by model.

## Safe checks before you call anyone

These are the only steps you should do yourself. **Do not open the condenser access panel** — the capacitor can hold a dangerous charge even with power off.

- **Set the thermostat to cool** a few degrees below room temperature and confirm the system is actually calling for cooling.
- **Check your air filter.** A badly clogged filter can cause the indoor coil to freeze and shut things down; replace it if dirty.
- **Check the breaker** for the outdoor unit in your main panel. If it's tripped, reset it once. If it trips again, stop and call a pro — repeated resets can be dangerous.
- **Check the outdoor disconnect** (the box on the wall near the unit) is fully seated/on.
- **Look for visible debris** — grass clippings, leaves, or a stick jammed in the fan grille. With the system **off at the breaker**, you can clear loose debris from the top grille without opening the cabinet.
- **Check for ice** on the outdoor unit or refrigerant lines. Ice can jam the fan; if present, turn the system off and let it thaw (see our Frozen Evaporator Coil guide).
- **Confirm indoor vents are open** and unobstructed.

If the fan still won't spin after these checks, it's a pro repair.

## How a technician will diagnose it

Knowing the sequence helps you sanity-check a quote:

1. **Verify the call for cooling** and confirm 24V is reaching the contactor coil.
2. **Kill power and safely discharge the capacitor** before touching anything inside the cabinet.
3. **Test the run capacitor** with a meter against its rated microfarads (µF). Out-of-spec = replace.
4. **Hand-spin the fan blade** (power off) to check for a seized or gritty bearing.
5. **Check the contactor** for pitting and confirm it pulls in and passes voltage on both legs.
6. **Measure motor windings** and check for open circuits or shorts to ground; verify the motor's internal overload isn't tripping from heat.
7. **On communicating Infinity units,** read fault history and test the ECM/fan module and board outputs.
8. **Confirm proper rotation and airflow** after repair, and check operating pressures.

A good tech tests the capacitor first — it's cheap and the most likely culprit — before condemning the motor.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan doesn't turn | Failed run capacitor | Turn system off to protect compressor | Test & replace capacitor |
| Fan spins if nudged by hand | Weak capacitor | Shut off; don't run it | Replace capacitor |
| Fan won't turn even nudged (power off) | Seized bearings / dead motor | Shut off | Replace fan motor |
| Whole outdoor unit dead | Breaker, disconnect, or contactor | Check breaker/disconnect once | Test contactor & 24V circuit |
| Burnt smell at unit | Burned-out motor or contactor | Shut off immediately | Replace failed component |
| Blade visibly bent or jammed | Debris or damaged blade | Clear loose debris (power off) | Replace/rebalance blade |
| Ice on unit jamming fan | Frozen coil / low charge | Turn off, let thaw | Diagnose airflow/refrigerant |
| Infinity unit logs fan fault | ECM/board fault | None | Test fan module/board |

## Repair costs

Honest US ballpark ranges, parts and labor included unless noted:

- **Reset breaker / clear debris:** $0 DIY
- **Run capacitor replacement:** $150 – $350
- **Contactor replacement:** $150 – $350
- **Condenser fan motor (PSC):** $300 – $600
- **Condenser fan motor (ECM / variable-speed):** $450 – $650+
- **Fan blade replacement:** $100 – $250
- **Control board / ECM module (Infinity):** $400 – $900+ (varies widely by model)
- **Diagnostic / service call:** $75 – $200 (often credited toward the repair)

Prices vary by region, unit age, and whether the part is under a Carrier parts warranty. If your unit is out of warranty and the motor, board, and capacitor are all failing on an old system, ask about the cost of repair versus replacement.

## Related codes

- **Carrier AC Not Cooling: Causes, Fixes & Repair Costs** — a stopped outdoor fan is a common reason for poor cooling.
- **Carrier AC Frozen Evaporator Coil: Causes & Fixes** — ice can jam the fan and mimic this problem.
- **Carrier Furnace Code 31: Causes, Fixes & Costs** — related pressure-switch faults on the heating side.
