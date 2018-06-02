document.addEventListener("DOMContentLoaded", () => {
    const panel = document.getElementById("panelController");
    const leftPanel = document.getElementById("leftPanel");
    let isClose = false;

    panel.addEventListener("mouseover", () => {
        panel.classList.add(isClose ? "icon-right-dir" : "icon-left-dir");
    });

    panel.addEventListener("mouseleave", () => {
        panel.classList.remove(isClose ? "icon-right-dir" : "icon-left-dir");
    });

    panel.addEventListener("click", () => {
        if(isClose === true){
            panel.classList.remove("icon-right-dir");
            leftPanel.style.display = "flex";
        }
        else{
            panel.classList.remove("icon-left-dir");
            leftPanel.style.display = "none";
        }
        isClose = !isClose;
    });
});
