---
title: "Carrier Furnace Code 34: Ignition Proving Failure & Fixes"
code: "Code 34"
description: "Carrier furnace Code 34 means ignition proving failure. Causes, safe checks and pro fixes — flame sensor, gas valve, $0 DIY to $600 repair."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 DIY (clean flame sensor) – $600 if the gas valve or control board needs replacement"
appliesTo: "Most Carrier gas furnaces with LED fault-code boards (Infinity, Performance, Comfort series). Exact wording and blink patterns vary by control board generation — always confirm against the legend on your blower-door label."
tags:
  - carrier
  - furnace
  - ignition
  - flame-sensor
  - error-code
parts:
  - name: Universal flame sensor
    search: carrier furnace flame sensor replacement
  - name: Emery cloth / fine sandpaper
    search: emery cloth 400 grit
  - name: Furnace igniter (hot surface)
    search: carrier hot surface igniter replacement
datePublished: 2026-06-13
dateModified: 2026-06-13
reviewedBy: ""
faq:
  - q: What does Code 34 mean on a Carrier furnace?
    a: It means ignition proving failure — the furnace tried to light but the control board never confirmed a stable flame, so it shut the gas off for safety.
  - q: Can I fix Carrier Code 34 myself?
    a: Sometimes. A dirty flame sensor is the most common and cheapest cause, and careful cleaning is DIY-friendly. Gas valve or board issues need a licensed pro.
  - q: Is Code 34 dangerous?
    a: The code itself is the furnace protecting you by cutting gas. But repeated failed ignitions and resets can be hazardous, so don't keep resetting a locked-out unit.
  - q: Why does my furnace light then shut off after a few seconds?
    a: That is classic Code 34 behavior — the flame lights but isn't sensed within the trial period, usually a dirty or cracked flame sensor or weak ground.
---

## What this code means

On most Carrier gas furnaces, **Code 34 signals an ignition proving failure**: the control board ran through its ignition sequence — inducer on, igniter hot, gas valve open — but it never received a steady flame-sensing signal within the allowed trial-for-ignition period. To protect you, the board closes the gas valve.

In practice this almost always shows up as a furnace that **lights briefly and then shuts down**, often retrying a few times before locking out. The exact blink pattern and whether the code reads "34" or a similar number depends on your control board generation, so confirm the meaning against the diagnostic legend printed inside the blower compartment door.

## Common causes, ranked by probability

1. **Dirty or oxidized flame sensor** — by far the most common cause. A film of carbon or oxidation on the sensor rod weakens the tiny flame-rectification current the board needs to "see."
2. **Weak or broken ground** — flame sensing relies on a good ground path. A loose burner ground screw or corroded chassis ground mimics a no-flame condition.
3. **Cracked or failing flame sensor** — the porcelain insulator can crack, shorting the signal to ground.
4. **Weak or dirty burners / poor flame contact** — if the flame isn't fully enveloping the sensor rod (gas pressure, burner debris, or alignment), sensing drops out.
5. **Failing hot surface igniter** — a weak igniter can light late, so the flame establishes after the proving window closes.
6. **Gas supply / gas valve issues** — low inlet pressure, a partially failed gas valve, or a closed manual shutoff can cause delayed or no flame. This is **pro-only** territory.
7. **Control board fault** — least common; the board misreads the sensor signal.

## Safe checks before you call anyone

These are genuinely safe for a homeowner. Do not open the gas valve manifold, do not bypass safety switches, and do not repeatedly reset a furnace that keeps locking out.

- **Filter:** A clogged filter restricts airflow and can trip limits that interrupt the ignition sequence. Replace if dirty.
- **Thermostat:** Confirm it's set to Heat and the setpoint is above room temperature. Replace batteries if it's battery-powered.
- **Breaker:** Check that the furnace breaker and the unit's service switch (looks like a light switch near the furnace) are on.
- **Gas supply:** Make sure other gas appliances (stove, water heater) are working — if none have gas, call your utility, not a repair tech.
- **Visible vents and returns:** Make sure supply registers and return grilles aren't blocked.
- **Condensate (high-efficiency models):** A full condensate trap or clogged drain can trip a switch. If you see standing water, that's a clue for the technician.

If the furnace still fails and locks out, stop resetting it and call a licensed HVAC tech.

## How a technician will diagnose it

Knowing the workflow lets you sanity-check a quote:

1. **Read stored fault codes** and watch a live ignition cycle to confirm the failure point.
2. **Measure the flame-sensing microamp signal** with a meter — a healthy reading is typically a few microamps; a low or zero reading points straight to the sensor, ground, or flame quality.
3. **Inspect and clean the flame sensor**, then re-test the microamp signal.
4. **Verify the ground path** at the burner assembly and chassis.
5. **Check igniter ignition timing and ohms** to rule out a slow igniter.
6. **Test gas supply and manifold pressure** with a manometer (pro-only).
7. **Verify the control board output** as the last step if everything upstream checks out.

A good tech cleans and re-tests the sensor before quoting a gas valve or board — those are expensive and rarely the actual fault.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Lights, runs a few seconds, shuts off | Dirty flame sensor | Power off, gently clean sensor rod with emery cloth | Measure microamp signal, clean/replace sensor |
| Repeated tries then lockout | Weak ground or cracked sensor | Check filter; stop resetting | Test ground path, replace sensor |
| Igniter glows but flame is late | Weak hot surface igniter | None — call pro | Ohm-test and replace igniter |
| No flame at all | Gas supply / valve issue | Confirm other gas appliances work | Manometer test, gas valve service |
| Flame flickers / partial burners | Dirty burners, low pressure | Replace filter | Clean burners, set manifold pressure |
| Code persists after cleaning | Control board fault | None | Verify board outputs, replace board |

## Repair costs

Honest US ranges, parts and labor combined:

- **Flame sensor clean (DIY):** $0 — just emery cloth and a screwdriver.
- **Flame sensor replacement:** $80 – $250.
- **Hot surface igniter replacement:** $150 – $350.
- **Burner cleaning / tune-up:** $100 – $250.
- **Gas valve replacement:** $300 – $600.
- **Control board replacement:** $350 – $700.

Most Code 34 calls end up being a flame sensor clean or swap, so be skeptical if the first quote is for a board or gas valve without a microamp measurement first.

## Related codes

- **Code 13** — limit circuit lockout (often airflow related)
- **Code 14** — ignition lockout after multiple failed tries
- **Code 33** — limit or flame rollout switch fault
- **Code 31** — pressure switch / inducer issue affecting ignition

Always confirm the exact code meaning against the legend inside your furnace's blower-door panel, since numbering varies by Carrier control board generation.
