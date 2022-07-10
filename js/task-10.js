function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const onCreateDivs = () => {
    const divsEl = [];
    let size = 30;

    for (let i = 1; i <= Number(inputEl.value); i += 1) {
        const randomColor = getRandomHexColor();
        const div = `<div style="background-color:${randomColor};width:${size}px;height:${size}px">1</div>`;
        size += 10;
        divsEl.push(div);
    }
    boxesEl.innerHTML = divsEl.join("");
};

const onDestroyDivs = () => {
    boxesEl.innerHTML = "";
    inputEl.value = 1;
};

createBtnEl.addEventListener("click", onCreateDivs);
destroyBtnEl.addEventListener("click", onDestroyDivs);
