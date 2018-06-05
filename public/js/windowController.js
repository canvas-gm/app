document.addEventListener("DOMContentLoaded", () => {
    const {remote} = require("electron");

    const minimizeElem = document.getElementById("minimize");
    const fullscreenElem = document.getElementById("fullscreen");
    const closeElem = document.getElementById("close");

    minimizeElem.addEventListener("click", function(){
        const win = remote.getCurrentWindow();
        win.minimize();
    });

    fullscreenElem.addEventListener("click", function(){
        const win = remote.getCurrentWindow();
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
    });

    closeElem.addEventListener("click", function(){
        const win = remote.getCurrentWindow();
        win.close();
    });

    window.addEventListener("resize", function(){
        const win = remote.getCurrentWindow();
        if(win.isMaximized()) {
            fullscreenElem.classList.remove("icon-window-maximize");
            fullscreenElem.classList.add("icon-window-restore")
        }
        else {
            fullscreenElem.classList.remove("icon-window-restore");
            fullscreenElem.classList.add("icon-window-maximize")
        }
    });

});
