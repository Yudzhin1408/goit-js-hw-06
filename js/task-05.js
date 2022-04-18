const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', function (meaning) {
    nameEl.textContent = meaning.target.value;
    if (!inputEl.value) {
    nameEl.textContent ='Anonymous';
    }    
});





