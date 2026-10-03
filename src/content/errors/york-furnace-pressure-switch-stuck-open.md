---
title: "York Furnace Pressure Switch Stuck Open: Causes & Fixes"
code: "Pressure switch stuck open"
description: "York furnace pressure switch stuck open: blocked vents, condensate, or a weak inducer. Diagnosis, fixes and $0 DIY to $1,200+ repair costs."
brand: york
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200+ if the inducer motor needs replacement"
appliesTo: "York single-stage and two-stage gas furnaces with Source 1 / integrated control boards (TG9, TM9, LX, Affinity series). Flash patterns and switch counts vary by board and stage count."
tags:
  - york
  - furnace
  - pressure-switch
  - venting
  - inducer
parts:
  - name: "Pleated furnace air filter"
    search: "furnace air filter 16x25x1 MERV 8"
  - name: "Condensate drain cleaning kit"
    search: "condensate drain line cleaning brush kit"
datePublished: 2026-10-03
dateModified: 2026-10-03
reviewedBy: ""
faq:
  - q: "Does the pressure switch stuck open fault reset by itself?"
    a: "Usually, yes. The control retries ignition after the fault clears. If the retries are used up, many York integrated boards enter a lockout that resets on its own after about an hour. Lockout length and reset behavior vary by board, so check the diagnostic label inside your blower door. A single breaker reset is fine. Do not keep resetting it."
  - q: "Can I just replace the pressure switch myself?"
    a: "No. The switch, its tubing, the inducer and the venting are inside the cabinet and require electrical testing. That is technician work. A stuck-open switch is often a venting symptom, not a failed switch."
  - q: "Why does my York furnace only fail on windy or very cold days?"
    a: "High winds or a frozen vent terminal can briefly block the flue or intake. That drops the pressure, so the switch never closes. A tech checks the terminal location and clearances."
---

## What this code means

A York furnace proves safe venting before it lights the burners. When the thermostat calls for heat, the control board turns on the **inducer (draft) motor**. The inducer pulls combustion air through the heat exchanger and pushes flue gases out. That airflow creates a vacuum that should pull the **pressure switch closed**.

"Pressure switch stuck open" means the board started the inducer, but the pressure switch contacts **stayed open**. The board never saw the expected vacuum signal. To protect you from spilling combustion gases, the furnace will not open the gas valve or ignite.

On most York / Source 1 integrated boards, the board reports this with a flash pattern (commonly **3 flashes** on single-stage boards). This page covers that 3-flash "pressure switch open" fault. The board then retries ignition. If the retries run out, many York boards enter a **lockout that resets on its own after about one hour**. Lockout length and reset behavior vary by board.

This is a different fault from the **pressure switch cycle lockout** (often **6 flashes**). That code means the switch closed and then opened repeatedly during a heat call. It has its own flash code. Exact flash counts vary by board and by whether the furnace is single- or two-stage. Confirm the pattern against the diagnostic label inside your blower door.

## Common causes, ranked by probability

1. **Blocked or restricted vent / intake pipe.** This is the #1 real-world cause. Debris, insects, ice, snow, or a clogged bird screen at the termination stops the inducer from building vacuum.
2. **Condensate blockage or a fouled inducer drain path in a high-efficiency (90%+) furnace.** Several problems can hold water in the vent path and keep the switch open:
   - a plugged condensate trap or drain line
   - a flooded or blocked inducer drain port
   - a sludged inducer housing, which is common on older furnaces
3. **Cracked, disconnected, or kinked pressure-switch hose/tubing.** The small rubber tube between the switch and the inducer or vent is loose, split, or full of condensate.
4. **Weak or failing inducer motor.** The motor spins but no longer pulls enough vacuum to close the switch.
5. **Failed pressure switch itself.** The switch is out of calibration or its contacts no longer close. This is less common than the venting issues above.
6. **Wiring fault.** A corroded or loose connection between the switch and the control board.

A standard troubleshooting sequence goes in this order. The technician confirms the inducer runs, then checks the venting and tubing, then measures the actual vacuum against the switch's rated setpoint. Only after that should the switch be condemned.

## Safe checks before you call anyone

These are the only steps a homeowner should perform:

- **Thermostat:** Confirm it's set to Heat and the setpoint is above room temperature. Replace the batteries if it's battery-powered.
- **Air filter:** A dirty filter won't cause this code, because it doesn't affect the inducer or the vent pressure signal. Still, replace it if it's dirty while you're there. Clean filters are good general upkeep.
- **Breaker / furnace switch:** Find the furnace's dedicated switch (it looks like a light switch near the unit) and the breaker. One off-then-on reset is fine. **Do not repeatedly reset a locked-out furnace.**
- **Outside vent terminals:** Look at the PVC or metal pipes where they exit the house. Clear away snow, ice, leaves, nests, or anything blocking the openings. Keep them clear of mulch and shrubs.
- **Condensate:** On a high-efficiency furnace, check for standing water around the base or a visibly plugged or overflowing condensate line. You may clear the exterior drain exit. Do not open the furnace cabinet.
- **Return and supply registers:** Make sure they're open and unobstructed.

If clearing the vent terminals and the condensate drain exit doesn't restore heat, stop here. The remaining causes are inside the cabinet and require a technician.

## How a technician will diagnose it

A qualified tech will typically:

1. Watch the ignition sequence and confirm the **inducer motor energizes and spins freely**.
2. Inspect the **pressure-switch tubing** for cracks, kinks, disconnection, or trapped condensate.
3. Connect a **manometer** to measure the actual vacuum the inducer produces, in inches of water column. Then compare it to the switch's stamped setpoint.
4. Inspect the **vent and intake runs** end to end for blockage, improper slope, sagging, or ice at the terminal.
5. On 90%+ units, check the **condensate trap, drain, inducer drain port and inducer housing** for restriction.
6. Use a meter to test whether the **switch closes** when adequate vacuum is present. If the vacuum is good but the switch won't close, the switch is faulty.
7. Check **wiring and connectors** between switch and board.

A good quote names what they measured, such as "inducer only pulling 0.2 inches, needs X" or "switch won't close at rated vacuum." Be wary of a quote that just says "it needs a pressure switch."

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fault only on windy/snowy days | Blocked or iced vent terminal | Clear snow/ice/debris from outside pipes | Relocate or re-pitch vent; install manufacturer-approved termination kit |
| Inducer runs, no ignition, repeated fault | Weak inducer or low vacuum | One reset only | Measure vacuum; replace inducer motor |
| Water near furnace base (90%+ unit) | Plugged condensate / drain port / sludged inducer housing | Clear exterior drain exit | Clean trap, drain line, inducer drain port and housing |
| Fault right after a recent repair | Loose or cracked pressure tubing | None | Reseat/replace switch hose |
| Furnace locks out after repeated retries | Multiple failed vacuum checks (lockout length and reset vary by board) | Wait for auto-reset or do one breaker reset only | Full venting + switch diagnosis |
| Switch never closes, vacuum is normal | Failed pressure switch | None | Test and replace switch |

## Repair costs

Honest US ranges, parts and labor:

- **DIY vent-terminal clearing:** **$0 – $30**
- **Condensate drain cleaning (tech):** **$100 – $250**
- **Pressure-switch hose/tubing replacement:** **$120 – $220**
- **Pressure switch replacement:** **$150 – $350**, depending on part and access
- **Inducer motor replacement:** **$400 – $1,200**, and higher for two-stage or variable-speed inducers on condensing (90%+) furnaces
- **Diagnostic / service call:** **$90 – $180**, often credited toward the repair

A stuck-open switch is frequently a *venting or condensate* problem rather than a failed switch. Don't approve a parts swap until the tech has measured the actual vacuum.

## Related codes

If your furnace shows a different flash pattern or behaves differently, these related York pages may apply:

- York Furnace 2 Flashes: Pressure Switch Stuck Closed
- York Furnace 6 Flashes: Pressure Switch Cycle Lockout
- York Furnace Short Cycling: Causes, Diagnosis & Fixes
- York Furnace Won't Ignite: Causes, Diagnosis & Fixes
- York Furnace Leaking Water: Causes, Fixes & Costs
