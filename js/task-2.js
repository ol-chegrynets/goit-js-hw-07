const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const ulElem = document.querySelector('ul.gallery');


// version1
// const arr = [];
// for (const i of images) {
//   const liElem = document.createElement('li');
//   const imgElem = document.createElement('img');
//   imgElem.setAttribute('src', i.url);
//   imgElem.setAttribute('alt', i.alt);
//   imgElem.classList.add('my-item');
//   liElem.append(imgElem);
//   arr.push(liElem);
// }
// ulElem.append(...arr);


// version 2 - але не можу позбавитися "," між рядками;
// const arr = [];
// for (const i of images) {
//   const liElem = `<li>
//   <img class="my-item" src=${i.url} alt = ${i.alt}/>
//   </li>`;
//   arr.push(liElem);
// }
// ulElem.insertAdjacentHTML('afterbegin',arr);




// version 3
function imageTemplate(obj) {
  return `<li>
  <img class="my-item" src=${obj.url} alt = ${obj.alt}/>
  </li>`;
}

function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('\n');
}

const markup = imagesTemplate(images);
ulElem.innerHTML = markup;
 















// const gallery = document.querySelector('.gallery');

// const galleryItems = images.map(({ url, alt }) => {
//   return `<li class ="gallery=item">
//   <img src = "${url}" alt = "${alt}" class="gallery-image">
//   </li>`;
// }).join('');

// gallery.insertAdjacentHTML('beforeend', galleryItems);