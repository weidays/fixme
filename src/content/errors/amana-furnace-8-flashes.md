---
title: "Amana Furnace 8 Flashes: Igniter Circuit Fault Fixes"
code: "8 flashes"
description: "Amana furnace 8 flashes means an igniter relay or circuit fault. Causes, safe checks, and repair costs from $0 DIY to $700 if the control board is replaced."
brand: amana
equipment: furnace
severity: pro
costRange: "$0 DIY – $350 for a hot-surface igniter, up to $700 if the control board is replaced"
appliesTo: "Amana 80% and 90%+ gas furnaces with integrated ignition control boards (e.g. AMES, AMSS, AMVC, ACVC series). Flash-code legends vary by board; confirm the code with the board's own diagnostic label before ordering parts."
tags:
  - amana
  - furnace
  - igniter
  - control-board
  - flash-code
parts: []
datePublished: 2026-09-20
dateModified: 2026-09-20
reviewedBy: ""
faq:
  - q: Can I replace the hot-surface igniter myself?
    a: No. Replacing the igniter means opening the cabinet, disconnecting line-voltage wiring, and handling a fragile ceramic element. That is technician work on Amana furnaces.
  - q: Does the 8-flash code reset on its own?
    a: On most Amana boards the control will retry ignition a set number of times, then hold the fault. Cycling power at the breaker clears it once, but if the igniter circuit is failed it will return immediately.
  - q: Is 8 flashes the same as an ignition lockout?
    a: No. Ignition lockout means the furnace tried and failed to prove flame; on many Amana boards it is reported as 1 flash, but flash legends vary by board generation, so check the diagnostic label inside your blower door. 8 flashes points specifically at the igniter drawing no current, or a fault in the igniter wiring or control relay.
---

## What this code means

On Amana gas furnaces, **8 flashes** on the control board LED indicates an **igniter relay problem — check igniter**. The control board expects the hot-surface igniter to draw current during the ignition sequence. When it detects that the igniter is not pulling any current, it flags this fault.

The failure lives in the **igniter circuit**, which includes three things:

- the **hot-surface igniter** itself (an open or cracked element draws no current),
- the **wiring and connector** feeding the igniter, and
- the **control board relay** that switches power to the igniter.

Because the LED legend and retry behavior vary by board generation, always confirm the flash count against the diagnostic label printed inside the furnace's blower door before acting. Most Amana boards will attempt ignition a limited number of times and then **hold the fault until power is cycled**. This is a **pro-level** repair — every part of the diagnosis is inside the cabinet on line-voltage wiring.

## Common causes, ranked by probability

1. **Failed hot-surface igniter (open element).** A cracked or burned-through igniter draws zero current, which is exactly what this code detects. This is by far the most common cause.
2. **Loose, corroded, or disconnected igniter connector.** A bad plug at the igniter or the board interrupts the circuit even when the igniter is good.
3. **Damaged igniter wiring.** Chafed, melted, or broken wires between the board and igniter break continuity.
4. **Control board relay failure.** The relay that switches igniter power fails to close, so no current flows even with a healthy igniter and wiring.
5. **Control board fault.** Less commonly, the current-sensing circuit on the board misreads a good igniter and trips the code falsely.

## Safe checks before you call anyone

These are the only steps a homeowner should perform. Everything else on this code is inside the cabinet.

- **Check the thermostat.** Confirm it is set to Heat and the setpoint is above room temperature. Replace the thermostat batteries if it uses them.
- **Check the breaker and furnace switch.** Make sure the furnace breaker is on and the service switch on or near the furnace is on.
- **Change the air filter if it's dirty.** It will not cause this code, but the technician will check it anyway, so it's one less variable on the service call.
- **Cycle power once.** Turn the furnace off at the switch or breaker, wait 30 seconds, and turn it back on to allow **one** reset. If the 8-flash code returns, stop and call a technician — do not keep resetting.
- **Confirm the code.** Read the flash count and compare it to the diagnostic label inside the blower door so you can describe it accurately to the technician.

Do **not** open the cabinet, touch the igniter, test wiring, or bypass any switches.

## How a technician will diagnose it

A qualified tech will typically:

1. **Read the flashing fault code (and stored history if the board supports it)** and compare it to the diagnostic label to confirm 8 flashes on this specific board.
2. **Watch the ignition sequence** to see whether the igniter glows at all.
3. **Measure igniter resistance** with a multimeter — an open (infinite resistance) igniter confirms a failed element.
4. **Check for igniter voltage** from the board during the ignition attempt to confirm the relay is switching power.
5. **Inspect the igniter connector and wiring** for corrosion, looseness, or heat damage.
6. **Test the control board relay / current sensing** if the igniter and wiring both check out.
7. **Replace the failed component** and run a full heating cycle to confirm the code clears.

If a tech quotes a board replacement without first testing the igniter and wiring, ask them to justify it — the igniter is the most likely part by a wide margin.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| 8 flashes, igniter never glows | Open/failed hot-surface igniter | Cycle power once; if it returns, call a pro | Measure igniter resistance; replace igniter |
| 8 flashes, igniter loose or intermittent | Corroded or loose igniter connector | None — do not open cabinet | Clean/reseat connector, repair terminal |
| 8 flashes after recent service or rodents | Damaged igniter wiring | None | Inspect and repair/replace wiring harness |
| 8 flashes with a known-good igniter installed | Control board relay failure | None | Test relay, replace control board |
| Code clears then returns each cycle | Igniter aging out / intermittent open | Note frequency for the tech | Confirm with resistance test, replace igniter |

## Repair costs

Honest US ranges, parts plus labor:

- **One-time reset / no parts needed:** **$0** if cycling power clears it and it doesn't return (rare for this code).
- **Diagnostic / service call:** **$90 – $180**, often credited toward the repair.
- **Hot-surface igniter replacement:** **$150 – $350** installed. The igniter part itself is often $30 – $90.
- **Igniter connector or wiring repair:** **$120 – $250** depending on harness access.
- **Control board replacement:** **$400 – $700** installed, depending on board availability.

Because the igniter is inexpensive relative to labor, replacing it is usually the smallest and most likely fix.

## Related codes

Flash-code meanings differ between board generations — check the diagnostic label inside your blower door before assuming any of these mappings apply to your furnace.

- **Amana Furnace Code 1 Flashes: Ignition Lockout Fixes** — on many Amana boards, 1 flash means the furnace tried and failed to prove flame after multiple attempts.
- **Amana Furnace 5 Flashes: Flame Sensed, No Call for Heat** — flame detected when none is expected.
- **Amana Furnace 6 Flashes: 115VAC Reversed Polarity or Poor Grounding** — line and neutral are swapped, or the furnace is not properly grounded.
- **Amana Furnace 7 Flashes: Low Flame Signal Fix** — weak flame-rectification signal at the sensor.
