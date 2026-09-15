---
title: "Bryant Furnace Code 21: Meaning, Causes & Fixes"
code: "Code 21"
description: "Bryant Code 21 means a gas valve wiring or relay fault on the control board. What it means, safe checks, and realistic 2026 US repair costs."
brand: bryant
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $1,200+ installed if the control board is replaced"
appliesTo: "Bryant gas furnaces using Carrier/Bryant 2-digit status-code ignition controls, which report Code 21 on the amber status LED as 2 flashes, a pause, then 1 flash. Older or other control types may not report a Code 21 at all — always confirm against the status-code legend printed on the control board or inside the blower door."
tags:
  - bryant
  - furnace
  - error-code
  - gas-valve
  - control-board
  - lockout
parts: []
datePublished: 2026-09-15
dateModified: 2026-09-15
reviewedBy: ""
faq:
  - q: Is Bryant Code 21 a gas leak or a gas supply problem?
    a: No. Code 21 is a control-circuit fault — the board sees the gas valve relay closed when it should be open. It is not a gas leak, low gas pressure, or an ignition failure. Those trigger different codes. That said, if you ever smell gas (rotten egg or sulfur) near the furnace, do not touch any switch or breaker — leave the house and call your gas utility or 911 from outside.
  - q: Will Code 21 clear on its own?
    a: No. This is a hard lockout that does not auto-reset. It clears only when the control loses and regains its 24VAC power — in other words, a full power cycle. If it returns after that power cycle, the fault is still present and needs a technician.
  - q: How do I cycle power correctly?
    a: Use the furnace disconnect switch (the light-switch-looking switch on or near the unit) — that is the preferred method. Turn it OFF, wait 30–60 seconds, then turn it back ON. If there is no disconnect switch, use the furnace breaker. Then wait for the control to finish rebooting and complete a heat call before you decide whether Code 21 came back.
  - q: Can I fix Code 21 myself?
    a: You can safely do one power-cycle reset. Everything else — testing the gas valve relay, checking wiring, or replacing the control board — is inside the cabinet and is technician work by design.
---

## What this code means

Bryant **Code 21 is a Gas Heating Lockout**. The furnace control board is watching the gas valve relay contacts, and it has detected that those contacts are **closed (the valve is energized) when the board is commanding them to be open**.

In plain terms: the board expects the gas valve circuit to be "off," but it is reading "on." That points to one of two things — the gas valve is **mis-wired** so it's getting power it shouldn't, or the **relay/driver on the control board that switches the valve is shorted** and stuck closed.

> **If you smell gas — a rotten egg or sulfur odor — at any point:** do not touch light switches, the furnace switch, or the breaker, and do not use anything that could spark. Leave the house, taking everyone with you, and call your gas utility's emergency line or 911 from outside. Do not go back in or reset anything until they tell you it's safe.

Two important clarifications for homeowners:

- **This is not a gas-supply, gas-pressure, or ignition problem.** Those are proven and reported under different codes. Code 21 is strictly about the control circuit that switches the valve.
- **It does not auto-reset.** Code 21 is a hard lockout that holds until the control's 24VAC power is cycled. That's a safety design — a valve circuit that won't turn off is something the control refuses to keep operating.

Because this fault involves the valve circuit being energized when it shouldn't be, it is a **pro-level repair**. Do not attempt to run the furnace repeatedly to "clear" it.

## Common causes, ranked by probability

The manufacturer's published check list for this code names two things: a **mis-wired gas valve** and a **defective control**. Those are causes 1 and 2 below.

1. **Mis-wired gas valve** — the most common trigger after any recent service, board swap, or valve replacement. A valve wired to the wrong terminal (or a stray/pinched wire) back-feeds the relay so the board reads it as closed.
2. **Shorted gas valve relay or driver on the control board (defective control)** — the electronic switch that energizes the valve has failed closed. This is a board-level fault requiring board replacement.

The next two are **secondary, field-observed possibilities** — plausible things technicians run into that can produce the same reading, but they are **not** part of Bryant's documented check list for this code:

3. **Damaged or chafed valve harness** *(field-observed, not documented for this code)* — insulation worn through where the harness crosses a sharp edge or the burner assembly, creating an unintended path that mimics an energized valve.
4. **Incorrect replacement part** *(field-observed, not documented for this code)* — a non-matching gas valve or aftermarket control board with different relay logic can produce a false Code 21.

For this code, the documented checks are the **gas valve wiring** and the **control itself** — no ranked order is published. Wiring is the cheaper of the two to rule out, so it's reasonable to see it checked first.

## Safe checks before you call anyone

Keep to these — none require opening the sealed burner/gas compartment:

- **If you smell gas, stop here.** Rotten egg or sulfur odor means: touch nothing electrical (no switches, no breaker), leave the house, and call the gas utility or 911 from outside. Skip every step below.
- **Thermostat:** Confirm it's set to Heat and the setpoint is above room temperature. If it's battery-powered, install fresh batteries.
- **Air filter:** A clogged filter won't cause Code 21, but replacing a dirty one is good practice while you're there.
- **One power-cycle reset:** Use the **furnace disconnect switch** (the light-switch-looking switch on or near the unit) — that's the preferred method. Turn it OFF, wait 30–60 seconds, then turn it back ON. If there's no disconnect switch, use the furnace breaker. **Wait for the control to fully reboot and run through a heat call** before you judge whether the code returned.
- **If Code 21 comes back, leave the furnace switched OFF** at the disconnect (or leave the breaker off) until a technician arrives, and call one. Don't keep resetting a control that is reporting the valve circuit energized when it should be off.

Do not touch the manual gas cock, and do not open the burner compartment. The gas valve, its wiring, the relay, and the board are all technician work.

## How a technician will diagnose it

A qualified tech should work in roughly this order, which lets you sanity-check a quote:

1. **Read the status code and confirm it against the legend** printed on the control board or inside the blower door. On Carrier/Bryant 2-digit status controls, Code 21 shows on the amber LED as 2 flashes, a pause, then 1 flash. Not every control uses that 2-digit scheme — older single-digit or LED-on/off controls report differently, and some won't report a Code 21 at all — so the legend on the board is what settles it.
2. **De-energize the furnace** and inspect the **gas valve wiring** against Bryant's wiring diagram — checking for a mis-wired terminal, a swapped harness, or a chafed/pinched wire back-feeding the relay.
3. **Meter the valve circuit** with the board commanding the valve off, confirming whether voltage is present when it shouldn't be.
4. **Test the relay/driver on the control board** — if wiring is correct but the board still reads the valve energized with no command, the control is defective and the **board is the fault**.
5. **Verify part compatibility** if the valve or board was recently replaced with a non-OEM component.
6. **Repair or replace**, then power-cycle to confirm Code 21 does not return under a full heat call.

A tech who quotes a control board without first checking the valve wiring is skipping the cheaper check. Ask which of the two they found.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Code 21 right after recent service or a part swap | Mis-wired gas valve | One power-cycle reset; note recent work | Inspect and correct valve wiring per diagram |
| Code 21 returns immediately after every reset | Shorted relay/driver on control board (defective control) | Leave the furnace switched OFF; call a pro | Meter valve circuit, replace control board |
| Gas odor at any point | Treat as an emergency, not a code | Leave the house; call the gas utility or 911 from outside | Utility/technician response before any reset |
| Intermittent Code 21, worse when furnace vibrates | Chafed/pinched valve harness (field-observed) | One reset only | Locate and repair damaged harness |
| Code 21 after installing an aftermarket board or valve | Incompatible replacement part (field-observed) | Note the parts installed | Verify OEM compatibility, install correct part |
| Furnace locked out, no heat, blower may run | Hard lockout holding | Single power-cycle reset, then leave OFF if it returns | Full diagnosis before returning to service |

## Repair costs

Honest US ranges for 2026 (parts + labor; regional rates, after-hours calls and equipment type move these a lot):

- **Power-cycle reset (DIY):** $0
- **Diagnostic / service call:** $100 – $200+, higher for after-hours or emergency dispatch
- **Correct mis-wired gas valve or repair harness:** $130 – $300, mostly labor
- **Gas valve replacement (if wrong/damaged part was installed):** $300 – $550
- **Control board replacement (shorted relay/driver):** roughly **$400 – $1,200 installed** for an OEM Carrier/Bryant integrated furnace control, and toward or above the top of that range for variable-speed or communicating boards and after-hours work

A wiring error is the cheaper of the two documented causes to correct, so it's worth confirming which one the tech actually found. But a control board quote in the four-figure range is not automatically inflated — on a variable-speed or communicating furnace, that's a normal installed price. If you want to test a quote, ask for the part number and the labor breakdown rather than assuming the number is too high.

## Related codes

- **Code 12 — Bryant Furnace Code 12: Meaning, Causes & Fixes** (control/power-related)
- **Code 13 — Bryant Furnace Code 13: Meaning, Causes & Fixes**
- **Code 14 — Bryant Furnace Code 14: Meaning, Causes & Fixes**
- **Code 33 — Bryant Furnace Code 33: Meaning, Causes & Fixes**

If your issue is actually failed ignition or unproven flame, that's a different code family — Code 21 is specifically a gas valve **control-circuit** lockout, not a gas-supply or ignition fault.
