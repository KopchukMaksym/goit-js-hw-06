//! **** 1 ****
// ment.querySelector( "#value" );
// const decrementBtn = document.querySelector("[data-action=decrement]");
// const incrementBtn = document.querySelector("[data-action=increment]");
// counterValue.textContent = 0;

// const onPlusClick = (event) => {
//     counterValue.textContent = Number(counterValue.textContent) - 1;
// };
// decrementBtn.addEventListener("click", onPlusClick);

// const onMinusClick = (event) => {
//     counterValue.textContent = Number(counterValue.textContent) + 1;
// };
// incrementBtn.addEventListener("click", onMinusClick);

//! **** 2 ****

const counterValue = document.querySelector("#value");
const listOfButtons = document.querySelectorAll("button");

counterValue.textContent = 0;

const onChangeValue = (event) =>
    (counterValue.textContent =
        Number(counterValue.textContent) + Number(event.target.innerHTML));

listOfButtons.forEach((btn) => btn.addEventListener("click", onChangeValue));
