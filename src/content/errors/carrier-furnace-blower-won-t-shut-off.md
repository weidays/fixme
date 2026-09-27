---
title: "Carrier Furnace Blower Won't Shut Off: Causes & Fixes"
code: "Blower won't shut off"
description: "Carrier furnace blower running non-stop? Causes include fan setting, bad limit switch, or a stuck fan relay, plus DIY checks and repair costs."
brand: carrier
equipment: furnace
severity: diy
costRange: "$0 DIY – $1,200 if the integrated control board needs replacement"
appliesTo: "Most Carrier gas furnaces with integrated furnace control boards (commonly HK42FZ-series on Carrier gas furnaces; Infinity/variable-speed models use a different control) including Comfort, Performance and Infinity series; behavior varies by thermostat type and single- vs variable-speed blowers."
tags:
  - carrier
  - furnace
  - blower
  - fan-wont-stop
  - diy
parts:
  - name: "Furnace air filter"
    search: "furnace air filter 16x25x1 MERV 11"
  - name: "Thermostat batteries (AA/AAA)"
    search: "AA AAA alkaline batteries"
datePublished: 2026-09-26
dateModified: 2026-09-26
reviewedBy: ""
faq:
  - q: "Is it bad to let my Carrier blower run continuously?"
    a: "A continuously running blower isn't dangerous, but it wastes electricity and can circulate cooler air. If it never stops even in AUTO, something needs diagnosis."
  - q: "Why does my blower run after the burners shut off?"
    a: "That's normal. Carrier furnaces run a fan-off delay (typically 90–180 seconds) to purge remaining heat from the heat exchanger. It should stop after that."
  - q: "Can I fix a blower that won't shut off myself?"
    a: "You can check the thermostat fan setting, replace batteries, and swap the filter. Limit switch and control board work is technician work inside the cabinet. The blower relay is part of the control board, so a failed relay generally means replacing the board."
---

## What this code means

"Blower won't shut off" isn't a flash-code on a Carrier furnace — it's a behavior. Your indoor blower (the fan that pushes warm air through your ducts) keeps running even when there's no active heat call. Depending on the situation, it may run continuously 24/7, or it may keep running long after the burners have gone out.

The single most important thing to know first: **a fan-off delay is normal.** After the burners shut down, the Carrier control board deliberately keeps the blower running for roughly 90 to 180 seconds to pull leftover heat out of the heat exchanger. That's efficiency, not a fault. Only when the blower runs *well* past that delay — or never stops at all — is there a real problem.

This behavior is not a hard lockout and there is no stored code that clears with a power cycle. The blower simply follows whatever signal the thermostat, limit switch, or control board is sending it.

## Common causes, ranked by probability

1. **Thermostat fan set to ON instead of AUTO.** By far the most common cause. In ON, the blower runs continuously by design — this is not a fault. Switch it to AUTO and the fan stops between cycles.
2. **Thermostat wiring or a smart-thermostat "circulate" setting.** Some Nest/ecobee/Carrier smart thermostats have a fan circulation mode that runs the blower a set number of minutes per hour. Check the thermostat's fan schedule.
3. **Open or tripped high-limit switch.** If the furnace overheats (often from a dirty filter or blocked returns), the limit switch cuts the burners but keeps the blower running continuously to cool the heat exchanger. The blower runs to protect the furnace.
4. **Stuck or welded fan relay on the control board.** The relay that switches the blower has failed closed, feeding power to the motor even with no call for fan. On Carrier integrated furnace controls this relay is soldered to the board and is not a field-replaceable part — in essentially all residential cases a welded relay means the whole control board gets replaced.
5. **Failed control board / bad fan-off timing.** The integrated furnace control mis-times the fan-off delay or holds the blower output on.
6. **Shorted thermostat wire (G terminal).** A pinched or shorted G (fan) wire can energize the blower continuously.

Causes 3 through 6 all require opening the cabinet and are technician work.

## Safe checks before you call anyone

These are the only checks a homeowner should perform:

- **Set the thermostat fan to AUTO.** If it was on ON, that solves it. Give it a couple of minutes to stop.
- **Check smart-thermostat fan settings.** Look for a "circulate," "fan runtime," or scheduled-fan feature and turn it off to test.
- **Replace the thermostat batteries.** Weak batteries can cause erratic signaling on battery-powered thermostats.
- **Replace a dirty air filter.** A clogged filter causes overheating that keeps the blower running on the limit switch. A clean filter is the #1 preventable cause.
- **Open blocked supply and return vents.** Closed or furniture-covered registers restrict airflow and cause overheating.
- **Wait out the fan-off delay.** After heat shuts off, allow up to 3 minutes before assuming a fault.

If the blower still runs continuously in AUTO with a clean filter and open vents, stop here — the rest is inside the cabinet.

## How a technician will diagnose it

A qualified tech will typically:

1. Confirm the thermostat call by checking voltage at the G and W terminals — verifying whether the board is *receiving* a fan signal or generating one on its own.
2. Check the high-limit switch with a multimeter to see if it's open (indicating an overheat condition) or stuck closed.
3. Inspect the control board's fan relay for a welded/stuck contact and test the blower output terminals.
4. Verify airflow: static pressure, blower speed, and heat-rise to rule out an overheating root cause behind a tripped limit.
5. Test thermostat wiring for a short on the G circuit.
6. If the board's fan-off timing is faulty, confirm how delay is selected on that specific model — it varies by board, with some using DIP switches, some using jumpers or pin settings, and Infinity/communicating systems setting it at the thermostat (or not offering the adjustment at all) — then replace the control if needed.

This sequence lets you sanity-check a quote: replacing a control board — a $400 to $1,200 installed job depending on which board your furnace uses — without first confirming the relay or a shorted G wire is a red flag.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Blower runs 24/7, no burners | Thermostat set to ON or circulate mode | Set fan to AUTO; disable circulate | Verify G-wire signal if AUTO doesn't stop it |
| Blower runs long after heat stops | Normal fan-off delay | Wait up to 3 minutes | Adjust fan-off delay if excessive (selection method varies by board — DIP switch, jumper/pin, or thermostat setting) |
| Blower runs, burners cut out early | Overheating / open limit switch | Replace filter, open vents | Test limit switch, check airflow/heat rise |
| Blower never stops even in AUTO | Stuck fan relay or bad board | None — call a pro | Replace the integrated control board (the relay isn't separately replaceable) |
| Erratic fan starts/stops | Weak thermostat batteries or shorted G wire | Replace batteries | Inspect/repair thermostat wiring |

## Repair costs

- **DIY fixes (fan setting, batteries, filter):** $0 – $30
- **Thermostat replacement (if faulty):** $120 – $300 installed
- **High-limit switch replacement:** $150 – $350
- **Stuck/welded blower relay:** no separate repair — the relay is part of the integrated control, so pricing follows the board replacement below
- **Integrated control board replacement:** $400 – $1,200 installed, depending on the board (single-stage HK42FZ-type controls sit at the low end; Infinity/variable-speed controls run well above $800)
- **Thermostat wiring repair:** $150 – $400

Most homeowners resolve this for free by switching the fan to AUTO or replacing a clogged filter. Cabinet-level parts are where costs climb, so confirm the diagnosis before authorizing a board swap — and don't assume a four-figure board quote is padding until you know which control your furnace takes.

## Related codes

- **Carrier Furnace Code 41: Blower Motor Fault & Fixes** — for blower motor failures
- **Carrier Furnace Code 44: Causes & Fixes** — another blower-related status code (its exact meaning varies by control board)
- **Carrier Furnace Blowing Cold Air: Causes & Fixes** — related blower/heat behavior
- **Carrier Furnace Keeps Shutting Off: Causes, Fixes & Costs** — for overheat/limit-related shutdowns
- **Carrier Furnace Short Cycling: Causes, Fixes & Costs** — for rapid on/off cycling
