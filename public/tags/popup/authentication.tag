<authentication>
    <p>test</p>
    <script>
        this.on("mount", function(){
            const validButton = document.querySelector("popup > .popup > .buttons > .valid");
            validButton.addEventListener("click", () => {
                closePopup();
            });
            this.data = {
                title: "Anthentificaiton"
            };

            console.log(this.parent);
            this.parent.updatePopupOpts("authentication", this.data);
            
        });
        this.on("update", function() {
            // console.log("updated with the parent");
        })
    </script>
</authentication>