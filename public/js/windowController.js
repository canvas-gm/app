document.addEventListener("DOMContentLoaded", () => {
    const { remote } = require("electron");

    // Retrieve windows
    const win = remote.getCurrentWindow();

    // Retrive Windows Controller elements!
    const minimizeElem = document.getElementById("minimize");
    const fullscreenElem = document.getElementById("fullscreen");
    const closeElem = document.getElementById("close");

    minimizeElem.addEventListener("click", () => {
        remote.getCurrentWindow().minimize();
    });

    closeElem.addEventListener("click", () => {
        remote.getCurrentWindow().close();
    });

    fullscreenElem.addEventListener("click", function minimizeAndMaximizeController() {
        if(win.isMaximized()) {
            return win.restore();
        }
        win.maximize();
    });

    window.addEventListener("resize", function resize() {
        const isMaximized = win.isMaximized();
        fullscreenElem.classList.remove( isMaximized ? "icon-window-maximize" : "icon-window-restore");
        fullscreenElem.classList.add( isMaximized ? "icon-window-restore" : "icon-window-maximize" );
    });
});
