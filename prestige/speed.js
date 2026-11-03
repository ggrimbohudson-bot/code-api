// VOIDBOUND prestige - Speed
// 1 prestige shard = +5% movement speed, up to 10 shards (+50%).
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
const shards = Math.min(10, Math.max(0, Math.floor(Number(p.speed) || 0)));
const mult = 1 + 0.05 * shards;
api.setClientOption(id, "speedMultiplier", mult);
api.sendMessage(id, "Prestige speed: " + shards + " shards = x" + mult.toFixed(2) + " speed");
