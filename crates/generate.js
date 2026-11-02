// Regenerates one buy block per crate from the CRATES table in
// ../voidbound-world-code.js, plus this folder's README table.
//
//   node crates/generate.js           write the files
//   node crates/generate.js --check   fail if any file is out of date
//
// The world code is the only place crate prices and odds are written down, so
// these files can never describe a crate that no longer exists.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "voidbound-world-code.js");
const src = fs.readFileSync(sourcePath, "utf8");

// The world code boots when it loads, so it needs an api to talk to.
function loadCrates() {
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
    vm.runInContext(src + "\n;globalThis.__d={CRATES: CRATES, crateOdds: crateOdds, pctText: pctText};", ctx);

    return ctx.__d;
}

const { CRATES, crateOdds, pctText } = loadCrates();

function oddsLines(crate) {
    return crateOdds(crate).map((row) => "//   " + pctText(row.pct) + "  " + row.text);
}

function crateFile(crate) {
    const lines = [];

    lines.push("// " + crate.name + " - " + crate.price + " Void Shards");
    lines.push("//");
    lines.push("// Everything this crate can pay, with the chance of each:");
    lines.push.apply(lines, oddsLines(crate));
    lines.push("//");
    lines.push("// Buying is one call, so the price is only ever taken once. This world");
    lines.push("// already sells it as /crate buy " + crate.id + ".");
    lines.push("//");
    lines.push("// Paste the block below where your own code should sell this crate:");
    lines.push("//");
    lines.push("//     buyCrateById(playerId, \"" + crate.id + "\");");

    return lines.join("\n") + "\n";
}

function readme() {
    const lines = [];

    lines.push("# Crate code blocks");
    lines.push("");
    lines.push("No crate menu and no dealer: crates are sold by code. Each file in this");
    lines.push("folder is the buy block for one crate, and every one of them ends in");
    lines.push("`buyCrateById(playerId, \"<id>\")`, which lives in");
    lines.push("[voidbound-world-code.js](../voidbound-world-code.js).");
    lines.push("");
    lines.push("In game the same call is reachable as `/crate buy <id>`, and `/crates`");
    lines.push("lists every id. Because there is exactly one seller, the price is charged");
    lines.push("once however a crate is bought.");
    lines.push("");
    lines.push("| Crate | id | Price | Block |");
    lines.push("|---|---|---|---|");

    for (const crate of CRATES) {
        lines.push("| " + crate.name + " | `" + crate.id + "` | " + crate.price + " | [crates/" + crate.id + ".js](" + crate.id + ".js) |");
    }

    lines.push("");
    lines.push("## Keeping them right");
    lines.push("");
    lines.push("Prices, odds and names live only in the `CRATES` table of");
    lines.push("`voidbound-world-code.js`. Regenerate these files from it:");
    lines.push("");
    lines.push("```");
    lines.push("node crates/generate.js");
    lines.push("node crates/generate.js --check");
    lines.push("```");
    lines.push("");
    lines.push("`--check` exits non-zero when a file here no longer matches the table.");

    return lines.join("\n") + "\n";
}

function wanted() {
    const files = new Map();

    files.set(path.join(__dirname, "README.md"), readme());

    for (const crate of CRATES) {
        files.set(path.join(__dirname, crate.id + ".js"), crateFile(crate));
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
        console.error("Out of date: " + stale.join(", ") + " - run node crates/generate.js");
        process.exit(1);
    }

    console.log("crates/: " + files.size + " files up to date");
} else {
    console.log("crates/: wrote " + files.size + " files");
}
