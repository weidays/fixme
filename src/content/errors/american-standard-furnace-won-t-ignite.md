---
title: "American Standard Furnace Won't Ignite: Causes & Fixes"
code: "Won't ignite"
description: "American Standard furnace won't ignite? Read the LED code, rule out thermostat, filter, vent and condensate issues, and see 2026 repair costs."
brand: american-standard
equipment: furnace
severity: pro
costRange: "$0 DIY – $1,200+ if the control board or gas valve needs replacement"
appliesTo: "American Standard gas furnaces with a hot surface igniter and an integrated control board with a diagnostic LED, including the Silver, Gold and Platinum series in 80% and 90%+ AFUE versions. LED flash meanings, the number of ignition retries and lockout timing vary by board revision, so check the label on the blower door for your unit."
tags:
  - furnace
  - no-heat
  - ignition
  - hot-surface-igniter
  - lockout
  - american-standard
parts:
  - name: "Furnace air filter (match the size printed on your current filter)"
    search: "furnace air filter MERV 8"
  - name: "AA or AAA thermostat batteries"
    search: "AA alkaline batteries thermostat"
faq:
  - q: "Why won't my American Standard furnace ignite?"
    a: "The control board has to prove several things before it opens the gas valve. It needs a heat call from the thermostat, a closed limit switch, a running inducer, a closed pressure switch and a glowing igniter. If any step fails, the furnace never lights. The blinking LED on the board tells you which step failed."
  - q: "Does the furnace reset itself after a failed ignition?"
    a: "On most American Standard boards, the furnace retries ignition a few times and then goes into lockout. Many boards clear that lockout on their own after about an hour. Turning the power off and back on clears it right away. Do that only once. If it locks out again, call a technician."
  - q: "Is it dangerous if the furnace keeps clicking but never lights?"
    a: "Repeated failed ignition is a safety shutdown, not an emergency in itself. If you smell gas, the situation is different. Do not touch switches. Leave the house and call your gas utility's emergency line or 911 from outside."
  - q: "Can I clean the flame sensor or replace the igniter myself?"
    a: "Both parts are inside the burner compartment, next to gas and high-voltage components. The igniter is fragile and the flame sensor needs a proper microamp test. Treat both as technician jobs. A tech can usually handle either one in a single visit."
datePublished: 2026-11-22
dateModified: 2026-11-22
reviewedBy: ""
---

## What this code means

"Won't ignite" is a symptom, not a single fault code. It means the furnace never gets to a burner flame.

On an American Standard furnace, the control board runs the same sequence every time the thermostat calls for heat:

1. The inducer motor starts.
2. The pressure switch closes.
3. The hot surface igniter heats up.
4. The gas valve opens.
5. The flame sensor proves the flame.

If any step fails, the board stops and stores a fault. The green or red LED, visible through the small window in the blower door, blinks out what happened. Each LED pattern has its own dedicated page (see Related codes at the bottom).

This page is for two situations:
- You haven't read the LED yet.
- The LED shows normal standby, but you still get no heat.

Cases with no fault code are usually caused by one of these:
- The thermostat isn't calling for heat.
- The furnace has no power.
- The blower door is not seated. The door safety switch then cuts power to the board, so the LED is dark too.
- The board is in a timed lockout.

**About lockout and reset.** After repeated failed ignition attempts, most American Standard boards enter lockout. The number of tries varies by board, typically three or four. Many boards retry automatically after about one hour. Cycling power clears the lockout immediately. Behavior differs between board revisions, so check the wiring and diagnostic label on your unit's door.

**If you smell gas:** do not operate switches or the thermostat. Leave the home and call your gas utility's emergency line or 911 from outside.

## Common causes, ranked by probability

1. **Thermostat not calling for heat.** Common reasons are dead batteries, the wrong mode, a schedule override, or a tripped furnace switch or breaker. The board never starts the sequence, so nothing happens and no fault code appears.
2. **Blower door not seated.** The door switch opens, the board has no power and the LED is dark. This often happens right after a filter change.
3. **Restricted venting or a blocked condensate drain (90%+ models).** Snow, ice, leaves or nests in the exterior PVC intake or exhaust can stop the pressure switch from closing. So can a clogged condensate trap. The inducer runs but the igniter never glows. This usually shows as 3 flashes.
4. **Failed hot surface igniter.** These are cracked or worn silicon carbide or silicon nitride elements. The inducer runs, then the furnace tries and fails to light and eventually locks out. This usually shows as 2 flashes, or 9 flashes on boards that monitor the igniter circuit.
5. **Gas not reaching the burners.** Possible reasons:
   - The manual gas valve was closed during other work.
   - The utility supply is interrupted.
   - The furnace gas valve has failed, or its circuit is faulted. A gas valve circuit fault shows as 7 flashes.
6. **Overheating from a dirty filter or blocked airflow.** The high limit opens and the board won't fire the burners. This shows as 4 flashes.
7. **Control board failure.** The board has no output to the inducer, igniter or gas valve even though its inputs are correct. A technician confirms this only after ruling out everything above.

Some problems light the burners and then shut them off within seconds, such as a dirty flame sensor. That is "won't stay lit," not "won't ignite." It is covered under 2 flashes and 8 flashes.

## Safe checks before you call anyone

- **Thermostat.**
  - Set it to HEAT, a few degrees above room temperature, with the fan on AUTO.
  - Replace the batteries if the display is blank or shows a low-battery icon.
  - Turn off any schedule or hold that might be keeping the setpoint low.
- **Breaker and furnace switch.**
  - Check the furnace breaker in the panel. Reset it once if it has tripped.
  - Check the light-style switch on or near the furnace and make sure it is ON.
- **Blower door.** Make sure the lower panel is fully seated and latched, so the door switch is pressed in.
- **Air filter.** Replace it if it is dirty. A clogged filter can trip the limit switch.
- **Vents and registers.**
  - Open supply registers and clear return grilles.
  - On 90%+ models, look at the two exterior PVC pipes. Gently clear snow, ice, leaves or debris from the outside only. Do not reach into the pipes or take them apart.
- **Condensate line.** On 90%+ models, look for a kinked or disconnected drain hose, or water pooling around the furnace. Fix only kinks or blockages you can see in the external drain line.
- **Read the LED.**
  - Look through the blower door window and count the flashes before you cut power. Cutting power erases the current indication on many boards.
  - Write the number down. It saves the technician time.
- **One reset.** Turn the furnace switch off for 30 seconds, then back on, and let it try one full cycle. If it fails again, stop and call a technician.

Do not remove internal panels, jump switches, open or close gas valves, or keep resetting a furnace that has locked out.

## How a technician will diagnose it

A competent technician will work through the ignition sequence in order:

1. **Read the stored or active fault code.** Many newer boards keep a fault history.
2. **Confirm power and the call for heat.** The tech checks for 120V at the board, 24V at the transformer, and a heat signal on the W terminal from the thermostat.
3. **Check the safety circuits.**
   - Limit switch and rollout switch continuity.
   - Door switch.
4. **Check the inducer and pressure switch.**
   - Confirm the inducer runs.
   - Measure draft with a manometer.
   - Inspect the pressure switch hose, the condensate trap and the vent termination.
5. **Test the igniter.** The tech confirms the igniter glows and measures its resistance against the specification for that part.
6. **Check gas delivery.** The tech confirms voltage to the gas valve during the trial for ignition, then measures inlet and manifold gas pressure.
7. **Test flame sensing**, if the burners light briefly. This means a microamp reading and a sensor cleaning.
8. **Condemn the board last**, only when all inputs are correct and an output is missing.

A quote to "replace the board" without testing the igniter, pressure switch and gas valve first deserves a second opinion.

## Symptom, cause and what to do

| Symptom | Likely cause | DIY action | Technician job |
|---|---|---|---|
| Nothing happens, LED dark | No power, or the door switch is open | Check the breaker and switch, and seat the blower door | Test the door switch, fuse and transformer |
| Nothing happens, LED shows normal standby | No heat call from the thermostat | Set the thermostat to HEAT and replace its batteries | Check thermostat wiring and the W signal |
| Inducer runs, no igniter glow (3 flashes) | Pressure switch not closing | Clear exterior vents and check the condensate line | Test draft and clear the trap, hose or vent |
| Igniter glows, no flame (2 flashes) | No gas, or the gas valve isn't opening | Do one reset only | Check gas pressure and valve voltage, and replace the valve if needed |
| No glow, inducer runs (2 or 9 flashes) | Failed igniter or igniter circuit fault | Do one reset only | Test and replace the igniter or its wiring |
| 4 flashes, no ignition | Limit switch open from overheating | Replace the filter and open registers | Check airflow and the blower, and test the limit |
| 7 flashes | Gas valve circuit fault | None | Diagnose the valve and its wiring |
| All inputs fine, no outputs | Control board failure | None | Replace the board |

## Repair costs

These are typical 2026 US prices, parts plus labor:

| Repair | Typical cost |
|---|---|
| Thermostat batteries, filter, breaker reset | $0–$40 DIY |
| Service call and diagnosis | $90–$200 (often credited toward the repair) |
| Clear a condensate trap or vent blockage | $100–$250 |
| Hot surface igniter replacement | $150–$400 |
| Flame sensor cleaning or replacement | $90–$250 |
| Pressure switch replacement | $150–$400 |
| Limit or rollout switch | $150–$350 |
| Inducer motor | $400–$900 |
| Gas valve | $350–$900 |
| Integrated control board | $400–$1,200+ |

Factors that raise the price:
- After-hours or weekend visits
- Hard-to-reach attics
- OEM-only parts for communicating systems

Factors that can lower it: parts still under warranty. Many American Standard units carry a 10-year registered parts warranty, which can cut the bill to labor only.

## Related codes

- American Standard Furnace 2 Flashes: Causes & Fixes
- American Standard Furnace 3 Flashes: Causes & Fixes
- American Standard Furnace 4 Flashes: Open Limit Circuit
- American Standard Furnace 5 Flashes: Flame With Gas Off
- American Standard Furnace 6 Flashes: Reversed Polarity Fix
- American Standard Furnace 7 Flashes: Gas Valve Circuit
- American Standard Furnace 8 Flashes: Low Flame Sense
- American Standard Furnace 9 Flashes: Igniter Circuit Fix
