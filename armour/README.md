# Armour code blocks

One file per armour set, named after the set, ending in its buy call:
`buyArmourById(playerId, "<id>")` in
[voidbound-world-code.js](../voidbound-world-code.js).

P is protection, H is health and R is health regen. Each purchase is the
whole set: Military Helmet, Military Chestplate, Military Leggings, Military Boots.
These are not survival armour, so the only way to get a set is from here.

In game: `/armour` lists the sets, `/armour buy <id>` buys all four
pieces, and `/armour wear <id>` turns on the set ability.

| Set | P / H / R | Ability | Price | Unlocks at | Block |
|---|---|---|---|---|---|
| Fighter | 3 / 3 / 3 | Bloodlust | 3,000 | level 3, 30 kills, 2h | [fighter.js](fighter.js) |
| Hunter | 4 / 4 / 4 | Stalker | 4,000 | level 4, 40 kills, 3h | [hunter.js](hunter.js) |
| Elite | 4 / 2 / 4 | Second Wind | 5,500 | level 5, 50 kills, 4h | [elite.js](elite.js) |
| King | 5 / 3 / 3 | Royal Aura | 7,000 | level 6, 60 kills, 5h | [king.js](king.js) |

## Keeping them right

Stats, prices and abilities live only in the `ARMOUR` table of
`voidbound-world-code.js`. Regenerate from it:

```
node armour/generate.js
node armour/generate.js --check
```
