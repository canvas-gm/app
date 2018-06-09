document.addEventListener("DOMContentLoaded", () => {
    const { shell } = require("electron");
    const gitElem = document.getElementById("git");
    gitElem.addEventListener("click", () => {
        shell.openExternal("https://github.com/canvas-gm");
    });

    const discordElem = document.getElementById("discord");
    discordElem.addEventListener("click", () => {
        shell.openExternal("https://discord.gg/cSKpZK9");
    });
});
