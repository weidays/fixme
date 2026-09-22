---
title: "Lennox Furnace Code E131: Corrupted Control Parameters"
code: "Code E131"
description: "Lennox Code E131 means corrupted control parameters. Causes, safe checks, reconfiguration vs board replacement, and honest US repair costs."
brand: lennox
equipment: furnace
severity: pro
costRange: "$0 DIY reset – $700+ if the control board needs replacement"
appliesTo: >
  Lennox and Dave Lennox Signature variable-speed and communicating gas furnaces (SLP99V, EL296V, ML296V and similar) using digital control boards that report numeric E-codes. Exact code legend and reconfiguration steps vary by board revision; confirm against the label inside the blower door.
tags:
  - lennox
  - furnace
  - control-board
  - error-code
  - communicating
parts: []
datePublished: 2026-09-22
dateModified: 2026-09-22
reviewedBy: ""
faq:
  - q: Can I fix Lennox Code E131 myself?
    a: You can safely cycle power once at the breaker to see if it clears. If it returns, the stored control parameters are corrupted and a technician must reconfigure or replace the board.
  - q: Does E131 mean I need a new control board?
    a: Not always. Many cases are fixed by reconfiguring or reloading the control's parameters. A board is only replaced when it will not hold a valid configuration or fails self-test.
  - q: Will the furnace still run with Code E131?
    a: Sometimes it runs erratically, but often it holds or locks out because the control cannot trust its own settings. Treat it as a pro repair, not something to keep resetting.
  - q: Is E131 an emergency?
    a: No. It is a control-configuration fault, not a gas or safety leak. It is still a professional repair because it requires access inside the cabinet and factory software.
---

## What this code means

Lennox Code E131 means the furnace control has **corrupted control parameters** — the settings stored in the board's memory (things like blower profiles, staging, model configuration, and installer setup values) have been damaged or lost. The control can no longer trust its own configuration, so it flags E131 and needs to be **reconfigured or replaced**.

Think of it like a computer whose settings file got scrambled: the hardware may be fine, but until the correct parameters are reloaded, it won't operate reliably. On communicating Lennox systems, these parameters are set at installation and stored on the board; anything that disrupts that memory can trigger E131.

Whether the code **auto-resets or holds until power is cycled varies by board revision.** Some boards hold the fault until power is removed and the parameters are corrected; others may attempt limited operation. Do not rely on repeated resets — if the parameters are truly corrupted, cycling power will not repair them.

## Common causes, ranked by probability

1. **Interrupted or incomplete configuration** — power lost, or the process interrupted, during installer setup or a firmware/parameter update, leaving the stored settings half-written.
2. **Loss of stored settings after a power event** — a brownout, surge, or unstable line voltage during operation corrupting the control's memory.
3. **Control board memory fault** — the non-volatile memory on the board can no longer hold valid parameters, so it re-flags E131 even after reconfiguration.
4. **Mismatched or wrong configuration loaded** — parameters that don't match the actual furnace model (common after a board swap where setup wasn't completed).
5. **Failing control board** — end-of-life or heat-damaged board that intermittently loses or scrambles its stored data.

## Safe checks before you call anyone

These are the only steps a homeowner should do. Everything else on this code lives inside the cabinet and is technician work.

- **Thermostat:** Confirm it's set to Heat and above room temperature. On a communicating system, check the thermostat isn't showing its own alert.
- **Thermostat batteries:** If your thermostat uses batteries, replace them — a dropping thermostat can cause odd communication behavior.
- **Breaker / switch:** Locate the furnace breaker and the service switch (looks like a light switch near the furnace). Turn the furnace off, wait 60 seconds, and turn it back on **once** to allow one clean restart.
- **Air filter:** Check and replace a dirty filter — not a cause of E131, but good hygiene before any service call.
- **Visible vents and registers:** Make sure supply and return registers are open and unblocked.
- **Condensate line:** On high-efficiency units, confirm the condensate drain isn't backed up (a full pan can trigger unrelated safety shutdowns).

If E131 returns after one power cycle, stop and call a Lennox dealer. This code is not fixed by repeated resets.

## How a technician will diagnose it

Use this to sanity-check any quote you're given:

1. **Confirm the exact code and board revision** against the label inside the blower door — the E131 legend and reconfiguration procedure differ between board versions.
2. **Read the control's status/history** through the diagnostic interface or thermostat to see when and how the parameters were lost.
3. **Attempt reconfiguration** — reload or re-enter the correct installer parameters and furnace model configuration using Lennox software or the on-board setup.
4. **Verify the board holds the settings** — power cycle and confirm the parameters remain valid and E131 clears.
5. **Check supply voltage stability** — if a power quality issue corrupted the memory, they'll note line voltage and may recommend surge protection.
6. **Replace the control board** only if it fails self-test or refuses to retain a valid configuration, then reconfigure the new board to match your furnace.

A good tech tries reconfiguration before quoting a board. If the first move is "replace the board," ask whether reconfiguration was attempted.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| E131 right after a new install or update | Interrupted/incomplete configuration | Cycle power once | Reload correct parameters and complete setup |
| E131 after a storm or power flicker | Settings corrupted by a power event | Cycle power once; check breaker | Reconfigure board; assess for surge protection |
| E131 returns every time after reset | Board can't retain valid parameters | Stop resetting; call dealer | Reconfigure, and replace board if it won't hold |
| E131 after a recent board swap | Wrong/mismatched configuration | None | Load parameters that match your exact model |
| Furnace runs erratically with E131 | Control acting on corrupted settings | Cycle power once | Reconfigure and verify staging/blower profiles |

## Repair costs

Honest US ranges. Actual pricing varies by region and dealer.

- **Diagnostic / service call:** $90 – $180.
- **Reconfiguration / parameter reload only (no parts):** $120 – $300, often just the labor and software time if the board is healthy.
- **Control board replacement (part + labor + reconfiguration):** $450 – $700+ on communicating/variable-speed furnaces; premium boards run higher.
- **Whole-home or furnace surge protector (if power events are the cause):** $150 – $400 installed — optional but worth it if brownouts damaged the memory.

Many E131 cases are resolved with reconfiguration alone, so don't accept a board-replacement quote until reconfiguration has been ruled out.

## Related codes

- **Lennox Furnace Code E125: Control Board Failure Fix & Cost** — outright board failure vs. the corrupted-settings condition of E131.
- **Lennox Furnace Code E110: Low Line Voltage Fixes & Costs** — power issues that can contribute to memory corruption.
- **Lennox Furnace Code E113: High Line Voltage Fixes & Costs** — over-voltage events that can damage control memory.
- **Lennox Furnace Code E115: Low 24 VAC Causes & Fixes** — control-circuit power problems.
- **Lennox Furnace Code 200: Causes, Fixes & Costs** — ignition lockout, a separate fault family from control configuration.
