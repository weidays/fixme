---
title: "Goodman Furnace Lockout: Causes, Fixes & Costs"
code: "Lockout (no heat)"
description: "Goodman or Amana furnace in ignition lockout with no heat? What it means, causes ranked, the dirty flame sensor fix, safe checks, and repair costs."
brand: goodman
equipment: furnace
severity: pro
costRange: "$0–$15 to clean a dirty flame sensor yourself — $150–$350 for a sensor or igniter installed by a pro — $400–$900+ for a gas valve or control board"
appliesTo: "Goodman and Amana gas furnaces with an integrated control board (GMS/GMV/GMSS/GCVC/GMVC and AMS/AMV/AMVC series and similar). The lockout is shown by a flashing diagnostic LED behind the burner door; the exact flash pattern and number of retries before hard lockout vary by board generation, so always read your unit's door label for the code key."
tags: [goodman, amana, furnace, ignition-lockout, flame-sensor, no-heat]
parts:
  - name: "Furnace flame sensor (match your model number)"
    search: "goodman amana furnace flame sensor"
  - name: "Fine emery cloth or 000 steel wool (to clean the sensor)"
    search: "fine emery cloth flame sensor cleaning"
  - name: "Furnace air filter (check size on your existing filter)"
    search: "furnace air filter 16x25x1"
reviewedBy: ""
datePublished: 2026-06-13
dateModified: 2026-06-13
faq:
  - q: "Why does my Goodman furnace light then shut off after a few seconds?"
    a: "That short cycle — igniter glows, burners light, then flame dies within about 5–10 seconds — is the classic dirty flame sensor pattern. The sensor isn't proving flame to the board, so the board closes the gas valve as a safety. After a few failed tries (the exact count varies by board) it goes into lockout. Cleaning the sensor is the most common real fix."
  - q: "Is it safe to keep resetting a Goodman furnace that keeps locking out?"
    a: "No. Lockout is a safety state that triggers when the furnace can't prove flame after several ignition attempts. Repeatedly cutting power to force more attempts dumps unburned gas into the burner box each cycle and can create an ignition hazard. Reset once after fixing an obvious cause like a dirty filter or flame sensor; if it locks out again, stop and call a technician."
  - q: "Can I clean the flame sensor on a Goodman furnace myself?"
    a: "Yes — this is one of the few genuinely safe homeowner fixes. With power off at the breaker and the gas off, the flame sensor is a single metal rod near the burners held by one screw. Gently buff the rod with fine emery cloth or 000 steel wool, never sandpaper, then reinstall. Do not adjust burners, the gas valve, or any safety switch while you are in there."
  - q: "How do I tell a bad igniter from a dirty flame sensor?"
    a: "Watch a cycle. If the igniter never glows orange and the burners never light, the igniter (or its circuit) is the likely fault. If the burners DO light but the flame snuffs out a few seconds later and then locks out, the flame sensor is almost always the cause. A technician confirms by measuring the flame-sense microamp signal."
---

## What this code means

On a Goodman or Amana furnace, an **ignition lockout (no heat)** means the control board tried to start the furnace, failed to confirm a stable flame the required number of times, and shut the gas off as a safety. The board stops trying and flashes a diagnostic LED behind the burner door until power is cycled or it auto-resets after a set time (often about an hour).

The board isn't saying a specific part is dead. It's saying *the ignition sequence didn't complete safely*, so it stopped. On these furnaces the single most common reason is a **dirty flame sensor** — a metal rod that proves flame is actually present. When it's coated in oxide, it can't sense the flame, so the board assumes the flame failed and shuts down. The real work is finding *why* ignition isn't being proven.

## Common causes, ranked by probability

1. **Dirty flame sensor** — by far the most common. A thin oxide film on the sensor rod drops the flame-sense signal below the board's threshold, so flame is never "proven" and the furnace locks out after a few tries. Burners light, then die in seconds.
2. **Weak or cracked hot-surface igniter** — a igniter that's aged or hairline-cracked may not get hot enough to light the burners reliably, causing failed ignition attempts.
3. **Restricted gas supply or low gas pressure** — a partly closed manual gas valve (utility/meter side), a tripped LP regulator, or low pressure starves the burners so flame won't establish.
4. **Dirty filter or blocked venting tripping a related switch** — restricted airflow or a blocked intake/exhaust can open a pressure switch and stop ignition before it starts, which the board may also lock out on.
5. **Failed gas valve or control board** — the least common cause. These do fail, but should only be concluded after the sensor, igniter, gas supply, and venting are ruled out.

## Safe checks before you call anyone

These are the only steps a homeowner should do on a gas furnace. If they don't resolve it, the next step is a technician — not deeper disassembly.

1. **Check the thermostat.** Confirm it's set to Heat, above room temperature, and — if battery-powered — that the batteries are fresh. A dying thermostat can mimic a furnace fault.
2. **Replace the air filter.** A clogged filter restricts airflow and can stop a clean start. Fit a clean filter of the MERV rating Goodman specifies for your model.
3. **Check the breaker and the burner-door switch.** Make sure the furnace breaker is on and the blower/burner door is fully latched — the door switch must be engaged for the furnace to fire.
4. **Confirm the gas is on elsewhere.** If your gas range, water heater, or other appliances work, gas supply to the house is fine. Do **not** open or adjust the furnace's gas valve yourself.
5. **Clean the flame sensor (optional, the one allowed internal step).** With **power off at the breaker and gas off**, remove the single screw holding the flame sensor rod, gently buff it with fine emery cloth or 000 steel wool, and reinstall. Do not touch the burners, gas valve, or any safety switch.
6. **Cycle power once.** After cleaning the sensor or fixing an obvious cause, switch the furnace off for one minute, then back on, and watch one cycle.

If it lights then dies and locks out again after a sensor cleaning, **stop here.** Repeated lockouts point to an igniter, gas-pressure, or venting problem that needs a technician.

## How a technician will diagnose it

Knowing this lets you sanity-check a quote:

- Read the **flash code** and clear the board, then watch a full ignition sequence to see exactly where it fails (no igniter glow, no light-off, or flame that drops out).
- Measure the **flame-sense current in microamps** with a meter in series with the sensor. A reading well below the board's minimum confirms a dirty or failing sensor.
- Test the **hot-surface igniter** resistance and confirm it reaches ignition temperature.
- Check **manifold and inlet gas pressure** against the rating plate, and verify the **pressure switch and venting** prove correctly.
- Inspect **wiring and ground** at the board, since flame sensing depends on a good chassis ground.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Burners light, flame dies in ~5–10s, then lockout | Dirty flame sensor | Clean sensor rod, retest | Measure flame-sense microamps |
| Igniter never glows, no light-off | Failed hot-surface igniter | — | Test & replace igniter |
| Very dirty filter, weak start | Restricted airflow | Replace filter, retest | Check pressure switch & static |
| Burners try but won't establish flame | Low/restricted gas pressure | Confirm other gas appliances work | Test manifold & inlet pressure |
| Lockout returns after sensor cleaning | Igniter, gas, or board fault | Stop, call a pro | Diagnose ignition train end to end |

## Repair costs

- **Flame sensor cleaning:** $0–$15 (DIY, emery cloth only)
- **Flame sensor replacement (with diagnosis):** $150–$300
- **Hot-surface igniter (with diagnosis):** $150–$350
- **Gas valve replacement:** $400–$700
- **Integrated control board:** $400–$900+ depending on model

A diagnostic service call is typically **$89–$200**, usually credited toward the repair if you proceed.

## Related codes

- **Pressure switch fault** — open or stuck pressure switch stops ignition before light-off; an airflow/venting cousin of lockout.
- **Failed ignition / flame-sense fault flash code** — the specific board flash that precedes hard lockout; pattern varies by board.
- **Limit switch open** — overheat shutdown from restricted airflow, a different safety trip on the same board.
