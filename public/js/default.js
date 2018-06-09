// Require Third-party dependencies
const componentLoader = require("../public/js/componentLoader.js");

async function main() {
    const loader = new componentLoader("public/components");
    await loader.initialize();
    await Promise.all([
        loader.loadComponent("favorite-list-panel"),
        loader.loadComponent("news-container"),
        loader.loadComponent("news-element"),
        loader.loadComponent("main-view"),
        loader.loadComponent("navigation-menu"),
        loader.loadComponent("extern-link")
    ]);
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMLoaded!");
    main().catch(console.error);
});
