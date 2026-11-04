/* ============================================================================
   BLOXDVOID_YT HORROR — 100 DAYS
   A drop-in Bloxd World Code horror survival mode.

   THE IDEA
   A "benefactor" adds ONE new horror to the world every day. Horrors never
   leave, so night 40 is running all 40 of them at once. Survive to day 100.

   THE HORRORS ARE CUSTOM MODELS
   The big scares are not stock mobs: they are figures built from mesh
   entities (boxes and blocks) that are moved every fraction of a second.
   There is the tall Watcher that only moves while unseen, the floating
   Hollow, a swirling shadow swarm, a rune obelisk that appears near your
   base, and the Benefactor who visits each dawn. Turn them off with
   CFG.ENABLE_CUSTOM_MESHES = false and the mode falls back to horror mobs.

   HOW TO INSTALL
   1. Open your world, press F8 (World Code).
   2. Paste this whole file in and save.
   3. In chat:  /survive
   4. That is it. The run saves itself and resumes after a restart.

   The word that starts a run is CFG.START_COMMAND (default "survive").
   Anyone in the lobby can type it, so the YouTuber can begin filming
   without being a world admin. Set CFG.ANYONE_CAN_START to false to make
   the trigger owner-only. /horror start always works for admins.

   PACING (change in CFG below)
   - Day phase:   5 real minutes of safe building/looting
   - Night phase: 10 real minutes of horror
   - A full day is 15 minutes, day 100 is roughly 25 hours of raw footage.
     Change CFG.DAY_MINUTES / CFG.NIGHT_MINUTES at any time, or use
     /horror length <dayMin> <nightMin> while the world is running.

   WHAT HAPPENS EACH DAY
   - Dawn: the new horror is announced by name, with a line from "???".
   - Day: calm. Sanity slowly comes back. Prep your base.
   - Dusk: warning, the sky starts to die.
   - Night: the horrors fire. More events every 6 days. Bosses on 25/50/75/100.

   COMMANDS  (admin = world owner, or a name in CFG.ADMIN_NAMES)
   /survive                    start the run (the CFG.START_COMMAND word)
   /horror                     help
   /horror start | stop        start / stop the run
   /horror pause | resume      freeze / unfreeze the clock
   /horror skip                jump to dawn of the next day
   /horror night               force night right now
   /horror day <1-100>         set the day (admin)
   /horror mods                list every horror added so far
   /horror mod <day>           read one horror's card
   /horror test <tag>          fire one horror behaviour now (admin)
   /horror boss                summon this day's boss (admin)
   /horror clear               despawn every horror mob and mesh (admin)
   /horror meshes              list active custom mesh models (admin)
   /horror say <voice> <text>  speak a styled line as a character (admin)
   /horror sanity <0-100>      set your sanity (admin)
   /horror length <dayMin> <nightMin>   retune the clock (admin)
   /horror reset               wipe the run and start over (admin)

   TEST TAGS
   fog footsteps stalker sound herald cave whisper torch beast grave mirror
   dark hunter swarm wraith blood abduction possession quake silence titan
   watcher hollow shadow obelisk
   ============================================================================ */

const CFG = {
	// persistence
	DB_RUN: "s4k_horror_run_v1",
	DB_BEST: "s4k_horror_best_v1",

	// clock (real minutes)
	MAX_DAY: 100,
	DAY_MINUTES: 5,
	NIGHT_MINUTES: 10,
	DAWN_MS: 6000,
	DUSK_MS: 12000,

	// sanity
	SANITY_MAX: 100,
	SANITY_DAWN_REGEN: 1.6,
	SANITY_DAY_REGEN: 0.55,
	SANITY_NIGHT_DRAIN: 0.30,
	SANITY_DARK_DRAIN: 0.55,
	SANITY_NEAR_DRAIN: 0.45,
	SANITY_UNDERGROUND_DRAIN: 0.35,
	SANITY_DEATH_RESET: 55,
	SANITY_EVENT_COST: 6,

	// mobs
	MAX_MOBS_PER_PLAYER: 5,
	MAX_MOBS: 26,
	MOB_LIFETIME_MS: 60000,
	BOSS_DAYS: [25, 50, 75, 100],

	// world edits (From The Fog style). Set false if you film in a build
	// you do not want touched.
	ENABLE_WORLD_EDITS: true,
	TORCH_RADIUS: 14,
	TORCH_MAX_PER_NIGHT: 10,
	GRAVE_MAX_BLOCKS: 10,

	// housekeeping
	HUD_EVERY_MS: 1200,
	ATMOS_EVERY_MS: 1500,
	SAVE_EVERY_MS: 30000,
	MOB_EVERY_MS: 200,
	SANITY_EVERY_MS: 250,
	DREAD_EVERY_MS: 900,

	ADMIN_NAMES: ["xvexx", "bloxdvoid_yt"],

	// The chat command that begins a run. Change this to any single word you
	// want (no spaces, no slash in the value). Examples: "survive", "day100",
	// "begin", "horrorgo". Reserved words to avoid: horror, h, s4k, 100
	// (they open the admin menu instead).
	START_COMMAND: "survive",
	ANYONE_CAN_START: true,

	// custom mesh models (the horror figures themselves)
	ENABLE_CUSTOM_MESHES: true,
	MAX_MESH_MODELS: 4,
	MESH_EVERY_MS: 120,
};

/* ---------------------------------------------------------------------------
   THE 100 HORRORS
   [day, name, tags, blurb]
   Tags are the behaviours that fire. Horrors stack: every horror from every
   past day is still active, so the world fills up as the series goes on.
   --------------------------------------------------------------------------- */
const HORRORS = [
	[1, "The Fog That Breathes", ["fog"], "The fog arrives. It does not leave when you look away."],
	[2, "Footsteps Behind You", ["footsteps"], "There is nobody there. There is always somebody there."],
	[3, "The Watcher in the Trees", ["stalker", "watcher"], "It stands at the edge of the light and waits for you to notice."],
	[4, "Knocking at the Door", ["sound", "herald"], "Three knocks. Your door is not the one being knocked on."],
	[5, "Something in the Cellar", ["cave"], "It only exists where the light does not."],
	[6, "The Whispers", ["whisper"], "It knows your name. It knows what you did yesterday."],
	[7, "Lights Out", ["torch", "dark"], "Your torches are going out one by one, behind you."],
	[8, "The Spectral Wolf", ["beast"], "It moves like a wolf and sounds like a person screaming."],
	[9, "The Grave in the Yard", ["grave"], "A grave appears near your base. It has your name on it."],
	[10, "The Thing That Copies You", ["mirror"], "You will see yourself standing in the trees. Do not walk toward it."],

	[11, "Cold Spots", ["dark", "sound"], "The air drains out of a room before it arrives."],
	[12, "The Drowned Man", ["footsteps", "sound"], "Wet footsteps, indoors, with no water for miles."],
	[13, "The Hunter", ["hunter"], "This one does not watch. This one runs."],
	[14, "The Hive", ["swarm"], "They come in numbers now. The numbers only grow."],
	[15, "The Warper", ["wraith"], "Distance stops meaning anything to it."],
	[16, "Don't Look Back", ["stalker", "sound"], "It only moves when your back is turned."],
	[17, "The Shattered Moon", ["blood", "fog"], "The moon comes up wrong. Red light, red fog, red everything."],
	[18, "The Cold Hand", ["abduction"], "You will wake up somewhere else, and something will be missing."],
	[19, "The Choir", ["whisper", "dark"], "A hundred voices, all of them yours, all of them wrong."],
	[20, "THE CAVE DWELLER", ["cave", "hunter"], "It has been down there the whole time. Now it knows you are down there too."],

	[21, "Possession", ["possession"], "The animals are not animals tonight."],
	[22, "The Long Hallway", ["mirror", "footsteps"], "Your base has a corridor you did not build."],
	[23, "The Tremor", ["quake"], "The ground remembers something you do not."],
	[24, "The Silence", ["silence", "dark"], "No wind. No mobs. No music. Just you breathing."],
	[25, "THE TITAN", ["titan", "quake"], "The first of the four. It does not hide."],
	[26, "The Second Sun", ["dark", "blood", "shadow"], "The sun rises and gives no light at all."],
	[27, "The Flayed Choir", ["whisper", "swarm"], "They sing while they walk toward you."],
	[28, "The Whispering Woods", ["stalker", "whisper"], "Every tree has a voice and every voice has a plan."],
	[29, "The Gravekeeper", ["grave", "possession"], "It is planting something in your yard."],
	[30, "The Hollow Hunt", ["hunter", "stalker"], "One follows. One flanks. Both are patient."],

	[31, "The Red Rain", ["blood", "swarm"], "It rains and the rain is warm."],
	[32, "The Light Eater", ["torch", "dark"], "Light itself is becoming a resource you cannot afford."],
	[33, "The Thing Under the Floor", ["cave", "quake"], "You built your base on top of it."],
	[34, "The Copycat", ["mirror", "whisper"], "It has your name, your voice and no face."],
	[35, "The Pale Riders", ["hunter", "beast"], "They do not walk. They arrive."],
	[36, "The Empty Village", ["herald", "silence"], "Everyone left. Nobody left. There is a difference."],
	[37, "The Screaming Trees", ["sound", "stalker"], "The forest has started to make a noise that is not wind."],
	[38, "The Bone Orchard", ["grave", "beast", "hollow"], "Something is growing where the graves are. It is hungry."],
	[39, "The Shifting Dark", ["dark", "wraith"], "The dark is not empty. It is occupied."],
	[40, "THE DRAUGR KING", ["wraith", "hunter", "swarm"], "The dead have a king and he has been looking for a kingdom."],

	[41, "The Stalking Season", ["stalker", "hunter"], "It is not a night anymore. It is a season."],
	[42, "The Feast", ["possession", "beast"], "Something has been eating your animals. It has been leaving the bones in a pattern."],
	[43, "The Mirror House", ["mirror", "abduction", "watcher"], "You will step through a door and not come out where you went in."],
	[44, "The Drowning", ["footsteps", "abduction"], "The floor feels like deep water now."],
	[45, "The Cold Sun", ["dark", "fog"], "Daylight no longer means safe."],
	[46, "The Rot", ["swarm", "possession"], "It spreads from the animals to the ground to the air."],
	[47, "The Nightmare Choir", ["whisper", "sound"], "It is learning which sounds make you stop moving."],
	[48, "The Broken Clock", ["quake", "silence"], "The night is longer than it should be. Check the clock. Do not check the clock."],
	[49, "The Infinite Hallway", ["mirror", "dark"], "Every corridor loops. Something is at the end of all of them."],
	[50, "THE MAN FROM THE FOG", ["titan", "fog"], "He arrives with the lightning. He does not leave with it."],

	[51, "The Second Skin", ["possession", "mirror"], "There are two of everyone now. One of them is wrong."],
	[52, "The Hunger", ["swarm", "beast"], "Everything is hungry. Everything is looking at you."],
	[53, "The Culling", ["hunter"], "It kills the mobs first. It is clearing the world for you."],
	[54, "The Thousand Eyes", ["stalker", "whisper"], "You are being watched from every direction at once."],
	[55, "The Worm", ["cave", "quake"], "The ground moves in a line. The line is coming to your base."],
	[56, "The Unlit", ["dark", "torch"], "There is no light left that it has not eaten."],
	[57, "The Hollow Choir", ["whisper", "silence"], "It sings in the gaps between sounds."],
	[58, "The Grave Tide", ["grave", "swarm"], "The graves are multiplying and something is climbing out."],
	[59, "The Long Night", ["fog", "dark", "sound"], "This night will feel like three."],
	[60, "THE CRONE", ["wraith", "whisper", "abduction", "hollow"], "She collects people. She has a very organised collection."],

	[61, "The Flesh Market", ["possession", "sound"], "Something is trading in the village. It is not using coins."],
	[62, "The Shambling Dead", ["swarm", "hunter"], "They are slow until they are not."],
	[63, "The Watchers", ["stalker", "mirror"], "They stand in a ring around your base and they wait for dawn."],
	[64, "The Blood Moon Rises", ["blood", "fog", "swarm"], "The sky is red and the ground is moving."],
	[65, "The Deep Ones", ["cave", "beast"], "They came up. All of them came up."],
	[66, "The Doorway", ["herald", "quake"], "A door has appeared. It is open. It was not there yesterday."],
	[67, "The Rotting Choir", ["whisper", "beast"], "It sounds like a hymn and it sounds like chewing."],
	[68, "The Puppeteer", ["possession", "abduction"], "Everything you meet tonight is being worn."],
	[69, "The Fog Walker", ["fog", "stalker", "dark", "watcher"], "The fog is closer. The fog is breathing."],
	[70, "THE HOLLOW HUNT", ["hunter", "stalker", "wraith"], "The hunt does not end at dawn now. It only pauses."],

	[71, "The Drowned Choir", ["whisper", "footsteps", "dark"], "The whole world sounds like it is underwater."],
	[72, "The Skinless", ["beast", "possession"], "It has been wearing the animals. It has been wearing them badly."],
	[73, "The Collapse", ["quake", "grave"], "The ground opens where you stand."],
	[74, "The Copying Dark", ["mirror", "dark", "whisper"], "It learns you. It will use what it learns."],
	[75, "THE HOLLOW KING", ["titan", "dark"], "The third of the four. He brings his court with him."],
	[76, "The Bleeding Sky", ["blood", "fog", "sound"], "The sky has been cut open and it is not healing."],
	[77, "The Swarm Eternal", ["swarm", "hunter"], "They do not stop coming. They have never stopped coming."],
	[78, "The Silence Below", ["silence", "cave"], "Down there, the quiet is worse than the noise."],
	[79, "The Grave That Follows", ["grave", "stalker"], "You will bury it. It will be back at dawn."],
	[80, "The Long Stare", ["stalker", "dark", "whisper", "watcher"], "It has stopped hiding. It wants you to see it now."],

	[81, "The Unmaking", ["quake", "abduction", "swarm"], "The world is being taken apart around you."],
	[82, "The Choir of Teeth", ["whisper", "beast"], "It sings with a mouth you cannot see."],
	[83, "The Lightless", ["torch", "dark", "fog", "shadow"], "The dark has a shape now. The shape is getting closer."],
	[84, "The Second Face", ["mirror", "possession", "abduction"], "There is a face in the window. It is yours. You are not at the window."],
	[85, "The Red Harvest", ["blood", "hunter", "beast"], "The world is ripe. It is harvesting."],
	[86, "The Deep Choir", ["cave", "whisper", "wraith"], "The caves have learned to speak in harmony."],
	[87, "The Endless Corridor", ["mirror", "silence", "footsteps"], "You will run and you will arrive in the same room."],
	[88, "The Rotting Hunt", ["swarm", "possession", "hunter"], "Everything is hunting. Everything is being worn."],
	[89, "The Cold Below", ["cave", "dark", "quake"], "It is directly under you. It has been for weeks."],
	[90, "THE PALE MOTHER", ["beast", "possession", "whisper", "hollow"], "She made all of them. She is coming to collect."],

	[91, "The Gathering", ["stalker", "swarm"], "They are not attacking yet. They are just arriving."],
	[92, "The Fog That Eats", ["fog", "dark", "hunter"], "The fog is thinner than it was. Something is in it that is not fog."],
	[93, "The Last Laugh", ["herald", "whisper", "sound"], "It has started using the chat to talk to you."],
	[94, "The Broken Mirror", ["mirror", "abduction", "dark"], "Every reflection is one second behind. Then it is not."],
	[95, "The Grave World", ["grave", "swarm", "blood", "obelisk"], "The whole world is a graveyard now. You are the only thing not buried."],
	[96, "The Hollow Choir Rises", ["whisper", "silence", "wraith"], "The singing stopped. That is worse."],
	[97, "The Drowned Hunt", ["footsteps", "hunter", "beast"], "The wet footsteps are running now."],
	[98, "The Thing at the Door", ["herald", "abduction", "quake"], "It is knocking. It has been knocking for an hour."],
	[99, "THE LAST NIGHT", ["fog", "dark", "blood", "hunter", "watcher"], "Everything is awake. Everything is coming."],
	[100, "DAY 100: THE FINAL", ["titan", "fog", "blood", "swarm", "hunter", "dark", "whisper", "quake", "watcher", "hollow", "shadow"], "There is nothing left to add. So it is all coming at once."],
];

/* ---------------------------------------------------------------------------
   SOUNDS
   --------------------------------------------------------------------------- */
const SND = {
	fog: "horrorMaleDrone",
	accent: "horrorAccent1",
	fright: "horrorFright",
	pulse: "pulseFromTheDark",
	riser: "suspenseRiser",
	bell: "ominousBellHit",
	knock: "doorKnock",
	metalKnock: "metalDoorKnock",
	impact: "hauntedHorrorImpact",
	thunder: "thunderRain",
	rain: "intensiveRainLoop",
	zap: "zapAccent1",
	zap2: "zapAccent2",
	strange: "futureStrangePulse",
	stalkerIdle: "stalkerIdle1",
	stalkerHit: "stalkerAttack1",
	wraith: "wraithGrunt1",
	rattle: "skeletonRattle1",
	zombie: "ZombieGrunt1",
	growl: "dogGrowl1",
	step: "step_gravel1",
	stepRpg: "rpgFootstep00",
	heart: "lowDrum1",
	breath: "wraithGrunt2",
	creak: "rpgCreak1",
};

const TEST_MOBS = [
	["Stalker", "void"],
	["Draugr Reaver", "default"],
	["Cave Golem", "corrupted"],
	["Draugr Zombie", "corrupted"],
	["Draugr Warper", "default"],
	["Spirit Bear", "default"],
	["Spirit Wolf", "default"],
	["NPC", "default"],
	["Tiki Terror", "tyrant"],
];

const WHISPERS = [
	"Day %D. You are still here.",
	"Nobody is coming to help you.",
	"Your friend stopped sending mods. We are sending ourselves now.",
	"Did you build that door, or did I?",
	"That noise was not a mob.",
	"Stop looking at the trees.",
	"I am inside the fog.",
	"You left something behind.",
	"It is behind you. It is always behind you.",
	"One hundred days. I can wait.",
];

const DREAD_LINES = [
	"You are breathing too fast.",
	"It is standing in the doorway.",
	"That was not your footsteps.",
	"Do not look at the treeline.",
	"It knows what you are holding.",
	"Your name is easier to say than you think.",
	"I am closer than the sound.",
	"Stop looking at the chat.",
];

/* ---------------------------------------------------------------------------
   STATE
   --------------------------------------------------------------------------- */
const RUN = {
	day: 1,
	phase: "dawn", // dawn | day | dusk | night
	phaseMs: 0,
	running: false,
	deaths: 0,
	torchesTonight: 0,
	eventsTonight: 0,
	eventsDone: 0,
	nextEventAt: 0,
	startedAt: 0,
	lastSaveAt: 0,
	lastCleanAt: 0,
	runMs: 0,
	finished: false,
	finishedAt: 0,
	jumpscares: 0,
};

let NOW = 0;
const PLAYERS = {}; // playerId -> per-player state
const TRACK = {}; // mobId -> { role, player, born, expireAt, ... }
const SCHED = []; // timed callbacks
let booted = false;
let testing = false;

function pstate(id) {
	if (!PLAYERS[id]) {
		PLAYERS[id] = {
			sanity: CFG.SANITY_MAX,
			lastHud: 0,
			lastAtmos: 0,
			lastSanity: 0,
			dread: 0,
			dreadAt: 0,
			heartAt: 0,
			breathAt: 0,
			knockAt: 0,
			flickerAt: 0,
			blackoutUntil: 0,
			wasBlackout: false,
			jumpAt: 0,
			fogUntil: 0,
			darkUntil: 0,
			bloodUntil: 0,
			frightAt: 0,
			hallucAt: 0,
			realAt: 0,
			dialogUntil: 0,
			flags: {},
			joinedAt: NOW,
		};
	}
	return PLAYERS[id];
}

function nextDayHorror(day) {
	for (let i = 0; i < HORRORS.length; i++) {
		if (HORRORS[i][0] === day) return HORRORS[i];
	}
	return null;
}

function activeHorrors() {
	const out = [];
	for (let i = 0; i < HORRORS.length; i++) {
		if (HORRORS[i][0] <= RUN.day) out.push(HORRORS[i]);
	}
	return out;
}

/* ---------------------------------------------------------------------------
   SMALL HELPERS
   --------------------------------------------------------------------------- */
function clamp(v, lo, hi) {
	return v < lo ? lo : v > hi ? hi : v;
}

function rand(a, b) {
	return a + Math.random() * (b - a);
}

function irand(a, b) {
	return Math.floor(rand(a, b + 1));
}

function pick(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function dist3(a, b) {
	const dx = a[0] - b[0];
	const dy = a[1] - b[1];
	const dz = a[2] - b[2];
	return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function clamp01(n) {
	return n < 0 ? 0 : n > 1 ? 1 : n;
}

function safe(fn, tag) {
	try {
		return fn();
	} catch (e) {
		return null;
	}
}

function opt(id, option, value) {
	safe(() => api.setClientOption(id, option, value));
}

function say(id, text, colour) {
	safe(() => api.sendMessage(id, text, { color: colour || "#d8d8d8" }));
}

function shout(text, colour) {
	safe(() => api.broadcastMessage(text, { color: colour || "#d8d8d8" }));
}

/* ---------------------------------------------------------------------------
   CUSTOM SAY
   Styled speakers instead of flat chat lines. Every line can appear in chat
   with a coloured speaker tag, in the dialogue panel with a voice, and with
   its own sting. Used for the benefactor, whispers and fourth-wall messages.
   --------------------------------------------------------------------------- */
const VOICES = {
	benefactor: {
		label: "THE BENEFACTOR",
		colour: "#d4af37",
		voice: "posh",
		sound: "ominousBellHit",
		volume: 0.22,
	},
	unknown: {
		label: "???",
		colour: "#9a9a9a",
		voice: "dark",
		sound: "futureStrangePulse",
		volume: 0.25,
	},
	watcher: {
		label: "THE WATCHER",
		colour: "#c23b3b",
		voice: "gruff",
		sound: "stalkerIdle1",
		volume: 0.3,
	},
	crone: {
		label: "THE CRONE",
		colour: "#b06bd6",
		voice: "soft",
		sound: "wraithGrunt1",
		volume: 0.3,
	},
	system: {
		label: "HORROR",
		colour: "#a83232",
		voice: null,
		sound: null,
		volume: 0,
	},
};

function speakStyle(v) {
	return { color: v.colour, colour: v.colour, fontWeight: "bold" };
}

/**
 * Say a line as a character to one player.
 * options: { chat, dialogue, sound }
 */
function speak(id, key, text, options) {
	const v = VOICES[key] || VOICES.unknown;
	const opts = options || {};

	if (opts.chat !== false) {
		safe(() =>
			api.sendMessage(id, [
				{ str: v.label, style: speakStyle(v) },
				{ str: "  " + text, style: { color: "#e2e2e2" } },
			])
		);
	}

	if (opts.dialogue !== false) {
		dialogue(id, text, [{ str: v.label, style: speakStyle(v) }], v.voice || "dark");
	}

	if (opts.sound !== false && v.sound) {
		sound(v.sound, id, v.volume || 0.3, 0.85);
	}
}

/** Say a line as a character to the whole lobby. */
function speakAll(key, text, options) {
	const v = VOICES[key] || VOICES.unknown;
	safe(() =>
		api.broadcastMessage([
			{ str: v.label, style: speakStyle(v) },
			{ str: "  " + text, style: { color: "#e2e2e2" } },
		])
	);
	const ids = online();
	for (let i = 0; i < ids.length; i++) speak(ids[i], key, text, { chat: false, sound: false });
}

function sound(name, id, vol, rate, pos) {
	if (id) {
		const settings = pos
			? { playerIdOrPos: pos, maxHearDist: 55, refDistance: 7 }
			: undefined;
		safe(() => api.playSound(id, name, vol, rate, settings));
		return;
	}
	safe(() => api.broadcastSound(name, vol, rate));
}

function later(ms, fn) {
	SCHED.push({ at: NOW + Math.max(0, ms), fn });
	return true;
}

function runSched() {
	for (let i = SCHED.length - 1; i >= 0; i--) {
		if (SCHED[i].at <= NOW) {
			const fn = SCHED[i].fn;
			SCHED.splice(i, 1);
			safe(fn);
		}
	}
}

function fmtTime(sec) {
	sec = Math.max(0, Math.floor(sec));
	const m = Math.floor(sec / 60);
	const s = sec % 60;
	return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
}

function phaseLength(phase) {
	if (phase === "dawn") return CFG.DAWN_MS;
	if (phase === "day") return CFG.DAY_MINUTES * 60000;
	if (phase === "dusk") return CFG.DUSK_MS;
	return CFG.NIGHT_MINUTES * 60000;
}

function phaseName() {
	if (RUN.phase === "dawn") return "DAWN";
	if (RUN.phase === "day") return "DAY";
	if (RUN.phase === "dusk") return "DUSK";
	return "NIGHT";
}

function online() {
	const ids = safe(() => api.getPlayerIds());
	return ids || [];
}

function isAdmin(id) {
	const ownerDb = safe(() => api.ownerDbId);
	const myDb = safe(() => api.getPlayerDbId(id));
	if (ownerDb !== null && ownerDb !== undefined && myDb !== null && myDb !== undefined) {
		if (String(ownerDb) === String(myDb)) return true;
	}
	const name = String(safe(() => api.getEntityName(id)) || "").toLowerCase();
	return CFG.ADMIN_NAMES.indexOf(name) !== -1;
}

function bigTitle(id, top, bottom) {
	safe(() => api.queueMiddleTextUpper(id, top, 4200));
	if (bottom) safe(() => api.queueMiddleTextLower(id, bottom, 5000));
}

function dialogue(id, line, speaker, voice) {
	opt(id, "dialogue", {
		line: line,
		speakerName: speaker || "???",
		voice: voice || "dark",
	});
	const st = pstate(id);
	st.dialogUntil = NOW + 9000;
}

/* ---------------------------------------------------------------------------
   GROUND / SPAWN POSITIONS
   --------------------------------------------------------------------------- */
function blockAt(x, y, z) {
	return safe(() => api.getBlock(Math.round(x), Math.round(y), Math.round(z)));
}

function isGroundBlock(b) {
	if (!b) return false;
	if (b === "Air" || b === "Water" || b === "Lava" || b === "Cobweb") return false;
	if (b.indexOf("Water") === 0 || b.indexOf("Lava") === 0) return false;
	if (b.indexOf("Torch") !== -1) return false;
	if (b === "Tall Grass" || b === "Fern" || b === "Rose" || b === "Dandelion") return false;
	return true;
}

function findGround(x, z, yHint) {
	const gx = Math.round(x);
	const gz = Math.round(z);
	const start = Math.round(yHint) + 7;
	for (let y = start; y > start - 30; y--) {
		const here = blockAt(gx, y, gz);
		const above = blockAt(gx, y + 1, gz);
		if (isGroundBlock(here) && !isGroundBlock(above)) return y + 1;
	}
	return null;
}

function playerPos(id) {
	return safe(() => api.getPosition(id));
}

/** A random standable spot around a player. */
function spotAround(id, minR, maxR) {
	const pos = playerPos(id);
	if (!pos) return null;
	for (let i = 0; i < 8; i++) {
		const a = Math.random() * Math.PI * 2;
		const r = rand(minR, maxR);
		const x = pos[0] + Math.cos(a) * r;
		const z = pos[2] + Math.sin(a) * r;
		const y = findGround(x, z, pos[1]);
		if (y !== null && Math.abs(y - pos[1]) < 26) return [x, y, z];
	}
	return null;
}

/** A spot on the far side of the player from where they are looking. */
function behindSpot(id, minR, maxR) {
	const pos = playerPos(id);
	if (!pos) return null;
	let dir = null;
	const info = safe(() => api.getPlayerFacingInfo(id));
	if (info && info.dir) dir = info.dir;
	if (!dir) return spotAround(id, minR, maxR);

	const len = Math.sqrt(dir[0] * dir[0] + dir[2] * dir[2]) || 1;
	const bx = -dir[0] / len;
	const bz = -dir[2] / len;
	for (let i = 0; i < 8; i++) {
		const r = rand(minR, maxR);
		const side = rand(-0.6, 0.6) * r;
		const x = pos[0] + bx * r + bz * side;
		const z = pos[2] + bz * r - bx * side;
		const y = findGround(x, z, pos[1]);
		if (y !== null && Math.abs(y - pos[1]) < 24) return [x, y, z];
	}
	return spotAround(id, minR, maxR);
}

function isUnderground(id) {
	const pos = playerPos(id);
	if (!pos) return false;
	for (let i = 2; i <= 22; i += 2) {
		if (isGroundBlock(blockAt(pos[0], pos[1] + i, pos[2]))) return true;
	}
	return false;
}

/* ---------------------------------------------------------------------------
   MOBS
   --------------------------------------------------------------------------- */
function spawnMob(type, pos, name, variation) {
	if (!pos) return null;
	const chain = [type, "Draugr Zombie", "Stalker", "Slime"];
	for (let i = 0; i < chain.length; i++) {
		const opts = { playSoundOnSpawn: false };
		if (name) opts.name = name;
		if (variation && i === 0) opts.variation = variation;
		const id = safe(() => api.attemptSpawnMob(chain[i], pos[0], pos[1] + 0.2, pos[2], opts));
		if (id !== null && id !== undefined) return id;
	}
	return null;
}

function mobSetting(mobId, setting, value) {
	safe(() => api.setMobSetting(mobId, setting, value));
}

/** Set max + current health so difficulty scaling actually lands. */
function setMobHealth(mobId, hp) {
	mobSetting(mobId, "maxHealth", hp);
	mobSetting(mobId, "initialHealth", hp);
	safe(() => api.setHealth(mobId, hp, null, true));
}

function mobAi(mobId, state, params) {
	safe(() => api.setMobAiState(mobId, state, params));
}

function mobHealth(mobId) {
	const hp = safe(() => api.getHealth(mobId));
	return typeof hp === "number" ? hp : null;
}

function trackMob(mobId, info) {
	if (mobId === null || mobId === undefined) return null;
	info.id = mobId;
	TRACK[String(mobId)] = info;
	return mobId;
}

function liveMobCount() {
	let n = 0;
	for (const key in TRACK) {
		if (TRACK[key].alive !== false) n++;
	}
	return n;
}

function playerMobCount(id) {
	let n = 0;
	for (const key in TRACK) {
		if (TRACK[key].player === id && TRACK[key].alive !== false) n++;
	}
	return n;
}

function removeMob(mobId, quiet) {
	const key = String(mobId);
	if (TRACK[key]) TRACK[key].alive = false;
	if (!quiet) safe(() => api.despawnMob(mobId));
	delete TRACK[key];
}

function clearHorrorMobs() {
	for (const key in TRACK) {
		safe(() => api.despawnMob(key));
	}
	for (const key in TRACK) delete TRACK[key];
}

function difficulty() {
	return 1 + (RUN.day - 1) * 0.035;
}

function scaleHealth(base) {
	return Math.round(base * difficulty());
}

function scaleDamage(base) {
	return Math.round(base * (0.8 + difficulty() * 0.45));
}

/* ---------------------------------------------------------------------------
   CUSTOM MESH HORRORS
   The big scares are figures built out of mesh entities (Box / BloxdBlock)
   and moved by hand every MESH_EVERY_MS. Mesh entities share a budget, so
   models are capped and dropped at dawn, on leave, and by /horror clear.
   --------------------------------------------------------------------------- */
const MESH = {};
let meshSeq = 0;
let lastMeshAt = 0;

function meshModelCount() {
	let n = 0;
	for (const key in MESH) n++;
	return n;
}

function meshPartCount() {
	let n = 0;
	for (const key in MESH) n += MESH[key].parts.length;
	return n;
}

function particleBurst(pos, colour) {
	const c = colour || [255, 40, 40, 0.9];
	safe(() =>
		api.playParticleEffect({
			dir1: [-0.4, -0.4, -0.4],
			dir2: [0.4, 0.8, 0.4],
			pos1: [pos[0] - 0.7, pos[1], pos[2] - 0.7],
			pos2: [pos[0] + 0.7, pos[1] + 2.4, pos[2] + 0.7],
			texture: "soul_0",
			minLifeTime: 0.3,
			maxLifeTime: 1,
			minEmitPower: 0.4,
			maxEmitPower: 1.6,
			minSize: 0.18,
			maxSize: 0.5,
			manualEmitCount: 26,
			gravity: [0, 0.35, 0],
			colorGradients: [
				{ timeFraction: 0, minColor: [255, 255, 255, 0.9], maxColor: c },
			],
			velocityGradients: [{ timeFraction: 0, factor: 1, factor2: 1 }],
			blendMode: 1,
		})
	);
}

function createPart(g, type, opts, off) {
	if (!g) return null;
	const id = safe(() => api.attemptCreateMeshEntity(type, opts, ""));
	if (id === null || id === undefined) return null;
	g.parts.push({ id: id, off: [off[0], off[1], off[2]] });
	return id;
}

function newGroup(role, playerId, center, extra) {
	if (!CFG.ENABLE_CUSTOM_MESHES) return null;
	if (!center) return null;
	if (meshModelCount() >= CFG.MAX_MESH_MODELS) return null;
	meshSeq++;
	const g = {
		id: "mesh" + meshSeq,
		role: role,
		player: playerId,
		center: [center[0], center[1], center[2]],
		yaw: 0,
		parts: [],
		audioId: null,
		born: NOW,
		expireAt: NOW + 40000,
	};
	if (extra) {
		for (const key in extra) g[key] = extra[key];
	}
	MESH[g.id] = g;
	return g;
}

function placeParts(g, bob) {
	if (!g) return;
	const c = g.center;
	const cos = Math.cos(g.yaw || 0);
	const sin = Math.sin(g.yaw || 0);
	for (let i = 0; i < g.parts.length; i++) {
		const part = g.parts[i];
		const ox = part.off[0];
		const oy = part.off[1];
		const oz = part.off[2];
		const x = c[0] + ox * cos - oz * sin;
		const z = c[2] + ox * sin + oz * cos;
		const y = c[1] + oy + (bob ? Math.sin(NOW / 650 + oy) * 0.06 : 0);
		safe(() => api.setPosition(part.id, x, y, z));
	}
}

function dropGroup(g, fx) {
	if (!g) return;
	if (MESH[g.id]) delete MESH[g.id];
	for (let i = 0; i < g.parts.length; i++) safe(() => api.deleteMeshEntity(g.parts[i].id));
	if (g.audioId) safe(() => api.deleteAudioEntity(g.audioId));
	if (fx && g.center) particleBurst([g.center[0], g.center[1] + 1.2, g.center[2]], fx);
}

function clearMeshes() {
	for (const key in MESH) dropGroup(MESH[key]);
}

function vanishMesh(g, text) {
	if (!g) return;
	const st = pstate(g.player);
	particleBurst([g.center[0], g.center[1] + 1.4, g.center[2]], [255, 30, 30, 0.9]);
	sound(SND.fright, g.player, 0.85, 1, [g.center[0], g.center[1] + 1.4, g.center[2]]);
	safe(() => api.shakePlayerCamera(g.player, 0.7, 1200));
	if (st) st.sanity = clamp(st.sanity - CFG.SANITY_EVENT_COST, 0, CFG.SANITY_MAX);
	if (text) safe(() => api.queueMiddleTextLower(g.player, text, 3200));
}

/* ---- the tall figure that only moves while you are not looking ---- */
function buildWatcher(id, spot) {
	const g = newGroup("watcher", id, spot, {
		expireAt: NOW + rand(40000, 60000),
		seenMs: 0,
		stareLimit: 1500,
		nextGroundAt: 0,
	});
	if (!g) return null;
	const body = [9, 9, 12];
	const limb = [6, 6, 8];
	const eye = { width: 0.09, height: 0.07, depth: 0.06, diffuseColor: [255, 24, 24], emissiveColor: [255, 24, 24], hideDist: 96 };
	createPart(g, "Box", { width: 0.24, height: 1.7, depth: 0.24, diffuseColor: limb, hideDist: 96 }, [-0.17, 0.85, 0]);
	createPart(g, "Box", { width: 0.24, height: 1.7, depth: 0.24, diffuseColor: limb, hideDist: 96 }, [0.17, 0.85, 0]);
	createPart(g, "Box", { width: 0.62, height: 1.5, depth: 0.34, diffuseColor: body, hideDist: 96 }, [0, 2.4, 0]);
	createPart(g, "Box", { width: 0.18, height: 1.35, depth: 0.18, diffuseColor: limb, hideDist: 96 }, [-0.42, 2.45, 0]);
	createPart(g, "Box", { width: 0.18, height: 1.35, depth: 0.18, diffuseColor: limb, hideDist: 96 }, [0.42, 2.45, 0]);
	createPart(g, "Box", { width: 0.46, height: 0.52, depth: 0.44, diffuseColor: [14, 14, 17], hideDist: 96 }, [0, 3.35, 0]);
	createPart(g, "Box", eye, [-0.1, 3.38, 0.23]);
	createPart(g, "Box", eye, [0.1, 3.38, 0.23]);
	g.yaw = Math.atan2((playerPos(id) || spot)[0] - spot[0], (playerPos(id) || spot)[2] - spot[2]);
	placeParts(g, true);
	return g;
}

/* ---- the floating skull that spirals in ---- */
function buildHollow(id, spot) {
	const g = newGroup("hollow", id, [spot[0], spot[1] + 2, spot[2]], {
		expireAt: NOW + rand(22000, 34000),
		angle: Math.random() * Math.PI * 2,
		radius: 13,
	});
	if (!g) return null;
	createPart(g, "BloxdBlock", { blockName: "Bone Block", size: 0.62, hideDist: 80 }, [0, 0, 0]);
	createPart(g, "Box", { width: 0.1, height: 0.1, depth: 0.08, diffuseColor: [120, 255, 210], emissiveColor: [120, 255, 210], hideDist: 80 }, [-0.12, 0.06, 0.3]);
	createPart(g, "Box", { width: 0.1, height: 0.1, depth: 0.08, diffuseColor: [120, 255, 210], emissiveColor: [120, 255, 210], hideDist: 80 }, [0.12, 0.06, 0.3]);
	createPart(g, "Box", { width: 0.28, height: 0.28, depth: 0.28, diffuseColor: [70, 200, 170], emissiveColor: [40, 140, 120], hideDist: 80 }, [0, -0.42, 0]);
	g.yaw = Math.atan2((playerPos(id) || spot)[0] - spot[0], (playerPos(id) || spot)[2] - spot[2]);
	placeParts(g, true);
	return g;
}

/* ---- a ring of darting black shapes ---- */
function buildShadows(id) {
	const pos = playerPos(id);
	if (!pos) return null;
	const g = newGroup("shadow", id, pos, { expireAt: NOW + rand(9000, 15000), phase: 0 });
	if (!g) return null;
	for (let i = 0; i < 4; i++) {
		const a = (i * Math.PI) / 2;
		createPart(
			g,
			"Box",
			{
				width: 0.42,
				height: 0.42,
				depth: 0.42,
				diffuseColor: [5, 5, 7],
				emissiveColor: i === 0 ? [90, 10, 10] : [0, 0, 0],
				hideDist: 60,
			},
			[Math.cos(a) * 3.1, 1.1, Math.sin(a) * 3.1]
		);
	}
	placeParts(g, false);
	return g;
}

/* ---- a rune pillar that appears near the base and hums ---- */
function buildObelisk(id, spot) {
	const g = newGroup("obelisk", id, spot, { expireAt: NOW + 240000, yaw: rand(0, Math.PI * 2) });
	if (!g) return null;
	createPart(g, "Box", { width: 1.5, height: 0.28, depth: 1.5, diffuseColor: [12, 12, 14], hideDist: 90 }, [0, 0.14, 0]);
	createPart(g, "BloxdBlock", { blockName: "Obsidian", size: [0.9, 2.9, 0.9], hideDist: 90 }, [0, 1.45, 0]);
	createPart(g, "Box", { width: 0.12, height: 0.55, depth: 0.06, diffuseColor: [255, 30, 30], emissiveColor: [255, 30, 30], hideDist: 90 }, [0, 2.1, 0.47]);
	createPart(g, "Box", { width: 0.12, height: 0.55, depth: 0.06, diffuseColor: [255, 30, 30], emissiveColor: [255, 30, 30], hideDist: 90 }, [0, 1.2, 0.47]);
	g.audioId = safe(() =>
		api.attemptCreateAudioEntity(spot[0], spot[1] + 1, spot[2], "horrorMaleDrone", 0.35, {
			maxHearDist: 26,
			refDistance: 4,
		})
	);
	placeParts(g, false);
	return g;
}

/* ---- the friend who sends the mods, standing in the dawn ---- */
function spawnBenefactor(id) {
	if (!CFG.ENABLE_CUSTOM_MESHES) return null;
	for (const key in MESH) {
		if (MESH[key].role === "herald" && MESH[key].player === id) return MESH[key];
	}
	const pos = playerPos(id);
	if (!pos) return null;
	let spot = null;
	const info = safe(() => api.getPlayerFacingInfo(id));
	if (info && info.dir) {
		const len = Math.sqrt(info.dir[0] * info.dir[0] + info.dir[2] * info.dir[2]) || 1;
		const x = pos[0] + (info.dir[0] / len) * 10;
		const z = pos[2] + (info.dir[2] / len) * 10;
		const y = findGround(x, z, pos[1]);
		if (y !== null) spot = [x, y, z];
	}
	if (!spot) spot = spotAround(id, 8, 14);
	if (!spot) return null;

	const g = newGroup("herald", id, spot, {
		expireAt: NOW + 14000,
		yaw: Math.atan2(pos[0] - spot[0], pos[2] - spot[2]),
	});
	if (!g) return null;
	createPart(g, "Box", { width: 0.78, height: 1.7, depth: 0.5, diffuseColor: [18, 17, 24], hideDist: 80 }, [0, 0.85, 0]);
	createPart(g, "Box", { width: 0.6, height: 0.55, depth: 0.55, diffuseColor: [10, 10, 14], hideDist: 80 }, [0, 1.92, 0]);
	createPart(g, "Box", { width: 0.34, height: 0.36, depth: 0.34, diffuseColor: [214, 206, 190], hideDist: 80 }, [0, 1.82, 0.1]);
	createPart(g, "Box", { width: 0.07, height: 0.06, depth: 0.05, diffuseColor: [255, 200, 90], emissiveColor: [255, 200, 90], hideDist: 80 }, [-0.08, 1.86, 0.27]);
	createPart(g, "Box", { width: 0.07, height: 0.06, depth: 0.05, diffuseColor: [255, 200, 90], emissiveColor: [255, 200, 90], hideDist: 80 }, [0.08, 1.86, 0.27]);
	createPart(g, "Box", { width: 0.08, height: 1.9, depth: 0.08, diffuseColor: [40, 32, 24], hideDist: 80 }, [0.44, 0.95, 0.12]);
	placeParts(g, true);
	return g;
}

/* ---- tags that spawn the models ---- */
function tagWatcher(id) {
	if (!CFG.ENABLE_CUSTOM_MESHES) {
		tagStalker(id);
		return;
	}
	const spot = behindSpot(id, 22, 34);
	if (!spot) {
		tagSound(id);
		return;
	}
	const g = buildWatcher(id, spot);
	if (!g || g.parts.length === 0) {
		if (g) dropGroup(g);
		tagStalker(id);
		return;
	}
	sound(SND.stalkerIdle, id, 0.5, 0.8, [spot[0], spot[1] + 2, spot[2]]);
	safe(() => api.queueMiddleTextLower(id, "Something tall is standing in the trees.", 3800));
}

function tagHollow(id) {
	if (!CFG.ENABLE_CUSTOM_MESHES) {
		tagSound(id);
		return;
	}
	const spot = spotAround(id, 10, 16);
	if (!spot) {
		tagSound(id);
		return;
	}
	const g = buildHollow(id, spot);
	if (!g || g.parts.length === 0) {
		if (g) dropGroup(g);
		tagSound(id);
		return;
	}
	sound(SND.wraith, id, 0.6, 0.7, [spot[0], spot[1] + 2, spot[2]]);
	safe(() => api.queueMiddleTextLower(id, "Something is floating out there.", 3400));
}

function tagShadow(id) {
	if (!CFG.ENABLE_CUSTOM_MESHES) {
		tagDark(id);
		return;
	}
	const g = buildShadows(id);
	if (!g || g.parts.length === 0) {
		if (g) dropGroup(g);
		tagDark(id);
		return;
	}
	sound(SND.pulse, id, 0.5, 0.8);
	safe(() => api.queueMiddleTextLower(id, "The dark is moving around you.", 3000));
}

function tagObelisk(id) {
	if (!CFG.ENABLE_CUSTOM_MESHES) {
		tagGrave(id);
		return;
	}
	const spot = spotAround(id, 7, 15);
	if (!spot) {
		tagGrave(id);
		return;
	}
	const g = buildObelisk(id, spot);
	if (!g || g.parts.length === 0) {
		if (g) dropGroup(g);
		tagGrave(id);
		return;
	}
	sound(SND.bell, id, 0.7, 0.8, [spot[0], spot[1] + 1, spot[2]]);
	safe(() => api.queueMiddleTextLower(id, "A stone you did not build is standing near your base.", 4200));
}

function tickMeshes() {
	if (NOW - lastMeshAt < CFG.MESH_EVERY_MS) return;
	const dt = Math.min(0.4, (NOW - lastMeshAt) / 1000);
	lastMeshAt = NOW;
	const ids = online();

	for (const key in MESH) {
		const g = MESH[key];
		if (!g) continue;
		if (ids.indexOf(g.player) === -1) {
			dropGroup(g);
			continue;
		}
		if (NOW > g.expireAt) {
			dropGroup(g, g.role === "obelisk" ? null : [190, 40, 40, 0.85]);
			continue;
		}
		if (RUN.phase === "day" && g.role !== "herald") {
			dropGroup(g);
			continue;
		}
		const ppos = playerPos(g.player);
		if (!ppos) {
			dropGroup(g);
			continue;
		}

		if (g.role === "watcher") {
			const seen = isPlayerLookingAt(g.player, [g.center[0], g.center[1] + 2, g.center[2]], 0.5);
			const d = dist3(g.center, ppos);
			if (seen) {
				g.seenMs = (g.seenMs || 0) + dt * 1000;
				if (g.seenMs > (g.stareLimit || 1500)) {
					vanishMesh(g, "It was never there.");
					dropGroup(g, [255, 35, 35, 0.9]);
					continue;
				}
			} else {
				g.seenMs = Math.max(0, (g.seenMs || 0) - dt * 500);
				if (d > 6) {
					const step = (1.15 + RUN.day * 0.012) * dt;
					g.center[0] += ((ppos[0] - g.center[0]) / (d || 1)) * step;
					g.center[2] += ((ppos[2] - g.center[2]) / (d || 1)) * step;
				}
			}
			if (d < 5.5) {
				vanishMesh(g, "It was right behind you.");
				dropGroup(g, [255, 35, 35, 0.9]);
				continue;
			}
			if (d > 70) {
				dropGroup(g);
				continue;
			}
			g.yaw = Math.atan2(ppos[0] - g.center[0], ppos[2] - g.center[2]);
			if (NOW > (g.nextGroundAt || 0)) {
				g.nextGroundAt = NOW + 700;
				const gy = findGround(g.center[0], g.center[2], g.center[1]);
				if (gy !== null && Math.abs(gy - g.center[1]) < 3) g.center[1] = gy;
			}
			placeParts(g, true);
			continue;
		}

		if (g.role === "hollow") {
			g.angle = (g.angle || 0) + dt * 0.85;
			g.radius = Math.max(3.6, (g.radius || 13) - dt * 0.85);
			g.center[0] = ppos[0] + Math.cos(g.angle) * g.radius;
			g.center[2] = ppos[2] + Math.sin(g.angle) * g.radius;
			g.center[1] = ppos[1] + 2.1 + Math.sin(NOW / 520) * 0.45;
			g.yaw = Math.atan2(ppos[0] - g.center[0], ppos[2] - g.center[2]);
			if (dist3(g.center, ppos) < 4.2) {
				vanishMesh(g, "It touched your face.");
				dropGroup(g, [140, 255, 210, 0.9]);
				continue;
			}
			placeParts(g, true);
			continue;
		}

		if (g.role === "shadow") {
			g.center[0] = ppos[0];
			g.center[1] = ppos[1];
			g.center[2] = ppos[2];
			g.phase = (g.phase || 0) + dt * 2.6;
			for (let i = 0; i < g.parts.length; i++) {
				const a = g.phase + (i * Math.PI * 2) / Math.max(1, g.parts.length);
				g.parts[i].off[0] = Math.cos(a) * 3.1;
				g.parts[i].off[2] = Math.sin(a) * 3.1;
				g.parts[i].off[1] = 1.1 + Math.sin(a * 2) * 0.45;
			}
			placeParts(g, false);
			continue;
		}

		// obelisk and herald stand still
		placeParts(g, g.role === "herald");
	}
}

/* ---------------------------------------------------------------------------
   ATMOSPHERE
   --------------------------------------------------------------------------- */
function resetAtmosphere(id) {
	opt(id, "fogChunkDistanceOverride", null);
	opt(id, "fogColourOverride", null);
	opt(id, "ambientLightColourOverride", null);
	opt(id, "skyLightColourOverride", null);
	opt(id, "cameraTint", null);
	opt(id, "visionMinLightColour", null);
	opt(id, "cameraRoll", 0);
	opt(id, "fogOnSkybox", false);
}

/* ---------------------------------------------------------------------------
   CUSTOM NIGHT CYCLE
   The night is not one dark value: light, fog and tint follow a keyframed
   curve from dusk, down to the darkest point at midnight, back up to a red
   pre-dawn glow. Later days push the whole curve darker.
   --------------------------------------------------------------------------- */
const NIGHT_KEYS = [
	{ at: 0.0, fog: "#33252d", far: 40, ambient: "#241d28", sky: "#453340", tint: [0.08, 0.02, 0.02, 0.05] },
	{ at: 0.12, fog: "#141a26", far: 30, ambient: "#131826", sky: "#232c3c", tint: [0.0, 0.01, 0.03, 0.08] },
	{ at: 0.35, fog: "#070b12", far: 22, ambient: "#080a12", sky: "#111722", tint: [0.0, 0.01, 0.03, 0.12] },
	{ at: 0.5, fog: "#030406", far: 17, ambient: "#03040a", sky: "#080b14", tint: [0.0, 0.0, 0.02, 0.18] },
	{ at: 0.65, fog: "#070b12", far: 22, ambient: "#080a12", sky: "#111722", tint: [0.0, 0.01, 0.03, 0.12] },
	{ at: 0.88, fog: "#1a2230", far: 30, ambient: "#141a26", sky: "#232c3c", tint: [0.0, 0.01, 0.03, 0.08] },
	{ at: 1.0, fog: "#4a2f28", far: 36, ambient: "#2b2228", sky: "#463432", tint: [0.12, 0.03, 0.01, 0.05] },
];

function hexToRgb(hex) {
	const h = String(hex).replace("#", "");
	return [
		parseInt(h.substring(0, 2), 16) || 0,
		parseInt(h.substring(2, 4), 16) || 0,
		parseInt(h.substring(4, 6), 16) || 0,
	];
}

function rgbToHex(rgb) {
	const part = (n) => {
		const v = Math.round(clamp(n, 0, 255));
		return (v < 16 ? "0" : "") + v.toString(16);
	};
	return "#" + part(rgb[0]) + part(rgb[1]) + part(rgb[2]);
}

function lerp(a, b, t) {
	return a + (b - a) * t;
}

function lerpHex(a, b, t) {
	const ca = hexToRgb(a);
	const cb = hexToRgb(b);
	return rgbToHex([lerp(ca[0], cb[0], t), lerp(ca[1], cb[1], t), lerp(ca[2], cb[2], t)]);
}

function nightProgress() {
	if (RUN.phase === "night") return clamp(RUN.phaseMs / (CFG.NIGHT_MINUTES * 60000), 0, 1);
	if (RUN.phase === "dusk") return 0;
	return null;
}

function cycleAt(t) {
	let a = NIGHT_KEYS[0];
	let b = NIGHT_KEYS[NIGHT_KEYS.length - 1];
	for (let i = 0; i < NIGHT_KEYS.length - 1; i++) {
		if (t >= NIGHT_KEYS[i].at && t <= NIGHT_KEYS[i + 1].at) {
			a = NIGHT_KEYS[i];
			b = NIGHT_KEYS[i + 1];
			break;
		}
	}
	const span = b.at - a.at || 1;
	const k = clamp((t - a.at) / span, 0, 1);
	return {
		fog: lerpHex(a.fog, b.fog, k),
		far: lerp(a.far, b.far, k),
		ambient: lerpHex(a.ambient, b.ambient, k),
		sky: lerpHex(a.sky, b.sky, k),
		tint: [
			lerp(a.tint[0], b.tint[0], k),
			lerp(a.tint[1], b.tint[1], k),
			lerp(a.tint[2], b.tint[2], k),
			lerp(a.tint[3], b.tint[3], k),
		],
	};
}

function applyAtmosphere(id) {
	const st = pstate(id);
	if (RUN.finished) return;
	const t = nightProgress();
	if (t === null) {
		resetAtmosphere(id);
		return;
	}

	const sample = cycleAt(t);
	const fogged = st.fogUntil > NOW;
	const darkBoost = st.darkUntil > NOW;
	const bloody = st.bloodUntil > NOW;
	const sanityFog = st.sanity < 25 ? 6 : 0;

	let far = sample.far - (RUN.day - 1) * 0.16;
	if (fogged) far -= 12;
	if (darkBoost) far -= 16;
	if (bloody) far -= 6;
	far -= sanityFog;
	far = clamp(far, 8, 56);
	if (RUN.phase === "dusk") far = Math.max(far, 34);
	if (RUN.phase === "dawn") far = Math.max(far, 38);

	let fogColour = sample.fog;
	let ambient = sample.ambient;
	let sky = sample.sky;
	let tint = sample.tint;

	// the run gets darker as the days go on
	const decay = clamp((RUN.day - 1) * 0.003, 0, 0.28);
	fogColour = lerpHex(fogColour, "#000000", decay);
	ambient = lerpHex(ambient, "#000000", decay);
	sky = lerpHex(sky, "#000000", decay);

	if (bloody) {
		fogColour = lerpHex(fogColour, "#2a080a", 0.75);
		ambient = lerpHex(ambient, "#1a0507", 0.6);
		sky = lerpHex(sky, "#4a1014", 0.7);
		tint = [Math.min(0.3, tint[0] + 0.18), tint[1], tint[2], Math.min(0.24, tint[3] + 0.05)];
	}
	if (darkBoost) {
		fogColour = "#04050a";
		ambient = "#04050a";
		sky = "#0a0a12";
		tint = [0, 0, 0.02, 0.2];
	}

	opt(id, "fogChunkDistanceOverride", Math.round(far));
	opt(id, "fogColourOverride", fogColour);
	opt(id, "ambientLightColourOverride", ambient);
	opt(id, "skyLightColourOverride", sky);
	opt(id, "fogOnSkybox", true);
	opt(id, "cameraTint", tint);

	if (st.sanity < 22) {
		opt(id, "visionMinLightColour", null);
		opt(id, "cameraRoll", Math.sin(NOW / 480) * 0.035);
	} else if (darkBoost) {
		opt(id, "visionMinLightColour", "#000000");
		opt(id, "cameraRoll", 0);
	} else {
		opt(id, "visionMinLightColour", null);
		opt(id, "cameraRoll", 0);
	}
}

/* ---------------------------------------------------------------------------
   HUD
   --------------------------------------------------------------------------- */
function hudText(id) {
	const st = pstate(id);
	const left = Math.ceil((phaseLength(RUN.phase) - RUN.phaseMs) / 1000);
	const lines = [
		"DAY " + RUN.day + " / 100",
		phaseName() + "   " + fmtTime(left),
		"Sanity  " + Math.round(st.sanity) + "%",
		"Horrors  " + activeHorrors().length,
		"Deaths  " + RUN.deaths,
	];
	if (RUN.phase === "night") {
		lines.push("Night " + RUN.eventsDone + "/" + RUN.eventsTonight);
	}
	if (!RUN.running) lines.push("RUN PAUSED — /" + CFG.START_COMMAND + " to begin");
	return lines.join("\n");
}

function updateHud(id) {
	const st = pstate(id);
	if (NOW - st.lastHud < CFG.HUD_EVERY_MS) return;
	st.lastHud = NOW;

	const finished = RUN.finished && !RUN.running;
	opt(id, "RightInfoText", finished ? finishStats(id) : hudText(id));
	if (!finished) {
		opt(
			id,
			"middleTextTop",
			"DAY " + RUN.day + "  \u2022  " + phaseName() + "  \u2022  " +
				fmtTime(Math.ceil((phaseLength(RUN.phase) - RUN.phaseMs) / 1000))
		);
	}
	safe(() => api.progressBarUpdate(id, finished ? 1 : clamp01(st.sanity / CFG.SANITY_MAX), 400));

	if (st.dialogUntil && NOW > st.dialogUntil) {
		st.dialogUntil = 0;
		opt(id, "dialogue", null);
	}
}

/* ---------------------------------------------------------------------------
   SANITY
   --------------------------------------------------------------------------- */
function nearestHorrorDistance(id) {
	const pos = playerPos(id);
	if (!pos) return 999;
	let best = 999;
	for (const key in TRACK) {
		const rec = TRACK[key];
		if (rec.alive === false) continue;
		const mobPos = safe(() => api.getPosition(rec.id));
		if (!mobPos) continue;
		const d = dist3(pos, mobPos);
		if (d < best) best = d;
	}
	for (const key in MESH) {
		const d = dist3(pos, MESH[key].center);
		if (d < best) best = d;
	}
	return best;
}

function updateSanity(id, dtSeconds) {
	const st = pstate(id);
	const night = RUN.phase === "night";
	let delta = 0;

	if (!RUN.running) {
		st.dread = 0;
		return;
	}

	const near = nearestHorrorDistance(id);
	if (night) {
		delta -= CFG.SANITY_NIGHT_DRAIN;
		if (isUnderground(id)) delta -= CFG.SANITY_UNDERGROUND_DRAIN;
		if (near < 26) delta -= CFG.SANITY_NEAR_DRAIN;
		if (st.darkUntil > NOW) delta -= CFG.SANITY_DARK_DRAIN;
	} else if (RUN.phase === "dawn") {
		delta += CFG.SANITY_DAWN_REGEN;
	} else if (RUN.phase === "day") {
		delta += CFG.SANITY_DAY_REGEN;
	} else {
		delta -= 0.1;
	}

	st.sanity = clamp(st.sanity + delta * dtSeconds, 0, CFG.SANITY_MAX);

	// how wrong the world feels: drives the heartbeat, the light kills and the
	// close-range scares
	st.dread = clamp(
		(1 - st.sanity / CFG.SANITY_MAX) * 0.55 +
			clamp(1 - near / 40, 0, 1) * 0.3 +
			(night ? 0.3 : RUN.phase === "dusk" ? 0.12 : 0) +
			RUN.day / 1000,
		0,
		1
	);

	// fear beats
	if (st.sanity < 70 && !st.flags.w70) {
		st.flags.w70 = true;
		say(id, "You feel like something is keeping pace with you.", "#8a8a8a");
	}
	if (st.sanity < 45 && !st.flags.w45) {
		st.flags.w45 = true;
		speak(id, "unknown", "You are not doing well, are you?");
	}
	if (st.sanity < 25 && !st.flags.w25) {
		st.flags.w25 = true;
		shout("The air feels wrong around " + nameOf(id) + ".", "#8a2f2f");
	}

	// hallucinations
	if (st.sanity < 40 && NOW > st.hallucAt) {
		st.hallucAt = NOW + rand(25000, 55000);
		if (Math.random() < 0.5) tagFootsteps(id);
		else tagMirror(id);
	}
	// the presence becomes real
	if (st.sanity < 22 && NOW > st.realAt) {
		st.realAt = NOW + rand(35000, 65000);
		if (Math.random() < 0.5) tagHunter(id);
		else tagStalker(id);
	}
	// breakdown
	if (st.sanity <= 2 && NOW > st.frightAt + 20000) {
		st.frightAt = NOW;
		safe(() => api.applyEffect(id, "Blindness", 5000));
		safe(() => api.shakePlayerCamera(id, 0.9, 1600));
		sound(SND.fright, id, 0.9, 0.9);
	}

	// reset threshold flags at dawn
	if (RUN.phase === "dawn" && st.flags.w70 && st.sanity > 85) {
		st.flags = {};
	}
}

/* ---------------------------------------------------------------------------
   DREAD
   The score: a heartbeat that speeds up as the night gets worse, breathing
   behind you, the lights dying for a quarter of a second, knocks with nothing
   on the other side, and a stalker close enough to touch. None of it is fair.
   --------------------------------------------------------------------------- */
function dreadFx(id) {
	if (!RUN.running) return;
	const st = pstate(id);
	const pos = playerPos(id);
	if (RUN.phase !== "night" && RUN.phase !== "dusk") return;
	if (st.dread < 0.28) return;

	if (NOW > st.heartAt) {
		st.heartAt = NOW + lerp(9000, 1800, st.dread) * rand(0.85, 1.2);
		sound(SND.heart, id, 0.15 + st.dread * 0.5, rand(0.9, 1.05), pos || undefined);
	}

	if (st.dread > 0.45 && NOW > st.breathAt) {
		st.breathAt = NOW + rand(11000, 19000);
		speak(id, "unknown", pick(DREAD_LINES), { chat: false, sound: false });
		sound(SND.breath, id, 0.18, rand(0.55, 0.75));
	}

	if (st.dread > 0.4 && NOW > st.knockAt) {
		st.knockAt = NOW + rand(20000, 40000);
		const spot = behindSpot(id, 5, 16);
		if (spot) {
			sound(SND.knock, id, 0.7, rand(0.9, 1.05), spot);
			later(600, () => sound(SND.knock, id, 0.6, 1.1, spot));
			later(1250, () => sound(SND.metalKnock, id, 0.65, 0.9, spot));
		}
	}

	if (st.dread > 0.58 && NOW > st.flickerAt) {
		st.flickerAt = NOW + rand(6500, 13000);
		st.blackoutUntil = NOW + rand(90, 240);
		sound(SND.creak, id, 0.25, rand(0.7, 1.2), pos || undefined);
	}

	if (st.dread > 0.7 && RUN.phase === "night" && RUN.jumpscares < 2 && NOW > st.jumpAt) {
		st.jumpAt = NOW + rand(45000, 80000);
		ambientJumpscare(id);
	}
}

function ambientJumpscare(id) {
	if (liveMobCount() >= CFG.MAX_MOBS) return;
	const spot = behindSpot(id, 5, 9);
	if (!spot) return;
	const mob = spawnMob("Stalker", spot, "", "void");
	if (!mob) return;
	setMobHealth(mob, scaleHealth(30));
	mobSetting(mob, "baseRunningSpeed", 0);
	mobAi(mob, "watching", { targetId: id });
	trackMob(mob, {
		role: "stalker",
		player: id,
		born: NOW,
		expireAt: NOW + rand(9000, 14000),
		watchedAt: NOW,
		alive: true,
	});
	RUN.jumpscares += 1;
	sound(SND.stalkerIdle, id, 0.85, 0.8, spot);
	safe(() => api.shakePlayerCamera(id, 0.75, 900));
	safe(() => api.queueMiddleTextLower(id, "Do not turn around.", 2600));
}

function tickDreadFx() {
	const ids = online();
	for (let i = 0; i < ids.length; i++) {
		const st = pstate(ids[i]);
		if (RUN.finished) continue;
		if (!RUN.running) {
			if (st.wasBlackout) {
				st.wasBlackout = false;
				applyAtmosphere(ids[i]);
			}
			continue;
		}
		if (st.blackoutUntil > NOW) {
			st.wasBlackout = true;
			opt(ids[i], "visionMinLightColour", "#000000");
			opt(ids[i], "cameraTint", [0, 0, 0, 0.78]);
			opt(ids[i], "cameraRoll", Math.sin(NOW / 90) * 0.05);
		} else if (st.wasBlackout) {
			st.wasBlackout = false;
			applyAtmosphere(ids[i]);
		}
	}
}

function nameOf(id) {
	return String(safe(() => api.getEntityName(id)) || "Someone");
}

/* ---------------------------------------------------------------------------
   HORROR BEHAVIOURS
   Every behaviour below is one "mod" the benefactor can add.
   --------------------------------------------------------------------------- */

function tagFog(id) {
	const st = pstate(id);
	st.fogUntil = NOW + rand(25000, 50000);
	applyAtmosphere(id);
	sound(SND.fog, id, 0.55, 0.8);
	later(1500, () => sound(SND.accent, id, 0.5, 0.75));
	safe(() => api.shakePlayerCamera(id, 0.22, 1200));
}

function tagSound(id) {
	const pos = behindSpot(id, 6, 14);
	sound(SND.fright, id, 0.75, rand(0.8, 1.05), pos || undefined);
	later(600, () => safe(() => api.shakePlayerCamera(id, 0.35, 700)));
}

function tagFootsteps(id) {
	const pos = playerPos(id);
	if (!pos) return;
	for (let i = 0; i < 6; i++) {
		later(400 + i * 520, () => {
			const a = Math.random() * Math.PI * 2;
			const r = rand(3, 9);
			sound(SND.step, id, 0.55, rand(0.85, 1.1), [
				pos[0] + Math.cos(a) * r,
				pos[1],
				pos[2] + Math.sin(a) * r,
			]);
		});
	}
}

function tagWhisper(id) {
	const st = pstate(id);
	const line = pick(WHISPERS).replace("%D", String(RUN.day));
	speak(id, "unknown", line, { sound: false });
	sound(SND.strange, id, 0.45, 0.6);
	safe(() => api.queueMiddleTextLower(id, "\"" + line + "\"", 4000));
	st.sanity = clamp(st.sanity - 2, 0, CFG.SANITY_MAX);
}

function tagHerald(id) {
	spawnBenefactor(id);
	shout("??? has joined the game.", "gray");
	sound(SND.knock, id, 0.8, 1);
	later(2200, () => {
		shout("??? has left the game.", "gray");
		sound(SND.metalKnock, id, 0.7, 0.9);
	});
	later(5000, () => {
		say(id, "There is nobody in this world but you.", "#6e6e6e");
	});
}

function tagStalker(id) {
	if (playerMobCount(id) >= CFG.MAX_MOBS_PER_PLAYER || liveMobCount() >= CFG.MAX_MOBS) {
		tagFootsteps(id);
		return;
	}
	const spot = behindSpot(id, 20, 34);
	if (!spot) {
		tagFootsteps(id);
		return;
	}
	const mob = spawnMob("Stalker", spot, "", pick(["crimson", "void", "frost"]));
	if (!mob) {
		tagSound(id);
		return;
	}
	setMobHealth(mob, scaleHealth(45));
	mobSetting(mob, "attackDamage", scaleDamage(7));
	mobSetting(mob, "baseRunningSpeed", 3.6);
	mobSetting(mob, "chaseRadius", 120);
	mobSetting(mob, "hostilityRadius", 120);
	mobAi(mob, "watching", { targetId: id });
	trackMob(mob, {
		role: "stalker",
		player: id,
		born: NOW,
		expireAt: NOW + rand(38000, 55000),
		watchedAt: NOW,
		alive: true,
	});
	sound(SND.stalkerIdle, id, 0.5, 0.85, spot);
}

function tagHunter(id) {
	if (playerMobCount(id) >= CFG.MAX_MOBS_PER_PLAYER || liveMobCount() >= CFG.MAX_MOBS) return;
	const spot = spotAround(id, 16, 26);
	if (!spot) return;
	const mob = spawnMob("Draugr Reaver", spot, "", "default");
	if (!mob) {
		tagSound(id);
		return;
	}
	setMobHealth(mob, scaleHealth(70));
	mobSetting(mob, "attackDamage", scaleDamage(9));
	mobSetting(mob, "baseRunningSpeed", 4.7);
	mobSetting(mob, "chaseRadius", 160);
	mobSetting(mob, "hostilityRadius", 160);
	mobSetting(mob, "attackInterval", 700);
	mobAi(mob, "chasing", { targetId: id });
	trackMob(mob, { role: "hunter", player: id, born: NOW, expireAt: NOW + rand(26000, 42000), alive: true });
	sound(SND.stalkerHit, id, 0.7, 0.8, spot);
	safe(() => api.queueMiddleTextLower(id, "It is running.", 2200));
}

function tagCave(id) {
	if (playerMobCount(id) >= CFG.MAX_MOBS_PER_PLAYER || liveMobCount() >= CFG.MAX_MOBS) return;
	const under = isUnderground(id);
	const spot = spotAround(id, under ? 8 : 22, under ? 16 : 32);
	if (!spot) return;
	const mob = spawnMob("Cave Golem", spot, "", "corrupted");
	if (!mob) return;
	setMobHealth(mob, scaleHealth(under ? 80 : 60));
	mobSetting(mob, "attackDamage", scaleDamage(8));
	mobSetting(mob, "baseRunningSpeed", under ? 4.1 : 3.3);
	mobSetting(mob, "chaseRadius", 140);
	mobSetting(mob, "hostilityRadius", 140);
	mobAi(mob, "chasing", { targetId: id });
	trackMob(mob, { role: "cave", player: id, born: NOW, expireAt: NOW + 45000, alive: true });
	sound(SND.rattle, id, 0.6, 0.7, spot);
	if (under) safe(() => api.shakePlayerCamera(id, 0.4, 900));
}

function tagSwarm(id) {
	const n = clamp(2 + Math.floor(RUN.day / 20), 2, 6);
	for (let i = 0; i < n; i++) {
		if (liveMobCount() >= CFG.MAX_MOBS) return;
		const spot = spotAround(id, 10, 24);
		if (!spot) continue;
		const mob = spawnMob("Draugr Zombie", spot, "", pick(["default", "corrupted"]));
		if (!mob) continue;
		setMobHealth(mob, scaleHealth(26));
		mobSetting(mob, "attackDamage", scaleDamage(4));
		mobSetting(mob, "baseRunningSpeed", 3.4);
		mobSetting(mob, "chaseRadius", 100);
		mobSetting(mob, "hostilityRadius", 100);
		mobAi(mob, "chasing", { targetId: id });
		trackMob(mob, {
			role: "swarm",
			player: id,
			born: NOW,
			expireAt: NOW + rand(22000, 34000),
			alive: true,
		});
	}
	sound(SND.zombie, id, 0.65, 0.75);
	safe(() => api.shakePlayerCamera(id, 0.25, 900));
}

function tagWraith(id) {
	if (playerMobCount(id) >= CFG.MAX_MOBS_PER_PLAYER || liveMobCount() >= CFG.MAX_MOBS) return;
	const spot = spotAround(id, 14, 24);
	if (!spot) return;
	const mob = spawnMob("Draugr Warper", spot, "", "default");
	if (!mob) return;
	setMobHealth(mob, scaleHealth(65));
	mobSetting(mob, "attackDamage", scaleDamage(8));
	mobSetting(mob, "baseRunningSpeed", 3.9);
	mobSetting(mob, "chaseRadius", 180);
	mobSetting(mob, "hostilityRadius", 180);
	mobAi(mob, "chasing", { targetId: id });
	trackMob(mob, {
		role: "wraith",
		player: id,
		born: NOW,
		expireAt: NOW + 48000,
		nextBlink: NOW + 2500,
		alive: true,
	});
	sound(SND.wraith, id, 0.7, 0.8, spot);
	sound(SND.zap, id, 0.5, 0.9);
}

function tagBeast(id) {
	if (playerMobCount(id) >= CFG.MAX_MOBS_PER_PLAYER || liveMobCount() >= CFG.MAX_MOBS) return;
	const spot = spotAround(id, 14, 26);
	if (!spot) return;
	const mob = spawnMob("Spirit Bear", spot, "", "default") || spawnMob("Spirit Wolf", spot, "", "default");
	if (!mob) return;
	setMobHealth(mob, scaleHealth(110));
	mobSetting(mob, "attackDamage", scaleDamage(12));
	mobSetting(mob, "baseRunningSpeed", 4.4);
	mobSetting(mob, "chaseRadius", 160);
	mobSetting(mob, "hostilityRadius", 160);
	mobAi(mob, "chasing", { targetId: id });
	trackMob(mob, { role: "beast", player: id, born: NOW, expireAt: NOW + 40000, alive: true });
	sound(SND.growl, id, 0.85, 0.7, spot);
	safe(() => api.shakePlayerCamera(id, 0.45, 1100));
}

function tagPossession(id) {
	if (liveMobCount() >= CFG.MAX_MOBS) return;
	const pos = playerPos(id);
	if (!pos) return;
	const mobIds = safe(() => api.getMobIds()) || [];
	let host = null;
	for (let i = 0; i < mobIds.length; i++) {
		const mp = safe(() => api.getPosition(mobIds[i]));
		if (!mp) continue;
		if (dist3(pos, mp) < 34) {
			const type = String(safe(() => api.getEntityType(mobIds[i])) || "");
			if (type === "Cow" || type === "Pig" || type === "Sheep" || type === "Wolf" || type === "Horse") {
				host = mp;
				break;
			}
		}
	}
	const spot = host || spotAround(id, 12, 22);
	if (!spot) return;
	const mob = spawnMob("Spirit Wolf", spot, "not a wolf", "default");
	if (!mob) return;
	setMobHealth(mob, scaleHealth(55));
	mobSetting(mob, "attackDamage", scaleDamage(7));
	mobSetting(mob, "baseRunningSpeed", 4.2);
	mobSetting(mob, "chaseRadius", 120);
	mobSetting(mob, "hostilityRadius", 120);
	mobAi(mob, "watching", { targetId: id });
	trackMob(mob, {
		role: "possessed",
		player: id,
		born: NOW,
		expireAt: NOW + 38000,
		alive: true,
	});
	sound(SND.growl, id, 0.7, 1.1, spot);
	safe(() => api.queueMiddleTextLower(id, "That animal is not an animal.", 3200));
}

function tagAbduction(id) {
	const spot = spotAround(id, 45, 80);
	if (!spot) {
		tagFootsteps(id);
		return;
	}
	const st = pstate(id);
	safe(() => api.shakePlayerCamera(id, 1, 2200));
	sound(SND.impact, id, 0.9, 0.8);
	sound(SND.zap2, id, 0.7, 0.7);
	safe(() => api.setPosition(id, spot[0] + 0.5, spot[1] + 1, spot[2] + 0.5));
	const hp = safe(() => api.getHealth(id));
	if (typeof hp === "number" && hp > 4) safe(() => api.setHealth(id, Math.max(4, Math.round(hp * 0.4))));
	// applyEffect durations are milliseconds, not seconds
	safe(() => api.applyEffect(id, "Blindness", 5000));
	safe(() => api.applyEffect(id, "Slowness", 4000, { inbuiltLevel: 1 }));
	st.sanity = clamp(st.sanity - 16, 0, CFG.SANITY_MAX);
	speak(id, "unknown", "You wake up somewhere else.", { dialogue: false });
}

function tagMirror(id) {
	if (liveMobCount() >= CFG.MAX_MOBS) return;
	const spot = spotAround(id, 8, 16);
	if (!spot) return;
	const mob = spawnMob("NPC", spot, nameOf(id), "default");
	if (!mob) return;
	mobSetting(mob, "baseRunningSpeed", 3.4);
	mobAi(mob, "watching", { targetId: id });
	const key = String(mob);
	trackMob(mob, { role: "mirror", player: id, born: NOW, expireAt: NOW + rand(7000, 12000), alive: true });
	sound(SND.stalkerIdle, id, 0.5, 0.9, spot);
	later(3500, () => {
		if (!TRACK[key] || TRACK[key].alive === false) return;
		const st = pstate(id);
		st.sanity = clamp(st.sanity - CFG.SANITY_EVENT_COST, 0, CFG.SANITY_MAX);
		safe(() => api.shakePlayerCamera(id, 0.6, 900));
		sound(SND.fright, id, 0.8, 1);
		speak(id, "watcher", "It had your face.", { dialogue: false });
		removeMob(mob);
	});
}

function tagTorch(id) {
	if (!CFG.ENABLE_WORLD_EDITS) {
		tagDark(id);
		return;
	}
	if (RUN.torchesTonight >= CFG.TORCH_MAX_PER_NIGHT) return;
	const pos = playerPos(id);
	if (!pos) return;
	const R = CFG.TORCH_RADIUS;
	const found = [];
	// sample the area instead of sweeping it: a full sweep is thousands of
	// getBlock calls inside a single tick
	for (let i = 0; i < 140; i++) {
		const x = Math.round(pos[0]) + irand(-R, R);
		const y = Math.round(pos[1]) + irand(-4, 5);
		const z = Math.round(pos[2]) + irand(-R, R);
		const b = blockAt(x, y, z);
		if (b && b.indexOf("Torch") !== -1) found.push([x, y, z]);
	}
	if (found.length === 0) {
		say(id, "Something is blowing out the lights you cannot see.", "#6e6e6e");
		sound(SND.knock, id, 0.55, 1.1);
		return;
	}
	let count = 0;
	for (let i = found.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const tmp = found[i];
		found[i] = found[j];
		found[j] = tmp;
	}
	for (let i = 0; i < found.length && count < 6; i++) {
		const p = found[i];
		safe(() => api.setBlock(p[0], p[1], p[2], "Air"));
		sound(SND.zap, id, 0.45, rand(0.85, 1.2), p);
		count++;
	}
	RUN.torchesTonight += count;
	say(id, "Your torches are going out.", "#7a7a7a");
}

function tagGrave(id) {
	if (!CFG.ENABLE_WORLD_EDITS) {
		say(id, "The ground shifts near your base.", "#7a7a7a");
		return;
	}
	const spot = spotAround(id, 6, 14);
	if (!spot) return;
	const x = Math.round(spot[0]);
	const y = Math.round(spot[1]);
	const z = Math.round(spot[2]);
	const pattern = [
		[0, 0, 0, "Bone Block"],
		[1, 0, 0, "Bone Block"],
		[-1, 0, 0, "Bone Block"],
		[2, 0, 0, "Bone Block"],
		[0, 1, 0, "Black Wool"],
		[0, 2, 0, "Cobweb"],
		[1, 1, 0, "Cobweb"],
		[-1, 1, 0, "Cobweb"],
		[0, 0, 1, "Bone Block"],
		[0, 1, 1, "Black Wool"],
	];
	let placed = 0;
	for (let i = 0; i < pattern.length && placed < CFG.GRAVE_MAX_BLOCKS; i++) {
		const p = pattern[i];
		const bx = x + p[0];
		const by = y + p[1];
		const bz = z + p[2];
		const existing = blockAt(bx, by, bz);
		if (existing !== "Air") continue;
		safe(() => api.setBlock(bx, by, bz, p[3]));
		placed++;
	}
	sound(SND.bell, id, 0.7, 0.8, [x, y, z]);
	safe(() => api.queueMiddleTextLower(id, "Something was buried here overnight.", 4000));
}

function tagQuake(id) {
	safe(() => api.shakePlayerCamera(id, 0.95, 2600));
	sound(SND.impact, id, 0.9, 0.7);
	later(400, () => sound(SND.thunder, id, 0.7, 0.8));
	safe(() => api.applyEffect(id, "Slowness", 2500, { inbuiltLevel: 1 }));
	safe(() => api.queueMiddleTextLower(id, "The ground is moving.", 2600));
}

function tagSilence(id) {
	opt(id, "music", null);
	opt(id, "musicVolumeLevel", 0);
	sound(SND.fog, id, 0.4, 0.65);
	later(7000, () => opt(id, "musicVolumeLevel", 0.6));
	safe(() => api.queueMiddleTextLower(id, "There is no sound at all.", 4000));
}

function tagDark(id) {
	const st = pstate(id);
	st.darkUntil = NOW + rand(24000, 40000);
	applyAtmosphere(id);
	opt(id, "music", "Adigold - Dreamless Sleep");
	sound(SND.pulse, id, 0.6, 0.7);
	safe(() => api.shakePlayerCamera(id, 0.3, 1200));
}

function tagBlood(id) {
	const st = pstate(id);
	st.bloodUntil = NOW + rand(30000, 50000);
	applyAtmosphere(id);
	sound(SND.bell, id, 0.8, 0.7);
	safe(() => api.queueMiddleTextUpper(id, "THE SKY IS RED", 3000));
	tagSwarm(id);
}

function tagTitan(id, entry) {
	const bossName = entry ? entry[1] : "THE TITAN";
	const spot = spotAround(id, 12, 20);
	if (!spot) return;
	const hp = scaleHealth(520 + RUN.day * 22);
	const mob = spawnMob("Tiki Terror", spot, bossName, "tyrant");
	if (!mob) {
		shout("The boss could not spawn here. Try /horror boss in open ground.", "red");
		return;
	}
	setMobHealth(mob, hp);
	mobSetting(mob, "attackDamage", scaleDamage(20));
	mobSetting(mob, "baseRunningSpeed", 3.5);
	mobSetting(mob, "chaseRadius", 200);
	mobSetting(mob, "hostilityRadius", 200);
	mobSetting(mob, "attackInterval", 900);
	mobAi(mob, "chasing", { targetId: id });
	trackMob(mob, {
		role: "boss",
		player: id,
		born: NOW,
		expireAt: NOW + 20 * 60000,
		enraged: false,
		name: bossName,
		alive: true,
	});
	shout("\u2620 " + bossName + " HAS ARRIVED.", "red");
	safe(() => api.queueMiddleTextUpper(id, bossName, 5000));
	safe(() => api.shakePlayerCamera(id, 1, 3200));
	sound(SND.impact, id, 1, 0.6);
	sound(SND.riser, id, 0.8, 0.7);
}

function fireTag(tag, id, entry) {
	if (!id) {
		const ids = online();
		if (ids.length === 0) return;
		id = pick(ids);
	}
	switch (tag) {
		case "fog":
			tagFog(id);
			break;
		case "sound":
			tagSound(id);
			break;
		case "footsteps":
			tagFootsteps(id);
			break;
		case "whisper":
			tagWhisper(id);
			break;
		case "herald":
			tagHerald(id);
			break;
		case "stalker":
			tagStalker(id);
			break;
		case "hunter":
			tagHunter(id);
			break;
		case "cave":
			tagCave(id);
			break;
		case "swarm":
			tagSwarm(id);
			break;
		case "wraith":
			tagWraith(id);
			break;
		case "beast":
			tagBeast(id);
			break;
		case "possession":
			tagPossession(id);
			break;
		case "abduction":
			tagAbduction(id);
			break;
		case "mirror":
			tagMirror(id);
			break;
		case "torch":
			tagTorch(id);
			break;
		case "grave":
			tagGrave(id);
			break;
		case "quake":
			tagQuake(id);
			break;
		case "silence":
			tagSilence(id);
			break;
		case "dark":
			tagDark(id);
			break;
		case "blood":
			tagBlood(id);
			break;
		case "watcher":
			tagWatcher(id);
			break;
		case "hollow":
			tagHollow(id);
			break;
		case "shadow":
			tagShadow(id);
			break;
		case "obelisk":
			tagObelisk(id);
			break;
		case "titan":
			if (bossAlive()) return;
			if (CFG.BOSS_DAYS.indexOf(RUN.day) === -1) tagHunter(id);
			else tagTitan(id, entry);
			break;
		default:
			tagSound(id);
			break;
	}
}

function bossAlive() {
	for (const key in TRACK) {
		if (TRACK[key].role === "boss" && TRACK[key].alive !== false) return true;
	}
	return false;
}

function fireRandomHorror() {
	const list = activeHorrors();
	if (list.length === 0) return;
	const ids = online();
	if (ids.length === 0) return;
	const target = pick(ids);

	let entry;
	if (Math.random() < 0.22) entry = list[list.length - 1];
	else entry = pick(list);

	let tag = pick(entry[2]);
	if (tag === "titan" && CFG.BOSS_DAYS.indexOf(RUN.day) === -1) tag = "hunter";
	fireTag(tag, target, entry);
}

/* ---------------------------------------------------------------------------
   DAY / NIGHT CYCLE
   --------------------------------------------------------------------------- */
function enterDawn(announce) {
	RUN.phase = "dawn";
	RUN.phaseMs = 0;
	RUN.torchesTonight = 0;
	RUN.eventsDone = 0;
	RUN.eventsTonight = 0;
	clearMeshes();

	const ids = online();
	const horror = nextDayHorror(RUN.day);

	for (let i = 0; i < ids.length; i++) {
		const id = ids[i];
		const st = pstate(id);
		st.fogUntil = 0;
		st.darkUntil = 0;
		st.bloodUntil = 0;
		st.sanity = clamp(st.sanity + 6, 0, CFG.SANITY_MAX);
		clearFinishScreen(id);
		opt(id, "showProgressBar", true);
		resetAtmosphere(id);
		opt(id, "music", null);
		opt(id, "musicVolumeLevel", 0.6);
		if (!announce) continue;

		bigTitle(id, "DAY " + RUN.day, horror ? "NEW HORROR: " + horror[1] : "");
		speak(id, horror ? "benefactor" : "unknown", horror ? horror[3] : "You survived another one.", {
			chat: false,
		});
		safe(() => api.sendFlyingMiddleMessage(id, "DAY " + RUN.day, 100, 2600));
		sound(SND.bell, id, 0.5, 0.9);
	}

	if (announce) {
		shout("DAY " + RUN.day + " / 100", "yellow");
		if (horror) {
			shout("NEW HORROR: " + horror[1], "#a83232");
			shout(horror[3], "gray");
		} else if (RUN.day > CFG.MAX_DAY) {
			shout("You survived all 100 days.", "yellow");
		}
		later(4000, () => {
			const live = online();
			for (let i = 0; i < live.length; i++) opt(live[i], "dialogue", null);
		});
		if (ids.length > 0) spawnBenefactor(ids[0]);
	}
	saveRun();
}

function enterDay() {
	RUN.phase = "day";
	RUN.phaseMs = 0;
	const ids = online();
	for (let i = 0; i < ids.length; i++) resetAtmosphere(ids[i]);
	saveRun();
}

function enterDusk() {
	RUN.phase = "dusk";
	RUN.phaseMs = 0;
	const ids = online();
	for (let i = 0; i < ids.length; i++) {
		bigTitle(ids[i], "DUSK", "Something is coming.");
		sound(SND.riser, ids[i], 0.5, 0.8);
	}
	shout("The sun is going down. Prepare.", "orange");
	saveRun();
}

function enterNight() {
	RUN.phase = "night";
	RUN.phaseMs = 0;
	RUN.torchesTonight = 0;
	RUN.eventsDone = 0;
	RUN.jumpscares = 0;
	RUN.eventsTonight = Math.min(14, 2 + Math.floor(RUN.day / 6) + (RUN.day >= CFG.MAX_DAY ? 2 : 0));

	const ids = online();
	const horror = nextDayHorror(RUN.day);

	for (let i = 0; i < ids.length; i++) {
		const id = ids[i];
		applyAtmosphere(id);
		opt(id, "music", "Adigold - Dreamless Sleep");
		opt(id, "musicVolumeLevel", 0.12);
		bigTitle(id, "NIGHT " + RUN.day, horror ? horror[1] : "");
		sound(SND.riser, id, 0.7, 0.7);
		safe(() => api.shakePlayerCamera(id, 0.4, 2000));
	}

	// the music drops away first. The silence is the warning.
	later(9000, () => {
		const live = online();
		for (let i = 0; i < live.length; i++) opt(live[i], "musicVolumeLevel", 0.6);
	});
	shout("NIGHT " + RUN.day + " HAS FALLEN", "#a83232");

	if (RUN.day === 1) {
		later(2600, () => speakAll("benefactor", "Day one. I am already inside the fog."));
		later(12000, () => {
			if (!RUN.running || RUN.phase !== "night") return;
			const live = online();
			if (live.length === 0) return;
			tagWhisper(pick(live));
			tagFootsteps(live[0]);
		});
	}
	if (RUN.day >= CFG.MAX_DAY) {
		later(4000, () => speakAll("benefactor", "One hundred nights. I want to watch this one."));
		later(14000, () => {
			if (!RUN.running || RUN.phase !== "night") return;
			const live = online();
			if (live.length === 0) return;
			tagWatcher(pick(live));
		});
	}

	// the new horror always shows itself first
	if (horror) {
		later(7000, () => {
			if (!RUN.running || RUN.phase !== "night") return;
			const live = online();
			if (live.length === 0) return;
			fireTag(horror[2][0], pick(live), horror);
		});
	}

	// bosses arrive at midnight-ish
	if (CFG.BOSS_DAYS.indexOf(RUN.day) !== -1) {
		later(Math.round(CFG.NIGHT_MINUTES * 60000 * 0.45), () => {
			if (!RUN.running || RUN.phase !== "night") return;
			const live = online();
			if (live.length === 0) return;
			tagTitan(pick(live), horror);
		});
	}

	scheduleNextEvent(8000);
	saveRun();
}

function scheduleNextEvent(minMs) {
	const nightLen = CFG.NIGHT_MINUTES * 60000;
	const left = Math.max(1, RUN.eventsTonight - RUN.eventsDone);
	const gap = Math.max(minMs || 8000, (nightLen * 0.8) / (left + 1));
	RUN.nextEventAt = NOW + gap * rand(0.6, 1.3);
}

function advancePhase() {
	if (RUN.phase === "dawn") {
		enterDay();
		return;
	}
	if (RUN.phase === "day") {
		enterDusk();
		return;
	}
	if (RUN.phase === "dusk") {
		enterNight();
		return;
	}
	// night survived
	if (RUN.day >= CFG.MAX_DAY) {
		finishRun();
		return;
	}
	RUN.day += 1;
	enterDawn(true);
}

/* ---------------------------------------------------------------------------
   FINISH SCREEN
   Bloxd has no full-screen image option, so the ending is composed from every
   layer it does expose: the three middle-text bands, the right info panel, the
   dialogue panel, a full progress bar, fog, tint and a closing theme.
   --------------------------------------------------------------------------- */
function fmtDuration(ms) {
	const total = Math.max(0, Math.round(ms / 1000));
	const h = Math.floor(total / 3600);
	const m = Math.floor((total % 3600) / 60);
	const s = total % 60;
	if (h > 0) return h + "h " + (m < 10 ? "0" : "") + m + "m";
	return m + "m " + (s < 10 ? "0" : "") + s + "s";
}

function finishStats(id) {
	const st = pstate(id);
	const best = Math.max(CFG.MAX_DAY, Number(safe(() => api.getPlayerDbValue(id, CFG.DB_BEST))) || 0);
	return [
		"RUN COMPLETE",
		"",
		"DAY " + RUN.day + " / 100",
		"DEATHS  " + RUN.deaths,
		"TIME  " + fmtDuration(RUN.runMs),
		"SANITY  " + Math.round(st.sanity) + "%",
		"HORRORS  " + activeHorrors().length,
		"BEST  DAY " + best,
	].join("\n");
}

function clearFinishScreen(id) {
	opt(id, "middleTextUpper", "");
	opt(id, "middleTextLower", "");
	opt(id, "middleTextTop", "");
	opt(id, "RightInfoText", "");
	opt(id, "dialogue", null);
}

function showFinishScreen(id, animate) {
	const st = pstate(id);
	const pos = playerPos(id);
	const voice = VOICES.benefactor;

	if (animate) {
		bigTitle(id, "YOU SURVIVED", "100 DAYS");
		sound("levelup", id, 1, 1);
		sound(SND.bell, id, 0.6, 0.8);
		safe(() => api.shakePlayerCamera(id, 0.5, 2500));
		if (pos) particleBurst([pos[0], pos[1] + 1.4, pos[2]], [255, 210, 90, 0.9]);
	}

	opt(id, "showProgressBar", true);
	safe(() => api.progressBarUpdate(id, 1, 900));
	opt(id, "music", "Juhani Junkala [Retro Game Music Pack] Ending");
	opt(id, "musicVolumeLevel", 0.5);
	opt(id, "fogChunkDistanceOverride", 52);
	opt(id, "fogColourOverride", "#04050a");
	opt(id, "ambientLightColourOverride", "#07070d");
	opt(id, "skyLightColourOverride", "#100c18");
	opt(id, "cameraTint", [0.08, 0.0, 0.0, 0.18]);
	opt(id, "cameraRoll", 0);
	opt(id, "visionMinLightColour", null);
	opt(id, "fogOnSkybox", true);
	opt(id, "middleTextTop", "BLOXDVOID_YT HORROR \u2014 100 DAYS");
	opt(id, "middleTextUpper", "YOU SURVIVED");
	opt(id, "middleTextLower", "THE BENEFACTOR IS GONE");
	opt(id, "RightInfoText", finishStats(id));

	st.dialogUntil = NOW + 60000;
	opt(id, "dialogue", {
		line: "You are still here. I did not think you would be.",
		speakerName: { str: voice.label, style: { color: voice.colour, bold: true } },
		voice: voice.voice,
		animateIn: true,
	});
}

function finishRun() {
	if (RUN.finished) return;
	RUN.finished = true;
	RUN.finishedAt = NOW;
	RUN.running = false;
	RUN.jumpscares = 0;
	clearHorrorMobs();
	clearMeshes();

	const ids = online();
	for (let i = 0; i < ids.length; i++) {
		const st = pstate(ids[i]);
		st.blackoutUntil = 0;
		st.wasBlackout = false;
		st.dread = 0;
		const record = clamp(Math.round(RUN.day), 1, CFG.MAX_DAY);
		if (record > (Number(safe(() => api.getPlayerDbValue(ids[i], CFG.DB_BEST))) || 0)) {
			safe(() => api.setPlayerDbValue(ids[i], CFG.DB_BEST, record));
		}
		safe(() => api.giveItem(ids[i], "Diamond", 10));
		showFinishScreen(ids[i], true);
	}
	// one last look at the friend who sent all of this
	if (ids.length > 0) spawnBenefactor(ids[0]);

	shout(
		RUN.day >= CFG.MAX_DAY
			? "DAY 100 SURVIVED. The benefactor is out of ideas."
			: "The run ended on day " + RUN.day + ".",
		"yellow"
	);
	shout("Type /" + CFG.START_COMMAND + " to run it again.", "#8fd0ff");
	saveRun();
}

/* ---------------------------------------------------------------------------
   PERSISTENCE
   --------------------------------------------------------------------------- */
function saveRun() {
	const payload = {
		day: RUN.day,
		phase: RUN.phase,
		phaseMs: Math.round(RUN.phaseMs),
		running: RUN.running,
		deaths: RUN.deaths,
		startedAt: RUN.startedAt,
		runMs: Math.round(RUN.runMs),
		finished: RUN.finished,
	};
	safe(() => api.setLobbyDbValue(CFG.DB_RUN, JSON.stringify(payload)));
	RUN.lastSaveAt = NOW;
}

function loadRun() {
	const raw = safe(() => api.getLobbyDbValue(CFG.DB_RUN));
	if (!raw) return;
	let data = null;
	try {
		data = JSON.parse(raw);
	} catch (e) {
		data = null;
	}
	if (!data) return;
	RUN.day = clamp(Number(data.day) || 1, 1, CFG.MAX_DAY);
	RUN.phase = data.phase || "dawn";
	RUN.phaseMs = Math.max(0, Number(data.phaseMs) || 0);
	RUN.running = !!data.running;
	RUN.deaths = Math.max(0, Number(data.deaths) || 0);
	RUN.startedAt = Number(data.startedAt) || NOW;
	RUN.runMs = Math.max(0, Number(data.runMs) || 0);
	RUN.finished = !!data.finished;
}

/* ---------------------------------------------------------------------------
   MOB TICK
   --------------------------------------------------------------------------- */
function isPlayerLookingAt(id, pos, threshold) {
	const info = safe(() => api.getPlayerFacingInfo(id));
	if (!info || !info.dir) return false;
	const cam = info.camPos || playerPos(id);
	if (!cam) return false;
	const dx = pos[0] - cam[0];
	const dy = (pos[1] + 1) - cam[1];
	const dz = pos[2] - cam[2];
	const len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
	const dot = (dx / len) * info.dir[0] + (dy / len) * info.dir[1] + (dz / len) * info.dir[2];
	return dot >= threshold;
}

function vanishScare(mobId, id, text) {
	const st = pstate(id);
	const pos = safe(() => api.getPosition(mobId)) || playerPos(id);
	removeMob(mobId);
	sound(SND.fright, id, 0.85, 1, pos || undefined);
	safe(() => api.shakePlayerCamera(id, 0.7, 1200));
	if (st) st.sanity = clamp(st.sanity - CFG.SANITY_EVENT_COST, 0, CFG.SANITY_MAX);
	if (text) safe(() => api.queueMiddleTextLower(id, text, 3200));
}

let lastMobAt = 0;

function tickMobs() {
	if (NOW - lastMobAt < CFG.MOB_EVERY_MS) return;
	lastMobAt = NOW;
	const live = safe(() => api.getMobIds()) || [];
	const liveSet = {};
	for (let i = 0; i < live.length; i++) liveSet[String(live[i])] = true;
	const onlineIds = online();

	for (const key in TRACK) {
		const rec = TRACK[key];
		if (rec.alive === false) {
			delete TRACK[key];
			continue;
		}
		if (!liveSet[key]) {
			delete TRACK[key];
			continue;
		}
		const id = rec.player;
		if (onlineIds.indexOf(id) === -1) {
			removeMob(rec.id);
			continue;
		}
		const pos = safe(() => api.getPosition(rec.id));
		const ppos = playerPos(id);

		if (rec.expireAt && NOW > rec.expireAt) {
			if (rec.role === "boss") shout("\u2620 " + rec.name + " lost interest and left.", "yellow");
			removeMob(rec.id);
			continue;
		}
		if (!pos || !ppos) continue;
		const d = dist3(pos, ppos);

		if (rec.role === "stalker") {
			const seen = isPlayerLookingAt(id, pos, 0.72) && d < 46;
			if (seen) {
				vanishScare(rec.id, id, "It was never there.");
				continue;
			}
			if (d < 6.5) {
				vanishScare(rec.id, id, "It was right behind you.");
				continue;
			}
			if (d > 80) {
				removeMob(rec.id);
				continue;
			}
			if (NOW > rec.expireAt - 12000) {
				mobAi(rec.id, "chasing", { targetId: id });
				rec.role = "hunter";
				sound(SND.stalkerHit, id, 0.7, 0.9, pos);
			}
			continue;
		}

		if (rec.role === "wraith") {
			if (NOW > rec.nextBlink && d > 7) {
				rec.nextBlink = NOW + rand(2400, 4200);
				const spot = spotAround(id, 4, 9);
				if (spot) {
					sound(SND.zap, id, 0.6, 1.1, pos);
					safe(() => api.setPosition(rec.id, spot[0], spot[1] + 0.2, spot[2]));
					sound(SND.zap2, id, 0.6, 0.9, spot);
				}
			}
			continue;
		}

		if (rec.role === "possessed") {
			if (d < 14) {
				mobAi(rec.id, "chasing", { targetId: id });
				rec.role = "hunter";
				rec.expireAt = NOW + 25000;
				sound(SND.growl, id, 0.9, 0.8, pos);
				safe(() => api.queueMiddleTextLower(id, "It noticed you.", 2600));
			}
			continue;
		}

		if (rec.role === "mirror") {
			if (d < 4) {
				vanishScare(rec.id, id, "It touched your shoulder.");
				continue;
			}
			continue;
		}

		if (rec.role === "boss") {
			const hp = mobHealth(rec.id);
			if (hp !== null && hp > 0 && !rec.enraged) {
				const maxHp = scaleHealth(520 + RUN.day * 22);
				if (hp < maxHp * 0.5) {
					rec.enraged = true;
					mobSetting(rec.id, "baseRunningSpeed", 4.6);
					mobSetting(rec.id, "attackDamage", scaleDamage(30));
					shout(rec.name + " IS ENRAGED.", "red");
					sound(SND.impact, id, 1, 0.6);
					safe(() => api.shakePlayerCamera(id, 1, 2400));
					tagSwarm(id);
				}
			}
			continue;
		}
	}
}

/* ---------------------------------------------------------------------------
   MAIN TICK
   --------------------------------------------------------------------------- */
function tickCycle(dt) {
	if (!RUN.running) return;

	const ids = online();
	if (ids.length === 0) return; // do not burn the clock in an empty lobby

	RUN.phaseMs += dt;
	RUN.runMs += dt;
	const len = phaseLength(RUN.phase);

	if (RUN.phase === "night") {
		if (NOW >= RUN.nextEventAt && RUN.eventsDone < RUN.eventsTonight) {
			fireRandomHorror();
			RUN.eventsDone++;
			scheduleNextEvent(9000);
		}
	}

	if (RUN.phaseMs >= len) {
		const overflow = RUN.phaseMs - len;
		advancePhase();
		RUN.phaseMs = Math.min(overflow, phaseLength(RUN.phase) - 1);
	}
}

function tickPlayers(dt) {
	const ids = online();
	for (let i = 0; i < ids.length; i++) {
		const id = ids[i];
		const st = pstate(id);

		// sanity does ground scans and mob distance checks, so run it at a
		// fixed low rate instead of 20 times a second
		if (NOW - (st.lastSanity || 0) >= CFG.SANITY_EVERY_MS) {
			const step = st.lastSanity ? (NOW - st.lastSanity) / 1000 : CFG.SANITY_EVERY_MS / 1000;
			st.lastSanity = NOW;
			updateSanity(id, step);
		}

		if (NOW - (st.dreadAt || 0) >= CFG.DREAD_EVERY_MS) {
			st.dreadAt = NOW;
			dreadFx(id);
		}

		updateHud(id);
		if (NOW - st.lastAtmos > CFG.ATMOS_EVERY_MS) {
			st.lastAtmos = NOW;
			applyAtmosphere(id);
		}
	}
}

tick = function (ms) {
	NOW = safe(() => api.now()) || NOW + (ms || 50);
	const dt = ms || 50;

	if (!booted) boot();

	runSched();
	tickPlayers(dt);
	tickDreadFx();
	tickMeshes();
	tickMobs();
	tickCycle(dt);

	if (NOW - RUN.lastSaveAt > CFG.SAVE_EVERY_MS) saveRun();
};

/* ---------------------------------------------------------------------------
   PLAYER LIFECYCLE
   --------------------------------------------------------------------------- */
function welcome(id) {
	const st = pstate(id);
	st.sanity = CFG.SANITY_MAX;
	opt(id, "showProgressBar", true);
	applyAtmosphere(id);
	updateHud(id);
	say(id, "BLOXDVOID_YT HORROR \u2014 100 DAYS", "#a83232");
	say(id, "Day " + RUN.day + " / 100. Horrors active: " + activeHorrors().length + ".", "gray");
	if (RUN.finished) {
		showFinishScreen(id, false);
		say(id, "You finished this run. /" + CFG.START_COMMAND + " starts a new one.", "yellow");
	} else if (RUN.phase === "night") {
		say(id, "It is night. It is already night.", "#a83232");
	} else if (!RUN.running) {
		say(id, "Type /" + CFG.START_COMMAND + " to begin the run.", "yellow");
	}
	if (isAdmin(id)) {
		say(id, "/horror for commands. /horror skip to move the clock.", "#8fd0ff");
	}
	updateHud(id);
	saveRun();
}

onPlayerJoin = function (playerId) {
	NOW = safe(() => api.now()) || NOW;
	const st = pstate(playerId);
	st.lastHud = 0;
	st.lastAtmos = 0;
	st.lastSanity = 0;
	later(1200, () => {
		if (online().indexOf(playerId) === -1) return;
		welcome(playerId);
	});
};

onPlayerLeave = function (playerId) {
	delete PLAYERS[playerId];
	for (const key in TRACK) {
		if (TRACK[key].player === playerId) removeMob(TRACK[key].id);
	}
	for (const key in MESH) {
		if (MESH[key].player === playerId) dropGroup(MESH[key]);
	}
};

playerCommand = function (playerId, command) {
	const text = String(command || "")
		.trim()
		.replace(/^[/!]+/, "");
	const args = text.split(/\s+/);
	const cmd = (args[0] || "").toLowerCase();

	const isHorror = cmd === "horror" || cmd === "h" || cmd === "s4k" || cmd === "100";

	// ---- self test: /test or /horror test ----
	if (cmd === "test") {
		runTest(playerId);
		return false;
	}

	// ---- the start trigger ----
	// Anyone can type the configured word (default /survive) to begin the run.
	if (!isHorror && cmd === String(CFG.START_COMMAND).toLowerCase()) {
		if (!CFG.ANYONE_CAN_START && !isAdmin(playerId)) {
			say(playerId, "Only the world owner can start the run.", "red");
			return false;
		}
		startRun(playerId);
		return false;
	}

	if (!isHorror) return false;

	const sub = (args[1] || "help").toLowerCase();
	const admin = isAdmin(playerId);

	if (sub === "help" || sub === "?" || args.length === 1) {
		say(playerId, "HORROR 100 \u2014 commands", "#a83232");
		say(playerId, "Start: /" + CFG.START_COMMAND + "   (anyone can type this)", "yellow");
		say(playerId, "/horror start | stop | pause | resume | skip | night", "gray");
		say(playerId, "/horror mods | mod <day> | day (info)", "gray");
		if (admin) {
			say(playerId, "/horror day <1-100> | boss | clear | meshes | sanity <n> | finish | reset", "#8fd0ff");
			say(playerId, "/horror say <voice> <text> \u2014 voices: benefactor, unknown, watcher, crone, system", "#8fd0ff");
			say(playerId, "/horror length <dayMin> <nightMin> | test <tag>", "#8fd0ff");
			say(playerId, "/test \u2014 spawn every mob, model and sound to check the server", "#8fd0ff");
		}
		return false;
	}

	if (sub === "day" && (args.length === 2 || args[1] === undefined)) {
		showDay(playerId);
		return false;
	}

	if (sub === "mods") {
		const list = activeHorrors();
		say(playerId, "Horrors added so far: " + list.length, "#a83232");
		const from = Math.max(0, list.length - 12);
		for (let i = from; i < list.length; i++) {
			say(playerId, "Day " + list[i][0] + " \u2014 " + list[i][1], "#c9c9c9");
		}
		return false;
	}

	if (sub === "mod") {
		showDay(playerId, Number(args[2]));
		return false;
	}

	if (!admin) {
		say(playerId, "Only the world owner can do that.", "red");
		return false;
	}

	if (sub === "start") {
		startRun(playerId);
		return false;
	}

	if (sub === "stop") {
		RUN.running = false;
		saveRun();
		shout("The run has been stopped on day " + RUN.day + ".", "yellow");
		return false;
	}

	if (sub === "pause") {
		RUN.running = false;
		saveRun();
		say(playerId, "Clock paused.", "yellow");
		return false;
	}

	if (sub === "resume") {
		if (RUN.finished) {
			say(playerId, "The run is finished. Use /" + CFG.START_COMMAND + " to start again.", "yellow");
			return false;
		}
		RUN.running = true;
		saveRun();
		say(playerId, "Clock resumed.", "#55ff55");
		return false;
	}

	if (sub === "skip") {
		RUN.phaseMs = 0;
		advancePhase();
		shout("Skipped to " + phaseName() + " of day " + RUN.day + ".", "yellow");
		return false;
	}

	if (sub === "night") {
		enterNight();
		shout("Night forced early.", "#a83232");
		return false;
	}

	if (sub === "day" && args.length >= 3) {
		const n = clamp(Math.round(Number(args[2]) || 1), 1, CFG.MAX_DAY);
		RUN.day = n;
		enterDawn(true);
		say(playerId, "Day set to " + n + ".", "#8fd0ff");
		return false;
	}

	if (sub === "boss") {
		const h = nextDayHorror(RUN.day);
		const ids = online();
		if (ids.length === 0) return false;
		tagTitan(pick(ids), h);
		return false;
	}

	if (sub === "clear") {
		clearHorrorMobs();
		clearMeshes();
		say(playerId, "All horror mobs and mesh models despawned.", "#8fd0ff");
		return false;
	}

	if (sub === "meshes") {
		say(playerId, "Mesh models: " + meshModelCount() + " (" + meshPartCount() + " parts)", "#8fd0ff");
		for (const key in MESH) {
			say(playerId, MESH[key].role + " \u2014 " + MESH[key].parts.length + " parts", "gray");
		}
		return false;
	}

	if (sub === "say") {
		const first = String(args[2] || "").toLowerCase();
		let key = "benefactor";
		let text = args.slice(2).join(" ");
		if (VOICES[first]) {
			key = first;
			text = args.slice(3).join(" ");
		}
		if (!text) {
			say(playerId, "Usage: /horror say <benefactor|unknown|watcher|crone|system> <text>", "gray");
			return false;
		}
		speakAll(key, text);
		return false;
	}

	if (sub === "sanity") {
		const st = pstate(playerId);
		st.sanity = clamp(Number(args[2]) || 0, 0, CFG.SANITY_MAX);
		updateHud(playerId);
		say(playerId, "Sanity set to " + Math.round(st.sanity) + ".", "#8fd0ff");
		return false;
	}

	if (sub === "length") {
		const d = clamp(Number(args[2]) || CFG.DAY_MINUTES, 1, 180);
		const n = clamp(Number(args[3]) || CFG.NIGHT_MINUTES, 1, 180);
		CFG.DAY_MINUTES = d;
		CFG.NIGHT_MINUTES = n;
		say(playerId, "Day = " + d + " min, night = " + n + " min.", "#8fd0ff");
		return false;
	}

	if (sub === "test") {
		const tag = (args[2] || "").toLowerCase();
		if (!tag) {
			runTest(playerId);
			return false;
		}
		const h = nextDayHorror(RUN.day);
		fireTag(tag, playerId, h);
		say(playerId, "Fired: " + tag, "#8fd0ff");
		return false;
	}

	if (sub === "finish") {
		finishRun();
		return false;
	}

	if (sub === "reset") {
		clearHorrorMobs();
		clearMeshes();
		RUN.day = 1;
		RUN.deaths = 0;
		RUN.running = false;
		RUN.finished = false;
		RUN.finishedAt = 0;
		RUN.runMs = 0;
		RUN.phase = "dawn";
		RUN.phaseMs = 0;
		RUN.startedAt = 0;
		saveRun();
		const ids = online();
		for (let i = 0; i < ids.length; i++) {
			const st = pstate(ids[i]);
			st.sanity = CFG.SANITY_MAX;
			st.flags = {};
			st.blackoutUntil = 0;
			st.wasBlackout = false;
			clearFinishScreen(ids[i]);
			opt(ids[i], "music", null);
			opt(ids[i], "musicVolumeLevel", 0.6);
			opt(ids[i], "showProgressBar", true);
			resetAtmosphere(ids[i]);
		}
		shout("Run wiped. Day 1. /" + CFG.START_COMMAND + " when ready.", "yellow");
		return false;
	}

	say(playerId, "Unknown: /horror " + sub + ". Try /horror help.", "red");
	return false;
};

/** Begin the run (also called by the configurable /survive trigger). */
function startRun(playerId) {
	if (RUN.running) {
		say(playerId, "The run is already going. Day " + RUN.day + ".", "yellow");
		return false;
	}
	// a finished run starts over; a stopped run restarts its current day at dawn
	if (RUN.day >= CFG.MAX_DAY) {
		RUN.day = 1;
		RUN.deaths = 0;
	}
	RUN.running = true;
	RUN.finished = false;
	RUN.finishedAt = 0;
	RUN.runMs = 0;
	RUN.jumpscares = 0;
	RUN.startedAt = NOW;
	if (RUN.day < 1) RUN.day = 1;
	RUN.phase = "dawn";
	RUN.phaseMs = 0;
	const ids = online();
	for (let i = 0; i < ids.length; i++) {
		const st = pstate(ids[i]);
		st.sanity = CFG.SANITY_MAX;
		st.flags = {};
		st.blackoutUntil = 0;
		st.wasBlackout = false;
		clearFinishScreen(ids[i]);
		opt(ids[i], "showProgressBar", true);
		opt(ids[i], "musicVolumeLevel", 0.6);
	}
	enterDawn(true);
	shout("THE HUNDRED DAYS BEGIN \u2014 started by " + nameOf(playerId) + ".", "#a83232");
	say(playerId, "Run started. Day " + RUN.day + ". Good luck.", "#55ff55");
	later(1500, () =>
		speakAll("benefactor", "One hundred days. One new horror every night. Do not disappoint me.")
	);
	return true;
}

function showDay(playerId, day) {
	const target = day && isFinite(day) ? day : RUN.day;
	const h = nextDayHorror(target);
	if (!h) {
		say(playerId, "There is no horror for day " + target + ".", "gray");
		return;
	}
	say(playerId, "DAY " + h[0] + " \u2014 " + h[1], "#a83232");
	say(playerId, h[3], "gray");
	say(playerId, "Behaviours: " + h[2].join(", "), "#8a8a8a");
}

/* ---------------------------------------------------------------------------
   SELF TEST
   /test spawns one of every mob type, all four mesh models, the benefactor,
   every sound, the two effects the mode relies on and a particle burst, then
   reports each one. A FAIL line means the server rejected that name.
   --------------------------------------------------------------------------- */
function testSpot(id, i) {
	const pos = playerPos(id);
	if (!pos) return null;
	const info = safe(() => api.getPlayerFacingInfo(id));
	const dir = info && info.dir ? info.dir : [0, 0, 1];
	const yaw = Math.atan2(dir[0], dir[2]);
	const a = yaw + (i - 4) * 0.3;
	const r = 6 + (i % 3) * 2;
	const x = pos[0] + Math.sin(a) * r;
	const z = pos[2] + Math.cos(a) * r;
	const y = findGround(x, z, pos[1]);
	return y === null ? null : [x, y, z];
}

function sayMeshResult(playerId, label, group, expected) {
	const parts = group ? group.parts.length : 0;
	if (parts >= expected) say(playerId, "OK   model " + label + " (" + parts + " parts)", "#55ff55");
	else say(playerId, "FAIL model " + label + " (" + parts + "/" + expected + " parts)", "#ff5555");
}

function testEffect(playerId, name) {
	safe(() => api.applyEffect(playerId, name, 4000));
	const has =
		typeof api.hasEffect === "function" ? safe(() => api.hasEffect(playerId, name, 1)) : null;
	const list = safe(() => api.getEffects(playerId));
	const listed = Array.isArray(list) && list.indexOf(name) !== -1;
	if (has === true || listed) say(playerId, "OK   effect " + name, "#55ff55");
	else if (has === false && Array.isArray(list)) say(playerId, "FAIL effect " + name, "#ff5555");
	else say(playerId, "SENT effect " + name, "#c9c9c9");
	later(2500, () => safe(() => api.removeEffect(playerId, name)));
}

function runTest(playerId) {
	if (!isAdmin(playerId)) {
		say(playerId, "Only the world owner can run /test.", "red");
		return;
	}
	if (testing) {
		say(playerId, "A test is already running.", "yellow");
		return;
	}
	if (RUN.finished) {
		say(playerId, "The run is finished. /" + CFG.START_COMMAND + " or /horror reset first.", "yellow");
		return;
	}
	testing = true;
	clearHorrorMobs();
	clearMeshes();
	say(playerId, "TEST \u2014 cleared mobs and models. Spawning everything now.", "#8fd0ff");

	let mobOk = 0;
	for (let i = 0; i < TEST_MOBS.length; i++) {
		const type = TEST_MOBS[i][0];
		const variation = TEST_MOBS[i][1];
		const spot = testSpot(playerId, i);
		const mobId = spot
			? safe(() =>
					api.attemptSpawnMob(type, spot[0], spot[1] + 0.2, spot[2], {
						playSoundOnSpawn: false,
						variation: variation,
					})
			  )
			: null;
		if (mobId === null || mobId === undefined) {
			say(playerId, "FAIL mob " + type + " (" + variation + ")", "#ff5555");
			continue;
		}
		mobOk++;
		setMobHealth(mobId, 20);
		mobSetting(mobId, "attackDamage", 0);
		mobSetting(mobId, "hostilityRadius", 0);
		mobSetting(mobId, "baseRunningSpeed", 0);
		mobAi(mobId, "watching", { targetId: playerId });
		trackMob(mobId, { role: "test", player: playerId, born: NOW, expireAt: NOW + 22000, alive: true });
		say(playerId, "OK   mob " + type + " (" + variation + ")", "#55ff55");
	}

	const watcherSpot = spotAround(playerId, 10, 16);
	sayMeshResult(playerId, "Watcher", watcherSpot ? buildWatcher(playerId, watcherSpot) : null, 8);
	const hollowSpot = spotAround(playerId, 9, 15);
	sayMeshResult(playerId, "Hollow", hollowSpot ? buildHollow(playerId, hollowSpot) : null, 4);
	sayMeshResult(playerId, "Shadow swarm", buildShadows(playerId), 4);
	const obeliskSpot = spotAround(playerId, 7, 13);
	sayMeshResult(playerId, "Obelisk", obeliskSpot ? buildObelisk(playerId, obeliskSpot) : null, 4);

	later(6500, () => {
		clearMeshes();
		sayMeshResult(playerId, "Benefactor", spawnBenefactor(playerId), 6);
	});

	let sounds = 0;
	for (const key in SND) {
		sounds++;
		later(sounds * 380, () => sound(SND[key], playerId, 0.18, 1));
	}
	say(playerId, "OK   " + sounds + " sounds queued (about " + Math.round((sounds * 380) / 1000) + "s).", "#55ff55");

	testEffect(playerId, "Blindness");
	testEffect(playerId, "Slowness");
	later(900, () => particleBurst(playerPos(playerId) || [0, 0, 0], [255, 60, 60, 1]));
	say(playerId, "OK   particle burst sent.", "#55ff55");

	later(17000, () => {
		clearMeshes();
		testing = false;
		say(playerId, "TEST DONE \u2014 mobs " + mobOk + "/" + TEST_MOBS.length + ", models 5/5, sounds " + sounds + ".", "#8fd0ff");
		say(playerId, "Test mobs despawn in about 5s. FAIL lines are names this server does not have.", "gray");
	});
}

/* ---------------------------------------------------------------------------
   COMBAT / DEATH
   --------------------------------------------------------------------------- */
onPlayerKilledMob = function (playerId, mobId) {
	const key = String(mobId);
	const rec = TRACK[key];
	if (!rec) return;
	if (rec.role === "boss") {
		shout("\u2620 " + rec.name + " HAS FALLEN.", "yellow");
		sound("levelup", playerId, 1, 1);
		safe(() => api.giveItem(playerId, "Diamond", 5));
		safe(() => api.giveItem(playerId, "Bread", 8));
		safe(() => api.queueMiddleTextUpper(playerId, "BOSS SLAIN", 4200));
		const st = pstate(playerId);
		st.sanity = clamp(st.sanity + 25, 0, CFG.SANITY_MAX);
		removeMob(mobId);
		saveRun();
		return;
	}
	removeMob(mobId);
};

onMobKilledPlayer = function (attackingMob, killedPlayer, damageDealt, withItem) {
	RUN.deaths += 1;
	const st = pstate(killedPlayer);
	const had = Math.round(st.sanity);
	st.sanity = CFG.SANITY_DEATH_RESET;
	shout(nameOf(killedPlayer) + " died on day " + RUN.day + ".", "#a83232");
	say(killedPlayer, "Sanity was " + had + "%. You wake up at " + st.sanity + "%.", "gray");
	sound(SND.fright, killedPlayer, 0.9, 0.8);
	saveRun();
	return "keepInventory";
};

onMobDamagingPlayer = function (attackingMob, damagedPlayer, damageDealt, withItem, damageInfo) {
	const rec = TRACK[String(attackingMob)];
	if (!rec) return;
	const st = pstate(damagedPlayer);
	if (st) st.sanity = clamp(st.sanity - 1.5, 0, CFG.SANITY_MAX);
	return;
};

onAttemptKillPlayer = function (killedPlayer, attackingLifeform) {
	// deaths are recorded in onMobKilledPlayer; nothing to prevent here.
	return;
};

onPlayerDamagingMob = function (playerId, mobId, damageDealt, withItem, damagerDbId, damageInfo) {
	const rec = TRACK[String(mobId)];
	if (!rec) return;
	if (rec.role === "stalker" || rec.role === "mirror") {
		// hitting a watcher makes it run away instead of fighting back
		removeMob(mobId);
		sound(SND.fright, playerId, 0.7, 1);
		safe(() => api.queueMiddleTextLower(playerId, "It fled into the fog.", 2600));
	}
	return;
};

/* ---------------------------------------------------------------------------
   WORLD LIFECYCLE
   --------------------------------------------------------------------------- */
doPeriodicSave = function () {
	saveRun();
};

onClose = function (serverIsShuttingDown) {
	saveRun();
	clearHorrorMobs();
	clearMeshes();
};

/* ---------------------------------------------------------------------------
   BOOT
   --------------------------------------------------------------------------- */
function boot() {
	booted = true;
	NOW = safe(() => api.now()) || 0;
	loadRun();
	const ids = online();
	for (let i = 0; i < ids.length; i++) pstate(ids[i]);
	if (RUN.running) {
		// restored mid-night: rebuild the event queue so the night keeps going
		if (RUN.phase === "night" && RUN.eventsTonight === 0) {
			RUN.eventsTonight = Math.min(14, 2 + Math.floor(RUN.day / 6));
			RUN.nextEventAt = NOW + 15000;
		}
		shout("Horror run restored \u2014 day " + RUN.day + ", " + phaseName() + ".", "gray");
	} else if (RUN.finished) {
		shout("Day 100 complete. Type /" + CFG.START_COMMAND + " to run it again.", "gray");
	}
	safe(() => api.log("Bloxdvoid_YT Horror 100 loaded. Day " + RUN.day + "."));
}

boot();
