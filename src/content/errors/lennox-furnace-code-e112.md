---
title: "Lennox Furnace Code E112: Ground Fault Causes & Fixes"
code: "Code E112"
description: "Lennox Furnace Code E112 means a ground fault or poor ground. Learn the causes, safe checks, technician diagnosis and repair costs."
brand: lennox
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $1,200 if a communicating control board must be replaced"
appliesTo: "iComfort-enabled / communicating Lennox gas furnace controls that display alphanumeric E-codes on the control board display or a paired iComfort (S30-type) thermostat. Non-communicating Lennox furnaces, including Merit and non-communicating Elite models, report grounding and power faults as LED flash/blink sequences rather than an E112 code. Exact E112 legend text can vary by board revision, so confirm against the control board label."
tags:
  - lennox
  - furnace
  - error-code
  - ground-fault
  - electrical
parts: []
datePublished: 2026-09-21
dateModified: 2026-09-21
reviewedBy: ""
faq:
  - q: Can I reset Lennox Code E112 myself?
    a: You can cycle power once at the furnace switch or breaker. If E112 returns, stop and call a technician — a persistent grounding fault is an electrical safety issue.
  - q: Is a furnace with Code E112 safe to keep running?
    a: No. The control is telling you it cannot confirm a proper ground reference, and in some cases current may be finding an unintended path. Both are shock and fire concerns. Shut the unit down and have it inspected before continued use.
  - q: Does Code E112 clear on its own?
    a: On most Lennox communicating boards E112 holds until the fault is corrected and power is cycled. It will not reliably auto-clear if the underlying grounding problem remains.
  - q: How much does it cost to fix a Lennox E112 ground fault?
    a: Anywhere from $0 for a simple reset, to $120-$450 for ground-connection or wiring/harness repair, to $400-$1,200 if the control board must be replaced — communicating boards sit at the upper end of that range.
---

## What this code means

Lennox Furnace **Code E112 indicates a ground fault or a poor ground**. In practice, the control is reporting that it **cannot sense a proper earth-ground reference** for the furnace's electronics — the ground is missing, loose, corroded, or otherwise not doing its job. It is *not* a GFCI-style leakage detector, and it does not measure milliamps of stray current the way a ground-fault breaker does.

A secondary possibility is that current is finding an unintended path to the cabinet or ground — for example from a chafed wire or a failing component — which can also disturb the control's ground reference. That scenario is real but less common than a simple bad ground connection, and it is diagnosed after connections are ruled out.

Unlike ignition or flame-proving faults, E112 is a **control-circuit and grounding problem**, not a gas-supply issue. Do not treat it as an ignition failure.

On most Lennox communicating boards, **E112 holds the unit until the fault is corrected and power is cycled** — it is not designed to silently auto-clear while a grounding defect remains. Because the exact legend wording and reset behavior can vary by board revision, confirm the description printed on your control board label.

**If your furnace has no display and no iComfort thermostat**, it will not show "E112" at all. Non-communicating Lennox furnaces (Merit and non-communicating Elite models) report grounding and power-related faults as **LED flash/blink sequences** on the control board, and you read those against the legend on the blower-door label or in the installation manual.

**Severity: pro.** Grounding faults involve live electrical current and the safety path that protects you from it. Inside-cabinet diagnosis and repair belong to a licensed technician.

## Common causes, ranked by probability

1. **Loose, corroded, or missing ground connection** at the furnace chassis, control board ground lug, or the branch-circuit ground — the most common trigger by a wide margin.
2. **Improper field wiring, a disconnected equipment ground, or a shared/loose neutral** at the disconnect or junction box — common after a recent install or service call.
3. **Wiring harness or connector degradation** — chafed insulation, moisture intrusion, or a corroded connector interfering with the ground path.
4. **A damaged or pinched wire in the cabinet** contacting metal.
5. **Component fault leaking to ground** (secondary possibility) — a failing motor winding, inducer, igniter, or transformer putting current where it shouldn't be.
6. **Control board fault** — the board's own ground-sensing circuit failing (diagnosed last, after wiring and grounds are ruled out).

Lennox's own troubleshooting approach for grounding faults directs the tech to verify the equipment ground and its connections first, then wiring, then components, then the board — so the order above follows that logic.

## Safe checks before you call anyone

Keep to these homeowner-safe steps only:

- **Thermostat:** confirm it's set to Heat and calling for heat; if it uses batteries, replace them.
- **Air filter:** a clogged filter won't cause E112, but a dirty filter is worth swapping while you're troubleshooting.
- **Breaker / furnace switch:** locate the furnace breaker and the wall/service switch. Confirm the breaker isn't tripped. If it has tripped repeatedly, **do not keep resetting it** — that pattern points to a real fault.
- **One reset:** cycle the furnace switch (or breaker) off for 30 seconds, then on — **once**. If E112 returns, stop.
- **Visible vents and registers:** make sure supply and return vents are open and unblocked.
- **Condensate line:** check that the drain isn't backed up and that no standing water is near the furnace base — moisture can worsen grounding problems.

Do **not** open the cabinet, tighten ground lugs, test wiring with a meter, or reset the unit repeatedly. Those are technician tasks below.

## How a technician will diagnose it

A qualified tech will typically:

1. Shut off power and verify it's dead before opening the cabinet.
2. **Inspect and re-torque the equipment ground** at the board ground lug and chassis, checking for corrosion or a broken conductor.
3. Verify the branch-circuit ground continuity back to the panel and check for a loose or shared neutral at the disconnect.
4. Inspect the internal wiring harness and connectors for chafing, pinching, moisture, or insulation damage.
5. Use a meter to confirm the control is seeing a proper ground reference, and to check for continuity from live conductors to the chassis.
6. If the grounds and wiring are sound, **isolate components** (inducer, blower motor, igniter, transformer) one at a time to find any winding or component putting current onto the chassis.
7. Only after grounds, wiring, and components check out, evaluate the **control board's** ground-sensing circuit for replacement.

Sanity check a quote: a competent diagnosis leads with grounds and wiring — jumping straight to a board replacement without checking connections is a red flag.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| E112 shows, furnace won't fire | Loose/missing equipment ground | One power cycle; if it returns, stop | Inspect and re-torque ground lug and chassis ground |
| E112 returns immediately after reset | Broken ground conductor, or a wire pinched/chafed to metal | None — call a pro | Verify ground path; locate and repair/replace damaged wire |
| E112 after recent service or install | Improper field wiring / disconnected ground / shared neutral | None | Verify branch-circuit ground and neutral |
| E112 with moisture near furnace base | Wet connector or condensate leak degrading the ground path | Check/clear condensate line | Dry and inspect connectors, fix leak source |
| E112 alongside a breaker that trips | Possible current leaking to ground from a component — less common than a bad ground connection | Don't repeatedly reset; call a pro | Isolate inducer/blower motor/igniter/transformer |
| E112 persists after grounds and wiring verified | Control board ground-sensing fault | None | Test and replace control board |

## Repair costs

Honest US ranges (parts + labor; regional variation applies):

- **Simple power-cycle reset (no fault present):** $0 DIY.
- **Diagnostic / service call:** $90 – $200.
- **Re-terminate or repair a ground connection:** $120 – $300.
- **Repair or replace a damaged wire/harness:** $150 – $450.
- **Replace a transformer or similar small component:** $200 – $500.
- **Replace an inducer motor:** $400 – $1,200.
- **Replace a blower motor:** $450 – $1,800.
- **Replace the control board:** $400 – $1,200 including labor; communicating boards sit at the upper end.

Get an itemized quote. If a tech proposes a board without documenting a grounding and wiring inspection first, ask them to justify it.

## Related codes

- **Lennox Furnace Code E110** — Low Line Voltage Fixes & Costs
- **Lennox Furnace Code E111** — Reversed Polarity Fixes & Costs

E110, E111, and E112 are all power-and-wiring diagnostics; E112 is specifically the **ground fault / poor ground** member of that family, while E111 covers reversed line/neutral polarity and E110 covers low supply voltage.
