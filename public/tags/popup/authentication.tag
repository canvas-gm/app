<authentication>
    <form>
        <input id="mail" placeholder="email" type="text">
        <input id="password" placeholder="password" type="password">
    </form>
    <section class="errorMessage">
        <p>{ opts.loginErrorMessage }</p>
    </section>
    <section class="links">
        <a href="http://www.google.fr" id="forgetPw">Mot de passe oublié ?</a>
        <a href="http://www.google.com" id="signIn">S'inscrire</a>
    </section>


    <script>
        const { shell } = require("electron");
        this.on("mount", function(){
            this.data = {
                title: "Anthentificaiton"/*,
                modalType: "onlyValid"*/
            };
            this.parent.updatePopupOpts("authentication", this.data);
            
            const links = document.querySelectorAll("authentication > .links");
            links.forEach( (aElem) => {
                aElem.addEventListener("click", function(event){
                    event.preventDefault();
                    shell.openExternal(event.target.href)
                });
            });

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
                    this.opts.loginErrorMessage = "Compte inexistant ou mauvais mdp";
                    this.update();
                }
            });
        });

        this.on("update", function() {
            // console.log("updated with the parent");
        })
    </script>

    
    <style>
        authentication {
            display: flex;
            flex-direction: column;
            width: 300px;
            padding: 10px;
        }
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

            authentication > .links{
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                font-size: 10pt;
                font-weight: bold;
                padding: 0 10px;
            }
    </style>
</authentication>