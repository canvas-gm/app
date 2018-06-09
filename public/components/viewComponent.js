/**
 * @class viewComponent
 * @extends HTMLElement
 */
class viewComponent extends HTMLElement {
    /**
     * @constructor
     * @param {!String} componentName name of the component
     */
    constructor(componentName) {
        super();
        const tmpl = document.getElementById(componentName);
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
}

module.exports = viewComponent;
