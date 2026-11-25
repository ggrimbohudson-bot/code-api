// ============================================================================
//  VOIDGATE PRISON — PRISON MINE
//  UI + LEADERBOARD SHELL  ·  PREVIEW BUILD
//
//  Paste this whole file into World Code (F8).
//
//  This build is the front end of a Lifeboat-style prison mine: the rank
//  ladder, the HUD, the side panel, the custom buttons, six shop pages and a
//  ranked leaderboard. Mining, selling, ranking up and buying are NOT wired.
//  Anything that would change progress answers with a preview notice instead.
//  The GAMEPLAY HOOKS section at the bottom marks where the real loop goes.
// ============================================================================

const CFG = {
    CURRENCY_ID: "prison_tokens",
    CURRENCY_NAME: "Tokens",
    CURRENCY_ICON: "coins",
    CURRENCY_COLOUR: "gold",
    PANEL_LIMIT: 1800,
    PANEL_EVERY_MS: 5000,
    BOARD_EVERY_MS: 30000,
    PAGE_ROWS: 12,
    DEMO_TOKENS: 12480,
    DEMO_BLOCKS: 3120,
    DEMO_STREAK: 7,
    DEMO_TIER: 2,
    DEMO_PICK: 2,
};

// ---------------------------------------------------------------------------
//  DATA
// ---------------------------------------------------------------------------

const RANKS = [
    { tier: 0, tag: "E", name: "E-Block", colour: "darkgray", mine: "Mine E — Gravel Yard", ore: "Coal & Iron", oreImage: "Coal Ore", sellBonus: 0, price: 0, need: 0 },
    { tier: 1, tag: "D", name: "D-Block", colour: "lightgreen", mine: "Mine D — Iron Rail", ore: "Iron & Gold", oreImage: "Iron Ore", sellBonus: 5, price: 2500, need: 750 },
    { tier: 2, tag: "C", name: "C-Block", colour: "deepskyblue", mine: "Mine C — Quartz Grotto", ore: "Gold & Quartz", oreImage: "Block of Quartz", sellBonus: 10, price: 8000, need: 3000 },
    { tier: 3, tag: "B", name: "B-Block", colour: "cornflowerblue", mine: "Mine B — Lapis Deep", ore: "Lapis & Diamond", oreImage: "Lapis Lazuli Ore", sellBonus: 18, price: 22000, need: 8000 },
    { tier: 4, tag: "A", name: "A-Block", colour: "mediumorchid", mine: "Mine A — Diamond Vault", ore: "Diamond & Emerald", oreImage: "Diamond Ore", sellBonus: 26, price: 55000, need: 18000 },
    { tier: 5, tag: "S", name: "S-Block", colour: "orange", mine: "Mine S — Warden's Reserve", ore: "Emerald & Obsidian", oreImage: "Emerald Ore", sellBonus: 36, price: 130000, need: 40000 },
    { tier: 6, tag: "SS", name: "SS-Block", colour: "tomato", mine: "Mine SS — The Black Cell", ore: "Obsidian & Crystal", oreImage: "Obsidian", sellBonus: 50, price: 300000, need: 90000 },
    { tier: 7, tag: "X", name: "X-Block", colour: "magenta", mine: "Mine X — Free World", ore: "Everything", oreImage: "Crystal Block", sellBonus: 75, price: 750000, need: 200000 },
];

const PICKS = [
    { tier: 0, name: "Warden's Wood", item: "Wood Pickaxe", speed: 1.0, luck: 0, price: 0, colour: "sandybrown", blurb: "Splinters, but it swings." },
    { tier: 1, name: "Rusty Stone", item: "Stone Pickaxe", speed: 1.25, luck: 2, price: 3000, colour: "darkgray", blurb: "The standard-issue upgrade." },
    { tier: 2, name: "Cell Iron", item: "Iron Pickaxe", speed: 1.55, luck: 5, price: 9000, colour: "lightgray", blurb: "Cuts through the E and D floors." },
    { tier: 3, name: "Guard's Gold", item: "Gold Pickaxe", speed: 1.9, luck: 9, price: 24000, colour: "gold", blurb: "Soft metal, sharp odds." },
    { tier: 4, name: "Diamond Ripper", item: "Diamond Pickaxe", speed: 2.4, luck: 14, price: 60000, colour: "deepskyblue", blurb: "The first pick that feels illegal." },
    { tier: 5, name: "Moonstone Edge", item: "Moonstone Pickaxe", speed: 3.0, luck: 20, price: 140000, colour: "mediumpurple", blurb: "Found in the Black Cell. Don't ask." },
    { tier: 6, name: "Golem Breaker", item: "Golem Pickaxe", speed: 4.0, luck: 30, price: 320000, colour: "orange", blurb: "The Warden's own, taken on release." },
];

const ORES = [
    { name: "Coal", item: "Coal Ore", value: 6 },
    { name: "Iron", item: "Iron Ore", value: 18 },
    { name: "Gold", item: "Gold Ore", value: 42 },
    { name: "Lapis", item: "Lapis Lazuli Ore", value: 70 },
    { name: "Quartz", item: "Block of Quartz", value: 95 },
    { name: "Diamond", item: "Diamond Ore", value: 150 },
    { name: "Emerald", item: "Emerald Ore", value: 200 },
    { name: "Obsidian", item: "Obsidian", value: 280 },
    { name: "Void Crystal", item: "Crystal Block", value: 520 },
];

// Sample inmates so the board has a shape before the real loop exists.
// The native lobby leaderboard can only show real players; this table feeds
// the panel and the in-shop leaderboard page.
const SAMPLE = [
    { name: "WardenKane", tier: 7, blocks: 1284930, tokens: 2934000, streak: 47 },
    { name: "Inmate_0421", tier: 6, blocks: 986410, tokens: 1642000, streak: 31 },
    { name: "xVexx", tier: 5, blocks: 812225, tokens: 1180000, streak: 22 },
    { name: "QuartzRat", tier: 4, blocks: 604880, tokens: 742000, streak: 18 },
    { name: "PickaxePete", tier: 3, blocks: 441190, tokens: 388000, streak: 12 },
    { name: "TunnelTrish", tier: 3, blocks: 318400, tokens: 264000, streak: 9 },
    { name: "CellBlockCee", tier: 2, blocks: 204660, tokens: 151000, streak: 6 },
    { name: "GravelGus", tier: 1, blocks: 96310, tokens: 61000, streak: 3 },
    { name: "NewFishNate", tier: 0, blocks: 12050, tokens: 4200, streak: 1 },
];

const SHOP_CATS = {
    mines: { key: "pm_mines", title: "MINES", blurb: "Every rank unlocks a deeper shaft.", sort: 100 },
    ranks: { key: "pm_ranks", title: "RANKS", blurb: "Trade tokens for a shorter sentence.", sort: 90 },
    picks: { key: "pm_picks", title: "PICKAXES", blurb: "Faster swings, better odds.", sort: 80 },
    sell: { key: "pm_sell", title: "SELL", blurb: "Ore values and the sell bag.", sort: 70 },
    board: { key: "pm_board", title: "LEADERBOARD", blurb: "Season 1 — top inmates by blocks mined.", sort: 60 },
    guide: { key: "pm_guide", title: "HOW TO PLAY", blurb: "The loop, the keys, and this build.", sort: 50 },
};

// ---------------------------------------------------------------------------
//  STATE
// ---------------------------------------------------------------------------

const P = {}; // per-player demo profile
const RT = {}; // per-player runtime bookkeeping

const PANEL_STYLE = {
    gold: "gold",
    rank: "deepskyblue",
    dim: "dimgray",
    label: "gray",
    value: "white",
    accent: "aqua",
    streak: "orange",
};

// ---------------------------------------------------------------------------
//  SMALL HELPERS
// ---------------------------------------------------------------------------

function ensure(playerId) {
    if (!playerId) return null;
    let d = P[playerId];
    if (!d) {
        d = P[playerId] = {
            name: playerName(playerId),
            tokens: CFG.DEMO_TOKENS,
            blocks: CFG.DEMO_BLOCKS,
            streak: CFG.DEMO_STREAK,
            tier: CFG.DEMO_TIER,
            pick: CFG.DEMO_PICK,
            oreInBag: 0,
        };
    }
    return d;
}

function playerName(playerId) {
    try {
        const name = api.getEntityName(playerId);
        return name ? String(name) : "Inmate";
    } catch (e) {
        return "Inmate";
    }
}

function rankOf(d) {
    return RANKS[Math.max(0, Math.min(RANKS.length - 1, d.tier))];
}

function pickOf(d) {
    return PICKS[Math.max(0, Math.min(PICKS.length - 1, d.pick))];
}

function fmtNum(n) {
    const value = Math.floor(Number(n) || 0);
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function fmtShort(n) {
    const value = Math.max(0, Math.floor(Number(n) || 0));
    if (value >= 1000000) return (value / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (value >= 1000) return (value / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    return String(value);
}

function bar(fraction, width) {
    const cells = width || 10;
    let filled = Math.round(Math.max(0, Math.min(1, fraction)) * cells);
    if (filled < 0) filled = 0;
    if (filled > cells) filled = cells;
    let out = "";
    for (let i = 0; i < cells; i++) out += i < filled ? "█" : "░";
    return out;
}

function seg(text, colour) {
    const out = { str: String(text) };
    if (colour) out.style = { color: colour, colour: colour };
    return out;
}

function rule() {
    return seg("\n────────────────", PANEL_STYLE.dim);
}

function say(playerId, text, colour) {
    if (!playerId) return;
    if (!colour) {
        try { api.sendMessage(playerId, text); } catch (e) { }
        return;
    }
    try { api.sendMessage(playerId, text, { color: colour }); } catch (e) { }
}

function richSay(playerId, segments) {
    if (!playerId) return;
    try {
        api.sendMessage(playerId, segments);
        return;
    } catch (e) { }
    let flat = "";
    for (let i = 0; i < segments.length; i++) {
        const part = segments[i];
        if (typeof part === "string") flat += part;
        else if (part && part.str) flat += part.str;
    }
    say(playerId, flat);
}

function previewNote(playerId, what) {
    say(playerId, "PREVIEW BUILD — " + what + " is not wired up yet. The menus, HUD and leaderboard are the game here.", "#ffaa55");
}

// ---------------------------------------------------------------------------
//  PROFILE → HUD
// ---------------------------------------------------------------------------

function syncTokens(playerId) {
    const d = P[playerId];
    if (!d) return;
    try {
        api.setCurrency(playerId, CFG.CURRENCY_ID, {
            amount: Math.floor(d.tokens),
            icon: CFG.CURRENCY_ICON,
            iconColour: CFG.CURRENCY_COLOUR,
            persistent: false,
        });
    } catch (e) {
        try { api.setCurrencyAmount(playerId, CFG.CURRENCY_ID, Math.floor(d.tokens)); } catch (e2) { }
    }
}

function syncChips(playerId) {
    const d = P[playerId];
    if (!d) return;
    const rank = rankOf(d);
    const chips = [
        "⛏ " + rank.tag + "-BLOCK",
        "▦ " + fmtNum(d.blocks) + " BLOCKS",
        "✦ TIER " + (rank.tier + 1) + "/" + RANKS.length,
    ];
    try { api.setClientOption(playerId, "headerChips", chips); } catch (e) { }
}

function panelSegments(playerId) {
    const d = P[playerId];
    const rank = rankOf(d);
    const pick = pickOf(d);
    const next = RANKS[d.tier + 1];
    const entries = rankedEntries();
    const me = placeOf(playerId);

    const out = [];
    out.push(seg("⛏ VOIDGATE PRISON", PANEL_STYLE.gold));
    out.push(seg("\n" + rank.name.toUpperCase(), rank.colour));
    out.push(seg(" · " + pick.name.toUpperCase(), PANEL_STYLE.label));
    out.push(rule());

    out.push(seg("\n◆ " + fmtNum(d.tokens) + " TOKENS", PANEL_STYLE.gold));
    out.push(seg("\n▦ " + fmtNum(d.blocks) + " BLOCKS · x" + d.streak + " STREAK", PANEL_STYLE.value));

    out.push(rule());
    if (next) {
        const pct = Math.max(0, Math.min(1, d.blocks / next.need));
        out.push(seg("\nNEXT · " + next.name.toUpperCase(), rank.colour));
        out.push(seg("\n" + fmtNum(d.blocks) + " / " + fmtNum(next.need), PANEL_STYLE.value));
        out.push(seg("  " + bar(pct, 10) + " " + Math.floor(pct * 100) + "%", rank.colour));
    } else {
        out.push(seg("\nMAX RANK — FREE WORLD", PANEL_STYLE.gold));
        out.push(seg("\nNothing left to serve.", PANEL_STYLE.label));
    }

    out.push(rule());
    out.push(seg("\nTOP INMATES", PANEL_STYLE.gold));
    for (let i = 0; i < 3 && i < entries.length; i++) {
        const row = entries[i];
        out.push(seg("\n" + (i + 1) + " " + row.name, row.colour));
        out.push(seg("  " + fmtShort(row.blocks), PANEL_STYLE.value));
    }
    out.push(seg("\n#" + me.place + " " + me.name + "  ← YOU", PANEL_STYLE.accent));

    out.push(rule());
    out.push(seg("\n[M] Mines  [R] Ranks", PANEL_STYLE.accent));
    out.push(seg("\n[L] Board  [V] Sell", PANEL_STYLE.accent));
    out.push(seg("\nPREVIEW BUILD · UI ONLY", PANEL_STYLE.dim));
    return out;
}

function panelPlain(playerId) {
    const d = P[playerId];
    const rank = rankOf(d);
    const pick = pickOf(d);
    const next = RANKS[d.tier + 1];
    const entries = rankedEntries();
    const me = placeOf(playerId);
    const lines = [];

    lines.push("⛏ VOIDGATE PRISON");
    lines.push(rank.name + " · " + pick.name);
    lines.push("────────────────");
    lines.push("Tokens  " + fmtNum(d.tokens));
    lines.push("Blocks  " + fmtNum(d.blocks));
    lines.push("Streak  x" + d.streak);
    lines.push("────────────────");
    if (next) {
        const pct = Math.max(0, Math.min(1, d.blocks / next.need));
        lines.push("Next: " + next.name);
        lines.push(fmtNum(d.blocks) + " / " + fmtNum(next.need) + "  " + Math.floor(pct * 100) + "%");
    } else {
        lines.push("MAX RANK — Free World");
    }
    lines.push("────────────────");
    lines.push("Top inmates");
    for (let i = 0; i < 3 && i < entries.length; i++) {
        lines.push((i + 1) + " " + entries[i].name + "  " + fmtShort(entries[i].blocks));
    }
    lines.push("#" + me.place + " " + me.name + " (you)");
    lines.push("────────────────");
    lines.push("[M] Mines  [R] Ranks");
    lines.push("[L] Board  [V] Sell");
    lines.push("PREVIEW BUILD · UI ONLY");
    return lines.join("\n");
}

function pushPanel(playerId, force) {
    const d = P[playerId];
    if (!d) return;
    const rt = RT[playerId] || (RT[playerId] = {});

    let text = panelSegments(playerId);
    if (JSON.stringify(text).length > CFG.PANEL_LIMIT) text = panelPlain(playerId);

    const hash = JSON.stringify(text);
    if (!force && rt.panelHash === hash) return;
    rt.panelHash = hash;

    try {
        api.setClientOption(playerId, "RightInfoText", text);
        return;
    } catch (e) { }
    try { api.setClientOption(playerId, "RightInfoText", panelPlain(playerId)); } catch (e) { }
}

function syncButtons(playerId) {
    try {
        api.setClientOption(playerId, "customButtons", [
            { id: "pm_mines", icon: "Stone Pickaxe", keycode: "KeyM", description: "Open the mines" },
            { id: "pm_ranks", icon: "Gold Coin", keycode: "KeyR", description: "Open the rank ladder" },
            { id: "pm_board", icon: "Diamond Ore", keycode: "KeyL", description: "Open the leaderboard" },
            { id: "pm_sell", icon: "Coal", keycode: "KeyV", description: "Open the sell page" },
        ]);
    } catch (e) { }
}

// ---------------------------------------------------------------------------
//  LEADERBOARD
// ---------------------------------------------------------------------------

function rankedEntries() {
    const rows = [];
    for (const id in P) {
        const d = P[id];
        const rank = rankOf(d);
        rows.push({
            id: id,
            name: d.name,
            tier: d.tier,
            colour: rank.colour,
            blocks: d.blocks,
            tokens: d.tokens,
            streak: d.streak,
            you: true,
        });
    }
    for (let i = 0; i < SAMPLE.length; i++) {
        const row = SAMPLE[i];
        rows.push({
            id: null,
            name: row.name,
            tier: row.tier,
            colour: RANKS[row.tier].colour,
            blocks: row.blocks,
            tokens: row.tokens,
            streak: row.streak,
            you: false,
        });
    }
    rows.sort(function (a, b) {
        if (b.blocks !== a.blocks) return b.blocks - a.blocks;
        return b.tokens - a.tokens;
    });
    for (let i = 0; i < rows.length; i++) rows[i].place = i + 1;
    return rows;
}

function placeOf(playerId) {
    const rows = rankedEntries();
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].id === playerId) return rows[i];
    }
    return { place: rows.length + 1, name: playerName(playerId), blocks: 0, tokens: 0, colour: "white" };
}

function boardColumns() {
    return {
        name: { displayName: "INMATE", sortPriority: 10 },
        blocks: { displayName: "BLOCKS", sortPriority: 9, sortOrder: "descending" },
        tokens: { displayName: "TOKENS", sortPriority: 8, sortOrder: "descending" },
        tier: { displayName: "TIER", sortPriority: 7, sortOrder: "descending" },
        streak: { displayName: "STREAK", sortPriority: 6, sortOrder: "descending" },
    };
}

function setupNativeBoard(playerId) {
    try { api.setClientOption(playerId, "lobbyLeaderboardInfo", boardColumns()); } catch (e) { }
}

function syncNativeBoardRow(playerId) {
    const d = P[playerId];
    if (!d) return;
    const rank = rankOf(d);
    try {
        api.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", {
            blocks: Math.floor(d.blocks),
            tokens: Math.floor(d.tokens),
            tier: rank.tier + 1,
            streak: Math.floor(d.streak),
        }, true);
    } catch (e) { }
    try {
        api.setTargetedPlayerSettingForEveryone(playerId, "colorInLobbyLeaderboard", rank.colour, true);
    } catch (e) { }
}

function boardPageItems(playerId, visible) {
    const me = placeOf(playerId);
    const rows = rankedEntries();
    const items = [];

    items.push({
        key: "pm_you",
        item: tile({
            image: rankOf(ensure(playerId)).oreImage,
            title: "YOUR PLACEMENT — #" + me.place,
            description: fmtNum(me.blocks) + " blocks · " + fmtShort(me.tokens) + " tokens · " + rankOf(ensure(playerId)).name,
            canBuy: false,
            button: "You",
            sort: 2000,
            selected: true,
        }),
    });

    for (let i = 0; i < CFG.PAGE_ROWS; i++) {
        const row = rows[i];
        if (!row) {
            items.push({
                key: "pm_row_" + (i + 1),
                item: tile({ image: "Gravel", title: "—", description: "", canBuy: false, button: "—", sort: 0, hidden: true }),
            });
            continue;
        }
        items.push({
            key: "pm_row_" + (i + 1),
            item: tile({
                image: row.tier === undefined ? "Coal Ore" : RANKS[row.tier].oreImage,
                title: "#" + row.place + "  " + row.name + (row.you ? "  ← YOU" : ""),
                description: fmtNum(row.blocks) + " blocks · " + fmtShort(row.tokens) + " tokens · " + rankTag(row.tier) + " · " + row.streak + " streak",
                canBuy: false,
                button: row.place <= 3 ? "TOP " + row.place : "—",
                sort: 1000 - row.place,
                hidden: !visible,
            }),
        });
    }
    return items;
}

function rankTag(tier) {
    const rank = RANKS[tier];
    return rank ? rank.tag + "-Block" : "?";
}

function renderBoardPage(playerId) {
    const items = boardPageItems(playerId, true);
    for (let i = 0; i < items.length; i++) {
        putPlayerItem(playerId, SHOP_CATS.board.key, items[i].key, items[i].item);
    }
}

// ---------------------------------------------------------------------------
//  SHOP TILES
// ---------------------------------------------------------------------------

function tile(opts) {
    const item = {
        image: opts.image || "Stone",
        customTitle: opts.title || "",
        description: opts.description || "",
        canBuy: opts.canBuy === undefined ? false : !!opts.canBuy,
        buyButtonText: opts.button || "Preview",
        sortPriority: opts.sort === undefined ? 0 : opts.sort,
        hidden: !!opts.hidden,
    };
    if (opts.cost !== undefined) {
        item.cost = opts.cost;
        item.currency = CFG.CURRENCY_ID;
    }
    if (opts.selected) item.isSelected = true;
    if (opts.imageColour) item.imageColour = opts.imageColour;
    if (opts.sell) item.sell = true;
    if (opts.onBoughtMessage) item.onBoughtMessage = opts.onBoughtMessage;
    return item;
}

function putItem(categoryKey, itemKey, item) {
    try { api.createShopItem(categoryKey, itemKey, item); } catch (e) { }
}

function putPlayerItem(playerId, categoryKey, itemKey, item) {
    try { api.createShopItemForPlayer(playerId, categoryKey, itemKey, item); } catch (e) { }
}

function openPage(playerId, categoryKey) {
    if (!playerId) return;
    ensure(playerId);
    renderPlayerPages(playerId);
    try { api.openShop(playerId, false, categoryKey, false); } catch (e) { }
    pushPanel(playerId, true);
}

// ---------------------------------------------------------------------------
//  PAGE: MINES
// ---------------------------------------------------------------------------

function renderMines(playerId) {
    const d = P[playerId];
    if (!d) return;
    const cat = SHOP_CATS.mines.key;
    for (let i = 0; i < RANKS.length; i++) {
        const rank = RANKS[i];
        const unlocked = i <= d.tier;
        const desc = unlocked
            ? "Ores: " + rank.ore + " · Sell bonus +" + rank.sellBonus + "%"
            : "Locks: " + rank.name + " · Needs " + fmtNum(rank.need) + " blocks";
        putPlayerItem(playerId, cat, "pm_mine_" + rank.tag.toLowerCase(), tile({
            image: rank.oreImage,
            title: rank.mine,
            description: desc,
            canBuy: unlocked,
            button: unlocked ? "Enter" : "Locked",
            cost: unlocked ? 0 : undefined,
            sort: 100 - i,
            selected: i === d.tier,
            onBoughtMessage: "Preview build — the mine itself is not wired up.",
        }));
    }
}

// ---------------------------------------------------------------------------
//  PAGE: RANKS
// ---------------------------------------------------------------------------

function renderRanks(playerId) {
    const d = P[playerId];
    if (!d) return;
    const cat = SHOP_CATS.ranks.key;
    for (let i = 0; i < RANKS.length; i++) {
        const rank = RANKS[i];
        let button = "Locked";
        if (i < d.tier) button = "Owned";
        else if (i === d.tier) button = "Current";
        else if (i === d.tier + 1) button = "Preview";
        const desc = rank.mine + " · " + rank.ore +
            " · Sell +" + rank.sellBonus + "% · " +
            (i === 0 ? "Free" : fmtNum(rank.price) + " tokens") +
            " · Needs " + fmtNum(rank.need) + " blocks";
        putPlayerItem(playerId, cat, "pm_rank_" + rank.tag.toLowerCase(), tile({
            image: rank.oreImage,
            title: "[" + rank.tag + "]  " + rank.name,
            description: desc,
            canBuy: false,
            button: button,
            cost: rank.price,
            sort: 100 - i,
            selected: i === d.tier,
        }));
    }
}

// ---------------------------------------------------------------------------
//  PAGE: PICKAXES
// ---------------------------------------------------------------------------

function renderPicks(playerId) {
    const d = P[playerId];
    if (!d) return;
    const cat = SHOP_CATS.picks.key;
    for (let i = 0; i < PICKS.length; i++) {
        const pick = PICKS[i];
        let button = "Locked";
        if (i < d.pick) button = "Owned";
        else if (i === d.pick) button = "Equipped";
        else if (i === d.pick + 1) button = "Preview";
        putPlayerItem(playerId, cat, "pm_pick_" + i, tile({
            image: pick.item,
            title: pick.name,
            description: "Speed x" + pick.speed.toFixed(2) + " · Luck +" + pick.luck + "% · " + (i === 0 ? "Free" : fmtNum(pick.price) + " tokens") + " · " + pick.blurb,
            canBuy: false,
            button: button,
            cost: pick.price,
            sort: 100 - i,
            selected: i === d.pick,
            imageColour: pick.colour,
        }));
    }
}

// ---------------------------------------------------------------------------
//  PAGE: SELL
// ---------------------------------------------------------------------------

function renderSell(playerId) {
    const d = P[playerId];
    if (!d) return;
    const cat = SHOP_CATS.sell.key;
    const rank = rankOf(d);
    const bonus = 1 + rank.sellBonus / 100;

    putPlayerItem(playerId, cat, "pm_bag", tile({
        image: "Coal",
        title: "SELL BAG",
        description: "0 ore · 0 tokens · Rank bonus +" + rank.sellBonus + "% · Sell All is a preview",
        canBuy: true,
        button: "Sell All",
        cost: 0,
        sort: 200,
        onBoughtMessage: "Preview build — selling is not wired up.",
    }));

    for (let i = 0; i < ORES.length; i++) {
        const ore = ORES[i];
        const paid = Math.floor(ore.value * bonus);
        putPlayerItem(playerId, cat, "pm_ore_" + i, tile({
            image: ore.item,
            title: ore.name,
            description: "Sells for " + fmtNum(paid) + " tokens each · Rank bonus +" + rank.sellBonus + "% · 0 in bag",
            cost: -ore.value,
            sell: true,
            canBuy: false,
            button: "0 in bag",
            sort: 100 - i,
        }));
    }
}

// ---------------------------------------------------------------------------
//  PAGE: HOW TO PLAY
// ---------------------------------------------------------------------------

const GUIDE = [
    {
        key: "pm_guide_loop",
        image: "Stone Pickaxe",
        title: "THE LOOP",
        description: "Mine ore · sell it for tokens · buy the next rank · unlock a deeper mine · repeat until X-Block.",
        sort: 100,
    },
    {
        key: "pm_guide_keys",
        image: "Gold Coin",
        title: "KEYS",
        description: "M mines · R ranks · L leaderboard · V sell. Or press B and pick a tab.",
        sort: 90,
    },
    {
        key: "pm_guide_tiers",
        image: "Diamond Ore",
        title: "THE LADDER",
        description: "E → D → C → B → A → S → SS → X. Every rank pays a bigger sell bonus and opens a new shaft.",
        sort: 80,
    },
    {
        key: "pm_guide_preview",
        image: "Obsidian",
        title: "PREVIEW BUILD",
        description: "Menus, HUD, ranks, pickaxes and the leaderboard are live. Mining, selling, ranking and buying are not wired.",
        sort: 70,
    },
    {
        key: "pm_guide_board",
        image: "Crystal Block",
        title: "LEADERBOARD",
        description: "Season 1 ranks blocks mined. Sample inmates fill the board; real players are added as they join.",
        sort: 60,
    },
];

// ---------------------------------------------------------------------------
//  PAGE RENDERING
// ---------------------------------------------------------------------------

function setupShop() {
    const cats = [SHOP_CATS.mines, SHOP_CATS.ranks, SHOP_CATS.picks, SHOP_CATS.sell, SHOP_CATS.board, SHOP_CATS.guide];
    for (let i = 0; i < cats.length; i++) {
        try {
            api.configureShopCategory(cats[i].key, {
                customTitle: cats[i].title,
                description: cats[i].blurb,
                sortPriority: cats[i].sort,
                autoSelectCategory: false,
            });
        } catch (e) { }
    }

    for (let i = 0; i < GUIDE.length; i++) {
        putItem(SHOP_CATS.guide.key, GUIDE[i].key, tile({
            image: GUIDE[i].image,
            title: GUIDE[i].title,
            description: GUIDE[i].description,
            canBuy: false,
            button: "Info",
            sort: GUIDE[i].sort,
        }));
    }

    // Base rows so a fresh world still shows every slot before anyone joins.
    for (let i = 0; i < CFG.PAGE_ROWS; i++) {
        putItem(SHOP_CATS.board.key, "pm_row_" + (i + 1), tile({
            image: "Gravel",
            title: "—",
            description: "Waiting for inmates",
            canBuy: false,
            button: "—",
            sort: 0,
            hidden: true,
        }));
    }
}

function renderPlayerPages(playerId) {
    if (!playerId || !P[playerId]) return;
    renderMines(playerId);
    renderRanks(playerId);
    renderPicks(playerId);
    renderSell(playerId);
    renderBoardPage(playerId);
}

// ---------------------------------------------------------------------------
//  REFRESH LOOPS
// ---------------------------------------------------------------------------

function refreshPanelAll() {
    for (const id in P) pushPanel(id, false);
}

function refreshBoardAll() {
    for (const id in P) {
        setupNativeBoard(id);
        syncNativeBoardRow(id);
    }
    refreshPanelAll();
}

// ---------------------------------------------------------------------------
//  CALLBACKS
// ---------------------------------------------------------------------------

onPlayerJoin = function (playerId) {
    if (!playerId) return;
    ensure(playerId);
    const rt = RT[playerId] || (RT[playerId] = {});
    rt.panelHash = null;

    syncTokens(playerId);
    syncChips(playerId);
    syncButtons(playerId);
    setupNativeBoard(playerId);
    syncNativeBoardRow(playerId);
    renderPlayerPages(playerId);
    pushPanel(playerId, true);

    try { api.setClientOption(playerId, "customVariationTitle", "PRISON MINE"); } catch (e) { }

    richSay(playerId, [
        seg("━━━━━━━━━━━━━━━━━━━━", PANEL_STYLE.dim),
        seg("\n⛏  VOIDGATE PRISON  ⛏", PANEL_STYLE.gold),
        seg("\nPRISON MINE · PREVIEW BUILD", PANEL_STYLE.label),
        seg("\n━━━━━━━━━━━━━━━━━━━━", PANEL_STYLE.dim),
        seg("\nM ", PANEL_STYLE.accent), seg("mines   ", PANEL_STYLE.label),
        seg("R ", PANEL_STYLE.accent), seg("ranks   ", PANEL_STYLE.label),
        seg("L ", PANEL_STYLE.accent), seg("board   ", PANEL_STYLE.label),
        seg("V ", PANEL_STYLE.accent), seg("sell", PANEL_STYLE.label),
        seg("\nThis build is the UI and the leaderboard — mining is not wired.", PANEL_STYLE.label),
    ]);

    try {
        api.sendTopRightHelper(playerId, "fa-solid fa-hammer", "Welcome, inmate. Press M to see the mines.", {
            duration: 7,
            color: "rgb(35, 35, 40)",
            textAndIconColor: "gold",
        });
    } catch (e) { }
};

onPlayerLeave = function (playerId) {
    delete P[playerId];
    delete RT[playerId];
};

onPlayerPressedButton = function (playerId, buttonId) {
    if (!playerId) return;
    ensure(playerId);
    if (buttonId === "pm_mines") return openPage(playerId, SHOP_CATS.mines.key);
    if (buttonId === "pm_ranks") return openPage(playerId, SHOP_CATS.ranks.key);
    if (buttonId === "pm_board") return openPage(playerId, SHOP_CATS.board.key);
    if (buttonId === "pm_sell") return openPage(playerId, SHOP_CATS.sell.key);
};

onPlayerToggledShopMenu = function (playerId, isOpen) {
    if (!playerId || !isOpen) return;
    renderPlayerPages(playerId);
    pushPanel(playerId, true);
};

onPlayerBoughtShopItem = function (playerId, categoryKey, itemKey, item, userInput) {
    if (!playerId || !categoryKey) return;
    const title = item && item.customTitle ? String(item.customTitle) : "That";
    if (categoryKey === SHOP_CATS.mines.key) {
        previewNote(playerId, "entering " + title);
    } else if (categoryKey === SHOP_CATS.sell.key) {
        previewNote(playerId, "selling ore");
    } else if (categoryKey === SHOP_CATS.ranks.key || categoryKey === SHOP_CATS.picks.key) {
        previewNote(playerId, "buying " + title);
    }
    try { api.sendOverShopInfo(playerId, "Preview build · no progress is saved"); } catch (e) { }
    pushPanel(playerId, true);
};

// ---------------------------------------------------------------------------
//  TICK
// ---------------------------------------------------------------------------

let sincePanel = 0;
let sinceBoard = 0;

tick = function (ms) {
    const step = Number(ms) > 0 ? Number(ms) : 50;
    sincePanel += step;
    sinceBoard += step;
    if (sincePanel >= CFG.PANEL_EVERY_MS) {
        sincePanel = 0;
        refreshPanelAll();
    }
    if (sinceBoard >= CFG.BOARD_EVERY_MS) {
        sinceBoard = 0;
        refreshBoardAll();
    }
};

// ---------------------------------------------------------------------------
//  GAMEPLAY HOOKS — NOT WIRED
//
//  Everything above is presentation. The prison loop belongs here:
//
//    onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock)
//        Count "Coal Ore", "Iron Ore", ... into P[playerId].oreInBag, add to
//        P[playerId].blocks, and pushPanel(playerId).
//
//    Selling
//        onPlayerBoughtShopItem for pm_sell: convert oreInBag into tokens with
//        rankOf(d).sellBonus, then syncTokens / syncNativeBoardRow / pushPanel.
//
//    Rank up
//        On a rank purchase: require d.blocks >= next.need and d.tokens >=
//        next.price, deduct, d.tier++, unlock the next mine, re-render pages.
//
//    Pickaxes
//        On a pick purchase: deduct tokens, d.pick++, apply the speed with a
//        mining multiplier (engine effects or break timing).
//
//    Saving
//        api.setPlayerDbValue(playerId, "pm_profile_v1", JSON.stringify(d)) on
//        leave and every minute; read it back in onPlayerJoin before ensure().
//
//    In-world board
//        api.attemptCreateMeshEntity("Leaderboard", { leaderboard, title:
//        "SEASON 1", scoreLabel: "BLOCKS", size: 1.4 }) once the leaderboard id
//        this engine expects is known.
// ---------------------------------------------------------------------------

setupShop();
