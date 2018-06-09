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
        const data = Reflect.get(payloads, panelType.toLowerCase());
        if (is.nullOrUndefined(data)) {
            throw new Error(`Invalid panel type ${panelType}`);
        }

        // Create tabs
        const tabContainer = document.getElementById("favorite-tabs");
        const { tab, clone } = FavoriteListPanel.createTab(panelType, data.length);
        tab.addEventListener("click", () => {
            if (tab.classList.contains("active")) {
                return;
            }
            const event = new CustomEvent("setActive", {
                detail: tab
            });
            const elements = document.querySelectorAll("favorite-list-panel");
            for (const el of elements) {
                el.dispatchEvent(event);
            }
        });
        tabContainer.appendChild(clone);

        // Listen for setActive
        this.addEventListener("setActive", (event) => {
            if (event.detail === tab) {
                tab.classList.add("active");
                this.classList.remove("hidden");
            }
            else {
                tab.classList.remove("active");
                this.classList.add("hidden");
            }
        });

        // Add all data
        const fragment = document.createDocumentFragment();
        for (const { name, state } of data) {
            fragment.appendChild(FavoriteListPanel.createRow(name, state));
        }
        this.appendChild(fragment);

        // Is default ?
        if (this.hasAttribute("default")) {
            this.removeAttribute("default");
            tab.classList.add("active");
        }
        else {
            this.classList.add("hidden");
        }
    }

    /**
     * @static
     * @method createTab
     * @desc Create a new row !
     * @param {!String} title row title
     * @param {String=} [elementCount=0] number of elements!
     * @returns {HTMLElement}
     *
     * @throws {TypeError}
     */
    static createTab(title, elementCount = 0) {
        if (!is.string(title)) {
            throw new TypeError("title param should be a string");
        }
        if (!is.number(elementCount)) {
            throw new TypeError("elementCount param should be a number");
        }

        /** @type {HTMLTemplateElement} */
        const tmpl = document.getElementById("fav-tabs");

        // Clone and update title
        const clone = tmpl.content.cloneNode(true);
        clone.querySelector(".title").textContent = title;
        clone.querySelector(".count").textContent = elementCount;
        const tab = clone.querySelector(".tab");

        return { clone, tab };
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
