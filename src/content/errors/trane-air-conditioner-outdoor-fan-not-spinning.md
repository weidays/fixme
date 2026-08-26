---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane AC outdoor fan won't spin? Causes from failed capacitors to bad motors, safe checks, and repair costs from $0 DIY to $700."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $700 for a condenser fan motor replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series and older 2TTx/4TTx models); behavior varies between single-stage PSC-motor units and variable-speed ECM models."
tags:
  - trane
  - air-conditioner
  - outdoor-fan
  - capacitor
  - condenser
parts:
  - name: "Dual run capacitor (match microfarad rating)"
    search: "trane dual run capacitor 40+5 uf 440v"
  - name: "Condenser fan motor"
    search: "condenser fan motor 1/4 hp 208-230v replacement"
  - name: "Fan motor run capacitor"
    search: "5 uf 440v round run capacitor"
  - name: "Contactor (24V coil, 30-40 amp)"
    search: "ac condenser contactor 30 amp 24v coil"
datePublished: 2026-08-26
dateModified: 2026-08-26
reviewedBy: ""
faq:
  - q: "Why is my Trane outdoor fan not spinning but the compressor runs?"
    a: "A humming outdoor unit where the compressor runs but the fan sits still almost always points to a failed run capacitor or a seized fan motor. Shut the unit off promptly to avoid a compressor overheat lockout."
  - q: "Can I push the outdoor fan to start it with a stick?"
    a: "If the fan spins freely after a nudge, that confirms a weak or dead capacitor, not a bad motor. It is a diagnostic clue only, not a fix, and running it that way can overheat the compressor. Have the capacitor replaced."
  - q: "Is a stuck outdoor fan an emergency?"
    a: "It is not a safety emergency, but you should turn the system off. Running the compressor without condenser airflow can cause overheating, a high-pressure trip, or permanent compressor damage within minutes."
  - q: "How much does it cost to fix a Trane condenser fan that won't spin?"
    a: "A capacitor runs $150-$350 installed, a contactor $150-$300, and a full condenser fan motor $300-$700. A DIY capacitor swap costs $20-$60 in parts if you are comfortable and the power is off."
---

## What this code means

"Outdoor fan not spinning" is not a blink-code — it's a physical symptom on your Trane condenser (the outdoor unit). The fan on top of the condenser pulls air across the coil to reject heat that the compressor pumps outside. When that fan stops but the compressor keeps running, the system can't shed heat, pressures climb fast, and the unit will either trip a safety or damage the compressor.

On most Trane split systems this is triggered by an electrical fault — a dead capacitor, a failed motor, or a bad contactor — rather than a control-board code. Some variable-speed Trane models (XV series with ECM outdoor motors) may log a fault at the thermostat or board instead, so check there too.

Because a running compressor with no condenser airflow can destroy an expensive component, this is rated **pro**: do the safe checks below, then call a licensed HVAC tech.

## Common causes, ranked by probability

1. **Failed run capacitor** — By far the most common. The capacitor gives the fan motor its starting torque. When it weakens or fails, the fan won't start (often with a hum) but will spin if nudged. Many Trane units use a *dual* capacitor serving both fan and compressor.
2. **Seized or burned-out condenser fan motor** — Worn bearings, water intrusion, or an internal winding failure. The fan won't spin even with a good capacitor and won't turn freely by hand.
3. **Bad contactor** — The contactor is the relay that sends power to the outdoor unit. Pitted or stuck contacts can leave the fan (and sometimes compressor) without power.
4. **Tripped breaker or blown fuse / disconnect** — Loss of 240V to the condenser. Sometimes only part of the circuit is affected.
5. **Debris jamming the fan blade** — Leaves, a stick, or ice locking the blade.
6. **Failed 24V control / low-voltage fault** — A blown transformer fuse or wiring fault means the contactor never pulls in.
7. **ECM motor or module failure (variable-speed models)** — On XV-series units the outdoor motor is electronically controlled; a module or communication fault can stop it.

## Safe checks before you call anyone

Do only these. Anything involving capacitors, wiring, or refrigerant is for a technician.

- **Turn the system OFF first.** If the compressor is running with the fan stopped, set the thermostat to Off to prevent compressor damage.
- **Thermostat:** Confirm it's set to Cool and below room temperature. Replace batteries if it's a battery model and the screen is dim.
- **Air filter & indoor vents:** A clogged filter or closed vents won't stop the outdoor fan, but rule them out since they cause similar "not cooling" complaints.
- **Breaker:** Check both the indoor and outdoor breakers in your panel. Flip a tripped breaker fully off, then on — **once only**. If it trips again, stop and call a pro.
- **Outdoor disconnect:** The pull-box near the condenser may have a blown fuse or a pulled disconnect. Only reseat it if it's obviously loose; don't handle it if anything looks scorched.
- **Look for obvious obstructions:** With power OFF at the disconnect, look through the top grille for leaves or a stick jamming the blade. Do not reach in.
- **Condensate:** Not related to the outdoor fan, but a full drain pan can shut the indoor system down separately.

If the fan still won't spin after the breaker and obstruction checks, it's a component failure — call a licensed tech.

## How a technician will diagnose it

Knowing the sequence helps you sanity-check a quote:

1. **Verify power** at the disconnect and contactor with a meter — confirming 240V is reaching the unit.
2. **Test the capacitor** with a capacitance meter, comparing the reading to the microfarad rating stamped on it. A reading well below spec confirms a bad cap.
3. **Check the contactor** for pitted contacts and confirm the 24V coil pulls it in when there's a call for cooling.
4. **Test the fan motor** — checking windings for continuity/shorts and spinning the blade by hand to feel for seized bearings.
5. **Confirm the 24V circuit** and transformer fuse if nothing energizes.
6. **On variable-speed (XV) units,** pull fault codes from the board/thermostat and test the ECM module per Trane's service literature.

A capacitor test takes minutes and is cheap; a good tech won't quote a full motor replacement without first ruling out the capacitor and contactor.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan won't start; spins if nudged | Failed run capacitor | Turn unit off; note humming | Test & replace capacitor |
| Fan and compressor both dead, no hum | Contactor, breaker, or disconnect fuse | Reset breaker once; check disconnect | Test contactor, replace if pitted |
| Fan won't turn by hand, no hum | Seized/burned-out fan motor | Turn unit off | Test windings, replace motor |
| Blade visibly jammed by debris | Obstruction | Power off, remove visible debris | Inspect blade & bearings |
| Nothing energizes, indoor blower works | Blown outdoor breaker/fuse or 24V fault | Check breaker & disconnect | Trace low-voltage, transformer fuse |
| XV unit: fault/error at thermostat | ECM module or comms fault | Note the code | Pull codes, test ECM per Trane docs |

## Repair costs

Honest US ranges, parts + labor unless noted:

- **Run / dual capacitor:** $150–$350 installed ($20–$60 DIY part if you're qualified and power is off).
- **Contactor:** $150–$300 installed.
- **Condenser fan motor:** $300–$700 installed, depending on horsepower and whether the blade needs replacing too.
- **Fan blade:** $75–$200 if bent or cracked.
- **Breaker or disconnect fuse:** $80–$200.
- **Low-voltage transformer / control fuse:** $150–$300.
- **ECM motor or module (variable-speed XV units):** $500–$1,200 — these are far more expensive than a PSC motor.
- **Diagnostic / service call:** $75–$200, often credited toward the repair.

Prices vary by region and unit age. If your condenser is over 12–15 years old and needs a motor plus other parts, ask whether replacement makes more sense.

⚠️ **Warning:** Capacitors store a dangerous charge even with power off. If you're not trained to safely discharge and test one, leave capacitor and wiring work to a technician.

## Related codes

- **Not cooling** — *Trane AC Not Cooling: Causes, Fixes & Repair Costs*. A stopped outdoor fan is one cause of no cooling; that page covers airflow, refrigerant, and thermostat issues too.
- **Code 90 (2 blinks)** — *Trane Furnace Code 90 (2 Blinks): Causes & Costs*. Furnace-side control fault, unrelated to the outdoor unit but useful if your system is acting up in heating mode.
