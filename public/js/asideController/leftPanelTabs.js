document.addEventListener("DOMContentLoaded", () => {
    const servers = document.getElementById("servers");
    const projects = document.getElementById("projects");
    const tabs = [servers, projects];

    const projectsPanel = document.querySelector("#projectsPanel");
    const serversPanel = document.querySelector("#serversPanel");

    servers.addEventListener("click", () => {
        
        projectsPanel.style.display = "none";
        serversPanel.style.display = "flex";
        setActive(servers);
    });

    projects.addEventListener("click", () => {
        projectsPanel.style.display = "flex";
        serversPanel.style.display = "none";
        setActive(projects);
    });

    function setActive(element) {
        for (const tab of tabs) {
            tab.classList.remove("active");
            element.classList.add("active");
        }
    }
});
