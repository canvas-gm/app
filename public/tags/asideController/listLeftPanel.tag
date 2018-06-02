<listLeftPanel>
    <section each={ opts.data } class="row">
        <img src="../public/img/gamepad.svg">
        <section class="title">
            <p>{ name }</p>
        </section>
        <section class="state { state ? state : ""}">
        </section>
    </section>
    <script>
        const option = this.root.getAttribute("option");
        let data;
        switch(option){
            case "project": data = require('../config/projects.json'); break;
            case "server": data = require('../config/servers.json'); break;
            default: data = require('../config/projects.json'); break;  
        }
        this.opts = data;
    </script>
</listLeftPanel>
