<popup>
    <section class="popup">
        <section class="title">
            <p show={ title }>{ title }</p>
            <span
                hide={ opts.modalType === "onlyValid" }
                class="icon-window-close"
                ref="close">
            </span>
        </section>
        <section class="content">
            <yield/>
        </section>
        <section hide={ modalType === "noButtons" } class="buttons">
            <button class="valid">Valider</button>
            <button
                hide={ modalType === "onlyValid" }
                class="cancel"
                ref="cancel">
                Annuler
            </button>
        </section>
    </section>

    <script>
        this.on("mount", () => {
            this.root.classList.add("show");
            // Add cancel & close events
            this.refs.close.addEventListener("click", () => {
                closePopup(this.opts.onClosePopup);
            });
            this.refs.cancel.addEventListener("click", () => {
                closePopup(this.opts.onClosePopup)
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
            background: rgba(50, 50, 50, 0.4);
            z-index: 999;
        }
            popup.show {
                display: flex;
            }

            popup > .popup {
                display: flex;
                flex-direction: column;
                flex-shrink: 0;
                background: var(--soft-background);
                border: 2px solid #FFF;
                padding: 5px;
                border-radius: 4px;
                box-shadow: 0 0 10px #263238;
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
                }
                    popup > .popup > .title > .icon-window-close:hover {
                        cursor: pointer;
                        color: var(--soft-red);
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
