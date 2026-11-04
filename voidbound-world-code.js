const CFG = {
DB_KEY: "vb_player_v1",
CURRENCY_ID: "void_shards",
CURRENCY_NAME: "Void Shards",
CURRENCY_ICON: "coins",
XP_KILL: 40,
XP_MOB: 6,
XP_MINE: 1,
XP_FISH: 4,
XP_MINUTE: 2,
CURRENCY_COLOUR: "blue",
SAVE_EVERY_MS: 60000,
PANEL_LIMIT: 1300,
BOARD_EVERY_MS: 4000,
PORTAL_CHECK_MS: 400,
PORTAL_COOLDOWN_MS: 4000,
BLACK_PORTAL_DEST: [50000.5, 60001, 49999.5],
ORANGE_PORTAL_DEST: [637, -99932, -396],
ARENA_DEST: [9063.5, 9991, 9744.5],
ARENA_GRACE_MS: 5000,
ZONE_HALF: 50,
ZONE_Y: 120,
ARENA_GRACE_EFFECT: "Damage Reduction",
GIVER_TALK_RANGE: 5,
PRESTIGE_POS: [603.5, -99943, -110.5],
PRESTIGE_YAW: 90,
PRESTIGE_STEP: 0.05,
PRESTIGE_STAT_MAX: 10,
PRESTIGE_MAX: 40,
LEVEL_CAP: 1000,
QUEST_XP_SHARE: 0.5,
METEOR_EVERY_MS: 3600000,
METEOR_KEY: "vb_meteor_v1",
METEOR_RADIUS: 3000,
METEOR_MIN_DIST: 600,
METEOR_RING: 11,
METEOR_FILL_RANGE: 48,
METEOR_ENCHANT: 5,
METEOR_TP_MIN: 30,
METEOR_TP_MAX: 120,
METEOR_TP_COOLDOWN_MS: 15000,
METEOR_FORCE_Y: 100,
METEOR_FORCE_CLEAR: 12,
METEOR_NEAR_MIN: 56,
METEOR_NEAR_MAX: 200,
METEOR_SKY_Y: 140,
RTP_FLOOR_Y: 64,
RTP_DROP_Y: 170,
RTP_SETTLE_MS: 20000,
WORLD_BORDER: 100000,
TUTORIAL_GAP_MS: 9000,
RTP_CENTRE: [0, 0],
RTP_MIN_DIST: 80,
RTP_RADIUS: 50000,
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
MAX_GRANT_SHARDS: 10000000,
ARMOUR_DURABILITY: 300,
MAX_GRANT_LEVELS: 500,
MAX_MUTE_MIN: 1440,
MAX_TEMP_BAN_DAYS: 30,
WARNS_MAX: 120,
};
const OWNER_NAMES = ["xvexx", "polyduck"];
const RETIRED_NAMES = ["itzkasaixyt"];
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
level: 3, shards: 3, clearinv: 3,
rank: 4, events: 4, updates: 4, clearlists: 4,
};
const RANK_ALIASES = {
owner: "owner", founder: "owner", owners: "owner", founders: "owner",
admin: "admin", administrator: "admin",
mod: "mod", moderator: "mod", trial: "trial", trialmod: "trial",
"trial-mod": "trial", helper: "trial", player: "player", none: "player",
member: "player", default: "player",
};
const WEAPONS = [
{
id: "killer",
name: "Killer",
kind: "sword",
colour: "#ff9a9a",
item: "Diamond Sword",
d: 3,
s: 3,
c: 4,
price: 2500,
level: 3,
kills: 25,
playtimeMs: 7200000,
blurb: "A fast, hard-hitting blade. The first real step up from diamond.",
},
{
id: "combo",
name: "Combo",
kind: "whip",
colour: "#8fd0ff",
item: "Diamond Sword",
d: 2,
s: 5,
c: 2,
price: 3500,
level: 4,
kills: 40,
playtimeMs: 10800000,
blurb: "A whip that never stops moving. Low damage, brutal attack speed.",
},
{
id: "critkiller",
name: "Crit Killer",
kind: "club",
colour: "#ffd75e",
item: "Diamond Axe",
d: 2,
s: 3,
c: 5,
price: 4500,
level: 5,
kills: 60,
playtimeMs: 14400000,
blurb: "A club built for one thing: the critical hit.",
},
{
id: "goblin",
name: "Goblin",
kind: "spear",
colour: "#55ff55",
item: "Diamond Sword",
d: 4,
s: 5,
c: 3,
price: 6000,
level: 6,
kills: 80,
playtimeMs: 18000000,
blurb: "A long spear with reach and speed. Goblin-made, goblin-named.",
},
];
const ARMOUR = [
{
id: "fighter",
name: "Fighter",
colour: "#c9c9c9",
p: 3,
h: 3,
r: 3,
price: 3000,
level: 3,
kills: 30,
playtimeMs: 7200000,
ability: { name: "Bloodlust", effect: "Damage", blurb: "Hits harder while the full set is worn." },
},
{
id: "hunter",
name: "Hunter",
colour: "#55ff55",
p: 4,
h: 4,
r: 4,
price: 4000,
level: 4,
kills: 40,
playtimeMs: 10800000,
ability: { name: "Stalker", effect: "Speed", blurb: "Faster on foot while the full set is worn." },
},
{
id: "elite",
name: "Elite",
colour: "#b48cff",
p: 4,
h: 2,
r: 4,
price: 5500,
level: 5,
kills: 50,
playtimeMs: 14400000,
ability: { name: "Second Wind", effect: "Health Regen", blurb: "Health keeps coming back while the full set is worn." },
},
{
id: "king",
name: "King",
colour: "#ffd75e",
p: 5,
h: 3,
r: 3,
price: 7000,
level: 6,
kills: 60,
playtimeMs: 18000000,
ability: { name: "Royal Aura", effect: "Damage Reduction", blurb: "Takes less damage while the full set is worn." },
},
];
const ARMOUR_PIECES = ["Military Helmet", "Military Chestplate", "Military Leggings", "Military Boots"];
const METEOR_PIECES = ["Amethite Helmet", "Amethite Chestplate", "Amethite Leggings", "Amethite Boots"];
const METEOR_SWORD = "Amethite Sword";
const METEOR_LOOT = [METEOR_PIECES[0], METEOR_PIECES[1], METEOR_PIECES[2], METEOR_PIECES[3], METEOR_SWORD];
const METEOR_EFFECTS = ["Speed", "Damage", "Health Regen", "Damage Reduction"];
const METEOR_LIGHT = "Dim Lamp On";
const METEOR_EXTRAS = [
{ item: "Diamond", amount: 16 },
{ item: "Gold Bar", amount: 16 },
{ item: "Amethite Fragment", amount: 12 },
{ item: "Diamond Fragment", amount: 8 },
{ item: "Gold Fragment", amount: 8 },
];
const TUTORIAL_KEY = "vb_tutorial_v1";
const TUTORIAL_STEPS = [
{ name: "WELCOME", colour: "#55aaff", lines: ["Welcome to AEVORA - a short walkthrough runs while you settle in.", "Void Shards are the only currency: kills, mobs and playtime pay you.", "Check yourself with /stats, your quests with /quests and every command with /help."] },
{ name: "GEAR", colour: "#55ff55", lines: ["/weapons shows every blade and its D, S and C, then /weapon buy <id>.", "/armour sells four piece sets - wear all four and the set ability switches on.", "Gear wears down as it saves you, so keep shards coming in."] },
{ name: "QUESTS", colour: "#ffd75e", lines: ["Four givers wait in the lobby: xVexx, TECMAN_, Conceptual and PolyDuck.", "Right-click one, or type /quest fishing to take their job.", "Quests are the fastest XP in the game and they pay shards as well."] },
{ name: "PRESTIGE", colour: "#b48cff", lines: ["Reach level " + CFG.LEVEL_CAP + ", then right-click BloxdSeno at 603.5 -99943 -110.5.", "Each prestige grants one shard: 10 shards per stat, +50% each.", "40 prestiges fills every stat, and the level cap lifts after that."] },
{ name: "METEORS", colour: "#ff9c55", lines: ["A meteor falls once an hour, ringed in crystal with one piece of loot.", "/meteortp drops you within 1000 blocks of it - the chest fills as you arrive.", "The world border is 100000 blocks out on each side, so do not wander past it."] },
{ name: "GAMBLER", colour: "#ffd75e", lines: ["A gambler stands at 603.5 -99943 -85.5 with one free roll every 24 hours.", "Right-click him for a random stack of a survival item or block.", "/gamble does the same from anywhere."] },
{ name: "READY", colour: "#8fd0ff", lines: ["That is the whole game: earn, gear up, quest, prestige, hunt meteors.", "Ranks get the staff menu on B or N, and /panel hides the side panel.", "/tutorial next, /tutorial restart or /tutorial skip whenever you want."] },
];
let METEOR = null;
let METEOR_LAST_AT = 0;
let METEOR_TRY_AT = 0;
const DROPS = {};
const TUT = {};
function meteorSave() {
const payload = { last: METEOR_LAST_AT, meteor: METEOR };
try { api.setLobbyDbValue(CFG.METEOR_KEY, JSON.stringify(payload)); } catch (e) { noteError("meteor save", e); }
}
function meteorLoad() {
let raw = null;
try { raw = api.getLobbyDbValue(CFG.METEOR_KEY); } catch (e) { raw = null; }
METEOR = null;
METEOR_LAST_AT = Date.now() - CFG.METEOR_EVERY_MS;
if (!raw) return false;
let data = null;
try { data = typeof raw === "string" ? JSON.parse(raw) : raw; } catch (e) { data = null; }
if (!data || typeof data !== "object") return false;
const last = Number(data.last);
if (isFinite(last) && last > 0) METEOR_LAST_AT = last;
const m = data.meteor;
if (!m || typeof m !== "object") return false;
const mx = Number(m.x), my = Number(m.y), mz = Number(m.z);
if (!isFinite(mx) || !isFinite(my) || !isFinite(mz)) return false;
if (Math.abs(mx) > CFG.WORLD_BORDER || Math.abs(mz) > CFG.WORLD_BORDER) return false;
if (Math.round(my) > CFG.METEOR_SKY_Y) {
meteorWipeSky(Math.round(mx), Math.round(my), Math.round(mz));
METEOR_LAST_AT = Date.now() - CFG.METEOR_EVERY_MS;
return false;
}
const loot = METEOR_LOOT.indexOf(String(m.loot)) >= 0 ? String(m.loot) : METEOR_LOOT[0];
METEOR = { x: Math.round(mx), y: Math.round(my), z: Math.round(mz), loot: loot, at: isFinite(Number(m.at)) ? Number(m.at) : METEOR_LAST_AT, filled: !!m.filled && !!m.stocked, stocked: !!m.stocked, chest: [Math.round(mx), Math.round(my), Math.round(mz)] };
return true;
}
function meteorSetBlock(x, y, z, name) {
try { api.setBlock(x, y, z, name); return true; } catch (e) { noteError("meteor block", e); return false; }
}
function meteorFoliage(name) {
const text = String(name || "").toLowerCase();
if (!text) return false;
if (text.indexOf("leaves") >= 0) return true;
if (text.indexOf("log") >= 0) return true;
if (text.indexOf("wood") >= 0) return true;
if (text.indexOf("sapling") >= 0) return true;
if (text.indexOf("bamboo") >= 0) return true;
return text.indexOf("vine") >= 0;
}
function meteorLoaded(x, y, z) {
try { const loaded = api.isBlockInLoadedChunk(Math.floor(x), Math.floor(y), Math.floor(z)); if (typeof loaded === "boolean") return loaded; } catch (e) { }
return true;
}
function meteorGround(x, z) {
if (!meteorLoaded(x, CFG.RTP_FLOOR_Y, z)) return null;
let y = CFG.RTP_TOP_Y;
while (y > CFG.RTP_MIN_Y && !blockSolidAt(x, y, z)) y -= 1;
if (y <= CFG.RTP_MIN_Y) return null;
for (let tries = 0; tries < 12 && y > CFG.RTP_MIN_Y; tries++) {
if (!meteorFoliage(blockNameAt(x, y, z))) return y + 1;
y -= 1;
}
return null;
}
function meteorAnchors() {
const out = [];
for (const id in P) {
const spot = hereSpot(id);
if (spot && isFinite(spot.x) && isFinite(spot.z)) out.push(spot);
}
return out;
}
function meteorSpot() {
const anchors = meteorAnchors();
for (let tries = 0; tries < 24; tries++) {
const base = anchors.length ? anchors[Math.floor(Math.random() * anchors.length)] : null;
const minD = base ? CFG.METEOR_NEAR_MIN : CFG.METEOR_MIN_DIST;
const maxD = base ? CFG.METEOR_NEAR_MAX : CFG.METEOR_RADIUS;
const angle = Math.random() * Math.PI * 2;
const dist = minD + Math.random() * (maxD - minD);
const x = Math.round((base ? base.x : CFG.RTP_CENTRE[0]) + Math.cos(angle) * dist);
const z = Math.round((base ? base.z : CFG.RTP_CENTRE[1]) + Math.sin(angle) * dist);
if (Math.abs(x) > CFG.WORLD_BORDER - 2000 || Math.abs(z) > CFG.WORLD_BORDER - 2000) continue;
const y = meteorGround(x, z);
if (y !== null && y > CFG.RTP_MIN_Y) return { x: x, y: y, z: z };
}
return null;
}
function meteorTopSolid(x, z) {
if (!meteorLoaded(x, CFG.RTP_FLOOR_Y, z)) return null;
for (let y = CFG.RTP_TOP_Y; y > CFG.RTP_MIN_Y; y--) {
if (blockSolidAt(x, y, z)) return y;
}
return null;
}
function meteorForceSite() {
const anchors = meteorAnchors();
for (let tries = 0; tries < 12; tries++) {
const base = anchors.length ? anchors[Math.floor(Math.random() * anchors.length)] : null;
const minD = base ? CFG.METEOR_NEAR_MIN : CFG.METEOR_MIN_DIST;
const maxD = base ? CFG.METEOR_NEAR_MIN + 80 : CFG.METEOR_RADIUS;
const angle = Math.random() * Math.PI * 2;
const dist = minD + Math.random() * (maxD - minD);
const x = Math.round((base ? base.x : CFG.RTP_CENTRE[0]) + Math.cos(angle) * dist);
const z = Math.round((base ? base.z : CFG.RTP_CENTRE[1]) + Math.sin(angle) * dist);
if (Math.abs(x) > CFG.WORLD_BORDER - 2000 || Math.abs(z) > CFG.WORLD_BORDER - 2000) continue;
const top = meteorTopSolid(x, z);
if (top !== null) return { x: x, y: top + 1, z: z };
if (base && isFinite(base.y)) return { x: x, y: Math.floor(base.y) + 1, z: z };
}
return null;
}
function meteorCarve(m) {
const clear = CFG.METEOR_FORCE_CLEAR;
for (let dx = -clear; dx <= clear; dx++) {
for (let dz = -clear; dz <= clear; dz++) {
const dist = Math.hypot(dx, dz);
if (dist > clear) continue;
for (let dy = -1; dy <= 8; dy++) {
meteorSetBlock(m.x + dx, m.y + dy, m.z + dz, dy === -1 ? (dist <= 4 ? "Obsidian" : "Crystal Block") : "Air");
}
}
}
}
function meteorWipeSky(x, y, z) {
const radius = CFG.METEOR_RING;
const steps = Math.max(48, radius * 8);
for (let i = 0; i < steps; i++) {
const angle = (i / steps) * Math.PI * 2;
const bx = Math.round(x + Math.cos(angle) * radius);
const bz = Math.round(z + Math.sin(angle) * radius);
for (let dy = 0; dy <= 6; dy++) meteorSetBlock(bx, y + dy, bz, "Air");
}
for (let dx = -2; dx <= 2; dx++) {
for (let dz = -2; dz <= 2; dz++) {
for (let dy = 0; dy <= 3; dy++) meteorSetBlock(x + dx, y + dy, z + dz, "Air");
}
}
}
function meteorClearChest(m) {
if (!m || !m.chest) return;
meteorSetBlock(m.chest[0], m.chest[1], m.chest[2], "Air");
}
function buildMeteor(m) {
const radius = CFG.METEOR_RING;
const steps = Math.max(48, radius * 8);
if (m.forced) meteorCarve(m);
for (let i = 0; i < steps; i++) {
const angle = (i / steps) * Math.PI * 2;
const bx = Math.round(m.x + Math.cos(angle) * radius);
const bz = Math.round(m.z + Math.sin(angle) * radius);
let by = m.forced ? m.y : meteorGround(bx, bz);
if (by === null) by = m.y;
meteorSetBlock(bx, by, bz, "Crystal Block");
if (i % 12 === 0) {
meteorSetBlock(bx, by + 1, bz, "Crystal Block");
meteorSetBlock(bx, by + 2, bz, "Crystal Block");
meteorSetBlock(bx, by + 3, bz, "Crystal Block");
meteorSetBlock(bx, by + 4, bz, METEOR_LIGHT);
}
for (let dy = 1; dy <= 6; dy++) {
if (meteorFoliage(blockNameAt(bx, by + dy, bz))) meteorSetBlock(bx, by + dy, bz, "Air");
}
}
if (!m.forced) {
for (let dx = -4; dx <= 4; dx++) {
for (let dz = -4; dz <= 4; dz++) {
const ring = Math.abs(dx) + Math.abs(dz);
if (ring > 5) continue;
if (dx === 0 && dz === 0) continue;
let by = meteorGround(m.x + dx, m.z + dz);
if (by === null) by = m.y;
meteorSetBlock(m.x + dx, by, m.z + dz, ring <= 2 ? "Obsidian" : "Crystal Block");
for (let dy = 1; dy <= 6; dy++) {
if (meteorFoliage(blockNameAt(m.x + dx, by + dy, m.z + dz))) meteorSetBlock(m.x + dx, by + dy, m.z + dz, "Air");
}
}
}
}
for (let dy = 0; dy <= 8; dy++) meteorSetBlock(m.x, m.y + dy, m.z, "Air");
m.chest = [m.x, m.y, m.z];
meteorSetBlock(m.x, m.y, m.z, "Chest");
}
function meteorAttrs(item) {
try { return api.createEnchantmentAttributesForItem(item, CFG.METEOR_ENCHANT); } catch (e) { noteError("meteor enchant", e); return null; }
}
function meteorEnsureChest() {
if (!METEOR || !METEOR.chest) return false;
const pos = METEOR.chest;
if (blockIsChest(blockNameAt(pos[0], pos[1], pos[2]))) return true;
meteorSetBlock(pos[0], pos[1], pos[2], "Chest");
return blockIsChest(blockNameAt(pos[0], pos[1], pos[2]));
}
function meteorChestSlot(idx) {
try {
const item = api.getStandardChestItemSlot(METEOR.chest, idx);
if (item === undefined) return null;
return item && item.name ? String(item.name) : "";
} catch (e) {
return null;
}
}
function meteorChestWrite(idx, item, amount, attrs, playerId) {
const pos = METEOR.chest;
const sizes = amount ? [amount, null] : [null];
for (let i = 0; i < sizes.length; i++) {
let sent = false;
try {
if (attrs) api.setStandardChestItemSlot(pos, idx, item, sizes[i], playerId, attrs);
else api.setStandardChestItemSlot(pos, idx, item, sizes[i], playerId);
sent = true;
} catch (e) {
sent = false;
}
const read = meteorChestSlot(idx);
if (read === item) return true;
if (sent && read === null) return true;
}
return false;
}
function fillMeteorChest(playerId) {
if (!METEOR || METEOR.filled || !playerId) return false;
meteorEnsureChest();
const attrs = meteorAttrs(METEOR.loot);
const lootOk = meteorChestWrite(0, METEOR.loot, 1, attrs, playerId);
for (let i = 0; i < METEOR_EXTRAS.length; i++) {
const extra = METEOR_EXTRAS[i];
meteorChestWrite(i + 1, extra.item, extra.amount, null, playerId);
}
if (!lootOk) {
let given = 0;
try { given = api.giveItem(playerId, METEOR.loot, 1, attrs || undefined); } catch (e) { given = 0; }
if (!given) {
try { given = api.giveItem(playerId, METEOR.loot, 1); } catch (e) { given = 0; }
}
if (given > 0) say(playerId, "The crate jammed - " + METEOR.loot + " went straight into your inventory.", "#ff9c55");
else noteError("meteor chest", new Error("crate refused every slot"));
}
METEOR.filled = true;
METEOR.stocked = true;
meteorSave();
return true;
}
function meteorSay(text, colour) {
for (const id in P) say(id, text, colour);
}
function spawnMeteor(byPlayer, quiet) {
let spot = meteorSpot();
let forced = false;
if (!spot) {
spot = meteorForceSite();
forced = true;
}
if (!spot) {
if (byPlayer) say(byPlayer, "Meteor failed - the world had nowhere to put it.", "#ff5555");
return false;
}
meteorClearChest(METEOR);
const loot = METEOR_LOOT[Math.floor(Math.random() * METEOR_LOOT.length)];
METEOR = { x: spot.x, y: spot.y, z: spot.z, loot: loot, at: Date.now(), filled: false, stocked: false, forced: forced, chest: [spot.x, spot.y, spot.z] };
METEOR_LAST_AT = METEOR.at;
buildMeteor(METEOR);
meteorSave();
sfxNear("ominousBellHit", [METEOR.x, METEOR.y, METEOR.z], 1, 0.8, 1500);
sfxNear("hauntedHorrorImpact", [METEOR.x, METEOR.y, METEOR.z], 1, forced ? 0.7 : 0.9, 1100);
if (!quiet) {
if (forced) {
meteorSay("A METEOR smashed into the ground at " + METEOR.x + ", " + METEOR.z + " and carved its own crater.", "#ff9c55");
} else {
meteorSay("A METEOR has fallen at " + METEOR.x + ", " + METEOR.z + " - crystal walls mark the crater.", "#ff9c55");
}
meteorSay("Gear and gems are inside. /meteortp lands you in sight of it. Next meteor in " + meteorNextText() + ".", "#b48cff");
}
if (byPlayer) say(byPlayer, "Meteor spawned at " + METEOR.x + " " + METEOR.y + " " + METEOR.z + " holding " + METEOR.loot + ". Next in " + meteorNextText() + ".", "#55ff55");
return true;
}
function meteorTick() {
const now = Date.now();
if (!METEOR_LAST_AT) METEOR_LAST_AT = now;
const online = Object.keys(P).length;
if (online > 0 && now - METEOR_LAST_AT >= CFG.METEOR_EVERY_MS && now - METEOR_TRY_AT > 60000) {
METEOR_TRY_AT = now;
spawnMeteor(null, false);
}
if (!METEOR || METEOR.filled) return;
for (const id in P) {
const spot = hereSpot(id);
if (!spot) continue;
if (Math.abs(spot.x - METEOR.x) > CFG.METEOR_FILL_RANGE || Math.abs(spot.z - METEOR.z) > CFG.METEOR_FILL_RANGE) continue;
if (Math.abs(spot.y - METEOR.y) > 48) continue;
if (fillMeteorChest(id)) {
sfx(id, "chestOpen", 1, 1);
sfx(id, "magicAccent2", 0.9, 1.2);
say(id, "The meteor chest unlocks as you reach the ring.", "#ff9c55");
say(id, "Gear: " + METEOR.loot + " (enchanted " + CFG.METEOR_ENCHANT + "), plus " + METEOR_EXTRAS.length + " stacks of gems and ore.", "#b48cff");
}
break;
}
}
function meteorPiecesOn(playerId) {
let n = 0;
for (let i = 0; i < METEOR_PIECES.length; i++) {
let held = 0;
try { held = api.getInventoryItemAmount(playerId, METEOR_PIECES[i]); } catch (e) { held = 0; }
if (held > 0) n++;
}
return n;
}
function meteorAbilityTick() {
for (const id in P) {
const rt = RT[id] || (RT[id] = {});
const full = meteorPiecesOn(id) >= METEOR_PIECES.length;
if (full) {
for (let i = 0; i < METEOR_EFFECTS.length; i++) {
try { api.applyEffect(id, METEOR_EFFECTS[i], 8); } catch (e) { }
}
if (!rt.meteorOn) {
rt.meteorOn = true;
sfx(id, "magicAccent3", 1, 1.1);
say(id, "METEOR CORE - full Amethite set: speed, damage, regeneration and damage reduction.", "#ff9c55");
}
} else if (rt.meteorOn) {
rt.meteorOn = false;
sfx(id, "chestClose", 0.7, 0.75);
for (let i = 0; i < METEOR_EFFECTS.length; i++) {
try { api.removeEffect(id, METEOR_EFFECTS[i]); } catch (e) { }
}
say(id, "Meteor Core faded - wear all four Amethite pieces to light it again.", "#8a8a8a");
}
}
}
function borderCheck() {
const lim = CFG.WORLD_BORDER;
for (const id in P) {
const spot = hereSpot(id);
if (!spot) continue;
if (Math.abs(spot.x) <= lim && Math.abs(spot.z) <= lim) continue;
const rt = RT[id] || (RT[id] = {});
const now = Date.now();
if (rt.borderAt && now - rt.borderAt < 3000) continue;
rt.borderAt = now;
const nx = Math.max(-lim, Math.min(lim, spot.x));
const nz = Math.max(-lim, Math.min(lim, spot.z));
try { api.setPosition(id, nx, spot.y, nz); } catch (e) { continue; }
say(id, "The Void border turns you back at " + fmtNum(lim) + " blocks out.", "#ff5555");
sfx(id, "ominousBellHit", 0.7, 0.6);
}
}
function cmdMeteorTp(playerId) {
if (!METEOR) {
say(playerId, "No meteor has fallen yet - one lands every hour.", "#8a8a8a");
return false;
}
const rt = RT[playerId] || (RT[playerId] = {});
const now = Date.now();
if (rt.meteorTpAt && now - rt.meteorTpAt < CFG.METEOR_TP_COOLDOWN_MS) {
say(playerId, "Meteor teleport ready in " + Math.ceil((CFG.METEOR_TP_COOLDOWN_MS - (now - rt.meteorTpAt)) / 1000) + "s.", "#ffaa55");
return false;
}
for (let tries = 0; tries < 40; tries++) {
const angle = Math.random() * Math.PI * 2;
const dist = Math.round(CFG.METEOR_TP_MIN + Math.random() * (CFG.METEOR_TP_MAX - CFG.METEOR_TP_MIN));
const x = Math.round(METEOR.x + Math.cos(angle) * dist);
const z = Math.round(METEOR.z + Math.sin(angle) * dist);
if (Math.abs(x) > CFG.WORLD_BORDER - 100 || Math.abs(z) > CFG.WORLD_BORDER - 100) continue;
const y = findSurface(x, z);
if (y === null) continue;
sfx(playerId, "zapAccent1", 0.9, 1.25);
try { api.setPosition(playerId, x, y, z); } catch (e) { continue; }
sfx(playerId, "zapAccent2", 0.9, 1);
rt.meteorTpAt = now;
say(playerId, "Meteor drop: " + dist + " blocks from the crater, at " + METEOR.x + ", " + METEOR.z + ".", "#b48cff");
say(playerId, "Follow the crystal ring. Next meteor in " + meteorNextText() + ".", "#8a8a8a");
return true;
}
const pullAngle = Math.random() * Math.PI * 2;
const pullDist = Math.round(CFG.METEOR_TP_MIN + 20 + Math.random() * 40);
if (dropOnGround(playerId, METEOR.x + Math.cos(pullAngle) * pullDist, METEOR.z + Math.sin(pullAngle) * pullDist)) {
rt.meteorTpAt = now;
say(playerId, "The meteor pull drops you above the crater - landing now.", "#b98cff");
return true;
}
say(playerId, "Meteor pull failed - try /meteortp again.", "#ff5555");
return false;
}
function meteorNextText() {
const left = Math.max(0, METEOR_LAST_AT + CFG.METEOR_EVERY_MS - Date.now());
const mins = Math.ceil(left / 60000);
return mins + (mins === 1 ? " minute" : " minutes");
}
function cmdMeteor(playerId, args) {
const sub = String(args[1] || "").toLowerCase();
if (sub === "spawn" || sub === "now" || sub === "drop") {
if (!isOwner(playerId)) return deny(playerId, "meteor");
spawnMeteor(playerId, false);
return false;
}
say(playerId, "METEOR", "#ff9c55");
if (METEOR) {
say(playerId, "  crater: " + METEOR.x + ", " + METEOR.z + (METEOR.filled ? "  (loot taken)" : "  (loot waiting)"), "#ffffff");
} else {
say(playerId, "  no meteor tracked yet", "#8a8a8a");
}
say(playerId, "  next meteor in " + meteorNextText() + " - one falls every hour", "#8a8a8a");
say(playerId, "  one Amethite piece or the sword, plus " + METEOR_EXTRAS.length + " stacks of gems and ore", "#8a8a8a");
say(playerId, "  /meteortp - land in sight of the crater", "#ffffff");
say(playerId, "  Full Amethite set = Meteor Core: speed, damage, regen and damage reduction", "#b48cff");
if (isOwner(playerId)) say(playerId, "  /meteor spawn - drop one right now", "#ffffff");
return false;
}
function tutorialState(playerId) {
let st = TUT[playerId];
if (st) return st;
let raw = null;
try { raw = api.getPlayerDbValue(playerId, TUTORIAL_KEY); } catch (e) { raw = null; }
let step = 0, done = false, known = false;
try {
const data = raw ? (typeof raw === "string" ? JSON.parse(raw) : raw) : null;
if (data && typeof data === "object") {
const value = Number(data.step);
step = isFinite(value) ? Math.max(0, Math.min(TUTORIAL_STEPS.length, Math.floor(value))) : 0;
done = !!data.done;
known = true;
}
} catch (e) { step = 0; done = false; known = false; }
st = TUT[playerId] = { step: step, done: done, known: known, at: Date.now() };
return st;
}
function tutorialSave(playerId) {
const st = TUT[playerId];
if (!st) return;
try { api.setPlayerDbValue(playerId, TUTORIAL_KEY, JSON.stringify({ step: st.step, done: st.done })); } catch (e) { noteError("tutorial save", e); }
}
function tutorialShow(playerId, st) {
if (st.step >= TUTORIAL_STEPS.length) return;
const step = TUTORIAL_STEPS[st.step];
say(playerId, "STARTER WALKTHROUGH  " + (st.step + 1) + "/" + TUTORIAL_STEPS.length + "  -  " + step.name, step.colour);
for (let i = 0; i < step.lines.length; i++) say(playerId, "  " + step.lines[i], "#e0e0e0");
}
function tutorialStart(playerId) {
const st = tutorialState(playerId);
st.step = 0;
st.done = false;
st.at = Date.now();
tutorialSave(playerId);
tutorialShow(playerId, st);
}
function tutorialAdvance(playerId) {
const st = tutorialState(playerId);
if (st.done) return;
st.step += 1;
st.at = Date.now();
if (st.step >= TUTORIAL_STEPS.length) {
st.done = true;
tutorialSave(playerId);
say(playerId, "Walkthrough complete. /help lists everything, /tutorial restart brings it back.", "#55ff55");
return;
}
tutorialSave(playerId);
tutorialShow(playerId, st);
}
function tutorialTick() {
const now = Date.now();
for (const id in P) {
const st = tutorialState(id);
if (st.done) continue;
if (now - st.at < CFG.TUTORIAL_GAP_MS) continue;
tutorialAdvance(id);
}
}
function cmdTutorial(playerId, args) {
const sub = String(args[1] || "").toLowerCase();
const st = tutorialState(playerId);
if (sub === "skip" || sub === "stop" || sub === "off") {
st.done = true;
tutorialSave(playerId);
say(playerId, "Walkthrough off. /tutorial restart whenever you want it again.", "#8a8a8a");
return false;
}
if (sub === "restart" || sub === "start") {
tutorialStart(playerId);
return false;
}
if (sub === "next") {
tutorialAdvance(playerId);
return false;
}
if (st.done) {
say(playerId, "Walkthrough finished. /tutorial restart replays it.", "#8a8a8a");
return false;
}
say(playerId, "Walkthrough step " + Math.min(st.step + 1, TUTORIAL_STEPS.length) + " of " + TUTORIAL_STEPS.length + ".", "#8fd0ff");
tutorialShow(playerId, st);
say(playerId, "/tutorial next, /tutorial restart or /tutorial skip.", "#5a5a5a");
return false;
}
function armourById(input) {
const want = String(input === undefined || input === null ? "" : input).toLowerCase().replace(/[^a-z0-9]/g, "");
if (!want) return null;
for (let i = 0; i < ARMOUR.length; i++) {
const a = ARMOUR[i];
if (a.id === want) return a;
if (String(a.name).toLowerCase().replace(/[^a-z0-9]/g, "") === want) return a;
}
return null;
}
function armourEnchant(a) {
return Math.max(1, Math.min(5, Math.round((a.p + a.h + a.r) / 3)));
}
function armourOwned(playerId, a) {
const d = P[playerId];
return !!(d && d.stats && d.stats.armour && d.stats.armour[a.id]);
}
function armourStatsText(a) {
return "P" + a.p + "  H" + a.h + "  R" + a.r;
}
function armourShortfall(playerId, a) {
const d = ensure(playerId);
const out = [];
const level = levelFor(d.stats.xp);
if (level < a.level) out.push("level " + a.level + " (you are " + level + ")");
if (d.stats.kills < a.kills) out.push(a.kills + " kills (you have " + d.stats.kills + ")");
if (d.stats.playtimeMs < a.playtimeMs) out.push(fmtShortTime(a.playtimeMs) + " played (you have " + fmtShortTime(d.stats.playtimeMs) + ")");
if (d.shards < a.price) out.push(fmtNum(a.price) + " " + CFG.CURRENCY_NAME + " (you have " + fmtNum(d.shards) + ")");
return out;
}
function applyArmourAbility(playerId, a) {
sfx(playerId, "magicAccent4", 0.7, 1.15);
if (!a || !a.ability) return false;
try {
api.applyEffect(playerId, a.ability.effect, 8);
return true;
} catch (e) {
noteError("armour effect " + a.id, e);
return false;
}
}
function clearArmourAbility(playerId, a) {
if (!a || !a.ability) return false;
try {
api.removeEffect(playerId, a.ability.effect);
return true;
} catch (e) {
return false;
}
}
function buyArmourById(playerId, id) {
const a = armourById(id);
if (!a) {
say(playerId, "Unknown armour \"" + String(id) + "\". /armour lists them.", "#ff5555");
return false;
}
const d = ensure(playerId);
if (armourOwned(playerId, a)) {
say(playerId, "You already own the " + a.name + " set.", "#ff5555");
return false;
}
const missing = armourShortfall(playerId, a);
if (missing.length) {
say(playerId, "The " + a.name + " set needs " + missing.join(", ") + ".", "#ff5555");
return false;
}
if (!takeShards(playerId, a.price)) {
say(playerId, "You need " + fmtNum(a.price - d.shards) + " more " + CFG.CURRENCY_NAME + ".", "#ff5555");
return false;
}
let givenPieces = 0;
for (let i = 0; i < ARMOUR_PIECES.length; i++) {
if (giveEnchanted(playerId, ARMOUR_PIECES[i], armourEnchant(a))) givenPieces++;
}
if (!givenPieces) {
addShards(playerId, a.price, true);
say(playerId, "Inventory full - your shards were returned.", "#ffaa55");
return false;
}
if (!d.stats.armour) d.stats.armour = {};
d.stats.armour[a.id] = true;
if (!d.stats.armourDur) d.stats.armourDur = {};
d.stats.armourDur[a.id] = CFG.ARMOUR_DURABILITY;
saveNow(playerId);
say(playerId, "Bought the " + a.name + " set for " + fmtNum(a.price) + " " + CFG.CURRENCY_NAME + ".", a.colour);
say(playerId, a.name + "  " + armourStatsText(a) + "  (ench " + armourEnchant(a) + ")  " + givenPieces + "/4 pieces", "#8fd0ff");
say(playerId, "Ability: " + a.ability.name + " - " + a.ability.blurb + " Put all four pieces on to turn it on.", a.colour);
say(playerId, "Durability " + fmtNum(CFG.ARMOUR_DURABILITY) + " - damage wears it down, a broken set must be bought again.", "#8a8a8a");
gainXp(playerId, 40);
return true;
}
function armourPiecesOn(playerId) {
for (let i = 0; i < ARMOUR_PIECES.length; i++) {
let held = 0;
try { held = api.getInventoryItemAmount(playerId, ARMOUR_PIECES[i]); } catch (e) { held = 0; }
if (held > 0) return false;
}
return true;
}
function armourDurability(playerId, a) {
const d = P[playerId];
if (!d || !d.stats || !d.stats.armourDur) return CFG.ARMOUR_DURABILITY;
const value = Number(d.stats.armourDur[a.id]);
return isFinite(value) ? Math.max(0, value) : CFG.ARMOUR_DURABILITY;
}
function armourDurText(playerId, a) {
return fmtNum(armourDurability(playerId, a)) + "/" + fmtNum(CFG.ARMOUR_DURABILITY);
}
function armourEquipped(playerId, a) {
if (!a || !armourOwned(playerId, a)) return false;
if (armourDurability(playerId, a) <= 0) return false;
return armourPiecesOn(playerId);
}
function activeArmour(playerId) {
for (let i = 0; i < ARMOUR.length; i++) {
if (armourEquipped(playerId, ARMOUR[i])) return ARMOUR[i];
}
return null;
}
function breakArmour(playerId, a) {
sfx(playerId, "glass2", 0.9, 0.8);
const d = ensure(playerId);
if (d.stats.armour) delete d.stats.armour[a.id];
if (!d.stats.armourDur) d.stats.armourDur = {};
d.stats.armourDur[a.id] = 0;
clearArmourAbility(playerId, a);
const rtx = RT[playerId];
if (rtx && rtx.armourSet === a.id) rtx.armourSet = "";
saveNow(playerId);
say(playerId, "Your " + a.name + " set broke and is gone.", "#ff5555");
say(playerId, "/armour buy " + a.id + " to buy the set again.", "#8a8a8a");
staffBroadcast("[ARMOUR] " + nameOf(playerId) + " broke their " + a.name + " set.", "#ffcc00");
}
function damageArmour(playerId, a, amount) {
const d = ensure(playerId);
if (!d.stats.armourDur) d.stats.armourDur = {};
const hit = Math.max(1, Math.round(Number(amount) || 0));
const left = armourDurability(playerId, a) - hit;
if (left <= 0) {
breakArmour(playerId, a);
return 0;
}
d.stats.armourDur[a.id] = left;
const rt = RT[playerId] || (RT[playerId] = {});
const low = Math.floor(CFG.ARMOUR_DURABILITY * 0.2);
if (left <= low) {
if (!rt.armourLowWarned) {
rt.armourLowWarned = true;
say(playerId, a.name + " durability " + fmtNum(left) + "/" + fmtNum(CFG.ARMOUR_DURABILITY) + " - nearly broken.", "#ffaa55");
}
} else {
rt.armourLowWarned = false;
}
saveNow(playerId);
return left;
}
function armourHealth(playerId) {
const rt = RT[playerId];
if (!rt) return;
let hp = -1;
try { hp = api.getHealth(playerId); } catch (e) { hp = -1; }
if (typeof hp !== "number" || !isFinite(hp) || hp < 0) return;
const last = rt.lastHp;
rt.lastHp = hp;
if (last === undefined || hp >= last) return;
const a = activeArmour(playerId);
if (!a) return;
damageArmour(playerId, a, last - hp);
}
function armourTick() {
for (const id in P) {
const a = activeArmour(id);
const rt = RT[id] || (RT[id] = {});
const now = Date.now();
if (rt.armourAt && now - rt.armourAt < 4000) continue;
rt.armourAt = now;
const prev = rt.armourSet ? armourById(rt.armourSet) : null;
if (prev && (!a || prev.id !== a.id)) {
clearArmourAbility(id, prev);
rt.armourSet = "";
}
if (a) {
applyArmourAbility(id, a);
rt.armourSet = a.id;
}
}
}
function cmdArmour(playerId) {
const worn = activeArmour(playerId);
say(playerId, "ARMOUR SETS", "#55aaff");
say(playerId, "P protection  |  H health  |  R health regen", "#8a8a8a");
say(playerId, "Wearing: " + (worn ? worn.name + "  durability " + armourDurText(playerId, worn) : "nothing"), worn ? worn.colour : "#8a8a8a");
say(playerId, "Wear all four pieces from your inventory - the set ability turns on by itself.", "#8a8a8a");
for (let i = 0; i < ARMOUR.length; i++) {
const a = ARMOUR[i];
const owned = armourOwned(playerId, a);
const missing = armourShortfall(playerId, a);
say(playerId, "  " + a.name + " set - " + fmtNum(a.price) + " " + CFG.CURRENCY_NAME + "  " + armourStatsText(a) + "  " + a.ability.name, owned ? "#55ff55" : "#ffffff");
say(playerId, "     " + (owned ? "owned - durability " + armourDurText(playerId, a) : missing.length ? "needs " + missing.join(", ") : "ready - /armour buy " + a.id) + "  |  " + a.ability.blurb, owned ? "#55ff55" : missing.length ? "#8a8a8a" : "#ffd75e");
}
}
function cmdArmourSub(playerId, args) {
const sub = String(args[1] || "").toLowerCase();
if (sub === "buy") {
buyArmourById(playerId, args.slice(2).join(" "));
return;
}
cmdArmour(playerId);
}
function weaponById(input) {
const want = String(input === undefined || input === null ? "" : input).toLowerCase().replace(/[^a-z0-9]/g, "");
if (!want) return null;
for (let i = 0; i < WEAPONS.length; i++) {
const w = WEAPONS[i];
if (w.id === want) return w;
if (String(w.name).toLowerCase().replace(/[^a-z0-9]/g, "") === want) return w;
}
return null;
}
function weaponPower(w) {
return w.d + w.s + w.c;
}
function weaponEnchant(w) {
return Math.max(1, Math.min(5, Math.round(weaponPower(w) / 3)));
}
function weaponOwned(playerId, w) {
const d = P[playerId];
return !!(d && d.stats && d.stats.weapons && d.stats.weapons[w.id]);
}
function ownedWeaponCount(playerId) {
const d = P[playerId];
if (!d || !d.stats || !d.stats.weapons) return 0;
let n = 0;
for (const id in d.stats.weapons) if (d.stats.weapons[id]) n++;
return n;
}
function weaponShortfall(playerId, w) {
const d = ensure(playerId);
const out = [];
const level = levelFor(d.stats.xp);
if (level < w.level) out.push("level " + w.level + " (you are " + level + ")");
if (d.stats.kills < w.kills) out.push(w.kills + " kills (you have " + d.stats.kills + ")");
if (d.stats.playtimeMs < w.playtimeMs) out.push(fmtShortTime(w.playtimeMs) + " played (you have " + fmtShortTime(d.stats.playtimeMs) + ")");
if (d.shards < w.price) out.push(fmtNum(w.price) + " " + CFG.CURRENCY_NAME + " (you have " + fmtNum(d.shards) + ")");
return out;
}
function weaponStatsText(w) {
return "D" + w.d + "  S" + w.s + "  C" + w.c;
}
function buyWeaponById(playerId, id) {
const w = weaponById(id);
if (!w) {
say(playerId, "Unknown weapon \"" + String(id) + "\". /weapons lists them.", "#ff5555");
return false;
}
const d = ensure(playerId);
if (weaponOwned(playerId, w)) {
say(playerId, "You already own the " + w.name + ".", "#ff5555");
return false;
}
const missing = weaponShortfall(playerId, w);
if (missing.length) {
say(playerId, "The " + w.name + " needs " + missing.join(", ") + ".", "#ff5555");
return false;
}
if (!takeShards(playerId, w.price)) {
say(playerId, "You need " + fmtNum(w.price - d.shards) + " more " + CFG.CURRENCY_NAME + ".", "#ff5555");
return false;
}
const gave = giveEnchanted(playerId, w.item, weaponEnchant(w));
if (!gave) {
addShards(playerId, w.price, true);
say(playerId, "Inventory full - your shards were returned.", "#ffaa55");
return false;
}
if (!d.stats.weapons) d.stats.weapons = {};
d.stats.weapons[w.id] = true;
saveNow(playerId);
say(playerId, "Bought the " + w.name + " for " + fmtNum(w.price) + " " + CFG.CURRENCY_NAME + ".", w.colour);
say(playerId, w.name + "  " + weaponStatsText(w) + "  (ench " + weaponEnchant(w) + ")", "#8fd0ff");
gainXp(playerId, 25);
return true;
}
function cmdWeapons(playerId) {
const d = ensure(playerId);
say(playerId, "WEAPONS", "#55aaff");
say(playerId, "Level " + levelFor(d.stats.xp) + "  |  " + d.stats.kills + " kills  |  " + fmtShortTime(d.stats.playtimeMs) + " played  |  " + fmtNum(d.shards) + " " + CFG.CURRENCY_NAME, "#8a8a8a");
for (let i = 0; i < WEAPONS.length; i++) {
const w = WEAPONS[i];
const owned = weaponOwned(playerId, w);
const missing = weaponShortfall(playerId, w);
say(playerId, "  " + w.name + " (" + w.kind + ") - " + fmtNum(w.price) + " " + CFG.CURRENCY_NAME + "  " + weaponStatsText(w), owned ? "#55ff55" : "#ffffff");
say(playerId, "     " + (owned ? "owned" : missing.length ? "needs " + missing.join(", ") : "ready - /weapon buy " + w.id), owned ? "#55ff55" : missing.length ? "#8a8a8a" : "#ffd75e");
}
}
function cmdWeaponInfo(playerId, want) {
const w = weaponById(want);
if (!w) {
say(playerId, "Usage: /weapon info <weapon>  -  /weapons lists all of them.", "#ff5555");
return;
}
say(playerId, w.name.toUpperCase() + "  -  " + w.kind + "  -  " + fmtNum(w.price) + " " + CFG.CURRENCY_NAME, w.colour);
say(playerId, w.blurb, "#8a8a8a");
say(playerId, "D" + w.d + " damage  |  S" + w.s + " attack speed  |  C" + w.c + " critical damage", "#8fd0ff");
say(playerId, "Needs level " + w.level + ", " + w.kills + " kills, " + fmtShortTime(w.playtimeMs) + " played and " + fmtNum(w.price) + " " + CFG.CURRENCY_NAME + ".", "#8a8a8a");
const missing = weaponShortfall(playerId, w);
if (weaponOwned(playerId, w)) say(playerId, "You own this.", "#55ff55");
else if (!missing.length) say(playerId, "Ready: /weapon buy " + w.id, "#ffd75e");
else say(playerId, "Still needed: " + missing.join(", ") + ".", "#ffaa55");
}
function cmdBuyWeapon(playerId, args) {
buyWeaponById(playerId, args[2]);
}
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
xp: 0,
weapons: {},
armour: {},
armourDur: {},
rewards: {},
},
quests: {},
skills: {},
prestige: { count: 0, speed: 0, damage: 0, health: 0, xp: 0 },
gamble: { last: 0, rolls: 0, best: "" },
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
d.stats.playtimeMs = num(old.stats.playtimeMs);
d.stats.xp = num(old.stats.xp);
if (old.stats.weapons && typeof old.stats.weapons === "object") {
for (const wid in old.stats.weapons) {
if (old.stats.weapons[wid]) d.stats.weapons[wid] = true;
}
}
if (old.stats.armour && typeof old.stats.armour === "object") {
for (const aid in old.stats.armour) {
if (old.stats.armour[aid]) d.stats.armour[aid] = true;
}
}
if (old.stats.armourDur && typeof old.stats.armourDur === "object") {
for (const ad in old.stats.armourDur) {
const av = Number(old.stats.armourDur[ad]);
d.stats.armourDur[ad] = isFinite(av) ? Math.max(0, av) : CFG.ARMOUR_DURABILITY;
}
}
if (old.stats.rewards && typeof old.stats.rewards === "object") {
for (const rkey in old.stats.rewards) {
if (old.stats.rewards[rkey]) d.stats.rewards[rkey] = true;
}
}
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
if (old.prestige && typeof old.prestige === "object") {
const saved = old.prestige;
d.prestige.count = Math.min(CFG.PRESTIGE_MAX, num(saved.count));
for (let i = 0; i < PRESTIGE_STATS.length; i++) d.prestige[PRESTIGE_STATS[i]] = Math.min(CFG.PRESTIGE_STAT_MAX, num(saved[PRESTIGE_STATS[i]]));
}
if (old.gamble && typeof old.gamble === "object") {
d.gamble.last = num(old.gamble.last);
d.gamble.rolls = num(old.gamble.rolls);
d.gamble.best = typeof old.gamble.best === "string" ? old.gamble.best.slice(0, 40) : "";
}
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
if (isRetiredName(key)) continue;
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
function sfx(playerId, name, volume, rate) {
if (!playerId || !name) return;
try { api.playSound(playerId, name, volume === undefined ? 0.9 : volume, rate === undefined ? 1 : rate); } catch (e) { }
}
function sfxNear(name, pos, volume, rate, dist) {
if (!name) return;
try { api.broadcastSound(name, volume === undefined ? 0.9 : volume, rate === undefined ? 1 : rate, { playerIdOrPos: pos, maxHearDist: dist || 800 }); } catch (e) { }
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
function isRetiredName(input) {
return RETIRED_NAMES.indexOf(keyOf(input)) !== -1;
}
function rankInfoForName(input) {
const key = keyOf(input);
if (!key) return RANKS.player;
if (RETIRED_NAMES.indexOf(key) !== -1) return RANKS.player;
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
prestige: { displayName: "ℙℝ𝔼𝕊𝕋", sortPriority: 8.5, sortOrder: "descending" },
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
prestige: prestigeData(playerId).count,
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
prestige: row.prestige,
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
if (mode === "prestige" || mode === "prestiges" || mode === "p") return "prestige";
if (mode === "shards" || mode === "coins" || mode === "money") return "shards";
if (mode === "playtime" || mode === "time" || mode === "hours") return "playtime";
return "kills";
}
function valueFor(d, key) {
if (key === "prestige") return (d.prestige && d.prestige.count) || 0;
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
function panelRule() {
return segText("────────────", "#3f3f3f");
}
function panelQuests(out, d) {
for (const key in QUEST_TYPES) {
const giver = QUEST_TYPES[key];
const quest = d.quests[key];
if (!quest) {
out.push(segText("\n" + giver.short + "  -", "#5a5a5a"));
continue;
}
const ready = quest.have >= quest.need;
out.push(segText("\n" + giver.short + (quest.name ? " " + quest.name : "") + " " + quest.have + "/" + quest.need + (ready ? "  ✓" : ""), ready ? "#55ff55" : giver.colour));
}
}
function rightInfoText(playerId) {
const d = P[playerId];
if (!d) return "";
const r = rankInfo(playerId);
const nameColour = r.level > 0 ? r.colour : "#ffffff";
const out = [];
out.push(segText("✦ " + gameTitle() + " ✦", "#ffcc00"));
out.push(segText("\n" + nameOf(playerId) + (r.tag && r.level > 0 ? "  " + r.tag : ""), nameColour));
out.push(segText("\n"), panelRule());
out.push(segText("\n◈ " + fmtNum(d.shards) + "   ★ #" + placeOf(playerId, "kills"), "#ffd75e"));
out.push(segText("\n◷ " + fmtShortTime(d.stats.playtimeMs) + "   ⚔ " + d.stats.kills + "K " + d.stats.deaths + "D", "#8fd0ff"));
let skillLine = "";
for (const key in QUEST_TYPES) skillLine += QUEST_TYPES[key].short + " Lv" + levelFor(skillOf(playerId, key).xp) + "  ";
out.push(segText("\n✦ LV" + levelFor(d.stats.xp) + " " + levelPercent(d.stats.xp) + "%" + (prestigeData(playerId).count ? " P" + prestigeData(playerId).count : "") + "  " + skillLine.trim(), "#b48cff"));
out.push(segText("\n"), panelRule());
out.push(segText("\nQUESTS", "#ffcc00"));
panelQuests(out, d);
if (LISTS.events.items.length) out.push(segText("\n⚑ " + LISTS.events.items[LISTS.events.items.length - 1].text.slice(0, 18), "#ffaa55"));
out.push(segText("\n" + DISCORD_LINK.replace("https://", ""), "#8fd0ff"));
out.push(segText("\nDo /cmd for commands", "#55ffff"));
return compactSegments(out);
}
function rightInfoPlain(playerId) {
const d = P[playerId];
if (!d) return "";
const r = rankInfo(playerId);
const lines = [];
lines.push("✦ " + gameTitle() + " ✦");
lines.push(nameOf(playerId) + (r.tag && r.level > 0 ? "  " + r.tag : ""));
lines.push("────────────");
lines.push("Shards " + fmtNum(d.shards) + "   Rank #" + placeOf(playerId, "kills"));
lines.push("Played " + fmtShortTime(d.stats.playtimeMs) + "   " + d.stats.kills + "K " + d.stats.deaths + "D");
let skillLine = "";
for (const key in QUEST_TYPES) skillLine += QUEST_TYPES[key].short + " Lv" + levelFor(skillOf(playerId, key).xp) + "  ";
lines.push("Level " + levelFor(d.stats.xp) + " " + levelPercent(d.stats.xp) + "%" + (prestigeData(playerId).count ? "  P" + prestigeData(playerId).count : "") + "  " + skillLine.trim());
lines.push("────────────");
lines.push("QUESTS");
for (const key in QUEST_TYPES) {
const giver = QUEST_TYPES[key];
const quest = d.quests[key];
lines.push(quest ? giver.short + (quest.name ? " " + quest.name : "") + " " + quest.have + "/" + quest.need + (quest.have >= quest.need ? "  ✓" : "") : giver.short + "  -");
}
if (LISTS.events.items.length) lines.push("Event: " + LISTS.events.items[LISTS.events.items.length - 1].text.slice(0, 18));
lines.push(DISCORD_LINK.replace("https://", ""));
lines.push("Do /cmd for commands");
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
settleDrops();
for (const id in P) {
setupBoard(id);
syncBoard(id);
pushRightInfo(id);
}
meteorTick();
meteorAbilityTick();
borderCheck();
tutorialTick();
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
const LOBBY_SPAWN = [10000, -9999, 10000];
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
function cmdLobby(playerId) {
ensure(playerId);
if (!teleportTo(playerId, LOBBY_SPAWN[0], LOBBY_SPAWN[1], LOBBY_SPAWN[2])) return;
say(playerId, "Lobby spawn.", "#8fd0ff");
}
function cmdHelp(playerId) {
say(playerId, "== " + gameTitle() + " ==", "#ffcc00");
say(playerId, "ECONOMY", "#55aaff");
say(playerId, "  /lb [kills|shards|playtime|prestige] - leaderboard", "#ffffff");
say(playerId, "  /stats - your profile", "#ffffff");
say(playerId, "  /shards - balance", "#ffffff");
say(playerId, "  /pay <player> <amount> - send shards", "#ffffff");
say(playerId, "  /weapons - every weapon, price and requirements", "#ffffff");
say(playerId, "  /weapon buy <id> - buy one", "#ffffff");
say(playerId, "  /weapon info <id> - D, S, C and the cost", "#ffffff");
say(playerId, "  /armour - sets, P/H/R, prices and abilities", "#ffffff");
say(playerId, "  /armour buy <set> - the full four piece set", "#ffffff");
say(playerId, "  /armour wear is gone - just wear all four pieces in game", "#8a8a8a");
say(playerId, "  /rewards - playtime rewards", "#ffffff");
say(playerId, "  /rewards claim - take everything ready", "#ffffff");
say(playerId, "  /gamble - the Gambler free roll, once every 24 hours", "#ffffff");
if (hasPerm(playerId, "clearinv")) say(playerId, "  /clearinv <player> - empty a player's inventory", "#ffffff");
say(playerId, "TRAVEL", "#55aaff");
say(playerId, "  /spawn - back to the lobby", "#ffffff");
say(playerId, "  /meteortp - drop near the hourly meteor, /meteor for its location", "#ffffff");
say(playerId, "  /tutorial - replay the starter walkthrough", "#ffffff");
if (isOwner(playerId)) say(playerId, "  /meteor spawn - drop a meteor now", "#ffffff");
say(playerId, "The world border sits " + fmtNum(CFG.WORLD_BORDER) + " blocks out on each side.", "#8a8a8a");
say(playerId, "  Light blue portal - PVP arena with a 5s grace period", "#ffffff");
say(playerId, "  Orange portal - warps you to 637, -99932, -396", "#ffffff");
say(playerId, "Only the owner can break blocks within 100x100 of the arena or the black portal.", "#8a8a8a");
say(playerId, "No hitting in the lobby or at the black portal.", "#8a8a8a");
say(playerId, "QUESTS", "#55aaff");
say(playerId, "  /quests - your quests and XP", "#ffffff");
say(playerId, "  /quest <fishing|hunting|mining|lumber> - talk to a giver", "#ffffff");
say(playerId, "  Givers: xVexx the Angler, TECMAN_ the Monster Hunter, Conceptual the Assassin, PolyDuck the Lumberjack.", "#8a8a8a");
say(playerId, "  /prestige - BloxdSeno at 603.5 -99943 -110.5, right-click at level " + CFG.LEVEL_CAP + ".", "#ffd75e");
if (isOwner(playerId)) say(playerId, "  /aim - angles for Seno, the Gambler and every giver; /aim <npc|all> <degrees>", "#ffffff");
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
if (hasPerm(playerId, "level")) say(playerId, "  /givelevel <player|me> <levels>  |  /setlevel <player|me> <level>", "#ffffff");
if (hasPerm(playerId, "shards")) say(playerId, "  /giveshards <player|me> <amount>  |  /takeshards <player|me> <amount>", "#ffffff");
}
say(playerId, "  /diag - check givers, panel and recent errors", "#ffffff");
say(playerId, "Text not showing colour? Test it with /style", "#5a5a5a");
say(playerId, "Kill players, kill mobs and stay online to earn Void Shards.", "#8a8a8a");
say(playerId, "  /level - overall level, and what gives XP", "#ffffff");
}
function cmdStats(playerId) {
const d = ensure(playerId);
const r = rankInfo(playerId);
say(playerId, "Overall level " + levelFor(d.stats.xp) + "  |  " + fmtNum(d.stats.xp) + " XP  |  " + xpIntoLevel(d.stats.xp) + "/" + xpToNextLevel(d.stats.xp) + " to next", "#b48cff");
say(playerId, skillSummary(playerId), "#8a8a8a");
richSay(playerId, [
segIcon("fa-solid fa-user"),
segText(" AEVORA ", "#ffcc00"),
segText("| ", "#5a5a5a"),
segText(nameOf(playerId), r.level > 0 ? r.colour : "#ffffff"),
]);
const rankLine = [segIcon(r.icon, r.level > 0 ? r.colour : "#b0b0b0"), segText(" " + r.name, r.level > 0 ? r.colour : "#ffffff")];
if (r.tag) rankLine.push(segText("   " + r.tag + " rank", "#8a8a8a"));
richSay(playerId, rankLine);
richSay(playerId, [
segIcon("fa-solid fa-coins", "#ffd75e"), segText(" " + fmtNum(d.shards) + " " + CFG.CURRENCY_NAME, "#ffd75e"),
segText("   ", "#8a8a8a"),
segIcon("fa-solid fa-gem", "#b48cff"), segText(" " + ownedWeaponCount(playerId) + " weapons", "#b48cff"),
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
if (key === "prestige") return String((d.prestige && d.prestige.count) || 0);
if (key === "shards") return fmtNum(d.shards);
if (key === "playtime") return fmtTime(d.stats.playtimeMs);
return String(d.stats.kills);
}
function boardValueIcon(key) {
if (key === "prestige") return "fa-solid fa-star";
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
const label = key === "prestige" ? "PRESTIGES" : key === "shards" ? "VOID SHARDS" : key === "playtime" ? "PLAYTIME" : "KILLS";
richSay(playerId, [
segIcon("fa-solid fa-trophy", "#ffcc00"),
segText(" AEVORA LEADERBOARD ", "#ffcc00"),
segText("| " + label, "#8a8a8a"),
]);
say(playerId, onlineCount() + " online  |  top " + Math.min(CFG.TOP_N, rows.length) + "  |  /lb kills, shards, playtime, prestige", "#5a5a5a");
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
const TIME_REWARDS = [
{ minutes: 15, shards: 250 },
{ minutes: 30, shards: 500 },
{ minutes: 60, shards: 1000 },
{ minutes: 120, shards: 2000 },
{ minutes: 180, shards: 3000 },
{ minutes: 300, shards: 5000 },
{ minutes: 480, shards: 8000 },
{ minutes: 720, shards: 12000 },
{ minutes: 1440, shards: 25000 },
{ minutes: 2880, shards: 50000 },
{ minutes: 6000, shards: 100000 },
];
function rewardLabel(r) {
if (r.minutes < 60) return r.minutes + "m";
const h = r.minutes / 60;
return (h % 1 === 0 ? h : h.toFixed(1)) + "h";
}
function rewardKey(r) {
return String(r.minutes);
}
function rewardClaimed(d, r) {
return !!(d && d.stats && d.stats.rewards && d.stats.rewards[rewardKey(r)]);
}
function rewardReady(d, r) {
return !!d && !!d.stats && d.stats.playtimeMs >= r.minutes * 60000 && !rewardClaimed(d, r);
}
function timeRewardFor(minutes) {
const want = Math.floor(Number(minutes) || 0);
for (let i = 0; i < TIME_REWARDS.length; i++) {
if (TIME_REWARDS[i].minutes === want) return TIME_REWARDS[i];
}
return null;
}
function claimTimeReward(playerId, r) {
const d = ensure(playerId);
if (!r || !rewardReady(d, r)) return 0;
if (!d.stats.rewards) d.stats.rewards = {};
d.stats.rewards[rewardKey(r)] = true;
addShards(playerId, r.shards, true);
say(playerId, "Claimed " + rewardLabel(r) + " playtime: +" + fmtNum(r.shards) + " " + CFG.CURRENCY_NAME, "#55ff55");
saveNow(playerId);
return r.shards;
}
function nextTimeReward(d) {
for (let i = 0; i < TIME_REWARDS.length; i++) {
if (!rewardClaimed(d, TIME_REWARDS[i])) return TIME_REWARDS[i];
}
return null;
}
function cmdRewards(playerId, args) {
const d = ensure(playerId);
const sub = keyOf(args[1]);
if (sub === "claim" || sub === "collect" || sub === "take") {
const asked = args[2];
let total = 0;
let count = 0;
if (asked) {
const only = timeRewardFor(asked);
if (!only) {
say(playerId, "No reward at " + asked + ". Use /rewards to see the list.", "#ff5555");
return;
}
if (rewardClaimed(d, only)) {
say(playerId, rewardLabel(only) + " is already claimed.", "#ff5555");
return;
}
if (d.stats.playtimeMs < only.minutes * 60000) {
say(playerId, "Not yet - you have " + fmtShortTime(d.stats.playtimeMs) + " played and " + rewardLabel(only) + " is the target.", "#ff5555");
return;
}
total = claimTimeReward(playerId, only);
count = total ? 1 : 0;
} else {
for (let i = 0; i < TIME_REWARDS.length; i++) {
const paid = claimTimeReward(playerId, TIME_REWARDS[i]);
if (paid) {
total += paid;
count++;
}
}
}
if (!count) {
const next = nextTimeReward(d);
if (!next) say(playerId, "Every playtime reward is claimed.", "#8a8a8a");
else say(playerId, "Nothing ready. Next is " + rewardLabel(next) + " for " + fmtNum(next.shards) + " " + CFG.CURRENCY_NAME + " (" + fmtShortTime(Math.max(0, next.minutes * 60000 - d.stats.playtimeMs)) + " to go).", "#8a8a8a");
return;
}
say(playerId, "Playtime rewards claimed: " + count + "  |  +" + fmtNum(total) + " " + CFG.CURRENCY_NAME, "#ffcc00");
pushRightInfo(playerId, true);
saveNow(playerId);
return;
}
const played = d.stats.playtimeMs;
let claimed = 0;
say(playerId, "== PLAYTIME REWARDS ==", "#ffcc00");
say(playerId, "Played " + fmtShortTime(played) + "  |  " + fmtNum(d.shards) + " " + CFG.CURRENCY_NAME, "#8a8a8a");
for (let i = 0; i < TIME_REWARDS.length; i++) {
const r = TIME_REWARDS[i];
const label = (rewardLabel(r) + "      ").slice(0, 6);
if (rewardClaimed(d, r)) {
claimed++;
say(playerId, "  " + label + " " + fmtNum(r.shards) + " - claimed", "#5a5a5a");
} else if (rewardReady(d, r)) {
say(playerId, "  " + label + " " + fmtNum(r.shards) + " - READY, claim it", "#55ff55");
} else {
say(playerId, "  " + label + " " + fmtNum(r.shards) + " - " + fmtShortTime(r.minutes * 60000 - played) + " to go", "#8a8a8a");
}
}
say(playerId, claimed + "/" + TIME_REWARDS.length + " claimed. /rewards claim takes all ready ones.", "#55ffff");
}
const PRESTIGE_STATS = ["speed", "damage", "health", "xp"];
const PRESTIGE_NPC_NAME = "BloxdSeno";
const PRESTIGE_YAW_KEY = "vb_prestige_yaw_v1";
let PRESTIGE_NPC = null;
let PRESTIGE_ANGLE = CFG.PRESTIGE_YAW;
function wrapAngle(value) {
return ((Math.round(Number(value) || 0) % 360) + 360) % 360;
}
function loadPrestigeYaw() {
let raw = null;
try { raw = api.getLobbyDbValue(PRESTIGE_YAW_KEY); } catch (e) { raw = null; }
const value = Number(raw);
PRESTIGE_ANGLE = raw !== null && raw !== undefined && raw !== "" && isFinite(value) ? wrapAngle(value) : wrapAngle(CFG.PRESTIGE_YAW);
}
function prestigeYaw() {
return PRESTIGE_ANGLE;
}
function applyPrestigeYaw() {
if (!PRESTIGE_NPC) return;
try { api.setEntityRotation(PRESTIGE_NPC, 0, prestigeYaw(), 0); } catch (e) { }
}
const AIM_KEYS = ["seno", "gambler", "fishing", "hunting", "mining", "lumber"];
function aimKey(raw) {
const k = String(raw || "").toLowerCase();
if (k === "seno" || k === "bloxdseno" || k === "prestige") return "seno";
if (k === "gambler" || k === "gamble" || k === "roll") return "gambler";
return QUEST_TYPES[k] ? k : null;
}
function aimWho(key) {
if (key === "seno") return PRESTIGE_NPC_NAME;
if (key === "gambler") return GAMBLER_NAME;
return QUEST_TYPES[key].who;
}
function aimAngle(key) {
if (key === "seno") return Math.round(prestigeYaw());
if (key === "gambler") return Math.round(gamblerYaw());
return Math.round(giverYaw(key));
}
function aimApply(key, degrees) {
if (key === "seno") {
PRESTIGE_ANGLE = wrapAngle(degrees);
try { api.setLobbyDbValue(PRESTIGE_YAW_KEY, String(PRESTIGE_ANGLE)); } catch (e) { noteError("prestige yaw save", e); }
applyPrestigeYaw();
return;
}
if (key === "gambler") {
GAMBLER_ANGLE = wrapAngle(degrees);
try { api.setLobbyDbValue(GAMBLER_YAW_KEY, String(GAMBLER_ANGLE)); } catch (e) { noteError("gambler yaw save", e); }
applyGamblerYaw();
return;
}
GIVER_YAW[key] = wrapAngle(wrapAngle(degrees) - giverBaseYaw(key));
applyGiverYaw(key);
saveGiverYaw();
}
function aimList(playerId) {
say(playerId, "NPC ANGLES", "#ffcc00");
for (let i = 0; i < AIM_KEYS.length; i++) {
const key = AIM_KEYS[i];
say(playerId, "  " + key + " (" + aimWho(key) + ") " + aimAngle(key) + " deg", "#8a8a8a");
}
say(playerId, "/aim <npc|all> <degrees> sets it, /aim <npc|all> +15 nudges it.", "#ffffff");
}
function cmdAim(playerId, args) {
if (!isOwner(playerId)) return deny(playerId, "aim");
const first = String(args[1] || "").trim();
if (!first) {
aimList(playerId);
return false;
}
const key = aimKey(first);
const second = String(args[2] !== undefined ? args[2] : "").trim();
if (key) {
if (!second) {
say(playerId, aimWho(key) + " faces " + aimAngle(key) + " degrees. /aim " + key + " <degrees> sets it.", "#b48cff");
return false;
}
const value = Number(second);
if (!isFinite(value)) {
say(playerId, "Usage: /aim " + key + " <degrees>  or  /aim " + key + " +15", "#ff5555");
return false;
}
const relative = second.charAt(0) === "+" || second.charAt(0) === "-";
aimApply(key, wrapAngle(relative ? aimAngle(key) + value : value));
say(playerId, aimWho(key) + " now faces yaw " + aimAngle(key) + " degrees.", "#55ff55");
return false;
}
if (first.toLowerCase() === "all") {
const value = Number(second);
if (!second || !isFinite(value)) {
say(playerId, "Usage: /aim all <degrees>", "#ff5555");
return false;
}
const relative = second.charAt(0) === "+" || second.charAt(0) === "-";
for (let i = 0; i < AIM_KEYS.length; i++) {
const k = AIM_KEYS[i];
aimApply(k, wrapAngle(relative ? aimAngle(k) + value : value));
}
say(playerId, "All " + AIM_KEYS.length + " NPCs now face yaw " + wrapAngle(value) + " degrees.", "#55ff55");
return false;
}
const legacy = Number(first);
if (!isFinite(legacy)) {
say(playerId, "Usage: /aim <seno|gambler|fishing|hunting|mining|lumber|all> <degrees>", "#ff5555");
return false;
}
const rel = first.charAt(0) === "+" || first.charAt(0) === "-";
aimApply("seno", wrapAngle(rel ? prestigeYaw() + legacy : legacy));
say(playerId, PRESTIGE_NPC_NAME + " now faces yaw " + aimAngle("seno") + " degrees.", "#55ff55");
return false;
}
function prestigeData(playerId) {
const d = ensure(playerId);
if (!d.prestige || typeof d.prestige !== "object") d.prestige = { count: 0, speed: 0, damage: 0, health: 0, xp: 0 };
d.prestige.count = Math.min(CFG.PRESTIGE_MAX, num(d.prestige.count));
for (let i = 0; i < PRESTIGE_STATS.length; i++) d.prestige[PRESTIGE_STATS[i]] = Math.min(CFG.PRESTIGE_STAT_MAX, num(d.prestige[PRESTIGE_STATS[i]]));
return d.prestige;
}
function prestigeUnspent(playerId) {
const p = prestigeData(playerId);
return Math.max(0, p.count - p.speed - p.damage - p.health - p.xp);
}
function prestigeMultiplier(playerId, key) {
return 1 + CFG.PRESTIGE_STEP * prestigeData(playerId)[key];
}
function levelCap(playerId) {
return prestigeData(playerId).count >= CFG.PRESTIGE_MAX ? Infinity : CFG.LEVEL_CAP;
}
function capLevelXp(playerId) {
const cap = levelCap(playerId);
return cap === Infinity ? Infinity : levelFloorXp(cap + 1) - 1;
}
function applyPrestige(playerId) {
const speed = Math.min(3, prestigeMultiplier(playerId, "speed"));
const damage = Math.min(3, prestigeMultiplier(playerId, "damage"));
const health = Math.round(100 * Math.min(3, prestigeMultiplier(playerId, "health")));
try { api.setClientOption(playerId, "speedMultiplier", speed); } catch (e) { noteError("prestige speed", e); }
try { api.setClientOption(playerId, "dealingDamageMultiplier", damage); } catch (e) { noteError("prestige damage", e); }
try { api.setClientOption(playerId, "maxHealth", health); } catch (e) { noteError("prestige health", e); }
}
function prestigeReady(playerId) {
const d = P[playerId];
if (!d) return false;
return prestigeData(playerId).count < CFG.PRESTIGE_MAX && levelFor(d.stats.xp) >= CFG.LEVEL_CAP;
}
function doPrestige(playerId) {
const d = ensure(playerId);
const p = prestigeData(playerId);
if (p.count >= CFG.PRESTIGE_MAX) {
say(playerId, "You are at " + CFG.PRESTIGE_MAX + " prestiges - the maximum. Keep levelling, there is no cap now.", "#ffd75e");
return false;
}
if (levelFor(d.stats.xp) < CFG.LEVEL_CAP) {
say(playerId, "Prestige needs level " + CFG.LEVEL_CAP + " and you are " + levelFor(d.stats.xp) + ". Quests are the fastest XP.", "#ff5555");
return false;
}
p.count += 1;
d.stats.xp = 0;
applyPrestige(playerId);
saveNow(playerId);
syncBoard(playerId);
pushRightInfo(playerId, true);
renderPrestigeMenu(playerId);
const left = prestigeUnspent(playerId);
say(playerId, "PRESTIGE " + p.count + "/" + CFG.PRESTIGE_MAX + "! Back to level 1 with " + left + " prestige shard" + (left === 1 ? "" : "s") + " to spend.", "#ffd75e");
say(playerId, "Each shard is +5%: /prestige speed | damage | health | xp", "#b48cff");
say(playerId, p.count >= CFG.PRESTIGE_MAX ? "Prestige maxed - the level cap is gone, climb forever." : "Level cap stays " + CFG.LEVEL_CAP + " until prestige " + CFG.PRESTIGE_MAX + ".", "#8a8a8a");
sfx(playerId, "trumpetFlare", 1, 1);
sfx(playerId, "ominousBellHit", 0.9, 0.7);
return true;
}
function spendPrestige(playerId, key) {
if (PRESTIGE_STATS.indexOf(key) === -1) return false;
const p = prestigeData(playerId);
if (!p.count) {
say(playerId, "Prestige first - " + PRESTIGE_NPC_NAME + " takes level " + CFG.LEVEL_CAP + ".", "#ff5555");
return false;
}
if (p[key] >= CFG.PRESTIGE_STAT_MAX) {
say(playerId, "Prestige " + key + " is maxed at +" + Math.round(CFG.PRESTIGE_STAT_MAX * CFG.PRESTIGE_STEP * 100) + "%. Spend shards on another stat.", "#ffd75e");
return false;
}
if (prestigeUnspent(playerId) <= 0) {
say(playerId, "No unspent prestige shards. Prestige again for more.", "#ff5555");
return false;
}
p[key] += 1;
applyPrestige(playerId);
saveNow(playerId);
pushRightInfo(playerId, true);
renderPrestigeMenu(playerId);
say(playerId, "Prestige " + key + " +" + Math.round((prestigeMultiplier(playerId, key) - 1) * 100) + "%  |  " + prestigeUnspent(playerId) + " shards left.", "#55ff55");
sfx(playerId, "magicAccent1", 0.9, 1.1);
return true;
}
function cmdPrestige(playerId, args) {
const d = ensure(playerId);
const p = prestigeData(playerId);
const sub = String(args && args[1] ? args[1] : "").toLowerCase();
if (sub === "do" || sub === "ascend" || sub === "now") {
doPrestige(playerId);
return;
}
if (PRESTIGE_STATS.indexOf(sub) !== -1) {
spendPrestige(playerId, sub);
return;
}
say(playerId, "== PRESTIGE ==", "#ffd75e");
say(playerId, PRESTIGE_NPC_NAME + "  |  prestige " + p.count + "/" + CFG.PRESTIGE_MAX + "  |  level " + levelFor(d.stats.xp) + " / " + (p.count >= CFG.PRESTIGE_MAX ? "no cap" : CFG.LEVEL_CAP) + "  |  " + prestigeUnspent(playerId) + " unspent", "#b48cff");
const parts = [];
for (let i = 0; i < PRESTIGE_STATS.length; i++) parts.push(PRESTIGE_STATS[i] + " +" + Math.round((prestigeMultiplier(playerId, PRESTIGE_STATS[i]) - 1) * 100) + "%");
say(playerId, parts.join("  |  ") + "   (1 shard = +5%)", "#8a8a8a");
if (prestigeReady(playerId)) say(playerId, "Ready now - /prestige do, or right-click " + PRESTIGE_NPC_NAME + ".", "#55ff55");
else if (p.count < CFG.PRESTIGE_MAX) say(playerId, "Reach level " + CFG.LEVEL_CAP + " to prestige. Repeatable quests give half a level each.", "#5a5a5a");
say(playerId, "/prestige speed|damage|health|xp spends one shard, " + CFG.PRESTIGE_STAT_MAX + " per stat max (+" + Math.round(CFG.PRESTIGE_STAT_MAX * CFG.PRESTIGE_STEP * 100) + "%).", "#ffffff");
}
function prestigeTile(image, title, desc, usable, sort) {
return {
image: image,
cost: 0,
currency: CFG.CURRENCY_ID,
canBuy: !!usable,
hidden: false,
buyButtonText: "Use",
customTitle: title,
description: desc,
sortPriority: sort === undefined ? 0 : sort,
};
}
function renderPrestigeMenu(playerId) {
if (!playerId || !P[playerId]) return;
const p = prestigeData(playerId);
const unspent = prestigeUnspent(playerId);
const ready = prestigeReady(playerId);
putShopItem(playerId, SHOP_CATS.prestige.key, "vb_p_do", prestigeTile("Moonstone Orb", ready ? "PRESTIGE NOW" : "Prestige " + (p.count + 1) + "/" + CFG.PRESTIGE_MAX, ready ? "Level " + CFG.LEVEL_CAP + " reached. Ascend for one prestige shard." : "Needs level " + CFG.LEVEL_CAP + ", you are " + levelFor(P[playerId].stats.xp) + ".", ready, 400));
const rows = [["speed", "Speed", "Diamond Boots"], ["damage", "Damage", "Diamond"], ["health", "Health", "Diamond Helmet"], ["xp", "XP", "Book"]];
for (let i = 0; i < rows.length; i++) {
const key = rows[i][0];
const maxed = p[key] >= CFG.PRESTIGE_STAT_MAX;
const title = rows[i][1] + " +" + Math.round((prestigeMultiplier(playerId, key) - 1) * 100) + "%" + (maxed ? " MAX" : "");
const desc = maxed ? CFG.PRESTIGE_STAT_MAX + " shards spent, +5% each - maxed at +" + Math.round(CFG.PRESTIGE_STAT_MAX * CFG.PRESTIGE_STEP * 100) + "%." : p[key] + " shards spent here, +5% each. " + unspent + " unspent.";
putShopItem(playerId, SHOP_CATS.prestige.key, "vb_p_" + key, prestigeTile(rows[i][2], title, desc, unspent > 0 && !maxed, 300 - i * 10));
}
}
function openPrestigeMenu(playerId) {
ensure(playerId);
if (PRESTIGE_NPC) try { api.setPosition(PRESTIGE_NPC, CFG.PRESTIGE_POS[0], CFG.PRESTIGE_POS[1], CFG.PRESTIGE_POS[2]); } catch (e) { }
renderPrestigeMenu(playerId);
cmdPrestige(playerId, []);
try { api.openShop(playerId, false, SHOP_CATS.prestige.key, false); } catch (e) { say(playerId, "Menu would not open - use /prestige.", "#ff5555"); }
}
function handlePrestigeBuy(playerId, itemKey) {
if (!P[playerId]) return false;
if (itemKey === "vb_p_do") {
doPrestige(playerId);
refreshShop(playerId, SHOP_CATS.prestige.key);
return true;
}
if (String(itemKey).indexOf("vb_p_") === 0) {
spendPrestige(playerId, String(itemKey).slice(5));
refreshShop(playerId, SHOP_CATS.prestige.key);
return true;
}
return false;
}
function questXpFor(playerId, base) {
const d = P[playerId];
const flat = Math.max(0, Math.floor(Number(base) || 0));
if (!d) return flat;
return Math.max(flat, Math.floor(xpToNextLevel(d.stats.xp) * CFG.QUEST_XP_SHARE));
}
function applyPrestigeNameTag() {
if (!PRESTIGE_NPC) return;
try {
api.setTargetedPlayerSettingForEveryone(PRESTIGE_NPC, "nameTagInfo", {
content: [{ str: "\u2726 " + PRESTIGE_NPC_NAME.toUpperCase() + " \u2726", style: styleFor("#ffd75e") }],
subtitle: [{ str: "PRESTIGE - RIGHT-CLICK AT LEVEL " + CFG.LEVEL_CAP, style: styleFor("#8a8a8a") }],
border: { colour: colourName("#ffd75e"), style: "glow" },
}, true);
return;
} catch (e) {
noteError("prestige nametag", e);
}
try { api.setTargetedPlayerSettingForEveryone(PRESTIGE_NPC, "nameColour", "gold", true); } catch (e) { noteError("prestige colour", e); }
}
function setupPrestigeNpc() {
if (PRESTIGE_NPC) return;
let eId = null;
try {
eId = api.attemptCreateMeshEntity("Person", { size: 1.2, pose: "standing", textures: { head: "wizard" } }, PRESTIGE_NPC_NAME + " - right-click to prestige");
} catch (e) {
noteError("prestige npc", e);
eId = null;
}
if (!eId) {
try { eId = api.attemptCreateMeshEntity("Person", { size: 1.2, pose: "standing" }, PRESTIGE_NPC_NAME); } catch (e) { noteError("prestige npc plain", e); eId = null; }
}
if (!eId) return;
PRESTIGE_NPC = eId;
try { api.setPosition(eId, CFG.PRESTIGE_POS[0], CFG.PRESTIGE_POS[1], CFG.PRESTIGE_POS[2]); } catch (e) { noteError("prestige pos", e); }
try { api.setEntityRotation(eId, 0, prestigeYaw(), 0); } catch (e) { noteError("prestige yaw", e); }
applyPrestigeNameTag();
}
const GAMBLER_NAME = "Gambler";
const GAMBLER_POS = [603.5, -99943, -85.5];
const GAMBLER_YAW_KEY = "vb_gambler_yaw_v1";
const GAMBLE_MS = 86400000;
const GAMBLE_RARE = ["Diamond", "Moonstone", "Diamond Ore", "Emerald Ore", "Moonstone Ore"];
const GAMBLE_COMMON = ["Coal", "Coal Ore", "Iron Ore", "Gold Ore", "Apple", "Bread", "Cooked Porkchop", "Cooked Mutton", "Carrot", "Wheat Seeds", "Maple Log", "Pine Log", "Maple Wood Planks", "Stone Bricks", "Torch", "Pumpkin", "Melon"];
let GAMBLER_NPC = null;
let GAMBLER_ANGLE = 90;
function loadGamblerYaw() {
let raw = null;
try { raw = api.getLobbyDbValue(GAMBLER_YAW_KEY); } catch (e) { raw = null; }
const value = Number(raw);
GAMBLER_ANGLE = raw !== null && raw !== undefined && raw !== "" && isFinite(value) ? wrapAngle(value) : 90;
}
function gamblerYaw() {
return GAMBLER_ANGLE;
}
function applyGamblerYaw() {
if (!GAMBLER_NPC) return;
try { api.setEntityRotation(GAMBLER_NPC, 0, gamblerYaw(), 0); } catch (e) { }
}
function gamblerLeft(playerId) {
const d = ensure(playerId);
const last = d.gamble && isFinite(Number(d.gamble.last)) ? Number(d.gamble.last) : 0;
if (!last) return 0;
return Math.max(0, GAMBLE_MS - (Date.now() - last));
}
function gambleRoll(playerId) {
if (!playerId) return false;
const d = ensure(playerId);
if (!d.gamble || typeof d.gamble !== "object") d.gamble = { last: 0, rolls: 0, best: "" };
const left = gamblerLeft(playerId);
if (left > 0) {
say(playerId, GAMBLER_NAME + " already paid you out. The dice rest for " + fmtShortTime(left) + " more.", "#ff5555");
return false;
}
const rare = Math.random() < 0.18;
const pool = rare ? GAMBLE_RARE : GAMBLE_COMMON;
const item = pool[Math.floor(Math.random() * pool.length)];
const count = rare ? 1 + Math.floor(Math.random() * 2) : 4 + Math.floor(Math.random() * 15);
let given = 0;
try { given = api.giveItem(playerId, item, count) || 0; } catch (e) { given = 0; }
if (!given) {
say(playerId, "No room for " + item + " - clear a slot and right-click " + GAMBLER_NAME + " again.", "#ff5555");
return false;
}
d.gamble.last = Date.now();
d.gamble.rolls = num(d.gamble.rolls) + 1;
d.gamble.best = item;
saveNow(playerId);
sfx(playerId, "exp_levelup", 1, 1);
say(playerId, "The dice land on " + fmtNum(given) + " " + item + "!", rare ? "#55ff55" : "#ffd75e");
say(playerId, "Free roll spent - the next one is in 24 hours. Rolls so far: " + fmtNum(d.gamble.rolls) + ".", "#8a8a8a");
return true;
}
function applyGamblerNameTag() {
if (!GAMBLER_NPC) return;
try {
api.setTargetedPlayerSettingForEveryone(GAMBLER_NPC, "nameTagInfo", {
content: [{ str: "\u2684 " + GAMBLER_NAME.toUpperCase() + " \u2684", style: styleFor("#ffd75e") }],
subtitle: [{ str: "FREE ROLL EVERY 24 HOURS - RIGHT-CLICK", style: styleFor("#8a8a8a") }],
border: { colour: colourName("#ffd75e"), style: "glow" },
}, true);
return;
} catch (e) {
noteError("gambler nametag", e);
}
try { api.setTargetedPlayerSettingForEveryone(GAMBLER_NPC, "nameColour", "gold", true); } catch (e) { noteError("gambler colour", e); }
}
function setupGamblerNpc() {
if (GAMBLER_NPC) return;
let eId = null;
try {
eId = api.attemptCreateMeshEntity("Person", { size: 1.1, pose: "standing", textures: { head: "piggy_banker" } }, GAMBLER_NAME + " - right-click for a free roll");
} catch (e) {
noteError("gambler npc", e);
eId = null;
}
if (!eId) {
try { eId = api.attemptCreateMeshEntity("Person", { size: 1.1, pose: "standing" }, GAMBLER_NAME); } catch (e) { noteError("gambler npc plain", e); eId = null; }
}
if (!eId) return;
GAMBLER_NPC = eId;
try { api.setPosition(eId, GAMBLER_POS[0], GAMBLER_POS[1], GAMBLER_POS[2]); } catch (e) { noteError("gambler pos", e); }
try { api.setEntityRotation(eId, 0, gamblerYaw(), 0); } catch (e) { noteError("gambler yaw", e); }
applyGamblerNameTag();
}
function setOverallLevel(playerId, level) {
const d = ensure(playerId);
const top = levelCap(playerId);
const want = Math.max(1, Math.min(top === Infinity ? 1000000 : top, Math.floor(Number(level) || 1)));
d.stats.xp = levelFloorXp(want);
saveNow(playerId);
syncBoard(playerId);
pushRightInfo(playerId, true);
return want;
}
function addOverallLevels(playerId, levels) {
const d = ensure(playerId);
const current = levelFor(d.stats.xp);
const top = levelCap(playerId);
const want = top === Infinity ? Math.max(1, current + Math.floor(Number(levels) || 0)) : Math.max(1, Math.min(top, current + Math.floor(Number(levels) || 0)));
return setOverallLevel(playerId, want);
}
function grantTarget(playerId, args) {
const first = String(args[1] === undefined || args[1] === null ? "" : args[1]).trim();
const second = String(args[2] === undefined || args[2] === null ? "" : args[2]).trim();
const lower = first.toLowerCase();
if (/^[0-9]+$/.test(first)) return { target: playerId, amount: first, raw: first };
if (lower === "me" || lower === "self" || lower === nameOf(playerId).toLowerCase()) return { target: playerId, amount: second, raw: second };
if (!first) return { target: playerId, amount: second, raw: "" };
return { target: findPlayer(first), amount: second, raw: first };
}
function cmdLevelGrant(playerId, args, mode) {
if (!hasPerm(playerId, "level")) {
deny(playerId, "level");
return;
}
const pick = grantTarget(playerId, args);
const amount = parseInt(pick.amount, 10);
const usage = mode === "set" ? "Usage: /setlevel <player|me> <level>" : "Usage: /givelevel <player|me> <levels>";
if (!pick.raw || !isFinite(amount) || amount < 0) {
say(playerId, usage, "#ff5555");
return;
}
const target = pick.target;
if (!target) {
say(playerId, "That player is not online.", "#ff5555");
return;
}
if (amount > CFG.MAX_GRANT_LEVELS) {
say(playerId, "Max is " + CFG.MAX_GRANT_LEVELS + " levels in one go.", "#ff5555");
return;
}
const before = levelFor(ensure(target).stats.xp);
const after = mode === "set" ? setOverallLevel(target, amount) : addOverallLevels(target, amount);
say(playerId, nameOf(target) + " is overall level " + after + " (was " + before + ").", "#55ff55");
say(target, "Your overall level is now " + after + ".", "#b48cff");
staffBroadcast("[STAFF] " + nameOf(playerId) + " put " + nameOf(target) + " at level " + after + ".", "#ffcc00");
}
function cmdGrantShards(playerId, args, take) {
if (!hasPerm(playerId, "shards")) {
deny(playerId, "shards");
return;
}
const pick = grantTarget(playerId, args);
const amount = parseInt(pick.amount, 10);
if (!pick.raw || !isFinite(amount) || amount <= 0) {
say(playerId, "Usage: /" + (take ? "takeshards" : "giveshards") + " <player|me> <amount>", "#ff5555");
return;
}
const target = pick.target;
if (!target) {
say(playerId, "That player is not online.", "#ff5555");
return;
}
const cap = Math.min(amount, CFG.MAX_GRANT_SHARDS);
const d = ensure(target);
if (take) {
const gone = Math.min(cap, d.shards);
if (!gone) {
say(playerId, nameOf(target) + " has no shards to take.", "#ff5555");
return;
}
d.shards -= gone;
syncShards(target);
saveNow(target);
say(playerId, "Took " + fmtNum(gone) + " from " + nameOf(target) + " (balance " + fmtNum(d.shards) + ").", "#55ff55");
say(target, "Staff took " + fmtNum(gone) + " " + CFG.CURRENCY_NAME + ". You have " + fmtNum(d.shards) + ".", "#ffaa55");
staffBroadcast("[STAFF] " + nameOf(playerId) + " took " + fmtNum(gone) + " from " + nameOf(target) + ".", "#ffcc00");
} else {
addShards(target, cap, true);
saveNow(target);
say(playerId, "Gave " + fmtNum(cap) + " to " + nameOf(target) + " (balance " + fmtNum(d.shards) + ").", "#55ff55");
say(target, "Staff gave you " + fmtNum(cap) + " " + CFG.CURRENCY_NAME + " - balance " + fmtNum(d.shards) + ".", "#55ff55");
staffBroadcast("[STAFF] " + nameOf(playerId) + " gave " + nameOf(target) + " " + fmtNum(cap) + " " + CFG.CURRENCY_NAME + ".", "#ffcc00");
}
pushRightInfo(target, true);
}
function cmdClearInv(playerId, args) {
if (!hasPerm(playerId, "clearinv")) {
deny(playerId, "clearinv");
return;
}
const targetName = args[1];
if (!targetName) {
say(playerId, "Usage: /clearinv <player>", "#ff5555");
return;
}
const target = targetOrComplain(playerId, targetName);
if (!target) return;
try {
api.clearInventory(target);
} catch (e) {
noteError("clearinv", e);
say(playerId, "Could not clear that inventory.", "#ff5555");
return;
}
say(playerId, "Cleared " + nameOf(target) + "'s inventory.", "#55ff55");
say(target, "Your inventory was cleared by staff.", "#ffaa55");
staffBroadcast("[STAFF] " + nameOf(playerId) + " cleared " + nameOf(target) + "'s inventory.", "#ffcc00");
}
function cmdShards(playerId) {
const d = ensure(playerId);
say(playerId, "Balance: " + fmtNum(d.shards) + " " + CFG.CURRENCY_NAME, "#ffff55");
for (let i = 0; i < TIME_REWARDS.length; i++) {
if (rewardReady(d, TIME_REWARDS[i])) {
say(playerId, "Playtime reward ready: " + rewardLabel(TIME_REWARDS[i]) + " for " + fmtNum(TIME_REWARDS[i].shards) + " - /rewards claim", "#ffcc00");
break;
}
}
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
say(playerId, "AEVORA EVENTS (" + items.length + ")", "#55aaff");
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
say(playerId, "AEVORA UPDATE LOG (" + items.length + ")", "#55aaff");
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
buttons.push({ id: "vb_rewards", icon: "gift", keycode: "KeyR", description: "Playtime rewards" });
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
say(playerId, "The B menu button would not load - press B again, or use /cmd.", "#ff5555");
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
function blockIsChest(name) {
return String(name || "").toLowerCase().indexOf("chest") >= 0;
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
if (!meteorLoaded(x, y, z)) return false;
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
const spot = randomWarpColumn();
const y = findSurface(spot[0], spot[1]);
if (y !== null) return [spot[0], y, spot[1]];
}
return null;
}
function randomWarpColumn() {
const x = Math.round(CFG.RTP_CENTRE[0] + (Math.random() * 2 - 1) * CFG.RTP_RADIUS);
const z = Math.round(CFG.RTP_CENTRE[1] + (Math.random() * 2 - 1) * CFG.RTP_RADIUS);
if (Math.abs(x - CFG.RTP_CENTRE[0]) + Math.abs(z - CFG.RTP_CENTRE[1]) < CFG.RTP_MIN_DIST) {
return randomWarpColumn();
}
return [x, z];
}
function dropOnGround(playerId, x, z) {
if (!playerId) return false;
const rt = RT[playerId] || (RT[playerId] = {});
DROPS[playerId] = { x: Math.round(x), z: Math.round(z), at: Date.now() };
rt.portalCell = null;
rt.portalSeen = false;
try {
api.setPosition(playerId, Math.round(x) + 0.5, CFG.RTP_DROP_Y, Math.round(z) + 0.5);
} catch (e) {
noteError("portal drop", e);
delete DROPS[playerId];
return false;
}
return true;
}
function settleDrops() {
const now = Date.now();
for (const id in DROPS) {
const drop = DROPS[id];
if (!drop || !(id in P) || now - drop.at > CFG.RTP_SETTLE_MS) {
delete DROPS[id];
continue;
}
const y = findSurface(drop.x, drop.z);
if (y === null) continue;
delete DROPS[id];
try { api.setPosition(id, drop.x + 0.5, y + 0.2, drop.z + 0.5); } catch (e) { continue; }
say(id, "The void sets you down at " + drop.x + ", " + y + ", " + drop.z + ".", "#b98cff");
}
}
function rtpPlayer(playerId, now) {
const spot = randomSurfaceSpot();
const drops = RT[playerId] || (RT[playerId] = {});
if (!spot) {
const spot = randomWarpColumn();
const x = spot[0];
const z = spot[1];
if (!dropOnGround(playerId, x, z)) {
say(playerId, "The portal fizzles - try again.", "#ff5555");
return false;
}
drops.portalUntil = (now || Date.now()) + CFG.PORTAL_COOLDOWN_MS;
say(playerId, "The void hurls you out near " + x + ", " + z + " - landing now.", "#b98cff");
return true;
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
function zoneRect(centre) {
return [[centre[0] - CFG.ZONE_HALF, centre[1] - CFG.ZONE_Y, centre[2] - CFG.ZONE_HALF], [centre[0] + CFG.ZONE_HALF, centre[1] + CFG.ZONE_Y, centre[2] + CFG.ZONE_HALF]];
}
function buildZoneCentres() {
return [CFG.ARENA_DEST, CFG.BLACK_PORTAL_DEST];
}
function safeZoneCentres() {
return [LOBBY_SPAWN, CFG.BLACK_PORTAL_DEST];
}
function inAnyZone(playerId, centres) {
let pos = null;
try {
pos = api.getPosition(playerId);
} catch (e) {
return false;
}
if (!pos) return false;
for (let i = 0; i < centres.length; i++) {
const c = centres[i];
if (Math.abs(pos[0] - c[0]) <= CFG.ZONE_HALF && Math.abs(pos[1] - c[1]) <= CFG.ZONE_Y && Math.abs(pos[2] - c[2]) <= CFG.ZONE_HALF) return true;
}
return false;
}
function inSafeZone(playerId) {
return inAnyZone(playerId, safeZoneCentres());
}
function inBuildZone(playerId) {
return inAnyZone(playerId, buildZoneCentres());
}
function applyZoneRules(playerId) {
if (!playerId) return;
const owner = rankLevel(playerId) >= RANKS.owner.level;
const centres = buildZoneCentres();
for (let i = 0; i < centres.length; i++) {
const pts = zoneRect(centres[i]);
try {
if (owner) api.resetCanChangeBlockRect(playerId, pts[0], pts[1]);
else api.setCantChangeBlockRect(playerId, pts[0], pts[1]);
} catch (e) {
noteError("zone protect", e);
}
}
}
onPlayerDamagingOtherPlayer = function (attackingPlayer, damagedPlayer) {
const now = Date.now();
if (damagedPlayer && RT[damagedPlayer] && RT[damagedPlayer].arenaGraceUntil > now) return "preventDamage";
if (damagedPlayer && inSafeZone(damagedPlayer)) return "preventDamage";
if (attackingPlayer && inSafeZone(attackingPlayer)) return "preventDamage";
};
function isLightBluePortal(name) {
const text = String(name || "").toLowerCase().replace(/[^a-z]/g, "");
if (text.indexOf("portal") === -1) return false;
return text.indexOf("lightblue") !== -1 || text.indexOf("cyan") !== -1;
}
function arenaPortalPlayer(playerId, now) {
const dest = CFG.ARENA_DEST;
try {
api.setPosition(playerId, dest[0], dest[1], dest[2]);
} catch (e) {
noteError("arena portal", e);
say(playerId, "The light blue portal fizzles.", "#ff5555");
return false;
}
const stamp = now || Date.now();
const rt = RT[playerId] || (RT[playerId] = {});
rt.portalUntil = stamp + CFG.PORTAL_COOLDOWN_MS;
rt.portalCell = null;
rt.portalSeen = false;
rt.arenaGraceUntil = stamp + CFG.ARENA_GRACE_MS;
try {
api.applyEffect(playerId, CFG.ARENA_GRACE_EFFECT, CFG.ARENA_GRACE_MS / 1000);
} catch (e) {
noteError("arena grace", e);
}
sfx(playerId, "zapAccent2", 0.9, 1.15);
say(playerId, "PVP ARENA - " + Math.round(CFG.ARENA_GRACE_MS / 1000) + "s grace, nothing can hit you.", "#55aaff");
return true;
}
function isOrangePortal(name) {
const text = String(name || "").toLowerCase().replace(/[^a-z]/g, "");
if (text.indexOf("portal") === -1) return false;
return text.indexOf("orange") !== -1;
}
function orangePortalPlayer(playerId, now) {
const dest = CFG.ORANGE_PORTAL_DEST;
try {
api.setPosition(playerId, dest[0], dest[1], dest[2]);
} catch (e) {
noteError("orange portal", e);
say(playerId, "The orange portal fizzles.", "#ff5555");
return false;
}
const rt = RT[playerId] || (RT[playerId] = {});
rt.portalUntil = (now || Date.now()) + CFG.PORTAL_COOLDOWN_MS;
rt.portalCell = null;
rt.portalSeen = false;
sfx(playerId, "zapAccent2", 0.9, 1.35);
say(playerId, "The orange portal warps you to " + dest[0] + ", " + dest[1] + ", " + dest[2] + ".", "#ff9933");
return true;
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
sfx(playerId, "zapAccent2", 0.9, 0.75);
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
else if (isLightBluePortal(hit)) arenaPortalPlayer(id, stamp);
else if (isOrangePortal(hit)) orangePortalPlayer(id, stamp);
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
if (isOrangePortal(near)) {
const dest = CFG.ORANGE_PORTAL_DEST;
say(playerId, "  orange portal -> " + dest[0] + ", " + dest[1] + ", " + dest[2], "#ff9933");
}
if (isLightBluePortal(near)) {
const dest = CFG.ARENA_DEST;
say(playerId, "  light blue portal -> arena " + dest[0] + ", " + dest[1] + ", " + dest[2] + "  " + Math.round(CFG.ARENA_GRACE_MS / 1000) + "s grace", "#55ff55");
}
say(playerId, "  arena grace: " + (rt.arenaGraceUntil && rt.arenaGraceUntil > Date.now() ? Math.ceil((rt.arenaGraceUntil - Date.now()) / 1000) + "s" : "none"), "#8a8a8a");
say(playerId, "  build lock here: " + (inBuildZone(playerId) ? (rankLevel(playerId) >= RANKS.owner.level ? "owner zone - you can build" : "owner zone - locked") : "open"), "#8a8a8a");
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
segText(" AEVORA STAFF ", "#ffcc00"),
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
if (RETIRED_NAMES.indexOf(key) !== -1 && want !== "player") {
say(playerId, "That name is retired and cannot be given staff rank.", "#ff5555");
return;
}
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
say(target, "Your Aevora rank is now " + label + ".", RANKS[want].colour);
syncClientButtons(target);
syncBoard(target);
applyRankCosmetics(target);
applyZoneRules(target);
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
say(playerId, "== AEVORA STAFF PANEL ==", "#ffcc00");
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
if (hasPerm(playerId, "level") || hasPerm(playerId, "shards")) {
say(playerId, "ECONOMY", "#55aaff");
if (hasPerm(playerId, "level")) {
say(playerId, "  /givelevel <player|me> <levels> - add overall levels, me for yourself", "#ffffff");
say(playerId, "  /setlevel <player|me> <level> - set an exact level", "#ffffff");
}
if (hasPerm(playerId, "shards")) {
say(playerId, "  /giveshards <player|me> <amount> - hand out Void Shards, me for yourself", "#ffffff");
say(playerId, "  /takeshards <player|me> <amount> - claw shards back", "#ffffff");
}
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
if (hasPerm(playerId, "clearinv")) say(playerId, "  /clearinv <player> - wipe their inventory", "#ffffff");
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
econ: { key: "vb_econ", title: "Economy", blurb: "Levels and Void Shards for any player.", sort: 87 },
prestige: { key: "vb_prestige", title: "Prestige", blurb: "Trade level 1000 for a prestige shard worth +5%.", sort: 86 },
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
{
id: "vb_givelevel", cat: SHOP_CATS.econ, perm: "level",
title: "Give levels",
desc: "Pick a player, then type how many overall levels to add.",
image: "Gold Ingot",
target: "player",
step2: {
title: function (name) { return "Add levels to " + name; },
desc: "Type how many levels to add, e.g. 5.",
image: "Gold Ingot",
input: function () { return textInput("5"); },
args: function (target, input) { return ["givelevel", target, String(input || "").trim()]; },
},
},
{
id: "vb_setlevel", cat: SHOP_CATS.econ, perm: "level",
title: "Set level",
desc: "Pick a player, then type the overall level they should be.",
image: "Gold Block",
target: "player",
step2: {
title: function (name) { return "Set level for " + name; },
desc: "Type the level, e.g. 25.",
image: "Gold Block",
input: function () { return textInput("25"); },
args: function (target, input) { return ["setlevel", target, String(input || "").trim()]; },
},
},
{
id: "vb_giveshards", cat: SHOP_CATS.econ, perm: "shards",
title: "Give shards",
desc: "Pick a player, then type how many Void Shards to give.",
image: "Gold Coin",
target: "player",
step2: {
title: function (name) { return "Give shards to " + name; },
desc: "Type an amount, e.g. 5000.",
image: "Gold Coin",
input: function () { return textInput("5000"); },
args: function (target, input) { return ["giveshards", target, String(input || "").trim()]; },
},
},
{
id: "vb_takeshards", cat: SHOP_CATS.econ, perm: "shards",
title: "Take shards",
desc: "Pick a player, then type how many Void Shards to remove.",
image: "Silver Coin",
target: "player",
step2: {
title: function (name) { return "Take shards from " + name; },
desc: "Type an amount, e.g. 2000.",
image: "Silver Coin",
input: function () { return textInput("2000"); },
args: function (target, input) { return ["takeshards", target, String(input || "").trim()]; },
},
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
putShopItem(playerId, SHOP_CATS.econ.key, "vb_cancel", cancelTile(!!pending));
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
const cats = [SHOP_CATS.staff, SHOP_CATS.mod, SHOP_CATS.owner, SHOP_CATS.econ, SHOP_CATS.prestige];
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
baseShopItem(SHOP_CATS.prestige.key, "vb_p_do", "Moonstone Orb");
for (let i = 0; i < PRESTIGE_STATS.length; i++) baseShopItem(SHOP_CATS.prestige.key, "vb_p_" + PRESTIGE_STATS[i], "Diamond");
for (let i = 0; i < cats.length; i++) baseShopItem(cats[i].key, "vb_cancel", "Moonstone Fragment");
}
const QUEST_CENTRE = [10000, -9999, 10000];
function questStep(name, need, shards, xp, line) {
return { name: name, need: need, shards: shards, xp: xp, line: line };
}
const QUEST_TYPES = {
fishing: {
name: "Fishing", short: "Fishing", title: "Angler", who: "xVexx", icon: "fa-solid fa-gem", colour: "#55ffff",
verb: "Catch", unit: "fish",
chain: [
questStep("First Cast", 3, 110, 45, "Three fish. Nothing fancy, just show me you can hold the rod."),
questStep("Tide Reader", 7, 170, 65, "Read the water, not the sky. Seven fish, no excuses."),
questStep("Deep Current", 12, 250, 95, "The fat ones hide in the deep current. Bring twelve up."),
questStep("Void Marlin", 20, 360, 140, "Twenty fish and the Void Marlin will finally look at your hook."),
],
endless: { name: "Endless Tide", need: 28, step: 12, shards: 500, shardStep: 90, xp: 190, xpStep: 38, line: "The tide never stops and neither do you. Back to work." },
x: 10009, y: -9999, z: 10009,
},
hunting: {
name: "Monster Hunting", short: "Hunting", title: "Monster Hunter", who: "TECMAN_", icon: "fa-solid fa-skull", colour: "#ff9a9a",
verb: "Slay", unit: "mobs",
chain: [
questStep("Cull the Herd", 5, 130, 50, "Five mobs. Start with the small ones and work up."),
questStep("Pack Breaker", 12, 200, 75, "They hunt in packs. Break twelve of them apart."),
questStep("Trophy Run", 22, 300, 110, "Twenty two kills and I will start believing you."),
questStep("Apex Contract", 40, 430, 165, "Forty mobs. Then we go looking for the big one."),
],
endless: { name: "Open Contract", need: 55, step: 20, shards: 560, shardStep: 100, xp: 220, xpStep: 44, line: "Contracts never dry up out here. Keep the blade warm." },
x: 665, y: -99943, z: -60,
},
mining: {
name: "Mining", short: "Mining", title: "Assassin", who: "Conceptual", icon: "fa-solid fa-hammer", colour: "#c9c9c9",
verb: "Mine", unit: "blocks",
chain: [
questStep("Silent Entry", 25, 120, 45, "Open a hole nobody hears. Twenty five blocks."),
questStep("Sealed Tunnels", 60, 190, 70, "Dig it, then seal it. Sixty blocks and no trail."),
questStep("Vault Breach", 110, 280, 105, "The vault floor is thin. One hundred and ten blocks."),
questStep("No Witnesses", 180, 400, 150, "Leave nothing behind. One hundred and eighty blocks."),
],
endless: { name: "Clean Contract", need: 240, step: 80, shards: 520, shardStep: 95, xp: 200, xpStep: 40, line: "Every wall is a way in. Keep digging." },
x: 648.5, y: -99943, z: -57.5,
},
lumber: {
name: "Lumberjacking", short: "Wood", title: "Lumberjack", who: "PolyDuck", icon: "fa-solid fa-tree", colour: "#c98a4b",
verb: "Chop", unit: "logs",
chain: [
questStep("Kindling", 20, 160, 60, "Twenty logs. Small stack, but it proves you can swing."),
questStep("Timber Run", 45, 240, 90, "Forty five logs. My yard does not fill itself."),
questStep("Clear Cut", 80, 340, 125, "Eighty logs. I count trunks, not stumps."),
questStep("Old Growth", 130, 470, 175, "One hundred and thirty logs. Then we talk about the good groves."),
],
endless: { name: "Open Grove", need: 180, step: 50, shards: 600, shardStep: 110, xp: 230, xpStep: 46, line: "The forest never runs dry. Back to the grove." },
x: 652, y: -99942, z: -45,
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
const gained = Math.max(0, Math.floor(amount * prestigeMultiplier(playerId, "xp")));
d.stats.xp = Math.min(d.stats.xp + gained, capLevelXp(playerId));
const after = levelFor(d.stats.xp);
return after > before ? after : 0;
}
function gainXp(playerId, amount) {
const level = addXp(playerId, amount);
if (!level) return 0;
const d = P[playerId];
saveNow(playerId);
pushRightInfo(playerId);
if (!d) return level;
say(playerId, "Overall level " + level + "  |  " + xpIntoLevel(d.stats.xp) + "/" + xpToNextLevel(d.stats.xp) + " to level " + (level + 1), "#55ff55");
sfx(playerId, "exp_levelup", 1, 1);
if (level % 10 === 0) sfx(playerId, "trumpetFlare", 1, 1);
return level;
}
function cmdLevel(playerId) {
const d = ensure(playerId);
const level = levelFor(d.stats.xp);
say(playerId, "Overall level " + level + "  |  " + fmtNum(d.stats.xp) + " XP", "#b48cff");
say(playerId, levelBar(d.stats.xp) + "  " + xpIntoLevel(d.stats.xp) + "/" + xpToNextLevel(d.stats.xp) + " to level " + (level + 1), "#8a8a8a");
say(playerId, "XP comes from kills, mobs, mining, fishing, quests and time online.", "#5a5a5a");
const p = prestigeData(playerId);
say(playerId, "Prestige " + p.count + "/" + CFG.PRESTIGE_MAX + "  |  cap " + (p.count >= CFG.PRESTIGE_MAX ? "none" : CFG.LEVEL_CAP) + "  |  /prestige", "#ffd75e");
}
const DISCORD_LINK = "https://discord.gg/crWR7Xx6bZ";
const FANCY_TITLE = true;
const GAME_TITLE = "AEVORA";
const FANCY_NAME = "𝔸𝔼𝕍𝕆ℝ𝔸";
function gameTitle() {
return FANCY_TITLE ? FANCY_NAME : GAME_TITLE;
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
lumber: { size: 1.15, heads: ["farmer"] },
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
lumber: { mark: "\u2692", sub: "RIGHT-CLICK FOR A QUEST" },
};
const GIVER_NAME_COLOUR = {
fishing: "aqua",
hunting: "pink",
mining: "cyan",
lumber: "orange",
};
function giverNameTag(type) {
const giver = QUEST_TYPES[type];
const tag = GIVER_TAGS[type] || {};
const mark = tag.mark || "";
const who = String(giver.who || giver.title).toUpperCase();
const text = mark ? mark + " " + who + " " + mark : who;
return {
content: [{ str: text, style: styleFor(giver.colour) }],
subtitle: [{ str: String(giver.title).toUpperCase() + " - " + (tag.sub || "RIGHT-CLICK FOR A QUEST"), style: styleFor("#8a8a8a") }],
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
const name = giverLabel(key) + " - right-click me";
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
const GIVER_YAW_KEY = "vb_giver_yaw_v3";
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
const NPC_YARD = [634, -99943, -78];
const GIVER_BASE_YAW = { fishing: 180 };
function giverBaseYaw(type) {
const giver = QUEST_TYPES[type];
return isFinite(GIVER_BASE_YAW[type]) ? GIVER_BASE_YAW[type] : Math.round(yawTo(giver.x, giver.z, NPC_YARD[0], NPC_YARD[2]));
}
function giverYaw(type) {
return (giverBaseYaw(type) + (GIVER_YAW[type] || 0) + 360) % 360;
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
applyPrestigeYaw();
applyGamblerYaw();
}
function applyGiverYaw(type) {
const eId = QUEST_NPCS[type];
if (!eId) return;
try { api.setEntityRotation(eId, 0, giverYaw(type), 0); } catch (e) { }
}
function cmdDiag(playerId) {
const ids = [];
for (const key in QUEST_NPCS) ids.push(key + "=" + QUEST_NPCS[key]);
say(playerId, "AEVORA DIAG", "#ffcc00");
say(playerId, "givers " + ids.length + "/4  prestige " + (PRESTIGE_NPC ? "up" : "missing") + "  " + (ids.join("  ") || "none spawned"), "#8a8a8a");
say(playerId, "prestige yaw " + prestigeYaw() + " at " + CFG.PRESTIGE_POS.join(" ") + " - owner /aim", "#8a8a8a");
say(playerId, "gambler " + (GAMBLER_NPC ? "up" : "missing") + " yaw " + Math.round(gamblerYaw()) + " at " + GAMBLER_POS.join(" "), "#8a8a8a");
say(playerId, "side panel " + (PANEL_OFF[playerId] ? "hidden by /panel" : "on"), "#8a8a8a");
for (const key in QUEST_TYPES) {
say(playerId, "  " + key + " " + giver.x + " " + giver.y + " " + giver.z + " yaw " + Math.round(giverYaw(key)) + " skin " + giverSkin(key), "#8a8a8a");
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
setupPrestigeNpc();
setupGamblerNpc();
}
function questSpec(type, done) {
const giver = QUEST_TYPES[type];
const step = Math.max(0, Math.floor(Number(done) || 0));
if (step < giver.chain.length) {
const quest = giver.chain[step];
return { tier: step + 1, name: quest.name, line: quest.line, need: quest.need, shards: quest.shards, xp: quest.xp };
}
const tail = giver.endless;
const extra = step - giver.chain.length;
return {
tier: step + 1,
name: tail.name,
line: tail.line,
need: tail.need + tail.step * extra,
shards: tail.shards + tail.shardStep * extra,
xp: tail.xp + tail.xpStep * extra,
};
}
function giverLabel(type) {
const giver = QUEST_TYPES[type];
return giver.who + " the " + giver.title;
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
name: spec.name,
line: spec.line,
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
function syncQuestType(playerId, type) {
const d = P[playerId];
if (!d || !d.quests) return null;
const quest = d.quests[type];
if (!quest) return null;
const skill = skillOf(playerId, type);
const step = Math.max(Math.max(0, Math.floor(Number(quest.tier) || 1) - 1), Math.max(0, Math.floor(Number(skill.done) || 0)));
const spec = questSpec(type, step);
if (quest.name === spec.name && quest.need === spec.need && quest.shards === spec.shards) return quest;
quest.tier = spec.tier;
quest.name = spec.name;
quest.line = spec.line;
quest.need = spec.need;
quest.shards = spec.shards;
quest.xp = spec.xp;
if (quest.have > quest.need) quest.have = Math.max(0, quest.need);
saveNow(playerId);
pushRightInfo(playerId);
return quest;
}
function syncQuestTypes(playerId) {
for (const key in QUEST_TYPES) syncQuestType(playerId, key);
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
say(playerId, "Quest complete: " + (quest.name || giver.name) + " - " + giver.verb + " " + quest.need + " " + giver.unit + ".", giver.colour);
say(playerId, "Claim it with " + giver.who + " for " + fmtNum(quest.shards) + " shards and " + questXpFor(playerId, quest.xp) + " XP.", "#ffd75e");
sfx(playerId, "exp_collect", 0.9, 1.1);
}
function questTalk(playerId, type) {
const giver = QUEST_TYPES[type];
const d = ensure(playerId);
const quest = syncQuestType(playerId, type);
if (!quest) {
const fresh = assignQuest(playerId, type);
richSay(playerId, [
segIcon(giver.icon, giver.colour),
segText(" " + giver.who + ": ", giver.colour),
segText(fresh.name + " - " + giver.verb + " " + fresh.need + " " + giver.unit + ".", "#e0e0e0"),
]);
if (fresh.line) say(playerId, fresh.line, "#8a8a8a");
say(playerId, "Tier " + fresh.tier + " reward: " + fmtNum(fresh.shards) + " shards + " + questXpFor(playerId, fresh.xp) + " XP. Come back when it is done.", "#8a8a8a");
say(playerId, "My contracts: " + giver.chain.map(function (q) { return q.name; }).join(", ") + ", then endless " + giver.endless.name + ".", "#5a5a5a");
return;
}
if (quest.have < quest.need) {
richSay(playerId, [
segIcon(giver.icon, giver.colour),
segText(" " + giver.who + ": ", giver.colour),
segText((quest.name || giver.name) + " - " + quest.have + "/" + quest.need + " " + giver.unit + ".", "#e0e0e0"),
]);
return;
}
const shards = quest.shards;
const xp = questXpFor(playerId, quest.xp);
delete d.quests[type];
const skill = skillOf(playerId, type);
const skillBefore = levelFor(skill.xp);
skill.done += 1;
skill.xp += quest.xp;
const skillAfter = levelFor(skill.xp);
const nextSpec = questSpec(type, skill.done);
addShards(playerId, shards, true);
const levelledTo = addXp(playerId, xp);
saveNow(playerId);
pushRightInfo(playerId);
richSay(playerId, [
segIcon(giver.icon, giver.colour),
segText(" " + giver.who + ": ", giver.colour),
segText("Quest complete! ", "#55ff55"),
segText("+" + fmtNum(shards) + " shards", "#ffd75e"),
segText("  +" + xp + " XP", "#b48cff"),
]);
sfx(playerId, "cashRegister", 1, 1);
say(playerId, giver.short + " level " + skillAfter + "  |  " + xpIntoLevel(skill.xp) + "/" + xpToNextLevel(skill.xp) + " to level " + (skillAfter + 1), "#8a8a8a");
say(playerId, "Next: " + nextSpec.name + " (tier " + nextSpec.tier + ") - " + giver.verb + " " + nextSpec.need + " " + giver.unit + " for " + fmtNum(nextSpec.shards) + " shards + " + questXpFor(playerId, nextSpec.xp) + " XP.", "#5a5a5a");
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
segText(" AEVORA QUESTS ", "#ffcc00"),
segText("| level " + level, "#8a8a8a"),
]);
say(playerId, "XP " + fmtNum(d.stats.xp) + "  |  " + xpIntoLevel(d.stats.xp) + "/" + xpToNextLevel(d.stats.xp) + " to level " + (level + 1), "#b48cff");
say(playerId, skillSummary(playerId), "#8a8a8a");
say(playerId, "Quest givers stand around 10000, -9999, 10000 - right-click one.", "#8a8a8a");
for (const key in QUEST_TYPES) {
const giver = QUEST_TYPES[key];
const quest = syncQuestType(playerId, key);
const lv = skillLevel(playerId, key);
if (!quest) {
const next = questSpec(key, skillOf(playerId, key).done);
richSay(playerId, [
segIcon(giver.icon, giver.colour),
segText(" " + giver.who + " Lv" + lv + "  ", giver.colour),
segText("T" + next.tier + " " + next.name + ": " + giver.verb + " " + next.need + " " + giver.unit, "#dddddd"),
segText("  " + fmtNum(next.shards) + " shards + " + questXpFor(playerId, next.xp) + " XP", "#ffd75e"),
]);
continue;
}
const done = quest.have >= quest.need;
richSay(playerId, [
segIcon(giver.icon, giver.colour),
segText(" " + giver.who + " Lv" + lv + "  ", giver.colour),
segText("T" + (quest.tier || 1) + " " + (quest.name || giver.name) + "  " + giver.verb + " " + quest.have + "/" + quest.need + " " + giver.unit, done ? "#55ff55" : "#dddddd"),
segText("  " + fmtNum(quest.shards) + " shards + " + questXpFor(playerId, quest.xp) + " XP", "#ffd75e"),
segText(done ? "  CLAIM" : "", "#55ff55"),
]);
}
say(playerId, "No giver nearby? /quest fishing, hunting, mining or lumber.", "#5a5a5a");
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
syncQuestTypes(playerId);
applyPrestige(playerId);
RT[playerId].minute = Math.floor(d.stats.playtimeMs / 60000);
RT[playerId].pending = null;
syncShards(playerId);
setupBoard(playerId);
syncClientButtons(playerId);
applyRankCosmetics(playerId);
applyZoneRules(playerId);
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
say(playerId, "Spend them on weapons: /weapons   |   Quests: /quests", "#e0e0e0");
say(playerId, "Events: /events  |  Updates: /updates  |  Help: /help", "#8a8a8a");
say(playerId, "Discord: " + DISCORD_LINK, "#8fd0ff");
if (!tutorialState(playerId).done) tutorialStart(playerId);
} else {
say(playerId, "Welcome back, " + name + ". " + fmtNum(d.shards) + " " + CFG.CURRENCY_NAME + ".", "#55aaff");
const st = tutorialState(playerId);
if (!st.done) {
if (!st.known) {
tutorialStart(playerId);
} else {
st.at = Date.now();
tutorialShow(playerId, st);
}
}
}
if (r.level > 0) {
say(playerId, "Staff rank: " + r.name + "  |  Press B or N for your staff menu", r.colour);
}
if (METEOR) say(playerId, "Meteor crater at " + METEOR.x + ", " + METEOR.z + " - /meteortp to land beside it. Next in " + meteorNextText() + ".", "#ff9c55");
pushRightInfo(playerId, true);
};
onPlayerLeave = function (playerId) {
saveNow(playerId);
delete P[playerId];
delete RT[playerId];
delete FLY[playerId];
delete TUT[playerId];
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
return;
}
if (buttonId === "vb_rewards") {
ensure(playerId);
cmdRewards(playerId, []);
}
};
onPlayerBoughtShopItem = function (playerId, categoryKey, itemKey, item, userInput) {
if (!categoryKey) return;
if (String(categoryKey).indexOf("vb_") !== 0) return;
if (categoryKey === SHOP_CATS.prestige.key) {
handlePrestigeBuy(playerId, itemKey);
return;
}
handleStaffMenuBuy(playerId, categoryKey, itemKey, userInput);
};
onPlayerKilledOtherPlayer = function (attackingPlayer, killedPlayer, damageDealt, withItem) {
const d = ensure(attackingPlayer);
d.stats.kills++;
addShards(attackingPlayer, CFG.KILL_SHARDS, true);
gainXp(attackingPlayer, CFG.XP_KILL);
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
gainXp(playerId, CFG.XP_MOB);
if (d.stats.mobKills % 100 === 0) {
say(playerId, "Mob kills: " + d.stats.mobKills + "  |  +" + fmtNum(CFG.MOB_SHARDS) + " shards", "#55aaff");
}
};
onPlayerSucceededFishCatch = function (playerId, rodName, x, y, z, caughtItemName) {
if (!playerId) return;
questProgress(playerId, "fishing", 1);
gainXp(playerId, CFG.XP_FISH);
};
onPlayerChangeBlock = function (playerId, x, y, z, fromBlock, toBlock) {
if (!playerId) return;
if (String(toBlock) !== "Air") return;
if (!fromBlock || String(fromBlock) === "Air") return;
questProgress(playerId, "mining", 1);
const chopped = String(fromBlock).split("[")[0].trim();
if (/ log$/i.test(chopped)) questProgress(playerId, "lumber", 1);
gainXp(playerId, CFG.XP_MINE);
};
onPlayerAltAction = function (playerId, x, y, z, block, targetEId) {
if (!playerId) return;
if (targetEId) {
if (PRESTIGE_NPC && targetEId === PRESTIGE_NPC) {
openPrestigeMenu(playerId);
return;
}
if (GAMBLER_NPC && targetEId === GAMBLER_NPC) {
gambleRoll(playerId);
return;
}
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
armourTick();
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
armourHealth(id);
const minute = Math.floor(d.stats.playtimeMs / 60000);
if (minute > rt.minute) {
const gained = minute - rt.minute;
rt.minute = minute;
addShards(id, CFG.SHARDS_PER_MINUTE * gained, true);
gainXp(id, CFG.XP_MINUTE * gained);
for (let i = 0; i < TIME_REWARDS.length; i++) {
if (TIME_REWARDS[i].minutes === minute && !rewardClaimed(d, TIME_REWARDS[i])) {
say(id, "Playtime reward ready: " + rewardLabel(TIME_REWARDS[i]) + " for " + fmtNum(TIME_REWARDS[i].shards) + " " + CFG.CURRENCY_NAME + " - /rewards claim", "#ffcc00");
try { api.playSound(id, "levelup", 1, 1); } catch (e) { }
}
}
}
}
}
const BUILD = "VB-AEVORA-6";
playerCommand = function (playerId, command) {
ensure(playerId);
const text = String(command || "").trim().replace(/^[/!]+/, "");
const args = text.split(/\s+/);
const cmd = (args[0] || "").toLowerCase();
if (cmd === "version" || cmd === "build") {
say(playerId, "Aevora world code: " + BUILD, "#8fd0ff");
return;
}
if (cmd === "help" || cmd === "commands" || cmd === "cmds" || cmd === "cmd" || cmd === "?") {
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
say(playerId, "Usage: /quest <fishing|hunting|mining|lumber>", "#ff5555");
}
return false;
}
if (cmd === "armour" || cmd === "armor") {
cmdArmourSub(playerId, args);
return false;
}
if (cmd === "weapons" || cmd === "weapon") {
const wsub = String(args[1] || "").toLowerCase();
if (cmd === "weapons" || !wsub) cmdWeapons(playerId);
else if (wsub === "buy") cmdBuyWeapon(playerId, args);
else if (wsub === "info") cmdWeaponInfo(playerId, args[2]);
else cmdWeaponInfo(playerId, args[1]);
return false;
}
if (cmd === "prestige" || cmd === "ascend") {
cmdPrestige(playerId, args);
return false;
}
if (cmd === "aim" || cmd === "seno" || cmd === "bloxdseno") {
cmdAim(playerId, args);
return false;
}
if (cmd === "gamble" || cmd === "roll" || cmd === "gambler") {
gambleRoll(playerId);
return false;
}
if (cmd === "meteortp" || cmd === "meteorteleport" || cmd === "mtp") {
cmdMeteorTp(playerId);
return false;
}
if (cmd === "meteor" || cmd === "meteors") {
cmdMeteor(playerId, args);
return false;
}
if (cmd === "tutorial" || cmd === "guide" || cmd === "walkthrough") {
cmdTutorial(playerId, args);
return false;
}
if (cmd === "level" || cmd === "lvl" || cmd === "xp") {
cmdLevel(playerId);
return false;
}
if (cmd === "rewards" || cmd === "reward" || cmd === "playtime") {
cmdRewards(playerId, args);
return false;
}
if (cmd === "givelevel" || cmd === "addlevel" || cmd === "addlevels") {
cmdLevelGrant(playerId, args, "add");
return false;
}
if (cmd === "setlevel" || cmd === "levelset") {
cmdLevelGrant(playerId, args, "set");
return false;
}
if (cmd === "giveshards" || cmd === "addshards") {
cmdGrantShards(playerId, args, false);
return false;
}
if (cmd === "takeshards" || cmd === "removeshards") {
cmdGrantShards(playerId, args, true);
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
if (cmd === "panel" || cmd === "hud") {
cmdPanel(playerId);
return false;
}
if (cmd === "discord" || cmd === "dc") {
say(playerId, "AEVORA Discord:", "#55aaff");
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
if (cmd === "clearinv" || cmd === "clearinventory" || cmd === "wipeinv") {
cmdClearInv(playerId, args);
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
loadPrestigeYaw();
loadGamblerYaw();
} catch (e) {
noteError("prestige yaw", e);
}
try {
meteorLoad();
} catch (e) {
noteError("meteor load", e);
}
try {
setupQuestGivers();
} catch (e) {
noteError("quest givers", e);
}
