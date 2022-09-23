const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientslist = document.querySelector("#ingredients");
const items = ingredients.map((item) => {
	const itemElement = document.createElement("li");
	itemElement.classList.add("item");
	itemElement.textContent = item;
	return itemElement;
});
console.log(items);
ingredientslist.append(...items);

