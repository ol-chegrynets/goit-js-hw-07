function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.body;
const btnElem = document.querySelector('button.change-color');
const spanElem = document.querySelector('span.color');

btnElem.addEventListener('click', ()=>{
  const color = getRandomHexColor();
  spanElem.textContent = color;
  bodyElem.style.backgroundColor = color;
});




