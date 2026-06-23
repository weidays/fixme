---
title: "Trane AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Trane outdoor fan not spinning? Common causes are a failed capacitor, motor, or contactor. DIY checks plus repair costs from $0 to $700."
brand: trane
equipment: air-conditioner
severity: pro
costRange: "$0 DIY – $700 if the condenser fan motor needs replacement"
appliesTo: "Most Trane split-system condensers (XR, XL, XV series and older 2TT/4TT units). Single-stage and two-stage units share the same fan-motor, capacitor and contactor design; variable-speed XV20i uses an ECM fan that fails differently."
tags:
  - trane
  - air-conditioner
  - condenser-fan
  - capacitor
  - no-cooling
parts:
  - name: Dual run capacitor (motor + compressor)
    search: trane dual run capacitor 45+5 uf 440v
  - name: Condenser fan motor
    search: condenser fan motor 1/4 hp 1075 rpm trane
  - name: Contactor (24V coil)
    search: ac condenser contactor 30 amp 24v coil
  - name: Fan motor capacitor (single round)
    search: round run capacitor 5 uf 440v ac
datePublished: 2026-06-23
dateModified: 2026-06-23
reviewedBy: ""
faq:
  - q: Why is my Trane outdoor fan not spinning but the compressor is humming?
    a: That hum usually means the outdoor unit has power but the fan motor or its capacitor has failed. A dead run capacitor is the most common cause and is a low-cost part, but the work belongs to a pro because of high voltage at the contactor.
  - q: Can I push the outdoor fan with a stick to start it?
    a: Don't. If it spins when nudged, the capacitor is likely weak, but running the unit this way overheats the compressor and can destroy it. Shut the system off at the thermostat and call a technician for a proper diagnosis.
  - q: Is it safe to keep my Trane AC running if the outdoor fan won't spin?
    a: No. Without the fan, the condenser cannot reject heat, pressures spike, and the compressor can overheat and fail — a far more expensive repair. Turn the system off at the thermostat until it is fixed.
  - q: How much does a Trane condenser fan motor cost to replace?
    a: Expect roughly $300 to $700 installed, depending on the motor type and your region. A bad capacitor causing the same symptom is far cheaper, often $150 to $300 with labor.
---

## What this code means

"Outdoor fan not spinning" is a symptom, not a stored fault code — most Trane condensers don't flash a specific blink code for it. The fan on top of your outdoor unit (the condenser) is supposed to spin whenever the compressor runs. It pulls air across the coil to dump the heat your AC removed from the house.

When that fan stops, the system can no longer reject heat. Indoor air may blow warm, the outdoor unit can run hot and loud, and high-pressure or thermal protections may shut the compressor down. Because the most common fixes involve high-voltage capacitors and the contactor, this is rated a **pro** repair.

If you also have no cooling at all, see the related **Trane AC Not Cooling** page below.

## Common causes, ranked by probability

1. **Failed run capacitor** — The dual or single round capacitor that gives the fan motor its starting torque is the #1 culprit. Symptom: compressor hums but fan sits still, or fan starts only when nudged.
2. **Bad condenser fan motor** — Worn bearings, a burned winding, or a failed internal overload. Often preceded by humming, grinding, or a hot-smelling unit.
3. **Failed contactor** — The relay that sends 24V-triggered high voltage to the outdoor unit. Pitted or stuck contacts can cut power to the fan.
4. **Tripped breaker or blown fuse / disconnect** — Sometimes only part of the outdoor power is lost, or a low-voltage fuse on the control board is blown.
5. **Obstruction** — Debris, ice, or a fallen branch physically jamming the fan blade.
6. **Control board or low-voltage problem** — No 24V "call" reaching the contactor (thermostat, wiring, or board fault).
7. **ECM fan fault (variable-speed XV models)** — On units like the XV20i the fan is an electronically commutated motor; failures show as a module fault rather than a dead capacitor.

## Safe checks before you call anyone

You can do these without opening any high-voltage panels:

- **Thermostat:** Confirm it's set to COOL and the temperature is below room temp so it's actually calling for cooling.
- **Air filter:** A badly clogged filter can cause freeze-ups and protective shutdowns. Replace it if dirty.
- **Breaker:** Check your electrical panel for a tripped AC breaker. Reset it **once**. If it trips again, stop and call a pro — never repeatedly reset.
- **Outdoor disconnect:** The pull-out box near the condenser should be fully seated. Don't open the unit's electrical cover.
- **Visible obstruction:** Look down into the fan grille from above. With the system **off at the thermostat and breaker**, clear leaves, branches, or debris you can reach by hand.
- **Ice:** If the outdoor unit or refrigerant lines are iced up, turn the system off and let it thaw before running again.
- **Condensate / vents:** Make sure indoor supply and return vents aren't blocked, which can contribute to freeze-related shutdowns.

Do **not** open the condenser's electrical access panel, touch the capacitor, or hand-start the fan. Capacitors hold a dangerous charge even with power off.

## How a technician will diagnose it

A good tech follows a logical sequence — use this to sanity-check a quote:

1. **Verify the call:** Confirms 24V is reaching the contactor when the thermostat calls for cooling.
2. **Check incoming power:** Measures line voltage at the disconnect and contactor.
3. **Inspect the contactor:** Looks for pitting, welding, or a chattering coil; verifies it's pulling in.
4. **Test the capacitor:** Discharges it safely, then measures microfarads (µF) against the rating printed on the can. Out-of-spec = replace.
5. **Test the fan motor:** Checks windings for continuity/shorts, spins it by hand for bearing drag, and confirms the internal overload.
6. **ECM/variable-speed units:** Reads module fault data with Trane diagnostics rather than testing a capacitor.
7. **Confirm the fix:** Restarts the unit and verifies the fan runs and head pressure normalizes.

Watch for a tech who replaces the motor without testing the capacitor first — the capacitor is cheaper and more commonly at fault.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan still | Failed run capacitor | Turn system off; don't hand-start | Discharge & replace capacitor |
| Fan spins if nudged, then stalls | Weak capacitor | Shut down, call pro | Test µF, replace capacitor |
| No fan, no compressor, no hum | Contactor or power loss | Check breaker/disconnect once | Test contactor & 24V, replace |
| Grinding/squealing then stops | Worn motor bearings | Shut down to protect compressor | Replace condenser fan motor |
| Hot, burnt smell at unit | Burned-out motor winding | Turn off at breaker | Replace motor, inspect wiring |
| Blade physically jammed | Debris/branch | Clear debris (power off) | Inspect blade & motor shaft |
| Fan dead on XV20i, error shown | ECM fan module fault | Note any indoor error display | Diagnose ECM, replace module/motor |

## Repair costs

Honest US ranges, parts plus labor:

- **Run capacitor:** $150 – $300
- **Contactor:** $150 – $350
- **Condenser fan motor:** $300 – $700
- **Low-voltage fuse / minor wiring:** $90 – $200
- **ECM / variable-speed fan module (XV series):** $500 – $1,000+
- **Diagnostic / service call:** $80 – $180 (often credited toward the repair)

Prices vary by region, motor type, and whether your unit is in warranty. Many Trane units carry a 10-year parts warranty if registered — ask whether the part is covered (you'll still pay labor).

## Related codes

- **Trane AC Not Cooling: Causes, Fixes & Repair Costs** — start here if the whole system isn't cooling, not just the outdoor fan.
- **Trane Furnace Code 90 (2 Blinks): Causes & Costs** — for furnace/air-handler side faults that can mimic a cooling complaint.
