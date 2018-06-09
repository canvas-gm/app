// Require Internal Dependencies
const viewComponent = require("../viewComponent.js");

/**
 * @class MainView
 * @classdesc Main View handler!
 * @extends viewComponent
 */
class MainView extends viewComponent {

    /**
     * @constructor
     */
    constructor() {
        super("main-view");
        this.active = null;
        this.viewContainer = document.getElementById("view-container");

        // Load default view!
        if (this.hasAttribute("default")) {
            this.loadView(this.getAttribute("default"));
        }

        // Catch load view event
        this.addEventListener("loadview", (opts) => {
            this.loadView(opts.detail);
        });
    }

    /**
     * @public
     * @method loadView
     * @memberof MainView#
     * @param {!String} elementName name of the element to create
     * @returns {void}
     */
    loadView(elementName) {
        if (this.active === elementName) {
            return;
        }
        console.log(`loading element name ${elementName}`);
        const el = document.createElement(elementName);
        this.innerHTML = "";
        this.appendChild(el);
        this.active = elementName;
    }

}

module.exports = MainView;

