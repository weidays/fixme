---
title: "Trane Furnace 3 Flashes: Pressure Switch Error Fixes"
code: "3 flashes"
description: "Trane furnace 3 flashes means a pressure switch error. Learn causes like blocked vents, a bad inducer, and fixes plus repair costs."
brand: trane
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if the inducer assembly or control board needs replacement"
appliesTo: >
  Most Trane and American Standard gas furnaces with LED-flash diagnostics (XR, XV, XC, S-series and similar single- and two-stage boards). The 3-flash code maps to a pressure switch error on these Integrated Furnace Control (IFC) boards. On a few older or two-stage boards the flash count differs — confirm the flash legend for your exact model using the owner's manual or model-specific service literature, or ask your technician to read it off the unit.
tags:
  - trane
  - furnace
  - pressure-switch
  - error-code
  - inducer
parts:
  - name: Pleated furnace air filter
    search: furnace air filter 16x25x1 MERV 8
faq:
  - q: Can I run my furnace with a 3-flash pressure switch error?
    a: No. The pressure switch is a safety device that confirms the exhaust is venting. Running with it faulted risks incomplete combustion and carbon monoxide, so leave repairs to a technician.
  - q: Does the Trane 3-flash code reset on its own?
    a: On many boards the furnace retries on its own once the fault condition clears, sometimes after a timed delay. If the fault keeps repeating, the board may stop retrying until the furnace is reset. Cycle power at the breaker once; if the code returns, call a pro.
  - q: Is a 3-flash code the same as a dirty filter?
    a: A clogged filter can restrict airflow enough to affect the pressure switch on some systems, so replacing the filter is a valid first check, but the code most often points to venting or the inducer.
  - q: How much does it cost to fix a Trane pressure switch error?
    a: A cleared blockage may cost nothing, a switch replacement runs about $150 to $350 installed, and an inducer assembly can run $400 to $1,200 installed, depending on your model and region.
datePublished: 2026-09-20
dateModified: 2026-09-20
reviewedBy: ""
---

## What this code means

Three flashes on your Trane furnace's control board (the LED visible through the sight glass or on the Integrated Furnace Control) indicates a **pressure switch error**. Specifically, the board sees one of two conditions it doesn't expect:

- The **pressure switch is open while the inducer (draft) motor is running** — the switch should close once the inducer creates a vacuum, and it hasn't.
- The **pressure switch is closed while the inducer is off** — the switch should be open at rest, and it isn't.

The pressure switch is a safety device. It confirms the inducer motor is actually pulling combustion gases through the heat exchanger and out the vent *before* the board allows the igniter and gas valve to fire. When the switch reading doesn't match what the board commands, ignition is blocked to prevent unsafe operation.

Reset behavior varies by board and revision. On many Trane and American Standard boards the furnace simply retries once the fault condition clears, sometimes after a built-in delay of several minutes. On others, repeated faults within a heat call can put the furnace into a lockout that stops the retries until the unit is reset. Don't assume a specific reset mechanism for your furnace — the flash legend and reset behavior for your exact model are in your owner's manual or model-specific service literature, and your technician can confirm them on site.

## Common causes, ranked by probability

1. **Blocked or restricted vent/intake** — Debris, ice, insects, or nests in the flue or fresh-air intake keep the inducer from developing enough vacuum to close the switch.
2. **Condensate blockage (high-efficiency models)** — A plugged condensate trap, drain line, or full float switch creates back-pressure that trips the switch. Very common on 90%+ furnaces.
3. **Weak or failing inducer motor** — A worn inducer spins too slowly to pull the vacuum the switch needs.
4. **Cracked, disconnected, or clogged pressure tubing** — The small rubber hose between the inducer and the switch can crack, slip off, or fill with condensate.
5. **Faulty pressure switch** — The switch diaphragm sticks open or closed, or is out of calibration.
6. **Restricted airflow / dirty filter (some systems)** — Severe airflow restriction can affect pressure readings on certain configurations.
7. **Wiring or connector fault** — Loose or corroded terminals between the switch and the board.

Standard field practice on this code is to verify venting and pressure tubing first, then the inducer, then the switch itself — the cheap, common causes before the expensive parts.

## Safe checks before you call anyone

These are the only steps a homeowner should attempt:

- **Replace a dirty air filter.** A heavily clogged filter can restrict airflow enough to contribute to the fault on some systems. Slide in a clean one of the correct size.
- **Check the thermostat.** Confirm it's set to Heat and above room temperature; if it's battery-powered, install fresh batteries.
- **Cycle the breaker or furnace switch once.** Turn the furnace off at its dedicated switch or breaker for 30 seconds, then back on. Do this **only once** — repeated resets on a locked-out unit are unsafe.
- **Look at the outdoor vent terminations.** From a safe position, check that the exhaust and intake pipes (usually PVC on high-efficiency models) aren't blocked by snow, leaves, nests, or debris. Clear only what you can safely reach from outside.
- **Check the condensate drain.** On a high-efficiency furnace, look for standing water or a visibly clogged drain line. You may pour water through an accessible drain, but do not disassemble the trap.
- **Confirm supply and return registers are open** throughout the house.

If the code returns after one reset, stop and call a technician. Do not open the cabinet.

## How a technician will diagnose it

A qualified tech will typically:

1. Read the stored fault and confirm the 3-flash code on the board.
2. **Measure inducer vacuum** with a manometer at the pressure switch port and compare it to the switch's rated set-point (printed on the switch body).
3. **Inspect the pressure tubing** for cracks, disconnection, or condensate.
4. **Check the switch electrically** with a meter to confirm it opens and closes at the correct pressure.
5. **Inspect the flue and intake** for blockage and verify proper venting.
6. **Test the inducer motor** amperage and RPM to see if it's weak.
7. Check the condensate trap and drain on high-efficiency units.
8. Verify wiring and board connectors.

This sequence lets you sanity-check a quote: a tech who jumps straight to replacing the board without checking vacuum and venting is skipping steps.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Inducer runs but burners never light, 3 flashes | Switch open with inducer on (weak vacuum) | Check vents/filter, reset once | Measure vacuum, test inducer and switch |
| Code after heavy snow or storm | Blocked exhaust/intake termination | Clear visible outdoor blockage | Inspect full flue path, confirm venting |
| Water near furnace, 3 flashes (HE model) | Condensate trap/line blockage | Check accessible drain for clogs | Clear trap, verify drain slope |
| Error intermittent, worse over time | Failing inducer motor | Note when it happens | Amp-test and replace inducer |
| Code present even with furnace idle | Switch stuck closed | Reset once | Replace pressure switch |
| Code with a whistling tube | Cracked or loose pressure hose | None (inside cabinet) | Replace/reseat tubing |

## Repair costs

Honest US ranges, parts and labor:

- **Cleared vent/condensate blockage:** $0 DIY, or $90–$180 for a service-call diagnosis if a tech clears it.
- **Pressure switch replacement:** $150–$350 installed.
- **Pressure tubing replacement:** $80–$160.
- **Inducer motor / draft inducer assembly replacement:** $400–$1,200 installed. OEM Trane assemblies alone often run several hundred dollars at the parts counter, so quotes toward the top of this range are not automatically inflated — the spread depends on your model, whether an OEM or aftermarket assembly is used, and local labor rates.
- **Control board (rare for this code):** $400–$1,200 installed, depending on whether it's a single-stage or variable-speed board and OEM versus aftermarket.

Diagnosis is usually one service-call fee (roughly $90–$180) that many shops credit toward the repair.

## Related codes

- **Trane Furnace 2 Flashes: System Lockout Causes & Fixes** — for a hard system lockout rather than a pressure-switch fault.

Because flash legends can differ between board revisions, confirm the 3-flash meaning for your exact furnace using your owner's manual or model-specific service literature, or have your technician verify it on the unit — there's no need to open the cabinet yourself.
