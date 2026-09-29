---
title: "Goodman Furnace Pressure Switch Stuck Open: Fixes"
code: "Pressure switch stuck open"
description: "Goodman furnace pressure switch stuck open? Causes include blocked vent, bad inducer, condensate clogs. Fixes and costs from $0 DIY to $1,200."
brand: goodman
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if the inducer assembly needs replacement"
appliesTo: "Goodman gas furnaces with integrated control boards (GMS, GMH, GMSS, GCES, GMVC and similar). On single-stage models this commonly shows as 3 flashes; two-stage models report a separate high-stage pressure switch fault. Exact flash counts vary by board — check the flash-code legend on your furnace door label."
tags:
  - goodman
  - furnace
  - pressure-switch
  - inducer
  - venting
  - no-heat
parts:
  - name: "Furnace air filter"
    search: "furnace air filter 16x25x1"
  - name: "Condensate line cleaning kit"
    search: "hvac condensate drain cleaning kit"
datePublished: 2026-09-28
dateModified: 2026-09-28
reviewedBy: ""
faq:
  - q: "Does the pressure switch stuck open code reset on its own?"
    a: "It depends on the board. Many Goodman and Amana controls retry the ignition sequence and clear the fault once a valid pressure signal returns; others retry a set number of times and then go to a timed lockout (commonly one hour), and some require a power cycle before they will try again. Check the sequence-of-operation and flash-code legend printed on your furnace door label for your specific model."
  - q: "Can I just replace the pressure switch myself?"
    a: "No. Swapping the switch means opening the cabinet and disconnecting wiring and tubing, which is technician work. Homeowners should stick to the filter, vents, and the accessible part of the condensate line."
  - q: "Why does this happen mostly on cold or windy days?"
    a: "Ice, condensation, or wind gusts can block the flue or intake, and a partly clogged condensate trap chokes airflow. Any of these keeps the switch from closing so it reads as stuck open."
---

## What this code means

Your Goodman furnace has a pressure (draft) switch that confirms the inducer motor is pulling proper combustion air and venting exhaust before the burners are allowed to light. On startup, the control board energizes the inducer and expects the pressure switch to **close** within a few seconds.

"Pressure switch stuck open" means the board never saw that switch close. It reads the contacts as open at the moment it expected them closed, so it refuses to open the gas valve or fire the igniter — a safety interlock that prevents combustion in a furnace that isn't venting properly.

On single-stage Goodman furnaces this typically shows as **3 flashes** on the diagnostic LED. Two-stage models have a second, high-stage switch that reports as a separate fault. Flash counts are not identical across every Goodman control board, so read the legend printed on your furnace door label rather than assuming a number you found online.

What happens next also **varies by board**. Most Goodman and Amana controls retry the call for heat, and many will auto-reset after a timed lockout (often about an hour) if the fault clears; some boards require a manual power cycle before they will attempt ignition again. Your door label spells out the retry and lockout behavior for your model.

## Common causes, ranked by probability

1. **Blocked or restricted vent/intake pipe** — the most common trigger. Debris, ice, a bird nest, snow drift, or a critter screen clogged with lint stops the inducer from developing draft.
2. **Clogged condensate drain or trap** (high-efficiency models) — a full trap or plugged line backs up water into the inducer/pressure path and chokes airflow.
3. **Cracked, disconnected, or water-filled pressure switch hose** — the small tube between the inducer and switch is pinched, split, or holding condensate.
4. **Weak or failing inducer motor** — the motor spins but no longer moves enough air to close the switch.
5. **Blocked inducer housing or drain port** — soot, corrosion, or condensate blocks the pressure tap on the inducer assembly.
6. **Failed pressure switch itself** — the diaphragm or contacts are bad and won't close even with correct draft.
7. **Long-run or improperly sized venting** — undersized or overly long flue runs that don't develop enough pressure, sometimes after a remodel or DIY vent change.

Note: gas-supply and ignition problems belong to the ignition/flame-proving codes, **not** here. This code is strictly about proving airflow and venting before ignition.

## Safe checks before you call anyone

These are the only steps a homeowner should do:

- **Check the thermostat:** set it to Heat and a temperature above room temp; replace batteries if it's battery-powered.
- **Replace a dirty air filter.** A clogged filter restricts overall airflow and can contribute to airflow faults.
- **Look at the exterior vent and intake pipes** (usually PVC out a sidewall or up the roof). Clear any visible snow, ice, leaves, nests, or debris from the openings — from the outside only.
- **Check supply and return registers** are open and unblocked by furniture or rugs.
- **Inspect the accessible condensate drain line** (high-efficiency furnaces) — the exterior run of pipe and the discharge end at the floor drain, condensate pump, or sink. Clear a visible clog or standing water at that open end only. **Do not touch the condensate trap**, which on many Goodman 90%+ furnaces is mounted inside or on the cabinet; that is technician work.
- **Reset once:** flip the furnace switch or breaker off, wait 30 seconds, and back on to allow one clean retry.

If the code returns after these checks, stop and call a technician. Do **not** open the furnace cabinet, disconnect tubing, or attempt to test or bypass the switch.

## How a technician will diagnose it

A qualified tech will typically:

- Run the furnace and watch the inducer start, listening and checking for proper spin-up.
- Put a **manometer** on the pressure switch to measure actual inducer draft versus the switch's rated setpoint.
- Inspect the pressure hose for cracks, kinks, or trapped condensate and check the inducer's pressure tap for blockage.
- Inspect and flow-test the **vent and intake piping** for restriction, slope, and correct length/diameter.
- Clear and test the **condensate trap and drain** on high-efficiency units.
- Test the pressure switch continuity: it should be open at rest and close when draft is applied.
- Evaluate the **inducer motor** — amp draw, bearing condition, and airflow — before condemning it.

A good quote names the specific failed part (hose, switch, inducer, or vent restriction) and confirms the measured draft — not just "replaced the pressure switch."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Pressure-switch flash code (commonly 3 flashes — confirm against your door-label legend), inducer runs but no ignition | Blocked vent/intake pipe | Clear visible debris/ice/snow from exterior pipe openings | Flow-test and correct venting; check slope and length |
| Fault mostly on wet/cold days, water near furnace | Clogged condensate trap/line | Clear a visible clog or standing water at the accessible drain end only — not the in-cabinet trap | Clean trap, verify drain path, check inducer drain port |
| Inducer spins weakly or noisy | Failing inducer motor | None — do not open cabinet | Amp-test and replace inducer motor or assembly |
| Code returns after clean filter and clear vents | Cracked/blocked pressure hose | None | Inspect and replace pressure switch hose |
| Switch never closes despite good draft | Failed pressure switch | None | Manometer test and replace switch |
| Started after a vent remodel | Improper vent sizing/routing | Verify no obvious new obstruction | Re-engineer venting to spec |

## Repair costs

Honest US ranges (parts + labor, varies by region and model):

- **DIY airflow fixes** (filter, clearing vent openings, clearing the accessible drain line): **$0 – $40**
- **Pressure switch hose replacement:** **$120 – $250**
- **Pressure switch replacement:** **$150 – $350**
- **Condensate trap/drain cleaning or replacement:** **$120 – $300**
- **Vent/intake clearing or re-routing:** **$150 – $600+** depending on the work
- **Inducer motor or inducer assembly replacement:** **$400 – $1,200**, depending on your model and whether the motor alone is available or the complete assembly has to be replaced

A single diagnostic service call typically runs **$100 – $200+**, higher for after-hours, weekend, or holiday visits, and is often credited toward the repair.

## Related codes

- **Goodman Furnace 3 Flashes: Pressure Switch Stuck Open** — the single-stage LED code commonly used for this fault.
- **Goodman Furnace 2 Flashes: Pressure Switch Stuck Closed** — the opposite condition, switch closed when it shouldn't be.
- **Goodman Furnace High-Stage Pressure Switch Open** — the two-stage version, reported as a separate fault; check the flash-code legend on your furnace door label for the count your board uses.
- **Goodman Furnace Short Cycling: Causes, Fixes & Costs** — related if the furnace repeatedly starts and stops.
- **Goodman Furnace Keeps Shutting Off: Causes & Fixes** — for intermittent shutdowns tied to airflow or venting.
- **Goodman Furnace Leaking Water: Causes, Fixes & Costs** — relevant when a condensate backup is the culprit.
