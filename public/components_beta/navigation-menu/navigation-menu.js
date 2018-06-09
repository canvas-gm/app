// Require Third-party dependencies
const { shell } = require("electron");

// Require Internal Dependencies
const viewComponent = require("../viewComponent.js");

/**
 * @class NavigationMenu
 * @classdesc nav-menu HTML Element!
 * @extends viewComponent
 */
class NavigationMenu extends viewComponent {

    /**
     * @constructor
     */
    constructor() {
        super("navigation-menu");
        this.addEventListener("click", () => {
            if (this.hasAttribute("href")) {
                return shell.openExternal(this.getAttribute("href"));
            }

            if (this.hasAttribute("view")) {
                const viewElement = document.querySelector("main-view");
                viewElement.dispatchEvent(new CustomEvent("loadview", {
                    detail: this.getAttribute("view")
                }));
            }

            return void 0;
        });
    }

}

module.exports = NavigationMenu;

