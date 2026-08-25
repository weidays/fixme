---
title: "Carrier AC Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "Carrier AC outdoor fan not spinning? Common causes include a failed capacitor, bad fan motor, contactor or relay — fixes and costs from $0 to $650."
brand: carrier
equipment: air-conditioner
severity: pro
costRange: "$0 DIY reset – $650 if the condenser fan motor needs replacement"
appliesTo: "Most Carrier split-system condensers (Comfort, Performance, Infinity series) using a single-phase PSC or ECM outdoor fan motor. Diagnostics vary between older PSC/capacitor units and newer variable-speed Infinity boards."
tags:
  - carrier
  - air-conditioner
  - outdoor-fan
  - condenser-fan-motor
  - capacitor
parts:
  - name: Dual run capacitor (match microfarad rating)
    search: carrier dual run capacitor 45 5 mfd 440v
  - name: Condenser fan motor (match HP/RPM/voltage)
    search: condenser fan motor 1/4 hp 825 rpm 208-230v
  - name: Fan motor capacitor (single run)
    search: hvac fan run capacitor 5 mfd 440v
  - name: Contactor (single or double pole)
    search: hvac condenser contactor 30 amp 24v coil
datePublished: 2026-08-25
dateModified: 2026-08-25
reviewedBy: ""
faq:
  - q: Can I run my Carrier AC if the outdoor fan isn't spinning?
    a: No. Running the compressor without the condenser fan lets pressures and temperatures spike, which can overheat and permanently damage the compressor. Shut the system off at the thermostat until it's repaired.
  - q: Why does my Carrier fan spin if I push it with a stick but not on its own?
    a: That classic symptom almost always means a failed run capacitor. The motor needs the capacitor's phase-shift to start; once nudged it can keep turning. A capacitor is a low-cost pro replacement — do not keep pushing it to run.
  - q: How much does it cost to fix a Carrier outdoor fan that won't spin?
    a: A capacitor runs about $150 to $350 installed, a contactor $150 to $300, and a full condenser fan motor typically $400 to $650 with parts and labor. Diagnosis usually adds a service-call fee.
  - q: Is a stuck outdoor fan a DIY fix?
    a: Beyond checking the breaker and thermostat, no. The repair involves the run capacitor, which stores a dangerous charge even with power off, plus 240V line voltage. This is a pro job for safety and correct part matching.
---

## What this code means

"Outdoor fan not spinning" is a symptom, not a Carrier fault code — most Carrier condensers don't display alphanumeric codes at the outdoor unit. When the outdoor (condenser) fan won't turn while the AC is calling for cooling, the condenser can't reject the heat your system is pulling out of the house.

This matters because the compressor and fan usually start together. If the compressor runs while the fan is dead, refrigerant pressures and temperatures climb fast. Within minutes the unit can trip on internal overload — and repeated cycling like this is a common way compressors get damaged.

The most frequent culprit is a failed **run capacitor**. Other causes include a bad fan motor, a stuck contactor, a control-board fault (on Infinity/variable-speed systems), or a high-pressure/temperature lockout that has shut the outdoor unit down deliberately.

**Turn the system off at the thermostat now** if the fan isn't spinning but you hear the compressor humming or buzzing. Leaving it running risks an expensive compressor.

## Common causes, ranked by probability

1. **Failed dual run capacitor** — By far the most common cause. The same capacitor often serves both the fan and compressor. Bulged, leaking, or reading out of spec, it can't give the fan motor the kick it needs to start.
2. **Failed condenser fan motor** — Bearings seize or windings burn out, especially on older units or after the motor has been forced to run hot.
3. **Bad or stuck contactor** — The contactor is the relay that sends 240V to the outdoor unit. Pitted or stuck contacts can leave the fan without power (or stuck on).
4. **Debris or ice jamming the fan blade** — A stick, leaves, or a bent blade physically blocking rotation.
5. **High-pressure / high-temperature lockout** — On systems with pressure switches, a dirty coil or refrigerant problem can trip a safety that shuts the unit down.
6. **Control board fault (Infinity / variable-speed)** — Newer Carrier systems drive the fan through a control board and ECM motor. A board or communication fault, not a capacitor, may be the issue on these units.
7. **Blown fuse or tripped breaker at the disconnect** — Loss of power to the outdoor unit only.

## Safe checks before you call anyone

These are the only checks a homeowner should do. Everything past this involves stored electrical charge and 240V line voltage — leave it to a pro.

- **Thermostat:** Confirm it's set to COOL and the setpoint is well below room temperature. Replace thermostat batteries if it has them.
- **Air filter:** A clogged filter can cause freeze-ups and pressure trips that shut the outdoor unit down. Replace it if dirty.
- **Breakers:** Check both the indoor and outdoor AC breakers in your main panel. Reset a tripped breaker **once**. If it trips again, stop and call a pro — do not keep resetting.
- **Visible obstructions:** With the system **off at the breaker**, look through the top grille for leaves, sticks, or debris resting on the fan blade. Never reach in while power is on.
- **Ice:** If the outdoor unit or indoor coil is iced over, turn the AC off but leave the fan on FAN mode to thaw. See the frozen coil article below.
- **Condensate:** A full drain pan or float switch can shut cooling down; check that the drain line isn't clogged.

If none of these restores the fan, call a licensed HVAC technician.

## How a technician will diagnose it

Knowing the sequence helps you sanity-check a quote:

1. **Verify the call and power** — Confirm the thermostat is calling for cooling and that 240V is reaching the disconnect and contactor.
2. **Discharge and test the capacitor** — The tech safely discharges the run capacitor, then measures its microfarad value against the rating printed on it. Out-of-spec = replace.
3. **Check the contactor** — Inspect for pitting and confirm it pulls in and passes voltage when energized.
4. **Test the fan motor** — With a known-good capacitor, they check whether the motor spins freely and draws correct amperage. A seized or burnt motor gets condemned.
5. **Read pressures / check the coil** — If a high-pressure lockout is suspected, they check for a dirty condenser coil or a refrigerant charge issue.
6. **Board and comms (Infinity systems)** — On variable-speed units, they'll pull fault history from the control and check ECM communication rather than assume a capacitor.

A fair diagnosis usually runs 30–60 minutes plus the service-call fee.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Compressor hums, fan doesn't turn; spins if nudged | Failed run capacitor | Shut off at thermostat; don't push the fan to run | Discharge and replace capacitor, verify amp draw |
| No sound at all from outdoor unit | Tripped breaker, blown fuse, or bad contactor | Reset breaker once; replace filter | Test power path, contactor, and fuses |
| Fan blade physically stuck | Debris or bent blade | Power off at breaker; remove visible debris | Clear jam, straighten/replace blade or motor |
| Fan tries to start, buzzes, then quits | Weak capacitor or failing motor bearings | Turn system off | Test cap and motor; replace as needed |
| Unit shuts down shortly after starting | High-pressure/temp lockout | Replace filter; clear coil debris | Check pressures, clean coil, verify charge |
| Fan never runs on new variable-speed unit | Control board or ECM fault | Turn off; note any error at thermostat | Pull fault codes, test board/motor comms |

## Repair costs

Ranges are typical US installed prices including parts and labor; your area and unit may vary.

- **Run capacitor replacement:** $150 – $350
- **Contactor replacement:** $150 – $300
- **Condenser fan motor (PSC):** $400 – $650
- **ECM / variable-speed fan motor (Infinity):** $600 – $1,200+
- **Control board (Infinity/variable-speed):** $500 – $900
- **Clearing a jam / minor blade repair:** $100 – $250
- **Diagnostic / service call:** $75 – $200 (often credited toward the repair)

The capacitor is the cheapest and most common fix, which is why a competent tech checks it first. Be wary of any quote that jumps straight to a full motor or condenser replacement without testing the capacitor and contactor.

## Related codes

- **[Carrier AC Not Cooling: Causes, Fixes & Repair Costs](#)** — broader cooling failures, including cases where the fan runs but the house won't cool.
- **[Carrier AC Frozen Evaporator Coil: Causes & Fixes](#)** — ice buildup that can trigger pressure lockouts affecting the outdoor unit.
- **[Carrier Furnace Code 31: Causes, Fixes & Costs](#)** — pressure-switch faults on the heating side, for context on how safety switches lock out equipment.
