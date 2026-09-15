---
title: "Carrier Furnace Code 45: Control Circuitry Lockout Fix"
code: "Code 45"
description: "Carrier furnace Code 45 means a control circuitry lockout from flame-sense, software, or gas-valve relay faults. Causes, fixes and repair costs."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $700 if the control board is replaced"
appliesTo: "Carrier gas furnaces with LED-flash diagnostics (Infinity, Performance and Comfort series) using Bryant/Carrier-family control boards. Flash-code legends vary by board revision, so confirm against the label on the blower-door."
tags:
  - carrier
  - furnace
  - code-45
  - control-board
  - lockout
parts: []
datePublished: 2026-09-15
dateModified: 2026-09-15
reviewedBy: ""
faq:
  - q: Will Carrier Code 45 clear on its own?
    a: Yes. Code 45 is a control circuitry lockout that auto-resets after one hour. If it clears and the furnace runs normally, it may have been a one-time glitch, but a repeat means the board needs attention.
  - q: Can I fix Code 45 myself?
    a: The only safe homeowner step is a single power cycle at the breaker and confirming the filter and thermostat are fine. The fault lives on the control board, so diagnosis and any board or wiring work is a licensed technician's job.
  - q: Does Code 45 mean my control board is bad?
    a: Not always, but often. It points to a flame-sense circuit failure, a software check error, or a stuck gas-valve relay on the board. If it repeats after a reset, a control board replacement is the usual fix.
  - q: Is Code 45 dangerous?
    a: The lockout itself is a safety response that stops the furnace, so it is not an immediate hazard. But a stuck gas-valve relay is a control fault that should be checked promptly by a pro rather than ignored.
---

## What this code means

Carrier Code 45 is a **Control Circuitry Lockout**. The furnace's control board has detected a fault in its own internal circuitry and has shut the system down as a safety measure.

Per Carrier's documentation, this lockout is triggered by one of three things:

- A **flame-sense circuit failure** (the board's sensing hardware, not the flame itself)
- A **software check error** (the board's self-test failed)
- A **stuck gas-valve relay** on the control board

The good news is that Code 45 **auto-resets after one hour** — you do not have to do anything to clear the lockout state. The bad news is that if the code returns after resetting, the control board is almost always the cause and the usual fix.

Because the fault is inside the control board and its low-voltage circuitry, this is a **pro-level repair**. There is no burner, gas-supply, or airflow adjustment a homeowner can make that resolves Code 45.

## Common causes, ranked by probability

1. **Failed control board** — the single most common outcome, especially if the code repeats. The flame-sense circuit or the board's onboard logic has degraded or failed.
2. **Stuck gas-valve relay on the board** — the relay that switches the gas valve has welded or hung, which the board detects and locks out on.
3. **Software check error / one-time glitch** — a transient fault (power surge, brownout, or noise) that trips the self-test. This may clear and never return.
4. **Flame-sense circuit fault** — degradation in the sensing circuitry on the board itself (distinct from a dirty flame sensor, which throws flame-proving codes, not Code 45).

Note: gas-supply, ignition, and pressure-switch problems belong to other codes (12, 13, 14, 22, 23, 31–34) — not to Code 45. Do not let a tech chase those under this code.

## Safe checks before you call anyone

These are the only steps a homeowner should do:

- **Wait for the auto-reset.** Code 45 clears itself after one hour. Note whether it returns.
- **Cycle power once.** Turn the furnace switch (or its breaker) off, wait 30 seconds, and turn it back on — a single reset only. Do not repeatedly reset a locked-out unit.
- **Check the air filter.** A clogged filter won't cause Code 45, but replacing a dirty one is good hygiene while you're at the furnace.
- **Confirm the thermostat.** Make sure it's set to Heat, the temperature is above room temp, and (if battery-powered) the batteries are fresh.
- **Look at your registers and vents.** Confirm supply and return vents are open and unobstructed.
- **Check the condensate line** (high-efficiency models) for standing water or a clog.

If the code returns after your single reset, stop and call a technician. Everything else — the board, relays, sensing circuits, and wiring — is inside the cabinet and off-limits.

## How a technician will diagnose it

A qualified tech will typically:

1. **Read the stored flash codes** and confirm Code 45 against the board-specific legend on the blower-door label (legends vary by board revision).
2. **Inspect the control board** for visible damage — scorching, swollen components, corroded traces, or a burnt relay.
3. **Test the gas-valve relay** for a stuck or welded contact using a multimeter.
4. **Check the flame-sense circuit** wiring and connections back to the board.
5. **Verify incoming line and low-voltage power** to rule out surges or a failing transformer feeding the board.
6. **Confirm grounding**, since poor ground can produce erratic flame-sense readings.

If the board fails these checks — or the code returns with no other explanation — the tech will recommend replacing the control board. Ask them to confirm the exact board part number matches your furnace model.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Code 45, furnace resumes after ~1 hour and stays running | One-time software glitch / surge | Note it; monitor for repeats | No repair needed unless it recurs |
| Code 45 returns repeatedly | Failed control board | Single power cycle only | Test and replace control board |
| Furnace tries to run then locks out with Code 45 | Stuck gas-valve relay on board | None — do not open cabinet | Test relay, replace control board |
| Code 45 with no heat at all | Flame-sense circuit failure on board | Confirm thermostat/breaker | Inspect sensing circuit; replace board |
| Code 45 after a storm or power outage | Power surge tripped self-test | Cycle power once | Verify board integrity and surge protection |

## Repair costs

Honest US ranges (parts + labor; regional and model differences apply):

- **Single reset / one-time glitch:** **$0** if it doesn't return.
- **Service call / diagnostic:** **$90 – $180** for a tech to read codes and test the board.
- **Control board replacement:** **$400 – $700+** installed. Higher-end Infinity/Performance boards and communicating systems can run above this.
- **Gas-valve relay fault:** typically resolved by replacing the board, so it falls in the same **$400 – $700** range rather than a separate part.

If your furnace is out of warranty and the board is the confirmed fix, get the exact part number and compare quotes. If it's under Carrier's parts warranty, you may only pay labor.

## Related codes

- **Carrier Furnace Code 21: Gas Valve Relay Fault & Fixes** — a related gas-valve relay issue on the control board.
- **Carrier Furnace Code 22: Abnormal Flame-Proving Signal** — for flame-sensing problems tied to the flame itself, not the board circuitry.
- **Carrier Furnace Code 14: Ignition Lockout Causes & Fixes** — a different lockout triggered by failed ignition attempts.
- **Carrier Furnace Code 34: Ignition Proving Failure & Fixes** — for flame-proving faults during startup.
- **Carrier Furnace Code 24: Blown Secondary Fuse & Fixes** — for low-voltage power faults that can affect the board.
