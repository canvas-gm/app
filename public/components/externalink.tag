<externalink>
    <a ref="a">
        <yield />
    </a>

    <script>
        this.root;
        const { shell } = require("electron");
        
        this.on('mount', () => {
            const linkElement = this.refs.a;
            linkElement.setAttribute("href", this.root.getAttribute("href"));
            linkElement.addEventListener('click', (e) => {
                e.preventDefault();
                shell.openExternal(linkElement.getAttribute("href"));
            });
        });
    </script>
</externalink>
