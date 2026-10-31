---
title: Game Modes
---

TONX currently offers 5 game modes. You can switch between them in the lobby settings under **Mode Options**.

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

> **Note:** Role Draft selects a main role for each player, then assigns add-ons according to the room's add-on settings. Director Mode can still be used to pre-assign roles.

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

---

## Hot Potato

Players begin as **Cold Potatoes**. At the end of each countdown, the current Hot Potatoes explode and are eliminated; a new group of living players receives the Hot Potato. The number of Hot Potatoes is limited by a lobby setting and automatically reduced in smaller lobbies. The last survivor wins. Body reports are disabled.

Press kill on a Cold Potato to pass the Hot Potato to them and become Cold yourself; the transfer does not kill anyone. Everyone can see the holders. The first distribution follows a preparation period of the explosion countdown plus 9 seconds; subsequent rounds use the configured countdown. Players spawn randomly, move at 1.75x speed, receive no add-ons, and cannot vent or sabotage.

### Settings

| Setting | Description |
| ------- | ----------- |
| Maximum Hot Potatoes | Maximum number assigned at each explosion (1-64, default 2); the game reduces this for smaller groups |
| Explosion Countdown | Time between Hot Potato explosions (10-60s, default 15s) |

---

## Doom Tag

Every player is assigned a target in a cycle. Kill your target to inherit their target and continue hunting. Attacking someone else triggers the configured punishment: with suicide, the attack proceeds and the attacker dies shortly afterward; with reduced vision, the attack is blocked and the attacker keeps the vision penalty. When the living player count reaches the frenzy threshold, all survivors enter Frenzy mode with the configured movement speed and kill cooldown (faster movement and shorter cooldown by default). The last survivor wins. No add-ons are assigned; players cannot vent or sabotage.

### Settings

| Setting | Description |
| ------- | ----------- |
| Base Kill Cooldown | Kill cooldown outside Frenzy (2.5-60s, default 15s) |
| Wrong Target Punishment | Suicide (default) or reduced vision |
| Reduced Vision Multiplier | Vision multiplier applied after a wrong-target kill (0-10x, default 0.5x) |
| Frenzy Player Count | Living-player threshold that activates Frenzy (1-127, default 3; at least 2 survivors are required) |
| Frenzy Kill Cooldown | Kill cooldown during Frenzy (2.5-60s, default 5s) |
| Frenzy Speed Multiplier | Multiplier relative to the lobby's initial speed (0.25-10x, default 2x) |
| Show Target Arrow | Whether to display an arrow pointing to your target (off by default) |
