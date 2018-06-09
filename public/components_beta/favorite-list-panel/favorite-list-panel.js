// Require Third-party Dependencies
const is = require("@sindresorhus/is");

// Require (Test) payloads
const payloads = require("./favorite.json");

/**
 * @const availableState
 * @type {Set<String>}
 * @desc Available Row state
 */
const availableState = new Set([
    "connected",
    "disconnected",
    "connection",
    "null"
]);

/**
 * @class NewsContainer
 * @extends HTMLElement
 */
class FavoriteListPanel extends HTMLElement {

    /**
     * @constructor
     * @throws {Error}
     */
    constructor() {
        super();
        const panelType = this.getAttribute("type");
        const data = Reflect.get(payloads, panelType);
        if (is.nullOrUndefined(data)) {
            throw new Error(`Invalid panel type ${panelType}`);
        }

        // Create tabs

        // Add all data
        const fragment = document.createDocumentFragment();
        for (const { name, state } of data) {
            fragment.appendChild(FavoriteListPanel.createRow(name, state));
        }
        this.appendChild(fragment);
    }

    /**
     * @static
     * @method createRow
     * @desc Create a new row !
     * @param {!String} title row title
     * @param {String=} state row state
     * @returns {Node}
     *
     * @throws {TypeError}
     */
    static createRow(title, state = "null") {
        if (!is.string(title)) {
            throw new TypeError("title param should be a string");
        }
        if (!availableState.has(state)) {
            throw new TypeError(`Unknow (invalid) state ${state}`);
        }

        /** @type {HTMLTemplateElement} */
        const tmpl = document.getElementById("favorite-list");

        // Clone and update title
        const clone = tmpl.content.cloneNode(true);
        clone.querySelector(".title").textContent = title;
        clone.querySelector(".state").classList.add(state);

        return clone;
    }

}

module.exports = FavoriteListPanel;
