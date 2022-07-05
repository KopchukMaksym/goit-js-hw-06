const inputElement = document.querySelector("#name-input");
const messageElement = document.querySelector("#name-output");

const changeMessage = ({ target: { value } }) => {
    !value.length
        ? (messageElement.textContent = "Anonymous")
        : (messageElement.textContent = value);
};

inputElement.addEventListener("input", changeMessage);
