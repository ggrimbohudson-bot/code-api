const CFG = {
DB_KEY: "vb_player_v1",
CURRENCY_ID: "void_shards",
CURRENCY_NAME: "Void Shards",
CURRENCY_ICON: "coins",
CURRENCY_COLOUR: "blue",
SAVE_EVERY_MS: 60000,
PANEL_LIMIT: 1900,
BOARD_EVERY_MS: 4000,
PORTAL_CHECK_MS: 400,
PORTAL_COOLDOWN_MS: 4000,
BLACK_PORTAL_DEST: [50000.5, 60001, 49999.5],
GIVER_TALK_RANGE: 5,
RTP_CENTRE: [0, 0],
RTP_MIN_DIST: 80,
RTP_RADIUS: 500,
RTP_TOP_Y: 160,
RTP_MIN_Y: -60,
RTP_TRIES: 10,
TOP_N: 10,
MAX_PAY: 1000000,
PAY_COOLDOWN_MS: 1000,
KILL_SHARDS: 40,
MOB_SHARDS: 3,
SHARDS_PER_MINUTE: 2,
TEXT_LIMIT: 180,
IDEA_COOLDOWN_MS: 45000,
EVENTS_MAX: 20,
IDEAS_MAX: 40,
UPDATES_MAX: 40,
EVENTS_KEY: "vb_events_v1",
IDEAS_KEY: "vb_ideas_v1",
UPDATES_KEY: "vb_updates_v1",
STAFF_KEY: "vb_staff_v1",
MAX_GIVE: 256,
MAX_MUTE_MIN: 1440,
MAX_TEMP_BAN_DAYS: 30,
WARNS_MAX: 120,
};
const OWNER_NAMES = ["xvexx", "itzkasaixyt"];
const RANKS = {
owner: { key: "owner", name: "Founder", tag: "FOUNDER", colour: "#ffcc00", icon: "fa-solid fa-crown", nameColour: "yellow", level: 4 },
admin: { key: "admin", name: "Admin", tag: "ADMIN", colour: "#ff5555", icon: "fa-solid fa-shield-halved", nameColour: "red", level: 3 },
mod: { key: "mod", name: "Moderator", tag: "MOD", colour: "#55ff55", icon: "fa-solid fa-swords", nameColour: "lime", level: 2 },
trial: { key: "trial", name: "Trial Mod", tag: "TRIAL", colour: "#55ffff", icon: "fa-solid fa-star", nameColour: "aqua", level: 1 },
player: { key: "player", name: "Player", tag: "", colour: "#ffffff", icon: "fa-solid fa-user", nameColour: "default", level: 0 },
};
const MEDALS = ["#ffcc00", "#d9d9d9", "#c98a4b"];
const PERM = {
panel: 1, staffchat: 1, warn: 1, tp: 1, players: 1, warns: 1,
kick: 2, mute: 2, unmute: 2, tempban: 2,
fly: 3, give: 3, gm: 3, ban: 3, unban: 3, tphere: 3, tppos: 3, banlist: 3, clearbans: 3,
rank: 4, events: 4, updates: 4, clearlists: 4,
};
const RANK_ALIASES = {
owner: "owner", founder: "owner", owners: "owner", founders: "owner",
admin: "admin", administrator: "admin",
mod: "mod", moderator: "mod", trial: "trial", trialmod: "trial",
"trial-mod": "trial", helper: "trial", player: "player", none: "player",
member: "player", default: "player",
};
const ARMOUR_SETS = {
geo: ["Geo Helmet", "Geo Chestplate", "Geo Gauntlets", "Geo Leggings", "Geo Boots"],
serpentite: ["Serpentite Helmet", "Serpentite Chestplate", "Serpentite Gauntlets", "Serpentite Leggings", "Serpentite Boots"],
astral: ["Astral Helmet", "Astral Chestplate", "Astral Gauntlets", "Astral Leggings", "Astral Boots"],
sanguine: ["Sanguine Helmet", "Sanguine Chestplate", "Sanguine Gauntlets", "Sanguine Leggings", "Sanguine Boots"],
spectral: ["Spectral Helmet", "Spectral Chestplate", "Spectral Gauntlets", "Spectral Leggings", "Spectral Boots"],
};
const SPECTRAL_PIECES = ARMOUR_SETS.spectral;
const TOOL_SETS = {
starter: ["Stone Pickaxe", "Iron Pickaxe", "Stone Sword", "Iron Sword", "Iron Axe"],
good: ["Diamond Pickaxe", "Diamond Sword", "Diamond Axe", "Moonstone Pickaxe", "Moonstone Axe", "Knight Sword"],
serpentite: ["Serpentite Pickaxe", "Serpentite Axe", "Serpentite Sword", "Serpentite Hoe"],
spectral: ["Spectral Sword", "Spectral Spear", "Spectral Dagger", "Spectral Mace"],
};
const GEAR_POOLS = {
starter: ["Iron Sword", "Iron Pickaxe", "Gold Sword", "Iron Chestplate", "Gold Helmet"],
mid: ["Diamond Sword", "Diamond Pickaxe", "Diamond Axe", "Gold Chestplate", "Diamond Bow"],
rare: ["Knight Sword", "Diamond Chestplate", "Diamond Leggings", "Diamond Boots", "Diamond Bow"],
elite: ["Knight Sword", "Diamond Chestplate", "Moonstone Pickaxe", "Moonstone Axe", "Diamond Bow", "Diamond Leggings"],
};
const CRATES = [
{
id: "void",
name: "Void Crate",
price: 250,
icon: "Obsidian",
colour: "#b98cff",
headline: "6% enchanted tools, 6% diamonds",
blurb: "The starter gamble. Coal, diamonds and starter gear with a little enchant.",
entries: [
{ w: 44, r: "common", i: "Coal", ia: [8, 18] },
{ w: 26, r: "uncommon", i: "Diamond Fragment", ia: [1, 3] },
{ w: 18, r: "uncommon", label: "starter gear", pick: GEAR_POOLS.starter },
{ w: 6, r: "rare", i: "Diamond", ia: [1, 2] },
{ w: 6, r: "uncommon", pick: TOOL_SETS.starter, ench: [1, 1] },
],
},
{
id: "eclipse",
name: "Eclipse Crate",
price: 750,
icon: "Moonstone",
colour: "#8fd0ff",
headline: "6% enchant 2 tools, 20% diamonds",
blurb: "Mid tier. Coal by the stack, diamonds and real diamond gear.",
entries: [
{ w: 36, r: "common", i: "Coal", ia: [20, 40] },
{ w: 28, r: "uncommon", i: "Diamond Fragment", ia: [4, 8] },
{ w: 20, r: "rare", i: "Diamond", ia: [1, 3] },
{ w: 10, r: "uncommon", label: "diamond gear", pick: GEAR_POOLS.mid },
{ w: 6, r: "rare", pick: TOOL_SETS.good, ench: [2, 2] },
],
},
{
id: "geo",
name: "Geo Crate",
price: 1200,
icon: "Geo Chestplate",
colour: "#ffd75e",
headline: "1% Geo armour, 2% Geo sword tools",
blurb: "Geo country. Diamond gear and a 1% shot at Geo armour.",
entries: [
{ w: 42, r: "common", i: "Diamond Fragment", ia: [6, 12] },
{ w: 24, r: "uncommon", i: "Diamond", ia: [2, 4] },
{ w: 18, r: "uncommon", label: "diamond gear", pick: GEAR_POOLS.mid },
{ w: 13, r: "rare", i: "Moonstone Fragment", ia: [1, 2] },
{ w: 2, r: "rare", label: "Geo sword + starter tools", pick: TOOL_SETS.starter.concat(["Geo Sword"]), ench: [2, 2] },
{ w: 1, r: "epic", pick: ARMOUR_SETS.geo, ench: [2, 2], announce: true },
],
},
{
id: "serpentite",
name: "Serpentite Crate",
price: 1800,
icon: "Serpentite Sword",
colour: "#55ff55",
headline: "1% Serpentite armour, 1% Serpentite tools",
blurb: "Snake-metal. Diamonds, moonstone and Serpentite at 1%.",
entries: [
{ w: 38, r: "common", i: "Diamond", ia: [3, 6] },
{ w: 26, r: "uncommon", i: "Moonstone Fragment", ia: [2, 4] },
{ w: 20, r: "uncommon", label: "diamond gear", pick: GEAR_POOLS.mid },
{ w: 14, r: "rare", i: "Moonstone", ia: [1, 2] },
{ w: 1, r: "rare", pick: TOOL_SETS.serpentite, ench: [2, 3] },
{ w: 1, r: "epic", pick: ARMOUR_SETS.serpentite, ench: [2, 2], announce: true },
],
},
{
id: "nova",
name: "Nova Crate",
price: 2000,
icon: "Diamond",
colour: "#55ffff",
headline: "5% enchant 3 tools, 13% moonstone",
blurb: "High roller. Diamonds by the handful, moonstone and rare gear.",
entries: [
{ w: 32, r: "common", i: "Diamond", ia: [4, 8] },
{ w: 24, r: "uncommon", i: "Moonstone Fragment", ia: [3, 6] },
{ w: 20, r: "uncommon", label: "diamond gear", pick: GEAR_POOLS.mid },
{ w: 13, r: "rare", i: "Moonstone", ia: [1, 2] },
{ w: 6, r: "rare", label: "rare gear", pick: GEAR_POOLS.rare },
{ w: 5, r: "rare", pick: TOOL_SETS.good, ench: [3, 3] },
],
},
{
id: "astral",
name: "Astral Crate",
price: 3600,
icon: "Astral Sword",
colour: "#b48cff",
headline: "1% Astral armour, 2% Astral sword tools",
blurb: "Star-metal. Moonstone, rare gear and a 1% Astral armour roll.",
entries: [
{ w: 30, r: "common", i: "Moonstone Fragment", ia: [4, 8] },
{ w: 24, r: "uncommon", i: "Moonstone", ia: [2, 4] },
{ w: 22, r: "uncommon", i: "Diamond", ia: [6, 12] },
{ w: 18, r: "rare", label: "rare gear", pick: GEAR_POOLS.rare },
{ w: 3, r: "rare", pick: TOOL_SETS.good, ench: [3, 3] },
{ w: 2, r: "epic", label: "Astral sword + diamond tools", pick: TOOL_SETS.good.concat(["Astral Sword"]), ench: [3, 3] },
{ w: 1, r: "epic", pick: ARMOUR_SETS.astral, ench: [3, 3], announce: true },
],
},
{
id: "mythic",
name: "Mythic Crate",
price: 5000,
icon: "Moonstone Pickaxe",
colour: "#ffcc00",
headline: "4% enchant 4 tools, 18% elite gear",
blurb: "Endgame crate. Moonstone, elite gear and level 4 tools.",
entries: [
{ w: 30, r: "common", i: "Moonstone", ia: [3, 6] },
{ w: 24, r: "uncommon", i: "Moonstone Fragment", ia: [6, 10] },
{ w: 20, r: "uncommon", i: "Diamond", ia: [8, 14] },
{ w: 18, r: "rare", label: "elite gear", pick: GEAR_POOLS.elite },
{ w: 4, r: "epic", pick: TOOL_SETS.good, ench: [4, 4] },
{ w: 4, r: "epic", i: "Diamond Chestplate", ench: [3, 3] },
],
},
{
id: "sanguine",
name: "Sanguine Crate",
price: 8000,
icon: "Sanguine Sword",
colour: "#ff5555",
headline: "1% Sanguine armour, 1% enchant 4 sword",
blurb: "Blood-metal. Moonstone stacks, elite gear and Sanguine at 1%.",
entries: [
{ w: 28, r: "common", i: "Moonstone", ia: [4, 8] },
{ w: 22, r: "uncommon", i: "Moonstone Fragment", ia: [8, 14] },
{ w: 20, r: "uncommon", i: "Diamond", ia: [10, 18] },
{ w: 20, r: "rare", label: "elite gear", pick: GEAR_POOLS.elite },
{ w: 4, r: "epic", pick: TOOL_SETS.good, ench: [4, 4] },
{ w: 4, r: "epic", i: "Diamond Chestplate", ench: [4, 4] },
{ w: 1, r: "void", label: "Sanguine sword + diamond tools", pick: TOOL_SETS.good.concat(["Sanguine Sword"]), ench: [4, 4], announce: true },
{ w: 1, r: "void", pick: ARMOUR_SETS.sanguine, ench: [4, 4], announce: true },
],
},
{
id: "voidbound",
name: "Voidbound Crate",
price: 25000,
icon: "Spectral Sword",
colour: "#d67bff",
headline: "1% Spectral armour, 4% Spectral weapons",
blurb: "The dealer's best. Elite gear, maxed enchantment and one in a hundred Spectral armour.",
entries: [
{ w: 26, r: "common", i: "Moonstone", ia: [8, 14] },
{ w: 22, r: "uncommon", i: "Moonstone Fragment", ia: [12, 20] },
{ w: 20, r: "uncommon", i: "Diamond", ia: [16, 24] },
{ w: 19, r: "rare", label: "elite gear", pick: GEAR_POOLS.elite },
{ w: 4, r: "epic", i: "Diamond Chestplate", ench: [3, 3] },
{ w: 4, r: "epic", pick: TOOL_SETS.good, ench: [4, 4] },
{ w: 4, r: "rare", pick: TOOL_SETS.spectral, ench: [5, 5], announce: true },
{ w: 1, r: "void", pick: ARMOUR_SETS.spectral, ench: [5, 5], announce: true },
],
},
];
const RARITY_COLOUR = {
common: "#b0b0b0",
void: "#b98cff",
uncommon: "#55ff55",
rare: "#55aaff",
epic: "#d67bff",
jackpot: "#ffcc00",
};
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const P = {};    // playerId -> saved data
const RT = {};   // playerId -> runtime only
const FLY = {};  // playerId -> true when flight is toggled on
const STAFF = {
key: CFG.STAFF_KEY,
ranks: {},
bans: {},
mutes: {},
warns: [],
};
const LISTS = {
events: { key: CFG.EVENTS_KEY, max: CFG.EVENTS_MAX, items: [], nextId: 1 },
ideas: { key: CFG.IDEAS_KEY, max: CFG.IDEAS_MAX, items: [], nextId: 1 },
updates: { key: CFG.UPDATES_KEY, max: CFG.UPDATES_MAX, items: [], nextId: 1 },
};
let saveAcc = 0;
let boardAcc = 0;
function defaultData() {
return {
v: 1,
firstJoin: true,
shards: 0,
stats: {
kills: 0,
deaths: 0,
mobKills: 0,
playtimeMs: 0,
shardsEarned: 0,
cratesOpened: 0,
xp: 0,
},
quests: {},
skills: {},
homeSlots: 1,
homes: [null, null, null, null, null],
};
}
function num(v) {
const n = Number(v);
return isFinite(n) ? Math.max(0, Math.floor(n)) : 0;
}
function normalize(old) {
const d = defaultData();
if (!old || typeof old !== "object") return d;
d.firstJoin = old.firstJoin === true;
d.shards = num(old.shards);
if (old.stats && typeof old.stats === "object") {
d.stats.kills = num(old.stats.kills);
d.stats.deaths = num(old.stats.deaths);
d.stats.mobKills = num(old.stats.mobKills);
d.stats.shardsEarned = num(old.stats.shardsEarned);
d.stats.cratesOpened = num(old.stats.cratesOpened);
d.stats.playtimeMs = num(old.stats.playtimeMs);
d.stats.xp = num(old.stats.xp);
}
for (const type in QUEST_TYPES) {
const skill = old.skills && old.skills[type];
d.skills[type] = {
xp: num(skill && skill.xp),
done: num(skill && skill.done),
};
}
if (old.quests && typeof old.quests === "object") {
for (const type in QUEST_TYPES) {
const quest = old.quests[type];
if (!quest || typeof quest !== "object") continue;
const need = Math.max(1, num(quest.need));
d.quests[type] = {
need: need,
have: Math.min(num(quest.have), need),
shards: num(quest.shards),
xp: num(quest.xp),
since: num(quest.since),
};
}
}
d.homeSlots = old.homeSlots;
d.homes = old.homes;
return d;
}
function loadData(playerId) {
let raw = null;
try { raw = api.getPlayerDbValue(playerId, CFG.DB_KEY); } catch (e) { raw = null; }
if (!raw) return defaultData();
try {
const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
if (parsed && typeof parsed === "object") return normalize(parsed);
} catch (e) { }
return defaultData();
}
function ensure(playerId) {
if (!P[playerId]) {
P[playerId] = loadData(playerId);
RT[playerId] = {
minute: Math.floor(P[playerId].stats.playtimeMs / 60000),
hud: 0,
lastPayAt: -9999,
lastIdeaAt: -9999,
lastQuestAt: 0,
pending: null,
};
}
ensureHomes(P[playerId]);
return P[playerId];
}
const LAST_ERRORS = [];
function noteError(where, e) {
const text = where + ": " + (e && e.message ? e.message : String(e));
LAST_ERRORS.push(text);
if (LAST_ERRORS.length > 10) LAST_ERRORS.shift();
}
function saveNow(playerId) {
const d = P[playerId];
if (!d) return;
try { api.setPlayerDbValue(playerId, CFG.DB_KEY, JSON.stringify(d)); } catch (e) { }
}
function saveAll() {
for (const id in P) saveNow(id);
}
function loadLists() {
for (const name in LISTS) {
const list = LISTS[name];
let raw = null;
try { raw = api.getLobbyDbValue(list.key); } catch (e) { raw = null; }
list.items = [];
list.nextId = 1;
if (!raw) continue;
try {
const arr = typeof raw === "string" ? JSON.parse(raw) : raw;
if (!Array.isArray(arr)) continue;
for (let i = 0; i < arr.length && list.items.length < list.max; i++) {
const it = arr[i];
if (!it || typeof it !== "object") continue;
const text = String(it.text || "").slice(0, CFG.TEXT_LIMIT);
if (!text) continue;
const entry = {
id: Math.max(1, num(it.id)),
text: text,
by: String(it.by || "unknown").slice(0, 32),
at: num(it.at) || Date.now(),
};
list.items.push(entry);
if (entry.id >= list.nextId) list.nextId = entry.id + 1;
}
} catch (e) {
list.items = [];
}
}
}
function saveList(name) {
const list = LISTS[name];
if (!list) return;
try { api.setLobbyDbValue(list.key, JSON.stringify(list.items)); } catch (e) { }
}
function addToList(name, text, by) {
const list = LISTS[name];
if (!list) return null;
const clean = String(text || "").trim().slice(0, CFG.TEXT_LIMIT);
if (!clean) return null;
const entry = { id: list.nextId++, text: clean, by: String(by || "unknown"), at: Date.now() };
list.items.push(entry);
while (list.items.length > list.max) list.items.shift();
saveList(name);
return entry;
}
function removeFromList(name, id) {
const list = LISTS[name];
if (!list) return false;
for (let i = 0; i < list.items.length; i++) {
if (list.items[i].id === id) {
list.items.splice(i, 1);
saveList(name);
return true;
}
}
return false;
}
function loadStaff() {
STAFF.ranks = {};
STAFF.bans = {};
STAFF.mutes = {};
STAFF.warns = [];
let raw = null;
try { raw = api.getLobbyDbValue(STAFF.key); } catch (e) { raw = null; }
if (!raw) return;
try {
const data = typeof raw === "string" ? JSON.parse(raw) : raw;
if (!data || typeof data !== "object") return;
if (data.ranks && typeof data.ranks === "object") {
for (const key in data.ranks) {
const rec = data.ranks[key];
if (!rec || !RANKS[rec.r]) continue;
STAFF.ranks[String(key).toLowerCase()] = {
r: rec.r,
by: String(rec.by || "unknown").slice(0, 32),
at: num(rec.at),
};
}
}
if (data.bans && typeof data.bans === "object") {
for (const key in data.bans) {
const rec = data.bans[key];
if (!rec) continue;
STAFF.bans[String(key).toLowerCase()] = {
by: String(rec.by || "unknown").slice(0, 32),
at: num(rec.at),
reason: String(rec.reason || "No reason given").slice(0, 120),
until: num(rec.until),
};
}
}
if (data.mutes && typeof data.mutes === "object") {
for (const key in data.mutes) {
const rec = data.mutes[key];
if (!rec) continue;
STAFF.mutes[String(key).toLowerCase()] = {
by: String(rec.by || "unknown").slice(0, 32),
at: num(rec.at),
reason: String(rec.reason || "No reason given").slice(0, 120),
until: num(rec.until),
};
}
}
if (Array.isArray(data.warns)) {
for (let i = 0; i < data.warns.length && STAFF.warns.length < CFG.WARNS_MAX; i++) {
const w = data.warns[i];
if (!w || !w.name) continue;
STAFF.warns.push({
name: String(w.name).slice(0, 32),
by: String(w.by || "unknown").slice(0, 32),
at: num(w.at),
reason: String(w.reason || "").slice(0, 120),
});
}
}
} catch (e) {
STAFF.ranks = {};
STAFF.bans = {};
STAFF.mutes = {};
STAFF.warns = [];
}
}
function saveStaff() {
const payload = {
ranks: STAFF.ranks,
bans: STAFF.bans,
mutes: STAFF.mutes,
warns: STAFF.warns,
};
try { api.setLobbyDbValue(STAFF.key, JSON.stringify(payload)); } catch (e) { }
}
function pruneStaff() {
const now = Date.now();
let changed = false;
for (const key in STAFF.bans) {
const rec = STAFF.bans[key];
if (rec.until && rec.until <= now) {
delete STAFF.bans[key];
changed = true;
}
}
for (const key in STAFF.mutes) {
const rec = STAFF.mutes[key];
if (rec.until && rec.until <= now) {
delete STAFF.mutes[key];
changed = true;
}
}
if (changed) saveStaff();
}
const NAMED_COLOURS = {
"#ffcc00": "gold", "#ffd75e": "gold", "#c98a4b": "goldenrod",
"#ff5555": "red", "#ff6666": "red", "#ff9a9a": "salmon",
"#55ff55": "lime", "#55ffff": "aqua", "#55aaff": "dodgerblue",
"#8fd0ff": "skyblue", "#b48cff": "violet", "#ffff55": "yellow",
"#b98cff": "violet", "#d67bff": "violet", "#c9a7ff": "violet",
"#ffaa55": "orange", "#8a8a8a": "gray", "#aaaaaa": "darkgray",
"#b0b0b0": "silver", "#e0e0e0": "gainsboro", "#ffffff": "white",
"#dddddd": "gainsboro", "#d9d9d9": "silver", "#c9c9c9": "silver",
"#bfbfbf": "silver", "#9a9a9a": "gray", "#5a5a5a": "dimgray",
"#3f3f3f": "dimgray",
};
function colourName(hex) {
const key = String(hex || "").toLowerCase();
return NAMED_COLOURS[key] || key || "white";
}
function styleFor(hex) {
const value = colourName(hex);
return { color: value, colour: value };
}
function say(playerId, text, colour) {
if (!colour) {
try { api.sendMessage(playerId, text); } catch (e) { }
return;
}
const value = colourName(colour);
try {
api.sendMessage(playerId, text, { color: value, colour: value });
return;
} catch (e) { }
try {
api.sendMessage(playerId, text, { colour: value });
return;
} catch (e) { }
try { api.sendMessage(playerId, text, { color: value }); } catch (e) { }
}
function broadcast(text, colour) {
try {
api.broadcastMessage(text, colour ? { color: colour } : undefined);
} catch (e) { }
}
function fmtNum(value) {
const n = Math.floor(Number(value) || 0);
const digits = String(Math.abs(n));
let out = "";
for (let i = 0; i < digits.length; i++) {
if (i > 0 && (digits.length - i) % 3 === 0) out += ",";
out += digits[i];
}
return (n < 0 ? "-" : "") + out;
}
function fmtTime(ms) {
const total = Math.floor((Number(ms) || 0) / 1000);
const h = Math.floor(total / 3600);
const m = Math.floor((total % 3600) / 60);
if (h > 0) return h + "h " + m + "m";
if (m > 0) return m + "m " + (total % 60) + "s";
return total + "s";
}
function fmtShortTime(ms) {
const total = Math.floor((Number(ms) || 0) / 1000);
const h = Math.floor(total / 3600);
const m = Math.floor((total % 3600) / 60);
if (h > 0) return h + "h " + m + "m";
if (m > 0) return m + "m";
return "<1m";
}
function fmtHours(ms) {
return Math.round(((Number(ms) || 0) / 3600000) * 10) / 10;
}
function fmtStamp(at) {
const d = new Date(Number(at) || Date.now());
const day = d.getDate();
const month = MONTHS[d.getMonth()] || "?";
const hh = d.getHours();
const mm = d.getMinutes();
const pad = function (n) { return n < 10 ? "0" + n : String(n); };
return month + " " + day + ", " + pad(hh) + ":" + pad(mm);
}
function nameOf(playerId) {
try { return api.getEntityName(playerId) || String(playerId); } catch (e) { return String(playerId); }
}
function keyOf(input) {
return String(input || "").trim().toLowerCase();
}
function rankInfoForName(input) {
const key = keyOf(input);
if (!key) return RANKS.player;
if (OWNER_NAMES.indexOf(key) !== -1) return RANKS.owner;
const online = findPlayer(key);
if (online) {
try {
if (api.ownerDbId && api.getPlayerDbId(online) === api.ownerDbId) return RANKS.owner;
} catch (e) { }
}
const rec = STAFF.ranks[key];
if (rec && RANKS[rec.r]) return RANKS[rec.r];
return RANKS.player;
}
function rankInfo(playerId) {
return rankInfoForName(nameOf(playerId));
}
function rankLevel(playerId) {
return rankInfo(playerId).level;
}
function isOwner(playerId) {
return rankLevel(playerId) >= RANKS.owner.level;
}
function hasPerm(playerId, action) {
const need = PERM[action];
if (need === undefined) return false;
return rankLevel(playerId) >= need;
}
function rankNameForLevel(level) {
if (level >= 4) return RANKS.owner.name;
if (level === 3) return RANKS.admin.name;
if (level === 2) return RANKS.mod.name;
if (level === 1) return RANKS.trial.name;
return RANKS.player.name;
}
function deny(playerId, action) {
const need = PERM[action] === undefined ? 4 : PERM[action];
say(playerId, "No permission - " + action + " needs " + rankNameForLevel(need) + " rank.", "#ff5555");
return false;
}
function tagText(playerId) {
const r = rankInfo(playerId);
return r.tag ? "[" + r.tag + "] " : "";
}
function segIcon(name, colour) {
return colour ? { icon: name, style: styleFor(colour) } : { icon: name };
}
function segText(value, colour) {
return colour ? { str: String(value), style: styleFor(colour) } : { str: String(value) };
}
function richSay(playerId, segments) {
try {
api.sendMessage(playerId, compactSegments(segments));
return;
} catch (e) { }
let flat = "";
let colour = "";
for (let i = 0; i < segments.length; i++) {
const seg = segments[i];
if (typeof seg === "string") {
flat += seg;
} else if (seg && seg.str !== undefined) {
flat += String(seg.str);
if (!colour && seg.style && seg.style.color) colour = seg.style.color;
}
}
if (flat) say(playerId, flat, colour || "#ffffff");
}
function cmdStyleTest(playerId) {
say(playerId, "STYLE TEST - which numbers below show colour or a crown?", "#8a8a8a");
const lines = [
function () { api.sendMessage(playerId, "1 plain string"); },
function () { api.sendMessage(playerId, "2 color: gold", { color: "gold" }); },
function () { api.sendMessage(playerId, "3 colour: gold", { colour: "gold" }); },
function () { api.sendMessage(playerId, "4 color+colour: gold", { color: "gold", colour: "gold" }); },
function () { api.sendMessage(playerId, "5 color: #55ff55", { color: "#55ff55" }); },
function () { api.sendMessage(playerId, "6 colour: #55ff55", { colour: "#55ff55" }); },
function () { api.sendMessage(playerId, [{ str: "7 styled str", style: { color: "gold", colour: "gold" } }]); },
function () { api.sendMessage(playerId, [{ icon: "fa-solid fa-crown", style: { color: "gold", colour: "gold" } }, { str: " 8 icon + styled text", style: { color: "gold", colour: "gold" } }]); },
function () { api.sendMessage(playerId, [{ icon: "fa-solid fa-crown" }, " 9 icon + plain string"]); },
];
for (let i = 0; i < lines.length; i++) {
try {
lines[i]();
} catch (e) {
say(playerId, "line " + (i + 1) + " failed to send", "#ff5555");
}
}
}
function dotsFor(value, width) {
const len = String(value || "").length;
const count = Math.max(2, width - len);
let out = "";
for (let i = 0; i < count; i++) out += ".";
return out;
}
function medalFor(index) {
if (index === 0) return segIcon("fa-solid fa-crown", MEDALS[0]);
if (index < 3) return segIcon("fa-solid fa-star", MEDALS[index]);
return segText("#" + (index + 1), "#8a8a8a");
}
function applyRankCosmetics(playerId) {
if (!playerId) return;
const r = rankInfo(playerId);
try {
api.setTargetedPlayerSettingForEveryone(playerId, "nameColour", r.nameColour || "default", true);
} catch (e) { }
try {
api.setTargetedPlayerSettingForEveryone(playerId, "nameTagInfo", r.level > 0 ? {
subtitle: [segText(r.tag, r.colour)],
border: { colour: colourName(r.colour), style: "glow" },
} : null, true);
} catch (e) { }
}
function staffList() {
const out = [];
for (const id in P) {
const r = rankInfo(id);
if (r.level > 0) out.push({ id: id, r: r });
}
out.sort(function (a, b) { return b.r.level - a.r.level; });
return out;
}
function findPlayer(input) {
const want = String(input || "").trim().toLowerCase();
if (!want) return null;
if (P[input]) return input;
try {
const id = api.getPlayerId(input);
if (id && P[id]) return id;
} catch (e) { }
for (const id in P) {
if (nameOf(id).toLowerCase() === want) return id;
}
return null;
}
function onlineCount() {
let n = 0;
for (const id in P) n++;
return n;
}
function syncShards(playerId) {
const d = P[playerId];
if (!d) return;
try {
api.setCurrency(playerId, CFG.CURRENCY_ID, {
amount: Math.floor(d.shards),
icon: CFG.CURRENCY_ICON,
iconColour: CFG.CURRENCY_COLOUR,
persistent: false,
});
} catch (e) {
try { api.setCurrencyAmount(playerId, CFG.CURRENCY_ID, Math.floor(d.shards)); } catch (e2) { }
}
}
function addShards(playerId, amount, quiet) {
const d = ensure(playerId);
const gain = Math.floor(Number(amount) || 0);
if (gain <= 0) return 0;
d.shards += gain;
d.stats.shardsEarned += gain;
syncShards(playerId);
if (!quiet) say(playerId, "+" + fmtNum(gain) + " " + CFG.CURRENCY_NAME, "#55ff55");
return gain;
}
function takeShards(playerId, amount) {
const d = ensure(playerId);
const cost = Math.floor(Number(amount) || 0);
if (cost <= 0) return false;
if (d.shards < cost) return false;
d.shards -= cost;
syncShards(playerId);
return true;
}
function crateById(input) {
const want = String(input || "").trim().toLowerCase();
if (!want) return null;
for (let i = 0; i < CRATES.length; i++) {
const c = CRATES[i];
if (c.id === want || c.name.toLowerCase() === want) return c;
}
const index = parseInt(want, 10);
if (index >= 1 && index <= CRATES.length) return CRATES[index - 1];
return null;
}
function rollEntry(crate) {
let total = 0;
for (let i = 0; i < crate.entries.length; i++) total += crate.entries[i].w;
let roll = Math.random() * total;
for (let i = 0; i < crate.entries.length; i++) {
const e = crate.entries[i];
roll -= e.w;
if (roll <= 0) return e;
}
return crate.entries[crate.entries.length - 1];
}
function randInt(min, max) {
const a = Math.floor(Number(min) || 0);
const b = Math.floor(Number(max) || a);
if (b <= a) return a;
return a + Math.floor(Math.random() * (b - a + 1));
}
function openCrate(playerId, crate) {
const d = ensure(playerId);
const entry = rollEntry(crate);
d.stats.cratesOpened++;
const colour = RARITY_COLOUR[entry.r] || "#ffffff";
say(playerId, "Opening " + crate.name + "...", "#9a9a9a");
const chosen = entry.pick ? entry.pick[randInt(0, entry.pick.length - 1)] : entry.i;
if (chosen) {
const level = entry.ench ? randInt(entry.ench[0], entry.ench[1]) : 0;
const amount = level ? 1 : randInt(entry.ia ? entry.ia[0] : 1, entry.ia ? entry.ia[1] : 1);
let given = 0;
if (level) {
given = giveEnchanted(playerId, chosen, level);
} else {
try { given = api.giveItem(playerId, chosen, amount); } catch (e) { given = 0; }
}
if (!given) {
const fallback = entry.fallback || (level ? Math.round(crate.price * 0.6) : 120 * amount);
addShards(playerId, fallback, true);
say(playerId, "Inventory full - converted to " + fmtNum(fallback) + " " + CFG.CURRENCY_NAME + ".", "#ffaa55");
} else {
say(playerId, "[" + entry.r.toUpperCase() + "] " + chosen + (level ? " - enchant " + level : " x" + given) + "!", colour);
if (entry.announce || entry.r === "epic" || entry.r === "jackpot") {
broadcast(nameOf(playerId) + " unboxed " + chosen + (level ? " (enchant " + level + ")" : "") + " from a " + crate.name + "!", colour);
}
}
} else {
const amount = randInt(entry.s[0], entry.s[1]);
addShards(playerId, amount, true);
say(playerId, "[" + entry.r.toUpperCase() + "] +" + fmtNum(amount) + " " + CFG.CURRENCY_NAME + "!", colour);
if (entry.r === "jackpot") {
broadcast(nameOf(playerId) + " hit the JACKPOT: " + fmtNum(amount) + " " + CFG.CURRENCY_NAME + " from a " + crate.name + "!", colour);
}
}
try { api.playSound(playerId, "chestOpen", 1, 1); } catch (e) { }
if (entry.announce || entry.r === "epic" || entry.r === "jackpot" || entry.r === "void") {
try { api.playSound(playerId, "levelup", 1, 1); } catch (e) { }
}
}
function giveEnchanted(playerId, itemName, level) {
let attributes = null;
try { attributes = api.createEnchantmentAttributesForItem(itemName, level); } catch (e) { noteError("enchant " + itemName, e); }
try {
if (attributes) return api.giveItem(playerId, itemName, 1, attributes);
return api.giveItem(playerId, itemName, 1);
} catch (e) {
noteError("give enchanted " + itemName, e);
return 0;
}
}
function boardColumns() {
return {
name: { displayName: "ℕ𝔸𝕄𝔼", sortPriority: 10 },
level: { displayName: "𝕃𝔼𝕍𝔼𝕃 %", sortPriority: 9, sortOrder: "descending" },
kills: { displayName: "𝕂𝕀𝕃𝕃𝕊", sortPriority: 8, sortOrder: "descending" },
shards: { displayName: "𝕊ℍ𝔸ℝ𝔻𝕊", sortPriority: 7, sortOrder: "descending" },
hours: { displayName: "ℍ𝕆𝕌ℝ𝕊", sortPriority: 6, sortOrder: "descending" },
};
}
function setupBoard(playerId, force) {
const rt = RT[playerId] || (RT[playerId] = {});
const now = Date.now();
if (!force && rt.boardColsAt && now - rt.boardColsAt < 60000) return;
rt.boardColsAt = now;
try {
api.setClientOption(playerId, "lobbyLeaderboardInfo", boardColumns());
} catch (e) { }
}
function syncBoard(playerId, force) {
const d = P[playerId];
if (!d) return;
const r = rankInfo(playerId);
const row = {
kills: d.stats.kills,
level: levelPercent(d.stats.xp),
shards: Math.floor(d.shards),
hours: fmtHours(d.stats.playtimeMs),
colour: r.level > 0 ? colourName(r.colour) : "",
};
const rt = RT[playerId] || (RT[playerId] = {});
const hash = JSON.stringify(row);
const now = Date.now();
if (!force && rt.boardHash === hash && now - (rt.boardAt || 0) < 60000) return;
rt.boardHash = hash;
rt.boardAt = now;
try {
api.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", {
kills: row.kills,
level: row.level,
shards: row.shards,
hours: row.hours,
}, true);
} catch (e) { }
try {
api.setTargetedPlayerSettingForEveryone(playerId, "colorInLobbyLeaderboard", row.colour, true);
} catch (e) { }
}
function boardKey(mode) {
if (mode === "shards" || mode === "coins" || mode === "money") return "shards";
if (mode === "playtime" || mode === "time" || mode === "hours") return "playtime";
return "kills";
}
function valueFor(d, key) {
if (key === "shards") return d.shards;
if (key === "playtime") return d.stats.playtimeMs;
return d.stats.kills;
}
function rankedBy(key) {
const rows = [];
for (const id in P) {
rows.push({ id: id, value: valueFor(P[id], key) });
}
rows.sort(function (a, b) {
if (b.value !== a.value) return b.value - a.value;
return String(a.id) < String(b.id) ? -1 : 1;
});
return rows;
}
function placeOf(playerId, key) {
const rows = rankedBy(key);
for (let i = 0; i < rows.length; i++) {
if (rows[i].id === playerId) return i + 1;
}
return rows.length + 1;
}
function compactSegments(list) {
const out = [];
for (const part of list) {
const last = out[out.length - 1];
const textOnly = last && typeof part.str === "string" && typeof last.str === "string" &&
!part.icon && !last.icon && !part.entityName && !last.entityName;
const sameStyle = last && (!part.style || last.style === undefined ||
JSON.stringify(last.style) === JSON.stringify(part.style));
if (textOnly && sameStyle) {
out[out.length - 1] = { str: last.str + part.str, style: last.style || part.style };
continue;
}
out.push(part);
}
return out;
}
function rightInfoText(playerId) {
const d = P[playerId];
if (!d) return "";
const r = rankInfo(playerId);
const shown = nameOf(playerId);
const nameColour = r.level > 0 ? r.colour : "#ffffff";
const out = [];
out.push(segText(gameTitle(), "#ffcc00"));
out.push(segText("\n"));
out.push(segIcon(r.icon, r.level > 0 ? r.colour : "#b0b0b0"));
out.push(segText(" " + shown, nameColour));
out.push(segText("\n"));
out.push(segIcon("fa-solid fa-coins", "#ffd75e"));
out.push(segText(" " + fmtNum(d.shards), "#ffd75e"));
out.push(segText("   ", "#8a8a8a"));
out.push(segIcon("fa-solid fa-trophy", "#c9c9c9"));
out.push(segText(" #" + placeOf(playerId, "kills"), "#c9c9c9"));
out.push(segText("\n"));
out.push(segIcon("fa-solid fa-clock-rotate-left", "#8fd0ff"));
out.push(segText(" " + fmtShortTime(d.stats.playtimeMs), "#8fd0ff"));
out.push(segText("   ", "#8a8a8a"));
out.push(segIcon("fa-solid fa-swords", "#ff9a9a"));
out.push(segText(" " + d.stats.kills + " K  " + d.stats.deaths + " D", "#ff9a9a"));
const levelLine = [];
for (const key in QUEST_TYPES) {
const xp = skillOf(playerId, key).xp;
levelLine.push(QUEST_TYPES[key].short + " Lv" + levelFor(xp) + " " + levelPercent(xp) + "%");
}
out.push(segText("\n" + levelLine.join("  |  "), "#c9a6ff"));
out.push(segText("\n QUESTS ", "#ffcc00"));
for (const key in QUEST_TYPES) {
const giver = QUEST_TYPES[key];
const quest = d.quests[key];
if (!quest) {
out.push(segText("\n" + giver.short + ": see " + giver.title, "#5a5a5a"));
continue;
}
const ready = quest.have >= quest.need;
out.push(segText("\n" + giver.short + " T" + (quest.tier || 1) + " " + quest.have + "/" + quest.need + " " + giver.unit + (ready ? "  CLAIM" : ""), ready ? "#55ff55" : giver.colour));
}
if (LISTS.events.items.length) {
const event = LISTS.events.items[LISTS.events.items.length - 1];
out.push(segText("\n"));
out.push(segIcon("fa-solid fa-flag", "#ffaa55"));
out.push(segText(" " + event.text.slice(0, 30), "#ffaa55"));
}
out.push(segText("\n"));
out.push(segIcon("fa-solid fa-user-group", "#8fd0ff"));
out.push(segText(" " + DISCORD_LINK.replace("https://", ""), "#8fd0ff"));
return compactSegments(out);
}
function rightInfoPlain(playerId) {
const d = P[playerId];
if (!d) return "";
const r = rankInfo(playerId);
const lines = [
gameTitle(),
(r.tag ? "[" + r.tag + "] " : "") + nameOf(playerId),
fmtNum(d.shards) + " shards   #" + placeOf(playerId, "kills") + " kills",
fmtShortTime(d.stats.playtimeMs) + "   " + d.stats.kills + " K  " + d.stats.deaths + " D",
];
for (const key in QUEST_TYPES) {
const xp = skillOf(playerId, key).xp;
lines.push(QUEST_TYPES[key].short + " Lv" + levelFor(xp) + " " + levelPercent(xp) + "% " + levelBar(xp));
}
for (const key in QUEST_TYPES) {
const quest = d.quests[key];
if (!quest) continue;
lines.push(QUEST_TYPES[key].short + " T" + (quest.tier || 1) + " " + quest.have + "/" + quest.need + " " + QUEST_TYPES[key].unit + (quest.have >= quest.need ? " CLAIM" : ""));
}
if (LISTS.events.items.length) {
lines.push("Event: " + LISTS.events.items[LISTS.events.items.length - 1].text.slice(0, 30));
}
lines.push(DISCORD_LINK);
return lines.join("\n");
}
const PANEL_OFF = {};
function pushRightInfo(playerId, force) {
if (!P[playerId]) return;
const rt = RT[playerId] || (RT[playerId] = {});
if (PANEL_OFF[playerId]) {
if (rt.panelHidden !== true) {
rt.panelHidden = true;
try { api.setClientOption(playerId, "RightInfoText", ""); } catch (e) { }
}
return;
}
rt.panelHidden = false;
let text = rightInfoText(playerId);
if (JSON.stringify(text).length > CFG.PANEL_LIMIT) text = rightInfoPlain(playerId);
const hash = JSON.stringify(text);
const now = Date.now();
if (!force && rt.panelHash === hash && now - (rt.panelAt || 0) < 60000) return;
rt.panelHash = hash;
rt.panelAt = now;
try {
api.setClientOption(playerId, "RightInfoText", text);
return;
} catch (e) { }
try { api.setClientOption(playerId, "RightInfoText", rightInfoPlain(playerId)); } catch (e) { }
}
function cmdPanel(playerId) {
PANEL_OFF[playerId] = !PANEL_OFF[playerId];
pushRightInfo(playerId, true);
say(playerId, PANEL_OFF[playerId] ? "Side panel hidden. /panel to bring it back." : "Side panel back on.", "#55ff55");
}
function boardTick() {
for (const id in P) {
setupBoard(id);
syncBoard(id);
pushRightInfo(id);
}
}
function cmdBoardRefresh(playerId) {
let count = 0;
for (const id in P) {
setupBoard(id, true);
syncBoard(id, true);
count++;
}
say(playerId, "Leaderboard refreshed for " + count + " player" + (count === 1 ? "" : "s") + ". Press G.", "#55ff55");
}
const HOME_SLOTS = 5;
const HOME_COST = 1000;
const LOBBY_SPAWN = [10000, -9999, 10000];
const HOME_NAME_MAX = 20;
function ensureHomes(d) {
if (!d) return d;
let slots = Math.floor(Number(d.homeSlots));
if (!isFinite(slots) || slots < 1) slots = 1;
if (slots > HOME_SLOTS) slots = HOME_SLOTS;
d.homeSlots = slots;
const old = Array.isArray(d.homes) ? d.homes : [];
const homes = [];
for (let i = 0; i < HOME_SLOTS; i++) {
const h = old[i];
const ok = h && typeof h === "object" && isFinite(Number(h.x)) && isFinite(Number(h.y)) && isFinite(Number(h.z));
const name = ok && typeof h.name === "string" ? cleanHomeName(h.name) : "";
homes.push(ok ? { x: Number(h.x), y: Number(h.y), z: Number(h.z), name: name } : null);
}
d.homes = homes;
return d;
}
function teleportTo(playerId, x, y, z) {
try {
api.setPosition(playerId, Number(x), Number(y), Number(z));
return true;
} catch (e) {
noteError("teleport", e);
say(playerId, "Teleport failed - try again.", "#ff5555");
return false;
}
}
function hereSpot(playerId) {
let pos = null;
try { pos = api.getPosition(playerId); } catch (e) { return null; }
if (!pos) return null;
if (!isFinite(Number(pos[0])) || !isFinite(Number(pos[1])) || !isFinite(Number(pos[2]))) return null;
return { x: Number(pos[0]), y: Number(pos[1]), z: Number(pos[2]) };
}
function homeSlotArg(raw) {
const n = Math.floor(Number(raw));
if (!isFinite(n) || n < 1 || n > HOME_SLOTS) return 0;
return n;
}
function setHome(playerId, raw) {
const d = ensureHomes(ensure(playerId));
const slot = homeSlotArg(raw);
if (!slot) {
say(playerId, "Pick a home 1-" + HOME_SLOTS + ": /sethome 2", "#ff5555");
return false;
}
if (slot > d.homeSlots) {
say(playerId, "Home " + slot + " is locked. Unlock it for " + fmtNum(HOME_COST) + " " + CFG.CURRENCY_NAME + " in the utilities menu.", "#ff5555");
return false;
}
const spot = hereSpot(playerId);
if (!spot) {
say(playerId, "Could not read your position - stand still and try again.", "#ff5555");
return false;
}
const old = d.homes[slot - 1];
d.homes[slot - 1] = { x: spot.x, y: spot.y, z: spot.z, name: old && old.name ? old.name : "" };
saveNow(playerId);
syncClientButtons(playerId);
say(playerId, "Home " + slot + " set to " + Math.round(spot.x) + ", " + Math.round(spot.y) + ", " + Math.round(spot.z) + ".", "#55ff55");
return true;
}
function useHome(playerId, raw) {
const d = ensureHomes(ensure(playerId));
const slot = homeSlotArg(raw);
if (!slot) {
cmdHomes(playerId);
return false;
}
if (slot > d.homeSlots) {
say(playerId, "Home " + slot + " is locked. Unlock it for " + fmtNum(HOME_COST) + " " + CFG.CURRENCY_NAME + ".", "#ff5555");
return false;
}
const home = d.homes[slot - 1];
if (!home) {
say(playerId, "Home " + slot + " is empty. Stand where you want it and /sethome " + slot + ".", "#ff5555");
return false;
}
if (!teleportTo(playerId, home.x, home.y, home.z)) return false;
say(playerId, homeLabel(d, slot - 1) + ".", "#55ff55");
return true;
}
function unlockHome(playerId, raw) {
const d = ensureHomes(ensure(playerId));
const slot = homeSlotArg(raw);
if (!slot || slot <= d.homeSlots) return false;
if (slot !== d.homeSlots + 1) {
say(playerId, "Unlock your homes in order - home " + (d.homeSlots + 1) + " is next.", "#ff5555");
return false;
}
if (d.shards < HOME_COST) {
say(playerId, "Need " + fmtNum(HOME_COST - d.shards) + " more " + CFG.CURRENCY_NAME + " for home " + slot + ".", "#ff5555");
return false;
}
if (!takeShards(playerId, HOME_COST)) return false;
d.homeSlots = slot;
saveNow(playerId);
syncClientButtons(playerId);
say(playerId, "Home " + slot + " unlocked for " + fmtNum(HOME_COST) + " " + CFG.CURRENCY_NAME + ". /sethome " + slot, "#55ff55");
return true;
}
function cmdHomes(playerId) {
const d = ensureHomes(ensure(playerId));
say(playerId, "== HOMES ==", "#ffcc00");
say(playerId, d.homeSlots + " of " + HOME_SLOTS + " slots unlocked.", "#8fd0ff");
for (let i = 0; i < HOME_SLOTS; i++) {
const n = i + 1;
const home = d.homes[i];
if (n > d.homeSlots) say(playerId, "  " + n + ": locked - " + fmtNum(HOME_COST) + " " + CFG.CURRENCY_NAME, "#5a5a5a");
else if (!home) say(playerId, "  " + n + ": empty - /sethome " + n, "#8a8a8a");
else say(playerId, "  " + n + ": " + homeLabel(d, i) + " - " + Math.round(home.x) + ", " + Math.round(home.y) + ", " + Math.round(home.z), "#55ff55");
}
say(playerId, "/home <n> teleports, /sethome <n> moves one.", "#5a5a5a");
say(playerId, "/renamehome <n> <name> names one, /delhome <n> clears one without losing the slot.", "#5a5a5a");
}
function cmdLobby(playerId) {
ensure(playerId);
if (!teleportTo(playerId, LOBBY_SPAWN[0], LOBBY_SPAWN[1], LOBBY_SPAWN[2])) return;
say(playerId, "Lobby spawn.", "#8fd0ff");
}
function cleanHomeName(raw) {
let text = String(raw === undefined || raw === null ? "" : raw).replace(/[\u0000-\u001f\u007f]/g, " ");
text = text.replace(/\s+/g, " ").trim();
if (text.length > HOME_NAME_MAX) text = text.slice(0, HOME_NAME_MAX).trim();
return text;
}
function homeLabel(d, index) {
const home = d.homes[index];
const n = index + 1;
if (!home) return "Home " + n;
return home.name ? "Home " + n + " - " + home.name : "Home " + n;
}
function renameHome(playerId, slot, raw) {
const d = ensureHomes(ensure(playerId));
const home = d.homes[slot - 1];
if (!home) {
say(playerId, "Home " + slot + " is empty - set it before naming it.", "#ff5555");
return false;
}
const name = cleanHomeName(raw);
if (!name) {
say(playerId, "Type a name next to the home first.", "#ff5555");
return false;
}
home.name = name;
saveNow(playerId);
say(playerId, "Home " + slot + " is now called \"" + name + "\".", "#55ff55");
return true;
}
function deleteHome(playerId, raw) {
const d = ensureHomes(ensure(playerId));
const slot = homeSlotArg(raw);
if (!slot) {
say(playerId, "Type which home to delete: 1-" + HOME_SLOTS + ".", "#ff5555");
return false;
}
if (!d.homes[slot - 1]) {
say(playerId, "Home " + slot + " is already empty.", "#ff5555");
return false;
}
d.homes[slot - 1] = null;
saveNow(playerId);
say(playerId, "Home " + slot + " deleted. The slot stays unlocked - press it to set a new spot.", "#55ff55");
return true;
}
function cmdHelp(playerId) {
say(playerId, "== " + gameTitle() + " ==", "#ffcc00");
say(playerId, "ECONOMY", "#55aaff");
say(playerId, "  /lb [kills|shards|playtime] - leaderboard", "#ffffff");
say(playerId, "  /stats - your profile", "#ffffff");
say(playerId, "  /shards - balance", "#ffffff");
say(playerId, "  /pay <player> <amount> - send shards", "#ffffff");
say(playerId, "  /crates - crate list", "#ffffff");
say(playerId, "  /crate buy <id> - buy and open a crate", "#ffffff");
say(playerId, "  /crate info <id> - every payout and its chance", "#ffffff");
say(playerId, "HOMES", "#55aaff");
say(playerId, "  /home [1-" + HOME_SLOTS + "] - teleport home", "#ffffff");
say(playerId, "  /sethome [1-" + HOME_SLOTS + "] - set a home here", "#ffffff");
say(playerId, "  /homes - your slots, what is unlocked and set", "#ffffff");
say(playerId, "  /renamehome <n> <name> - name a home", "#ffffff");
say(playerId, "  /delhome <n> - clear a home, keep the slot", "#ffffff");
say(playerId, "  /spawn - back to the lobby", "#ffffff");
say(playerId, "QUESTS", "#55aaff");
say(playerId, "  /quests - your quests and XP", "#ffffff");
say(playerId, "  /quest <fishing|hunting|mining|killing> - talk to a giver", "#ffffff");
say(playerId, "SERVER", "#55aaff");
say(playerId, "  /events - scheduled events", "#ffffff");
say(playerId, "  /event idea <text> - propose an event", "#ffffff");
say(playerId, "  /events ideas - read event ideas", "#ffffff");
say(playerId, "  /updates - update log", "#ffffff");
say(playerId, "  /staff - who is online to help", "#ffffff");
say(playerId, "  /board - refresh the G leaderboard", "#ffffff");
say(playerId, "  /discord - the server invite link", "#ffffff");
say(playerId, "  /panel - hide or show the side panel", "#ffffff");
if (hasPerm(playerId, "panel")) {
const r = rankInfo(playerId);
say(playerId, "STAFF (" + r.name + ")", r.colour);
say(playerId, "  Press B or N - staff menu with every tool you can use", "#ffffff");
say(playerId, "  /admin - text version of the same panel", "#ffffff");
say(playerId, "  /giverturn <type> [degrees] - aim a quest giver", "#ffffff");
say(playerId, "  /giverskin <type> [skin|next] - change a giver's skin", "#ffffff");
}
say(playerId, "  /diag - check givers, panel and recent errors", "#ffffff");
say(playerId, "Text not showing colour? Test it with /style", "#5a5a5a");
say(playerId, "Kill players, kill mobs and stay online to earn Void Shards.", "#8a8a8a");
}
function cmdStats(playerId) {
const d = ensure(playerId);
const r = rankInfo(playerId);
say(playerId, "Level " + levelFor(d.stats.xp) + "  |  " + fmtNum(d.stats.xp) + " XP  |  " + xpIntoLevel(d.stats.xp) + "/" + xpToNextLevel(d.stats.xp) + " to next", "#b48cff");
say(playerId, skillSummary(playerId), "#8a8a8a");
richSay(playerId, [
segIcon("fa-solid fa-user"),
segText(" VOIDBOUND ", "#ffcc00"),
segText("| ", "#5a5a5a"),
segText(nameOf(playerId), r.level > 0 ? r.colour : "#ffffff"),
]);
const rankLine = [segIcon(r.icon, r.level > 0 ? r.colour : "#b0b0b0"), segText(" " + r.name, r.level > 0 ? r.colour : "#ffffff")];
if (r.tag) rankLine.push(segText("   " + r.tag + " rank", "#8a8a8a"));
richSay(playerId, rankLine);
richSay(playerId, [
segIcon("fa-solid fa-coins", "#ffd75e"), segText(" " + fmtNum(d.shards) + " " + CFG.CURRENCY_NAME, "#ffd75e"),
segText("   ", "#8a8a8a"),
segIcon("fa-solid fa-gem", "#b48cff"), segText(" " + d.stats.cratesOpened + " crates", "#b48cff"),
]);
richSay(playerId, [
segIcon("fa-solid fa-swords", "#ff9a9a"),
segText(" " + d.stats.kills + " K   " + d.stats.deaths + " D   " + d.stats.mobKills + " mobs", "#ff9a9a"),
segText("   ", "#8a8a8a"),
segIcon("fa-solid fa-clock-rotate-left", "#8fd0ff"),
segText(" " + fmtTime(d.stats.playtimeMs), "#8fd0ff"),
]);
say(playerId, "Shards earned all time: " + fmtNum(d.stats.shardsEarned), "#8a8a8a");
richSay(playerId, [
segText("Places  ", "#8a8a8a"),
segText("#" + placeOf(playerId, "kills") + " kills", "#ff9a9a"),
segText("  |  ", "#5a5a5a"),
segText("#" + placeOf(playerId, "shards") + " shards", "#ffd75e"),
segText("  |  ", "#5a5a5a"),
segText("#" + placeOf(playerId, "playtime") + " playtime", "#8fd0ff"),
]);
}
function boardValueText(d, key) {
if (key === "shards") return fmtNum(d.shards);
if (key === "playtime") return fmtTime(d.stats.playtimeMs);
return String(d.stats.kills);
}
function boardValueIcon(key) {
if (key === "shards") return "fa-solid fa-coins";
if (key === "playtime") return "fa-solid fa-clock-rotate-left";
return "fa-solid fa-swords";
}
function leaderboardRow(playerId, row, index, key, places) {
const d = P[row.id];
const r = rankInfo(row.id);
const mine = row.id === playerId;
const colour = mine ? "#55ff55" : r.level > 0 ? r.colour : "#ffffff";
const shown = nameOf(row.id);
const segs = [];
segs.push(medalFor(index));
segs.push(segText(" ", "#8a8a8a"));
if (r.tag) {
segs.push(segIcon(r.icon, r.colour));
segs.push(segText(" " + r.tag + " ", r.colour));
}
segs.push(segText(shown, colour));
segs.push(segText(" " + dotsFor(shown, 14) + " ", "#3f3f3f"));
segs.push(segIcon(boardValueIcon(key), index < 3 ? MEDALS[index] : "#9a9a9a"));
segs.push(segText(" " + boardValueText(d, key), index < 3 ? MEDALS[index] : "#dddddd"));
if (places) segs.push(segText("  #" + places, mine ? "#55ff55" : "#5a5a5a"));
if (mine) segs.push(segText("  YOU", "#55ff55"));
return segs;
}
function cmdLeaderboard(playerId, mode) {
const key = boardKey(mode);
const rows = rankedBy(key);
const label = key === "shards" ? "VOID SHARDS" : key === "playtime" ? "PLAYTIME" : "KILLS";
richSay(playerId, [
segIcon("fa-solid fa-trophy", "#ffcc00"),
segText(" VOIDBOUND LEADERBOARD ", "#ffcc00"),
segText("| " + label, "#8a8a8a"),
]);
say(playerId, onlineCount() + " online  |  top " + Math.min(CFG.TOP_N, rows.length) + "  |  /lb kills, shards, playtime", "#5a5a5a");
if (!rows.length) {
say(playerId, "  Nobody online to rank yet.", "#8a8a8a");
return;
}
const shown = Math.min(CFG.TOP_N, rows.length);
for (let i = 0; i < shown; i++) {
richSay(playerId, leaderboardRow(playerId, rows[i], i, key, 0));
}
const ownRank = placeOf(playerId, key);
if (ownRank > CFG.TOP_N) {
say(playerId, "", "#8a8a8a");
richSay(playerId, leaderboardRow(playerId, { id: playerId }, ownRank - 1, key, ownRank));
}
say(playerId, "Kill players, mobs and stay online to climb.", "#5a5a5a");
}
function cmdShards(playerId) {
const d = ensure(playerId);
say(playerId, "Balance: " + fmtNum(d.shards) + " " + CFG.CURRENCY_NAME, "#ffff55");
}
function cmdPay(playerId, args) {
const targetName = args[1];
const amount = parseInt(args[2], 10);
const rt = RT[playerId];
if (!targetName || !isFinite(amount)) {
say(playerId, "Usage: /pay <player> <amount>", "#ff5555");
return;
}
if (amount <= 0) {
say(playerId, "Amount must be at least 1 shard.", "#ff5555");
return;
}
if (amount > CFG.MAX_PAY) {
say(playerId, "Max single payment is " + fmtNum(CFG.MAX_PAY) + ".", "#ff5555");
return;
}
const target = findPlayer(targetName);
if (!target) {
say(playerId, "That player is not online.", "#ff5555");
return;
}
if (target === playerId) {
say(playerId, "You cannot pay yourself.", "#ff5555");
return;
}
const d = ensure(playerId);
if (d.shards < amount) {
say(playerId, "Not enough shards. You have " + fmtNum(d.shards) + ".", "#ff5555");
return;
}
const now = api.now();
if (rt && now - rt.lastPayAt < CFG.PAY_COOLDOWN_MS) {
say(playerId, "Slow down a second between payments.", "#ff5555");
return;
}
if (rt) rt.lastPayAt = now;
takeShards(playerId, amount);
addShards(target, amount, true);
say(playerId, "Paid " + fmtNum(amount) + " " + CFG.CURRENCY_NAME + " to " + nameOf(target) + ".", "#55ff55");
say(target, nameOf(playerId) + " paid you " + fmtNum(amount) + " " + CFG.CURRENCY_NAME + ".", "#55ff55");
}
function cmdCrates(playerId) {
const d = ensure(playerId);
say(playerId, "VOIDBOUND CRATES", "#55aaff");
say(playerId, "You have " + fmtNum(d.shards) + " " + CFG.CURRENCY_NAME + ".", "#ffff55");
for (let i = 0; i < CRATES.length; i++) {
const c = CRATES[i];
const affordable = d.shards >= c.price;
say(playerId,
"  " + (i + 1) + ". " + c.name + " - " + fmtNum(c.price) + " shards" +
(affordable ? "  [affordable]" : "  (need " + fmtNum(c.price - d.shards) + " more)"),
affordable ? "#55ff55" : "#ffffff");
say(playerId, "     " + c.headline, c.colour);
say(playerId, "     " + c.blurb + "  (/crate info " + c.id + ")", "#8a8a8a");
}
}
function cmdCrateInfo(playerId, want) {
const crate = crateById(want);
if (!crate) {
say(playerId, "Usage: /crate info <crate>  -  /crates lists all nine.", "#ff5555");
return;
}
const d = ensure(playerId);
say(playerId, crate.name.toUpperCase() + "  -  " + fmtNum(crate.price) + " " + CFG.CURRENCY_NAME, crate.colour);
say(playerId, crate.blurb, "#8a8a8a");
say(playerId, crate.headline, crate.colour);
const rows = crateOdds(crate);
for (let i = 0; i < rows.length; i++) {
const entry = rows[i].entry;
say(playerId, crateOddsText(crate)[i], RARITY_COLOUR[rows[i].r] || "#ffffff");
if (entry.pick && entry.pick.length > 1) {
say(playerId, "          " + entry.pick.join(", "), "#8a8a8a");
}
}
say(playerId, "Buy: /crate buy " + crate.id + "  -  or right-click the dealer.", "#8a8a8a");
if (d.shards < crate.price) {
say(playerId, "You need " + fmtNum(crate.price - d.shards) + " more " + CFG.CURRENCY_NAME + ".", "#ffaa55");
}
}
function cmdBuyCrate(playerId, args) {
const crate = crateById(args[2]);
if (!crate) {
say(playerId, "Unknown crate. Use /crates to see the list.", "#ff5555");
return;
}
buyCrate(playerId, crate);
}
function cmdEvents(playerId, args) {
const sub = (args[1] || "").toLowerCase();
if (sub === "add") {
if (!isOwner(playerId)) {
say(playerId, "Only a Founder can schedule events.", "#ff5555");
return;
}
const text = args.slice(2).join(" ").trim();
if (!text) {
say(playerId, "Usage: /event add <time and details>", "#ff5555");
return;
}
const entry = addToList("events", text, nameOf(playerId));
if (!entry) {
say(playerId, "Could not save that event.", "#ff5555");
return;
}
say(playerId, "Event #" + entry.id + " scheduled.", "#55ff55");
broadcast("EVENT SCHEDULED: " + entry.text + " (posted by " + entry.by + ")", "#55aaff");
return;
}
if (sub === "remove" || sub === "delete") {
if (!isOwner(playerId)) {
say(playerId, "Only a Founder can remove events.", "#ff5555");
return;
}
const id = parseInt(args[2], 10);
if (!id) {
say(playerId, "Usage: /event remove <id>", "#ff5555");
return;
}
if (removeFromList("events", id)) {
say(playerId, "Event #" + id + " removed.", "#55ff55");
} else {
say(playerId, "No event with that id.", "#ff5555");
}
return;
}
if (sub === "idea") {
const text = args.slice(2).join(" ").trim();
if (!text) {
say(playerId, "Usage: /event idea <what we should run>", "#ff5555");
return;
}
const rt = RT[playerId];
const now = api.now();
if (rt && now - rt.lastIdeaAt < CFG.IDEA_COOLDOWN_MS) {
say(playerId, "Give it " + Math.ceil((CFG.IDEA_COOLDOWN_MS - (now - rt.lastIdeaAt)) / 1000) + "s before posting another idea.", "#ff5555");
return;
}
const entry = addToList("ideas", text, nameOf(playerId));
if (!entry) {
say(playerId, "Could not save that idea.", "#ff5555");
return;
}
if (rt) rt.lastIdeaAt = now;
say(playerId, "Idea #" + entry.id + " posted. Thanks!", "#55ff55");
say(playerId, "Read them with /events ideas", "#8a8a8a");
return;
}
if (sub === "ideas") {
const items = LISTS.ideas.items;
say(playerId, "EVENT IDEAS (" + items.length + ")", "#55aaff");
if (!items.length) {
say(playerId, "  Nothing yet. Post one with /event idea <text>.", "#8a8a8a");
return;
}
const start = Math.max(0, items.length - 12);
for (let i = start; i < items.length; i++) {
const it = items[i];
say(playerId, "  #" + it.id + " " + it.text, "#ffffff");
say(playerId, "     by " + it.by + " - " + fmtStamp(it.at), "#8a8a8a");
}
return;
}
if (sub === "clearideas") {
if (!isOwner(playerId)) {
say(playerId, "Only a Founder can clear the idea board.", "#ff5555");
return;
}
LISTS.ideas.items = [];
saveList("ideas");
say(playerId, "Idea board cleared.", "#55ff55");
return;
}
const items = LISTS.events.items;
say(playerId, "VOIDBOUND EVENTS (" + items.length + ")", "#55aaff");
if (!items.length) {
say(playerId, "  Nothing scheduled. Propose one with /event idea <text>.", "#8a8a8a");
return;
}
for (let i = 0; i < items.length; i++) {
const it = items[i];
say(playerId, "  #" + it.id + " " + it.text, "#ffffff");
say(playerId, "     posted by " + it.by + " - " + fmtStamp(it.at), "#8a8a8a");
}
say(playerId, "Ideas: /events ideas  |  Post: /event idea <text>", "#8a8a8a");
}
function cmdUpdates(playerId, args) {
const sub = (args[1] || "").toLowerCase();
if (sub === "add") {
if (!isOwner(playerId)) {
say(playerId, "Only a Founder can post updates.", "#ff5555");
return;
}
const text = args.slice(2).join(" ").trim();
if (!text) {
say(playerId, "Usage: /updates add <what changed>", "#ff5555");
return;
}
const entry = addToList("updates", text, nameOf(playerId));
if (!entry) {
say(playerId, "Could not save that update.", "#ff5555");
return;
}
say(playerId, "Update #" + entry.id + " logged.", "#55ff55");
broadcast("UPDATE: " + entry.text, "#55aaff");
return;
}
if (sub === "remove" || sub === "delete") {
if (!isOwner(playerId)) {
say(playerId, "Only a Founder can remove updates.", "#ff5555");
return;
}
const id = parseInt(args[2], 10);
if (!id) {
say(playerId, "Usage: /updates remove <id>", "#ff5555");
return;
}
if (removeFromList("updates", id)) {
say(playerId, "Update #" + id + " removed.", "#55ff55");
} else {
say(playerId, "No update with that id.", "#ff5555");
}
return;
}
const items = LISTS.updates.items;
say(playerId, "VOIDBOUND UPDATE LOG (" + items.length + ")", "#55aaff");
if (!items.length) {
say(playerId, "  No updates logged yet.", "#8a8a8a");
return;
}
const start = Math.max(0, items.length - 10);
for (let i = items.length - 1; i >= start; i--) {
const it = items[i];
say(playerId, "  #" + it.id + " " + it.text, "#ffffff");
say(playerId, "     " + fmtStamp(it.at) + " by " + it.by, "#8a8a8a");
}
}
function staffBroadcast(text, colour) {
for (const id in P) {
if (rankLevel(id) > 0) say(id, text, colour);
}
}
function durationText(until) {
if (!until) return "permanent";
const ms = until - Date.now();
if (ms <= 0) return "expired";
const mins = Math.ceil(ms / 60000);
if (mins < 60) return mins + "m";
const hours = Math.ceil(mins / 6) / 10;
if (hours < 48) return hours + "h";
return Math.ceil(hours / 24) + "d";
}
function outranks(actor, targetId) {
return rankLevel(actor) > rankLevel(targetId);
}
function targetOrComplain(playerId, name) {
const target = findPlayer(name);
if (!target) say(playerId, "That player is not online.", "#ff5555");
return target;
}
function menuButtonsFor(playerId) {
const buttons = [];
if (rankLevel(playerId) < 1) return buttons;
buttons.push({ id: "vb_panel", icon: "bars", keycode: "KeyN", description: "Staff menu (B)" });
if (hasPerm(playerId, "fly")) {
buttons.push({ id: "vb_fly", icon: "arrow-up", keycode: "KeyF", description: "Toggle flight" });
}
return buttons;
}
const buttonWarned = new Set();
function syncClientButtons(playerId) {
const buttons = menuButtonsFor(playerId);
try {
api.setClientOption(playerId, "customButtons", buttons);
buttonWarned.delete(playerId);
return;
} catch (e) {
noteError("client buttons", e);
}
try {
api.setClientOptions(playerId, { customButtons: buttons });
buttonWarned.delete(playerId);
return;
} catch (e) {
noteError("client buttons object", e);
}
if (!buttonWarned.has(playerId)) {
buttonWarned.add(playerId);
say(playerId, "The B menu button would not load - open B and pick the Homes tab, or use /homes.", "#ff5555");
}
}
function cmdFly(playerId) {
if (!hasPerm(playerId, "fly")) {
deny(playerId, "fly");
return;
}
const on = !FLY[playerId];
FLY[playerId] = on;
let applied = false;
try {
api.setPlayerGamemode(playerId, on ? "creative" : "survival");
applied = true;
} catch (e) {
applied = false;
}
if (!applied) {
try { api.setClientOption(playerId, "creative", on); } catch (e) { }
}
if (on) {
say(playerId, "Flight ON - /fly again to land.", "#55ff55");
say(playerId, "Creative movement for building. Switch back with /fly.", "#8a8a8a");
} else {
say(playerId, "Flight OFF - back to survival.", "#aaaaaa");
}
try { api.playSound(playerId, on ? "levelup" : "chestClose", 1, 1); } catch (e) { }
}
function cmdGamemode(playerId, args) {
if (!hasPerm(playerId, "gm")) {
deny(playerId, "gm");
return;
}
const mode = keyOf(args[1]);
if (mode !== "creative" && mode !== "survival") {
say(playerId, "Usage: /gm survival|creative", "#ff5555");
return;
}
let applied = false;
try {
api.setPlayerGamemode(playerId, mode);
applied = true;
} catch (e) {
applied = false;
}
if (!applied) {
try { api.setClientOption(playerId, "creative", mode === "creative"); } catch (e) { }
}
FLY[playerId] = mode === "creative";
say(playerId, "Gamemode set to " + mode + ".", "#55ff55");
}
function cmdTeleport(playerId, args) {
if (!hasPerm(playerId, "tp")) {
deny(playerId, "tp");
return;
}
const target = targetOrComplain(playerId, args[1]);
if (!target) return;
if (target === playerId) {
say(playerId, "You are already there.", "#ff5555");
return;
}
try {
const pos = api.getPosition(target);
api.setPosition(playerId, pos[0], pos[1], pos[2]);
say(playerId, "Teleported to " + nameOf(target) + ".", "#55ff55");
} catch (e) {
say(playerId, "Teleport failed.", "#ff5555");
}
}
function cmdTpHere(playerId, args) {
if (!hasPerm(playerId, "tphere")) {
deny(playerId, "tphere");
return;
}
const target = targetOrComplain(playerId, args[1]);
if (!target) return;
if (target === playerId) {
say(playerId, "That is you.", "#ff5555");
return;
}
if (!isOwner(playerId) && rankLevel(target) >= rankLevel(playerId)) {
say(playerId, "You cannot move a player of equal or higher staff rank.", "#ff5555");
return;
}
try {
const pos = api.getPosition(playerId);
api.setPosition(target, pos[0], pos[1], pos[2]);
say(playerId, "Brought " + nameOf(target) + " to you.", "#55ff55");
say(target, nameOf(playerId) + " teleported you.", "#8a8a8a");
} catch (e) {
say(playerId, "Teleport failed.", "#ff5555");
}
}
function cmdTpPos(playerId, args) {
if (!hasPerm(playerId, "tppos")) {
deny(playerId, "tppos");
return;
}
const x = Number(args[1]);
const y = Number(args[2]);
const z = Number(args[3]);
if (!isFinite(x) || !isFinite(y) || !isFinite(z)) {
say(playerId, "Usage: /tppos <x> <y> <z>", "#ff5555");
return;
}
try {
api.setPosition(playerId, x, y, z);
say(playerId, "Teleported to " + Math.round(x) + ", " + Math.round(y) + ", " + Math.round(z) + ".", "#55ff55");
} catch (e) {
say(playerId, "Teleport failed.", "#ff5555");
}
}
function blockNameAt(x, y, z) {
try {
return String(api.getBlock(Math.floor(x), Math.floor(y), Math.floor(z)) || "");
} catch (e) {
return "";
}
}
function isPortalBlock(name) {
return String(name || "").toLowerCase().indexOf("portal") !== -1;
}
function findPortalAround(pos) {
for (let dy = -1; dy <= 2.5; dy += 0.5) {
const name = blockNameAt(pos[0], pos[1] + dy, pos[2]);
if (isPortalBlock(name)) return name;
}
const bx = Math.floor(pos[0]);
const bz = Math.floor(pos[2]);
const around = [[1, 0], [-1, 0], [0, 1], [0, -1]];
for (let i = 0; i < around.length; i++) {
for (let dy = 0; dy <= 1.5; dy += 0.75) {
const name = blockNameAt(bx + around[i][0] + 0.5, pos[1] + dy, bz + around[i][1] + 0.5);
if (isPortalBlock(name)) return name;
}
}
return null;
}
function portalAtPlayer(playerId) {
let pos;
try { pos = api.getPosition(playerId); } catch (e) { return null; }
if (!pos || !isFinite(pos[0]) || !isFinite(pos[1]) || !isFinite(pos[2])) return null;
const rt = RT[playerId] || (RT[playerId] = {});
const cell = Math.floor(pos[0]) + "," + Math.floor(pos[1]) + "," + Math.floor(pos[2]);
if (rt.portalCell === cell && !rt.portalSeen) return null;
rt.portalCell = cell;
const hit = findPortalAround(pos);
rt.portalSeen = !!hit;
return hit;
}
function blockSolidAt(x, y, z) {
try {
const solid = api.getBlockSolidity(Math.floor(x), Math.floor(y), Math.floor(z));
if (typeof solid === "boolean") return solid;
} catch (e) { }
const name = blockNameAt(x, y, z).toLowerCase();
return name !== "" && name !== "air";
}
function findSurface(x, z) {
let y = CFG.RTP_TOP_Y;
while (y > CFG.RTP_MIN_Y && !blockSolidAt(x, y, z)) y -= 4;
if (y <= CFG.RTP_MIN_Y) return null;
while (y < CFG.RTP_TOP_Y && blockSolidAt(x, y + 1, z)) y += 1;
for (let tries = 0; tries < 6; tries++) {
if (!blockSolidAt(x, y + 1, z) && !blockSolidAt(x, y + 2, z)) return y + 1;
y -= 1;
}
return null;
}
function randomSurfaceSpot() {
for (let tries = 0; tries < CFG.RTP_TRIES; tries++) {
const angle = Math.random() * Math.PI * 2;
const dist = CFG.RTP_MIN_DIST + Math.random() * (CFG.RTP_RADIUS - CFG.RTP_MIN_DIST);
const x = Math.round(CFG.RTP_CENTRE[0] + Math.cos(angle) * dist);
const z = Math.round(CFG.RTP_CENTRE[1] + Math.sin(angle) * dist);
const y = findSurface(x, z);
if (y !== null) return [x, y, z];
}
return null;
}
function rtpPlayer(playerId, now) {
const spot = randomSurfaceSpot();
if (!spot) {
say(playerId, "The portal fizzles: no ground out there.", "#ff5555");
return false;
}
try {
api.setPosition(playerId, spot[0] + 0.5, spot[1] + 0.2, spot[2] + 0.5);
} catch (e) {
noteError("portal rtp", e);
say(playerId, "The portal fizzles.", "#ff5555");
return false;
}
const rt = RT[playerId] || (RT[playerId] = {});
rt.portalUntil = (now || Date.now()) + CFG.PORTAL_COOLDOWN_MS;
rt.portalCell = null;
rt.portalSeen = false;
say(playerId, "The void spits you out at " + spot[0] + ", " + spot[1] + ", " + spot[2] + ".", "#b98cff");
return true;
}
function isBlackPortal(name) {
const text = String(name || "").toLowerCase();
return text.indexOf("portal") !== -1 && text.indexOf("black") !== -1;
}
function blackPortalPlayer(playerId, now) {
const dest = CFG.BLACK_PORTAL_DEST;
try {
api.setPosition(playerId, dest[0], dest[1], dest[2]);
} catch (e) {
noteError("black portal", e);
say(playerId, "The black portal fizzles.", "#ff5555");
return false;
}
const rt = RT[playerId] || (RT[playerId] = {});
rt.portalUntil = (now || Date.now()) + CFG.PORTAL_COOLDOWN_MS;
rt.portalCell = null;
rt.portalSeen = false;
say(playerId, "The black portal drags you to " + dest[0] + ", " + dest[1] + ", " + dest[2] + ".", "#b98cff");
return true;
}
let portalAcc = 0;
function checkPortals(dt, now) {
portalAcc += dt;
if (portalAcc < CFG.PORTAL_CHECK_MS) return;
portalAcc = 0;
const stamp = now || Date.now();
for (const id in P) {
const rt = RT[id] || (RT[id] = {});
if (rt.portalUntil && stamp < rt.portalUntil) continue;
const hit = portalAtPlayer(id);
if (!hit) continue;
if (isBlackPortal(hit)) blackPortalPlayer(id, stamp);
else rtpPlayer(id, stamp);
}
}
function cmdPortal(playerId) {
let pos = null;
try { pos = api.getPosition(playerId); } catch (e) { }
if (!pos) {
say(playerId, "The server cannot read your position.", "#ff5555");
return;
}
say(playerId, "PORTAL CHECK", "#b98cff");
say(playerId, "  you: " + Math.round(pos[0]) + ", " + Math.round(pos[1]) + ", " + Math.round(pos[2]), "#8a8a8a");
for (let dy = 0; dy <= 2; dy += 1) {
const name = blockNameAt(pos[0], pos[1] + dy, pos[2]);
const hit = isPortalBlock(name);
say(playerId, "  y+" + dy + ": " + (name || "(empty)") + (hit ? "  <- portal" : ""), hit ? "#55ff55" : "#8a8a8a");
}
const near = findPortalAround(pos);
const surface = findSurface(pos[0], pos[2]);
const rt = RT[playerId] || {};
say(playerId, "  nearby portal: " + (near || "none"), near ? "#55ff55" : "#8a8a8a");
if (isBlackPortal(near)) {
const dest = CFG.BLACK_PORTAL_DEST;
say(playerId, "  black portal -> " + dest[0] + ", " + dest[1] + ", " + dest[2], "#55ff55");
}
say(playerId, "  ground here: " + (surface === null ? "none found" : surface), "#8a8a8a");
say(playerId, "  apis: getBlock " + (typeof api.getBlock) + ", solidity " + (typeof api.getBlockSolidity), "#8a8a8a");
say(playerId, "  cooldown: " + (rt.portalUntil && rt.portalUntil > Date.now() ? Math.ceil((rt.portalUntil - Date.now()) / 1000) + "s" : "ready"), "#8a8a8a");
}
function cmdGive(playerId, args) {
if (!hasPerm(playerId, "give")) {
deny(playerId, "give");
return;
}
const parts = args.slice(1);
let amount = 1;
if (parts.length > 1 && /^[0-9]+$/.test(parts[parts.length - 1])) {
amount = parseInt(parts.pop(), 10);
}
const item = parts.join(" ").trim();
if (!item) {
say(playerId, "Usage: /give <item> [amount]   e.g. /give Diamond 8", "#ff5555");
return;
}
if (!isFinite(amount) || amount < 1) amount = 1;
if (amount > CFG.MAX_GIVE) amount = CFG.MAX_GIVE;
let given = 0;
try { given = api.giveItem(playerId, item, amount) || 0; } catch (e) { given = 0; }
if (!given) {
say(playerId, "Could not give " + item + " - unknown item or inventory full.", "#ff5555");
return;
}
say(playerId, "Gave " + given + " " + item + ".", "#55ff55");
}
function cmdKick(playerId, args) {
if (!hasPerm(playerId, "kick")) {
deny(playerId, "kick");
return;
}
const target = targetOrComplain(playerId, args[1]);
if (!target) return;
if (target === playerId) {
say(playerId, "You cannot kick yourself.", "#ff5555");
return;
}
if (!outranks(playerId, target)) {
say(playerId, "You cannot kick equal or higher staff rank.", "#ff5555");
return;
}
const reason = args.slice(2).join(" ").trim() || "No reason given";
const targetName = nameOf(target);
say(playerId, "Kicked " + targetName + ": " + reason, "#55ff55");
staffBroadcast("[STAFF] " + nameOf(playerId) + " kicked " + targetName + " (" + reason + ")", "#ffaa55");
try { api.kickPlayer(target, "Kicked by " + nameOf(playerId) + ": " + reason); } catch (e) { }
}
function cmdMute(playerId, args) {
if (!hasPerm(playerId, "mute")) {
deny(playerId, "mute");
return;
}
const target = targetOrComplain(playerId, args[1]);
if (!target) return;
if (target === playerId) {
say(playerId, "You cannot mute yourself.", "#ff5555");
return;
}
if (!outranks(playerId, target)) {
say(playerId, "You cannot mute equal or higher staff rank.", "#ff5555");
return;
}
let mins = parseInt(args[2], 10);
if (!isFinite(mins) || mins < 1) mins = 10;
if (mins > CFG.MAX_MUTE_MIN) mins = CFG.MAX_MUTE_MIN;
const reason = args.slice(3).join(" ").trim() || "No reason given";
const key = keyOf(nameOf(target));
STAFF.mutes[key] = {
by: nameOf(playerId),
at: Date.now(),
reason: reason,
until: Date.now() + mins * 60000,
};
saveStaff();
say(playerId, "Muted " + nameOf(target) + " for " + mins + "m.", "#55ff55");
say(target, "You were muted for " + mins + "m by " + nameOf(playerId) + ": " + reason, "#ff5555");
staffBroadcast("[STAFF] " + nameOf(playerId) + " muted " + nameOf(target) + " for " + mins + "m (" + reason + ")", "#ffaa55");
}
function cmdUnmute(playerId, args) {
if (!hasPerm(playerId, "unmute")) {
deny(playerId, "unmute");
return;
}
const key = keyOf(args[1]);
if (!key) {
say(playerId, "Usage: /unmute <player>", "#ff5555");
return;
}
if (!STAFF.mutes[key]) {
say(playerId, args[1] + " is not muted.", "#ff5555");
return;
}
delete STAFF.mutes[key];
saveStaff();
const target = findPlayer(args[1]);
if (target) say(target, "You are no longer muted.", "#55ff55");
say(playerId, "Unmuted " + args[1] + ".", "#55ff55");
staffBroadcast("[STAFF] " + nameOf(playerId) + " unmuted " + args[1] + ".", "#ffaa55");
}
function applyBan(playerId, nameInput, days, reason) {
const key = keyOf(nameInput);
if (!key) {
say(playerId, "Usage: /ban <player> [reason]", "#ff5555");
return;
}
if (OWNER_NAMES.indexOf(key) !== -1) {
say(playerId, "The Founders cannot be banned.", "#ff5555");
return;
}
const online = findPlayer(nameInput);
if (online === playerId) {
say(playerId, "You cannot ban yourself.", "#ff5555");
return;
}
if (!isOwner(playerId) && rankInfoForName(nameInput).level >= rankLevel(playerId)) {
say(playerId, "You cannot ban equal or higher staff rank.", "#ff5555");
return;
}
const until = days ? Date.now() + days * 86400000 : 0;
STAFF.bans[key] = {
by: nameOf(playerId),
at: Date.now(),
reason: reason,
until: until,
};
saveStaff();
const label = days ? days + "d" : "permanent";
say(playerId, "Banned " + nameInput + " (" + label + "): " + reason, "#55ff55");
staffBroadcast("[STAFF] " + nameOf(playerId) + " banned " + nameInput + " (" + label + " - " + reason + ")", "#ffaa55");
if (online) {
say(online, "You were banned by " + nameOf(playerId) + ": " + reason, "#ff5555");
try { api.kickPlayer(online, "Banned: " + reason); } catch (e) { }
}
}
function cmdBan(playerId, args) {
if (!hasPerm(playerId, "ban")) {
deny(playerId, "ban");
return;
}
if (!args[1]) {
say(playerId, "Usage: /ban <player> [reason]", "#ff5555");
return;
}
applyBan(playerId, args[1], 0, args.slice(2).join(" ").trim() || "No reason given");
}
function cmdTempBan(playerId, args) {
if (!hasPerm(playerId, "tempban")) {
deny(playerId, "tempban");
return;
}
if (!args[1]) {
say(playerId, "Usage: /tempban <player> [days] [reason]", "#ff5555");
return;
}
let days = parseInt(args[2], 10);
if (!isFinite(days) || days < 1) days = 1;
if (days > CFG.MAX_TEMP_BAN_DAYS) days = CFG.MAX_TEMP_BAN_DAYS;
applyBan(playerId, args[1], days, args.slice(3).join(" ").trim() || "No reason given");
}
function cmdUnban(playerId, args) {
if (!hasPerm(playerId, "unban")) {
deny(playerId, "unban");
return;
}
const key = keyOf(args[1]);
if (!key) {
say(playerId, "Usage: /unban <player>", "#ff5555");
return;
}
if (!STAFF.bans[key]) {
say(playerId, args[1] + " is not banned.", "#ff5555");
return;
}
delete STAFF.bans[key];
saveStaff();
say(playerId, "Unbanned " + args[1] + ".", "#55ff55");
staffBroadcast("[STAFF] " + nameOf(playerId) + " unbanned " + args[1] + ".", "#ffaa55");
}
function cmdBanList(playerId) {
if (!hasPerm(playerId, "banlist")) {
deny(playerId, "banlist");
return;
}
pruneStaff();
const keys = [];
for (const key in STAFF.bans) keys.push(key);
say(playerId, "ACTIVE BANS (" + keys.length + ")", "#ff5555");
if (!keys.length) {
say(playerId, "  Nobody is banned.", "#8a8a8a");
return;
}
for (let i = 0; i < keys.length; i++) {
const rec = STAFF.bans[keys[i]];
say(playerId, "  " + keys[i] + "  |  " + durationText(rec.until), "#ffffff");
say(playerId, "     " + rec.reason + "  (by " + rec.by + ")", "#8a8a8a");
}
}
function cmdWarn(playerId, args) {
if (!hasPerm(playerId, "warn")) {
deny(playerId, "warn");
return;
}
const name = args[1];
const reason = args.slice(2).join(" ").trim();
if (!name || !reason) {
say(playerId, "Usage: /warn <player> <reason>", "#ff5555");
return;
}
const target = findPlayer(name);
if (target === playerId) {
say(playerId, "You cannot warn yourself.", "#ff5555");
return;
}
if (!isOwner(playerId) && rankInfoForName(name).level >= rankLevel(playerId)) {
say(playerId, "You cannot warn equal or higher staff rank.", "#ff5555");
return;
}
STAFF.warns.push({
name: target ? nameOf(target) : String(name),
by: nameOf(playerId),
at: Date.now(),
reason: reason,
});
while (STAFF.warns.length > CFG.WARNS_MAX) STAFF.warns.shift();
saveStaff();
let count = 0;
const key = keyOf(name);
for (let i = 0; i < STAFF.warns.length; i++) {
if (keyOf(STAFF.warns[i].name) === key) count++;
}
say(playerId, "Warned " + (target ? nameOf(target) : name) + " (" + count + " total): " + reason, "#55ff55");
if (target) say(target, "WARNING from " + nameOf(playerId) + ": " + reason, "#ffaa55");
staffBroadcast("[STAFF] " + nameOf(playerId) + " warned " + (target ? nameOf(target) : name) + ": " + reason, "#ffaa55");
}
function cmdWarns(playerId, args) {
if (!hasPerm(playerId, "warns")) {
deny(playerId, "warns");
return;
}
const filter = keyOf(args[1]);
const rows = [];
for (let i = STAFF.warns.length - 1; i >= 0; i--) {
const w = STAFF.warns[i];
if (filter && keyOf(w.name) !== filter) continue;
rows.push(w);
if (rows.length >= 8) break;
}
say(playerId, "WARNINGS" + (filter ? " - " + args[1] : " (latest 8)"), "#ffaa55");
if (!rows.length) {
say(playerId, "  No warnings logged.", "#8a8a8a");
return;
}
for (let i = 0; i < rows.length; i++) {
const w = rows[i];
say(playerId, "  " + w.name + "  |  " + w.reason, "#ffffff");
say(playerId, "     by " + w.by + " - " + fmtStamp(w.at), "#8a8a8a");
}
}
function cmdStaffChat(playerId, args) {
if (!hasPerm(playerId, "staffchat")) {
deny(playerId, "staffchat");
return;
}
const msg = args.slice(1).join(" ").trim();
if (!msg) {
say(playerId, "Usage: /sc <message>", "#ff5555");
return;
}
const r = rankInfo(playerId);
staffBroadcast("[SC] " + (r.tag ? r.tag + " " : "") + nameOf(playerId) + ": " + msg, r.colour);
}
function cmdStaff(playerId) {
const list = staffList();
richSay(playerId, [
segIcon("fa-solid fa-shield", "#ffcc00"),
segText(" VOIDBOUND STAFF ", "#ffcc00"),
segText("| " + list.length + " online", "#8a8a8a"),
]);
if (!list.length) {
say(playerId, "  No staff online right now.", "#8a8a8a");
return;
}
for (let i = 0; i < list.length; i++) {
const row = list[i];
richSay(playerId, [
segIcon(row.r.icon, row.r.colour),
segText(" " + row.r.tag + " ", row.r.colour),
segText(nameOf(row.id), "#ffffff"),
segText(" " + dotsFor(nameOf(row.id), 14) + " ", "#3f3f3f"),
segText(row.r.name, row.r.colour),
]);
}
}
function cmdPlayers(playerId) {
if (!hasPerm(playerId, "players")) {
deny(playerId, "players");
return;
}
const rows = [];
for (const id in P) rows.push(id);
rows.sort(function (a, b) {
const diff = rankLevel(b) - rankLevel(a);
if (diff !== 0) return diff;
return P[b].shards - P[a].shards;
});
richSay(playerId, [
segIcon("fa-solid fa-user-group", "#55aaff"),
segText(" ONLINE PLAYERS ", "#55aaff"),
segText("| " + rows.length, "#8a8a8a"),
]);
for (let i = 0; i < rows.length; i++) {
const id = rows[i];
const d = P[id];
const r = rankInfo(id);
const segs = [];
if (r.tag) {
segs.push(segIcon(r.icon, r.colour));
segs.push(segText(" " + r.tag + " ", r.colour));
} else {
segs.push(segIcon("fa-solid fa-user", "#5a5a5a"));
segs.push(segText(" ", "#5a5a5a"));
}
segs.push(segText(nameOf(id), r.level > 0 ? r.colour : "#ffffff"));
segs.push(segText(" " + dotsFor(nameOf(id), 14) + " ", "#3f3f3f"));
segs.push(segIcon("fa-solid fa-coins", "#ffd75e"));
segs.push(segText(" " + fmtNum(d.shards), "#ffd75e"));
segs.push(segText("  ", "#5a5a5a"));
segs.push(segIcon("fa-solid fa-swords", "#ff9a9a"));
segs.push(segText(" " + d.stats.kills, "#ff9a9a"));
richSay(playerId, segs);
}
}
function cmdRank(playerId, args) {
if (!hasPerm(playerId, "rank")) {
deny(playerId, "rank");
return;
}
const name = args[1];
const want = RANK_ALIASES[keyOf(args[2])];
if (!name || !want) {
say(playerId, "Usage: /rank <player> <trial|mod|admin|founder|player>", "#ff5555");
return;
}
const key = keyOf(name);
if (OWNER_NAMES.indexOf(key) !== -1 && want !== "owner") {
say(playerId, "That player is a permanent Founder and cannot be demoted.", "#ff5555");
return;
}
if (want === "player") delete STAFF.ranks[key];
else STAFF.ranks[key] = { r: want, by: nameOf(playerId), at: Date.now() };
saveStaff();
const target = findPlayer(name);
const label = RANKS[want].name;
say(playerId, name + " is now " + label + ".", "#55ff55");
staffBroadcast("[STAFF] " + nameOf(playerId) + " set " + name + "'s rank to " + label + ".", "#ffcc00");
if (target) {
say(target, "Your Voidbound rank is now " + label + ".", RANKS[want].colour);
syncClientButtons(target);
syncBoard(target);
applyRankCosmetics(target);
pushRightInfo(target);
renderStaffMenu(target);
}
}
function cmdAdmin(playerId) {
if (!hasPerm(playerId, "panel")) {
deny(playerId, "panel");
return;
}
const r = rankInfo(playerId);
say(playerId, "== VOIDBOUND STAFF PANEL ==", "#ffcc00");
say(playerId, nameOf(playerId) + "  |  " + r.name + "  |  Online " + onlineCount(), r.colour);
say(playerId, "Press B for the button version of everything below.", "#55ff55");
say(playerId, "MOVEMENT", "#55aaff");
say(playerId, "  /tp <player> - teleport to a player", "#ffffff");
if (hasPerm(playerId, "fly")) say(playerId, "  /fly - toggle flight", "#ffffff");
if (hasPerm(playerId, "tphere")) say(playerId, "  /tphere <player> - pull them to you", "#ffffff");
if (hasPerm(playerId, "tppos")) say(playerId, "  /tppos <x> <y> <z> - go to coords", "#ffffff");
if (hasPerm(playerId, "gm")) say(playerId, "  /gm survival|creative", "#ffffff");
if (hasPerm(playerId, "give")) {
say(playerId, "ITEMS", "#55aaff");
say(playerId, "  /give <item> [amount] - give yourself items", "#ffffff");
}
say(playerId, "PLAYERS", "#55aaff");
say(playerId, "  /players - online list with ranks", "#ffffff");
if (hasPerm(playerId, "warn")) say(playerId, "  /warn <player> <reason>", "#ffffff");
if (hasPerm(playerId, "warns")) say(playerId, "  /warns [player] - warning history", "#ffffff");
if (hasPerm(playerId, "kick")) say(playerId, "  /kick <player> [reason]", "#ffffff");
if (hasPerm(playerId, "mute")) say(playerId, "  /mute <player> [mins] [reason]", "#ffffff");
if (hasPerm(playerId, "unmute")) say(playerId, "  /unmute <player>", "#ffffff");
if (hasPerm(playerId, "tempban")) say(playerId, "  /tempban <player> [days] [reason]", "#ffffff");
if (hasPerm(playerId, "ban")) say(playerId, "  /ban <player> [reason]", "#ffffff");
if (hasPerm(playerId, "unban")) say(playerId, "  /unban <player>", "#ffffff");
if (hasPerm(playerId, "banlist")) say(playerId, "  /banlist - active bans", "#ffffff");
say(playerId, "TEAM", "#55aaff");
say(playerId, "  /sc <message> - staff chat", "#ffffff");
say(playerId, "  /staff - staff roster", "#ffffff");
if (hasPerm(playerId, "rank")) say(playerId, "  /rank <player> <rank> - set ranks", "#ffffff");
if (isOwner(playerId)) {
say(playerId, "WORLD", "#55aaff");
say(playerId, "  /event add <text>  |  /event remove <id>", "#ffffff");
say(playerId, "  /updates add <text>  |  /updates remove <id>", "#ffffff");
}
if (hasPerm(playerId, "fly")) {
say(playerId, "Hotkeys: N = staff menu, F = flight", "#8a8a8a");
} else {
say(playerId, "Hotkey: N = staff menu", "#8a8a8a");
}
}
const SHOP_CATS = {
staff: { key: "vb_staff", title: "Staff", blurb: "Flight, movement, items and staff chat.", sort: 90 },
mod: { key: "vb_mod", title: "Moderation", blurb: "Warn, mute, kick, temp ban and bans.", sort: 89 },
owner: { key: "vb_owner", title: "Founder", blurb: "Ranks, events and the update log.", sort: 88 },
};
function words(text) {
const s = String(text === undefined || text === null ? "" : text).trim();
return s ? s.split(/\s+/) : [];
}
function menuMuteArgs(target, input) {
const parts = words(input);
let mins = 10;
if (parts.length && /^[0-9]+$/.test(parts[0])) mins = parseInt(parts.shift(), 10);
return ["mute", target, String(mins)].concat(parts);
}
function menuTempBanArgs(target, input) {
const parts = words(input);
let days = 1;
if (parts.length && /^[0-9]+$/.test(parts[0])) days = parseInt(parts.shift(), 10);
return ["tempban", target, String(days)].concat(parts);
}
function textInput(placeholder) {
return { type: "text", placeholderText: placeholder || "" };
}
const MENU = [
{
id: "vb_fly", cat: SHOP_CATS.staff, perm: "fly",
title: "Flight",
desc: "Toggle creative flight. Same as /fly.",
image: "Diamond Hang Glider",
args: function () { return ["fly"]; },
},
{
id: "vb_gm", cat: SHOP_CATS.staff, perm: "gm",
title: "Gamemode",
desc: "Pick survival or creative.",
image: "Diamond Boots",
input: function () {
return { type: "dropdown", dropdownOptions: ["survival", "creative"], autoSubmit: true, initialValue: "survival" };
},
args: function (input) { return ["gm", input || "survival"]; },
},
{
id: "vb_tp", cat: SHOP_CATS.staff, perm: "tp",
title: "Teleport to player",
desc: "Pick who to teleport to.",
image: "Compass",
target: "player",
args: function (name) { return ["tp", name]; },
},
{
id: "vb_tphere", cat: SHOP_CATS.staff, perm: "tphere",
title: "Bring player",
desc: "Pull a player to you.",
image: "Name Tag",
target: "player",
args: function (name) { return ["tphere", name]; },
},
{
id: "vb_tppos", cat: SHOP_CATS.staff, perm: "tppos",
title: "Go to coords",
desc: "Type x y z, e.g. 120 64 -30.",
image: "Moonstone Orb",
input: function () { return textInput("x y z"); },
args: function (input) { return ["tppos"].concat(words(input)); },
},
{
id: "vb_give", cat: SHOP_CATS.staff, perm: "give",
title: "Give item",
desc: "Type an item and optional amount, e.g. Diamond 8.",
image: "Diamond",
input: function () { return textInput("Diamond 8"); },
args: function (input) { return ["give"].concat(words(input)); },
},
{
id: "vb_sc", cat: SHOP_CATS.staff, perm: "staffchat",
title: "Staff chat",
desc: "Send a message to every online staff member.",
image: "Book",
input: function () { return textInput("Message"); },
args: function (input) { return ["sc"].concat(words(input)); },
},
{
id: "vb_players", cat: SHOP_CATS.staff, perm: "players",
title: "Online players",
desc: "Print the online list with ranks to chat.",
image: "Diamond Helmet",
args: function () { return ["players"]; },
},
{
id: "vb_roster", cat: SHOP_CATS.staff, perm: "staffchat",
title: "Staff roster",
desc: "Who is online and what rank they hold.",
image: "Knight Sword",
args: function () { return ["staff"]; },
},
{
id: "vb_warn", cat: SHOP_CATS.mod, perm: "warn",
title: "Warn player",
desc: "Pick a player, then type the reason.",
image: "Name Tag",
target: "player",
step2: {
title: function (name) { return "Warn " + name; },
desc: "Type the reason, then press Use.",
image: "Name Tag",
input: function () { return textInput("Reason"); },
args: function (target, input) { return ["warn", target].concat(words(input)); },
},
},
{
id: "vb_warns", cat: SHOP_CATS.mod, perm: "warns",
title: "Warning history",
desc: "Type a name, or leave it blank for the latest 8.",
image: "Book",
input: function () { return textInput("Name (blank = latest)"); },
args: function (input) { return ["warns"].concat(words(input)); },
},
{
id: "vb_kick", cat: SHOP_CATS.mod, perm: "kick",
title: "Kick player",
desc: "Pick a player, then type the reason.",
image: "Iron Boots",
target: "player",
step2: {
title: function (name) { return "Kick " + name; },
desc: "Type a reason, then press Use.",
image: "Iron Boots",
input: function () { return textInput("Reason"); },
args: function (target, input) { return ["kick", target].concat(words(input)); },
},
},
{
id: "vb_mute", cat: SHOP_CATS.mod, perm: "mute",
title: "Mute player",
desc: "Pick a player, then type minutes and a reason.",
image: "Spiked Boots",
target: "player",
step2: {
title: function (name) { return "Mute " + name; },
desc: "Type minutes then a reason, e.g. 30 spamming.",
image: "Spiked Boots",
input: function () { return textInput("30 spamming"); },
args: menuMuteArgs,
},
},
{
id: "vb_unmute", cat: SHOP_CATS.mod, perm: "unmute",
title: "Unmute player",
desc: "Type the player's name, online or not.",
image: "Military Boots",
target: "text",
placeholder: "Player name",
args: function (input) { return ["unmute"].concat(words(input)); },
},
{
id: "vb_tempban", cat: SHOP_CATS.mod, perm: "tempban",
title: "Temp ban",
desc: "Pick a player, then type days and a reason.",
image: "Wood Boots",
target: "player",
step2: {
title: function (name) { return "Temp ban " + name; },
desc: "Type days then a reason, e.g. 3 griefing.",
image: "Wood Boots",
input: function () { return textInput("3 griefing"); },
args: menuTempBanArgs,
},
},
{
id: "vb_ban", cat: SHOP_CATS.mod, perm: "ban",
title: "Ban player",
desc: "Pick a player, then type the reason.",
image: "Diamond Boots",
target: "player",
step2: {
title: function (name) { return "Ban " + name; },
desc: "Type a reason, then press Use.",
image: "Diamond Boots",
input: function () { return textInput("Reason"); },
args: function (target, input) { return ["ban", target].concat(words(input)); },
},
},
{
id: "vb_unban", cat: SHOP_CATS.mod, perm: "unban",
title: "Unban player",
desc: "Type the banned player's name.",
image: "Gold Boots",
target: "text",
placeholder: "Player name",
args: function (input) { return ["unban"].concat(words(input)); },
},
{
id: "vb_banlist", cat: SHOP_CATS.mod, perm: "banlist",
title: "Active bans",
desc: "Print every ban and its remaining time.",
image: "Stick",
args: function () { return ["banlist"]; },
},
{
id: "vb_rank", cat: SHOP_CATS.owner, perm: "rank",
title: "Set rank",
desc: "Type a player's name, then pick their rank.",
image: "Gold Sword",
target: "text",
placeholder: "Player name",
step2: {
title: function (name) { return "Rank for " + name; },
desc: "Pick the rank to give them.",
image: "Gold Sword",
input: function () {
return {
type: "dropdown",
dropdownOptions: ["trial", "mod", "admin", "owner", "player"],
autoSubmit: true,
initialValue: "mod",
};
},
args: function (target, input) { return ["rank", target, input || "mod"]; },
},
},
{
id: "vb_event_add", cat: SHOP_CATS.owner, perm: "events",
title: "Schedule event",
desc: "Type the time and details, e.g. Sat 8pm build contest.",
image: "Moonstone Orb",
input: function () { return textInput("Sat 8pm build contest"); },
args: function (input) { return ["event", "add"].concat(words(input)); },
},
{
id: "vb_event_del", cat: SHOP_CATS.owner, perm: "events",
title: "Remove event",
desc: "Type the event id from /events.",
image: "Moonstone Fragment",
input: function () { return textInput("Event id"); },
args: function (input) { return ["event", "remove"].concat(words(input)); },
},
{
id: "vb_update_add", cat: SHOP_CATS.owner, perm: "updates",
title: "Post update",
desc: "Type what changed. Everyone gets it in chat.",
image: "Book",
input: function () { return textInput("What changed"); },
args: function (input) { return ["updates", "add"].concat(words(input)); },
},
{
id: "vb_update_del", cat: SHOP_CATS.owner, perm: "updates",
title: "Remove update",
desc: "Type the update id from /updates.",
image: "Diamond Fragment",
input: function () { return textInput("Update id"); },
args: function (input) { return ["updates", "remove"].concat(words(input)); },
},
{
id: "vb_clear_ideas", cat: SHOP_CATS.owner, perm: "clearlists",
title: "Clear event ideas",
desc: "Wipe the player idea board.",
image: "Diamond",
args: function () { return ["event", "clearideas"]; },
},
];
for (let i = 0; i < MENU.length; i++) MENU[i].sort = 1000 - i * 10;
function shopTile(image, title, desc, hidden, sort) {
return {
image: image,
cost: 0,
currency: CFG.CURRENCY_ID,
canBuy: !hidden,
hidden: !!hidden,
buyButtonText: "Use",
customTitle: title,
description: desc,
sortPriority: sort === undefined ? 0 : sort,
};
}
function baseShopItem(catKey, itemKey, image) {
try {
api.createShopItem(catKey, itemKey, shopTile(image, "Staff tool", "", true, 0));
} catch (e) { }
}
function putShopItem(playerId, catKey, itemKey, item) {
try { api.createShopItemForPlayer(playerId, catKey, itemKey, item); } catch (e) { }
}
function menuAllowed(playerId, entry) {
if (!playerId) return false;
if (rankLevel(playerId) < 1) return false;
if (!entry.perm) return true;
return hasPerm(playerId, entry.perm);
}
function menuEntryById(itemKey) {
for (let i = 0; i < MENU.length; i++) {
const entry = MENU[i];
if (entry.id === itemKey) return { entry: entry, step: 1 };
if (entry.step2 && entry.id + "_go" === itemKey) return { entry: entry, step: 2 };
}
return null;
}
function entryTile(playerId, entry, visible) {
const item = shopTile(entry.image, entry.title, entry.desc, !visible, entry.sort);
if (!visible) return item;
if (entry.target === "player") {
item.userInput = { type: "player", excludedPlayers: [playerId] };
} else if (entry.target === "text") {
item.userInput = textInput(entry.placeholder || "Player name");
} else if (entry.input) {
item.userInput = entry.input();
}
return item;
}
function stepTile(entry, pending, visible) {
const step = entry.step2;
const target = pending ? String(pending.target || "") : "";
const title = typeof step.title === "function" ? step.title(target) : String(step.title || entry.title);
const desc = typeof step.desc === "function" ? step.desc(target) : String(step.desc || "");
const item = shopTile(step.image || entry.image, title, desc, !visible, entry.sort);
if (visible) item.userInput = step.input();
return item;
}
function cancelTile(visible) {
const item = shopTile("Moonstone Fragment", "Cancel", "Forget the action you were halfway through.", !visible, 0);
return item;
}
function renderStaffMenu(playerId) {
if (!playerId || !P[playerId]) return;
const rt = RT[playerId];
const pending = rt ? rt.pending : null;
for (let i = 0; i < MENU.length; i++) {
const entry = MENU[i];
const allowed = menuAllowed(playerId, entry);
const active = !!(pending && pending.id === entry.id);
putShopItem(playerId, entry.cat.key, entry.id, entryTile(playerId, entry, allowed && !active));
if (entry.step2) {
putShopItem(playerId, entry.cat.key, entry.id + "_go", stepTile(entry, pending, allowed && active));
}
}
putShopItem(playerId, SHOP_CATS.staff.key, "vb_cancel", cancelTile(!!pending));
putShopItem(playerId, SHOP_CATS.mod.key, "vb_cancel", cancelTile(!!pending));
putShopItem(playerId, SHOP_CATS.owner.key, "vb_cancel", cancelTile(!!pending));
}
function openStaffMenu(playerId, catKey) {
if (rankLevel(playerId) < 1) {
say(playerId, "The staff menu is for staff only.", "#ff5555");
return;
}
renderStaffMenu(playerId);
try { api.openShop(playerId, false, catKey || SHOP_CATS.staff.key, false); } catch (e) { }
}
function refreshShop(playerId, catKey) {
try { api.openShop(playerId, false, catKey || SHOP_CATS.staff.key, false); } catch (e) { }
}
function runMenuCommand(playerId, args) {
const parts = [];
for (let i = 0; i < (args || []).length; i++) {
const part = String(args[i] === undefined || args[i] === null ? "" : args[i]).trim();
if (part) parts.push(part);
}
if (!parts.length) return;
try {
playerCommand(playerId, parts.join(" "));
} catch (e) {
say(playerId, "That action failed. Try the chat command instead.", "#ff5555");
}
}
function handleStaffMenuBuy(playerId, categoryKey, itemKey, userInput) {
ensure(playerId);
if (!P[playerId]) return false;
const rt = RT[playerId];
const catKey = categoryKey || SHOP_CATS.staff.key;
const input = String(userInput === undefined || userInput === null ? "" : userInput).trim();
if (itemKey === "vb_cancel") {
if (rt) rt.pending = null;
renderStaffMenu(playerId);
say(playerId, "Cancelled.", "#aaaaaa");
refreshShop(playerId, catKey);
return true;
}
const found = menuEntryById(itemKey);
if (!found) return false;
const entry = found.entry;
if (!menuAllowed(playerId, entry)) {
if (rt) rt.pending = null;
renderStaffMenu(playerId);
say(playerId, "No permission - that button needs a higher rank.", "#ff5555");
return true;
}
if (found.step === 2) {
const pending = rt ? rt.pending : null;
if (!pending || pending.id !== entry.id) {
renderStaffMenu(playerId);
say(playerId, "That ran out of time. Pick the player again.", "#ff5555");
refreshShop(playerId, catKey);
return true;
}
if (rt) rt.pending = null;
renderStaffMenu(playerId);
runMenuCommand(playerId, entry.step2.args(pending.target, input));
refreshShop(playerId, catKey);
return true;
}
if (entry.step2) {
let target = input;
if (entry.target === "player") {
const online = findPlayer(input);
if (!online) {
say(playerId, "That player is not online.", "#ff5555");
renderStaffMenu(playerId);
refreshShop(playerId, catKey);
return true;
}
target = nameOf(online);
}
if (!target) {
say(playerId, "Type a player name first.", "#ff5555");
renderStaffMenu(playerId);
refreshShop(playerId, catKey);
return true;
}
if (rt) rt.pending = { id: entry.id, target: target, cat: catKey };
renderStaffMenu(playerId);
say(playerId, "Selected " + target + " - finish it in the B menu.", "#55ff55");
refreshShop(playerId, catKey);
return true;
}
renderStaffMenu(playerId);
runMenuCommand(playerId, entry.args(input));
refreshShop(playerId, catKey);
return true;
}
function setupStaffShop() {
const cats = [SHOP_CATS.staff, SHOP_CATS.mod, SHOP_CATS.owner];
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
for (let i = 0; i < MENU.length; i++) {
const entry = MENU[i];
baseShopItem(entry.cat.key, entry.id, entry.image);
if (entry.step2) baseShopItem(entry.cat.key, entry.id + "_go", entry.step2.image || entry.image);
}
for (let i = 0; i < cats.length; i++) baseShopItem(cats[i].key, "vb_cancel", "Moonstone Fragment");
}
const QUEST_CENTRE = [10000, -9999, 10000];
const QUEST_TYPES = {
fishing: {
name: "Fishing", short: "Fishing", title: "Angler", icon: "fa-solid fa-gem", colour: "#55ffff",
verb: "Catch", unit: "fish",
goal: 4, goalStep: 2, goalMax: 48,
shards: 120, shardStep: 35, shardMax: 1200,
xp: 50, xpStep: 15, xpMax: 400,
x: 10009, y: -9999, z: 10009,
},
hunting: {
name: "Monster Hunting", short: "Hunting", title: "Monster Hunter", icon: "fa-solid fa-skull", colour: "#ff9a9a",
verb: "Slay", unit: "mobs",
goal: 10, goalStep: 5, goalMax: 150,
shards: 140, shardStep: 40, shardMax: 1400,
xp: 55, xpStep: 16, xpMax: 430,
x: 9991, y: -9999, z: 10009,
},
mining: {
name: "Mining", short: "Mining", title: "Miner", icon: "fa-solid fa-hammer", colour: "#c9c9c9",
verb: "Mine", unit: "blocks",
goal: 30, goalStep: 10, goalMax: 320,
shards: 130, shardStep: 38, shardMax: 1300,
xp: 52, xpStep: 15, xpMax: 420,
x: 9991, y: -9999, z: 9991,
},
killing: {
name: "Player Kills", short: "Kills", title: "Duelist", icon: "fa-solid fa-swords", colour: "#ff5555",
verb: "Kill", unit: "kills",
goal: 2, goalStep: 1, goalMax: 20,
shards: 200, shardStep: 50, shardMax: 1800,
xp: 80, xpStep: 20, xpMax: 520,
x: 10009, y: -9999, z: 9991,
},
};
const QUEST_NPCS = {};
function levelFor(xp) {
return 1 + Math.floor(Math.sqrt(Math.max(0, Number(xp) || 0) / 100));
}
function levelFloorXp(level) {
return 100 * (level - 1) * (level - 1);
}
function xpIntoLevel(xp) {
return Math.max(0, (Number(xp) || 0) - levelFloorXp(levelFor(xp)));
}
function levelPercent(xp) {
const need = xpToNextLevel(xp);
if (!need) return 0;
return Math.max(0, Math.min(100, Math.floor(xpIntoLevel(xp) * 100 / need)));
}
function levelBar(xp) {
const filled = Math.max(0, Math.min(10, Math.round(levelPercent(xp) / 10)));
let out = "";
for (let i = 0; i < 10; i++) out += i < filled ? "\u2593" : "\u2591";
return out;
}
function xpToNextLevel(xp) {
const level = levelFor(xp);
return levelFloorXp(level + 1) - levelFloorXp(level);
}
function addXp(playerId, amount) {
const d = ensure(playerId);
const before = levelFor(d.stats.xp);
d.stats.xp += Math.max(0, Math.floor(amount));
const after = levelFor(d.stats.xp);
return after > before ? after : 0;
}
const DISCORD_LINK = "https://discord.gg/crWR7Xx6bZ";
const FANCY_TITLE = true;
const GAME_TITLE = "VOIDBOUND SMP";
const FANCY_NAME = "𝕍𝕆𝕀𝔻𝔹𝕆𝕌ℕ𝔻";
function gameTitle() {
return FANCY_TITLE ? FANCY_NAME + " 𝕊𝕄ℙ" : GAME_TITLE;
}
function yawTo(x, z, targetX, targetZ) {
const yaw = Math.atan2(-(targetX - x), targetZ - z) * 180 / Math.PI;
return (yaw + 360) % 360;
}
const NPC_SKINS = [
"trader_black", "trader_blue", "trader", "wizard", "zombie", "general", "chef",
"farmer", "farmer_gill", "monster_hunter_lorenzo", "painter_spencer",
"piggy_banker", "portal_mage", "tentacle_guy",
];
const GIVER_LOOKS = {
fishing: { size: 1.05, heads: ["trader_blue"] },
hunting: { size: 0.95, heads: ["monster_hunter_lorenzo"] },
mining: { size: 1.2, heads: ["zombie"] },
killing: { size: 1.35, heads: ["general"] },
};
const GIVER_SKIN_KEY = "vb_giver_skin_v1";
const GIVER_SKINS = {};
const SKIN_TRIES = NPC_SKINS;
function defaultSkin(type) {
const look = GIVER_LOOKS[type];
return (look && look.heads && look.heads[0]) || "trader_black";
}
function knownSkin(name) {
return NPC_SKINS.indexOf(String(name)) !== -1;
}
function giverSkin(type) {
return GIVER_SKINS[type] || defaultSkin(type);
}
function loadGiverSkins() {
let raw = null;
try { raw = api.getLobbyDbValue(GIVER_SKIN_KEY); } catch (e) { raw = null; }
let saved = {};
try { saved = raw ? JSON.parse(raw) : {}; } catch (e) { saved = {}; }
for (const key in QUEST_TYPES) {
const savedName = saved && saved[key];
GIVER_SKINS[key] = knownSkin(savedName) ? String(savedName) : defaultSkin(key);
}
}
function saveGiverSkins() {
try { api.setLobbyDbValue(GIVER_SKIN_KEY, JSON.stringify(GIVER_SKINS)); } catch (e) { }
}
const GIVER_TAGS = {
fishing: { mark: "\u2726", sub: "RIGHT-CLICK FOR A QUEST" },
hunting: { mark: "\u2620", sub: "RIGHT-CLICK FOR A QUEST" },
mining: { mark: "\u26cf", sub: "RIGHT-CLICK FOR A QUEST" },
killing: { mark: "\u2694", sub: "RIGHT-CLICK FOR A QUEST" },
};
const GIVER_NAME_COLOUR = {
fishing: "aqua",
hunting: "pink",
mining: "cyan",
killing: "red",
};
function giverNameTag(type) {
const giver = QUEST_TYPES[type];
const tag = GIVER_TAGS[type] || {};
const mark = tag.mark || "";
const title = String(giver.title).toUpperCase();
const text = mark ? mark + " " + title + " " + mark : title;
return {
content: [{ str: text, style: styleFor(giver.colour) }],
subtitle: [{ str: tag.sub || "RIGHT-CLICK FOR A QUEST", style: styleFor("#8a8a8a") }],
border: { colour: colourName(giver.colour), style: "glow" },
};
}
function applyGiverNameTag(type) {
const eId = QUEST_NPCS[type];
if (!eId) return;
try {
api.setTargetedPlayerSettingForEveryone(eId, "nameTagInfo", giverNameTag(type), true);
return;
} catch (e) {
noteError("nametag " + type, e);
}
try {
api.setTargetedPlayerSettingForEveryone(eId, "nameColour", GIVER_NAME_COLOUR[type] || "purple", true);
} catch (e) {
noteError("name colour " + type, e);
}
}
function giverNear(playerId) {
let pos = null;
try { pos = api.getPosition(playerId); } catch (e) { return null; }
if (!pos) return null;
let best = null;
let bestDist = CFG.GIVER_TALK_RANGE;
for (const key in QUEST_TYPES) {
const giver = QUEST_TYPES[key];
const dx = pos[0] - giver.x;
const dz = pos[2] - giver.z;
const dist = Math.sqrt(dx * dx + dz * dz);
if (dist <= bestDist) {
bestDist = dist;
best = key;
}
}
return best;
}
function createGiver(key) {
const giver = QUEST_TYPES[key];
const look = GIVER_LOOKS[key] || { size: 1, heads: ["trader_black"] };
const name = giver.title + " - right-click me";
for (let i = 0; i < look.heads.length; i++) {
let eId = null;
try {
eId = api.attemptCreateMeshEntity("Person", {
size: look.size,
pose: "standing",
textures: { head: giverSkin(key) },
}, name);
} catch (e) {
noteError("giver " + key + " skin " + look.heads[i], e);
eId = null;
}
if (eId) return eId;
}
try {
return api.attemptCreateMeshEntity("Person", {
size: look.size,
pose: "standing",
}, name);
} catch (e) {
noteError("giver " + key + " plain", e);
return null;
}
}
const GIVER_YAW_KEY = "vb_giver_yaw_v2";
const GIVER_YAW = {};
function loadGiverYaw() {
let raw = null;
try { raw = api.getLobbyDbValue(GIVER_YAW_KEY); } catch (e) { raw = null; }
let saved = {};
try { saved = raw ? JSON.parse(raw) : {}; } catch (e) { saved = {}; }
for (const key in QUEST_TYPES) {
const value = Number(saved && saved[key]);
GIVER_YAW[key] = isFinite(value) ? value : 0;
}
}
function saveGiverYaw() {
try { api.setLobbyDbValue(GIVER_YAW_KEY, JSON.stringify(GIVER_YAW)); } catch (e) { }
}
const GIVER_BASE_YAW = { fishing: 180, hunting: 60, mining: 315, killing: 225 };
function giverYaw(type) {
const giver = QUEST_TYPES[type];
const base = isFinite(GIVER_BASE_YAW[type])
? GIVER_BASE_YAW[type]
: yawTo(giver.x, giver.z, QUEST_CENTRE[0], QUEST_CENTRE[2]);
return (base + (GIVER_YAW[type] || 0) + 360) % 360;
}
function applyGiverSkin(type) {
const eId = QUEST_NPCS[type];
if (!eId) return;
const look = GIVER_LOOKS[type] || { size: 1 };
const opts = { size: look.size, pose: "standing", textures: { head: giverSkin(type) } };
try {
api.updateMeshEntity(eId, "Person", opts);
applyGiverYaw(type);
applyGiverNameTag(type);
return;
} catch (e) {
noteError("skin update " + type, e);
}
try { api.deleteMeshEntity(eId); } catch (e) { }
const fresh = createGiver(type);
if (!fresh) return;
QUEST_NPCS[type] = fresh;
try { api.setPosition(fresh, QUEST_TYPES[type].x, QUEST_TYPES[type].y, QUEST_TYPES[type].z); } catch (e) { }
applyGiverYaw(type);
}
function healGiverAims() {
for (const key in QUEST_NPCS) applyGiverYaw(key);
}
function applyGiverYaw(type) {
const eId = QUEST_NPCS[type];
if (!eId) return;
try { api.setEntityRotation(eId, 0, giverYaw(type), 0); } catch (e) { }
}
function cmdDiag(playerId) {
const ids = [];
for (const key in QUEST_NPCS) ids.push(key + "=" + QUEST_NPCS[key]);
say(playerId, "VOIDBOUND DIAG", "#ffcc00");
say(playerId, "givers " + ids.length + "/4  " + (ids.join("  ") || "none spawned"), "#8a8a8a");
say(playerId, "side panel " + (PANEL_OFF[playerId] ? "hidden by /panel" : "on"), "#8a8a8a");
for (const key in QUEST_TYPES) {
say(playerId, "  " + key + " skin " + giverSkin(key) + " yaw " + Math.round(giverYaw(key)) + " nudge " + (GIVER_YAW[key] || 0), "#8a8a8a");
}
if (!LAST_ERRORS.length) {
say(playerId, "no errors recorded this session", "#55ff55");
return;
}
say(playerId, "last errors:", "#ff9a9a");
for (let i = Math.max(0, LAST_ERRORS.length - 6); i < LAST_ERRORS.length; i++) {
say(playerId, "  " + LAST_ERRORS[i], "#ff9a9a");
}
}
function cmdGiverSkin(playerId, args) {
if (!hasPerm(playerId, "panel")) {
say(playerId, "Staff only.", "#ff5555");
return;
}
const type = String(args[1] || "").toLowerCase();
const wanted = String(args[2] || "").trim();
if (!QUEST_TYPES[type]) {
say(playerId, "Usage: /giverskin <fishing|hunting|mining|killing> [skin|next]", "#ff5555");
for (const key in QUEST_TYPES) {
say(playerId, "  " + key + " wears " + giverSkin(key), "#8a8a8a");
}
say(playerId, "Try /giverskin fishing next to cycle trader skins.", "#5a5a5a");
return;
}
if (wanted === "next") {
const at = SKIN_TRIES.indexOf(giverSkin(type));
GIVER_SKINS[type] = SKIN_TRIES[(at + 1) % SKIN_TRIES.length];
} else if (wanted) {
GIVER_SKINS[type] = wanted.toLowerCase();
if (!knownSkin(GIVER_SKINS[type])) {
say(playerId, "Warning: " + GIVER_SKINS[type] + " is not in Bloxd's skin list.", "#ff9a9a");
}
} else {
say(playerId, QUEST_TYPES[type].title + " wears " + giverSkin(type) + ".", "#8a8a8a");
return;
}
saveGiverSkins();
applyGiverSkin(type);
say(playerId, QUEST_TYPES[type].title + " is now wearing " + giverSkin(type) + ".", "#55ff55");
say(playerId, "If it still looks plain, this client does not know that name.", "#5a5a5a");
}
function cmdGiverTurn(playerId, args) {
if (!hasPerm(playerId, "panel")) {
say(playerId, "Staff only.", "#ff5555");
return;
}
const type = String(args[1] || "").toLowerCase();
if (type === "reset") {
for (const key in QUEST_TYPES) GIVER_YAW[key] = 0;
saveGiverYaw();
for (const key in QUEST_TYPES) applyGiverYaw(key);
say(playerId, "All givers back to facing the middle.", "#55ff55");
return;
}
if (!QUEST_TYPES[type]) {
say(playerId, "Usage: /giverturn <fishing|hunting|mining|killing|reset> [degrees]", "#ff5555");
say(playerId, "Each use adds degrees, e.g. /giverturn fishing 90 turns it a quarter.", "#8a8a8a");
for (const key in QUEST_TYPES) {
say(playerId, "  " + key + " facing " + Math.round(giverYaw(key)) + " (nudge " + (GIVER_YAW[key] || 0) + ")", "#8a8a8a");
}
return;
}
const step = isFinite(Number(args[2])) ? Number(args[2]) : 90;
GIVER_YAW[type] = ((GIVER_YAW[type] || 0) + step) % 360;
saveGiverYaw();
applyGiverYaw(type);
say(playerId, QUEST_TYPES[type].title + " now faces " + Math.round(giverYaw(type)) + " degrees.", "#55ff55");
say(playerId, "Keep using /giverturn " + type + " 90 until it looks right.", "#8a8a8a");
}
function setupQuestGivers() {
for (const key in QUEST_TYPES) {
if (QUEST_NPCS[key]) continue;
const giver = QUEST_TYPES[key];
let eId = null;
try {
eId = createGiver(key);
} catch (e) {
noteError("giver " + key, e);
eId = null;
}
if (!eId) continue;
QUEST_NPCS[key] = eId;
try {
api.setPosition(eId, giver.x, giver.y, giver.z);
} catch (e) {
noteError("position " + key, e);
}
applyGiverYaw(key);
applyGiverNameTag(key);
}
}
function questSpec(type, done) {
const giver = QUEST_TYPES[type];
const step = Math.max(0, Math.floor(Number(done) || 0));
return {
tier: step + 1,
need: Math.min(giver.goalMax, giver.goal + giver.goalStep * step),
shards: Math.min(giver.shardMax, giver.shards + giver.shardStep * step),
xp: Math.min(giver.xpMax, giver.xp + giver.xpStep * step),
};
}
function skillOf(playerId, type) {
const d = ensure(playerId);
if (!d.skills[type]) d.skills[type] = { xp: 0, done: 0 };
return d.skills[type];
}
function skillLevel(playerId, type) {
return levelFor(skillOf(playerId, type).xp);
}
function skillSummary(playerId) {
const parts = [];
for (const key in QUEST_TYPES) {
parts.push(QUEST_TYPES[key].short + " " + skillLevel(playerId, key));
}
return parts.join("  |  ");
}
function assignQuest(playerId, type) {
const d = ensure(playerId);
const spec = questSpec(type, skillOf(playerId, type).done);
d.quests[type] = {
tier: spec.tier,
need: spec.need,
have: 0,
shards: spec.shards,
xp: spec.xp,
since: Date.now(),
};
saveNow(playerId);
pushRightInfo(playerId);
return d.quests[type];
}
function questProgress(playerId, type, amount) {
const d = P[playerId];
if (!d || !d.quests) return;
const quest = d.quests[type];
if (!quest || quest.have >= quest.need) return;
quest.have += amount;
if (quest.have > quest.need) quest.have = quest.need;
if (quest.have < quest.need) return;
const giver = QUEST_TYPES[type];
saveNow(playerId);
pushRightInfo(playerId);
say(playerId, "Quest complete: " + giver.verb + " " + quest.need + " " + giver.unit + ".", giver.colour);
say(playerId, "Claim it with the " + giver.title + " for " + fmtNum(quest.shards) + " shards and " + quest.xp + " XP.", "#ffd75e");
try { api.playSound(playerId, "levelup", 1, 1); } catch (e) { }
}
function questTalk(playerId, type) {
const giver = QUEST_TYPES[type];
const d = ensure(playerId);
const quest = d.quests[type];
if (!quest) {
const fresh = assignQuest(playerId, type);
richSay(playerId, [
segIcon(giver.icon, giver.colour),
segText(" " + giver.title + ": ", giver.colour),
segText(giver.verb + " " + fresh.need + " " + giver.unit + " for me.", "#e0e0e0"),
]);
say(playerId, "Tier " + fresh.tier + ". Reward: " + fmtNum(fresh.shards) + " shards + " + fresh.xp + " XP. Come back when it is done.", "#8a8a8a");
return;
}
if (quest.have < quest.need) {
richSay(playerId, [
segIcon(giver.icon, giver.colour),
segText(" " + giver.title + ": ", giver.colour),
segText(quest.have + "/" + quest.need + " " + giver.unit + " so far.", "#e0e0e0"),
]);
return;
}
const shards = quest.shards;
const xp = quest.xp;
delete d.quests[type];
const skill = skillOf(playerId, type);
const skillBefore = levelFor(skill.xp);
skill.done += 1;
skill.xp += xp;
const skillAfter = levelFor(skill.xp);
const nextSpec = questSpec(type, skill.done);
addShards(playerId, shards, true);
const levelledTo = addXp(playerId, xp);
saveNow(playerId);
pushRightInfo(playerId);
richSay(playerId, [
segIcon(giver.icon, giver.colour),
segText(" Quest complete! ", "#55ff55"),
segText("+" + fmtNum(shards) + " shards", "#ffd75e"),
segText("  +" + xp + " XP", "#b48cff"),
]);
say(playerId, giver.short + " level " + skillAfter + "  |  " + xpIntoLevel(skill.xp) + "/" + xpToNextLevel(skill.xp) + " to level " + (skillAfter + 1), "#8a8a8a");
say(playerId, "Next quest: tier " + nextSpec.tier + " - " + giver.verb + " " + nextSpec.need + " " + giver.unit + " for " + fmtNum(nextSpec.shards) + " shards + " + nextSpec.xp + " XP.", "#5a5a5a");
if (skillAfter > skillBefore) {
say(playerId, giver.name + " level up! You are now " + giver.short + " level " + skillAfter + ".", giver.colour);
try { api.playSound(playerId, "levelup", 1, 1); } catch (e) { }
}
if (levelledTo) {
say(playerId, "Level up! You are now level " + levelledTo + ".", "#55ff55");
try { api.playSound(playerId, "levelup", 1, 1); } catch (e) { }
}
}
function questTalkThrottled(playerId, type) {
ensure(playerId);
const rt = RT[playerId];
const now = Date.now();
if (rt.lastQuestAt && now - rt.lastQuestAt < 500) return;
rt.lastQuestAt = now;
questTalk(playerId, type);
}
function cmdQuests(playerId) {
const d = ensure(playerId);
const level = levelFor(d.stats.xp);
richSay(playerId, [
segIcon("fa-solid fa-ranking-star", "#ffcc00"),
segText(" VOIDBOUND QUESTS ", "#ffcc00"),
segText("| level " + level, "#8a8a8a"),
]);
say(playerId, "XP " + fmtNum(d.stats.xp) + "  |  " + xpIntoLevel(d.stats.xp) + "/" + xpToNextLevel(d.stats.xp) + " to level " + (level + 1), "#b48cff");
say(playerId, skillSummary(playerId), "#8a8a8a");
say(playerId, "Quest givers stand around 10000, -9999, 10000 - right-click one.", "#8a8a8a");
for (const key in QUEST_TYPES) {
const giver = QUEST_TYPES[key];
const quest = d.quests[key];
const lv = skillLevel(playerId, key);
if (!quest) {
const next = questSpec(key, skillOf(playerId, key).done);
richSay(playerId, [
segIcon(giver.icon, giver.colour),
segText(" " + giver.title + " Lv" + lv + "  ", giver.colour),
segText("tier " + next.tier + ": " + giver.verb + " " + next.need + " " + giver.unit, "#dddddd"),
segText("  " + fmtNum(next.shards) + " shards + " + next.xp + " XP", "#ffd75e"),
]);
continue;
}
const done = quest.have >= quest.need;
richSay(playerId, [
segIcon(giver.icon, giver.colour),
segText(" " + giver.title + " Lv" + lv + "  ", giver.colour),
segText("T" + (quest.tier || 1) + " " + giver.verb + " " + quest.have + "/" + quest.need + " " + giver.unit, done ? "#55ff55" : "#dddddd"),
segText("  " + fmtNum(quest.shards) + " shards + " + quest.xp + " XP", "#ffd75e"),
segText(done ? "  CLAIM" : "", "#55ff55"),
]);
}
say(playerId, "No giver nearby? /quest fishing, hunting, mining or killing.", "#5a5a5a");
}
onPlayerJoin = function (playerId) {
pruneStaff();
const name = nameOf(playerId);
const key = keyOf(name);
const ban = STAFF.bans[key];
if (ban) {
if (!ban.until || ban.until > Date.now()) {
try { api.kickPlayer(playerId, "Banned: " + ban.reason); } catch (e) { }
return;
}
delete STAFF.bans[key];
saveStaff();
}
const d = ensure(playerId);
RT[playerId].minute = Math.floor(d.stats.playtimeMs / 60000);
RT[playerId].pending = null;
syncShards(playerId);
setupBoard(playerId);
syncClientButtons(playerId);
applyRankCosmetics(playerId);
try { api.setClientOption(playerId, "middleTextLower", ""); } catch (e) { }
renderStaffMenu(playerId);
syncClientButtons(playerId);
const mute = STAFF.mutes[key];
if (mute && (!mute.until || mute.until > Date.now())) {
say(playerId, "You are muted for " + durationText(mute.until) + ": " + mute.reason, "#ff5555");
} else if (mute) {
delete STAFF.mutes[key];
saveStaff();
}
const r = rankInfo(playerId);
if (d.firstJoin) {
d.firstJoin = false;
say(playerId, "WELCOME TO " + gameTitle(), "#55aaff");
say(playerId, "Earn Void Shards from kills, mobs and playtime.", "#e0e0e0");
say(playerId, "Spend them on crates: /crates   |   Quests: /quests", "#e0e0e0");
say(playerId, "Events: /events  |  Updates: /updates  |  Help: /help", "#8a8a8a");
say(playerId, "Discord: " + DISCORD_LINK, "#8fd0ff");
} else {
say(playerId, "Welcome back, " + name + ". " + fmtNum(d.shards) + " " + CFG.CURRENCY_NAME + ".", "#55aaff");
}
if (r.level > 0) {
say(playerId, "Staff rank: " + r.name + "  |  Press B or N for your staff menu", r.colour);
}
pushRightInfo(playerId, true);
};
onPlayerLeave = function (playerId) {
saveNow(playerId);
delete P[playerId];
delete RT[playerId];
delete FLY[playerId];
};
onPlayerChat = function (playerId, chatMessage, channelName) {
const key = keyOf(nameOf(playerId));
const mute = STAFF.mutes[key];
if (mute) {
if (!mute.until || mute.until > Date.now()) {
say(playerId, "You are muted for " + durationText(mute.until) + ".", "#ff5555");
return false;
}
delete STAFF.mutes[key];
saveStaff();
}
const r = rankInfo(playerId);
if (!r.tag) return;
return [[segIcon(r.icon, r.colour), segText(" " + r.tag + " ", r.colour)]];
};
onPlayerPressedButton = function (playerId, buttonId) {
if (buttonId === "vb_panel") {
ensure(playerId);
openStaffMenu(playerId, SHOP_CATS.staff.key);
return;
}
if (buttonId === "vb_fly") {
ensure(playerId);
cmdFly(playerId);
}
};
onPlayerBoughtShopItem = function (playerId, categoryKey, itemKey, item, userInput) {
if (!categoryKey) return;
if (String(categoryKey).indexOf("vb_") !== 0) return;
handleStaffMenuBuy(playerId, categoryKey, itemKey, userInput);
};
onPlayerKilledOtherPlayer = function (attackingPlayer, killedPlayer, damageDealt, withItem) {
const d = ensure(attackingPlayer);
d.stats.kills++;
questProgress(attackingPlayer, "killing", 1);
addShards(attackingPlayer, CFG.KILL_SHARDS, true);
say(attackingPlayer, "Kill! +" + fmtNum(CFG.KILL_SHARDS) + " " + CFG.CURRENCY_NAME, "#ff6666");
say(attackingPlayer, "Kills: " + d.stats.kills + "  |  Shards: " + fmtNum(d.shards), "#8a8a8a");
};
onAttemptKillPlayer = function (killedPlayer, attackingLifeform) {
const d = ensure(killedPlayer);
d.stats.deaths++;
};
onPlayerKilledMob = function (playerId, mobId, damageDealt, withItem) {
if (!playerId) return;
const d = ensure(playerId);
d.stats.mobKills++;
questProgress(playerId, "hunting", 1);
addShards(playerId, CFG.MOB_SHARDS, true);
if (d.stats.mobKills % 100 === 0) {
say(playerId, "Mob kills: " + d.stats.mobKills + "  |  +" + fmtNum(CFG.MOB_SHARDS) + " shards", "#55aaff");
}
};
onPlayerSucceededFishCatch = function (playerId, rodName, x, y, z, caughtItemName) {
if (!playerId) return;
questProgress(playerId, "fishing", 1);
};
onPlayerChangeBlock = function (playerId, x, y, z, fromBlock, toBlock) {
if (!playerId) return;
if (String(toBlock) !== "Air") return;
if (!fromBlock || String(fromBlock) === "Air") return;
questProgress(playerId, "mining", 1);
};
onPlayerAltAction = function (playerId, x, y, z, block, targetEId) {
if (!playerId) return;
if (targetEId) {
for (const key in QUEST_NPCS) {
if (QUEST_NPCS[key] === targetEId) {
questTalkThrottled(playerId, key);
return;
}
}
}
const near = giverNear(playerId);
if (near) questTalkThrottled(playerId, near);
};
doPeriodicSave = function () {
saveAll();
};
let lastGiverAimAt = 0;
tick = function (ms) {
const dt = Number(ms) || 50;
for (const id in P) {
P[id].stats.playtimeMs += dt;
}
perSecond(dt);
saveAcc += dt;
boardAcc += dt;
if (saveAcc >= CFG.SAVE_EVERY_MS) {
saveAcc = 0;
saveAll();
}
if (boardAcc >= CFG.BOARD_EVERY_MS) {
boardAcc = 0;
boardTick();
}
checkPortals(dt);
if (Date.now() - lastGiverAimAt > 30000) {
lastGiverAimAt = Date.now();
healGiverAims();
}
};
let secondAcc = 0;
function perSecond(dt) {
secondAcc += dt;
if (secondAcc < 1000) return;
const secs = Math.floor(secondAcc / 1000);
secondAcc -= secs * 1000;
for (const id in P) {
const d = P[id];
const rt = RT[id];
if (!d || !rt) continue;
const minute = Math.floor(d.stats.playtimeMs / 60000);
if (minute > rt.minute) {
const gained = minute - rt.minute;
rt.minute = minute;
addShards(id, CFG.SHARDS_PER_MINUTE * gained, true);
}
}
}
const BUILD = "VB-CMD-4";
playerCommand = function (playerId, command) {
ensure(playerId);
const text = String(command || "").trim().replace(/^[/!]+/, "");
const args = text.split(/\s+/);
const cmd = (args[0] || "").toLowerCase();
if (cmd === "version" || cmd === "build") {
say(playerId, "Voidbound world code: " + BUILD, "#8fd0ff");
return;
}
if (cmd === "help" || cmd === "commands" || cmd === "cmds") {
say(playerId, "World code " + BUILD, "#5a5a5a");
cmdHelp(playerId);
return false;
}
if (cmd === "lb" || cmd === "top" || cmd === "leaderboard" || cmd === "leaderboards") {
cmdLeaderboard(playerId, (args[1] || "").toLowerCase());
return false;
}
if (cmd === "stats" || cmd === "profile" || cmd === "me") {
cmdStats(playerId);
return false;
}
if (cmd === "style" || cmd === "vbstyle" || cmd === "stylecheck") {
cmdStyleTest(playerId);
return false;
}
if (cmd === "board" || cmd === "lbrefresh" || cmd === "refreshboard") {
cmdBoardRefresh(playerId);
return false;
}
if (cmd === "quests" || cmd === "quest") {
const type = String(args[1] || "").toLowerCase();
if (cmd === "quests" || !type) {
cmdQuests(playerId);
} else if (QUEST_TYPES[type]) {
questTalkThrottled(playerId, type);
} else {
say(playerId, "Usage: /quest <fishing|hunting|mining|killing>", "#ff5555");
}
return false;
}
if (cmd === "giverskin" || cmd === "skin") {
cmdGiverSkin(playerId, args);
return false;
}
if (cmd === "givertag" || cmd === "tags") {
for (const key in QUEST_TYPES) applyGiverNameTag(key);
say(playerId, "Giver name tags refreshed.", "#55ff55");
return false;
}
if (cmd === "util" || cmd === "utilities" || cmd === "homesmenu") {
cmdHomes(playerId);
return false;
}
if (cmd === "home" || cmd === "homes") {
if (cmd === "homes" || args[1] === undefined) cmdHomes(playerId);
else useHome(playerId, args[1]);
return false;
}
if (cmd === "sethome" || cmd === "setbase") {
setHome(playerId, args[1] === undefined ? 1 : args[1]);
return false;
}
if (cmd === "unlockhome" || cmd === "buyhome") {
unlockHome(playerId, args[1] === undefined ? 0 : args[1]);
return false;
}
if (cmd === "delhome" || cmd === "deletehome" || cmd === "removehome") {
deleteHome(playerId, args[1] === undefined ? 0 : args[1]);
return false;
}
if (cmd === "renamehome" || cmd === "namehome") {
if (args[1] === undefined || args.length < 3) {
say(playerId, "Usage: /renamehome <n> <name>", "#ff5555");
return false;
}
renameHome(playerId, parseInt(args[1], 10) || 0, args.slice(2).join(" "));
return false;
}
if (cmd === "spawn" || cmd === "lobby") {
cmdLobby(playerId);
return false;
}
if (cmd === "portal" || cmd === "portals") {
cmdPortal(playerId);
return false;
}
if (cmd === "diag" || cmd === "diagnose") {
cmdDiag(playerId);
return false;
}
if (cmd === "giverturn" || cmd === "faceturn") {
cmdGiverTurn(playerId, args);
return false;
}
if (cmd === "panel" || cmd === "hud") {
cmdPanel(playerId);
return false;
}
if (cmd === "discord" || cmd === "dc") {
say(playerId, "VOIDBOUND SMP Discord:", "#55aaff");
say(playerId, DISCORD_LINK, "#8fd0ff");
say(playerId, "Chat links are not clickable - copy it into your browser.", "#5a5a5a");
return false;
}
if (cmd === "shards" || cmd === "shard" || cmd === "bal" || cmd === "balance" || cmd === "money") {
cmdShards(playerId);
return false;
}
if (cmd === "pay" || cmd === "send") {
cmdPay(playerId, args);
return false;
}
if (cmd === "crates") {
cmdCrates(playerId);
return false;
}
if (cmd === "crate" || cmd === "buycrate" || cmd === "buy") {
const sub = (args[1] || "").toLowerCase();
if (sub === "info" || sub === "odds" || sub === "chance" || sub === "chances") {
cmdCrateInfo(playerId, args[2]);
return false;
}
if (cmd === "buy") {
cmdBuyCrate(playerId, ["crate", "buy", args[1]]);
} else if ((args[1] || "").toLowerCase() === "buy" || (args[1] || "").toLowerCase() === "open") {
cmdBuyCrate(playerId, ["crate", "buy", args[2]]);
} else {
const crate = crateById(args[1]);
if (crate) cmdBuyCrate(playerId, ["crate", "buy", args[1]]);
else say(playerId, "Usage: /crate buy <id>  - see /crates", "#ff5555");
}
return false;
}
if (cmd === "events" || cmd === "event") {
cmdEvents(playerId, args);
return false;
}
if (cmd === "updates" || cmd === "update" || cmd === "changelog" || cmd === "log") {
cmdUpdates(playerId, args);
return false;
}
if (cmd === "admin" || cmd === "panel" || cmd === "staffpanel" || cmd === "ap") {
cmdAdmin(playerId);
return false;
}
if (cmd === "staff" || cmd === "ranks" || cmd === "stafflist") {
cmdStaff(playerId);
return false;
}
if (cmd === "players" || cmd === "online" || cmd === "list") {
cmdPlayers(playerId);
return false;
}
if (cmd === "fly") {
cmdFly(playerId);
return false;
}
if (cmd === "gm" || cmd === "gamemode") {
cmdGamemode(playerId, args);
return false;
}
if (cmd === "give" || cmd === "item") {
cmdGive(playerId, args);
return false;
}
if (cmd === "tp" || cmd === "teleport") {
cmdTeleport(playerId, args);
return false;
}
if (cmd === "tphere" || cmd === "bring") {
cmdTpHere(playerId, args);
return false;
}
if (cmd === "tppos") {
cmdTpPos(playerId, args);
return false;
}
if (cmd === "kick") {
cmdKick(playerId, args);
return false;
}
if (cmd === "mute") {
cmdMute(playerId, args);
return false;
}
if (cmd === "unmute") {
cmdUnmute(playerId, args);
return false;
}
if (cmd === "ban") {
cmdBan(playerId, args);
return false;
}
if (cmd === "tempban" || cmd === "tban") {
cmdTempBan(playerId, args);
return false;
}
if (cmd === "unban") {
cmdUnban(playerId, args);
return false;
}
if (cmd === "banlist" || cmd === "bans") {
cmdBanList(playerId);
return false;
}
if (cmd === "warn") {
cmdWarn(playerId, args);
return false;
}
if (cmd === "warns" || cmd === "warnings") {
cmdWarns(playerId, args);
return false;
}
if (cmd === "sc" || cmd === "staffchat") {
cmdStaffChat(playerId, args);
return false;
}
if (cmd === "rank" || cmd === "setrank") {
cmdRank(playerId, args);
return false;
}
return false;
};
const POOL_LABELS = [
{ pool: ARMOUR_SETS.geo, label: "Geo armour" },
{ pool: ARMOUR_SETS.serpentite, label: "Serpentite armour" },
{ pool: ARMOUR_SETS.astral, label: "Astral armour" },
{ pool: ARMOUR_SETS.sanguine, label: "Sanguine armour" },
{ pool: ARMOUR_SETS.spectral, label: "Spectral armour" },
{ pool: TOOL_SETS.starter, label: "starter tools" },
{ pool: TOOL_SETS.good, label: "diamond tools" },
{ pool: TOOL_SETS.serpentite, label: "Serpentite tools" },
{ pool: TOOL_SETS.spectral, label: "Spectral weapon" },
{ pool: GEAR_POOLS.starter, label: "starter gear" },
{ pool: GEAR_POOLS.mid, label: "diamond gear" },
{ pool: GEAR_POOLS.rare, label: "rare gear" },
{ pool: GEAR_POOLS.elite, label: "elite gear" },
];
function poolLabel(pool) {
for (let i = 0; i < POOL_LABELS.length; i++) {
if (POOL_LABELS[i].pool === pool) return POOL_LABELS[i].label;
}
return "tools";
}
function crateTotal(crate) {
let total = 0;
for (let i = 0; i < crate.entries.length; i++) total += crate.entries[i].w;
return total || 1;
}
function crateChance(crate, entry) {
return Math.round(entry.w / crateTotal(crate) * 1000) / 10;
}
function pctText(pct) {
if (pct === Math.floor(pct)) return String(pct) + "%";
return pct.toFixed(1) + "%";
}
function enchantText(ench) {
if (!ench) return "";
if (ench[0] === ench[1]) return "  ench " + ench[0];
return "  ench " + ench[0] + "-" + ench[1];
}
function crateRowText(entry) {
if (entry.pick) return (entry.label || poolLabel(entry.pick)) + enchantText(entry.ench);
if (entry.i) {
const range = entry.ia ? " x" + entry.ia[0] + "-" + entry.ia[1] : "";
return entry.i + range + enchantText(entry.ench);
}
const lo = entry.s[0];
const hi = entry.s[1];
return (lo === hi ? fmtNum(lo) : fmtNum(lo) + "-" + fmtNum(hi)) + " " + CFG.CURRENCY_NAME;
}
function crateOdds(crate) {
const rows = [];
for (let i = 0; i < crate.entries.length; i++) {
const entry = crate.entries[i];
rows.push({
entry: entry,
r: entry.r,
pct: crateChance(crate, entry),
text: crateRowText(entry),
});
}
return rows;
}
function crateOddsText(crate) {
const rows = crateOdds(crate);
const out = [];
for (let i = 0; i < rows.length; i++) {
out.push("  " + pctText(rows[i].pct) + "  " + rows[i].text);
}
return out;
}
function buyCrate(playerId, crate) {
if (!crate) return false;
const d = ensure(playerId);
if (d.shards < crate.price) {
say(playerId, "Need " + fmtNum(crate.price - d.shards) + " more " + CFG.CURRENCY_NAME + " for a " + crate.name + ".", "#ff5555");
return false;
}
if (!takeShards(playerId, crate.price)) return false;
say(playerId, "Opened a " + crate.name + " for " + fmtNum(crate.price) + " " + CFG.CURRENCY_NAME + ".", "#b98cff");
openCrate(playerId, crate);
return true;
}
function buyCrateById(playerId, id) {
const crate = crateById(id);
if (!crate) {
say(playerId, "Unknown crate \"" + String(id) + "\". /crates lists all nine.", "#ff5555");
return false;
}
return buyCrate(playerId, crate);
}
loadLists();
loadStaff();
pruneStaff();
setupStaffShop();
try {
loadGiverYaw();
} catch (e) {
noteError("giver yaw", e);
}
try {
loadGiverSkins();
} catch (e) {
noteError("giver skins", e);
}
try {
setupQuestGivers();
} catch (e) {
noteError("quest givers", e);
}
