// Require Internal Dependencies
const viewComponent = require("../viewComponent.js");

/**
 * @class MemberArea
 * @extends HTMLElement
 */
class MemberArea extends viewComponent {

    /**
     * @constructor
     */
    constructor() {
        super("member-area");
        const popupElement = document.querySelector("pop-up");
        const logoutButton = this.shadowRoot.querySelector(".logout");
        logoutButton.addEventListener("click", () => {
            popupElement.dispatchEvent(new CustomEvent("open", {
                detail: "pop-up-auth"
            }));
        });
    }
}

module.exports = MemberArea;
