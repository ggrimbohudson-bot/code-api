# Weapon code blocks

One file per weapon, named after the weapon, ending in its buy call:
`buyWeaponById(playerId, "<id>")` in
[voidbound-world-code.js](../voidbound-world-code.js).

In game the same call is `/weapon buy <id>`, and `/weapons` lists every
weapon with the price and what you still need. D is damage, S is attack
speed and C is critical damage.

| Weapon | Kind | D / S / C | Price | Unlocks at | Block |
|---|---|---|---|---|---|
| Killer | sword | 3 / 3 / 4 | 2,500 | level 3, 25 kills, 2h | [killer.js](killer.js) |
| Combo | whip | 2 / 5 / 2 | 3,500 | level 4, 40 kills, 3h | [combo.js](combo.js) |
| Crit Killer | club | 2 / 3 / 5 | 4,500 | level 5, 60 kills, 4h | [critkiller.js](critkiller.js) |
| Goblin | spear | 4 / 5 / 3 | 6,000 | level 6, 80 kills, 5h | [goblin.js](goblin.js) |

## Keeping them right

Stats, prices and requirements live only in the `WEAPONS` table of
`voidbound-world-code.js`. Regenerate these files from it:

```
node weapons/generate.js
node weapons/generate.js --check
```

`--check` exits non-zero when a file here no longer matches the table.
