<server-project-list>
    
    <section each={ data } class="row">
        <img src="{imgSrc}">
        <section>
            <p>{ name }</p>
            <span>{ description }</span>
        </section>
    </section>
    

    <script>
        this.data = require('../config/serverProjectList.json');

        this.on("mount", () => {
            this.parent.updatePopupOpts("server-project-list", {
                title: "Liste des projets",
                modalType: "noButtons"
            })
        });
    </script>

    <style>
        server-project-list{
            display : flex;
            flex-direction : column
        }
            server-project-list > .row{
                display: flex;
                flex-direction : row;
                padding: 5px;
                box-sizing: border-box;
            }
                server-project-list > .row > img{
                    height : 50px;
                    width: 50px;
                }
    </style>
</server-project-list>