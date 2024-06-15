const formEl = document.querySelector('form.login-form');


formEl.addEventListener('submit', e => {
    e.preventDefault();

    const email = formEl.elements.email.value.trim();
    const password = formEl.elements.password.value.trim();
    if (email.length ==  0  || password.length ==  0) {
        alert('All form fields must be filled in');
    }
  const data = {email, password};

  console.log(data);

  formEl.reset();
}); 


// formEl.addEventListener('submit', e => {
//     e.preventDefault();
  
//     const formData = new FormData(formEl);
//     const data = {};
  
//     formData.forEach((value, key) => {
//       data[key] = value;
//     });
  
//     console.log(data);
  
//     formEl.reset();
//   }); 