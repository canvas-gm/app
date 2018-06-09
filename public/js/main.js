// Require Node.JS Dependencies
const { join } = require("path");

// Require Third-party dependencies
const componentLoader = require("../public/js/componentLoader.js");

async function main() {
    const loader = new componentLoader("public/components_beta");
    await loader.initialize();
    await Promise.all([
        loader.loadComponent("news-container"),
        loader.loadComponent("main-view"),
        loader.loadComponent("navigation-menu"),
        loader.loadComponent("extern-link")
    ]);
}

document.addEventListener("DOMContentLoaded", () => {
    main().catch(console.error);
});
