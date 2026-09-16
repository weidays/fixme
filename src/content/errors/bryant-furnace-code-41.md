---
title: "Bryant Furnace Code 41: Blower Motor Fault Fixes"
code: "Code 41"
description: "Bryant Furnace Code 41 means an ECM blower fault. Causes, safe checks, tech diagnosis, and repair costs from $0 DIY to $1,500 for a new blower motor."
brand: bryant
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,500 if the ECM blower motor needs replacement"
appliesTo: "Variable-speed Bryant furnaces with ECM blowers (e.g. Evolution/Preferred boards). Fixed-speed PSC models do not use Code 41; some boards label this fault differently, so confirm against your unit's legend."
tags:
  - bryant
  - furnace
  - code-41
  - blower-motor
  - ecm
parts:
  - name: "Furnace air filter"
    search: "furnace air filter 16x25x1"
datePublished: 2026-09-16
dateModified: 2026-09-16
reviewedBy: ""
faq:
  - q: "Does Bryant Code 41 reset itself?"
    a: "On most variable-speed boards the control re-attempts blower operation and can clear once the motor spins in range, but a persistent fault holds until the cause is fixed and power is cycled."
  - q: "Can I run my furnace with Code 41 showing?"
    a: "You should not. If the blower will not run in its valid speed range, the heat exchanger can overheat and trip safety limits, so the furnace should stay off until a technician inspects it."
  - q: "Is Code 41 the same as a bad capacitor?"
    a: "No. Variable-speed ECM blowers do not use a run capacitor like PSC motors. Code 41 points to the ECM motor, its wiring, or the motor communication link instead."
---

## What this code means

Bryant Furnace **Code 41** is a **Blower Motor Fault**. The control board commanded the variable-speed ECM (electronically commutated) blower to run, but the motor either did not start or ran outside its valid speed range. The board watches the motor's feedback and flags Code 41 when the response is missing or out of tolerance.

This is a **variable-speed board only** code. It covers three general failure areas: the ECM motor itself (including its integrated control module), the wiring/connectors between the board and the motor, and the communication signal the board uses to command and confirm blower speed.

Because a blower that won't run at the correct speed can let the heat exchanger overheat, this is a **pro-level** fault. On most boards the control will re-try the blower, but if it can't confirm a valid speed the furnace holds in a fault state until the underlying problem is corrected. Legends vary slightly between board generations, so confirm Code 41 against the label inside your unit's blower door.

## Common causes, ranked by probability

1. **Failed ECM blower motor or its integrated module** — the most common source; the module inside the motor is a frequent failure point on variable-speed units.
2. **Loose, corroded, or damaged motor power/control connectors** — vibration and heat can back out or degrade the plugs between the board and motor.
3. **Motor communication fault** — the speed command or feedback signal between the control board and the ECM is interrupted or invalid.
4. **Heavy airflow restriction** — a badly clogged filter, closed or blocked supply/return registers, or an obstructed return raises static pressure and can push the ECM's measured speed out of its valid range. This is the one cause on the list a homeowner can check and correct.
5. **Low or unstable line voltage to the motor** — ECM motors are sensitive to supply problems and can drop out of range.
6. **Seized or dragging blower wheel/bearings** — mechanical resistance prevents the motor from reaching commanded speed.
7. **Failed control board output** — the board itself is not commanding or reading the motor correctly (diagnosed by elimination).

## Safe checks before you call anyone

These are the only steps a homeowner should attempt:

- **Check the thermostat** — confirm it's set to Heat and the fan setting is Auto; a stuck fan-on demand can confuse your read of blower behavior.
- **Replace a dirty air filter** — a heavily clogged filter increases static pressure and can push the ECM out of its normal range. Slide in a clean filter of the correct size.
- **Check the breaker** — if the furnace breaker is tripped, reset it once. If it trips again, stop and call a pro.
- **Cycle power once** — turn the furnace switch (or breaker) off, wait a minute, and back on to give the board one clean restart. Do not repeat resets on a unit that keeps locking out.
- **Look at supply/return registers** — make sure vents aren't blocked by furniture or closed off, which raises static pressure.
- **Check the condensate line** — a full drain or safety switch trip can shut the furnace down; clear visible blockages at the exterior.

Everything else — connectors, wiring, the motor, and the board — is inside the cabinet and is technician work.

## How a technician will diagnose it

A qualified tech will typically:

- Retrieve stored fault history from the board to see how often Code 41 has occurred.
- Inspect and reseat the motor's power and control connectors, checking for corrosion, melted pins, or chafed wiring.
- **Measure line voltage** to the furnace and motor under load to rule out supply problems.
- Verify the **communication/control signal** the board sends to the ECM and the feedback it receives.
- Check system static pressure and duct/filter restriction to confirm the motor isn't being driven out of range by airflow problems.
- **Spin the blower wheel by hand** (power off) to check for seized bearings or a dragging wheel.
- Substitute a known-good motor or module, or use the manufacturer's ECM test procedure, to isolate motor vs. board.
- Confirm the repair by watching the blower ramp through its speeds without re-flagging Code 41.

If a tech proposes replacing the whole board or motor without first checking connectors and voltage, ask them to walk you through what they eliminated.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Furnace ignites but blower never starts | Failed ECM motor/module | Replace filter, cycle power once | Test motor, wiring, and board; replace failed motor |
| Blower runs then quits, Code 41 sets | Loose/corroded connector | None — call a pro | Inspect and repair motor connectors and harness |
| Blower runs wrong speed / surges | Communication or feedback fault | None — call a pro | Verify control signal and ECM feedback |
| Blower struggles, rooms starved for air | Clogged filter or closed/blocked registers | Replace filter, open and unblock vents | Measure static pressure, check duct and return restriction |
| Intermittent Code 41 in cold weather | Low/unstable line voltage | Confirm breaker isn't tripping | Measure supply voltage under load |
| Loud grinding, then no blower | Seized wheel or bearings | Turn unit off, call a pro | Inspect blower wheel and bearings, replace as needed |
| Code returns after every reset | Failed motor or board | One reset only, then stop | Isolate motor vs. board and replace faulty part |

## Repair costs

Honest US ranges (parts + labor, varies by region and model):

- **Filter replacement (DIY):** $10–$40
- **Diagnostic service call:** $90–$180
- **Reseat/repair motor connectors or wiring:** $150–$400
- **ECM motor module (replace just the module):** $250–$550
- **Full variable-speed ECM blower motor (motor plus module, installed):** $800–$1,500, occasionally higher
- **Control board replacement:** $400–$800

Variable-speed blower parts are more expensive than PSC parts, so a full motor replacement on Code 41 is one of the pricier furnace repairs. Get the exact motor and module part numbers off the blower assembly for an accurate quote, and ask whether the price covers the motor, the control module, or both.

## Related codes

- **Code 34 — Bryant Furnace Code 34: Ignition Proving Failure Fixes** (ignition-side fault, not blower)
- **Code 12 — blower on after power-up / 115V or 24V power interrupted** (the control saw a power interruption, not an ECM speed fault)
- **Code 13 — limit circuit lockout** (a safety limit has locked the unit out; treat as a heat/airflow safety fault, not a nuisance)
- **Code 14 — ignition lockout** (the control gave up on gas ignition; a gas-side safety lockout)

Codes 12, 13, and 14 are safety and ignition-side faults, not blower diagnostics. For the 40-series codes, read only what is printed on the diagnostic legend inside your blower door — the 40-series meanings differ by board generation on Bryant/Carrier variable-speed and modulating controls, so a number that means one thing on your furnace may mean something else on another model.
