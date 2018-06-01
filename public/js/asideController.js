(function(){
    let asideController = document.getElementById("asideController");
    let asideControllerClose = false;
    asideController.addEventListener("mouseover", (event) => {
        if(asideControllerClose === true){
            asideController.classList.add("icon-right-dir");
        }
        else{
            asideController.classList.add("icon-left-dir");
        }
    });
    asideController.addEventListener("mouseleave", (event) => {
        if(asideControllerClose === true){
            asideController.classList.remove("icon-right-dir");
        }
        else{
            asideController.classList.remove("icon-left-dir");
        }
    });

    asideController.addEventListener("click", (event) => {
        
        let aside = document.getElementById("leftPanel");
        if(asideControllerClose === true){
            asideController.classList.remove("icon-right-dir");
            aside.style.display = "flex";
        }
        else{
            asideController.classList.remove("icon-left-dir");
            aside.style.display = "none";
        }
        asideControllerClose = !asideControllerClose;
    });
})();
