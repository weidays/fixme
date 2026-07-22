---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Causes include a failed capacitor, motor, or contactor. Learn safe checks, diagnosis, and repair costs ($0–$650)."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor is replaced"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series and older 2/4TTB/TTR units). Variable-speed XV20i/XV18 boards report faults differently than single-stage units."
tags:
  - trane
  - air-conditioner
  - outdoor-unit
  - condenser-fan
  - capacitor
parts:
  - name: Dual run capacitor
    search: trane dual run capacitor 45+5 uf 440v
  - name: Condenser fan motor
    search: 1/4 hp condenser fan motor 208-230v
  - name: Fan blade
    search: universal condenser fan blade replacement
  - name: Contactor
    search: 2 pole 30 amp hvac contactor 24v coil
datePublished: 2026-07-22
dateModified: 2026-07-22
reviewedBy: ""
faq:
  - q: Can I run my Trane AC if the outdoor fan won't spin?
    a: No. Running the compressor without the condenser fan lets pressures and temperatures climb fast, which can overheat and permanently damage the compressor. Shut the system off at the thermostat.
  - q: Why does my Trane fan spin if I push it with a stick?
    a: If the fan only runs after you nudge the blade, the run capacitor has almost certainly failed. It no longer provides the starting torque the motor needs. This is a common, well-documented failure.
  - q: Is a stuck outdoor fan dangerous to fix myself?
    a: The capacitor stores a lethal charge even with power off, and 240V is present at the disconnect. Safe DIY is limited to filter, thermostat, and breaker checks. Capacitor and motor work is a pro job.
  - q: How much does it cost to fix a Trane condenser fan?
    a: A capacitor runs about $150–$350 installed, a contactor $150–$300, and a full fan motor $400–$650. A tripped breaker or dirty filter may cost nothing beyond a service call.
---

## What this code means

"Outdoor fan not spinning" isn't a blinking fault code on most Trane systems — it's a physical symptom you can see and hear. The outdoor unit (the condenser) has a large fan on top that pulls air across the coil to reject heat. When the compressor runs but that fan sits still, the system can't shed heat and will quickly overheat.

On single-stage Trane units (XR13, XR14, older 2TTB/4TTR series) there is usually no diagnostic display for this — the fan just doesn't turn. On communicating variable-speed models (XV18, XV20i) the outdoor board may log a fan or motor fault that shows in the thermostat's alerts menu, but the wording varies by board revision, so don't rely on a specific code number.

**Turn the system off at the thermostat now.** Letting the compressor run without the fan is the fastest way to kill the compressor — the single most expensive part in the system.

## Common causes, ranked by probability

1. **Failed run capacitor.** The most common cause by far. The dual run capacitor gives the fan motor the torque it needs to start spinning. When it weakens, the fan hums but won't turn, or only spins if pushed.
2. **Burned or stuck contactor.** The contactor is the relay that sends power to the fan and compressor. Pitted or welded contacts can starve the fan of voltage.
3. **Failed condenser fan motor.** Worn bearings, an open winding, or a tripped internal overload will stop the motor even with a good capacitor.
4. **Seized fan bearings or obstruction.** Debris, ice, or a bent blade can physically jam the fan.
5. **Tripped breaker or blown disconnect fuse.** Loss of power to the outdoor unit stops the fan (and usually the compressor too).
6. **Control board or wiring fault (variable-speed models).** On XV18/XV20i units, a failed outdoor module or a loose low-voltage connection can prevent the fan from being commanded on.
7. **High-pressure or thermal lockout.** Some units cut outdoor operation after a fault; repeated resets are not recommended.

## Safe checks before you call anyone

These are the only steps a homeowner should do. Anything involving the capacitor, motor, or 240V wiring is a pro job.

- **Thermostat:** Confirm it's set to COOL and the setpoint is below room temperature. Replace batteries if it's a battery-powered model.
- **Air filter:** A clogged indoor filter can cause pressure and airflow faults that affect outdoor operation. Replace if dirty.
- **Breaker:** Check your electrical panel for a tripped AC breaker. Reset it once. If it trips again, stop — that's an electrical fault for a technician.
- **Visible vents and coil:** Make sure return and supply vents inside aren't blocked. Outside, look for leaves, grass, or debris packed against the condenser.
- **Ice:** If the outdoor coil or fan is iced over, turn the system off and let it thaw. Persistent icing points to a refrigerant or airflow problem.
- **Condensate:** A full condensate drain or tripped float switch can shut the system down; check for standing water at the indoor unit.

Do **not** open the outdoor unit's electrical panel or spin the fan by hand with power on.

## How a technician will diagnose it

A good tech follows a logical path — this helps you sanity-check a quote:

1. **Confirms power** at the disconnect and breaker with a meter (should read ~240V).
2. **Tests the run capacitor** with a capacitance meter against its rated microfarad (µF) value. A reading well below spec means replacement.
3. **Inspects the contactor** for pitting and verifies it pulls in and passes voltage to the fan.
4. **Checks the fan motor** — measures winding resistance, spins the blade for bearing drag, and confirms it gets voltage but won't run.
5. **On variable-speed units,** reads fault history from the outdoor module and checks communication wiring.
6. **Verifies system pressures** with gauges to rule out a high-pressure lockout that stopped the fan.

If the tech replaces a motor without ever testing the capacitor, ask why — the capacitor is cheaper and fails far more often.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan hums but won't turn | Failed run capacitor | Turn off system; don't force blade | Test and replace capacitor |
| Fan spins only when pushed by hand | Weak/failed capacitor | Shut down to protect compressor | Replace capacitor |
| No fan, no compressor, no hum | No power / tripped breaker | Reset breaker once | Diagnose electrical fault, contactor, wiring |
| Fan runs briefly then stops | Motor overload or bad bearings | Turn off, let cool | Test motor, replace if failed |
| Fan blade jammed by debris/ice | Obstruction | Remove visible debris with power off | Clear obstruction, inspect blade |
| Buzzing at contactor, weak fan | Pitted contactor | None | Replace contactor |
| Fan fault in thermostat alerts (XV models) | Board/module or wiring | Note the alert text | Read fault codes, test module |

## Repair costs

Honest US ranges, parts and labor included. Prices vary by region and dealer.

- **Service/diagnostic call:** $75–$200 (often credited toward the repair).
- **Dual run capacitor:** $150–$350 installed. Cheapest common fix.
- **Contactor:** $150–$300 installed.
- **Condenser fan motor:** $400–$650 installed. Universal motors cost less; genuine Trane-spec motors cost more.
- **Fan blade:** $80–$200 if bent or cracked.
- **Outdoor control module (variable-speed XV models):** $400–$900+; often quoted as part of a larger repair.
- **Nothing:** $0 if it's a tripped breaker or debris you cleared, aside from any service fee.

If your unit is old and needs a motor *and* other parts, get a second opinion before spending money on a system near the end of its life.

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — broader cooling failures where the outdoor fan may be one of several culprits.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — related Trane control diagnostics on the heating side.
