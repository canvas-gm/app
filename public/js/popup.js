// Require Node.JS Dependencies
const is = require("@sindresorhus/is");

/**
 * @func openPopup
 * @desc Open popup
 * @param {String} tag tag Element
 * @param {Object} data data
 * @returns {void}
 */
function openPopup(tag, data) {
    const popupElem = document.querySelector("popup");

    popupElem.appendChild(
        document.createElement(tag)
    );
    riot.mount("popup", data);
}

/**
 * @func closePopup
 * @desc Close popup (if active)
 * @param {Function} cb Callback
 * @returns {void}
 */
function closePopup(cb) {
    const popup = document.querySelector("popup");
    popup._tag.unmount(true);
    popup.classList.remove("show");
    if (is.function(cb)) {
        cb();
    }
}

function updatePopupOpts(tag, opts) {
    if (!is.string(tag)) {
        throw new TypeError("tag param should be a string");
    }
    if (!is.object(opts)) {
        throw new Error("opts param should be an Object");
    }

    // Load all parameters
    for (const [param, value] of Object.entries(opts)) {
        if (value === Reflect.get(this.opts, param)) {
            continue;
        }
        Reflect.set(this, param, value);
    }
    this.update();
}

riot.mixin("addUpdateOpts", {
    init() {
        this.updatePopupOpts = updatePopupOpts;
    }
});

