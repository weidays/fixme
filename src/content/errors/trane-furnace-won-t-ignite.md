---
title: "Trane Furnace Won't Ignite: Causes, Fixes & Costs"
code: "Won't ignite"
description: "Trane furnace won't ignite? Common causes include a bad igniter, dirty flame sensor, or ignition lockout, plus DIY checks and repair costs."
brand: trane
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200+ if the control board or gas valve fails"
appliesTo: "Trane XV, XR, XC and S-series gas furnaces with hot-surface ignition and an integrated furnace control (IFC) board; exact flash-code behavior varies by board revision."
tags:
  - trane
  - furnace
  - ignition
  - no-heat
  - hot-surface-igniter
parts:
  - name: Furnace air filter
    search: furnace air filter 16x25x1
  - name: Thermostat batteries
    search: AA alkaline batteries
datePublished: 2026-09-28
dateModified: 2026-09-28
reviewedBy: ""
faq:
  - q: Why does my Trane furnace click but never light?
    a: The clicking is usually the gas valve or ignition sequence trying to fire while the igniter fails to glow, the flame won't prove, or the control has locked out after failed tries.
  - q: Can I reset a Trane furnace that won't ignite?
    a: Yes, once — unless there are signs of a rollout (burning smell, soot or scorching, or a rollout fault). Otherwise, turn the furnace switch or breaker off for 30 seconds, then back on. If it fails to ignite again or re-locks out, stop and call a technician.
  - q: Is a furnace that won't ignite dangerous?
    a: A no-ignition furnace on its own is a no-heat problem, not an emergency. But if you smell gas, leave the house and call your gas utility or 911 immediately.
---

## What this code means

"Won't ignite" describes a Trane furnace that runs through its startup sequence — inducer motor, pre-purge, igniter warm-up — but never establishes a stable flame. The integrated furnace control (IFC) board tries a set number of ignition attempts — commonly three tries on many Trane IFCs, though you should check your unit's label — and if none succeed it stops and shows a fault by flashing the LED on the control board.

The specific flash count tells you *why* ignition failed. If your Trane is flashing a code, match it in the Related codes section below — those pages cover the precise diagnosis. This page covers the general no-ignition condition and the parts most often behind it.

Before you act on any flash count, **confirm it against the diagnostic label printed inside the blower door or on the control board itself.** Some older Trane boards and third-party replacement boards number their codes differently, so the label on your furnace — not a generic list — is the authority for your machine.

Most Trane ignition faults **hold in lockout until power is cycled**, or auto-reset after a documented delay — commonly one hour on many Trane IFCs, but again, check your unit's label. After the retry limit, the furnace parks itself in a hard lockout for safety. One manual reset is fine; repeated resets are not.

## Common causes, ranked by probability

When the retry limit is reached, the board parks in a hard lockout (commonly reported as a 2-flash system lockout). That lockout is the *result*, not the cause — below are the underlying faults that lead to it, roughly in order of how often they turn up.

1. **Failed or cracked hot-surface igniter** — the most common no-ignition cause. The silicon-nitride or silicon-carbide igniter ages and eventually opens or fails to reach ignition temperature. Often shows as a 9-flash (igniter circuit open) code.
2. **Dirty or failed flame sensor** — the furnace lights but the flame isn't "proved," so the board shuts the gas within seconds and retries, then locks out. Often a low-flame-sense (8-flash) condition.
3. **Pressure switch not closing** — a blocked flue, condensate blockage, or inducer issue keeps the pressure switch open, so the board never allows ignition (3-flash).
4. **Open limit or rollout switch** — a safety switch has tripped, blocking the ignition sequence (4-flash). A tripped rollout is not a nuisance fault; see the safety note below.
5. **Gas valve or gas-valve circuit fault** — the valve doesn't open on command, or the drive circuit fails (7-flash).
6. **Control board (IFC) failure** — less common; the board mis-sequences or fails to energize outputs.

Because these map to specific flash codes, always read the LED first — then verify the count against the diagnostic label inside the blower door or on the control before you assume which fault you have. Gas-supply and burner issues fall under the flame-proving codes, not a generic control lockout.

## Safe checks before you call anyone

These are the only checks a homeowner should do — no cabinet opening.

**Stop first:** if you smell burning, see soot or scorching around the furnace, or the unit is reporting a rollout fault, **do not reset it.** Flame has left the heat exchanger. Shut off the furnace switch and call a pro. If you smell gas, leave the house and call your gas utility's emergency line or 911.

- **Thermostat:** Confirm it's set to HEAT and the setpoint is above room temperature. Replace the batteries if it's battery-powered.
- **Air filter:** A clogged filter can cause overheating and limit trips that interrupt ignition. Replace a dirty filter.
- **Breaker and furnace switch:** Check the furnace breaker and the wall switch (looks like a light switch) near the unit. Reset a tripped breaker once.
- **One reset:** If the furnace is locked out — and there are no signs of a rollout, burning smell, or scorching — turn the switch/breaker off for 30 seconds, then on. Try this **once only.**
- **Vents and registers:** Make sure supply and return vents are open and unblocked.
- **Condensate line:** On high-efficiency (condensing) models, a clogged condensate line or full trap can trip the pressure switch. Check for a full drain pan or standing water, and clear a visible clog at the drain opening.
- **Exterior panels:** Make sure the front blower-door panel is seated fully — a loose panel opens the door switch and blocks ignition.

If ignition still fails after one reset, stop and call a pro. **If you smell gas, leave the house and call your gas utility's emergency line or 911.**

## How a technician will diagnose it

A qualified tech will:

1. **Read the flash code** on the IFC board, check it against the diagnostic label for that board, and note whether it's a lockout or soft fault.
2. **Watch a full ignition cycle** — inducer start, pressure switch closure, igniter glow, gas valve opening, and flame sense.
3. **Test the hot-surface igniter** for continuity and resistance, and inspect it for cracks and hot-spots.
4. **Check the flame sensor** microamp signal and clean or replace it if the flame current is low.
5. **Verify the pressure switch** closes with proper inducer draft, and inspect the flue and condensate path for blockage.
6. **Test the gas valve** voltage and confirm the valve opens; verify inlet and manifold gas pressure.
7. **Inspect limit and rollout switches** and the control board outputs with a multimeter — and, if a rollout tripped, find out why flame left the heat exchanger before restoring heat.

A good quote names the specific failed component and the flash code, not just "furnace won't light."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Igniter never glows | Failed hot-surface igniter | One reset; check breaker | Test and replace igniter |
| Lights briefly then shuts off, retries | Dirty/failed flame sensor | Replace filter; one reset | Clean or replace flame sensor, check flame current |
| Inducer runs, no ignition attempt | Pressure switch open, blocked flue/condensate | Clear visible condensate clog | Test pressure switch, clear flue |
| No sequence at all after reset | Tripped limit or door switch | Reseat blower panel; replace filter | Test safeties, find overheat cause |
| Burning smell, soot/scorching, or rollout fault | Tripped rollout — flame escaped the heat exchanger | **Do not reset.** Shut off the furnace switch and call a pro (gas utility if you smell gas) | Find the cause of the rollout, inspect heat exchanger and burners |
| Clicks but no flame | Gas valve or valve circuit fault | None — call a pro | Test gas valve and drive circuit |
| Repeated hard lockout | Retry limit reached, underlying fault | One reset only | Diagnose root cause, clear lockout |

## Repair costs

Ranges are typical US installed prices; your area and model may vary.

- **DIY filter / thermostat batteries:** $0–$40
- **Hot-surface igniter replacement:** $150–$350
- **Flame sensor clean or replace:** $100–$250
- **Pressure switch replacement:** $150–$350
- **Limit or rollout switch replacement:** $150–$350
- **Gas valve replacement:** $300–$650
- **Integrated furnace control (IFC) board:** $400–$1,200 — two-stage and variable-speed boards (XV/XC and S9V-series furnaces) sit at the top of that range, so a quote near $900–$1,200 for a variable-speed board is not automatically out of line
- **Diagnostic / service call:** $90–$180 (often applied to the repair)

If the furnace is more than 15 years old and needs a major part like the gas valve or control board, ask about repair-versus-replace before committing.

## Related codes

Flash counts below follow the widely published Trane/American Standard IFC list — confirm the count against the diagnostic label inside your blower door or on the control before acting on it.

- **Trane Furnace 2 Flashes: System Lockout Causes & Fixes** — the hard lockout after failed ignition tries.
- **Trane Furnace 3 Flashes: Pressure Switch Error Fixes** — inducer/draft problems that block ignition.
- **Trane Furnace 4 Flashes: Open Limit Circuit Causes & Fixes** — overheat safeties that stop the sequence.
- **Trane Furnace 5 Flashes: Flame Sensed Without Gas** — flame-proving faults.
- **Trane Furnace 7 Flashes: Gas Valve Circuit Error Fixes** — gas valve won't open on command.
- **Trane Furnace 8 Flashes: Low Flame Sense Signal Fix** — dirty or weak flame sensor.
- **Trane Furnace 9 Flashes: Igniter Circuit Open Fixes** — failed hot-surface igniter.
