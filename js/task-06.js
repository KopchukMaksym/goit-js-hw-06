const inputElement = document.querySelector("#validation-input");
const inputValidLength = Number(inputElement.getAttribute("data-length"));

const checkValidate = ({ target: { value } }) => {
    inputElement.classList.remove(...inputElement.classList);

    value.length === inputValidLength
        ? inputElement.classList.add("valid")
        : inputElement.classList.add("invalid");
};

inputElement.addEventListener("blur", checkValidate);
