// Require Node.JS Dependencies
const is = require("@sindresorhus/is");

/**
 * @func openPopup
 * @desc Open popup
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
 * @returns {void}
 */
function closePopup(){
    const popup = document.querySelector("popup");
    popup._tag.unmount(true);
    popup.classList.remove("show");
}

const addUpdateOpts = {
    init: function() {
        this.on('mount', function() {
            this.updatePopupOpts = function(tag, opts) {
                if(!is.string(tag)) {
                    throw new typeError("tag param should be a string");
                }
                if(is.nullOrUndefined(opts) || JSON.stringify(opts) === "{}"){
                    throw new Error(`updateOpts function is not needed in ${tag} tag : option is empty`);
                }

                let somethingDifferent = false;
                for(let option in opts) {
                    if(option !== this.opts[option]) {
                        somethingDifferent = true;
                        break;
                    };
                }
                if(somethingDifferent === true) {
                    this.opts = opts;
                    this.update();
                }
                else{
                    throw new Error(`updateOpts function is not needed in ${tag} tag : no different option`);
                }
            }
        });
    }
};

riot.mixin("addUpdateOpts", addUpdateOpts);
