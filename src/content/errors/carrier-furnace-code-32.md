---
title: "Carrier Furnace Code 32: Low-Pressure Switch Fault & Fixes"
code: "Code 32"
description: "Carrier Furnace Code 32 means the low-stage pressure switch did not close or reopened. Causes, fixes and repair costs from $0 DIY to $1,200+."
brand: carrier
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200+ if the inducer assembly needs replacement"
appliesTo: >
  Two-stage and multi-stage Carrier gas furnaces (58- and 59-series model families) whose control boards prove a separate low-stage pressure switch. Legends vary by board — the door-label legend for your unit governs whether Code 32 is the low-pressure switch fault.
tags:
  - carrier
  - furnace
  - pressure-switch
  - two-stage
  - inducer
parts: []
datePublished: 2026-09-15
dateModified: 2026-09-15
reviewedBy: ""
faq:
  - q: Is Carrier Code 32 an airflow or filter problem?
    a: No. Code 32 is a low-stage pressure (draft/inducer proving) switch fault, not an airflow or limit fault. A dirty filter can worsen it but is not the documented trigger.
  - q: Does Code 32 reset on its own?
    a: On most boards the furnace retries and the fault clears once the switch closes correctly. If it repeats, the board may hold in soft lockout until conditions are met or power is cycled.
  - q: Can I fix Code 32 myself?
    a: You can check the filter, thermostat, breaker and the outside vent terminations. Everything inside the cabinet — hoses, switches, the inducer — is technician work.
  - q: How much does a Code 32 repair usually cost?
    a: Often $0 if it is a blocked vent you can safely clear, about $150-$275 for a pressure switch, and roughly $400-$1,200 if the inducer assembly needs replacement. On Infinity/variable-speed platforms an inducer or control-level repair can run higher still.
---

## What this code means

Carrier Furnace **Code 32** means the **low-stage pressure switch did not close when expected, or reopened during a call for heat**. On two-stage and multi-stage boards, a dedicated pressure switch proves that the inducer (draft) motor is pulling the correct vacuum for low-fire operation. If the board doesn't see that switch close — or sees it drop out mid-cycle — it flags Code 32 and won't safely light the burners on low stage.

This is a **draft/inducer proving fault**, not an airflow, limit, or gas-supply problem. Don't confuse it with high-limit or flame-proving codes.

**Important:** legends vary by control board. The door-label legend printed inside your furnace's blower compartment governs what Code 32 means on your specific unit. If your label describes Code 32 differently, follow the label.

Depending on the board, the furnace typically retries and clears once the switch behaves correctly. If it can't prove the switch, it may sit in a soft lockout until the condition clears or power is cycled. Because diagnosis requires opening the cabinet and testing pressures and switches, this is rated **pro**.

## Common causes, ranked by probability

A note on the ordering: **#1 dominates in winter and storm conditions** — snow, ice, drifting, and wind-driven debris at the terminations. Outside of snow and ice season, **#2 and #3 are at least as common as #1 and often more so**, because hose and condensate faults occur year-round and don't depend on the weather. Read the list as two tiers rather than one strict sequence.

1. **Blocked or restricted vent/intake termination** — snow, ice, leaves, insects, or a bird's nest at the outdoor PVC vent or intake pipe. This reduces draft so the switch can't close or drops out mid-cycle. Most likely cause during winter and after storms.
2. **Condensate blockage in the inducer, trap, or drain** — water backing up in a high-efficiency (condensing) furnace disrupts the pressure the switch senses. A year-round leader, including a plugged inducer drain port.
3. **Cracked, loose, kinked, or water-logged pressure switch hose/tubing** — a bad hose is a very common cause of a switch that won't close, in any season.
4. **Weak or failing inducer (draft) motor** — a motor that spins slowly or has worn bearings can't generate enough vacuum for the low-stage switch.
5. **Failed or out-of-spec low-stage pressure switch** — the switch itself is defective or drifting from its set point.
6. **Blocked inducer housing** — debris or corrosion inside the inducer assembly.
7. **Wiring or connector fault** between the switch and the control board.

## Safe checks before you call anyone

These are the only steps a homeowner should do:

- **Air filter** — a severely clogged filter can affect airflow-related behavior; replace it if dirty. (This won't usually cause Code 32 by itself, but it's cheap and rules out a variable.)
- **Thermostat** — confirm it's set to Heat and the setpoint is above room temperature. Replace batteries if it's battery-powered.
- **Breaker / furnace switch** — check the breaker and the furnace service switch. You may cycle power **once** to clear the fault.
- **Outside vent and intake pipes** — from outside, visually check the PVC termination(s) for snow, ice, leaves, nests, or insect screens clogged with debris. Clear anything obvious you can safely reach, within these limits: **ground-level pipes only** (no ladders, no roof terminations), **shut the furnace off at the service switch first**, and **do not push tools, sticks, wire, or a hose up into the pipe** — debris driven inward can block the inducer drain port and make the fault worse. If the blockage isn't at the opening where you can clear it by hand, leave it for a technician.
- **Condensate line** — look for standing water or an obviously clogged/overflowing drain and confirm the line is routed to the drain.
- **Panels/registers** — make sure the blower-door panel is fully seated and supply/return registers are open.

If Code 32 returns after these checks, stop and call a technician. **Do not** open the cabinet, bypass switches, or disconnect hoses.

## How a technician will diagnose it

A qualified tech will typically:

1. Read the flash code and confirm against the **door-label legend** for your model.
2. Inspect the vent and intake terminations and the full vent run for restriction or sagging that traps condensate.
3. Check the pressure switch hoses for cracks, kinks, blockage, or trapped water, and clear the inducer drain port.
4. Measure the **actual vacuum** at the low-stage switch with a manometer and compare it to the switch's rated set point (printed on the switch).
5. Test switch continuity — verifying it closes when the correct vacuum is present.
6. Evaluate the **inducer motor** for correct RPM, amp draw, and bearing wear.
7. Verify the condensate trap and drain are clear on condensing units.
8. Inspect wiring and connectors between the switch and the control board.

Getting a quote that jumps straight to replacing the board without checking hoses, vent, and the inducer is a red flag.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Code 32, no low-fire ignition | Low-stage switch not closing | Check filter, cycle power once, inspect outside vents | Manometer test switch vacuum, inspect hoses |
| Fault worse in snow/ice/wind | Blocked or iced vent/intake termination | Clear snow/ice/debris from ground-level outdoor pipes by hand | Inspect full vent run, correct slope/termination |
| Water near furnace or gurgling | Condensate backup in trap/inducer | Check drain line for standing water | Clear trap, inducer drain port, condensate line |
| Intermittent Code 32 | Cracked or water-logged pressure hose | None (cabinet interior) | Replace/reroute hose, clear moisture |
| Weak draft, slow inducer sound | Failing inducer motor | None | Test RPM/amps, replace inducer assembly |
| Code repeats after all clear | Failed pressure switch or wiring | None | Replace switch, repair connector/wiring |

## Repair costs

Honest US ranges (parts + labor; regional variation applies):

- **Clearing a blocked vent/intake termination:** $0 if you can safely reach it; **$90–$180** service call if a tech clears it.
- **Clearing condensate trap/drain:** **$100–$225**.
- **Pressure switch hose replacement/reroute:** **$120–$225**.
- **Low-stage pressure switch replacement:** **$150–$275**.
- **Inducer motor replacement:** **$400–$1,200** — two-stage Carrier inducers are often supplied as a sealed motor/housing assembly rather than a bare motor, which pushes parts cost up. On Infinity/variable-speed platforms the total can exceed the top of that range.
- **Wiring/connector repair:** **$100–$250**.
- **Diagnostic/service call:** **$90–$180**, often credited toward the repair.

Many Code 32 calls end at the low end — a blocked vent or a cracked hose — so insist the tech verifies actual vacuum before condemning an expensive part.

## Related codes

- **Code 31 — Carrier Furnace Code 31: Causes, Fixes & Costs** (main/high-stage pressure switch did not close on two-stage boards; single-stage boards legend the same numeral more generically as a pressure switch did not close / relief opened fault — legend varies by board, check the door label)
- **Code 33 — Carrier Furnace Code 33: Causes, Fixes & Costs** (limit circuit fault)
- **Code 23 — Carrier Furnace Code 23: Pressure Switch Did Not Open**
- **Code 34 — Carrier Furnace Code 34: Ignition Proving Failure & Fixes**
- **Code 14 — Carrier Furnace Code 14: Ignition Lockout Causes & Fixes**
