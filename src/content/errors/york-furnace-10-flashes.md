---
title: "York Furnace 10 Flashes: Gas Valve Circuit Error Fixes"
code: "10 flashes"
description: "York furnace 10 flashes means the gas valve is energized with no call for heat. Gas-safety steps, causes, safe checks, and repair costs."
brand: york
equipment: furnace
severity: pro
costRange: "$100 – $250 diagnostic; $350 – $900+ if the gas valve or control board is replaced"
appliesTo: >
  York single- and two-stage gas furnaces that report faults by counting flashes on the diagnostic LED on the control board (many Affinity, LX, and Diamond series). The 10-flash meaning ("gas valve energized with no call for heat") applies to boards where this count appears on the legend printed near the LED. On some older or OEM-variant boards the flash counts differ, so always confirm against the legend on the control board or blower-door label.
tags:
  - york
  - furnace
  - gas-valve
  - control-board
  - error-code
parts: []
datePublished: 2026-09-25
dateModified: 2026-09-25
reviewedBy: ""
faq:
  - q: What should I do first if my York furnace shows 10 flashes?
    a: Check for a gas smell before anything else. If you smell rotten egg or sulfur, hear hissing, or smell or see burning, do not touch any switch — leave the house and call your gas utility or 911 from outside. Only if there is no gas odor should you consider a single power cycle.
  - q: Can I reset a York furnace showing 10 flashes myself?
    a: Only if there is no gas odor, hissing, or burning smell. In that case you may cycle power once at the furnace switch or breaker. If the 10-flash code returns, stop and call a technician — repeated resets won't fix a gas valve circuit fault and can be unsafe.
  - q: Is a York 10-flash code dangerous?
    a: It is a safety-related fault. The board sees the gas valve energized when it shouldn't be, which is a potential unintended gas-flow condition, so the control locks out heating. Treat it as pro-level; do not bypass anything.
  - q: How much does it cost to fix a York 10-flash gas valve error?
    a: Expect $100–$250 for the diagnostic or service call, and roughly $350–$900 or more if the gas valve or control board is replaced — two-stage and modulating boards run at the higher end. A loose harness connection can sometimes be a lower-cost fix.
  - q: Will the furnace still run with a 10-flash code?
    a: Usually not for heat. The control typically holds a soft or hard lockout on the gas valve circuit until the fault clears and power is cycled, so you'll have no heat until it's repaired.
---

## What this code means

On York gas furnaces, **10 flashes** on the control board's diagnostic LED indicates a **gas valve circuit error** — specifically, the board detects voltage on the gas valve output (the valve is energized, or appears to be) when there is **no active call for heat**.

> **⚠️ Gas safety first — read before touching anything.** This code means the control believes the gas valve can be energized with no call for heat, which is a potential unintended gas-flow condition. **If you smell gas (rotten egg or sulfur), hear hissing, or smell or see burning:** do not touch any switch, thermostat, breaker, or phone inside the house. Leave the building immediately, take everyone with you, and call your gas utility's emergency line or 911 from outside. **Do not attempt a reset.** Do not go back inside until the utility or fire department says it is safe.

This is a safety-oriented self-check. The control board constantly monitors its own gas valve driver circuit. If it senses the valve could receive power at the wrong time, it flags the fault and locks out heating so the furnace can't fire unexpectedly.

Because the problem is inside the control-circuit wiring, the board, or the gas valve itself, this is **technician-level (pro)** work. On most York boards this fault **holds until power is cycled** — it does not silently clear on its own while the fault condition remains. Confirm the exact behavior against the legend printed on your control board, since flash-count meanings can vary slightly by board revision.

## Common causes, ranked by probability

1. **Miswired or shorted gas valve wiring** — a pinched, chafed, or incorrectly landed wire on the gas valve terminals feeding stray voltage back to the board.
2. **Loose or corroded gas valve harness connector** — intermittent contact confuses the board's valve-voltage sensing.
3. **Failed or shorted gas valve** — an internal short in the valve coil can present as energized when it shouldn't be.
4. **Control board fault** — a failed driver circuit or relay on the ignition control board that misreads or misdrives the valve output.
5. **Aftermarket or incorrect replacement gas valve** — a valve that doesn't match York's spec can trip the board's valve-circuit monitoring.
6. **Moisture or debris on the board / connectors** — condensate intrusion causing leakage current across terminals.

Where York publishes a troubleshooting sequence, technicians verify wiring and connections first, then the valve, then the board — replacing the board is the last step, not the first.

## Safe checks before you call anyone

> **⚠️ STOP — check for gas before you check anything else.** If you smell gas (rotten egg or sulfur), hear hissing near the furnace or gas piping, or smell or see burning, **do not touch switches, the thermostat, the breaker, or light switches.** Leave the house right away and call your gas utility's emergency number or 911 **from outside**. **Do not attempt a reset or power cycle under any circumstances.** Because a 10-flash code points at the gas valve circuit, cycling power could re-energize that circuit — the single power cycle below is only appropriate when there is **no** gas odor, no hissing, and no burning smell.

If there is no gas odor, hissing, or burning smell, these are the only steps a homeowner should attempt:

- **Thermostat:** Confirm it's set to Heat and the temperature is above room temp. For battery models, install fresh batteries.
- **Air filter:** Check it's clean and correctly seated — a badly clogged filter causes other faults but is always worth ruling out.
- **Breaker / furnace switch:** *Only with no gas odor present,* cycle the furnace disconnect switch or breaker **once** to attempt a single reset.
- **Blower door panel:** Make sure the exterior panel is fully seated (the door switch must be pressed for the furnace to run).
- **Vents and registers:** Confirm supply and return vents are open and unblocked.
- **Condensate line:** On high-efficiency units, check the condensate drain isn't clogged or overflowing.

If the 10-flash code returns after one reset, **stop and call a licensed HVAC technician.** Do not open the cabinet, touch wiring or the gas valve, or repeatedly reset the unit.

## How a technician will diagnose it

A qualified tech will typically:

1. **Read the flash code and confirm the board legend** to verify 10 flashes means gas valve circuit error on your specific board.
2. **Power down and inspect gas valve wiring** for pinched, chafed, or miswired conductors and check harness connectors for corrosion or looseness.
3. **Measure voltage at the gas valve output** with a multimeter during standby and during a call for heat, confirming whether voltage is present when it shouldn't be.
4. **Test the gas valve coil** for shorts or out-of-spec resistance.
5. **Inspect the control board** for burnt driver components, relay failure, or moisture damage.
6. **Verify the valve model matches York's spec** if it was previously replaced.
7. **Repair or replace** the offending component, then cycle power and confirm the code clears through a full heat cycle.

If a quote jumps straight to "replace the control board" without any wiring or valve testing, ask what was measured — the board is usually the last suspect, not the first.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Gas odor, hissing, or burning smell | Possible unintended gas flow | Leave the house; call the gas utility or 911 from outside — no reset | Utility/technician makes the system safe before any repair |
| 10 flashes, no heat | Gas valve wiring shorted or miswired | Cycle power once (only if no gas odor) | Inspect, correct, and secure valve wiring |
| Code returns after reset | Loose/corroded valve connector | Verify panel seated, then call pro | Clean/reseat or replace harness connector |
| Intermittent 10-flash lockout | Failing gas valve coil | None | Test coil, replace gas valve if shorted |
| Code persists after wiring checks | Control board driver fault | None | Replace ignition control board |
| Fault after a prior valve repair | Wrong/aftermarket valve | None | Install York-spec gas valve |
| Code after wet weather/flooding | Moisture on board or terminals | Check condensate line | Dry, clean, or replace affected components |

## Repair costs

| Repair | Typical US cost (parts + labor) |
|---|---|
| Diagnostic / service call | $100 – $250 |
| Reseat or repair valve harness / wiring | $150 – $350 |
| Gas valve replacement | $350 – $700 |
| Control board replacement | $450 – $900 (more on two-stage and modulating boards) |
| Full diagnosis + minor wiring fix | $150 – $350 |

Prices vary by region, furnace age, and parts availability. A simple loose-connection fix lands at the low end; a board or valve replacement at the high end, and OEM boards for two-stage or modulating furnaces can exceed the range above. Get an itemized quote showing what was tested before any major part is replaced.

## Related codes

Flash-count legends differ between York/Johnson Controls board generations, so check the legend printed on your own control board before assuming a meaning for any of these:

- **York Furnace 5 Flashes**
- **York Furnace 6 Flashes**
- **York Furnace 7 Flashes**
- **York Furnace 9 Flashes**
