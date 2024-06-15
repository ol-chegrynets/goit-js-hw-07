function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  divElem : document.querySelector('div#boxes'),
  inpElem : document.querySelector('input'),
  createElem : document.querySelector('button[data-create]'),
  destroyElem : document.querySelector('button[data-destroy]')
};

refs.createElem.addEventListener('click', () =>{
  refs.divElem.innerHTML = "";
  const amount = parseInt(refs.inpElem.value);
  if (amount > 0 && amount <= 100) {
    creatBoxs(amount);
  }else{
    alert('Please enter a number  from 1 to 100.');
  }
  refs.inpElem.value = "";
});

refs.destroyElem.addEventListener('click', () =>{
  refs.divElem.innerHTML = "";
});



function creatBoxs(amount) {
  let x = 20;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    x += 10;
    const div = document.createElement("div");
    div.classList.add("number");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${x}px`;
    div.style.height = `${x}px`;

    fragment.appendChild(div);
    }
    refs.divElem.append(fragment);
  }













