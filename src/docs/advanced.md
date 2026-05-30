---
title: Advanced Tutorial
---

## HotKeys

| Hotkeys                                            | To                                       | Access                 |
| -------------------------------------------------- | ---------------------------------------- | ---------------------- |
| <kbd>F11</kbd>                                     | Switch resolution                        | Mod                    |
| <kbd>Alt</kbd> + <kbd>Enter</kbd>                  | Toggle full-screen / window              | PC                     |
| <kbd>F5</kbd> + <kbd>T</kbd>                       | Reload custom translation files          | Mod                    |
| <kbd>F5</kbd> + <kbd>X</kbd>                       | Export custom translation files          | Mod                    |
| <kbd>Ctrl</kbd> + <kbd>F1</kbd>                    | Dump log file to desktop                 | Mod                    |
| <kbd>Ctrl</kbd> + <kbd>F2</kbd>                    | Toggle in-game log output                | Mod                    |
| <kbd>Alt</kbd> + <kbd>C</kbd> (Lobby)             | Copy current game settings as text       | Mod                    |
| <kbd>Alt</kbd> + <kbd>O</kbd> (Lobby)             | Save settings to clipboard               | Mod                    |
| <kbd>Alt</kbd> + <kbd>L</kbd> (Lobby)             | Save settings to file                    | Mod                    |
| <kbd>Alt</kbd> + <kbd>P</kbd> (Lobby)             | Load settings from clipboard             | Mod                    |
| <kbd>F10</kbd>                                     | Open game root directory                 | Mod                    |
| <kbd>F1</kbd>                                      | Show/hide role info panel                | Mod & In Game          |
| <kbd>Ctrl</kbd>+<kbd>Right Click</kbd>             | Kill the selected player                 | Host & Meeting         |
| <kbd>Shift</kbd> + <kbd>C</kbd> + <kbd>Enter</kbd> | Force-show chat bubble                   | Host & In Game         |
| <kbd>Shift</kbd> + <kbd>L</kbd> + <kbd>Enter</kbd> | Force end game                           | Host & In Game         |
| <kbd>Shift</kbd> + <kbd>M</kbd> + <kbd>Enter</kbd> | Force start / end meeting                | Host & In Game         |
| <kbd>Shift</kbd>                                   | Start game immediately                   | Host & Countdown       |
| <kbd>C</kbd>                                       | Reset start countdown                    | Host & Countdown       |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd>+ <kbd>N</kbd>   | Show description of current game options | Host                   |
| <kbd>Ctrl</kbd>+ <kbd>N</kbd>                      | Show current game settings               | Host                   |
| <kbd>Ctrl</kbd>+ <kbd>Delete</kbd>                 | Reset TONX options to default            | Host & Lobby           |
| <kbd>Shift</kbd> + <kbd>E</kbd> + <kbd>Enter</kbd> | Suicide                                  | Host & In Game         |
| <kbd>Shift</kbd> + <kbd>D</kbd> + <kbd>Enter</kbd> | Open all doors (Airship)                 | Host & Debug & In Game |
| <kbd>Shift</kbd> + <kbd>K</kbd> + <kbd>Enter</kbd> | Set kill cooldown to 0 sec               | Host & Debug & In Game |
| <kbd>Shift</kbd> + <kbd>T</kbd> + <kbd>Enter</kbd> | Complete all tasks                       | Host & Debug & In Game |
| <kbd>Y</kbd>                                       | Sync all options via RPC                 | Host & Debug & In Game |
| <kbd>G</kbd>                                       | Show intro animation                     | Host & Debug & In Game |
| <kbd>=</kbd>                                       | Toggle task display status               | Host & Debug & In Game |
| <kbd>I</kbd>                                       | Print current coordinates to log         | Host & Debug & In Game |

## Chat Commands

> **Important:** All commands must be prefixed with `/cmd` (e.g. `/cmd id` instead of `/id`).

| Command                              | Function                                   | Access    |
| ------------------------------------ | ------------------------------------------ | --------- |
| `/cmd dump`                          | Output log file to desktop                 | Mod       |
| `/cmd v` / `ver` / `version`         | Check all players' mod versions            | Mod       |
| `/cmd win` / `winner`                | Show last game winners                     | Everyone  |
| `/cmd l` / `lastresult`              | Show last game result                      | Everyone  |
| `/cmd rn` / `rename [name]`          | Change your name                           | Host      |
| `/cmd hn` / `hidename [text]`        | Override lobby code display                | Host      |
| `/cmd level [level]`                 | Set your game level (1-999)                | Host      |
| `/cmd r` / `role`                    | Show all enabled roles                     | Everyone  |
| `/cmd r [role]`                      | Show specific role description             | Everyone  |
| `/cmd n` / `now`                     | Show current game settings                 | Everyone  |
| `/cmd n r` / `now roles`             | Show all enabled roles                     | Everyone  |
| `/cmd dis` / `disconnect crew/imp`   | Force game end by crew/impostor disconnect | Host      |
| `/cmd up` / `specify [role]`         | Director Mode — set your own role          | Host      |
| `/cmd h` / `help`                    | Show command list                          | Everyone  |
| `/cmd m` / `myrole`                  | Show your role description                 | Everyone  |
| `/cmd t` / `template [name]`         | Send template message                      | Mod       |
| `/cmd mw` / `messagewait [sec]`      | Set message send interval limit            | Host      |
| `/cmd exile [player id]`             | Exile specified player                     | Host      |
| `/cmd kill [player id]`              | Kill specified player                      | Host      |
| `/cmd color` / `colour [color]`      | Change your color                          | Everyone  |
| `/cmd qt` / `quit [confirm id]`      | Permanently quit this lobby                | Everyone  |
| `/cmd id`                            | Show all player IDs                        | Everyone  |
| `/cmd end` / `endgame`               | Force end game                             | Host      |
| `/cmd hy` / `mt` / `meeting`         | Force start or end meeting                 | Host      |
| `/cmd cosid`                         | Print outfit IDs to log (debug)            | Host      |
| `/cmd qq` / `dc`                     | Share lobby code to Discord                | Host      |
| `/cmd sign`                          | Verify signature (mod integrity)           | Mod       |

## Welcome & onMeeting auto messages

Open the root directory of game，find `..\Among Us\TONX_DATA\template.txt` file.

You can see that there are `welcome`, `OnMeeting` and other words in the file, where `welcome` is the message that will be sent when other players enter your lobby, and `OnMeeting` is the message that will be sent when each meeting starts. Where `\n` means newline. While we fully allow you to modify these files as you please, please try not to modify the format of this file to avoid game errors.

## Ban list & baned words & baned name

Open the root directory of game: `..\Among Us\TONX_DATA\`

there are four files:

- BanList.txt  -  banned players（friendcode）
- BanWords.txt  -  banned words
- DenyName.txt  -  banned name
- template.txt  -  message template（[above](#Welcome & onMeeting auto messages)）
