// Require Internal Dependencies
const viewComponent = require("../viewComponent.js");

/**
 * @class Popup
 * @classdesc Popup wrapper!
 * @extends viewComponent
 *
 * @property {Boolean} isOpen
 */
class Popup extends viewComponent {

    /**
     * @constructor
     */
    constructor() {
        super("pop-up");
        this.isOpen = false;
        this.addEventListener("open", this.open.bind(this));
        this.addEventListener("close", this.close.bind(this));
    }

    /**
     * @method open
     * @memberof Popup#
     * @param {EventListenerOrEventListenerObject=} event eventListener
     * @returns {void}
     */
    open(event) {
        console.log("open triggered!");
        if (this.isOpen) {
            // TODO delete rendered clone ?
            this.close();
        }
        this.isOpen = true;
        this.classList.remove("hidden");

        console.log(event.detail);
    }

    /**
     * @method close
     * @memberof Popup#
     * @param {EventListenerOrEventListenerObject=} event eventListener
     * @returns {void}
     */
    close() {
        console.log("close triggered!");
        this.classList.add("hidden");
        this.isOpen = false;
    }

}

module.exports = Popup;

