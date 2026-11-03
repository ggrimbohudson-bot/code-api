// VOIDBOUND prestige - Health
// 1 prestige shard = +5% max health. 40 shards = 300 HP.
//
// Paste this into a code block. It reads the same save the world code writes,
// so the number always matches what the Prestige menu at BloxdSeno shows.
// Press it with a player in the world, or run it from a join block.
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
const shards = Math.max(0, Math.floor(Number(p.health) || 0));
const health = Math.round(100 * Math.min(3, 1 + 0.05 * shards));
api.setClientOption(id, "maxHealth", health);
api.sendMessage(id, "Prestige health: " + shards + " shards = " + health + " max HP");
