const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
console.log(getRandomHexColor());
const buttonEl = document.querySelector(".change-color");
const text = document.querySelector(".color");
const bodyEl = document.querySelector("body");

const changeColor = (event) => {
    const color = getRandomHexColor();

    bodyEl.style.backgroundColor = color;
    text.textContent = color;
};
buttonEl.addEventListener("click", changeColor);
