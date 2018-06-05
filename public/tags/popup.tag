<popup>
    <style>
        popup {
            display: none;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }
            popup > .popup {
                background: var(--soft-background);
                padding: 5px;
            }
            popup > .popup > .title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: var(--border-color);
                padding: 2px 5px;
                color: white;
                font-weight: bold;
            }
                popup > .popup > .title > .icon-window-close:hover {
                    color: red;
                }
            popup > .popup > .content {
                margin -top : 10px;
            }
    </style>

    <section class="popup">
        <section class="title">
            <p>{ opts.title }</p>
            <span class="icon-window-close"></span>
        </section>
        <section class="content">
            <yield/>
        </section>
        <section class="buttons">
            <button class="valid">Valider</button>
            <button class="cancel">Annuler</button>
        </section>
    </section>

    <script>
        this.on("mount", function() {
            document.querySelector("popup").style.display = "flex";

            const popupCloseElem = document.querySelector("popup > .popup > .title > .icon-window-close");
            popupCloseElem.addEventListener("click", () => {
                closePopup();
            });

            const cancelButton = document.querySelector("popup > .popup > .buttons > .cancel");
            cancelButton.addEventListener("click", () => {
                closePopup();
            });
        });

        this.mixin("addUpdateOpts");
    </script>
</popup>