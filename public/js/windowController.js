(function(){
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
        
        if(fullscreenElem.classList.contains("icon-window-maximize")) {
            win.maximize();
            fullscreenElem.classList.remove("icon-window-maximize");
            fullscreenElem.classList.add("icon-window-restore")
        }
        else {
            win.restore();
            fullscreenElem.classList.remove("icon-window-restore");
            fullscreenElem.classList.add("icon-window-maximize")
        }
    });

    closeElem.addEventListener("click", function(){
        const win = remote.getCurrentWindow();
        win.close();
    });

    window.addEventListener("resize", function(){
        const height = window.outerHeight;
        const width = window.innerWidth;
        console.log([width, height]);
        if([width, height] === [screen.width, screen.height]) {
            console.log("same");
        }
        // if(fullscreenElem.classList.contains("icon-window-restore")) {
        //     fullscreenElem.classList.remove("icon-window-restore");
        //     fullscreenElem.classList.add("icon-window-maximize")
        // }
    });

})();
