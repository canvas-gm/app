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
        this.addEventListener("open", this.open);
        this.addEventListener("close", this.close);

        const cancelElement = this.shadowRoot.querySelector(".cancel");
        cancelElement.addEventListener("click", (event) => {
            event.preventDefault();
            this.close();
        });
    }

    /**
     * @method open
     * @memberof Popup#
     * @param {EventListenerOrEventListenerObject=} event eventListener
     * @returns {void}
     */
    open(event) {
        const link = document.querySelector("link[rel=\"import\"]");

        /** @type {HTMLTemplateElement} */
        const tmpl = link.import.getElementById(event.detail);
        if (!tmpl) {
            return;
        }

        // If already open (remove old children).
        const clone = tmpl.content.cloneNode(true);
        if (this.isOpen) {
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }
        }
        this.appendChild(clone);

        // Show popup
        this.isOpen = true;
        if (this.classList.contains("hidden")) {
            this.classList.remove("hidden");
        }
    }

    /**
     * @method close
     * @memberof Popup#
     * @param {EventListenerOrEventListenerObject=} event eventListener
     * @returns {void}
     */
    close() {
        if (!this.isOpen) {
            return;
        }

        this.classList.add("hidden");
        this.isOpen = false;
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
    }

}

module.exports = Popup;

