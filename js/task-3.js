// HomeWork 01
// function getElementWidth(content, padding, border) {
//     return  Number.parseFloat(content)+(Number.parseFloat(padding)*2)+(Number.parseFloat(border)*2);
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// HomeWork 02

// function checkForSpam(message) {
//     if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
//         return true
//     } return false
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// HomeWork 03

// function filterArray(numbers, value) {
//     const newArray = [];
//     for (const num of numbers) {
//         if (value < num) {
//             newArray.push(num)
//         }
//     }
//     return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// HomeWork 04

// const profile = {
//     username: "Jacob",
//     playTime: 300,
//     changeUsername(newName) {
//         this.username = newName;
//     },
//     updatePlayTime(hours) {
//         this.playTime += hours;
//     },
//     getInfo() {
//         return `${this.username} has ${this.playTime} active hours!`
//     }
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// HomeWork 05

// const sortByDescendingFriendCount = users =>
//   users.toSorted((b, a) => {
//     return a.friends.length - b.friends.length;
//   });

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: 'Moore Hensley',
//       friends: ['Sharron Pace'],
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       gender: 'female',
//     },
//   ]),
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

// HomeWork 06

// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padStart(str) {
//     this.#value = str.concat(this.#value);
//   }
//   padEnd(str) {
//     this.#value = this.#value.concat(str);
//   }
//   padBoth(str) {
//     this.#value = str.concat(this.#value).concat(str);
//   }
// }
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// HomeWork 07

const inpElem = document.querySelector("input#name-input");
const spanElem = document.querySelector("span#name-output");

// inpElem.addEventListener('blur', e => {
//     const value = inpElem.value.trim().toUpperCase();
//     if (value.length > 0) {
//     spanElem.textContent = value;
//     } else {
//         spanElem.textContent = 'Anonymous';
//         }
//   });

inpElem.addEventListener("input", () => {
  const value = inpElem.value.trim().toUpperCase();
  // if (value) {
  // spanElem.textContent = value;
  // } else {
  //     spanElem.textContent = 'Anonymous';
  //     };
  spanElem.textContent = value ? value : "Anonymous";
});
