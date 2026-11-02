// Paste this as the whole world code to find out whether this world shows
// custom buttons at all. Join, press B, and look for one button called
// "Test button" (house icon). Press it, or press H.
//
// If the button is there, custom buttons work and the problem is in the main
// script. If it is not there, this world or client cannot show them, and the
// main script has to be reached through the shop tabs instead.

function onPlayerJoin(playerId) {
    try {
        api.setClientOption(playerId, "customButtons", [
            { id: "vb_test", icon: "house", keycode: "KeyH", description: "Test button" },
        ]);
        api.sendMessage(playerId, "TEST: one custom button requested. Press B, or press H.");
    } catch (e) {
        api.sendMessage(playerId, "TEST: setClientOption threw - " + (e && e.message ? e.message : String(e)));
    }
}

function onPlayerPressedButton(playerId, buttonId) {
    api.sendMessage(playerId, "TEST: button fired -> " + buttonId);
}
