---
title: "Carrier Furnace Code 14: Ignition Lockout Causes & Fixes"
code: "Code 14"
description: "Carrier Furnace Code 14 means ignition lockout after failed heat trials. Causes, safe checks, technician diagnosis and repair costs $0-$600."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $600 if the igniter, gas valve or control board needs replacement"
appliesTo: "Carrier 58- and 59-series gas furnaces with LED status codes (Infinity, Performance, Comfort). Exact flash count and blink behavior varies by control board — always confirm against the label inside the blower door."
tags:
  - carrier
  - furnace
  - ignition-lockout
  - error-code
parts:
  - name: Hot surface igniter
    search: carrier furnace hot surface igniter
  - name: Flame sensor
    search: carrier furnace flame sensor
  - name: Furnace air filter
    search: furnace air filter 16x25x1
datePublished: 2026-09-13
dateModified: 2026-09-13
reviewedBy: ""
faq:
  - q: What does Code 14 mean on a Carrier furnace?
    a: On most Carrier boards, Code 14 indicates ignition lockout — the furnace tried to light several times, failed to prove flame, and shut down for safety. The exact flash pattern varies by board.
  - q: Can I reset a Carrier furnace showing Code 14?
    a: You can try one power reset by cycling the switch or breaker off for 30 seconds. If it locks out again, stop and call a pro — repeated resets on a failed ignition can be dangerous.
  - q: Is Code 14 the same as Code 34?
    a: They are closely related. Both involve failure to prove flame, but Code 14 usually reflects the final lockout state after multiple failed trials, while Code 34 flags an ignition-proving failure per attempt. Confirm on your board legend.
  - q: How much does it cost to fix Carrier Code 14?
    a: A simple flame sensor cleaning may be $0 DIY or an $80-$180 service call. An igniter runs $150-$400 installed, and a gas valve or control board can push the bill to $400-$600.
---

## What this code means

Carrier Code 14 is an **ignition lockout**. Your furnace called for heat, ran through its normal ignition sequence several times (typically three or four trials), and could not confirm a stable flame each time. To prevent dumping unburned gas into the heat exchanger, the control board shuts everything down and locks out, flashing the code on the LED.

Important: **the exact meaning of a numeric code varies by Carrier control board.** On many boards Code 14 is the lockout state that follows repeated ignition-proving failures (the per-trial failure often shows as Code 34). Some boards use different numbering entirely. Always read the code legend printed on the label inside the blower compartment door before acting on the number.

Because this code sits right at the fuel-and-flame safety boundary, it's a **pro-level** fault. A few checks are safe for a homeowner, but the actual repair usually belongs to a licensed technician.

## Common causes, ranked by probability

1. **Dirty flame sensor.** A carbon- or oxide-coated flame rod can't conduct the tiny microamp signal that proves flame, so the board sees "no flame" even when the burners lit. This is the single most common cause.
2. **Weak or failed hot surface igniter.** A cracked or aged igniter may not glow hot enough (or at all) to light the gas reliably, causing repeated failed trials.
3. **Insufficient gas supply.** A partly closed manual gas valve, low pressure, or a failing gas valve won't deliver enough fuel to establish flame.
4. **Grounding problems.** Flame sensing depends on a good chassis ground. A loose ground wire or corroded connection mimics a no-flame condition.
5. **Dirty or misaligned burners.** Rust, debris, or condensate can prevent clean burner ignition and stable flame carry-over.
6. **Restricted airflow or venting.** A clogged filter, blocked flue, or pressure-switch issue can interrupt the sequence before flame stabilizes (this often shows related codes like 31).
7. **Failing control board.** Less common, but a board with a bad flame-sense circuit can lock out despite good flame.

## Safe checks before you call anyone

These are the only steps a homeowner should do:

- **Check the air filter.** A clogged filter restricts airflow and can trip the sequence. Replace it if it's dirty.
- **Confirm the thermostat** is set to Heat with a setpoint above room temperature. Replace batteries if it uses them.
- **Check the furnace switch and breaker.** Make sure the wall switch beside the furnace is on and the breaker hasn't tripped.
- **Do one power reset.** Turn the furnace switch (or breaker) off for 30 seconds, then back on. Watch one full ignition cycle.
- **Look at supply and return vents** — make sure they aren't blocked by furniture or rugs.
- **Check the condensate drain** (high-efficiency 90%+ models). A backed-up drain can trip a safety and interrupt ignition.

**Stop here if it locks out again.** Do not repeatedly reset a furnace that keeps failing to light, do not open the gas valve or bypass any safety switch, and do not attempt to clean or adjust the burner or gas valve yourself. **If you smell gas, leave the home and call your gas utility's emergency line or 911 first.**

## How a technician will diagnose it

A good tech will work the flame path methodically, so you can sanity-check the quote:

1. **Read the stored fault history** on the control board to confirm the lockout and any companion codes.
2. **Watch a full ignition sequence** — inducer start, pressure switch closing, igniter glow, gas valve opening, and flame establishment.
3. **Measure flame-sense current** in microamps with a meter. A reading well below spec (often under ~1–2 µA vs. a normal 4–6 µA) points to a dirty or failing flame sensor or ground.
4. **Test the hot surface igniter** for resistance and confirm it glows.
5. **Verify gas pressure** at the valve with a manometer.
6. **Inspect burners and grounding** for corrosion, debris, and loose connections.
7. **Check venting and pressure switches** if the sequence stalls before ignition.

If they quote a control board without measuring flame current or testing the igniter and gas pressure, ask them to show their readings first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Igniter glows, burners light, then shut off after a few seconds | Dirty flame sensor / bad ground | One power reset; replace filter | Clean/replace flame sensor, verify ground, measure microamps |
| Igniter glows weakly or not at all, no flame | Failed hot surface igniter | None — do not touch igniter | Test and replace igniter |
| Clicking/inducer runs but never lights | Low or no gas, failing gas valve | Confirm household gas is on elsewhere | Measure gas pressure, test/replace valve |
| Locks out only on very cold days | Marginal igniter or low gas pressure | Note conditions for the tech | Load-test igniter, verify pressure under demand |
| Sequence stops before igniter glows | Pressure switch / venting / condensate | Clear condensate drain, replace filter | Diagnose pressure switch and flue (see Code 31) |
| Repeated lockouts after resets | Multiple faults or board failure | Stop resetting; call a pro | Full flame-path diagnosis, replace board if confirmed |

## Repair costs

Honest US ranges, parts and labor:

- **Diagnostic / service call:** $80–$180
- **Flame sensor cleaning:** often included in the service call, or $0 if you do the reset and it clears
- **Flame sensor replacement:** $90–$250
- **Hot surface igniter replacement:** $150–$400
- **Gas valve replacement:** $300–$600
- **Control board replacement:** $400–$650
- **Burner cleaning / minor gas-train service:** $150–$350

Most Code 14 calls resolve at the low end — a dirty flame sensor or a tired igniter. Board and gas valve replacements are the exception, not the rule, so be skeptical of a top-of-range quote without measured evidence.

## Related codes

- **Code 34 — Carrier Furnace Code 34: Ignition Proving Failure & Fixes** — the per-trial ignition failure that often precedes a Code 14 lockout.
- **Code 33 — Carrier Furnace Code 33: Causes, Fixes & Costs** — limit or flame-rollout related faults that can interrupt heating.
- **Code 31 — Carrier Furnace Code 31: Causes, Fixes & Costs** — pressure switch and venting problems that stop the sequence before ignition.
- **Code 13 — Carrier Furnace Code 13: Meaning, Causes & Fixes** — a general limit/lockout condition.
- **Code 12 — Carrier Furnace Code 12: Meaning, Causes & Fixes** — blower/control status that can appear alongside heating faults.
