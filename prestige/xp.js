// VOIDBOUND prestige - XP
// 1 prestige shard = +5% XP. 40 shards = +200% (x3).
//
// XP is awarded by the world code, so a code block cannot multiply it. This
// block reports the multiplier that the world code is already applying and
// reminds the player where the shards went. Paste it into a code block and
// press it with a player in the world.
const DB_KEY = "vb_player_v1";
const id = typeof playerId !== "undefined" && playerId ? playerId : api.getPlayerIds()[0];
let data = null;
try {
    const raw = api.getPlayerDbValue(id, DB_KEY);
    data = raw ? (typeof raw === "string" ? JSON.parse(raw) : raw) : null;
} catch (e) {
    data = null;
}
const p = (data && data.prestige) || {};
const shards = Math.max(0, Math.floor(Number(p.xp) || 0));
const mult = 1 + 0.05 * shards;
const cap = (Math.floor(Number(p.count) || 0) || 0) >= 40 ? "no cap" : "1000";
api.sendMessage(id, "Prestige XP: " + shards + " shards = x" + mult.toFixed(2) + " XP  |  prestiges " + (Math.floor(Number(p.count) || 0) || 0) + "/40  |  level cap " + cap);
