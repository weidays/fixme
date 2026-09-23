---
title: "Lennox Furnace Code E241: Flame Sensed Out of Sequence Fix"
code: "Code E241"
description: "Lennox furnace Code E241 means flame is still present after the gas valve closes. Causes, safe checks, technician fixes and honest US repair costs."
brand: lennox
equipment: furnace
severity: pro
costRange: "$0 reset – $700+ if the gas valve is replaced"
appliesTo: >
  Lennox and Dave Lennox Signature furnaces using SureLight and Unitary control boards (e.g. G60, SLP98, EL296, ML196). Exact code text and reset behavior can vary by board revision; confirm against the wiring/troubleshooting label on your unit.
tags:
  - lennox
  - furnace
  - flame-sensor
  - gas-valve
  - safety-lockout
parts: []
datePublished: 2026-09-23
dateModified: 2026-09-23
reviewedBy: ""
faq:
  - q: Is Lennox Code E241 dangerous?
    a: It can be. E241 means the control still senses flame after it commanded the gas valve to close, which points to a valve not fully shutting off gas — a genuine safety concern that needs a licensed tech promptly.
  - q: Can I fix E241 myself?
    a: No. Every real fix (gas valve, flame sensor, control board, wiring) is inside the cabinet and involves gas and line voltage. You may try one power-cycle reset, but if it returns, call a professional.
  - q: Does E241 reset on its own?
    a: On most Lennox boards E241 latches into a lockout that holds until power is cycled, since sensing flame with the valve closed is a safety fault. Behavior varies by board revision, so verify on your unit's label.
---

## What this code means

Lennox furnace **Code E241** means the control detected **flame sensed out of sequence** — specifically, the flame sensor still reports a flame **after the gas valve has been de-energized (commanded off)**.

During a normal cycle, once the control drops power to the gas valve the flame should extinguish within a second or two. If the flame-sensing circuit still reads a flame current after that point, the control raises E241 because it can no longer trust that gas flow has actually stopped. That is treated as a safety fault: the furnace assumes either the valve is leaking gas past a closed seat, or the sense circuit is falsely reporting flame.

On most Lennox SureLight and Unitary boards, E241 **latches into a lockout that holds until 24 V power is cycled** at the disconnect or breaker. The exact wording and whether it soft-locks or hard-locks can vary by board revision, so confirm against the troubleshooting label inside your furnace door.

This is a **pro-level** code. There is no safe homeowner repair beyond a single reset.

## Common causes, ranked by probability

1. **Gas valve not fully closing (valve leak-by).** The most serious cause — the valve seat is worn, contaminated, or stuck partly open, so gas keeps feeding a flame after the control shuts it off. This is the failure E241 is designed to catch.
2. **Flame sensor giving a false/residual flame signal.** A shorted, contaminated, or misrouted flame sensor lead can inject a signal that mimics flame current even when combustion has stopped.
3. **Damaged or shorted flame-sensor wiring / connector.** A pinched wire or moisture in the connector can bridge the sense circuit to a false reading.
4. **Control board fault in the flame-proving circuit.** A degraded flame-amplifier input on the board can misread residual signal as active flame.
5. **Slow flame extinguishment from crossover/carryover.** Burner debris or carbon can let a small flame linger momentarily and be sensed out of sequence, though this is less common than a valve or sensor issue.

Lennox's own troubleshooting flow for out-of-sequence flame directs the technician to verify **whether flame is actually still present** first (which isolates a leaking valve) before condemning the sensor or board.

## Safe checks before you call anyone

Keep it to these — everything else is inside the cabinet and off-limits:

- **Thermostat:** Confirm it is calling for heat correctly and, if battery-powered, that the batteries are fresh. Set it to Off while you wait for service.
- **Breaker / furnace switch:** You may cycle the furnace disconnect or breaker **once** to attempt a single reset. If E241 returns, stop and call a pro — do not repeatedly reset a lockout.
- **Air filter:** Check and replace a dirty filter; poor airflow stresses the whole burner cycle. This won't clear E241 but rules out a contributing airflow problem.
- **Visible vents and registers:** Make sure supply and return grilles are open and unblocked.
- **Condensate line (high-efficiency models):** Confirm the drain isn't obviously clogged or overflowing.

> **If you ever smell gas** — rotten-egg odor near the furnace — leave the house, do not touch switches, and call your gas utility's emergency line or 911 from outside. E241 can involve a valve that isn't sealing, so take any gas smell seriously.

## How a technician will diagnose it

A qualified tech will typically:

1. **Verify actual flame status** after the valve is commanded off — visually and with instruments — to confirm whether real flame persists (leaking valve) or the signal is false.
2. **Measure flame current (microamps)** during and after the burn to see if the sense circuit still reads current after shutoff.
3. **Inspect and test the gas valve** for leak-by, checking that it fully seats and stops gas flow when de-energized; a valve that passes gas closed is replaced.
4. **Check the flame sensor and its wiring/connector** for shorts, contamination, moisture, and correct routing.
5. **Test the control board's flame-proving input** to rule out a board fault before condemning it.
6. **Inspect burners and crossover** for debris or carbon that could delay flame extinguishment.
7. **Clear the lockout, cycle the furnace, and confirm** flame properly extinguishes on shutdown across several cycles.

Because E241 is a gas-safety fault, expect a thorough combustion check — a quote that jumps straight to "replace the board" without testing flame current or the valve deserves a second opinion.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Furnace locks out, E241 on board | Gas valve leaking past closed seat | One reset only; call pro if it returns | Test valve for leak-by; replace gas valve |
| Small flame lingers after shutoff | Slow flame extinguishment / burner carbon | None — do not open cabinet | Inspect and clean burners; verify shutoff |
| E241 with clean, prompt burner shutoff | False/residual flame-sensor signal | None | Test/clean or replace flame sensor, inspect leads |
| Code returns immediately after reset | Shorted flame-sense wiring or connector | One reset, then stop | Inspect/repair sense wiring and connector |
| Repeated E241 despite good valve & sensor | Control board flame-proving fault | None | Test flame input; replace control board |
| Gas odor with the fault | Valve not sealing / leak | Evacuate, call utility/911 | Emergency valve inspection & replacement |

## Repair costs

Honest US ranges, parts and labor combined. Actual prices vary by region and model.

- **One-time reset (no fault found):** $0 DIY, or a diagnostic fee of **$90–$180** if a tech is called out.
- **Flame sensor replacement / cleaning:** **$150–$350**.
- **Flame-sense wiring or connector repair:** **$150–$400**.
- **Gas valve replacement:** **$400–$700+** — the most likely fix when real flame persists.
- **Control board (SureLight/Unitary) replacement:** **$450–$800+**.

If your furnace is under Lennox parts warranty, the component may be covered, but labor usually is not.

## Related codes

- **Lennox Furnace Code 200: Ignition lockout** — flame never proves on startup (opposite failure to E241).
- **Lennox Furnace Code E204: Gas Valve Wiring Fix & Cost** — miswired or faulty gas-valve circuit.
- **Lennox Furnace Code E205: Gas Valve Relay Short Fix** — control relay driving the gas valve shorted.
- **Lennox Furnace Code E206: Gas Valve Relay Fix & Cost** — gas-valve relay failure on the board.
- **Lennox Furnace Code E207: Hot Surface Igniter Fix & Cost** — ignition component fault.
