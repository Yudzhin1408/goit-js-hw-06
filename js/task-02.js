const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

ingredients.map(element => {
  const li = document.createElement('li');
  ulEl.appendChild(li);
  li.textContent = element;
  li.classList.add('item')
});