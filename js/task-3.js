const inpElem = document.querySelector('input#name-input');
const spanElem = document.querySelector('span#name-output');

// inpElem.addEventListener('blur', e => {
//     const value = inpElem.value.trim().toUpperCase();
//     if (value.length > 0) {
//     spanElem.textContent = value;
//     } else {
//         spanElem.textContent = 'Anonymous';
//         }
//   });

inpElem.addEventListener('input', () => {
    const value = inpElem.value.trim().toUpperCase();
    if (value) {
    spanElem.textContent = value;
    } else {
        spanElem.textContent = 'Anonymous';
        }
  });
                       
