---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan not spinning? Common causes include a bad capacitor, fan motor, contactor or control board, plus DIY checks and repair costs."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor is replaced"
appliesTo: "Most Carrier split-system condensers (Comfort, Performance, Infinity series) using a single-phase PSC fan motor and run capacitor; ECM/variable-speed Infinity units differ and report faults at the board."
tags:
  - carrier
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: Dual run capacitor (matched µF/voltage)
    search: carrier dual run capacitor 440v
  - name: Condenser fan motor (matched HP/RPM/voltage)
    search: carrier condenser fan motor replacement
  - name: Contactor (single or double pole)
    search: hvac condenser contactor 24v 30 amp
datePublished: 2026-06-25
dateModified: 2026-06-25
reviewedBy: ""
faq:
  - q: Can I push-start the outdoor fan with a stick?
    a: It can confirm a failed capacitor, but it is dangerous near live high-voltage parts and live spinning blades. Leave it to a technician — running the unit with a bad capacitor can also burn out the compressor.
  - q: Why is my compressor humming but the fan isn't spinning?
    a: This usually points to a failed run capacitor, a seized fan motor, or a stuck contactor. Shut the system off — running with a hot, non-spinning fan can overheat and trip the compressor or board.
  - q: Is it safe to keep running the AC if the outdoor fan won't spin?
    a: No. Without the fan, the condenser can't reject heat, refrigerant pressures spike, and you risk compressor damage. Turn the system off at the thermostat and breaker until it's repaired.
---

## What this code means

"Outdoor fan not spinning" isn't a numeric fault code on most Carrier air conditioners — it's a symptom. The outdoor unit (the condenser) has a large fan on top that pulls air across the coil to dump the heat your system pulls out of your home. When that fan stops, the condenser can't reject heat, refrigerant pressures climb fast, and the system either stops cooling or shuts itself down on a high-pressure or thermal safety.

On standard Carrier single-stage and two-stage units (Comfort and Performance series), the fan is a simple PSC motor driven through a run capacitor and energized by the contactor — there's no display, so the fan simply spins or it doesn't. On **Infinity / variable-speed condensers** with an ECM fan motor and a communicating control board, a stalled or failed fan often *does* register a fault at the board or thermostat, and diagnosis is different — say so to any tech who quotes you.

## Common causes, ranked by probability

1. **Failed run capacitor** — the single most common cause. The capacitor gives the fan motor the jolt it needs to start. A bulged, leaking, or weak capacitor leaves the motor humming but not turning.
2. **Seized or burned-out condenser fan motor** — worn bearings or a failed winding. The motor may be silent, hum, or trip the breaker.
3. **Stuck or pitted contactor** — the relay that sends high voltage to the fan and compressor. Burned contacts can drop the fan circuit.
4. **Tripped breaker or blown high-voltage fuse / disconnect** — power simply isn't reaching the unit.
5. **Obstruction in the fan** — debris, ice, or a bent blade physically jamming rotation.
6. **Failed control board or low-voltage problem (Infinity/ECM units)** — the board isn't commanding the ECM fan to run, or the ECM module itself failed.
7. **Overheated motor on thermal cutout** — a marginal motor that runs, then quits when hot.

## Safe checks before you call anyone

These are the only steps a homeowner should do — everything past this involves high voltage or a spinning blade.

- **Thermostat:** Set it to COOL and several degrees below room temperature so the system is actually calling. Replace thermostat batteries if it's dim or blank.
- **Air filter:** A clogged filter can ice the indoor coil and trip safeties that mimic outdoor problems. Replace if dirty.
- **Breakers:** Check your panel for a tripped AC breaker. Reset it **once**. If it trips again, stop — that's a fault, not a fluke, and needs a pro.
- **Outdoor disconnect:** Make sure the pull-out disconnect by the condenser is fully seated (it can be bumped loose by yard work).
- **Look for obvious obstructions:** With the unit **off at the breaker**, look down through the top grille for leaves, a stick, or ice jamming the blade. Do not reach in or remove panels.
- **Indoor condensate:** A full drain pan can trip a float switch and shut the system down. Empty it and clear the drain if you can do so safely.

Do **not** open the electrical panel on the condenser, discharge a capacitor, or push-start the fan. Capacitors hold a lethal charge even with power off.

## How a technician will diagnose it

A qualified tech will:

1. Confirm the call and verify 24V is reaching the contactor coil.
2. **Discharge and test the run capacitor** with a meter against its rated microfarad (µF) value — an out-of-spec cap is condemned.
3. Check the **contactor** for pitting and confirm line voltage out to the fan.
4. **Test the fan motor windings** for resistance and a grounded or open winding; spin it by hand for bearing drag.
5. Check **amp draw** against the motor nameplate to spot an overloaded or weak motor.
6. On **Infinity/ECM units**, read fault codes at the board/thermostat and test the ECM module and its signal, since these don't use a simple capacitor.
7. Inspect refrigerant pressures only after the fan is restored, to confirm no secondary damage.

If a tech wants to replace the motor without first testing the capacitor, ask why — the cap is far cheaper and the most common failure.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan won't turn | Failed run capacitor | Turn unit off; don't push-start | Test & replace capacitor |
| Fan silent, no hum at all | No power / blown fuse / contactor | Check breaker & disconnect once | Test contactor, fuses, board |
| Fan jammed, won't budge | Debris or ice in blade | Power off, look for obstruction | Clear, inspect blade & motor |
| Fan runs then stops when hot | Motor on thermal cutout | None | Amp-test & replace motor |
| Breaker trips when fan should run | Shorted motor or wiring | Reset once only | Find short, replace motor |
| No fault but ECM fan dead (Infinity) | Control board / ECM module | None | Read codes, test board/ECM |

## Repair costs

US ballpark ranges, parts and labor included unless noted. Your area and unit age affect the total.

- **Run capacitor replacement:** $150 – $350
- **Contactor replacement:** $150 – $300
- **Condenser fan motor (PSC) replacement:** $300 – $650
- **ECM fan motor / module (Infinity units):** $500 – $1,100+
- **Control board (communicating units):** $400 – $900
- **Diagnostic / service call:** $80 – $180 (often credited toward the repair)

The capacitor is a DIY-cheap part but a high-voltage job — most homeowners should not attempt it. If your unit is more than ~12–15 years old and needs a motor *plus* other parts, ask whether replacement makes more sense.

## Related codes

- **Carrier AC Not Cooling: Causes, Fixes & Repair Costs** — broader cooling failures, including ones where the outdoor fan is fine.
- **Carrier AC Frozen Evaporator Coil: Causes & Fixes** — airflow and refrigerant issues that can trip the same safeties.
