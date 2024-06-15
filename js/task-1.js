const ulElem = document.querySelectorAll('#categories li.item');
console.log('Number of categories:', ulElem.length);

for (const i of ulElem) {
    const h2Elem = i.querySelector('h2');
    console.log('Category:', h2Elem.textContent);
    const liElem = i.querySelectorAll('ul li');
    console.log('Elements:', liElem.length);
}

