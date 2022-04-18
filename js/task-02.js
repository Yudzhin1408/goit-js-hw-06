const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const liElements =ingredients.map(element => {

  const li = document.createElement('li');

  li.textContent = element;
  li.classList.add('item');
  return li;
});

ulEl.append(...liElements);