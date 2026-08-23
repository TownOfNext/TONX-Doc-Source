---
title: Game Modes
---

TONX comes with several built-in game modes. The host can switch between them via the "Game Mode" option in the lobby. Currently, the following three modes are supported:

- [Standard Mode](#standard-mode)
- [SoloKombat Mode](#solokombat-mode)
- [Role Draft Mode](#role-draft-mode)

## Standard Mode

Standard mode is the default game mode of TONX. All roles, add-ons, and regular game settings are assigned according to the lobby options.

In this mode, the host can freely enable or disable any role and add-on, and the system automatically assigns factions and counts based on the settings. Aside from that, Standard mode has no extra special rules and plays the same as the extended version of vanilla Among Us.

## SoloKombat Mode

SoloKombat mode is a signature PVP mode of TONX. No roles are assigned in this mode; instead, every player becomes a "Challenger" and has their own health (HP). Players can use the kill button to deal damage to others, and the player with the highest number of kills (score) at the end of the game wins.

### Options

| Option | Description |
| --- | --- |
| Game Duration | Total duration of the match (seconds) |
| Default HP | The health a player starts with |
| Default Attack | Damage dealt per attack |
| Recover Cooldown | Time to wait after taking damage before health recovery begins |
| Recover Per Second | Amount of health recovered per second |
| Resurrection Waiting Time | Wait time before a killed player is revived |
| Kill Bonus Multiplier | HP bonus multiplier gained when killing another player |
| Attack Cooldown | Cooldown of the kill button |

### Player Panel

On the task panel, players can see their attack, defense, and per-second recovery in real time, as well as the current score ranking of all players.

## Role Draft Mode

Role Draft mode is a unique role-selection gameplay of TONX. After the game starts, all players draft their own roles one by one during a meeting, instead of being directly assigned by the system.

### Draft Process

1. A "draft meeting" is automatically called when the game starts.
2. The system lets each player pick from several random roles in seat order.
3. Each player has a fixed number of role options (set by the host) and must choose within a time limit.
4. If a player times out, the system automatically picks a random role for them.
5. Once every player has chosen, the meeting ends and the game officially begins.

### Options

| Option | Description |
| --- | --- |
| Number of Options | How many random role options each player sees per turn |
| Drafting Time | Time limit for each player to make a selection (seconds) |
| Show Players Selections | Whether to display the roles chosen by other players in the public chat |

### Commands

- `/cmd ch [ID]`: Select the role with the specified ID from the current options (IDs start from 1)
- `/cmd ch`: Randomly select one from the current options