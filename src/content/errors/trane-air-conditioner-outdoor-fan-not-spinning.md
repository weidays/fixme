---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a failed capacitor, motor, or contactor. See safe checks, fixes, and repair costs from $0 DIY to $600+."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $650 if the condenser fan motor needs replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series and older 2/4TTX models). Variable-speed XV units use an ECM fan and inverter board, so diagnosis differs from single-stage PSC fan motors."
tags:
  - outdoor-fan
  - condenser
  - capacitor
  - contactor
  - fan-motor
parts:
  - name: Dual run capacitor
    search: trane dual run capacitor 45+5 uf 440v
  - name: Condenser fan motor
    search: trane condenser fan motor 1/4 hp 208-230v
  - name: Contactor (single/double pole)
    search: hvac contactor 30 amp 24v coil
datePublished: 2026-09-10
dateModified: 2026-09-10
reviewedBy: ""
faq:
  - q: Can I run my Trane AC if the outdoor fan won't spin?
    a: No. Running the compressor with a dead condenser fan causes it to overheat and can permanently damage the compressor within minutes. Shut the system off at the thermostat until it's repaired.
  - q: Why does my outdoor fan spin if I push it with a stick?
    a: If it runs after a manual nudge, the start capacitor is almost certainly weak or dead. The motor can't self-start without it. This is a common, relatively cheap repair — but leave the power off while inspecting.
  - q: How much does a Trane condenser fan motor cost to replace?
    a: Expect roughly $300 to $650 installed, depending on motor size and whether a matching capacitor is also replaced. A capacitor alone is far cheaper, often $150 to $300 with labor.
  - q: Is a stuck outdoor fan an emergency?
    a: It's not a safety emergency like a gas leak, but it is urgent. Keep the AC off to protect the compressor, and schedule a technician promptly, especially in hot weather.
---

## What this code means

"Outdoor fan not spinning" isn't a blink code — it's a physical symptom. On a Trane split-system air conditioner, the outdoor unit (condenser) contains a large fan on top that pulls air across the coil to reject heat. When the compressor runs but that fan sits still, the system cannot dump heat outside, high-side pressure and temperature climb fast, and the unit will overheat.

This usually points to an electrical failure in the outdoor unit: a failed capacitor, a bad fan motor, or a contactor not passing power. On variable-speed Trane XV condensers, the fan is an ECM motor driven by an inverter/control board, so a no-spin condition can also be a board or communication fault — that requires Trane-specific diagnostics and is not the same as the simpler PSC motors on XR and XL units.

Because a running compressor with a dead fan can destroy itself quickly, this is rated **pro**. Turn the system off and do the safe checks below before calling.

## Common causes, ranked by probability

1. **Failed run/start capacitor** — By far the most common cause. The dual run capacitor feeds both the compressor and fan motor. A weak or bulged cap leaves the fan unable to start (it may hum or spin only if nudged).
2. **Condenser fan motor failure** — Worn bearings, a burned winding, or an internal open. The motor may be hot, seized, or dead with a good capacitor confirmed.
3. **Contactor not pulling in or burned contacts** — If the contactor doesn't close, neither the compressor nor fan get power. Pitted or welded contacts can cause partial/no operation.
4. **Blown fuse, tripped breaker, or bad disconnect** — Loss of power to the outdoor unit.
5. **Seized fan from debris or ice** — Sticks, leaves, or a physical obstruction jamming the blade; occasionally a bent blade after impact.
6. **Loose or corroded wiring / low-voltage fault** — A broken 24V control wire means the unit never gets the "run" signal.
7. **Control or inverter board fault (variable-speed XV only)** — On ECM-fan Trane units, the board drives the motor directly; a board or motor module failure can stop the fan.

## Safe checks before you call anyone

Keep it simple and safe — do **not** open the electrical panel of the condenser, touch the capacitor, or bypass any switch.

- **Thermostat:** Set to Cool and lower the setpoint 3–5°F. Confirm the system is actually calling for cooling.
- **Air filter:** A clogged indoor filter can trigger protective shutdowns and poor airflow — replace if dirty.
- **Breaker:** Check the AC breaker in your main panel. If it's tripped, reset it once. If it trips again, stop and call a pro.
- **Outdoor disconnect:** Confirm the pull-out disconnect box near the condenser is fully seated (do not touch internal terminals).
- **Visible obstruction:** With the system **off at the breaker**, look through the top grille for leaves, sticks, or debris on the fan blade. Clear only what you can reach without removing panels.
- **Indoor vents & condensate:** Make sure supply vents are open and the condensate drain isn't backed up (a full pan safety switch can stop the system).

If the fan still won't run after these checks, leave the AC **off** and call a technician. Do not nudge the fan and run it, and do not repeatedly reset a unit that won't stay running.

## How a technician will diagnose it

A qualified tech will typically:

1. **Confirm power** at the disconnect and check the outdoor fuses/breaker.
2. **Measure the capacitor** with a meter for microfarads (µF) against the rating printed on it — a common first find.
3. **Check the contactor** for proper 24V coil signal and inspect contacts for pitting or welding.
4. **Test the fan motor** for winding continuity, amp draw, and free rotation once power is safely removed and the cap is discharged.
5. **Inspect wiring** at the motor, capacitor, and low-voltage terminals for breaks or corrosion.
6. **On variable-speed XV units:** connect Trane diagnostic tools to read board/inverter fault status and verify the ECM fan module.

Sanity check: if a tech quotes a full motor replacement without first testing your capacitor, ask them to confirm the capacitor reading — a bad cap is cheaper and much more common.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but won't spin; spins if nudged | Failed run/start capacitor | Turn unit off; don't run it | Test & replace capacitor |
| Fan dead, compressor also silent | No power / contactor / breaker | Reset breaker once; check disconnect seated | Test contactor, fuses, wiring |
| Fan dead, compressor humming/hot | Capacitor or fan motor failure | Shut off immediately to protect compressor | Test cap, then fan motor |
| Fan blade jammed by debris | Obstruction on blade | Power off, clear visible debris | Inspect for bent blade/bearing damage |
| Fan works intermittently | Burned contactor or loose wiring | None | Replace contactor, repair connections |
| ECM fan won't run (XV variable-speed) | Board/inverter or motor module | None | Trane diagnostics; board/motor service |

## Repair costs

Ranges are typical US installed prices; your area, unit size, and diagnostic fee will vary.

- **Diagnostic / service call:** $75 – $200 (often credited toward the repair)
- **Dual run capacitor (replaced):** $150 – $300
- **Contactor (replaced):** $150 – $350
- **Condenser fan motor + capacitor (replaced):** $300 – $650
- **Wiring / connector repair:** $100 – $300
- **Variable-speed (XV) control/inverter board:** $600 – $1,500+ (parts vary widely; often part of a larger service)

DIY is realistic only for clearing visible debris ($0). Capacitor and motor work involves stored electrical charge and line voltage — leave it to a licensed tech.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — a stuck outdoor fan is one common reason a Trane AC stops cooling; that page covers the broader no-cooling picture.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for furnace-side control faults on Trane heating equipment.
