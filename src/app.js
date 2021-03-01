// const body = document.querySelector(body);
// import 'bootstrap';

const addInfoToDom = event => {
    keyPressed.innerHTML = event.key;
    utf16Code.innerHTML = event.key.charCodeAt();
    keyboardLocale.innerHTML = event.code;
}
window.addEventListener("keydown", addInfoToDom);

const keyPressed = document.querySelector('p[id="keyPressed"]');
const utf16Code = document.querySelector('p[id="utf16Code"]');
const keyboardLocale = document.querySelector('p[id="keyboardLocale"]');
