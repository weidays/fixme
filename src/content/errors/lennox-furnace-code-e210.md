---
title: "Lennox Furnace Code E210: Pressure Switch Stuck Closed Fix"
code: "Code E210"
description: "Lennox Code E210 is listed as a low-pressure switch failed closed. Causes, safe checks, technician diagnosis and repair costs from $0 DIY to about $1,200."
brand: lennox
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if an inducer motor or control board is needed"
appliesTo: "Lennox SLP99V, EL296V and similar furnaces whose SureLight/integrated control shows alphanumeric E-codes on a 7-segment display; the exact code legend varies by board revision, so confirm against the board label or your installation manual."
tags:
  - lennox
  - furnace
  - pressure-switch
  - control-circuit
  - fault-code
parts: []
datePublished: 2026-09-22
dateModified: 2026-09-22
reviewedBy: ""
faq:
  - q: Can I just reset the furnace to clear Code E210?
    a: You can cycle power once to test it, but if the switch is truly stuck closed the code returns. A stuck-closed safety switch needs professional replacement, not repeated resets.
  - q: Is E210 dangerous to run with?
    a: Yes. The pressure switch proves safe venting before the burners fire. A switch stuck closed defeats that safety check, so the furnace should stay off until a technician repairs it.
  - q: Does Code E210 auto-reset?
    a: On many Lennox boards this fault clears once the switch is seen open at the correct time; if it stays stuck closed the board holds the fault. Behavior varies by board revision, so check the legend and reset notes for your control.
  - q: How much does fixing E210 usually cost?
    a: Most repairs run $150 to $350 for a new low-pressure switch plus labor. If the inducer motor or control board turns out to be the problem, the bill can reach roughly $1,200. Simple checks may cost nothing.
---

## What this code means

On Lennox furnaces that display alphanumeric alert codes, **E210 is listed as "low-pressure switch failed closed"** — the control board expected the switch contacts to be **open** at a point in the startup sequence (before the inducer motor pulls a vacuum), but found them already **closed**.

Confirm that meaning against the code legend printed on your control board or in the installation manual for your exact model before acting on it. Lennox E-code legends are not identical across SureLight generations or between communicating and non-communicating controls, so the same number can read differently from one board revision to the next.

The pressure switch is a safety device. It's supposed to confirm that the inducer (draft) motor is actually moving flue gases before the furnace lights the burners. To do that, the board first checks that the switch is open when the inducer is off, then confirms it closes once the inducer runs. If the switch reads closed when it should be open, the board can't trust it to prove venting — so it flags the fault and refuses to fire.

A switch stuck closed is a genuine safety fault, which is why this code is rated **pro**. On many Lennox SureLight boards the code will clear on its own if the switch is later seen open at the right moment, but if it stays stuck the board holds the fault until repaired. Exact reset behavior varies by board revision — check your control-board label.

## Common causes, ranked by probability

1. **Failed low-pressure switch (contacts stuck closed).** The most common cause. The internal contacts stay in the closed position and never open when the inducer is off.
2. **Condensate or debris in the switch port or hose.** Water sitting in the switch body or standing in the hose can load the diaphragm and keep the contacts made when there's no draft.
3. **Wiring short across the switch terminals.** A pinched or chafed wire that bridges the two switch terminals looks electrically identical to a stuck-closed switch.
4. **Pressure-switch tubing routed or damaged so it traps water.** A sagging, kinked, or cracked hose mainly matters here because it lets condensate collect against the switch port rather than draining away.
5. **Control board misreading the switch input.** Least common — a fault on the board's pressure-switch circuit can report the switch as closed when it isn't.

## Safe checks before you call anyone

These are the only steps a homeowner should do. Everything inside the cabinet is technician work.

- **Check the thermostat.** Make sure it's set to Heat and the setpoint is above room temperature. Replace the batteries if it uses them.
- **Replace a dirty air filter.** A heavily clogged filter can disturb airflow and pressures. Swap it for a clean one of the correct size.
- **Check the breaker.** Confirm the furnace breaker is on. You may reset it once if it has tripped.
- **Try one power cycle.** Turn the furnace switch off, wait 30 seconds, and turn it back on — **once**. Do not repeatedly reset a locked-out unit.
- **Inspect visible vents and registers.** Make sure supply and return grilles aren't blocked by furniture or rugs.
- **Check the condensate drain.** On high-efficiency units, a backed-up condensate line can leave water where it doesn't belong. If you can see standing water in the drain pan or a clogged trap you can reach, clear the visible blockage.

If the code returns after one power cycle, stop and call a licensed HVAC technician.

## How a technician will diagnose it

Knowing the pro's process helps you sanity-check any quote:

1. **Read the fault history** on the control board to confirm the code and see how often it's recurred, checking it against the board's printed legend.
2. **Meter the pressure switch across its terminals** with the inducer off — the contacts should read open. If they read closed with no vacuum applied, the switch is bad.
3. **Inspect the switch port and tubing** for condensate, cracks, sags that trap water, pinches, or blockage.
4. **Check the wiring harness** on the pressure-switch circuit for shorts, chafing, or pinched conductors.
5. **Measure inducer draft/pressure** with a manometer to confirm the switch is being asked to respond to correct conditions.
6. **Test the board's switch input** if the switch, tubing, and wiring all check out, to rule out a board fault.

A good technician replaces the switch only after confirming it's actually stuck — not just because the code appeared.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Code at every startup, no heat | Pressure switch stuck closed | One power cycle; if it returns, call a pro | Meter switch, replace if contacts won't open |
| Code with water near the switch/inducer | Condensate holding the diaphragm closed | Clear visible condensate line clog | Clear switch port and hose, fix drainage |
| Code with signs of chafed wiring | Short across switch terminals | None safe inside cabinet | Repair/replace wiring harness |
| Intermittent code, hose sagging or cracked | Tubing trapping condensate at the switch port | None safe inside cabinet | Re-route or replace pressure-switch hose |
| Code persists after switch replaced | Board misreading input | None | Test switch input, replace control board |

## Repair costs

Honest US ranges including parts and labor:

- **Nothing — DIY checks resolve it:** $0 (rare for this code, since it's a safety switch fault)
- **Low-pressure switch replacement:** $150 – $300
- **Pressure-switch tubing/hose replacement:** $90 – $180
- **Wiring harness repair:** $120 – $250
- **Inducer motor (if draft is out of spec):** $400 – $1,200, depending on motor type and how accessible it is
- **SureLight control board (last resort):** $400 – $700

Most of these calls end with a new pressure switch in the $150–$350 range. A diagnostic/service call fee of $80–$150 is common and often applied toward the repair.

## Related codes

Lennox alert-code numbering varies between control generations, so don't assume a neighboring number means what it does on another furnace. Use the legend printed on your control board — or the code table in your model's installation manual — to look up anything else the display shows.

- **Code E125:** appears on some Lennox controls as a control/hardware fault. If your board's legend lists it that way, it's worth noting when the pressure-switch input itself is suspected of misreading. Verify the wording on your board label before treating it as a board failure.
- **Any code that appears alongside this one:** write down the exact characters shown, then match them to the board legend. Bring that list to your technician — a second code often points to the real root cause.
