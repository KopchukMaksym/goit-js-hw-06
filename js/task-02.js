const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const listElements = document.querySelector("#ingredients");

const createItemsOfElements = () => {
    const items = ingredients.map((el) => {
        const listItem = document.createElement("li");
        listItem.classList.add("item");
        listItem.textContent = el;
        return listItem;
    });
    listElements.append(...items);
};
createItemsOfElements();
