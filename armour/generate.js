// Writes one buy block per armour set from the ARMOUR table in
// ../voidbound-world-code.js, plus this folder's README.
//
//   node armour/generate.js           write the files
//   node armour/generate.js --check   fail if anything is out of date

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const src = fs.readFileSync(path.join(root, "voidbound-world-code.js"), "utf8");

function loadArmour() {
    const db = {};
    const lobby = {};
    const noop = () => null;

    const api = {
        ownerDbId: null,
        getPlayerDbValue: (id, key) => (db[id] ? db[id][key] : null),
        setPlayerDbValue: (id, key, value) => { (db[id] = db[id] || {})[key] = value; },
        getLobbyDbValue: (key) => lobby[key],
        setLobbyDbValue: (key, value) => { lobby[key] = value; },
        sendMessage: noop, broadcastMessage: noop, setCurrency: noop, setCurrencyAmount: noop,
        getCurrencyAmount: () => 0, now: () => 0, getEntityName: () => "nobody", getPlayerId: noop,
        getPlayerDbId: () => 0, giveItem: noop, playSound: noop, log: noop,
        setClientOption: noop, setClientOptions: noop, setTargetedPlayerSettingForEveryone: noop,
        configureShopCategory: noop, createShopItem: noop, createShopItemForPlayer: noop,
        openShop: noop, kickPlayer: noop, setPlayerGamemode: noop, attemptCreateMeshEntity: noop,
        setEntityRotation: noop, updateMeshEntity: noop, deleteMeshEntity: noop,
        updateEntityNodeMeshAttachment: noop, createEnchantmentAttributesForItem: noop,
        getBlockSolidity: () => true, getBlock: () => "Air", getPosition: noop, setPosition: noop,
        applyEffect: noop, removeEffect: noop,
    };

    const ctx = {
        console, api, isFinite, parseInt, parseFloat, Number, String, Math, JSON, Object, Array,
        Date, setTimeout, clearTimeout, setInterval, clearInterval, Infinity,
    };

    vm.createContext(ctx);
    vm.runInContext(src + "\n;globalThis.__d={ARMOUR: ARMOUR, PIECES: ARMOUR_PIECES};", ctx);

    return ctx.__d;
}

const { ARMOUR, PIECES } = loadArmour();

function commas(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function hours(ms) {
    const h = ms / 3600000;
    return (h % 1 === 0 ? h : h.toFixed(1)) + "h";
}

function armourFile(a) {
    const lines = [];

    lines.push("// " + a.name + " - full set (" + PIECES.length + " pieces) - " + commas(a.price) + " Void Shards");
    lines.push("// P " + a.p + " protection | H " + a.h + " health | R " + a.r + " health regen");
    lines.push("// Set ability: " + a.ability.name + " - " + a.ability.blurb + " (" + a.ability.effect + ")");
    lines.push("//");
    lines.push("// Unlocks at overall level " + a.level + ", " + a.kills + " player kills and " + hours(a.playtimeMs) + " played,");
    lines.push("// then costs " + commas(a.price) + " Void Shards for all " + PIECES.length + " pieces.");
    lines.push("//");
    lines.push("// In game: /armour buy " + a.id + "   then   /armour wear " + a.id);
    lines.push("// From your own code: buyArmourById(playerId, \"" + a.id + "\");");

    return lines.join("\n") + "\n";
}

function readme() {
    const lines = [];

    lines.push("# Armour code blocks");
    lines.push("");
    lines.push("One file per armour set, named after the set, ending in its buy call:");
    lines.push("`buyArmourById(playerId, \"<id>\")` in");
    lines.push("[voidbound-world-code.js](../voidbound-world-code.js).");
    lines.push("");
    lines.push("P is protection, H is health and R is health regen. Each purchase is the");
    lines.push("whole set: " + PIECES.join(", ") + ".");
    lines.push("These are not survival armour, so the only way to get a set is from here.");
    lines.push("");
    lines.push("In game: `/armour` lists the sets, `/armour buy <id>` buys all four");
    lines.push("pieces, and `/armour wear <id>` turns on the set ability.");
    lines.push("");
    lines.push("| Set | P / H / R | Ability | Price | Unlocks at | Block |");
    lines.push("|---|---|---|---|---|---|");

    for (const a of ARMOUR) {
        lines.push("| " + a.name + " | " + a.p + " / " + a.h + " / " + a.r + " | " + a.ability.name +
            " | " + commas(a.price) + " | level " + a.level + ", " + a.kills + " kills, " + hours(a.playtimeMs) +
            " | [" + a.id + ".js](" + a.id + ".js) |");
    }

    lines.push("");
    lines.push("## Keeping them right");
    lines.push("");
    lines.push("Stats, prices and abilities live only in the `ARMOUR` table of");
    lines.push("`voidbound-world-code.js`. Regenerate from it:");
    lines.push("");
    lines.push("```");
    lines.push("node armour/generate.js");
    lines.push("node armour/generate.js --check");
    lines.push("```");

    return lines.join("\n") + "\n";
}

function wanted() {
    const files = new Map();

    files.set(path.join(__dirname, "README.md"), readme());

    for (const a of ARMOUR) {
        files.set(path.join(__dirname, a.id + ".js"), armourFile(a));
    }

    return files;
}

const check = process.argv.indexOf("--check") !== -1;
const files = wanted();
const stale = [];

for (const [file, content] of files) {
    const current = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : null;

    if (current === content) continue;

    if (check) stale.push(path.basename(file));
    else fs.writeFileSync(file, content, "utf8");
}

if (check) {
    if (stale.length) {
        console.error("Out of date: " + stale.join(", ") + " - run node armour/generate.js");
        process.exit(1);
    }

    console.log("armour/: " + files.size + " files up to date");
} else {
    console.log("armour/: wrote " + files.size + " files");
}
