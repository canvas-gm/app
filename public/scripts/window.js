// Require Third-party Dependencies
const { remote } = require("electron");

/* Execute When the DOM has ben loaded */
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve current electron window!
    const win = remote.getCurrentWindow();

    /* Minimize window */
    document.getElementById("minimize").addEventListener("click", () => {
        remote.getCurrentWindow().minimize();
    });

    /* Close window */
    document.getElementById("close").addEventListener("click", () => {
        remote.getCurrentWindow().close();
    });

    // Retrive Windows Controller elements!
    const fullscreenElem = document.getElementById("fullscreen");
    fullscreenElem.addEventListener("click", function minimizeAndMaximizeController() {
        if (win.isMaximized()) {
            return win.restore();
        }

        return win.maximize();
    });

    window.addEventListener("resize", function onWindowResize() {
        const isMaximized = win.isMaximized();
        fullscreenElem.classList.remove(isMaximized ? "icon-window-maximize" : "icon-window-restore");
        fullscreenElem.classList.add(isMaximized ? "icon-window-restore" : "icon-window-maximize");
    });
});
