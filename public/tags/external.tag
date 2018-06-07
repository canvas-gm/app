<a-external>
    <a ref="a"><yield /></a>

    <script>
        const { shell } = require("electron");

        this.on('mount', () => {
            const linkElement = this.refs.a;

            // set opts to a attributes (don't find a riotjs syntax for this)
            for (const [key, value] of Object.entries(this.opts)) {
                linkElement.setAttribute(key, value);
            }

            // handle click without bad side-effect of external link in electron app
            linkElement.addEventListener('click', (e) => {
                e.preventDefault();
                shell.openExternal(linkElement.getAttribute("href");
            });
        });

        this.on('update', () => {
            const linkElement = this.refs.a;

            for (const [key, value] of Object.entries(this.opts)) {
                linkElement.setAttribute(key, value);
            }
        });
    </script>
</a-external>
