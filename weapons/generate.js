// Writes one buy block per weapon from the WEAPONS table in
// ../voidbound-world-code.js, plus this folder's README.
//
//   node weapons/generate.js           write the files
//   node weapons/generate.js --check   fail if anything is out of date
//
// The world code is the only place a weapon's price, stats and requirements
// are written down, so a block here can never describe a weapon that changed.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const src = fs.readFileSync(path.join(root, "voidbound-world-code.js"), "utf8");

function loadWeapons() {
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
    };

    const ctx = {
        console, api, isFinite, parseInt, parseFloat, Number, String, Math, JSON, Object, Array,
        Date, setTimeout, clearTimeout, setInterval, clearInterval, Infinity,
    };

    vm.createContext(ctx);
    vm.runInContext(src + "\n;globalThis.__d={WEAPONS: WEAPONS};", ctx);

    return ctx.__d.WEAPONS;
}

const WEAPONS = loadWeapons();

function commas(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function hours(ms) {
    const h = ms / 3600000;
    return (h % 1 === 0 ? h : h.toFixed(1)) + "h";
}

function weaponFile(w) {
    const lines = [];

    lines.push("// " + w.name + " - " + w.kind + " - " + commas(w.price) + " Void Shards");
    lines.push("// D " + w.d + " damage | S " + w.s + " attack speed | C " + w.c + " critical damage");
    lines.push("//");
    lines.push("// Unlocks at overall level " + w.level + ", " + w.kills + " player kills and " + hours(w.playtimeMs) + " played,");
    lines.push("// then costs " + commas(w.price) + " Void Shards.");
    lines.push("//");
    lines.push("// In game: /weapon buy " + w.id);
    lines.push("// From your own code: buyWeaponById(playerId, \"" + w.id + "\");");

    return lines.join("\n") + "\n";
}

function readme() {
    const lines = [];

    lines.push("# Weapon code blocks");
    lines.push("");
    lines.push("One file per weapon, named after the weapon, ending in its buy call:");
    lines.push("`buyWeaponById(playerId, \"<id>\")` in");
    lines.push("[voidbound-world-code.js](../voidbound-world-code.js).");
    lines.push("");
    lines.push("In game the same call is `/weapon buy <id>`, and `/weapons` lists every");
    lines.push("weapon with the price and what you still need. D is damage, S is attack");
    lines.push("speed and C is critical damage.");
    lines.push("");
    lines.push("| Weapon | Kind | D / S / C | Price | Unlocks at | Block |");
    lines.push("|---|---|---|---|---|---|");

    for (const w of WEAPONS) {
        lines.push("| " + w.name + " | " + w.kind + " | " + w.d + " / " + w.s + " / " + w.c + " | " +
            commas(w.price) + " | level " + w.level + ", " + w.kills + " kills, " + hours(w.playtimeMs) + " | [" +
            w.id + ".js](" + w.id + ".js) |");
    }

    lines.push("");
    lines.push("## Keeping them right");
    lines.push("");
    lines.push("Stats, prices and requirements live only in the `WEAPONS` table of");
    lines.push("`voidbound-world-code.js`. Regenerate these files from it:");
    lines.push("");
    lines.push("```");
    lines.push("node weapons/generate.js");
    lines.push("node weapons/generate.js --check");
    lines.push("```");
    lines.push("");
    lines.push("`--check` exits non-zero when a file here no longer matches the table.");

    return lines.join("\n") + "\n";
}

function wanted() {
    const files = new Map();

    files.set(path.join(__dirname, "README.md"), readme());

    for (const w of WEAPONS) {
        files.set(path.join(__dirname, w.id + ".js"), weaponFile(w));
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
        console.error("Out of date: " + stale.join(", ") + " - run node weapons/generate.js");
        process.exit(1);
    }

    console.log("weapons/: " + files.size + " files up to date");
} else {
    console.log("weapons/: wrote " + files.size + " files");
}
