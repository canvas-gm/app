function openPopup(tag) {
    let popupElem = document.querySelector("main > popup");
    popupElem.innerHTML = `<${tag}></${tag}>`;
    riot.mount("popup");
}