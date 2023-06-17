const listItemsEl = document.querySelectorAll(".item");
const quantity = listItemsEl.length;
console.log(`Number of categories: ${quantity}`);

const allCategoriesArray = listItemsEl.forEach((el) => {
  const category = el.querySelector("h2").textContent;
  const element = el.querySelectorAll("li").length;

  console.log(`Categories: ${category}`);
  console.log(`Elements: ${element}`);
});