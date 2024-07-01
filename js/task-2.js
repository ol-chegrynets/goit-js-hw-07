// HomeWork 01
// function getShippingMessage(country, price, deliveryFee) {
//     return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// HomeWork 02

// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return message
//     } else {
//         return `${message.slice(0, maxLength)+ "..."}`;
//     }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// HomeWork 03

// function makeArray(firstArray, secondArray, maxLength) {
//     const totalArray = firstArray.concat(secondArray);
//     return totalArray.slice(0, maxLength);
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// HomeWork 04

// function calcAverageCalories(days) {
//   let result = 0;
//   if (days.length === 0) return 0;
//   for (const day of days) {
//       result += day.calories
//   }   return result / days.length
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0

// HomeWork 05

// const getUsersWithFriend = (users, friendName) => {
//   const result = [];
//   users.filter(user => {
//     if (user.friends.includes(friendName)) {
//       result.push(user);
//     }
//   });
//   return result;
// };

// c

// HomeWork 06

// class Storage {
//   #item = [];
//   constructor(item) {
//     this.#item = item;
//   }
//   getItems() {
//     return this.#item;
//   }
//   addItem(newItem) {
//     this.#item.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.#item = this.#item.filter(item => item !== itemToRemove);
//   }
// }

// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem('Scaner');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// HomeWork 07

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
  },
];

const ulElem = document.querySelector("ul.gallery");

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
  return arr.map(imageTemplate).join("\n");
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
