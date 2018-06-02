(function(){
    let servers = document.getElementById('servers');
    let projects = document.getElementById("projects");
    const tabs = [servers, projects];

    let projectsPanel = document.querySelector("nav > .projectsPanel");
    let serversPanel = document.querySelector("nav > .serversPanel");

    servers.addEventListener("click", (event) => {
        
        projectsPanel.style.display = "none";
        serversPanel.style.display = "flex";
        setActive(servers);
    });

    projects.addEventListener("click", (event) => {
        projectsPanel.style.display = "flex";
        serversPanel.style.display = "none";
        setActive(projects);
    });

    function setActive(element){
        for(tab of tabs){
            tab.classList.remove("active");
            element.classList.add("active")
        }
    }
})()