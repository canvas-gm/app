<popup>
    <section class="popup">
        <section class="title">
            <p>{ opts.title }</p>
            <span hide={opts.modalType == "onlyValid"} class="icon-window-close"></span>
        </section>
        <section class="content">
            <yield/>
        </section>
        <section class="buttons">
            <button class="valid">Valider</button>
            <button hide={opts.modalType == "onlyValid"} class="cancel">Annuler</button>
        </section>
    </section>


    <script>
        this.on("mount", function() {
            // this.opts.modelType = "simple";
            // simple, closeWindow, onlyValid 
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
                display: flex;
                flex-direction: column;
                flex-shrink: 0;
                background: var(--soft-background);
                padding: 5px;
            }
            popup > .popup > .title {
                position :relative;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--border-color);
                padding: 2px 5px;
                color: white;
                font-weight: bold;
            }
                popup > .popup > .title > p {
                    color: white;
                }
                popup > .popup > .title > .icon-window-close {
                    position: absolute;
                    right: 5px;
                    cursor: pointer;
                }
                    popup > .popup > .title > .icon-window-close:hover {
                        color: red;
                    }
            popup > .popup > .content {
                margin-top : 10px;
            }
        popup > .popup > .buttons {
            display: flex;
            justify-content: space-evenly;
            margin-top: 10px;
        }
    </style>
</popup>