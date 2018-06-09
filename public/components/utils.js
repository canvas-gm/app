/**
 * @func createText
 * @param {!String} name name
 * @param {!String} text text
 * @returns {HTMLSpanElement}
 */
function createText(name, text) {
    const el = document.createElement("span");
    el.setAttribute("slot", name);
    el.innerText = text;

    return el;
}

module.exports = {
    createText
};
