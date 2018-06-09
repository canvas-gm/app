<authentication>
    <form>
        <input id="mail" placeholder="email" type="text">
        <input id="password" placeholder="password" type="password">
    </form>
    <section class="errorMessage" show={ loginErrorMessage != null }>
        <p>{ loginErrorMessage }</p>
    </section>
    <section class="links">
        <extern-link href="http://www.google.fr">Mot de passe oublié ?</extern-link>
        <extern-link href="http://www.google.com">S'inscrire</extern-link>
    </section>

    <script>
        this.on("mount", function() {
            this.parent.updatePopupOpts("authentication", {
                title: "Authentication"
            });
            this.loginErrorMessage = null;

            const validButton = document.querySelector("popup > .popup > .buttons > .valid");
            validButton.addEventListener("click", () => {
                var users = require("../config/users.json").users;

                const mail = document.getElementById("mail").value;
                const password = document.getElementById("password").value;

                let findUser = false;
                let userInfo;
                users.forEach((user) => {
                    if( user.mail === mail && user.password === password ) {
                        findUser = true;
                        userInfo = user;
                        return;
                    }
                });

                if(findUser === true) {
                    const memberArea = document.querySelector("member-area")._tag;
                    // Remove password for security
                    memberArea.opts.user = userInfo;
                    memberArea.opts.loginButtonText = "Logout";
                    memberArea.update();
                    closePopup();
                }
                else {
                    this.loginErrorMessage = "Compte inexistant ou mauvais mdp";
                    this.update();
                }
            });
        });
    </script>


    <style>
        authentication {
            display: flex;
            flex-direction: column;
            width: 300px;
            padding: 10px;
        }

            /*
             * Authentication form
             */
            authentication > form {
                display: flex;
                flex-direction: column;
            }
                authentication > form > input {
                    padding: 2px 5px;
                    border-radius: 5px;
                    border: none;
                }
                authentication > form > input:not(:last-child){
                    margin-bottom: 5px;
                }

            /*
             * Authentication links
             */
            authentication > section.links {
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                font-size: 10pt;
                font-weight: bold;
                padding: 0 10px;
            }
    </style>
</authentication>
