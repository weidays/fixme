---
title: "Carrier Furnace Clicking But Not Starting: Causes & Fixes"
code: "Clicking but not starting"
description: "Carrier furnace clicking but not starting? Causes include a cracked igniter, dirty flame sensor, or weak inducer draft. Fixes and costs from $0 to $1,200."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $1,200 if the control board (communicating boards run highest) or gas valve needs replacement"
appliesTo: "Most Carrier gas furnaces with hot-surface ignition and a control board (Comfort, Performance and Infinity series). Behavior varies by board generation."
tags:
  - carrier
  - furnace
  - clicking
  - no-start
  - ignition
parts:
  - name: "Furnace air filter"
    search: "furnace air filter 16x25x1"
  - name: "Thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-09-26
dateModified: 2026-09-26
reviewedBy: ""
faq:
  - q: "Why does my Carrier furnace click but not light?"
    a: "The click is usually a relay or the gas valve trying to open. If ignition never follows, the most common causes are a weak or cracked hot-surface igniter, a dirty flame sensor that drops the flame right after light-off, or a weak inducer that can't close the pressure switch."
  - q: "Is the clicking sound from the furnace dangerous?"
    a: "A single relay click is normal. Rapid or repeated clicking with no ignition can mean the board is retrying and may go into lockout. It is not immediately dangerous, but you should stop cycling power and call a technician."
  - q: "Can I fix a clicking Carrier furnace myself?"
    a: "You can safely check the thermostat, batteries, air filter, breaker, and vents, and try one reset. Igniter, flame sensor, gas valve, and control board work is inside the cabinet and must be done by a licensed HVAC technician."
---

## What this code means

"Clicking but not starting" is not a numbered Carrier fault code — it's a symptom homeowners describe when the furnace *tries* to run but never fully ignites. The clicking is usually one of the following: the control board's relay energizing, the gas valve solenoid pulling in, or the board rapidly retrying an ignition sequence that keeps failing.

On most Carrier gas furnaces (Comfort, Performance, and Infinity series with a control board and hot-surface igniter), the startup sequence is: call for heat → inducer motor spins up → pressure switch closes → igniter glows → gas valve opens → flame proves. A "click with no start" means the sequence stalled somewhere, and depending on where it stalls, the board may retry, flash a specific fault code, or go into a hard lockout.

**What the repeated clicking usually represents:** an ignition retry loop or a soft lockout. The board clicks the gas valve open, fails to prove flame, closes the valve and tries again. After the retry limit is reached, the board stops trying and locks out. That retry-and-lockout behavior is the *outcome* of an underlying failure — it tells you the sequence is failing, not why. The "why" is in the cause list below.

**Important:** if the LED on the control board is flashing a numbered code, that code is more precise than this symptom. Read it through the cabinet sight glass and cross-reference the specific Carrier code page. Whether the furnace auto-resets or holds until power is cycled depends on *which* fault the clicking leads into — an ignition lockout typically auto-resets after about three hours on most Carrier boards, though behavior varies by board generation, while some board faults hold until power is cycled.

## Common causes, ranked by probability

1. **Failing igniter** — a cracked or weakened hot-surface igniter is the single most common reason the board reaches the gas-valve click stage but never lights. It may still glow faintly, or not at all.
2. **Dirty or oxidized flame sensor** — the furnace lights briefly then drops out because the board can't read a flame signal, producing repeated click-light-die cycles that sound like clicking without a true start.
3. **Pressure switch not closing / weak inducer draft** — the inducer starts but can't build enough draft to close the pressure switch (weak motor, blocked vent or intake, water in a pressure-switch hose), so the board never advances past the click.
4. **Low-voltage / transformer or fuse issue** — marginal or missing 24V power causes the board to click relays without completing the sequence.
5. **Gas valve solenoid fault** — the valve clicks (energizes) but doesn't fully open, or opens intermittently.
6. **Failing control board relay** — the relay makes an audible click but doesn't reliably pass power to the inducer, igniter, or gas valve.

Control boards and gas valves are the least common failures on this list and the most expensive parts, so they should be the last suspicion, not the first. The exact order the board follows and whether it flashes a code varies by board generation, so treat this as a general ranking, not a fixed sequence.

## Safe checks before you call anyone

These are the only steps a homeowner should perform:

- **Thermostat:** Confirm it's set to HEAT and the setpoint is above room temperature. Replace the batteries if it's battery-powered.
- **Air filter:** A severely clogged filter can trip safety limits. Replace it if it's dirty.
- **Breaker / furnace switch:** Check the furnace breaker and the wall switch near the unit (it looks like a light switch). Reset the breaker once if tripped.
- **Vents and registers:** Make sure supply and return vents are open and unobstructed.
- **Condensate line (high-efficiency models):** If the drain is clogged, a float switch can block startup. Look for standing water near the unit. You may clear a visible obstruction at the accessible end of the drain line, or empty a full trap pan. Do **not** disassemble drain plumbing, and do not reach inside the cabinet.
- **One reset:** Turn the furnace off at the switch for 60 seconds, then back on — **once**. If it clicks and fails again, stop. Do not repeatedly cycle power to a unit that keeps failing.

If it still clicks without starting, it's a technician job. Do not open the cabinet.

## How a technician will diagnose it

A licensed tech will typically:

- Read the control board's flashing LED code and check stored fault history.
- Watch the full ignition sequence to see exactly where it stalls (inducer, pressure switch, igniter, gas valve, flame prove).
- Check the hot-surface igniter resistance and inspect for cracks.
- Measure the flame-sensor microamp signal and clean or replace the sensor.
- Test the inducer motor draw and verify the pressure switch closes.
- Measure 24V control voltage and check the low-voltage fuse and transformer.
- Verify gas valve operation and inlet/manifold pressures.
- Inspect the control board relays and connections for pitting or intermittent contact.

Cross-check any quote against where the sequence actually failed — a board replacement for a problem that's really a dirty flame sensor is a red flag.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Click at gas valve but no ignition | Failing igniter | None | Test igniter resistance, inspect for cracks, replace |
| Clicks, lights briefly, then dies repeatedly | Dirty flame sensor | None beyond one reset | Clean/replace flame sensor, check microamp signal |
| Single click, inducer spins but nothing advances | Pressure switch not closing / weak inducer | Check condensate line and visible vent terminations | Test inducer draw, pressure switch, vent path |
| Faint click, nothing runs at all | Low 24V / blown fuse / transformer | Check breaker and switch | Test transformer, replace low-voltage fuse |
| Repeated clicking, then no response | Ignition retry limit reached / soft lockout | One reset only | Diagnose the underlying ignition failure, clear lockout |
| Relay clicks, no power downstream | Failing gas valve or control board relay | None | Verify valve operation, test board, replace if confirmed |

## Repair costs

Honest US ballpark ranges (parts + labor, varies by region and model):

- **DIY safe checks (filter, batteries, reset):** $0–$40
- **Flame sensor clean or replace:** $80–$250
- **Pressure switch replacement:** $150–$350
- **Hot-surface igniter replacement:** $150–$400
- **Gas valve replacement:** $300–$650
- **Inducer motor replacement:** $400–$1,200
- **Control board replacement:** $400–$1,200
- **Diagnostic / service call:** $90–$180 (often credited toward the repair)

Infinity-series communicating boards routinely land at or above the top of the control-board range. A quote near $1,200 for a communicating board is not automatically a gouge. Always get the specific fault confirmed before authorizing a board or gas valve swap — those are the two most expensive parts and among the least likely to be the actual failure.

## Related codes

If your board shows a numbered code instead of just clicking, these pages are more specific:

- **Carrier Furnace Code 14: Ignition Lockout Causes & Fixes**
- **Carrier Furnace Ignition Lockout: Causes, Fixes & Costs**
- **Carrier Furnace Code 34: Ignition Proving Failure & Fixes**
- **Carrier Furnace Code 42: Causes & Fixes**
- **Carrier Furnace Code 21: Gas Heating Lockout — Causes & Fixes**
- **Carrier Furnace Flame Sensor Problems: Causes & Fixes**
- **Carrier Furnace Keeps Shutting Off: Causes, Fixes & Costs**
- **Carrier Furnace Short Cycling: Causes, Fixes & Costs**

Status-code meanings differ between board generations. Confirm the code against the installation or service manual for your specific furnace before acting on it.
