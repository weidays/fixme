---
title: "Lennox Furnace Code E270: Ignition Retry Lockout Fix"
code: "Code E270"
description: "Lennox furnace Code E270 means max ignition retries exceeded. Learn causes, safe checks, technician diagnosis and repair costs from $0 to $1,200."
brand: lennox
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $1,200 if the igniter, flame sensor or control board needs replacing"
appliesTo: >
  Lennox gas furnaces whose SureLight control board has an alphanumeric
  (7-segment) diagnostic display — that display is what shows three-digit
  E-codes such as E270. Many Lennox furnaces instead report faults with an
  LED flash/blink pattern and will never show the characters "E270"; on those
  boards the same repeated-ignition-failure soft lockout is indicated by a
  blink code, so read the code legend printed on the furnace access panel or
  in the installation instructions. The exact retry count before soft lockout
  and the auto-reset window can also vary by board revision; confirm against
  your unit's installation manual.
tags:
  - lennox
  - furnace
  - ignition-lockout
  - soft-lockout
  - error-code
parts:
  - name: Furnace air filter
    search: furnace air filter 16x25x1
  - name: Thermostat batteries
    search: AA alkaline batteries
datePublished: 2026-09-25
dateModified: 2026-09-25
reviewedBy: ""
faq:
  - q: Will Code E270 clear on its own?
    a: Yes. E270 is a soft lockout that auto-resets after about one hour, or immediately if you cycle power at the breaker once. If ignition still fails, it will lock out again.
  - q: My furnace showed a different code before E270 — are they related?
    a: They often are. E270 is triggered by repeated failures to prove flame, so it frequently appears alongside other codes from the same ignition sequence. Don't guess at what a second code means — look it up in the diagnostic table in your furnace's installation instructions or on the wiring/code label inside the access panel, since code meanings differ between Lennox control boards and between alphanumeric-display and flash-code boards.
  - q: Is it safe to keep resetting an E270 furnace?
    a: No. One reset is fine to test. Repeated resets force the furnace to try igniting gas over and over without proving flame, which is unsafe. Call a technician if it locks out again.
  - q: Why does my furnace work sometimes but then throw E270?
    a: Intermittent E270 usually means a weakening igniter, a dirty flame sensor, or marginal gas pressure. These fail on some cycles and succeed on others until they degrade further.
---

## What this code means

Code E270 on a Lennox furnace is a **soft ignition lockout**: the control board attempted to light the burners the maximum allowed number of times, failed to prove flame each time, and shut the sequence down for safety. Unlike a hard lockout, **E270 auto-resets after about one hour** — the furnace will try again on its own. You can also clear it immediately by cycling power at the breaker one time.

The distinction matters. E270 is the board telling you that ignition *repeatedly did not succeed*, not that any single component has definitively failed. That's why it self-clears: Lennox designed the soft lockout to ride out a temporary condition (a brief gas pressure dip, a slow igniter warm-up) while still protecting you if the problem is persistent.

If E270 returns after the one-hour reset — or keeps coming back over days — treat it as a real fault. Something in the ignition chain is failing to prove flame, and it needs a technician.

> **Not seeing letters and numbers on your board?** A three-digit E-code like E270 only appears on Lennox furnaces whose control board has an alphanumeric diagnostic display. Furnaces that report faults with a blinking LED signal this same "too many failed ignition attempts" soft lockout as a flash pattern instead. Match the blinks against the code legend on the furnace access panel or in the installation instructions — the troubleshooting below still applies.

> The exact number of retries before soft lockout and the precise reset window vary by control board revision. Check your unit's installation instructions for the value specific to your board.

## Common causes, ranked by probability

1. **Weak or aging hot surface igniter** — A degraded igniter still glows but no longer reaches full ignition temperature reliably, so flame fails to establish on some cycles.
2. **Dirty or corroded flame sensor** — The furnace lights but the sensor can't detect flame current, so the board reads it as a failed light and retries until lockout.

   *These top two are effectively tied.* On a repeated-retry lockout like E270, a fouled flame sensor is at least as common a cause as a weakening igniter, and the two produce very similar symptoms from the outside. Don't assume it's the igniter until both have been measured.

3. **Marginal gas pressure or a partially closed manual gas valve** — Low or inconsistent supply pressure means burners don't light cleanly on every attempt.
4. **Restricted airflow tripping the sequence** — A clogged filter or blocked venting can interfere with the pressure switch and inducer sequence, aborting ignition attempts.
5. **Burner or manifold fouling** — Debris or corrosion at the burners delays or prevents flame carryover across all burners.
6. **Control board or wiring fault** — Less common, but a failing board or loose ignition/sensor wiring can produce repeated apparent ignition failures.

Because E270 is downstream of the actual ignition attempt, its causes overlap heavily with flame-proving and igniter faults — see Related codes below.

## Safe checks before you call anyone

These are the only steps a homeowner should perform. Everything else is inside the cabinet and belongs to a technician.

- **Check the air filter.** A clogged filter starves airflow and can disrupt the ignition sequence. Replace it if it's dirty.
- **Confirm the thermostat.** Make sure it's set to Heat, above room temperature, and — if battery-powered — has fresh batteries.
- **Cycle the breaker once.** Turn the furnace breaker off, wait 30 seconds, and turn it back on. This clears the soft lockout immediately for one test cycle.
- **Check the furnace switch.** The wall switch near the furnace (looks like a light switch) must be on.
- **Look at visible vents and registers.** Make sure supply and return registers aren't blocked by furniture, rugs, or closed dampers.
- **Check the condensate drain** (high-efficiency units). A backed-up condensate line or full trap can trip safeties. Clear any obvious standing water at the drain if you can do so without opening the cabinet.

If the furnace lights and runs after these checks, great. If E270 returns, stop resetting it and call a pro — repeated ignition attempts on a failing system are not safe.

## How a technician will diagnose it

A qualified tech will work the ignition sequence in order, so you can sanity-check any quote:

1. **Read stored fault history** on the control board to see how often E270 has occurred and what other codes accompany it.
2. **Watch a full ignition cycle** to see where it fails — igniter glow, gas valve opening, flame establishment, and flame sensing.
3. **Measure hot surface igniter resistance and current.** There's no single "good" number here, and it isn't a reading a homeowner can interpret: the acceptable resistance range depends on the igniter type fitted to your furnace (silicon nitride and silicon carbide igniters have very different expected values), so the tech compares the measurement against the specification for that specific igniter rather than a generic figure.
4. **Test flame sensor microamp signal** with a meter and clean or replace the sensor if the reading is weak.
5. **Verify manifold and inlet gas pressure** against the Lennox rating plate.
6. **Inspect burners and the flame pattern** for fouling or misalignment.
7. **Check inducer, pressure switch, and venting** to rule out airflow-related aborts.
8. **Inspect ignition and sensor wiring and the control board** for loose connections or failure.

A thorough diagnosis should take 45–90 minutes. Be cautious of a quote that jumps straight to a control board without measuring the igniter and flame signal first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| No heat, E270 shown, clears after ~1 hour | Soft lockout after repeated failed ignition | Reset once at breaker; replace dirty filter | Diagnose full ignition sequence |
| Igniter glows but burners don't light | Weak igniter or low gas pressure | None — call a pro | Test/replace igniter, verify gas pressure |
| Burners light then shut off, E270 returns | Dirty or failing flame sensor | None — call a pro | Clean or replace flame sensor, check flame current |
| Intermittent — heats some cycles, not others | Marginal igniter or sensor | Reset once, monitor | Measure igniter current and sensor microamps |
| E270 with rough or uneven flame | Fouled burners or manifold | None — call a pro | Clean burners, inspect manifold |
| E270 plus airflow/pressure complaints | Restricted airflow or venting | Replace filter, clear registers | Inspect inducer, pressure switch, venting |

## Repair costs

Honest US ranges including parts and labor:

- **DIY reset / filter change:** $0–$40
- **Flame sensor cleaning:** $80–$200 (often resolves recurring E270)
- **Flame sensor replacement:** $150–$300
- **Hot surface igniter replacement:** $200–$400
- **Gas pressure adjustment / valve service:** $150–$400
- **Burner cleaning:** $150–$350
- **Control board replacement:** $400–$1,200 — the high end applies to SureLight and communicating boards on higher-tier units, where the part itself is expensive and setup takes longer

Many E270 calls are resolved on the cheaper end — a flame sensor cleaning or an igniter swap — so get the igniter and flame signal measured before authorizing a board.

## Related codes

Other codes from the same ignition and flame-proving sequence may appear alongside E270. We link by code number only — confirm the meaning of any code your furnace shows against the diagnostic table in your unit's installation instructions or the label inside the access panel, because meanings differ between Lennox control boards.

- [Lennox Furnace Code E200](#)
- [Lennox Furnace Code E207](#)
- [Lennox Furnace Code E208](#)
- [Lennox Furnace Code E240](#)
- [Lennox Furnace Code E241](#)
- [Lennox Furnace Code E250](#)
