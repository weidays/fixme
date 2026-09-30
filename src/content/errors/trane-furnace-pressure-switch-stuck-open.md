---
title: "Trane Furnace Pressure Switch Stuck Open: Causes & Fixes"
code: "Pressure switch stuck open"
description: "Trane furnace pressure switch stuck open: causes from blocked vents to a failing inducer, safe checks, and repair costs from $0 DIY to $1,200."
brand: trane
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if the inducer motor needs replacement"
appliesTo: "Trane single- and two-stage gas furnaces (XR, XV, XC, S-series) with integrated furnace controls; two-stage models use two pressure switches, so the exact behavior varies by board and firing rate."
tags:
  - trane
  - furnace
  - pressure-switch
  - venting
  - condensate
parts:
  - name: "Pleated furnace air filter"
    search: "pleated furnace air filter"
  - name: "Condensate drain cleaning brush"
    search: "condensate drain line cleaning brush kit"
datePublished: 2026-09-29
dateModified: 2026-09-29
reviewedBy: ""
faq:
  - q: "Does the Trane pressure switch code reset on its own?"
    a: "In most cases the control retries once venting is proven. If the switch never closes within the trial period, the board holds in a soft lockout and retries on a timer; some boards need a power cycle after repeated faults. The number of retries and how long the lockout lasts vary by control board and firmware, so there is no single universal timing. Do not power-cycle more than once — if the fault comes back, stop and call a technician."
  - q: "Can I just tap or bypass the pressure switch to get heat?"
    a: "No. The pressure switch is a safety that proves the inducer is moving flue gases. Bypassing it can allow carbon monoxide into your home. This is technician-only diagnosis and repair."
  - q: "Why does the problem happen more on cold or windy days?"
    a: "Cold, damp weather causes condensation to collect in switch hoses and drains, and high winds can pressurize the flue termination. Both can keep the switch from closing and trip a stuck-open fault."
---

## What this code means

A Trane furnace pressure switch is a safety that confirms the **inducer (draft) motor** is pulling combustion gases through the heat exchanger and out the flue before the burners light. On startup the control energizes the inducer and waits for the pressure switch contacts to **close**.

A **"pressure switch stuck open"** condition means the control never saw those contacts close within the allowed time — so it will **not** allow ignition. On many Trane and American Standard integrated furnace controls this appears as a **3-flash** diagnostic code, but that mapping is not universal: older White-Rodgers-based boards and newer variable-speed/communicating controls may use a different flash count, report the fault as a number, or display it only at the comfort control. **Read the flash-code legend printed on the blower-door label or on the control board itself** rather than assuming three flashes means this fault. The furnace typically stops the ignition sequence, waits, and retries. After repeated failed attempts it may go into a soft lockout that retries on a timer or requires a power cycle to clear, depending on the board and firmware.

This is a **pro-level** fault. The switch itself is usually working correctly — it is reporting that adequate draft is not being proven, which is exactly what a safety switch is supposed to do.

## Common causes, ranked by probability

1. **Blocked or restricted vent/intake** — a clogged flue termination, blocked concentric intake, nest, ice, or debris prevents the inducer from establishing draft.
2. **Clogged condensate drain or trap** — on high-efficiency (condensing) models, a backed-up condensate trap or drain floods the pressure-switch port and keeps the switch open.
3. **Cracked, pinched, or disconnected pressure-switch hose** — the small rubber tube between the inducer and switch is off, kinked, or full of water.
4. **Weak or failing inducer motor** — worn bearings or reduced RPM mean the inducer can't generate enough draft to close the switch.
5. **Debris or corrosion inside the inducer housing** — buildup reduces airflow through the housing and lowers the pressure signal.
6. **Faulty pressure switch** — a switch that has drifted out of spec or has stuck contacts. This is confirmed by testing, not assumed first.
7. **Wiring/connector problems** — corroded or loose spade terminals on the switch circuit.

Note: On **two-stage Trane furnaces** there are two pressure switches (low-fire and high-fire). A fault on one stage can produce this code while the other stage still tries to operate, so which switch is at fault varies by model.

## Safe checks before you call anyone

These are the only steps a homeowner should do:

- **Check the air filter.** A severely clogged filter can disrupt airflow and cause nuisance faults. Replace if dirty — read the size printed on the edge of the existing filter and buy that same size.
- **Confirm the thermostat** is set to Heat and above room temperature; replace batteries if it uses them.
- **Check the breaker** for the furnace and the **furnace power switch** (looks like a light switch near the unit). If tripped or off, reset/turn on **once**.
- **Look at the outdoor vent/intake terminations.** Clear away snow, ice, leaves, nests, or anything blocking the pipes — this is a very common cause and is safe to check from outside.
- **Check the condensate drain** (high-efficiency models). If you see water pooling or overflowing, the drain may be clogged. Clearing an accessible external drain line is fine; anything inside the cabinet is not.
- **Confirm supply and return registers** are open and unobstructed.
- If the furnace is locked out, you may cycle power **once**. If the fault returns, stop and call a pro — do not keep resetting.

Do **not** open the cabinet, remove hoses, tap the switch, or attempt to bypass it.

## How a technician will diagnose it

A qualified tech will typically:

1. Read the flash code and history from the control board, using the legend for that specific board.
2. Inspect the vent and intake terminations and the full flue path for blockage.
3. Check the condensate trap and drain for water backup.
4. Inspect the pressure-switch hose(s) for water, kinks, or disconnection.
5. Use a **manometer** to measure the actual draft pressure the inducer produces and compare it to the switch's spec printed on the switch body (in inches of water column).
6. Measure inducer RPM/amperage and inspect the housing for debris.
7. Use a **multimeter** to verify the switch opens and closes at the correct pressure and check the wiring/connectors.
8. Replace only the failed component — trap, hose, inducer, or switch.

Sanity check: a good tech confirms **draft pressure with a manometer** before condemning the switch. Replacing the switch without measuring is a red flag.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Inducer runs, then furnace shuts down, no ignition | Draft not proven / stuck-open switch | Clear vent terminations; cycle power once | Manometer test, trace draft path |
| Fault worse on windy/cold days | Blocked or wind-affected flue termination | Clear snow/ice from vents | Inspect/reposition termination |
| Water near furnace base (HE models) | Clogged condensate trap/drain | Clear accessible external drain | Clean trap and internal drain path |
| Repeated pressure-switch faults after resets | Weak inducer or faulty switch | Stop resetting; call pro | Test inducer RPM, replace switch/inducer |
| Fault only on high or low stage | Faulty stage-specific pressure switch | None — two-switch system | Identify and replace correct switch |
| Whistling or gurgling from switch area | Water in pressure-switch hose | None | Clear/replace hose, fix drainage |

## Repair costs

Honest US ranges (parts + labor, varies by region and model):

- **DIY: $0** — clearing a blocked outdoor vent or replacing a filter.
- **Condensate drain/trap cleaning:** $100 – $250.
- **Pressure-switch hose replacement:** $100 – $200.
- **Pressure switch replacement:** $150 – $350 (two-switch models cost more).
- **Inducer motor replacement:** $400 – $1,200 installed, landing at the upper end on premium, two-stage, or variable-speed models where the inducer assembly alone is expensive.
- **Diagnostic/service call:** $100 – $250 in most markets, higher for after-hours or emergency calls, and often credited toward the repair.

If the furnace is under Trane's warranty, the switch or inducer part may be covered — you typically still pay labor.

## Related codes

- **Trane Furnace 3 Flashes: Pressure Switch Error Fixes** — the specific flash code most often tied to this condition.
- **Trane Furnace Short Cycling: Causes, Fixes & Costs** — draft faults can present as short cycling.
- **Trane Furnace Keeps Shutting Off: Causes & Fixes** — overlapping symptoms when ignition is repeatedly blocked.
- **Trane Furnace Leaking Water: Causes, Fixes & Costs** — condensate backups that also trip the pressure switch.
- **Trane Furnace Won't Ignite: Causes, Fixes & Costs** — when draft is proven but ignition still fails.
