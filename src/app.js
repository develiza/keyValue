// const body = document.querySelector(body);
// import 'bootstrap';

const addInfoToDom = event => {
    const ctrlKey = event.ctrlKey;
    const altKey = event.altKey;
    if(ctrlKey){ 
        addKeys.innerHTML = 'control key';
    } else {
        addKeys.innerHTML = '&nbsp;';
    }
    if(altKey) {
        addKeys.innerHTML = 'alt key'
    }
    keyPressed.innerHTML = event.key;
    
    utf16Code.innerHTML = event.key.charCodeAt();
    keyboardLocale.innerHTML = event.code;
}
window.addEventListener("keydown", addInfoToDom);

const keyPressed = document.querySelector('p[id="keyPressed"]');
const utf16Code = document.querySelector('p[id="utf16Code"]');
const keyboardLocale = document.querySelector('p[id="keyboardLocale"]');
const addKeys = document.querySelector('p[id="addKeys"]');
