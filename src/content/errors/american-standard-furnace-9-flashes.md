---
title: "American Standard Furnace 9 Flashes: Igniter Circuit Fix"
code: "9 flashes"
description: "American Standard furnace 9 flashes means an open igniter circuit or low current draw. Causes, safe checks, and repair costs ($0 DIY–$350)."
brand: american-standard
equipment: furnace
severity: pro
costRange: "$0 DIY – $350 if the hot surface igniter needs replacement"
appliesTo: >
  Most American Standard single- and two-stage gas furnaces using integrated furnace control (IFC) boards with a diagnostic LED (e.g. Freedom, Silver, Platinum, and TUD/TDD/AUD-series air handlers with gas sections). Flash-code legends vary by board revision, so confirm 9 flashes against the legend printed on the blower-door label or control cover.
tags:
  - american-standard
  - furnace
  - flash-code
  - igniter
  - ignition
parts: []
datePublished: 2026-09-21
dateModified: 2026-09-21
reviewedBy: ""
faq:
  - q: Can I replace the hot surface igniter myself?
    a: No. The igniter sits inside the burner compartment and requires opening the cabinet, disconnecting wiring, and verifying current draw. That is technician work on this brand.
  - q: Does the 9-flash code clear on its own?
    a: On most boards it holds until the control detects a normal igniter current on the next call for heat, or until you cycle power. If it returns after one reset, stop and call a technician.
  - q: Is a 9-flash code dangerous?
    a: It is not an immediate hazard like a gas leak, but the furnace will not heat. Because the fix is inside the cabinet, treat it as a pro repair rather than a DIY job.
  - q: Why does my furnace start then lock out with 9 flashes?
    a: A cracked or aged igniter can glow weakly but draw too little current for the board to confirm it, so the control aborts ignition and flashes the code.
---

## What this code means

On American Standard furnaces, **9 flashes** on the control board's diagnostic LED means **check igniter — the igniter circuit is open or the igniter is not drawing current**.

When your thermostat calls for heat, the integrated furnace control (IFC) energizes the hot surface igniter and expects to see a specific amount of current flow through it. If the board sees an open circuit, no current, or current that is too low, it assumes the igniter cannot reach ignition temperature. It then aborts the sequence and flashes this code.

This is a **control-circuit fault focused on the igniter itself and its wiring** — not a gas-supply, flame-proving, or limit problem. Those conditions have their own codes.

On most boards, the code **holds until the control sees normal igniter current on the next heat call, or until power is cycled**. Legends vary by board revision, so always confirm 9 flashes against the label inside the blower door.

## Common causes, ranked by probability

1. **Failed or cracked hot surface igniter** — the most common cause. Silicon carbide and silicon nitride igniters become brittle and develop hairline cracks with age, breaking the circuit or dropping current draw below the threshold.
2. **Open igniter wiring or a loose connector** — a disconnected, corroded, or burned plug at the igniter or the board interrupts current flow.
3. **Damaged igniter wire harness** — chafed or heat-damaged wiring near the burner box.
4. **Failed igniter relay or driver on the control board** — less common; the board energizes the igniter output but cannot deliver or sense current correctly.
5. **Incorrect or aftermarket igniter with the wrong current rating** — a mismatched replacement can read as out-of-range to the board.

## Safe checks before you call anyone

These are the only steps a homeowner should perform. Everything else on this fault is inside the cabinet and is technician work.

- **Check the thermostat:** confirm it is set to Heat and the setpoint is above room temperature. Replace the thermostat batteries if it uses them.
- **Check the breaker and furnace switch:** make sure the furnace breaker is on and the service switch (the light-switch-looking one near the furnace) is on.
- **Replace a dirty air filter:** a badly clogged filter won't cause 9 flashes, but it's worth ruling out while you're there.
- **Confirm supply and return registers are open** and not blocked by furniture or rugs.
- **One reset only:** cycle power at the furnace switch or breaker once, wait a minute, and let it try again. If 9 flashes returns, stop — do not keep resetting. Call a technician.

Do **not** open the burner compartment, touch the igniter, or test wiring. The igniter operates at very high temperature and the circuit must be tested with a meter.

## How a technician will diagnose it

A qualified tech will typically:

- Confirm the flash code against the board legend for your specific model.
- Remove the burner-compartment panel and **visually inspect the igniter** for cracks, breaks, or discoloration.
- **Measure igniter resistance** with a multimeter (an open reading confirms a failed igniter).
- **Measure current draw** during the ignition attempt to see whether it falls within the board's expected range.
- Inspect the **igniter connector and harness** for looseness, corrosion, or heat damage.
- Verify the **board's igniter output voltage** to distinguish an igniter failure from a board driver failure.
- Replace the igniter with the correct OEM-rated part and confirm normal ignition through a full cycle.

If the quote jumps straight to a control board without an igniter resistance and current test, ask why — the igniter is the far more common failure.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| 9 flashes, no glow at igniter | Failed/cracked igniter or open circuit | One power reset; confirm code | Test resistance & current, replace igniter |
| Igniter glows faintly then lockout | Aged igniter drawing low current | One power reset only | Verify current draw, replace igniter |
| Intermittent 9 flashes | Loose or corroded igniter connector | None | Inspect and repair harness/connector |
| 9 flashes right after a repair | Wrong-rated aftermarket igniter | None | Install correct OEM-spec igniter |
| Good igniter but still 9 flashes | Board igniter driver/sense fault | None | Verify board output, replace IFC if needed |

## Repair costs

Ranges are typical US prices including parts and labor; your area may differ.

- **Diagnostic / service call:** $80 – $180
- **Hot surface igniter replacement:** $150 – $350 (part $30 – $90, plus labor)
- **Igniter connector or harness repair:** $120 – $300
- **Integrated furnace control (IFC) board replacement:** $350 – $700+

Because every step of the actual fix is inside the cabinet, expect a professional repair. The good news: the igniter is usually the culprit, and it's one of the less expensive furnace parts.

## Related codes

- **American Standard Furnace 5 Flashes: Flame With Gas Off** — flame sensed when it shouldn't be.
- **American Standard Furnace 7 Flashes: Gas Valve Circuit** — gas valve circuit fault.
- **American Standard Furnace 8 Flashes: Weak Flame Sense** — poor flame signal after ignition.
- **American Standard Furnace 4 Flashes: Open Limit Circuit** — safety limit open.
- **American Standard Furnace 2 Flashes** and **3 Flashes** — pressure-switch and related sequence faults.
