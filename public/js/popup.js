const is = require("@sindresorhus/is");

function openPopup(tag, data) {
    let popupElem = document.querySelector("main > popup");
    let tagElement = document.createElement(tag);
    
    popupElem.appendChild(tagElement);
    riot.mount("popup", data);

    // console.log(popupElem._tag.opts);
    // Reflect.set(popupElem._tag.opts, "updatePopupOpts", updatePopupOpts);
}

function closePopup(){
    const popupTag = document.querySelector("popup")._tag;
    popupTag.unmount(true);
    const popup = document.querySelector("popup").style.display = "none";
}


let addUpdateOpts = {
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
                    console.log("updated");
                }
                else{
                    throw new Error(`updateOpts function is not needed in ${tag} tag : no different option`);
                }
            }
        });
    }
}

riot.mixin("addUpdateOpts", addUpdateOpts);