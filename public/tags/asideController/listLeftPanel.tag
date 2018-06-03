<listLeftPanel>
    <section each={ opts.data } class="row">
        <section class="state { state ? state : "null"}"></section>
        <section class="title">
            <p>{ name }</p>
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
