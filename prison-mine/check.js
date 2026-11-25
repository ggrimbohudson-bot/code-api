// Loads the prison-mine world code against a stub `api` and checks that the
// UI and leaderboard build without errors and in the right shape.
//
//   node prison-mine/check.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const src = fs.readFileSync(path.join(__dirname, "prison-mine-world-code.js"), "utf8");

const calls = {
    categories: {},
    shop: {},
    playerShop: {},
    messages: [],
    buttons: [],
    opens: [],
    panels: [],
    boardValues: {},
    boardCols: null,
};

const api = {
    ownerDbId: null,
    getEntityName: (id) => (id === "p1" ? "TestInmate" : "SecondInmate"),
    setCurrency: () => {},
    setCurrencyAmount: () => {},
    setClientOption: (playerId, key, value) => {
        if (key === "RightInfoText") calls.panels.push(value);
        if (key === "customButtons") calls.buttons.push(value);
        if (key === "lobbyLeaderboardInfo") calls.boardCols = value;
    },
    setClientOptions: () => {},
    setTargetedPlayerSettingForEveryone: (playerId, key, value) => {
        if (key === "lobbyLeaderboardValues") calls.boardValues[playerId] = value;
    },
    configureShopCategory: (key, config) => {
        calls.categories[key] = config;
    },
    createShopItem: (categoryKey, itemKey, item) => {
        calls.shop[categoryKey + "|" + itemKey] = item;
    },
    createShopItemForPlayer: (playerId, categoryKey, itemKey, item) => {
        calls.playerShop[playerId + "|" + categoryKey + "|" + itemKey] = item;
    },
    openShop: (playerId, toggle, categoryKey) => {
        calls.opens.push({ playerId: playerId, categoryKey: categoryKey });
    },
    sendMessage: (playerId, text, style) => {
        calls.messages.push({ playerId: playerId, text: text, style: style });
    },
    sendOverShopInfo: () => {},
    sendTopRightHelper: () => {},
    sendFlyingMiddleMessage: () => {},
    playSound: () => {},
    log: () => {},
    giveItem: () => {},
    getPosition: () => [0, 0, 0],
    setPosition: () => {},
};

const ctx = { console, api, Math, JSON, Date, String, Number, Object, Array, isFinite, parseInt, parseFloat };
vm.createContext(ctx);
vm.runInContext(
    src + "\n;globalThis.__pm = { RANKS, PICKS, ORES, SAMPLE, SHOP_CATS, CFG, rankedEntries, P };",
    ctx,
);

const pm = ctx.__pm;
let failures = 0;

function ok(condition, label, detail) {
    if (condition) {
        console.log("ok   " + label);
        return;
    }
    failures++;
    console.log("FAIL " + label + (detail ? " — " + detail : ""));
}

function attempt(label, fn) {
    try {
        fn();
        return null;
    } catch (error) {
        ok(false, label, error && error.message ? error.message : String(error));
        return error;
    }
}

function countPlayerItems(playerId, categoryKey) {
    let count = 0;
    for (const key in calls.playerShop) {
        if (key.indexOf(playerId + "|" + categoryKey + "|") === 0) count++;
    }
    return count;
}

function joinedSegments(segments) {
    let out = "";
    if (!Array.isArray(segments)) return typeof segments === "string" ? segments : "";
    for (let i = 0; i < segments.length; i++) {
        const part = segments[i];
        if (typeof part === "string") out += part;
        else if (part && part.str) out += part.str;
    }
    return out;
}

// -- data sanity ------------------------------------------------------------

ok(pm.RANKS.length === 8, "rank ladder has eight tiers");
ok(pm.PICKS.length === 7, "seven pickaxe tiers");
ok(pm.ORES.length === 9, "nine sellable ores");
ok(pm.SAMPLE.length === 9, "nine sample inmates");

const sortedDescending = pm.rankedEntries().every((row, index, list) => index === 0 || list[index - 1].blocks >= row.blocks);
ok(sortedDescending, "leaderboard sorts by blocks, highest first");
ok(pm.rankedEntries()[0].name === "WardenKane", "top sample inmate is first");

// -- shop setup -------------------------------------------------------------

ok(Object.keys(calls.categories).length === 6, "six shop categories configured");
ok(calls.categories.pm_mines.customTitle === "MINES", "mines category titled");
ok(calls.categories.pm_ranks.sortPriority === 90, "categories carry sort priorities");
ok(Object.keys(calls.shop).length >= 13, "base shop tiles created at load", String(Object.keys(calls.shop).length));

// -- join -------------------------------------------------------------------

const joinError = attempt("onPlayerJoin(p1) throws", () => ctx.onPlayerJoin("p1"));
ok(!joinError, "first player joins without throwing");
attempt("onPlayerJoin(p2) throws", () => ctx.onPlayerJoin("p2"));
ok(!!pm.P.p1 && !!pm.P.p2, "both players get a demo profile");
ok(pm.P.p1.name === "TestInmate", "player name comes from the engine");

ok(calls.boardValues.p1 && calls.boardValues.p1.blocks === pm.CFG.DEMO_BLOCKS, "native leaderboard row written");
ok(calls.boardValues.p1.tokens === pm.CFG.DEMO_TOKENS, "native leaderboard tokens written");
ok(calls.boardCols && calls.boardCols.blocks.sortOrder === "descending", "leaderboard columns sort descending");

ok(calls.buttons.length >= 2 && calls.buttons[0].length === 4, "four custom buttons registered");
const keycodes = calls.buttons[0].map((button) => button.keycode);
ok(new Set(keycodes).size === 4, "custom button keys are unique");

const panel = calls.panels[calls.panels.length - 1];
const panelText = joinedSegments(panel);
ok(panelText.indexOf("VOIDGATE PRISON") !== -1, "side panel has the title");
ok(panelText.indexOf("TOKENS") !== -1 && panelText.indexOf("BLOCKS") !== -1, "side panel has tokens and blocks");
ok(panelText.indexOf("← YOU") !== -1, "side panel shows your placement");
ok(JSON.stringify(panel).length < pm.CFG.PANEL_LIMIT + 300, "side panel stays within the panel limit");

// -- per-player pages -------------------------------------------------------

ok(countPlayerItems("p1", "pm_mines") === 8, "mines page has eight mines", String(countPlayerItems("p1", "pm_mines")));
ok(countPlayerItems("p1", "pm_ranks") === 8, "ranks page has eight ranks");
ok(countPlayerItems("p1", "pm_picks") === 7, "pickaxes page has seven picks");
ok(countPlayerItems("p1", "pm_sell") === 10, "sell page has a bag plus nine ores");
ok(countPlayerItems("p1", "pm_board") === 13, "board page has your row plus twelve slots");

const mineC = calls.playerShop["p1|pm_mines|pm_mine_c"];
const mineB = calls.playerShop["p1|pm_mines|pm_mine_b"];
ok(mineC && mineC.canBuy === true && mineC.isSelected === true, "current mine is open and selected");
ok(mineB && mineB.canBuy === false && mineB.buyButtonText === "Locked", "deeper mine is locked");

const rankC = calls.playerShop["p1|pm_ranks|pm_rank_c"];
const rankB = calls.playerShop["p1|pm_ranks|pm_rank_b"];
ok(rankC && rankC.buyButtonText === "Current", "current rank marked current");
ok(rankB && rankB.buyButtonText === "Preview", "next rank marked preview");
ok(rankB && rankB.cost === 22000, "next rank shows its price");

const pickIron = calls.playerShop["p1|pm_picks|pm_pick_2"];
ok(pickIron && pickIron.buyButtonText === "Equipped", "equipped pickaxe marked");

const firstRow = calls.playerShop["p1|pm_board|pm_row_1"];
const lastRow = calls.playerShop["p1|pm_board|pm_row_12"];
ok(firstRow && firstRow.customTitle.indexOf("WardenKane") !== -1, "board page first row is the top inmate");
ok(firstRow && firstRow.description.indexOf("blocks") !== -1, "board row shows blocks");
ok(lastRow && lastRow.hidden === true, "unused board slot hidden");

const you = calls.playerShop["p1|pm_board|pm_you"];
ok(you && you.customTitle.indexOf("#10") !== -1, "your placement row shows tenth", you && you.customTitle);
ok(you && you.isSelected === true, "your placement row highlighted");

// -- buttons and purchases --------------------------------------------------

attempt("pressed button throws", () => {
    ctx.onPlayerPressedButton("p1", "pm_mines");
    ctx.onPlayerPressedButton("p1", "pm_ranks");
    ctx.onPlayerPressedButton("p1", "pm_board");
    ctx.onPlayerPressedButton("p1", "pm_sell");
});
const opened = calls.opens.map((entry) => entry.categoryKey);
ok(["pm_mines", "pm_ranks", "pm_board", "pm_sell"].every((key) => opened.indexOf(key) !== -1), "each custom button opens its page");

attempt("shop purchase throws", () => {
    ctx.onPlayerBoughtShopItem("p1", "pm_mines", "pm_mine_c", { customTitle: "Mine C — Quartz Grotto" }, "");
    ctx.onPlayerBoughtShopItem("p1", "pm_sell", "pm_bag", { customTitle: "SELL BAG" }, "");
    ctx.onPlayerBoughtShopItem("p1", "pm_ranks", "pm_rank_b", { customTitle: "[B] B-Block" }, "");
    ctx.onPlayerBoughtShopItem("p1", "pm_picks", "pm_pick_3", { customTitle: "Guard's Gold" }, "");
});
const notice = calls.messages.filter((message) => String(joinedSegments(message.text)).indexOf("PREVIEW BUILD") !== -1);
ok(notice.length >= 4, "purchases answer with a preview notice", String(notice.length));

const before = pm.P.p1.tokens;
ok(before === pm.CFG.DEMO_TOKENS, "preview build never spends tokens");

// -- tick and leave ---------------------------------------------------------

attempt("tick throws", () => {
    ctx.tick(1000);
    ctx.tick(5000);
    ctx.tick(30000);
});
ok(calls.panels.length > 3, "tick refreshes the side panel");

attempt("onPlayerLeave throws", () => ctx.onPlayerLeave("p2"));
ok(!pm.P.p2, "leaving clears the profile");

// -- guide ------------------------------------------------------------------

const guide = calls.shop["pm_guide|pm_guide_preview"];
ok(guide && guide.description.indexOf("not wired") !== -1, "guide states the build is a preview");

console.log("");
if (failures) {
    console.log(failures + " check(s) failed");
    process.exit(1);
}
console.log("all checks passed");
