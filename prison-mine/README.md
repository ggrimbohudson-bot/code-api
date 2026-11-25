# Voidgate Prison — Prison Mine (UI + leaderboard)

A Lifeboat-style prison mine front end for Bloxd **World Code**, built as a
preview: the whole presentation layer and the leaderboard are wired, the mining
loop is not.

The only file you need in game is
[prison-mine-world-code.js](prison-mine-world-code.js). Paste all of it into
World Code (F8). It is self-contained.

## What is here

| Surface | How it renders |
|---|---|
| Currency | `Tokens` on the HUD (`setCurrency`) |
| Header chips | rank, blocks, tier (`headerChips`) |
| Side panel | rank, pickaxe, tokens, blocks, streak, rank progress bar, top three, your place, keys (`RightInfoText`) |
| Custom buttons | M mines, R ranks, L leaderboard, V sell (`customButtons`) |
| Shop UI | six tabs: MINES, RANKS, PICKAXES, SELL, LEADERBOARD, HOW TO PLAY |
| Native leaderboard | INMATE / BLOCKS / TOKENS / TIER / STREAK (`lobbyLeaderboardInfo` + values) |
| Board page | top twelve ranked rows with your placement pinned first |

Press **B** to open the shop UI, or use the four keybinds.

## Rank ladder

| Rank | Mine | Ores | Sell bonus | Price | Blocks needed |
|---|---|---|---|---|---|
| E | Gravel Yard | Coal, Iron | +0% | Free | 0 |
| D | Iron Rail | Iron, Gold | +5% | 2,500 | 750 |
| C | Quartz Grotto | Gold, Quartz | +10% | 8,000 | 3,000 |
| B | Lapis Deep | Lapis, Diamond | +18% | 22,000 | 8,000 |
| A | Diamond Vault | Diamond, Emerald | +26% | 55,000 | 18,000 |
| S | Warden's Reserve | Emerald, Obsidian | +36% | 130,000 | 40,000 |
| SS | The Black Cell | Obsidian, Crystal | +50% | 300,000 | 90,000 |
| X | Free World | Everything | +75% | 750,000 | 200,000 |

Pickaxes: Warden's Wood → Rusty Stone → Cell Iron → Guard's Gold →
Diamond Ripper → Moonstone Edge → Golem Breaker.

## The leaderboard

Three views of one table:

1. **Native lobby leaderboard** — real players only. Each join writes
   `lobbyLeaderboardValues` (blocks, tokens, tier, streak) and a rank colour.
   Columns are sorted descending, so blocks mined is the primary score.
2. **Side panel** — top three inmates plus your own placement.
3. **LEADERBOARD shop page** — your placement tile followed by twelve ranked
   rows, one per slot, with medals for the top three.

### Sample data

`SAMPLE` in the world code holds nine fictional inmates (WardenKane,
Inmate_0421, xVexx, ...). They give the panel and the board page a real
ranking before the mining loop exists: a fresh player sits at **#10** with the
3,120-block demo profile. Delete the `SAMPLE` entries when real stats arrive;
`rankedEntries()` merges sample rows and real players in one sort.

The native lobby leaderboard cannot show fake players — it only lists players
in the room — so it starts with just the people who joined.

## This build is a preview

Live: menus, tabs, HUD, side panel, custom buttons, rank/pickaxe/sell/board
pages, leaderboard ranking, all four keybinds, panel and board refresh.

Not wired: mining, ore collection, selling, rank purchases, pickaxe purchases,
saving. Every tile that would change progress is `canBuy: false`, and the few
preview tiles that can be pressed answer with a `PREVIEW BUILD` message instead.
Nothing spends tokens and nothing persists.

The demo profile starts at C-Block with an iron pickaxe, 12,480 tokens, 3,120
blocks and a 7 streak so every page has content to show. It is set in `CFG`.

## Where the real loop goes

The `GAMEPLAY HOOKS — NOT WIRED` block at the bottom of the world code lists
the exact insertion points:

- `onPlayerChangeBlock` → count ore, increment blocks, refresh the panel
- `onPlayerBoughtShopItem` for `pm_sell` → convert `oreInBag` to tokens with
  the rank bonus, then `syncTokens` / `syncNativeBoardRow`
- rank purchase → check `blocks` and `tokens`, deduct, `tier++`, re-render
- pickaxe purchase → deduct, `pick++`, apply swing speed
- `setPlayerDbValue` / `getPlayerDbValue` → save `P[playerId]` between sessions

## Checks

```
node prison-mine/check.js
```

Loads the world code against a stub `api` and asserts the six shop pages, the
per-player tiles, the ranking order, button wiring, panel content and callbacks
all build without errors. It is a load harness, not a gameplay test.
