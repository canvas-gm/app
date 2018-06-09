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
     * @param {!String} viewName name of view
     * @returns {void}
     */
    loadView(viewName) {
        console.log(`loading view name ${viewName}`);
    }

}

module.exports = MainView;

