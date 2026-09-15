---
title: "Bryant Furnace Code 42: Inducer Motor Fault Fixes"
code: "Code 42"
description: "Bryant Furnace Code 42 means an inducer motor fault. Learn causes, safe checks, fixes, and repair costs from $0 DIY to about $1,200 for a new inducer."
brand: bryant
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if the inducer motor needs replacement"
appliesTo: >
  Bryant variable-speed and two-stage condensing gas furnaces (90%+ AFUE) with control boards that monitor inducer RPM feedback. Fault-code legends vary by board revision — some single-stage boards report inducer problems as Code 31 (pressure-switch) or Code 32 instead, so confirm your model's legend on the blower-door label.
tags:
  - inducer-motor
  - draft-inducer
  - condensing-furnace
  - variable-speed
parts: []
datePublished: 2026-09-15
dateModified: 2026-09-15
reviewedBy: ""
faq:
  - q: Can I reset a Bryant furnace showing Code 42 myself?
    a: You can cycle power once at the breaker or the furnace switch to clear a one-time fault. If Code 42 returns, the inducer or its wiring needs a technician — do not keep resetting it.
  - q: Is Code 42 dangerous to run with?
    a: The inducer clears combustion gases, so the board correctly refuses to fire if it can't confirm inducer speed. This is a safety lockout, not an immediate hazard, but the furnace won't heat until it's fixed.
  - q: Will Code 42 auto-reset on its own?
    a: That depends on the board generation. Some Bryant boards retry after a delay, others hold the fault until power is cycled. Either way, if the inducer never reaches a valid speed the board keeps flashing Code 42 until the problem is corrected.
  - q: How much does an inducer motor replacement cost?
    a: Expect roughly $400 to $1,200 installed for a Bryant draft-inducer assembly, including the motor, gasket, and labor. Variable-speed/ECM inducer assemblies land at the high end because the part alone often exceeds $400, while PSC units sit lower. A loose connector or debris in the wheel can cost far less.
---

## What this code means

Bryant Code 42 is an **Inducer Motor Fault**: the control board commanded the draft-inducer to start, but the inducer either did not spin up or ran outside its valid speed range. This code appears on **variable-speed and two-stage condensing boards** that read RPM feedback from the inducer motor, letting the board verify actual speed rather than just presence of airflow.

The inducer is the small blower that pulls combustion air through the heat exchanger and pushes flue gases out the vent before and during firing. If the board can't confirm the inducer is spinning at the right speed, it will not open the gas valve — so the furnace stays in lockout and does not produce heat.

What happens next **depends on the board** — some generations retry after a delay, others hold the fault until power is cycled. In either case, if valid inducer speed is never confirmed, the board keeps flashing Code 42 until the problem is fixed. Because verifying and repairing the inducer requires opening the cabinet and taking electrical measurements, this is a **pro-level** repair.

> **Legend varies by board.** Some single-stage Bryant boards do not have a dedicated inducer-fault code and instead report inducer trouble as a pressure-switch code (Code 31) or Code 32. Confirm the fault legend printed on your blower-door label.

## Common causes, ranked by probability

1. **Failed or worn inducer motor** — seized or worn bearings, an open winding, or a motor that spins but can't reach commanded RPM. The most common trigger on higher-mileage furnaces.
2. **Loose or corroded inducer wiring / connector** — a poor connection at the motor plug or on the board interrupts power or the RPM feedback signal.
3. **Debris, ice, or blockage in the inducer wheel or housing** — physical obstruction keeps the wheel from reaching valid speed.
4. **Failed control board or bad RPM sensing circuit** — the inducer runs fine but the board misreads or loses the speed-feedback signal.
5. **Low or unstable supply voltage (less common)** — brownouts or a weak circuit can prevent the variable-speed inducer from reaching its target RPM window.
6. **Blocked flue or intake creating excessive back-pressure (less common)** — heavy restriction can load the inducer enough to push it outside its valid range on some boards.

## Safe checks before you call anyone

These are the only steps a homeowner should attempt:

- **Cycle power once.** Turn the furnace switch (or its breaker) off for 30 seconds, then back on. Give the unit one full startup cycle to see if Code 42 clears.
- **Confirm the thermostat is calling for heat** and set above room temperature; replace thermostat batteries if it's battery-powered.
- **Check the air filter.** A severely clogged filter won't cause Code 42 directly, but replace it as basic maintenance while you're troubleshooting.
- **Look at the outdoor vent and intake pipes** (on condensing furnaces, the PVC pipes exiting a wall or roof). Clear any visible snow, ice, leaves, nests, or debris from the openings.
- **Check the condensate drain** for standing water or obvious blockage. To be clear, a flooded trap or blocked drain normally trips a **pressure-switch code (31/32)** rather than an inducer speed fault — but it's a safe, useful check worth doing while you're troubleshooting.
- **Make sure the blower door / panels are fully seated.** A panel that isn't latched can trip the door switch and mimic other startup faults.

If Code 42 returns after one reset, stop and call a technician. **Do not repeatedly reset a locked-out furnace**, and do not open the cabinet.

## How a technician will diagnose it

A qualified tech will typically:

- Read the fault history and note whether the inducer attempts to start at all.
- Inspect the inducer wheel and housing for debris, ice, or a seized bearing, and spin the wheel by hand to check for drag.
- Measure line voltage and confirm the board is sending the correct start command to the inducer.
- Check the inducer wiring harness and connector for loose pins, corrosion, or heat damage.
- Verify the RPM feedback signal reaching the control board (on variable-speed models).
- Test the inducer motor itself — windings and current draw — to distinguish a failed motor from a wiring or board fault.
- Inspect the flue/intake for restriction that could push the inducer outside its speed window.
- If motor, wiring, and airflow all check out, evaluate the control board's sensing circuit.

This sequence lets you sanity-check a quote: a good tech confirms whether the fault is the **motor, the wiring, an obstruction, or the board** before recommending a part.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| No sound from inducer, Code 42 flashes | Failed inducer motor or open wiring | Cycle power once; check panel is seated | Test motor windings/current; replace inducer or repair harness |
| Inducer hums or spins slowly | Worn bearings / motor can't reach RPM | Cycle power once | Replace inducer motor assembly |
| Inducer runs but code still trips | RPM feedback lost or board fault | None | Verify feedback signal; replace board if sensing circuit failed |
| Grinding or rattling from inducer | Debris in wheel or failing bearing | Clear visible vent/intake blockage | Open cabinet, clear debris, replace inducer if damaged |
| Code follows a power flicker/brownout | Low or unstable supply voltage (less common) | Confirm breaker is on | Measure supply voltage; advise on dedicated circuit |
| Ice or water near vent pipes | Blocked flue or intake (a condensate backup more often shows up as a pressure-switch code 31/32, not Code 42) | Clear visible ice/debris; check drain | Clear flue restriction; service condensate system |

## Repair costs

Honest US ranges, parts and labor:

- **Diagnostic / service call:** $90 – $180
- **Reseating or repairing a loose inducer connector:** $100 – $200
- **Clearing debris or a blocked flue/intake:** $120 – $280
- **Inducer motor / draft-inducer assembly (replacement):** $400 – $1,200 installed. Variable-speed/ECM inducer assemblies sit at the top of that range — the part alone frequently exceeds $400 — while PSC units land lower. Jobs that also need a new gasket or pressure-switch tubing work push toward the high end.
- **Control board replacement (if the sensing circuit failed):** $400 – $1,200 installed. Variable-speed and two-stage condensing boards are among the pricier boards, and Infinity-class control boards can exceed that range.

Actual cost varies by furnace model, part availability, and local labor rates. On older furnaces, weigh the repair cost against the age of the unit — a failing inducer on a furnace near the end of its life may point toward replacement.

## Related codes

- **Code 41 — Bryant Furnace Code 41: Blower Motor Fault Fixes** (main blower motor, not the inducer)
- **Code 31 — Bryant Furnace Code 31** (pressure-switch / draft proving, related airflow path)
- **Code 33 — Bryant Furnace Code 33** (limit or airflow-related lockout)
- **Code 34 — Bryant Furnace Code 34: Ignition Proving Failure Fixes** (ignition, downstream of inducer proving)
