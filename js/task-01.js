const categoriesList = document.querySelector("#categories");

const categoriesListItem = categoriesList.querySelectorAll(".item");

const getInfoCategoriesList = () => {
    console.log(`Number of categories: ${categoriesListItem.length}`);
    categoriesListItem.forEach((el) => {
        console.log(`Category: ${el.querySelector("h2").textContent}`);
        console.log(`Elements: ${el.querySelector("ul").childElementCount}`);
    });
};

getInfoCategoriesList();
