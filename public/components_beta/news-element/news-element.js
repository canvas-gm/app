// Require Internal Dependencies
const viewComponent = require("../viewComponent.js");

/**
 * @class NewsElement
 * @extends HTMLElement
 */
class NewsElement extends viewComponent {

    /**
     * @constructor
     */
    constructor() {
        super("news-element");
    }
}

module.exports = NewsElement;
