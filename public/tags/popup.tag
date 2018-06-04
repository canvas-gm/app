<popup>
    <style>
        popup {
            display: none;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.5);
        }
    </style>

    <section class="popup">
        <section class="title">
            <p></p>
            <span class="icon-window-close"></span>
        </section>
        <section class="content">
            <yield/>
        </section>
    </section>
    <script>
    ( () => {
        this.on("mount", function() {
            document.querySelector("popup").style.display = "flex";
            const popupCloseElem = document.querySelector("popup > .popup > .title > .icon-window-close");
            
            popupCloseElem.addEventListener("click", () => {
                this.unmount(true);
                const popup = document.querySelector("popup").style.display = "none";
            });
        });
    })();
    </script>
</popup>