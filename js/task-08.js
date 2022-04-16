const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
     if (form.elements.email.value === '' || form.elements.password.value==='') {
         alert('Все поля должны быть заполнены!!!');
         return;
}
    formData.forEach((value, name) => {
      
        console.log(name, ':', value);
    });
    event.currentTarget.reset();

};

