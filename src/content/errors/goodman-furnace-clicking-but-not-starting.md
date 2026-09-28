---
title: "Goodman Furnace Clicking But Not Starting: Fixes"
code: "Clicking but not starting"
description: "Goodman furnace clicks but won't start? Causes include a stuck pressure switch, failing inducer, weak igniter, or control board fault. Fixes and costs inside."
brand: goodman
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $1,800 if the control board or blower ECM motor is replaced"
appliesTo: "Most Goodman gas furnaces (GMVC, GMEC, GMES, GCES, GMS8/GDS8/GMH8 series) with an integrated ignition control board. Exact relay and click behavior varies by board revision."
tags:
  - goodman
  - furnace
  - no-start
  - clicking
  - control-board
parts:
  - name: Furnace air filter
    search: furnace air filter 16x25x1
  - name: Thermostat batteries (AA/AAA)
    search: aa aaa alkaline batteries
datePublished: 2026-09-27
dateModified: 2026-09-27
reviewedBy: ""
faq:
  - q: Why does my Goodman furnace click but not start?
    a: The click is usually a relay on the control board energizing as the start sequence begins, but the sequence stalls before ignition. Common causes are a pressure switch that won't close, a failing inducer motor, a weak or cracked igniter, and less often a control board fault. Most fixes are technician work.
  - q: Is it safe to keep letting the furnace try to start?
    a: No. Repeated failed ignition trials release gas that never burns and stress the control board. Try one reset at the breaker, and if it still only clicks, shut it off and call a technician. If you smell gas or anything burning, leave the house first and call the gas utility or 911.
  - q: Can I fix a clicking furnace myself?
    a: You can check the thermostat, filter, breaker, and panels, and try one reset. Anything past that, such as testing relays, the igniter, or the blower, needs a technician with a multimeter and gas-safety training.
---

## What this code means

**Safety first:** if you smell gas, notice a burning odor, or see any evidence of flame rollout (scorching or flame outside the burner compartment), leave the house and call your gas utility or 911 before doing any of the checks below.

"Clicking but not starting" isn't a numbered Goodman flash code — it's a symptom homeowners hear at the furnace. The clicking is normally a **relay on the integrated ignition control board** pulling in as the start sequence begins (or, in some cases, chattering), or the **inducer/blower relay** trying to energize. The furnace begins its start sequence, something interrupts it, and the board either retries or holds.

On most Goodman furnaces the normal start order is: thermostat call → inducer motor spins up → pressure switch closes → igniter glows → gas valve opens → flame proves → blower starts. A "click with no start" means the sequence stalls somewhere in that chain, usually at the inducer/pressure-switch/igniter stage before flame is ever proved.

Watch the **LED on the control board through the sight glass** while it clicks. If it's flashing a numbered code, look that code up instead — those are more specific. A steady click with a status LED but no flash code, or a click with no LED at all, points to a control-circuit or power problem rather than a proven ignition fault.

Whether the furnace auto-retries or locks out **depends on the board revision**. Many Goodman boards attempt several ignition tries, then hold in lockout until power is cycled; others retry indefinitely on certain faults. If yours has locked out, a single power cycle is the only reset a homeowner should perform.

## Common causes, ranked by probability

1. **Pressure switch not closing** — a blocked flue or intake, a plugged condensate trap on condensing models, a pinched sensing hose, or a bad switch keeps the sequence from advancing past the inducer stage (see the dedicated 2-flash and 3-flash pages).
2. **Inducer motor not starting** — a seized or failing inducer draws current and clicks the relay, but doesn't spin up, so the pressure switch never closes and the board halts.
3. **Cracked or open hot-surface igniter** — the board sequences to ignition, but a cracked or aged igniter never reaches temperature, so no flame proves and the cycle aborts.
4. **Blower motor or blower relay fault** — under some conditions the board clicks trying to bring in the blower relay but the ECM/PSC motor won't run.
5. **Failing transformer or low control voltage** — marginal 24V can make relays click without fully energizing.
6. **Control board failure** — a relay that can no longer pull in cleanly, corroded traces, a bad relay solder joint, or a failed microprocessor produces clicking with no follow-through. This is real, but it is diagnosed after the items above are ruled out, not before.

## Safe checks before you call anyone

These are the only steps a homeowner should do:

- **Thermostat:** Confirm it's set to Heat and the setpoint is several degrees above room temperature. Replace the batteries if it's battery-powered.
- **Air filter:** A clogged filter can trip limits and interrupt the start sequence. Replace a dirty filter.
- **Breaker and furnace switch:** Check the breaker for the furnace and the light-switch-style disconnect near the unit. Flip the breaker fully off, wait 30 seconds, then on — this is your **one reset attempt**.
- **Vents and registers:** Make sure supply and return vents are open and unblocked.
- **Condensate line:** On high-efficiency (condensing) Goodman furnaces, a clogged condensate line can back up and trip the pressure switch. Look at the drain and pan — note whether they're visibly full or overflowing, and at most clear an obvious external obstruction. Leave trap disassembly and line flushing to the technician.
- **Panels:** Make sure the blower door is fully seated — the door safety switch must be pressed for the furnace to run.

If it still only clicks after one reset, stop and call a pro. Do not repeatedly cycle a locked-out furnace.

## How a technician will diagnose it

A technician sanity-checks the same sequence you hear:

1. **Read the LED status/flash code** at the board and note the exact pattern.
2. **Watch the start sequence live** — confirm which relay clicks and whether the inducer spins.
3. **Test the inducer motor** for current draw and mechanical binding.
4. **Check the pressure switch** for closure and test the hoses/ports, flue/intake, and condensate trap for blockage.
5. **Test the hot-surface igniter** resistance and glow.
6. **Measure 24V control voltage** and transformer output to rule out low-voltage relay chatter.
7. **Inspect the blower motor** (ECM module or PSC capacitor) and its relay.
8. **Isolate the control board** — if voltages are correct and the sequence still stalls, the board relay or processor is condemned.

A good quote names the specific failed part, not just "replace the board."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Click, inducer runs, then shuts off | Pressure switch not closing / blocked flue or condensate | Check whether the drain/pan is visibly full or overflowing | Test switch, clear flue and trap, replace switch |
| Click, then inducer tries but stalls | Seized/failing inducer motor | None | Test current draw, replace inducer |
| Click, inducer runs, no igniter glow | Cracked/open hot-surface igniter | None | Test and replace igniter |
| Click but blower never runs | Blower motor / relay fault | Check filter, reset once | Test ECM or capacitor, replace motor/relay |
| Rapid clicking, nothing spins | Low 24V / control board relay chattering | Try one breaker reset | Test transformer, replace transformer or board |
| No LED, only clicking | Board or power fault | Check breaker/disconnect | Test board power, replace board |

## Repair costs

Honest US ranges, parts and labor:

- **Breaker/thermostat/filter reset:** $0 DIY
- **Thermostat batteries or filter:** $10 – $40
- **Hot-surface igniter:** $150 – $350
- **Pressure switch:** $150 – $300
- **Inducer motor:** $400 – $1,200
- **Blower motor capacitor (PSC):** $150 – $300
- **Blower ECM motor/module:** $450 – $1,800
- **Integrated control board:** $400 – $1,200
- **Diagnostic/service call:** $90 – $180 (often credited toward the repair)

Prices vary by region, model, and whether the part is still under Goodman's parts warranty — keep your registration info handy. Variable-speed and communicating boards sit at the high end of the board range.

## Related codes

- **Goodman Furnace 2 Flashes: Pressure Switch Stuck Closed**
- **Goodman Furnace 3 Flashes: Pressure Switch Stuck Open**
- **Goodman Furnace 8 Flashes: Igniter Circuit Fault Fix**
- **Goodman Furnace Won't Ignite: Causes, Fixes & Costs**
- **Goodman Furnace Won't Turn On: Causes, Fixes & Costs**
- **Goodman Furnace Blower Not Running: Causes & Fixes**
- **Goodman Furnace Ignition Lockout: Causes, Fixes & Costs**
