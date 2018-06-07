<externalink>
        <yield />

    <script>
        const { shell } = require("electron");
        
        this.on('mount', () => {
            const link = this.root.getAttribute("href");
            this.root.addEventListener('click', () => {
                shell.openExternal(link);
            });
        });
    </script>
</externalink>
