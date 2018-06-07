document.addEventListener("DOMContentLoaded", () => {
    const { remote } = require("electron");

    // Get current windows!
    const win = remote.getCurrentWindow();

    // Retrive Windows Controller elements!
    const minimizeElem = document.getElementById("minimize");
    const fullscreenElem = document.getElementById("fullscreen");
    const closeElem = document.getElementById("close");

    // Handle minimize and maximize windows
    function minimizeAndMaximizeController() {
        if(win.isMaximized()) {
            win.restore();
            fullscreenElem.classList.remove("icon-window-maximize");
            fullscreenElem.classList.add("icon-window-restore")
        }
        else {
            win.maximize();
            fullscreenElem.classList.remove("icon-window-restore");
            fullscreenElem.classList.add("icon-window-maximize")
        }
    }

    // Add events on "click"
    minimizeElem.addEventListener("click", win.minimize.bind(win));
    closeElem.addEventListener("click", win.close.bind(win));
    fullscreenElem.addEventListener("click", minimizeAndMaximizeController);
    window.addEventListener("resize", minimizeAndMaximizeController);
});
