const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('keyup', function (meaning) {
    nameEl.textContent = meaning.target.value;
    if (!inputEl.value) {
    nameEl.textContent ='Anonymous';
    }    
});





