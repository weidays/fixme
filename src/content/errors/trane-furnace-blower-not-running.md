---
title: "Trane Furnace Blower Not Running: Causes & Fixes"
code: "Blower not running"
description: "Trane furnace blower not running? Causes from door switches to bad capacitors or blower motors, DIY checks, and honest repair costs."
brand: trane
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,600+ if a variable-speed ECM blower motor needs replacement"
appliesTo: "Trane XR, XV, XC, XT, and S-series gas furnaces with single-speed PSC or variable-speed ECM blower motors; diagnostics vary by board and motor type."
tags:
  - trane
  - furnace
  - blower
  - blower-motor
  - no-airflow
parts:
  - name: Furnace air filter
    search: furnace air filter 16x25x1
  - name: Thermostat batteries
    search: AA alkaline batteries
datePublished: 2026-09-28
dateModified: 2026-09-28
reviewedBy: ""
faq:
  - q: Why does my Trane furnace fire up but the blower never turns on?
    a: The burners can ignite while the blower stays dead if the blower capacitor, motor, or the board's blower relay has failed. The furnace often shuts down on a limit trip when heat builds with no airflow.
  - q: Can a loose furnace door stop the blower?
    a: Yes. Trane furnaces use a door interlock switch that cuts line voltage to the furnace when the panel is off or seated loosely — so typically nothing at all runs, not just the blower. Reseating the front panel firmly is a safe homeowner check.
  - q: Is it safe to run my furnace if the blower won't start?
    a: No. Without airflow the heat exchanger overheats and the high-limit switch will trip, and repeated overheating can crack the exchanger. Turn the system off and call a technician.
  - q: How much does it cost to fix a blower that won't run on a Trane furnace?
    a: A capacitor runs about $150-$350, a blower relay or control board $350-$1,000+, and a full blower motor $450-$900 installed for a single-speed PSC motor or $800-$1,600+ for a variable-speed ECM motor on an XV/XC-series furnace. Simple fixes like reseating the door panel cost nothing.
---

## What this code means

"Blower not running" describes a Trane furnace whose indoor blower (circulating) fan fails to start when it should — either during a heat call, a cooling call, or continuous-fan mode. On many Trane models this shows up not as a dedicated blink code but as a symptom: the burners may light and then the unit trips on high limit, or the thermostat calls but no air ever moves through the registers.

The blower is driven either by a **single-speed PSC motor with a run capacitor** (older XR/XT series) or a **variable-speed ECM motor** (XV, XC, and higher-tier models). Because the two motor types fail and are diagnosed differently, the root cause varies by model. On ECM units the control board sends a low-voltage command signal; on PSC units the board simply closes a relay to send line voltage to the motor.

This is a **pro-level** issue. Loss of airflow lets the heat exchanger overheat, so the high-limit switch will trip. Most Trane high limits are **auto-reset**: once the furnace cools, the limit closes and the board tries again — and with a dead blower it simply overheats and trips again. After repeated trips the board can drive the furnace into a **lockout**, where it stops retrying until power is cycled. Either way, the furnace won't stay running until the airflow fault is corrected. Do not run the furnace repeatedly in this state.

## Common causes, ranked by probability

Which cause is most likely depends on what you're seeing:

**If nothing at all happens — no burners, no inducer, no blower** (common right after someone removed a panel to change the filter), start with the door switch:

1. **Open door interlock switch / unseated panel** — on Trane furnaces the blower-compartment door switch cuts line voltage to the whole furnace, so an open switch means nothing runs, not just the blower. A loose front panel is the top suspect for this scenario and the easiest to rule out.
2. **Blown low-voltage fuse or tripped blower relay on the control board** — a short in the blower circuit can blow the board's low-voltage fuse (commonly 3A or 5A — check the label on your board) or fail the relay, killing power to the motor.

**If the burners light and the unit then trips off on limit**, the furnace clearly has power, so the blower circuit itself is the problem:

1. **Failed run capacitor (PSC motors)** — a weak or dead capacitor leaves a single-speed motor humming but unable to start, or dead entirely.
2. **Failed blower motor** — worn bearings, a seized motor, or a burned winding on either a PSC or ECM motor.
3. **Failed blower relay on the control board** — the relay that sends line voltage to a PSC motor can fail closed or open.
4. **Failed ECM motor module / control board (variable-speed models)** — the removable motor module or the board's command output can fail, leaving the ECM motor unpowered even though line voltage is present.
5. **Loose or corroded wiring / molex connectors** at the motor, capacitor, or board.

**If only fan-only operation is affected**, look at the thermostat: a **"G" (fan) wire fault or a thermostat stuck between settings** can prevent a fan-only call from starting the blower while heating still works.

## Safe checks before you call anyone

- **Reseat the front/blower panel.** Push the door on firmly so the interlock switch fully engages — a slightly loose panel is a very common cause and this is completely safe.
- **Check the thermostat.** Set it to HEAT (or COOL) and turn the fan to ON. If the blower runs steadily in ON but not in AUTO, note that for the tech. Replace thermostat batteries if it's battery-powered.
- **Replace a dirty air filter.** A clogged filter can cause overheating and limit trips that mimic a dead blower; a clean filter rules that out.
- **Check the breaker and furnace switch.** Reset a tripped breaker once and confirm the wall switch by the furnace is ON.
- **Look at supply and return registers.** Make sure they're open and unblocked so airflow isn't being choked.
- **Check the condensate line/pan** on high-efficiency models — a full pan can trip a float switch that shuts the system down.

Do **one** reset only. If the blower still won't run, stop and call a professional — don't keep cycling power to a unit that overheats.

## How a technician will diagnose it

A qualified tech will:

- Confirm line voltage into the furnace and the low-voltage (24V) supply, then check the board's blower fuse.
- Verify the door interlock switch closes when the panel is seated.
- On PSC models, test the **run capacitor** with a meter and check the motor windings for continuity and shorts.
- On ECM models, confirm the board is sending the correct command signal, then check the motor module and power feed with the manufacturer's test procedure.
- Inspect the blower relay operation on the control board and check all molex/motor connectors for corrosion or loose pins.
- Spin the blower wheel by hand (power off) to check for seized bearings.
- Check the high-limit switch history and confirm the furnace isn't tripping on limit because of a separate airflow restriction.

Ask for the specific failed component and its measured reading — that's how you sanity-check a quote.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Nothing runs at all, panel just removed/replaced | Door interlock switch open / loose panel | Reseat front panel firmly | Test/replace door switch if faulty |
| Burners light, blower never starts, unit trips off | Dead run capacitor or motor (PSC) | None — call a pro | Test and replace capacitor or motor |
| Nothing runs, no 24V control | Blown board fuse / failed relay | Reset breaker once | Replace board fuse or control board |
| Motor hums but won't spin | Weak capacitor or seized bearings | None — call a pro | Replace capacitor or blower motor |
| Variable-speed blower dead, board otherwise OK | Failed ECM module / command signal | None — call a pro | Test signal, replace ECM module/board |
| Fan runs in ON but not AUTO | Thermostat "G" wiring or fan setting | Check fan setting, replace batteries | Repair thermostat wiring |
| Blower dead after overheating | Limit trip / lockout + airflow fault | Replace filter, open registers | Find/fix airflow or blower fault |

## Repair costs

- **Reseat panel / thermostat setting / filter:** $0 DIY.
- **Thermostat batteries or new filter:** $10–$40.
- **Run capacitor (PSC models):** $150–$350 installed.
- **Control-board fuse or blower relay repair:** $200–$450 (fuse alone is cheap; a full board is more).
- **Control board replacement:** $400–$1,000+ — variable-speed and communicating Trane boards sit at the high end of that range.
- **ECM motor module:** $450–$900 installed, depending on the motor it serves.
- **Full blower motor replacement:** $450–$900 installed for a single-speed PSC motor; **$800–$1,600+** installed for a variable-speed ECM motor of the type used on XV/XC-series furnaces.
- **Diagnostic / service call:** $90–$180, often credited toward the repair.

Prices vary by region, model tier, and whether parts are under Trane's warranty — variable-speed ECM parts run at the higher end, so a four-figure quote on an XV or XC furnace is not automatically a red flag.

## Related codes

- **Trane Furnace Blower Won't Shut Off: Causes & Fixes** — the opposite fault, when the blower runs continuously.
- **Trane Furnace 4 Flashes: Open Limit Circuit Causes & Fixes** — the high-limit trip that often follows a stalled blower.
- **Trane Furnace Blowing Cold Air: Causes, Fixes & Costs** — blower running but no heat.
- **Trane Furnace Won't Turn On: Causes, Fixes & Costs** — when nothing responds at all.
- **Trane Furnace Short Cycling: Causes, Fixes & Costs** — for repeated limit-related shutdowns.
