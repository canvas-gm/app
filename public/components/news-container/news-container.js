// Require Internal Dependencies
const { createText } = require("../utils.js");

// Require News (test) payload
const news = require("./news.json");

/**
 * @class NewsContainer
 * @extends viewComponent
 */
class NewsContainer extends HTMLElement {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const fragment = document.createDocumentFragment();

        for (const data of news) {
            const newsEl = document.createElement("news-element");
            for (const [k, v] of Object.entries(data)) {
                newsEl.appendChild(createText(k, v));
            }
            fragment.appendChild(newsEl);
        }
        this.shadowRoot.appendChild(fragment);
    }
}

module.exports = NewsContainer;
