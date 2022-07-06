const formEl = document.querySelector(".login-form");

const addStylesForForm = (event) => {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Заповніть всі поля");
    }
    const { name, value } = email;
    const { name: namepass, value: valuepass } = password;

    const data = {
        name: value,
        namepass: valuepass,
    };
    console.log(data);
    event.currentTarget.reset();
};

formEl.addEventListener("submit", addStylesForForm);
