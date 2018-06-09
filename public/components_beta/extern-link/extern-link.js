// Require Third-party dependencies
const { shell } = require("electron");

/**
 * @class ExternLink
 * @classdesc A link that open external link
 * @extends HTMLElement
 */
class ExternLink extends HTMLElement {

    /**
     * @constructor
     */
    constructor() {
        super();
        this.addEventListener('click', () => {
            shell.openExternal(this.getAttribute("href"));
        });
    }

}

module.exports = ExternLink;

