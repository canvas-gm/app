document.addEventListener("DOMContentLoaded", () => {
    const { shell } = require("electron");
    const gitElem = document.getElementById("git");
    gitElem.addEventListener("click", function(){
        shell.openExternal("https://github.com/canvas-gm");
    });

    const discordElem = document.getElementById("discord");
    discordElem.addEventListener("click", function(){
        shell.openExternal("https://discord.gg/cSKpZK9");
    });

    const hubElem = document.getElementById("hub");
    hubElem.addEventListener("click", unmountContent);

});
