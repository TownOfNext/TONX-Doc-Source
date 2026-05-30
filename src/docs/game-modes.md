---
title: Game Modes
---

TONX currently offers 3 game modes. You can switch between them in the lobby settings under **Mode Options**.

## Standard

The default TONX game mode. Roles are assigned according to the host's role settings, including all custom roles, add-ons, and vanilla roles. Add-ons are assigned on top of main roles. This is the classic TONX experience with crewmate vs impostor vs neutral gameplay.

> This is the default mode and requires no special configuration beyond the standard role options.

---

## Role Draft

In Role Draft mode, instead of roles being randomly assigned, players take turns choosing their role from a set of randomized options. The draft happens during a special meeting at the start of the game.

### How It Works

1. At the start of the game, a meeting is automatically called
2. Players are arranged in random order and take turns drafting
3. On your turn, you receive a list of role options (configurable count, default 3) plus a "Random" option
4. Use `/cmd ch [number]` to select your desired role
5. If time runs out, a role is automatically chosen for you
6. After everyone has picked, the meeting ends and the game begins normally

### Commands

| Command | Function |
| ------- | -------- |
| `/cmd ch` / `/cmd choose` | Show your available role options |
| `/cmd ch [number]` | Select a role by its number (e.g. `/cmd ch 2`) |

### Settings

| Setting | Description |
| ------- | ----------- |
| Number of Options | How many role choices each player gets (2-5, default 3) |
| Drafting Time | Time limit per player to choose (15-60s, default 25s) |
| Show Players Selections | Whether to announce each player's chosen role to everyone |

> **Note:** Add-ons are not assigned in Role Draft mode. Director Mode can still be used to pre-assign roles.

---

## Solo PVP

In Solo PVP mode, there are no teams and no role assignments. Every player becomes a **Challenger** with HP (health points) and ATK (attack power). Everyone can use the kill button to deal damage to other players. The player with the highest score when time runs out wins.

### How It Works

- All players spawn with the same HP and ATK
- Hitting a player with the kill button deals ATK damage to their HP
- When a player's HP reaches 0, they die and the killer gets a score bonus
- Dead players respawn after a configurable waiting time
- HP slowly recovers over time after not taking damage for a while
- The game ends when the timer runs out; highest score wins

### Task Panel Display

During the game, the task panel shows:
- Your current ATK, DF (defense), and RCO (HP recovery rate)
- A live scoreboard of all players ranked by score

### Kill Bonus

Each kill grants a score multiplier bonus, increasing the killer's ATK and HP recovery, making them stronger as they rack up kills.

### Settings

| Setting | Description |
| ------- | ----------- |
| Game Duration | Total game time (30-300s, default 180s) |
| Default HP | Starting health for all players (10-990, default 100) |
| Default Attack | Damage per hit (1-100, default 8) |
| Attack Cooldown | Time between attacks (1-10s, default 1s) |
| Recover Cooldown | Seconds without taking damage before HP regen starts (0-60s, default 8s) |
| Recover Per Second | HP recovered per second (1-180, default 2) |
| Resurrection Waiting Time | Time before dead players respawn (5-990s, default 15s) |
| Kill Bonus Multiplier | Score/stat multiplier per kill (0.25x-5x, default 1.25x) |
