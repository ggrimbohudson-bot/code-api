# Crate code blocks

No crate menu and no dealer: crates are sold by code. Each file in this
folder is the buy block for one crate, and every one of them ends in
`buyCrateById(playerId, "<id>")`, which lives in
[voidbound-world-code.js](../voidbound-world-code.js).

In game the same call is reachable as `/crate buy <id>`, and `/crates`
lists every id. Because there is exactly one seller, the price is charged
once however a crate is bought.

| Crate | id | Price | Block |
|---|---|---|---|
| Void Crate | `void` | 250 | [crates/void.js](void.js) |
| Eclipse Crate | `eclipse` | 750 | [crates/eclipse.js](eclipse.js) |
| Geo Crate | `geo` | 1200 | [crates/geo.js](geo.js) |
| Serpentite Crate | `serpentite` | 1800 | [crates/serpentite.js](serpentite.js) |
| Nova Crate | `nova` | 2000 | [crates/nova.js](nova.js) |
| Astral Crate | `astral` | 3600 | [crates/astral.js](astral.js) |
| Mythic Crate | `mythic` | 5000 | [crates/mythic.js](mythic.js) |
| Sanguine Crate | `sanguine` | 8000 | [crates/sanguine.js](sanguine.js) |
| Voidbound Crate | `voidbound` | 25000 | [crates/voidbound.js](voidbound.js) |

## Keeping them right

Prices, odds and names live only in the `CRATES` table of
`voidbound-world-code.js`. Regenerate these files from it:

```
node crates/generate.js
node crates/generate.js --check
```

`--check` exits non-zero when a file here no longer matches the table.
