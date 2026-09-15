---
title: "Carrier Furnace Code 44: Blower Calibration Fault & Fixes"
code: "Code 44"
description: "Carrier Furnace Code 44 means a blower motor calibration fault on variable-speed boards. Causes, safe checks, fixes and repair costs explained."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 DIY airflow check – $900 if the variable-speed blower motor or module needs replacement"
appliesTo: >
  Carrier variable-speed and ECM-equipped gas furnaces (Infinity/Performance series and comparable Bryant boards). Code 44 relates to blower calibration on variable-speed control boards; on some older or single-stage boards number 44 is unused or carries a different legend, so always confirm against the label inside your blower door.
tags:
  - carrier
  - furnace
  - code-44
  - blower-motor
  - variable-speed
  - ecm
parts: []
datePublished: 2026-09-15
dateModified: 2026-09-15
reviewedBy: ""
faq:
  - q: Is Carrier Code 44 a gas or ignition problem?
    a: No. Code 44 is a blower calibration fault on variable-speed boards, not a gas-valve or flame problem. It means the blower motor ran outside the expected range during its calibration routine.
  - q: Can I clear Code 44 myself?
    a: You can try one power cycle at the breaker after checking the filter and vents. If the code returns, the calibration is failing for a mechanical or electrical reason inside the cabinet and needs a technician.
  - q: Will my furnace still heat with Code 44?
    a: Sometimes it runs on a default fixed blower speed, and sometimes it locks out heating entirely. Behavior varies by board, so treat it as a real fault even if warm air still flows.
  - q: How much does it cost to fix Code 44?
    a: Anywhere from $0 if a dirty filter or blocked vents caused it, up to $500–$900 if the ECM blower motor or its control module has to be replaced.
---

## What this code means

Carrier Furnace **Code 44 is a Blower Calibration Fault**. On variable-speed (ECM) furnace boards, the blower motor runs a calibration routine that measures how the motor and your duct system behave together. If the motor turns too fast, too slow, or otherwise operates **outside the expected range during that calibration**, the control logs Code 44.

This is **not** a gas-valve, ignition, or flame-proving code. It points at the blower motor, its control module, the wiring between them, or an airflow condition (like a badly restricted duct or filter) that throws the calibration off.

Whether the furnace keeps heating depends on the board. Some Carrier boards fall back to a **default fixed blower speed** and keep running while flashing the code; others **hold the fault** and refuse to heat until the calibration passes. Because legends and behavior vary by board, confirm the exact meaning on the diagnostic label inside your blower compartment door.

## Common causes, ranked by probability

1. **Severe airflow restriction during calibration** — a clogged filter, closed or blocked registers, or a collapsed/obstructed duct can make the motor read out of range.
2. **Failing or worn ECM blower motor** — bearings dragging or windings degrading push the motor speed outside spec.
3. **Blower motor control module fault** — the ECM module (mounted on or near the motor) miscommunicates or miscalculates during calibration.
4. **Loose or damaged motor/control wiring or connectors** — intermittent connections corrupt the calibration handshake.
5. **Incorrect blower configuration for the installed model** — wrong dip-switch, airflow, or duct configuration set at install, so the motor never lands in the expected window.
6. **Control board fault** — less common, but a failing main board can misjudge the calibration data.

Carrier's own troubleshooting generally has the technician confirm airflow and wiring first, then test the motor and its module, then the board — which matches this order.

## Safe checks before you call anyone

Stick to these — anything inside the cabinet is a technician's job.

- **Replace or clean the air filter.** A heavily clogged filter is the most common homeowner-fixable cause of blower-range faults. Fit the correct size and orientation.
- **Open all supply and return registers.** Make sure furniture, rugs, or closed dampers aren't starving the system. The blower needs unrestricted airflow to calibrate correctly.
- **Check the return-air path.** Confirm the return grille isn't blocked and the filter slot cover is seated.
- **Verify the thermostat** is set to Heat with a temperature above room temperature; replace thermostat batteries if it's battery-powered.
- **Try one power cycle.** Turn the furnace off at its switch or breaker, wait 30 seconds, and restore power to let the board re-run calibration once. Do **not** repeatedly reset a unit that keeps faulting.
- **Confirm the blower door is fully seated** — a panel that isn't closed can drop out the door-switch and mimic faults.

If Code 44 returns after a clean filter, open vents, and one reset, call a licensed HVAC technician.

## How a technician will diagnose it

A good tech should:

1. **Read the fault history** from the control board and confirm 44 is a blower calibration fault on your specific model.
2. **Verify static pressure and airflow** — measuring external static pressure to rule out duct restriction throwing off calibration.
3. **Inspect and test the ECM blower motor** — checking for dragging bearings, correct voltage supply, and whether the motor spins freely.
4. **Test the motor control module** and its communication with the main board.
5. **Check all motor and control connectors and wiring** for damage, corrosion, or looseness.
6. **Confirm the blower/airflow configuration** (dip switches, model setup) matches the installed furnace.
7. **Re-run calibration** and confirm the motor lands within range before returning the system to service.

If a quote jumps straight to replacing the motor without checking static pressure or wiring, ask why.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Code 44 clears after new filter | Airflow restriction during calibration | Replace filter, open all vents | None needed if resolved |
| Blower runs but at one fixed speed | Board using default after calibration fail | One reset; check filter/vents | Diagnose motor/module, re-calibrate |
| Blower won't start, code holds | Failed ECM motor or module | One reset only | Test and replace motor or control module |
| Code intermittent, blower surges | Loose motor wiring/connector | Confirm panel seated | Inspect, repair connectors and wiring |
| New install, code from day one | Wrong airflow/config setup | None | Correct dip-switch/airflow configuration |
| Code with weak airflow everywhere | Collapsed/blocked duct | Check registers, return grille | Measure static pressure, correct ductwork |

## Repair costs

Honest US ranges (parts + labor, varies by region):

- **Filter replacement (DIY):** $10–$40.
- **Diagnostic / service call:** $90–$180.
- **Wiring or connector repair:** $150–$350.
- **ECM motor control module:** $300–$650 installed.
- **Variable-speed (ECM) blower motor:** $500–$900 installed — the biggest single cost for this code.
- **Duct/static-pressure correction:** $200–$1,200 depending on the fix.
- **Main control board (rare for this code):** $400–$700 installed.

Because Code 44 lives on premium variable-speed equipment, motor and module parts run higher than standard blower components. Always get the specific fault confirmed before authorizing a motor swap.

## Related codes

- **Carrier Furnace Code 41: Blower Motor Fault & Fixes** — the general blower motor fault, distinct from a calibration failure.
- **Carrier Furnace Code 42: Inducer Motor Fault & Fixes** — for the draft inducer, not the main blower.
- **Carrier Furnace Code 45: Control Circuitry Lockout Fix** — for board-level control faults.
- **Carrier Furnace Code 43: Pressure Switch Calibration Fault** — another calibration-type fault, but on the pressure-switch circuit.
