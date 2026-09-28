---
title: "Carrier Furnace Pressure Switch Stuck Open: Causes & Fixes"
code: "Pressure switch stuck open"
description: "Carrier furnace pressure switch stuck open: blocked vent, weak inducer or condensate clog causes plus fixes and repair costs ($0 DIY–$1,200)."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200"
appliesTo: "Carrier 58- and 59-series gas furnaces with single- or two-stage HSI boards. 59-series and condensing 58 models are 90%+ units (PVC vent/intake, condensate trap); non-condensing 58 models are 80% units vented in metal and have no condensate drain. Exact flash code varies by control board (often shown as Code 31 or 32 on newer boards)"
tags:
  - carrier
  - furnace
  - pressure-switch
  - venting
  - inducer
parts:
  - name: "Furnace air filter (1-inch pleated) — for the safe checks only"
    search: "16x25x1 furnace air filter pleated"
  - name: "Thermostat batteries (AA/AAA) — for the safe checks only"
    search: "AA alkaline batteries thermostat"
datePublished: 2026-09-27
dateModified: 2026-09-27
reviewedBy: ""
faq:
  - q: "What does 'pressure switch stuck open' mean on a Carrier furnace?"
    a: "The control energized the inducer motor but the vent pressure switch never closed, so the board can't confirm safe venting and blocks ignition to prevent flue-gas spillage."
  - q: "Can I fix a stuck-open pressure switch myself?"
    a: "You can clear a clogged condensate line, replace a dirty filter, and remove obvious vent blockages like snow or a nest at the termination. Anything inside the cabinet — the switch, hoses, or inducer — is a technician job."
  - q: "Does this fault reset on its own?"
    a: "Most Carrier boards retry a few times, then hold in a soft lockout. Cycling power at the breaker or door switch clears one attempt; if it returns immediately, the venting problem is still present and needs a pro."
---

## What this code means

On a Carrier furnace, the vent (draft) pressure switch is a safety device that confirms the inducer motor is pulling proper draft through the heat exchanger and flue **before** the burners light. On a normal call for heat, the inducer starts, negative pressure builds in the vent, and that pressure closes the switch contacts.

"Pressure switch stuck open" means the board started the inducer but **never saw the switch close** within the expected time. Because the control can't prove safe venting, it refuses to open the gas valve. This protects you from flue-gas (carbon monoxide) spillage into your home.

How this shows up as a flash code depends on how many stages your furnace has:

- **Single-stage boards:** **Code 31** covers the one and only pressure switch — it failed to close, or it opened after closing.
- **Two-stage boards:** **Code 31** is specifically the **high-heat (high-stage) pressure switch** failing to close or reopening, and **Code 32** is the **low-heat (low-stage) pressure switch**.

The exact flash pattern and code numbering vary by control board — check the legend on the inner door or blower-compartment sticker for your unit.

Most Carrier controls will retry ignition a set number of times and then hold in a soft lockout until the fault clears or power is cycled.

## Common causes, ranked by probability

Some of these causes only exist on **90%+ condensing furnaces** (59-series and condensing 58 models, which vent through PVC and produce condensate). If you have an **80% unit with a metal vent pipe**, it has no condensate trap, no inducer drain port and no PVC intake, so those items simply don't apply to your furnace.

1. **Blocked or restricted vent/intake — all models.** The most common trigger. Snow, ice, a bird or rodent nest, or leaves at the termination. On 90%+ units this includes a collapsed or disconnected PVC vent/intake pipe; on 80% units it's the metal vent or hood.
2. **Clogged condensate drain or trap — 90%+ condensing units only.** A plugged trap backs up water into the pressure-switch hose or inducer, holding the switch open.
3. **Cracked, pinched, or disconnected pressure-switch tubing — all models.** The small rubber hose to the switch is kinked, split, or (on condensing units) full of condensate.
4. **Weak or failing inducer motor — all models.** Bearings dragging or the wheel loaded with debris, so it can't spin fast enough to create draft.
5. **Failed pressure switch itself — all models.** The diaphragm or contacts fail and won't close even under proper draft.
6. **Blocked inducer drain port or trap on the inducer housing — 90%+ condensing units only.** Restricts the pressure-sensing circuit.
7. **Excessive vent length or improper venting — all models.** Usually shows up after a poor install or vent modification, not out of the blue.

## Safe checks before you call anyone

**First, safety:** this fault exists to stop flue gas from spilling into your home. If a carbon monoxide alarm is sounding, or you smell exhaust, sewer-like or burning odors near the furnace, **shut the furnace off, leave the house, and call 911 or your gas utility from outside. Do not troubleshoot.**

Otherwise, these are the only steps a homeowner should do:

- **Set the thermostat correctly** to Heat with the setpoint above room temperature, and replace weak batteries if it's battery-powered.
- **Check and replace a dirty air filter** — severe restriction can disrupt airflow and system behavior.
- **Look at your outdoor vent and intake terminations** (the PVC pipes on a 90%+ unit, or the metal hood on an 80% unit). Clear away snow, ice, leaves, or an obvious nest. Do **not** disassemble anything.
- **Check the condensate line** if you have a high-efficiency (90%+) unit — if you see standing water or the drain is clogged, clear the visible external line/hose per your manual. An 80% furnace won't have one.
- **Reset once**: turn the furnace switch or breaker off for 30 seconds, then back on, and allow one full start attempt.
- **Confirm supply and return registers are open** and not blocked by furniture or rugs.

If the fault returns after one reset and the vent is clear, stop and call a technician. Do **not** repeatedly reset a locked-out unit, and never bypass the pressure switch.

## How a technician will diagnose it

A qualified tech will typically:

- Read the stored fault code and history from the board.
- Run the furnace and **measure inducer draft (negative pressure)** with a manometer, comparing it to whatever value is stamped on the switch for that unit. Set-points vary widely by model, by stage and by vent configuration — roughly 0.20" to 1.00" w.c. is common — so the switch label and the installation instructions, not a rule of thumb, decide what's correct.
- Inspect and test the **pressure-switch hose** for kinks, cracks, and trapped water.
- Test switch operation electrically — verifying the contacts close at the rated pressure.
- Inspect the **vent and intake** end to end for blockage, sagging, or improper slope.
- Check the **condensate trap and inducer drain port** for clogs (90%+ condensing units only).
- Evaluate the **inducer motor** — amp draw, wheel condition, and bearing play.
- Verify the vent length and configuration match Carrier's install spec.
- On two-stage units, confirm **which** switch is at fault (high-heat vs. low-heat) before condemning a part.

A good quote names the specific failed part and the measured draft reading, not just "replace the pressure switch."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Inducer runs, no ignition, code flashes | Vent/intake blocked | Clear snow, nest, leaves at exterior termination | Inspect full vent run, remove internal blockage |
| Fault on 90%+ unit with water present | Clogged condensate trap/line | Clear visible external drain line | Clear/replace trap, inducer drain port |
| Weak or no draft during startup | Failing inducer motor | None — call a pro | Test amp draw, replace inducer |
| Code even with clear vent | Cracked/disconnected switch hose | None — call a pro | Replace hose, verify routing |
| Switch never closes at proper draft | Failed pressure switch | None — call a pro | Measure draft, replace switch |
| Two-stage unit faults only in one stage | High- vs. low-heat switch issue | None — call a pro | Identify the affected stage and switch, test and replace |
| Recurs after modifications | Improper vent length/slope | None — call a pro | Correct venting to spec |

## Repair costs

Ranges are typical US prices including parts and labor; your area and unit may vary.

- **Clearing a vent blockage or condensate clog:** $0 DIY (exterior) – $150–$250 pro service call
- **Pressure-switch hose replacement:** $120–$220
- **Pressure switch replacement:** $150–$350 (part $30–$90 plus labor)
- **Condensate trap / inducer drain service (90%+ units):** $150–$300
- **Inducer motor replacement:** $400–$1,200 installed — condensing 59-series inducer assemblies routinely land in the upper half of that band
- **Diagnostic / service call (applied to repair):** $90–$180

A dirty filter or a snow-covered vent may cost you nothing to fix. Save the big spend for confirmed inducer or switch failure — and don't assume a four-figure inducer quote on a condensing furnace is gouging; those assemblies are genuinely expensive.

## Related codes

Code numbering varies by control board, so confirm the meaning against the legend on your furnace door before acting on any of these.

- **Carrier Furnace Code 31: Causes, Fixes & Costs** — the single pressure switch on single-stage boards, or the high-heat pressure switch on two-stage boards.
- **Carrier Furnace Code 32: Low-Heat Pressure Switch Fault & Fixes** — the low-stage switch on two-stage boards.
- **Carrier Furnace Code 23: Pressure Switch Did Not Open** — the opposite fault (switch stuck closed).
- **Carrier Furnace Code 43: Low-Heat Pressure Switch Fault** — appears on two-stage and modulating Carrier/Bryant boards; varies by control board.
- **Carrier Furnace Code 42: Inducer Motor Fault & Fixes** — varies by control board; typically found on variable-speed/ECM inducer controls rather than every 58/59 board.
- **Carrier Furnace Short Cycling: Causes, Fixes & Costs** — related on-off behavior.
