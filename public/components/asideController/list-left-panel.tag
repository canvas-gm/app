<list-left-panel>
    <section each={ data } class="row">
        <section class="state { state ? state : "null"}"></section>
        <section class="title">
            <p>{ name }</p>
        </section>
    </section>
    <script>
        this.data = [];
        const option = this.root.getAttribute("option");
        switch(option){
            case "project":
                this.data = require('../config/projects.json');
            break;
            case "server":
                this.data = require('../config/servers.json');
            break;
            default:
                this.data = require('../config/projects.json');
            break;
        }
    </script>

    <style>
        list-left-panel {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            min-width: 0;
            box-sizing: border-box;
            padding: 2px;
            border-radius: 0 0 3px 3px;
            background: var(--soft-background);
            overflow-y: auto;
        }

            list-left-panel > .row {
                display: flex;
                align-items: center;
                flex-shrink: 0;
                width: 100%;
                height: 40px;
                padding: 4px;
                box-sizing: border-box;
                background: white;
                border-radius: 0 0 3px 3px;
                cursor: pointer;
            }
                list-left-panel > .row:not(:last-child) {
                    margin-bottom: 2px;
                }
                list-left-panel > .row:hover {
                    box-shadow: 0 0 5px #8D6E63 inset;
                }

                list-left-panel > .row > .title {
                    display: flex;
                    align-items: center;
                    flex: 1;
                    min-width: 0;
                    height: 100%;
                    box-sizing: border-box;
                    margin: 0 10px;
                    text-overflow: ellipsis;
                }
                    list-left-panel > .row > .title > p {
                        font-size: 11pt;
                        color: #37474F;
                        font-weight: 500;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                list-left-panel > .row > .state {
                    display: flex;
                    width: 10px;
                    height: 10px;
                    border-radius: 10px;
                    margin-left: 5px;
                }
                list-left-panel > .row > .state.connection {
                    background: #FFA000;
                    border: 1px solid #E65100;
                }
                list-left-panel > .row > .state.connected {
                    background: #00E676;
                    border: 1px solid #00C853;
                }
                list-left-panel > .row > .state.disconnected {
                    background: #F44336;
                    border: 1px solid #B71C1C;
                }
                list-left-panel > .row > .state.null {
                    background: #CFD8DC;
                    border: 1px solid #78909C;
                }
    </style>
</list-left-panel>
