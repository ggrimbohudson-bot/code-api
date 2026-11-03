# Prestige

BloxdSeno stands at **50011.5 60001 49999.5**, facing negative X. Right-click him
in game to open the Prestige menu, or use `/prestige`.

- At **level 1000** you can prestige. The world code takes your level back to 1 and
  gives you **one prestige shard**.
- **1 shard = +5%** to one stat. You choose which: `/prestige speed|damage|health|xp`
  or the four buttons in the menu.
- **Each stat takes at most 10 shards (a 50% bonus).** Once a stat reads MAX the
  menu will not sell it another, so spare shards go into the other three.
- **Prestige caps at 40.** The level cap stays at 1000 until you have prestiged 40
  times - after that there is no level cap at all.
- Quests give at least half a level of XP, so a repeatable bounty keeps levelling
  you forever and reaching 1000 is a matter of grinding them.

| Stat | +5% per shard | 10 shards (max) | Applied as |
|---|---|---|---|
| Speed | movement speed | x1.5 | `speedMultiplier` |
| Damage | damage dealt | x1.5 | `dealingDamageMultiplier` |
| Health | max health | 150 HP | `maxHealth` |
| XP | every XP gain | x1.5 | world code `addXp` |

10 shards in every stat is 40 shards, exactly the 40 shards from 40 prestiges.

## The code blocks

These files are optional standalone blocks that re-apply one stat from the
shared save (`vb_player_v1`). The world code already applies all four on join,
so you only need them if you want a separate block per stat - for a lobby
display, a code block terminal, or a shop that shows the current number.

Paste one file's contents into a Bloxd code block. Pressed with a player in the
world it reads their prestige and applies that stat:

| File | Applies |
|---|---|
| [speed.js](speed.js) | `speedMultiplier` |
| [damage.js](damage.js) | `dealingDamageMultiplier` |
| [health.js](health.js) | `maxHealth` |
| [xp.js](xp.js) | reports the XP multiplier (XP itself is granted by the world code) |
