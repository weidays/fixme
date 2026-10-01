---
title: "York Furnace Blower Won't Shut Off: Causes & Fixes"
code: "Blower won't shut off"
description: "York furnace blower runs constantly? Causes include thermostat fan settings, a stuck fan relay or bad limit switch. Fixes and costs from $0 DIY to $1,800."
brand: york
equipment: furnace
severity: diy
costRange: "$0 DIY – $1,800 if the control board or blower motor needs replacement"
appliesTo: "Most York single- and two-stage gas furnaces (Affinity, LX, Latitude series) using integrated furnace control (IFC) boards. Fan behavior varies by board and thermostat wiring."
tags:
  - blower
  - fan-wont-stop
  - thermostat
  - limit-switch
parts:
  - name: "Programmable thermostat"
    search: "honeywell programmable thermostat furnace"
  - name: "Thermostat batteries"
    search: "thermostat batteries"
datePublished: 2026-10-01
dateModified: 2026-10-01
reviewedBy: ""
faq:
  - q: Why does my York furnace blower run even when there's no heat?
    a: The most common reason is the thermostat fan switch set to ON instead of AUTO, which runs the blower continuously by design. Check that first before suspecting a fault.
  - q: Is it bad to let the blower run all the time?
    a: It won't damage the furnace, but it raises electric bills and can blow cooler air once the heat exchanger cools. A continuously running fan after heat stops may also signal a stuck relay or limit switch.
  - q: Can I reset a furnace whose blower won't turn off?
    a: Yes, you can cycle power at the furnace switch or breaker once. If the blower restarts and still won't stop with the thermostat set to AUTO, the problem is internal and needs a technician.
---

## What this code means

"Blower won't shut off" is not a flash-code fault on York furnaces — it's a behavior, not a numbered lockout. The York integrated furnace control (IFC) board normally runs the blower during a heat call, then shuts it off after a fixed-off delay (typically 60–180 seconds, depending on the board's dip-switch setting) once the thermostat is satisfied.

When the blower runs continuously and never stops, it usually means one of three things: the fan is being told to run (thermostat set to ON), the board thinks it must protect the furnace (limit switch holding the fan on to clear heat), or a relay/control has failed in the closed position. This is almost always a diagnostic situation rather than a lockout, so there is usually no flashing error code tied to it.

Because a continuously running blower doesn't create an unsafe condition by itself, York furnaces don't lock out over it. The board keeps running the fan until the triggering condition clears or power is cycled.

## Common causes, ranked by probability

1. **Thermostat fan set to ON.** By far the most common cause. With the fan switch on ON (rather than AUTO), the blower runs 24/7 on purpose. This is normal operation, not a fault.
2. **Thermostat wiring or a smart-stat holding the G terminal.** A miswired or failing thermostat can keep the fan (G) circuit energized. Some smart thermostats have a "circulate" or continuous-fan setting enabled.
3. **Open or slow-to-clear high-limit switch.** If the furnace overheats — often from a dirty filter or blocked airflow — the limit switch opens, shuts the gas, and the board runs the blower continuously to cool the heat exchanger. The fan stays on until temperature drops.
4. **Stuck fan relay on the IFC board.** The relay that switches the blower can weld or stick closed, leaving the fan running regardless of the thermostat.
5. **Failed control board.** Less common, but a faulty IFC board can lose the ability to drop the fan output.

How the fan turns off depends on what's controlling it, and you can usually tell by looking (with the blower-compartment door closed and panels left alone — a technician can confirm). Furnaces with a separate temperature-sensing fan/limit control turn the blower off when the air around the heat exchanger cools, so the run-on time changes with conditions. Furnaces whose fan-off timing is set by dip switches on the integrated control board shut the fan off after a fixed delay instead. If your fan runs for a few minutes after every heat cycle but does eventually stop, that's normal operation — not a failure.

## Safe checks before you call anyone

These are the only steps a homeowner should do:

- **Set the thermostat fan to AUTO.** On the thermostat, find the fan switch and move it from ON to AUTO. Wait a few minutes — if the blower stops after the normal off-delay, you're done.
- **Check for a "circulate" setting.** On smart or programmable thermostats, disable any continuous-fan or circulate feature.
- **Replace the air filter.** A clogged filter restricts airflow and causes overheating that trips the limit switch, which forces the fan to run. Swap in a clean filter.
- **Replace the thermostat batteries (check the size your model uses).** A dying thermostat can send erratic signals; fresh batteries rule this out. Some thermostats are hardwired and have no batteries at all.
- **Open all supply and return registers.** Blocked vents reduce airflow and can cause the overheating that keeps the fan running.
- **Cycle power once.** Flip the furnace switch (or its breaker) off, wait 30 seconds, and back on. If the blower stops with the thermostat on AUTO, the issue may have been a temporary fault.

If the blower still won't shut off after these steps, stop — the rest is inside the cabinet and is technician work.

## How a technician will diagnose it

A technician will confirm the behavior and narrow it to a cause:

- **Verify the thermostat signal.** They'll check whether the G (fan) terminal is energized with the thermostat on AUTO and no heat call. A live G means a thermostat or wiring fault.
- **Measure heat-exchanger/limit temperature.** If the high-limit switch is open, they'll find the root cause — restricted airflow, a failing blower motor running slow, or a bad limit switch — and confirm the temperature isn't actually high.
- **Test the fan relay on the IFC board.** With power removed, they'll check the relay contacts and the board's fan output. A stuck relay or a board that won't drop the output points to a control replacement.
- **Check blower motor and capacitor.** They'll determine whether the blower is being energized from the board's HEAT tap or its COOL/FAN tap, which tells them which output is stuck, and on PSC blowers they'll check the motor windings and the run capacitor.
- **Inspect wiring.** A pinched or shorted G wire can energize the fan continuously.

A good quote will name the specific failed part — a limit switch is a very different bill than a control board.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Fan runs 24/7, air feels neutral | Thermostat set to ON | Switch fan to AUTO | None needed |
| Fan runs constantly after an update | Smart-stat circulate mode | Disable circulate/continuous fan | Reconfigure thermostat settings |
| Fan runs long after heat, then stops | Normal timed fan-off delay | Confirm it eventually stops | Adjust fan-off delay dip switch if desired |
| Fan runs, no heat, filter dirty | Overheat tripping high limit | Replace filter, open vents | Test/replace limit switch, check airflow |
| Fan never stops even on AUTO | Stuck fan relay on board | Cycle power once | Replace IFC control board |
| Fan runs with thermostat disconnected | Welded fan relay, failed board fan output, or shorted G wiring | None | Test the board's fan output, then repair wiring or replace the relay/board |

## Repair costs

- **DIY fixes (thermostat setting, filter, batteries, vents):** $0–$30.
- **New thermostat (if yours is faulty):** $30–$250 depending on model; $100–$200 installed if a tech does it.
- **High-limit switch replacement:** $150–$400 installed.
- **Fan relay / blower motor diagnosis:** $100–$200 diagnostic.
- **IFC control board replacement:** roughly $400–$1,200 installed. The OEM York/Source 1 board is often the expensive part on its own — frequently $250–$600 before labor and the diagnostic fee — so a four-figure quote isn't automatically a ripoff.
- **Blower motor replacement (if slow-running causes overheating):** about $450–$1,800 installed, depending on whether it's a PSC motor or an ECM/variable-speed motor; ECM replacements on Affinity-series equipment commonly exceed $1,000. Less common for this symptom.

Most "blower won't shut off" calls end up being a thermostat setting or a dirty filter, so try the free checks first.

## Related codes

- **York Furnace 4 Flashes: Open Limit Switch Causes & Fixes** — if a tripped limit is forcing the fan to run.
- **York Furnace Short Cycling: Causes, Diagnosis & Fixes** — related airflow and limit issues.
- **York Furnace Blowing Cold Air: Causes, Fixes & Costs** — if the constantly running fan is blowing cool air.
- **York Furnace Keeps Shutting Off: Causes & Fixes** — for the opposite problem of a furnace that won't stay running.
