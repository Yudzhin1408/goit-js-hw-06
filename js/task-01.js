

const itemEl = document.querySelectorAll('.item');

console.log('Number of categories:', itemEl.length);



itemEl.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').innerHTML}`);
    console.log(`Elements: ${element.querySelector('ul').childElementCount}`);
});