---
title: "Carrier Furnace Code 21: Gas Valve Relay Fault & Fixes"
code: "Code 21"
description: "Carrier Furnace Code 21 means a gas heating lockout from a shorted valve relay or mis-wired gas valve. Causes, fixes and pro repair costs inside."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 power cycle – $600+ if the control board needs replacement"
appliesTo: "Carrier 4-flash/status-light gas furnaces (Infinity, Performance and Comfort series) using integrated furnace control boards. Legends vary by board vintage, so confirm Code 21 against the label inside your blower door."
tags:
  - carrier
  - furnace
  - code-21
  - gas-valve
  - control-board
  - lockout
parts: []
datePublished: 2026-09-15
dateModified: 2026-09-15
reviewedBy: ""
faq:
  - q: Does Carrier Code 21 reset on its own?
    a: No. This is a hard lockout that holds until you cycle power to the furnace. It does not auto-reset, and repeatedly resetting will not fix the underlying wiring or board fault.
  - q: Is Code 21 a gas supply problem?
    a: No. Code 21 is a control-circuit fault — the board sees the gas valve relay contacts closed when they should be open. It is not caused by low gas pressure, a closed shutoff, or a dirty flame sensor.
  - q: Can I fix Code 21 myself?
    a: Only the initial power cycle is homeowner-safe. If the code returns, it involves internal wiring or the control board and must be handled by a licensed HVAC technician.
  - q: Is it safe to keep running the furnace with Code 21?
    a: The furnace locks itself out for safety, so it typically will not heat. Do not attempt to bypass the lockout or force the gas valve. Have it diagnosed before running.
---

## What this code means

Carrier Furnace **Code 21** is a **Gas Heating Lockout**. The furnace control board is designed to watch the gas valve relay — the switch on the board that energizes the gas valve during a heating call. Code 21 is set when the board senses those **relay contacts are closed (valve energized) at a time when they should be open**.

In plain terms, the board thinks the gas valve is being told to open when it shouldn't be. The two documented triggers are:

- A **mis-wired gas valve** (wiring that back-feeds or improperly energizes the valve circuit), or
- A **shorted gas valve relay or its driver circuit on the control board**.

This is a **safety self-check**, not an ignition or gas-supply issue. Because an unexpectedly energized valve is a hazard, the control **locks out and does not auto-reset**. It clears **only when you cycle power** to the furnace. If it comes right back after a power cycle, the fault is still present and needs a technician.

> Note: status-code legends vary slightly between older and newer Carrier boards. Always confirm the flash/number meaning on the label inside your blower compartment door before acting.

## Common causes, ranked by probability

1. **Shorted gas valve relay or relay driver on the control board.** The most common documented cause — the relay contacts weld or the driver transistor fails shorted, so the board sees the valve circuit energized when it commanded it off.
2. **Mis-wired gas valve.** Typically appears right after a service call, valve replacement, or board swap where a wire landed on the wrong terminal, or a control wire was pinched/back-fed.
3. **Damaged or chafed wiring in the gas valve circuit.** Insulation rub-through or a stray connection creating an unintended path that energizes the valve leg.
4. **Failing control board (general).** Age, heat cycling, or a power surge degrading the board so the valve-relay monitoring circuit reports a fault.

Note: low gas pressure, a closed manual shutoff, a dirty flame sensor, or ignition failures are **not** Code 21 causes — those belong to ignition and flame-proving codes.

## Safe checks before you call anyone

These are the only steps a homeowner should perform for Code 21:

- **Confirm the code.** Read the status light/display and match it to the legend on the inside of the blower door — make sure it's truly Code 21.
- **Cycle power once.** Turn the furnace off at its dedicated switch or breaker, wait about 30 seconds, then turn it back on. This is your **one** permitted lockout reset. If the code returns, stop and call a pro.
- **Check the thermostat.** Confirm it's set to Heat with a setpoint above room temperature, and replace batteries if it's battery-powered.
- **Check the air filter.** A clogged filter won't cause Code 21, but it's worth swapping while you're there for overall furnace health.
- **Confirm the breaker is on** and the furnace switch (often looks like a light switch near the unit) is on.

Do **not** open the cabinet, touch wiring, probe the gas valve, or attempt repeated resets. Code 21 involves the internal control circuit and is technician-only beyond the single power cycle.

## How a technician will diagnose it

A licensed tech will typically:

1. **Read the fault history** on the board and confirm Code 21 versus any accompanying codes.
2. **De-energize the furnace** and inspect the **gas valve wiring** against the wiring diagram, looking for a mis-landed wire, back-feed, or chafed insulation — especially if the fault appeared after recent service.
3. **Meter the gas valve relay circuit** to determine whether the relay contacts are stuck/welded closed or the driver is shorted.
4. **Test the control board's valve output** to confirm whether the board is commanding the valve incorrectly (board fault) versus a wiring path energizing it externally.
5. **Repair the wiring** if a fault is found, or **replace the control board** if the relay/driver is confirmed shorted.
6. **Verify a clean heat cycle** — proper valve open/close timing with no recurring lockout after power-up.

If a quote jumps straight to a board replacement without any wiring inspection, it's fair to ask whether the gas valve wiring was checked first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Code 21 flashing, no heat, won't clear | Shorted valve relay/driver on board | Cycle power once; if it returns, call a pro | Meter relay/driver, replace control board |
| Code 21 appeared right after a service visit | Mis-wired gas valve | Cycle power once, then stop | Inspect wiring vs. diagram, correct landing |
| Intermittent Code 21, sometimes heats | Chafed/back-feeding wire in valve circuit | None safe beyond confirming code | Trace and repair damaged wiring |
| Code 21 plus erratic board behavior | Failing/surge-damaged control board | Cycle power once | Confirm and replace board |
| Code 21 clears on power cycle, doesn't return | One-time glitch or transient | Monitor; no further action | Only if it recurs |

## Repair costs

Honest US ballpark ranges (parts plus labor; regional variation applies):

- **Power cycle / one-time clear:** **$0** — if it doesn't return.
- **Diagnostic / service call:** **$90 – $200** typical to confirm the fault.
- **Gas valve wiring repair or re-landing:** **$150 – $350**, mostly labor.
- **Integrated furnace control board replacement:** **$400 – $700+** depending on model and board availability; Infinity/Performance boards trend to the higher end.
- **Gas valve replacement** (if a mis-wire damaged the valve or it's implicated): **$300 – $600** installed.

Because Code 21 points to the control circuit and valve wiring — not consumable parts — there are **no homeowner-installable parts** for this fault, which is why the parts list is empty.

## Related codes

- **[Carrier Furnace Code 14: Ignition Lockout Causes & Fixes](/carrier/furnace/code-14)** — the true ignition lockout, often confused with Code 21.
- **[Carrier Furnace Code 34: Ignition Proving Failure & Fixes](/carrier/furnace/code-34)** — flame-proving and gas-delivery timing issues.
- **[Carrier Furnace Code 33: Causes, Fixes & Costs](/carrier/furnace/code-33)** — limit/flame rollout related lockouts.
- **[Carrier Furnace Code 13: Meaning, Causes & Fixes](/carrier/furnace/code-13)** — another lockout-family status code.
- **[Carrier Furnace Code 12: Meaning, Causes & Fixes](/carrier/furnace/code-12)** — control/power related status.
- **[Carrier Furnace Code 41: Blower Motor Fault & Fixes](/carrier/furnace/code-41)** — blower-side board and motor faults.
