<member-area>
    <style>
        member-area {
            display: flex;
            height: 100px;
            flex-shrink: 0;
            padding: 8px;
            box-sizing: border-box;
            background: #FFF;
            border: 2px solid #78909C;
            box-shadow: 0 0 2px #FFF inset;
        }

            member-area > img {
                height: 80px;
                width: 80px;
                border: 2px solid #78909C;
                box-sizing: border-box;
                border-radius: 80px;
            }
            member-area > .information {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: flex-start; 
                flex: 1;
                margin-left: 10px;
            }
                member-area > .information > p {
                    font-weight: bold;
                    font-size: 16pt;
                }
                member-area > .information > button {
                    background: orangered;
                    color: white;
                    border: 2px solid red;
                    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
                }
    </style>

    <img src="../public/img/gamepad.svg">
    <section class="information">
        <p id="pseudo">{ opts.user.pseudo }</p>
        <button id="AuthenticationLogout">Logout</button>
    </section>
    <script>
        this.on("mount", function(){
            const AuthenticationLogout = document.getElementById("AuthenticationLogout");
            AuthenticationLogout.addEventListener("click", function(){
                openPopup("authentication");
            });
        });
    </script>
</member-area>