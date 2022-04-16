function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


const button = document.querySelector('.change-color');
const text = document.querySelector('.color');
const body = document.querySelector('body');

button.addEventListener('click', backgroundСolor);

function backgroundСolor() {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();  
}
