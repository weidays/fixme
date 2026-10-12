---
title: "York Heat Pump Outdoor Fan Not Spinning: Causes & Fixes"
code: "Outdoor fan not spinning"
description: "York heat pump outdoor fan not spinning? Learn the likely causes (capacitor, motor, contactor, defrost board), safe checks, and repair costs of $0 to $900."
brand: york
equipment: heat-pump
severity: pro
costRange: "$0 DIY – $900+ if the condenser fan motor and capacitor need replacement"
appliesTo: "York and sister-brand (Johnson Controls) split heat pumps, including LX, Affinity and Latitude series outdoor units. Single-stage units use a PSC fan motor with a run capacitor, while variable-speed and communicating models may use an ECM fan motor driven by the control board, so diagnosis differs. Fault-code availability on the outdoor board also varies by model."
tags:
  - york
  - heat-pump
  - outdoor-fan
  - condenser-fan-motor
  - capacitor
  - contactor
  - defrost-control
parts:
  - name: "Replacement HVAC air filter"
    search: "HVAC furnace air filter MERV 8"
  - name: "AA lithium thermostat batteries"
    search: "AA lithium batteries thermostat"
datePublished: 2026-10-11
dateModified: 2026-10-11
reviewedBy: ""
faq:
  - q: "Is it normal for my York heat pump's outdoor fan to stop while the unit is running?"
    a: "It is normal briefly during defrost. In defrost the outdoor fan stops while the compressor keeps running, and you may see steam rise from the coil. Defrost usually lasts 2 to 10 minutes. If the fan stays off longer than about 15 minutes, or it is off in cooling mode, something is wrong."
  - q: "Can I keep running the heat pump if the outdoor fan isn't spinning?"
    a: "No. Turn the system off at the thermostat. Without the fan, the compressor overheats and trips its internal overload. Repeated overheating can shorten compressor life or ruin it, and that is the most expensive part in the system."
  - q: "Can I spin the fan blade with a stick to get it started?"
    a: "Don't. The blade sits behind a guard, and 240 volts is present inside the unit. A fan that only runs after being pushed usually has a failed capacitor or a dying motor. The fix is a technician repair, not a workaround."
  - q: "How much does it cost to fix a York outdoor fan that won't spin?"
    a: "A run capacitor replacement typically costs $120 to $300 installed. A contactor costs about $150 to $350. A PSC condenser fan motor usually costs $350 to $750, and an ECM motor or control board can run $500 to $1,200."
---

## What this code means

"Outdoor fan not spinning" is a symptom, not a numbered fault code. Some York outdoor control boards log related faults, which you can see as LED flash codes on the board inside the service panel. The meanings of those codes vary by model, so a technician should read them from the wiring diagram label on that specific unit.

The outdoor fan pulls air across the outdoor coil. That airflow lets the heat pump absorb heat in winter and reject heat in summer.

**Normal behavior to rule out first.** During defrost, a York heat pump intentionally stops the outdoor fan while the compressor keeps running. This usually lasts a few minutes, often with steam and a whooshing sound when the reversing valve shifts. If the fan resumes on its own, there is no problem. If you suspect the unit is stuck in defrost, see our separate page on that topic.

**When it is a real fault.** Treat it as a fault if:

- the fan stays off while the compressor hums or runs,
- the fan is off in cooling mode, or
- the fan only turns after being nudged.

Shut the system off at the thermostat if any of these apply. The compressor's internal overload resets automatically once it cools, but running repeatedly without the fan damages it. There is no lockout to clear for this symptom itself. Board-logged faults on some models clear when the fault condition clears or when power is cycled.

## Common causes, ranked by probability

1. **Failed run capacitor (PSC-motor models).** This is the most common cause by far. The capacitor may be a dual capacitor shared with the compressor or a separate fan capacitor. Typical signs:
   - the fan hums but won't start,
   - the fan starts slowly, or
   - the fan runs only after a push.
2. **Failed condenser fan motor.** The bearings seize or the windings open. The motor's internal thermal protector may also trip, making the motor run intermittently and then quit when hot.
3. **Contactor problems.** On many single-stage units, the fan and compressor share the contactor. Pitted or burned contacts, or a failed contactor coil, can leave the fan dead. Often the compressor is affected too, or one leg feeds the fan poorly.
4. **Defrost control / outdoor board fault.** The board switches the fan off for defrost through a relay, so a failed fan relay or board can keep the fan off. Communicating and variable-speed York models also send the ECM motor its run signal from the board.
5. **Wiring faults.** Possible faults include a burned or loose fan lead, a rodent-chewed wire, or a corroded connection at the capacitor, contactor or board.
6. **Obstruction or a damaged blade.** Ice, debris, or a bent blade can rub the shroud or guard. In winter, ice buildup can physically lock the blade.
7. **No power to the outdoor unit.** A tripped breaker or pulled disconnect stops both the fan and the compressor. The indoor blower may still run.

## Safe checks before you call anyone

- **Check whether it's defrost.** In heat mode on a cold day, wait 10 to 15 minutes. If steam rises and the fan restarts, the system is working normally.
- **Check the thermostat.** Confirm the mode (Heat or Cool) and that the setpoint actually calls for operation. Replace the batteries if the display is dim or blank.
- **Check the breakers.** Look for a tripped double-pole breaker labeled for the heat pump or condenser. Reset it once. If it trips again, leave it off and call a technician.
- **Check the outdoor disconnect.** Confirm that the pull-out or switch disconnect next to the unit is fully seated in the ON position. Do not open the electrical box beyond that.
- **Replace a dirty indoor air filter.** A clogged filter doesn't stop the outdoor fan, but it stresses the whole system. Fix it while you're at it.
- **Look from outside the guard only.** You can clear leaves, snow drifts or debris piled against the unit from the outside. Keep 2 feet of clearance around it. Never reach through the fan guard, and don't chip ice off the coil or blade.
- **Shut it off if the fan is still dead.** If the compressor runs or hums with the fan stopped, set the thermostat to Off. Switch to emergency/auxiliary heat if you need heat, then call a technician.

## How a technician will diagnose it

Use this sequence to sanity-check what a technician tells you:

1. **Confirm the call and the mode.** Verify the thermostat call and the operating mode, and rule out normal defrost.
2. **Check supply voltage.** With the disconnect pulled and lockout applied, they'll inspect for burned wires. Then they'll measure line voltage at the contactor.
3. **Test the capacitor.** They'll discharge the capacitor and measure it in microfarads with a meter. A reading more than about 6% below its rating, or a bulged or leaking case, means it should be replaced.
4. **Test the motor.** They'll check winding resistance and look for an open circuit or a short to ground. They'll also spin the blade by hand with power locked out to feel for seized or rough bearings, and note whether the motor is hot and tripped on its thermal protector.
5. **Inspect the contactor.** They'll look for pitting on the contacts and check coil voltage (24 V) and voltage across the contacts.
6. **Check the defrost/outdoor board.** They'll read any LED fault codes against the unit's diagram. They'll confirm whether the board's fan output (the relay contacts, or the ECM signal on variable-speed models) is energized when it should be.
7. **Check for refrigerant-side damage.** If the unit ran long without the fan, they may check compressor amps and system pressures.

A good technician will tell you the measured capacitor value and the motor test results. Be skeptical of a quote to replace a motor without a capacitor test first, since a capacitor is much cheaper.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan stops in heat mode for a few minutes, steam rises, then restarts | Normal defrost cycle | None needed | None |
| Fan hums but doesn't turn; compressor runs | Failed run capacitor | Turn system off at thermostat | Test and replace capacitor |
| Fan runs only after being nudged | Weak capacitor or failing motor | Turn system off; don't push the blade | Test capacitor and motor; replace as needed |
| Fan runs a while, then stops; restarts after cooling | Motor overheating on thermal protector, bad bearings | Turn system off | Replace condenser fan motor (often with capacitor) |
| Fan and compressor both silent, indoor blower runs | Tripped breaker, disconnect off, or contactor fault | Reset breaker once; check disconnect | Inspect contactor, coil voltage, wiring |
| Fan off but compressor runs, fan tests good | Defrost board relay or ECM control signal fault | Turn system off | Diagnose and replace control board or ECM module |
| Grinding or scraping, blade barely moves | Ice, debris or bent blade hitting the shroud | Clear debris from outside the guard only | Straighten or replace blade, remove ice, check motor mount |
| Fan intermittent, burned smell at unit | Loose or burned wiring | Turn power off at breaker | Repair wiring and terminals |

## Repair costs

Typical US installed prices (parts plus labor) are listed below. Costs vary by region, warranty coverage and after-hours rates.

| Repair | Typical cost |
|---|---|
| Service call / diagnostic | $80 – $200 |
| Run capacitor (single or dual) | $120 – $300 |
| Contactor | $150 – $350 |
| PSC condenser fan motor (often with new capacitor) | $350 – $750 |
| ECM / variable-speed outdoor fan motor | $600 – $1,200 |
| Fan blade | $100 – $300 |
| Defrost control / outdoor board | $300 – $800 |
| Wiring repair | $100 – $300 |
| Compressor damaged from running without the fan | $1,800 – $3,500+ |

York's parts warranty, often 5 or 10 years when the unit is registered, may cover the motor or board. If so, you pay labor only, so check your registration before paying for parts.

## Related codes

- York Heat Pump Stuck in Defrost Mode: Causes & Fixes
- York Heat Pump Frozen, Not Defrosting: Causes & Fixes
- York Heat Pump Ice on Outdoor Unit: Causes & Fixes
- York Heat Pump Not Heating: Causes, Fixes & Costs
- York Heat Pump Not Cooling: Causes, Fixes & Costs
- York Heat Pump Aux Heat On Constantly: Causes & Fixes
