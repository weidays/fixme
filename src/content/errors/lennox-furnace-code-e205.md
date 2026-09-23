---
title: "Lennox Furnace Code E205: Gas Valve Relay Short Fix"
code: "Code E205"
description: "Lennox Furnace Code E205 means the gas valve relay is shorted or the valve is energized when it shouldn't be. Causes, fixes and repair costs."
brand: lennox
equipment: furnace
severity: pro
costRange: "$90 diagnostic if the fault doesn't recur – $1,100 if a variable-speed integrated control board is replaced; $0 in parts only when the part is warranty-covered"
appliesTo: "Lennox SLP99V, EL296V, ML296V and similar variable- and multi-stage furnaces using the SureLight or Unitary integrated control board; the gas-valve-relay lockout sits in the low-E200 alert range, and the exact alert number, code text and reset behavior can differ by board generation — always match the fault by its description in your board's alert legend, not by the number alone."
tags:
  - lennox
  - furnace
  - gas-valve
  - control-board
  - safety-lockout
parts: []
datePublished: 2026-09-22
dateModified: 2026-09-22
reviewedBy: ""
faq:
  - q: Is Code E205 dangerous?
    a: It can be. E205 flags a gas valve relay that may energize the valve when it shouldn't. The board locks out to prevent unsafe gas flow, so it is genuinely a pro-level fault, not a DIY fix. The safest response is to switch the furnace off and leave it off until a technician has looked at it.
  - q: Can I reset a Lennox furnace showing E205?
    a: Only once, and only if there is no gas odor anywhere near the furnace. Cycling power one time tells you whether the code was a one-off glitch. If E205 returns — or if you smell gas at any point — leave the furnace off and call a technician. Repeated resets on a gas-valve fault are unsafe.
  - q: Does E205 clear itself?
    a: On most Lennox boards this is a hard fault that holds until power is cycled and the underlying short is corrected. It will not auto-clear while the relay or wiring is faulty.
  - q: Will E205 stop my furnace from heating?
    a: Yes. The control board withholds ignition when it detects a shorted gas valve relay, so you'll typically get no heat until the board or valve circuit is repaired.
---

## What this code means

Lennox Code **E205** means the furnace control board has detected that the **gas valve relay contact is shorted**, or that the **gas valve is energized when the control expects it to be off**. In plain terms: the circuit that switches the gas valve on and off is stuck, or is reading voltage at the valve at a time when there should be none.

Because an unintended open gas valve is a safety hazard, the board responds by **locking out** — it refuses to start an ignition sequence. On most Lennox SureLight/Unitary integrated boards this is a **hard fault that holds until line power is cycled** and the fault condition is corrected.

**Check the number against your own board.** The fault described above — *gas valve relay contact shorted / gas valve energized when it should not be* — is the manufacturer-documented meaning, and on Lennox boards it is numbered in the **low-E200 range**. The specific number, the wording, and the reset behavior can differ by board generation, so before you act on anything here, open the **alert-code legend printed on your furnace's blower-door label** (or the installation manual for your board) and confirm that the code your furnace is showing carries this gas-valve-relay description. If the description on your label says something else — a rollout, a limit, a flame-sense fault — this is not your page.

This is a **control-circuit fault**, not a gas-supply or flame-proving problem. Do not confuse it with ignition or flame-sense codes.

## Common causes, ranked by probability

1. **Failed gas valve relay on the integrated control board** — the relay contacts have welded or shorted, the single most common trigger for this code.
2. **Shorted or pinched wiring in the gas valve harness** — chafed insulation or a pinched wire back-feeding voltage to the valve circuit.
3. **Faulty gas valve** internal short pulling the circuit high when it should be de-energized.
4. **Moisture or corrosion on the control board** gas-valve terminals, bridging the circuit.
5. **Miswired or back-fed control connection** after a recent repair or component swap.

The board itself is usually the prime suspect because the relay lives on it, which is why E205 often ends in a control-board diagnosis.

## Safe checks before you call anyone

**First: if you smell gas anywhere near the furnace, do not touch the breaker, the thermostat, or any switch.** Leave the house, then call your gas utility's emergency line or 911 from outside.

Given that this code specifically means the gas valve may be energized when it shouldn't be, the safest homeowner response is to **turn the furnace off at its service switch and leave it off until a technician has inspected it.** Everything below is optional, stays outside the cabinet, and assumes there is no gas odor.

- **Confirm the thermostat is calling for heat** and set well above room temperature; replace thermostat batteries if it's battery-powered.
- **Check the air filter** — a filthy filter won't cause E205, but rule it out while you're there.
- **Verify the furnace switch and breaker** are on. If, and only if, **there is no gas odor**, you may **cycle the breaker off, wait 30 seconds, and back on ONCE** to see whether E205 was a one-time glitch. If you'd rather not, that's the safer choice — a technician can read the fault history either way.
- **Confirm supply and return registers are open** and unobstructed.
- **Check the visible condensate line and drain** outside the cabinet for backup or standing water, and report what you see to the technician.
- **Make sure the blower access panel is fully seated** — a loose panel can hold the door switch open.

Nothing inside the control compartment is a homeowner job. Do not remove the control-box cover, probe terminals, or disconnect wiring.

If **E205 returns after one reset, stop.** Do not repeat the reset. Switch the furnace off and call a licensed HVAC technician. A shorted gas valve circuit is exactly the kind of fault you don't want to keep re-energizing.

## How a technician will diagnose it

A qualified tech will typically:

- Read the fault history from the control board to confirm the code and check for companion codes.
- **De-energize the furnace** and inspect the gas valve harness for chafing, pinching, or moisture damage.
- Use a multimeter to check for voltage at the gas valve **with the control commanding it off** — verifying whether the relay is passing current it shouldn't.
- Test the gas valve coil resistance to rule out an internal short in the valve itself.
- Inspect the board's gas-valve relay terminals for corrosion, heat damage, or welded contacts.
- Confirm the diagnosis before replacing the board, since a wiring short or bad valve can mimic a bad relay.

You can sanity-check a quote: a tech who wants to swap the board should first show that the wiring and gas valve tested clean.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| E205 on display, no ignition | Shorted gas valve relay on board | Cycle power once (only if no gas odor); if it returns, shut the furnace off and call a pro | Test relay, replace control board |
| E205 returns instantly after reset | Welded relay contacts | None — stop resetting, leave the furnace off | Replace integrated control board |
| E205 after a recent repair | Pinched/miswired harness | Confirm panel seated; tell the tech what work was done | Inspect and correct gas valve wiring |
| E205 plus a history of water around the furnace | Moisture or corrosion bridging board terminals — a **technician finding**, confirmed only with the control compartment open | Check the visible condensate line/drain outside the cabinet for backup and report it | Open and inspect the control compartment, dry/clean terminals, replace board if damaged |
| Intermittent E205, sometimes runs | Failing valve or marginal relay | Note when it happens | Meter valve circuit, replace faulty component |

## Repair costs

Honest US ranges, parts and labor:

- **Diagnostic / service call:** $90 – $180.
- **Gas valve harness repair or reroute:** $150 – $350.
- **Gas valve replacement:** $300 – $650 depending on model.
- **Integrated control board replacement — single-stage or basic multi-stage:** $400 – $750.
- **Integrated control board replacement — variable-speed / modulating (SLP99V-class):** $700 – $1,100 installed. Board replacement is the most common resolution for this code, since the relay is board-mounted.
- **Visit where the fault doesn't recur:** you still pay the diagnostic fee, typically **$90 – $180**. A $0 bill happens only when the call itself is covered by a warranty or service plan.

If your furnace is within its parts warranty, the board or valve may be covered — you'd still pay labor, typically $150 – $300.

## Related codes

- **Code E204** — Lennox Furnace Code E204: Gas Valve Wiring Fix & Cost (a gas-valve wiring fault, distinct from a relay short)
- **Code E125** — Lennox Furnace Code E125: Control Board Failure Fix & Cost (broader board failure)
- **Code E131** — Lennox Furnace Code E131: Corrupted Control Parameters

Codes are only listed here when the meaning can be matched to Lennox's own alert table, and numbering can still shift between board generations — verify any code against the legend on your furnace's blower-door label before acting on it.

**A note on rollout:** a rollout-switch lockout is a separate and serious fault with its own alert number, and it is **not** this code. If your furnace's own legend identifies the displayed code as a rollout, or if you see scorching, soot, or smell gas, shut the furnace off and call for service immediately.
