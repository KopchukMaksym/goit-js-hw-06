const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize;

const changeText = ({ target: { value } }) =>
    (text.style.fontSize = `${value}px`);

fontSizeControl.addEventListener("input", changeText);
