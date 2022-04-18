const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
 
    const formElements =event.currentTarget.elements;
    const userEmail = formElements.email.value;
    const userPassword = formElements.password.value;
    
     if (form.elements.email.value === '' || form.elements.password.value==='') {
         alert('Все поля должны быть заполнены!!!');
         return;
    };
    const formData = {
        email: userEmail,
        password: userPassword
    };
    console.log(formData);
      event.currentTarget.reset();

};

