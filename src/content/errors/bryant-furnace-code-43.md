---
title: "Bryant Furnace Code 43: Pressure Switch Calibration Fixes"
code: "Code 43"
description: "Bryant Furnace Code 43 means a pressure switch calibration fault. Causes, safe checks, fixes and repair costs from $0 DIY to about $1,200."
brand: bryant
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200 if the variable-speed inducer or control board needs replacement"
appliesTo: "Bryant variable-speed condensing furnaces (90%+ AFUE) with modulating or two-stage control boards that self-calibrate the inducer against the low-pressure switch. Two-digit status codes are read from the LED or display on the control board and mean whatever the diagnostic legend printed on the inside of your blower door says they mean — the legend varies by board. Do not assume a 43 on a non-variable-speed board is a calibration fault; look it up on your own legend first."
tags:
  - pressure-switch
  - calibration
  - inducer
  - venting
  - condensing-furnace
parts: []
datePublished: 2026-09-20
dateModified: 2026-09-20
reviewedBy: ""
faq:
  - q: Is Bryant Code 43 dangerous?
    a: It is not an immediate hazard, but the furnace will not run reliably. The board is refusing to fire because it cannot confirm safe venting, which is a protective response you should not bypass. That answer changes if the furnace is also producing a burning smell, soot, or a gas odor — in that case shut the furnace off, leave the gas valve alone, and call your gas utility or 911 from outside before calling for service.
  - q: Can I clear Code 43 myself?
    a: You can try one power cycle at the breaker after checking the filter, vents and condensate line. If the code returns, it needs a technician to test the switch and inducer — do not keep resetting it.
  - q: Does Code 43 reset on its own?
    a: On most variable-speed boards Code 43 retries the calibration several times, then holds until power is cycled. Behavior varies by board revision, so confirm with the legend on your blower door.
  - q: Why does calibration fail on a cold morning but not later?
    a: Condensate freezing or pooling in the vent or trap, plus high wind over the termination, can change the pressure the switch sees. Temperature-linked faults point to venting or the condensate trap.
---

## What this code means

Bryant Code 43 is a **pressure switch calibration fault**. On variable-speed condensing furnaces, the control board doesn't just check that the low-pressure switch is open before startup and closed once the inducer runs — it actively *calibrates* the inducer motor speed against the point where that switch changes state.

During this routine the board ramps the inducer and watches for the switch to open and close at the expected speeds. If the switch changes state at the **wrong inducer speed** — too early, too late, or not at all — the board logs Code 43 and refuses to proceed to ignition.

This almost always points to a **venting, tubing, or pressure-switch** problem rather than a gas or ignition fault. The board is telling you it can't trust the draft measurement, so it protects you by not firing.

On most affected boards, Code 43 will retry calibration a few times and then **hold in a soft lockout until power is cycled**. Exact retry counts and reset behavior vary by board revision — check the diagnostic legend printed inside your blower compartment door.

## Common causes, ranked by probability

1. **Blocked, sagging, or restricted vent/intake piping** — the most common trigger. Sagging PVC, water traps in the pipe, ice at the termination, insect screens plugged with debris, or a partly obstructed intake all change the pressure the switch sees.
2. **Cracked, loose, kinked, or water-filled pressure switch tubing** — the small hose between the switch and the inducer/collector box. If it's soft, split, or holding condensate, the switch reads wrong.
3. **Clogged or frozen condensate trap or drain** — backed-up condensate raises pressure in the collector box and shifts the switch trip point, a classic cause of intermittent Code 43 in cold weather.
4. **Failing or out-of-spec low-pressure switch** — the switch trips at the wrong pressure or sticks, so it never matches the inducer speed the board expects.
5. **Inducer motor drawing off-speed** — a variable-speed inducer that has drifted from its commanded RPM (worn bearings, debris on the wheel) fails calibration even with good venting.
6. **Wrong parts or altered venting after a repair or install** — an incorrectly sized inducer, non-spec pressure switch, or added elbows/length beyond the vent tables can prevent calibration from ever succeeding.

## Safe checks before you call anyone

These are the only steps a homeowner should do. Everything else is inside the cabinet and is technician work.

- **Check and replace a dirty air filter.** Severe airflow restriction can knock the whole draft system out of its expected range.
- **Confirm the thermostat is set to Heat** and calling for heat above room temperature; replace thermostat batteries if it's battery-powered.
- **Look at the vent and intake terminations outside.** Clear away snow, ice, leaves, nests, or lawn debris. Make sure nothing (mulch, a snowbank, a dryer vent) is blowing at the pipes.
- **Check the condensate drain.** If you see standing water near the furnace or a full condensate pan, the drain may be clogged — this directly affects Code 43.
- **Make sure the blower door / access panels are fully seated.** A panel that isn't latched can disturb pressures the board relies on.
- **Try ONE reset** at the furnace switch or breaker after the above. Leave it off ~30 seconds, then back on.

If Code 43 returns after one reset, stop and call a technician. Repeated resets won't fix a calibration fault and can mask a venting problem.

## How a technician will diagnose it

A qualified tech will typically:

- Read stored fault history from the board and confirm it's Code 43, not a neighboring pressure code.
- Inspect the full vent and intake run for slope, sags, water traps, and correct length per Bryant's vent tables.
- Disconnect and inspect the pressure switch tubing for cracks, condensate, and secure fit.
- Put a **manometer** on the pressure switch ports and measure actual draft pressure against Bryant's spec while the inducer ramps.
- Verify the **inducer's commanded vs. actual speed** and check the wheel/bearings.
- Test the **low-pressure switch** trip and reset points electrically against the rating stamped on it.
- Check and clear the **condensate trap and collector box**.
- Confirm the switch and inducer are the correct OEM parts for the model.

Sanity check on a quote: a good diagnosis leads with venting, tubing, and the condensate trap before condemning the switch or inducer. Jumping straight to a new board without measuring draft pressure is a red flag.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Code 43, worse in cold/windy weather | Ice or blockage at vent/intake termination | Clear snow/ice/debris from outside pipes | Re-slope vent, remove water traps, add termination protection |
| Code 43 with water near furnace | Clogged condensate trap/drain | Check for standing water; confirm nothing obvious spilling | Clear and flush trap, collector box, and drain line |
| Intermittent Code 43, no ignition | Cracked or condensate-filled switch tubing | None inside cabinet | Inspect and replace pressure switch hose |
| Code 43 every cycle, venting looks clear | Out-of-spec pressure switch | None — already reset once | Manometer test switch, replace if off-spec |
| Code 43 with noisy or weak inducer | Inducer drawing off-speed | None inside cabinet | Test inducer RPM, replace motor/wheel if needed |
| Code 43 right after a recent install/repair | Wrong part or altered venting | Verify panels seated | Confirm OEM switch/inducer and vent length per tables |

## Repair costs

Ranges are typical US pricing including labor; your area and furnace age will vary.

- **DIY safe checks (filter, vents, condensate, one reset):** $0–$40
- **Diagnostic / service call:** $90–$180
- **Clear condensate trap & drain line:** $100–$250
- **Replace pressure switch tubing/hose:** $120–$250
- **Replace low-pressure switch (OEM):** $150–$350
- **Vent/intake correction (re-slope, remove sags, add screen):** $150–$500+
- **Replace variable-speed inducer assembly:** $500–$1,200 — OEM inducer assemblies for variable-speed condensing furnaces are expensive parts on their own before labor, so quotes at the top of this range are not automatically inflated
- **Control board (rare for this code):** $400–$1,200 on a modulating or variable-speed board

Because Code 43 is usually venting, tubing, or the switch, most repairs land in the low-to-mid hundreds — a full inducer or board replacement is the exception, not the rule, but when it is needed it is genuinely a four-figure job on this class of furnace.

## Related codes

Meanings for two-digit Bryant status codes differ between control boards, especially in the 41–45 band, where the same number can point to a blower motor fault, an inducer or motor fault, or a control-circuitry lockout depending on the board. Always read the number off the diagnostic legend on your own blower door rather than assuming it matches another furnace.

- **Code 31 — Bryant Furnace Code 31: Meaning, Causes & Fixes** — general pressure switch / draft fault on many boards.
- **Code 32 — Bryant Furnace Code 32: Low-Pressure Switch Fault Fixes** — low-pressure switch didn't close or open as expected.
- **Code 33 — Bryant Furnace Code 33: Meaning, Causes & Fixes** — related draft/limit switch faults.
- **Code 42 — Bryant Furnace Code 42: Meaning, Causes & Fixes** — check your board legend for the exact definition.
- **Code 44 — Bryant Furnace Code 44: Meaning, Causes & Fixes** — check your board legend for the exact definition.
