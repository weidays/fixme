---
title: "Lennox Furnace Code E207: Hot Surface Igniter Fix & Cost"
code: "Code E207"
description: "Lennox Code E207 means a hot surface igniter open circuit. See causes, safe checks, technician diagnosis and honest US repair costs."
brand: lennox
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $350 if the igniter and control harness need replacement"
appliesTo: >
  Lennox and Dave Lennox Signature gas furnaces using SureLight integrated control boards (e.g. G60, SLP98, EL296, ML196). The E207 legend is consistent as an igniter open circuit, but exact fault-display method (LED flash vs. text) varies by board generation.
tags:
  - lennox
  - furnace
  - hot-surface-igniter
  - ignition
  - error-code
parts: []
datePublished: 2026-09-22
dateModified: 2026-09-22
reviewedBy: ""
faq:
  - q: Can I replace the hot surface igniter myself?
    a: No. The igniter sits inside the burner cabinet, is fragile silicon-carbide or silicon-nitride, and requires opening the unit and testing resistance. This is technician work on Lennox furnaces.
  - q: Does Code E207 reset on its own?
    a: On most SureLight boards E207 will retry ignition a set number of times, then hold until power is cycled. One power-cycle reset is safe; if it returns, call a pro rather than resetting repeatedly.
  - q: Is E207 dangerous to run with?
    a: It is not an immediate gas hazard because the furnace will not ignite without a working igniter, but it leaves you with no heat. Have it repaired promptly, especially in cold weather.
---

## What this code means

Lennox Code **E207** indicates a **hot surface igniter (HSI) open circuit** — the control board applied power to the igniter but did not measure the expected current flow through it. In plain terms, the board thinks the igniter element is broken, disconnected, or otherwise electrically open.

On a normal call for heat, the SureLight control energizes the hot surface igniter, which glows red-hot and lights the burners. If the board detects an open circuit in that igniter loop, it cannot safely proceed with ignition and posts E207.

Because this is a component/wiring fault rather than a flame-proving or gas-supply issue, the fix is almost always a new igniter or a repaired igniter connection. On most Lennox SureLight boards the control will attempt a limited number of retries, then **hold in lockout until power is cycled**. Exact retry behavior and how the fault displays (LED flash sequence vs. text readout) varies by board generation — check your unit's label diagram.

## Common causes, ranked by probability

1. **Cracked or burned-out hot surface igniter** — the silicon-carbide/nitride element fails open with age and thermal cycling. This is by far the most common cause of E207.
2. **Loose or corroded igniter connector** — the two-pin plug at the igniter or at the control board has worked loose or corroded, breaking the circuit.
3. **Damaged igniter wiring harness** — chafed, melted, or broken conductors between the board and the igniter.
4. **Failed igniter output on the control board** — less common; the board's igniter circuit no longer sources power correctly.
5. **Incorrect or incompatible replacement igniter** — a previously installed aftermarket igniter with the wrong resistance range can read as open to the board.

## Safe checks before you call anyone

These are the only steps a homeowner should do — everything inside the cabinet is technician work.

- **Check the thermostat**: confirm it's set to Heat with the setpoint above room temperature, and replace the batteries if it's battery-powered.
- **Replace a dirty air filter**: a heavily clogged filter can cause repeated lockouts on some systems; a clean filter rules that out.
- **Reset the breaker or furnace switch once**: flip the furnace disconnect switch (or breaker) off, wait 30 seconds, and back on to clear a one-time lockout. Do this **only once** — do not repeat resets.
- **Confirm the front panel is fully seated**: the door switch must be closed for the furnace to run; make sure the blower-compartment panel is pushed in flush.
- **Check that supply and return vents are open and unobstructed.**

If E207 returns after one reset, stop and call a technician. Do not open the burner cabinet or attempt to test or replace the igniter yourself.

## How a technician will diagnose it

A qualified tech will typically:

1. **Read the fault history** on the SureLight board to confirm E207 and see how many attempts it logged.
2. **Power down and remove the burner-compartment panel** to inspect the igniter and its harness.
3. **Measure igniter resistance** with a multimeter — an open (infinite) reading confirms a failed element; a reading outside the specified range flags a wrong or degrading igniter.
4. **Inspect and reseat the igniter connector**, checking for corrosion, heat damage, or backed-out pins.
5. **Check the harness continuity** from the board to the igniter plug.
6. **Verify the board's igniter output voltage** during a call for heat if the igniter and wiring test good.
7. **Replace the failed component** — usually the igniter — then run a full heat cycle to confirm ignition and clear the code.

You can sanity-check a quote: a straightforward igniter swap should be a short visit. A full board replacement is a bigger job and should only be quoted after the igniter and wiring are ruled out.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| No heat, E207 on display, no glow at igniter | Failed (open) hot surface igniter | One reset; if it returns, call pro | Test igniter resistance, replace igniter |
| Intermittent E207, sometimes lights | Loose or corroded igniter connector | Confirm panel seated; reset once | Reseat/clean connector, retest |
| E207 after recent DIY part swap | Wrong replacement igniter fitted | None | Verify part number, install correct igniter |
| E207 with visible burnt/melted wiring smell | Damaged igniter harness | Shut off, call pro | Repair or replace harness |
| E207 persists with a known-good igniter | Failed board igniter output | None | Test board output, replace control board |

## Repair costs

Honest US ranges, parts plus labor:

- **One-time reset (no parts):** $0 DIY.
- **Hot surface igniter replacement:** ~$150–$350 installed (igniter part $30–$90, plus a diagnostic/service call).
- **Igniter connector or harness repair:** ~$120–$300 depending on access and parts.
- **SureLight control board replacement (if the board's igniter output has failed):** ~$400–$800 installed.

Prices vary by region, furnace model, and whether the visit is after-hours. Getting a written diagnosis before authorizing a board replacement is worth it, since the igniter is the far more common failure.

## Related codes

- **Lennox Furnace Code 200: Causes, Fixes & Costs** — ignition lockout after failed ignition attempts.
- **Lennox Furnace Code E204: Gas Valve Wiring Fix & Cost** — gas valve circuit faults.
- **Lennox Furnace Code E206: Gas Valve Relay Fix & Cost** — gas valve relay problems.
- **Lennox Furnace Code E125: Control Board Failure Fix & Cost** — broader SureLight board failures.
