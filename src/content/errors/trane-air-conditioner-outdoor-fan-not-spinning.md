---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a failed capacitor, motor, or contactor. Safe checks plus repair costs from $0 DIY to $600+."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $600+ if the fan motor needs replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series) using single-phase PSC fan motors; ECM/variable-speed XV20i units differ and store fault codes on the control board."
tags:
  - trane
  - air-conditioner
  - condenser-fan
  - capacitor
  - contactor
parts:
  - name: "Dual run capacitor (match microfarad rating)"
    search: "dual run capacitor 45/5 mfd 440v"
  - name: "Condenser fan motor (match HP/RPM/voltage)"
    search: "condenser fan motor 1/4 hp 825 rpm 208-230v"
  - name: "Contactor 30A 24V coil"
    search: "ac condenser contactor 30 amp 24 volt"
datePublished: 2026-07-30
dateModified: 2026-07-30
reviewedBy: ""
faq:
  - q: "Can I spin the outdoor fan by hand to start it?"
    a: "Only briefly to test a suspected bad capacitor. If it keeps running after a nudge, the capacitor is likely weak. But a fan needing a push every time still needs a real repair — don't rely on it, as it can overheat the motor and compressor."
  - q: "Why is the compressor running but the outdoor fan isn't?"
    a: "This usually points to a failed run capacitor or a seized fan motor. Running the compressor without the fan blows hot air over the coil and can trip the high-pressure switch or damage the compressor, so shut the system off."
  - q: "Is it safe to keep running my AC if the outdoor fan won't spin?"
    a: "No. The condenser fan removes heat from the refrigerant. Without it, pressures spike and the compressor can overheat or fail — a repair far costlier than a capacitor. Turn the system off at the thermostat until it's fixed."
---

## What this code means

"Outdoor fan not spinning" isn't a blink code on most Trane condensers — it's a symptom you observe: the large fan on top of your outdoor unit (the condenser) doesn't turn even though the system is calling for cooling. On older single-stage Trane units (XR, XL series) there's no diagnostic display, so you diagnose by observation. On variable-speed units like the XV18/XV20i, the outdoor control board can store a related fault (motor, communication, or high-pressure) that a technician reads with Trane's service tools.

The outdoor fan's job is to pull air across the condenser coil to shed the heat your AC pulled from inside. When it stops, refrigerant pressure climbs fast, and the compressor can overheat or trip on its internal protector. **Shut the system off until it's diagnosed** — running it this way risks a compressor failure that costs many times more than the actual repair.

## Common causes, ranked by probability

1. **Failed run capacitor** — By far the most common cause. The capacitor gives the fan motor the jolt it needs to start spinning. When it weakens or fails, the fan hums or sits still while the compressor may keep running.
2. **Seized or burned-out fan motor** — Bearings fail, windings burn out. The motor may be hot to the touch or smell burnt.
3. **Failed contactor** — The relay that sends power to the outdoor unit can have pitted or stuck contacts, cutting power to the fan (and often the compressor too).
4. **Debris or ice blocking the blade** — Sticks, a bird nest, or a bent blade physically jams the fan.
5. **Tripped internal overload / high-pressure switch** — On some units, protective switches cut the fan circuit after a fault.
6. **Control board or motor fault (variable-speed units)** — On XV-series units with ECM outdoor motors, the board or motor module can fault and log a code.
7. **Loss of 24V control signal or wiring fault** — A broken low-voltage wire, tripped float switch, or thermostat issue.

## Safe checks before you call anyone

These are the only checks a homeowner should do — no touching capacitors, wiring, or refrigerant:

- **Thermostat:** Set it to Cool and lower the setpoint several degrees below room temperature. Confirm the system is actually calling for cooling.
- **Breakers:** Check both the indoor air-handler/furnace breaker and the outdoor condenser breaker (and the disconnect box by the outdoor unit). Reset a tripped breaker **once**. If it trips again, stop and call a pro.
- **Air filter:** A clogged filter can cause the whole system to struggle or shut down. Replace if dirty.
- **Indoor vents & registers:** Make sure supply and return vents are open and unblocked.
- **Condensate:** If you have a float switch on the drain line and the pan is full, a clog can shut the system down. Clear standing water and check the drain line.
- **Visible obstructions:** Look (don't reach in) for leaves, sticks, or debris in the fan blades. Turn the unit off at the breaker before clearing anything, and never stick fingers or tools near the blade with power on.

If the fan still won't spin after these, it's a pro job. Do **not** repeatedly cycle the breaker to force it to run.

## How a technician will diagnose it

Knowing the steps helps you sanity-check a quote:

1. **Verify the call for cooling** and confirm 24V is reaching the outdoor contactor.
2. **Test the run capacitor** with a meter for microfarad value against its rated spec — a weak or dead cap is the number-one find.
3. **Check the contactor** for pitted contacts and proper pull-in.
4. **Test the fan motor** — spin it by hand for bearing drag, check windings for continuity/shorts, and measure amp draw.
5. **Inspect wiring and the overload/high-pressure switch** for open circuits.
6. **On variable-speed units**, connect Trane service tools to pull the outdoor board's stored fault codes and check the ECM motor module.

A good tech will show you the failed part's reading (e.g., a capacitor reading 20 mfd when rated 45). Be cautious of a "replace the whole motor" quote before the capacitor was even tested.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan silent, compressor humming | Failed run capacitor | Turn system off; don't force-start repeatedly | Test & replace capacitor |
| Fan starts if nudged with a stick | Weak capacitor | Shut off; note the behavior for the tech | Replace capacitor, verify amp draw |
| Fan and compressor both dead | Bad contactor or no 24V | Check breakers/disconnect once | Test contactor, low-voltage circuit |
| Fan hums, motor hot/burnt smell | Seized/burned fan motor | Shut off immediately | Replace fan motor & capacitor |
| Blade physically jammed | Debris or bent blade | Kill power, clear visible debris | Straighten/replace blade, inspect motor |
| Trips breaker when it tries to run | Shorted motor or wiring | Don't keep resetting | Diagnose short, replace component |
| XV-series board shows a fault | Board/ECM motor fault | Note the code | Read code with Trane tools, replace module |

## Repair costs

Honest US ranges, parts plus labor (varies by region and unit):

- **Run capacitor:** $150–$350. The part is cheap ($15–$40); most of the cost is the service call and diagnosis.
- **Contactor:** $150–$400.
- **Condenser fan motor (PSC):** $350–$650, including a new capacitor.
- **ECM/variable-speed motor or module (XV-series):** $600–$1,200+ — these are specialized parts.
- **Fan blade replacement:** $150–$300.
- **Diagnostic/service call alone:** $75–$200, often credited toward the repair.

A capable, well-informed DIYer can replace a capacitor for the cost of the part — but capacitors store a dangerous charge and must be safely discharged first. If you're not trained and equipped for that, leave it to a pro.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — if the fan spins but you're still getting no cool air, start there.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for furnace-side (heating) diagnostics on your Trane system.
