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
        panel.classList.remove( isClose ? "icon-right-dir" : "icon-left-dir");
        leftPanel.classList.toggle("hide");
        isClose = !isClose;
    });
});
