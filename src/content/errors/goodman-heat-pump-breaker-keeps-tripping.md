---
title: "Goodman Heat Pump Breaker Keeps Tripping: Causes & Costs"
code: "Breaker keeps tripping"
description: "Why a Goodman heat pump keeps tripping its breaker: compressor, capacitor, fan motor, wiring and heat strip causes, safe checks, and repair costs."
brand: goodman
equipment: heat-pump
severity: pro
costRange: "$0 if a one-time nuisance trip – $120-$350 for capacitor, contactor or breaker – $2,000+ if the compressor is shorted"
appliesTo: "Goodman single-stage and two-stage split-system heat pumps that use a capacitor-run (PSC) compressor and a contactor (GSZ, GSZB, non-inverter GSZC/DSZC and older SSZ/CPLE series) with matching air handlers (ARUF, AVPTC, MBVC, ASPT). Inverter-driven variable-speed models have no compressor run capacitor or conventional contactor and use a different cause list and diagnosis. Diagnosis also differs depending on whether the outdoor-unit breaker or the air-handler/heat-strip breaker is tripping. Communicating models (ComfortBridge or ComfortNet) may also log fault codes that help narrow the cause."
tags: ["goodman", "heat-pump", "breaker-tripping", "electrical", "compressor", "capacitor", "heat-strips"]
parts: []
datePublished: 2026-10-12
dateModified: 2026-10-12
reviewedBy: ""
faq:
  - q: "Can I just keep resetting the breaker on my Goodman heat pump?"
    a: "No. Reset it once. If it trips again, leave it off and call a technician. A breaker that trips repeatedly is reporting a real overcurrent or short circuit. Forcing it back on can overheat wiring, damage the compressor, or create a fire risk."
  - q: "Which breaker is tripping, and does it matter?"
    a: "Yes. Most Goodman heat pumps have one 240V breaker for the outdoor unit and a separate breaker, or two, for the indoor air handler and its electric heat strips. An outdoor breaker trip points to the compressor, capacitor, fan or outdoor wiring. An indoor breaker trip in cold weather often points to the heat strips or blower."
  - q: "Does the breaker trip mean my compressor is dead?"
    a: "Not necessarily. On capacitor-run models, a weak capacitor, failing contactor, shorted fan motor, or loose or corroded wiring is more common and far cheaper to fix. A technician has to test the compressor windings to rule out a grounded or shorted compressor."
  - q: "Is it the breaker itself that's bad?"
    a: "Sometimes. Breakers wear out and can trip below their rated current, especially older ones or ones that have tripped many times. An electrician or HVAC tech can measure the unit's running amps and compare them to the breaker rating before replacing it."
  - q: "Will a Goodman heat pump reset itself after a breaker trip?"
    a: "The breaker never resets itself. You have to switch it back on manually. Once power returns, the unit will try to restart on the next thermostat call, after any built-in compressor delay on models with a timer or communicating control."
  - q: "Does this apply to my inverter or variable-speed Goodman heat pump?"
    a: "Only partly. Inverter-driven variable-speed models drive the compressor through an inverter board and typically use an ECM fan, so they have no compressor run capacitor or conventional contactor. On those units, breaker trips point to the inverter drive, its components, or the ECM motor. The homeowner safe checks still apply, but the cause list and diagnosis on this page do not."
---

## What this code means

"Breaker keeps tripping" is not a Goodman diagnostic code. It is a symptom. The circuit breaker feeding your heat pump or its air handler is sensing more current than it is rated for, or a short to ground, and cutting power to protect the wiring.

Goodman split systems normally have two power supplies:

- **The outdoor unit** runs on a dedicated 240V breaker, usually 15–60A depending on tonnage. It powers the compressor and condenser fan.
- **The indoor air handler** has its own breaker or breakers. These power the blower and, on most heat pump installs, the electric auxiliary heat strips (5–20 kW).

The breaker stays off until someone resets it by hand. The fix depends on which breaker trips and when it trips:

- **Instantly on reset:** usually a hard short.
- **When the compressor tries to start:** often a start or capacitor problem.
- **After running a while:** often an overload, a failing motor, or a weak breaker.

**Which units this page covers.** The causes and diagnosis below are for single-stage and two-stage Goodman heat pumps with a capacitor-run compressor and a contactor. **Inverter-driven variable-speed models are different.** They drive the compressor through an inverter board and typically use an ECM fan, so they have no compressor run capacitor or conventional contactor. On those units, breaker trips point to the inverter drive, its components, or the ECM motor. The safe checks below still apply to them, but the cause ranking and technician steps do not.

**Severity: pro.** Everything beyond one breaker reset and basic airflow checks involves live 240V components and belongs to a licensed technician.

## Common causes, ranked by probability

These apply to capacitor-run single-stage and two-stage units. See the note above for inverter models.

1. **Failed or weak run capacitor (outdoor unit).** Without proper capacitor assist, the compressor or fan motor draws high current trying to start. The single- and two-stage units covered here typically use a dual run capacitor for both the compressor and fan. This is the most common cause on units more than a few years old, especially after hot summers.
2. **Compressor hard-starting or locked rotor.** A compressor that struggles to start pulls locked-rotor amps, often 5–7 times running current. On a locked rotor, the compressor's internal overload often trips before the breaker does. When the breaker itself trips repeatedly on start, it usually means high locked-rotor draw combined with a weak capacitor, low supply voltage, or a marginal breaker. Causes of hard starting include worn compressor mechanics, low voltage, or pressures that haven't equalized after a short-cycle.
3. **Loose, burnt, or corroded wiring or terminals.** Heat and corrosion at the contactor, capacitor, disconnect or breaker lugs create resistance and arcing. Rodent damage to wiring is also common on outdoor units.
4. **Failing contactor.** On units with a conventional contactor, pitted or welded contacts can chatter or cause arcing and uneven power delivery to the compressor.
5. **Shorted or seized condenser fan motor.** A fan motor with a winding shorted to ground, or bearings that are seizing, overloads the circuit. The fan problem itself is covered separately (see Related codes).
6. **Grounded or shorted compressor winding.** When compressor insulation breaks down, current flows to the casing. Breakers often trip instantly on reset. This is the most expensive cause.
7. **Electric heat strip or air-handler fault (indoor breaker).** Possible faults include a shorted heater element, a failed sequencer or relay that energizes all strips at once, or a heat kit too large for its breaker or wire size. This often shows up only in cold weather when aux heat engages.
8. **Undersized or worn-out breaker.** A breaker that has tripped many times, or one that is smaller than the unit's rating plate calls for, can trip under normal load. An installer may have mismatched the breaker to the unit, which happens more often after equipment replacement.
9. **High head pressure from a dirty outdoor coil or restricted airflow.** This raises compressor amp draw in cooling mode. It is usually a contributing factor rather than the sole cause.

## Safe checks before you call anyone

- **Identify which breaker is tripping.** Check the panel labels for the outdoor unit/condenser and for the air handler/furnace/heat strips. Note it for the technician.
- **Note when it trips.** Does it trip instantly on reset, when the outdoor unit starts, after minutes of running, or only in heat mode on cold days? This saves diagnostic time.
- **Check for smoke, sparking, burning smell, buzzing or scorch marks** at the outdoor unit, air handler or panel, from a distance, before you reset anything. **If you see smoke or sparking, or notice a persistent burning odor, keep power off at the panel, get away from the equipment, and call 911 if there is any sign of fire.** If you find buzzing or scorch marks without those signs, leave power off and say so when you call a technician.
- **Reset the breaker ONE time.** Only do this if the check above found nothing. First set the thermostat to OFF and wait 5 minutes so compressor pressures can equalize. Then reset the breaker fully: push it to OFF, then back to ON. After that, set the thermostat back to heat or cool. If it trips again, **leave it off** and call a pro. Do not reset it repeatedly.
- **Replace a dirty air filter.** Severe airflow restriction raises system load and can make strip heat overheat.
- **Clear the outdoor unit.** Remove leaves, debris, snow or ice buildup from around the cabinet, keeping about 2 feet of clearance. Do not open the cabinet. Also make sure supply and return vents indoors are open and unblocked.
- **Check thermostat settings.** Confirm the thermostat isn't set to Emergency Heat by mistake. In Emergency Heat, the heat strips become the primary heat source whenever there is a call for heat, instead of backing up the heat pump. That puts more load on the indoor circuit and can stress one that is already marginal.

Do not open the outdoor disconnect box, the unit's service panel, or the air handler's electrical compartment. These contain 240V and capacitors that hold a charge even with power off.

## How a technician will diagnose it

On a capacitor-run single- or two-stage unit, a good tech will typically:

1. **Ask which breaker trips and when.** Instant, on start, after a run, and heat-only trips point to different components.
2. **Inspect the panel, breaker and disconnect** for heat damage, loose lugs and correct breaker size. The tech compares breaker size against the **MOCP (maximum overcurrent protection)** and **MCA** on the Goodman rating plate.
3. **Test the dual run capacitor** with a capacitance meter against its µF rating. Tolerance is typically ±6%.
4. **Megohm or ohm test the compressor windings.** The tech tests common, start and run terminals to each other and to ground to rule out a grounded or open compressor.
5. **Test the condenser fan motor** for winding shorts to ground and check whether it spins freely.
6. **Inspect the contactor** for pitting, welding or a burnt coil, and check all wiring and terminals.
7. **Measure voltage and amperage** during startup and running. The tech compares readings to the nameplate RLA and LRA. Low supply voltage or locked-rotor draw on a hard start is a key finding.
8. **On the indoor side, check heat strip element resistance**, sequencers or relays, and the blower motor. The tech also confirms the heat kit matches the air handler and breaker.
9. **On communicating models, read stored fault codes** on the control board or thermostat.

**On inverter-driven variable-speed models,** steps 3 and 6 do not apply because there is no compressor run capacitor or conventional contactor. The tech will instead focus on the inverter drive and its components and the ECM fan motor, along with the panel, wiring, indoor-side and fault-code checks above.

A quote should name the specific failed component and the measurement that proved it. Be wary of "you need a new compressor" or "a new system" without winding test results. A hard-starting compressor may also warrant a hard-start kit, but that should be a deliberate recommendation, not a guess.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Outdoor breaker trips the instant it's reset | Grounded compressor, shorted wiring or fan motor | Leave breaker off; call a pro | Megohm/ohm test windings, inspect wiring, isolate short |
| Breaker trips a few seconds after outdoor unit tries to start, often with a hum | Weak capacitor or hard-starting compressor | Reset once after 5 minutes off; if it repeats, leave off | Test and replace capacitor; consider hard-start kit; check voltage |
| Breaker trips after running 10+ minutes | Failing fan motor, dirty coil, loose connection, worn breaker | Clear debris around unit, replace filter | Amp-draw test, motor test, tighten or repair terminals, test breaker |
| Indoor breaker trips only in cold weather or when aux heat runs | Shorted heat strip, failed sequencer, undersized circuit | Confirm not stuck on Emergency Heat; replace filter | Test elements and sequencers, verify heat kit and breaker sizing |
| Smoke, sparking, or persistent burning odor | Arcing or overheating at contactor, lugs or wiring | Keep power off at the panel; move away; call 911 if any sign of fire | Replace damaged wiring, contactor or breaker; inspect for heat damage |
| Buzzing or scorch marks at unit or panel | Arcing at contactor, lugs or wiring | Keep power off; do not reset | Replace damaged wiring, contactor or breaker; inspect for heat damage |
| Breaker trips with no other symptoms on an older panel | Breaker worn or undersized | Note breaker size and age for the tech | Verify against MOCP, replace breaker if faulty |

## Repair costs

Typical US ranges, including parts and labor:

| Repair | Typical cost |
|---|---|
| Service call / diagnostic | $75 – $200 |
| Dual run capacitor replacement | $120 – $350 |
| Contactor replacement | $150 – $350 |
| Hard-start kit installed | $150 – $400 |
| Wiring or terminal repair | $100 – $400 |
| Circuit breaker replacement | $150 – $350 (more for uncommon panels) |
| Condenser fan motor replacement | $300 – $700 |
| Heat strip element or sequencer/relay | $200 – $600 |
| Compressor replacement | $1,800 – $3,500+ |
| Full outdoor unit replacement | $3,500 – $7,500+ |

Goodman's parts warranty is 10 years on registered units, and some models carry a lifetime compressor warranty. Coverage depends on your specific model and whether it was registered, so don't assume a lifetime compressor warranty applies to your unit. Before approving compressor work, verify your model's registered warranty terms with Goodman or your installer. Warranty often covers the part but not the labor. If the compressor is grounded on an older unit, ask for a repair-versus-replace comparison.

## Related codes

- Goodman Heat Pump Outdoor Fan Not Spinning: Causes & Fixes
- Goodman Heat Pump Short Cycling: Causes, Fixes & Costs
- Goodman Heat Pump Not Cooling: Causes, Fixes & Costs
- Goodman Heat Pump Not Heating: Causes, Fixes & Costs
- Goodman Heat Pump Aux Heat On Constantly: Causes & Fixes
- Goodman AC Running But Not Cooling: Causes & Costs
