// HomeWork 02

// function getShippingCost(country) {
//     switch (country) {
//         case "China":
//             return `Shipping to ${country} will cost 100 credits`;
//             break;
//         case "Chile":
//             return `Shipping to ${country} will cost 250 credits`;
//             break;
//         case "Australia":
//             return `Shipping to ${country} will cost 170 credits`;
//             break;
//         case "Jamaica":
//             return `Shipping to ${country} will cost 120 credits`;
//             break;
//         default:
//             return "Sorry, there is no delivery to your country"
//             break;
//     }
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// HomeWork 05

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(el => el.gender === gender)
//     .reduce((acc, el) => {
//       return acc + el.balance;
//     }, 0);
// };

// const clients = [
//   {
//     name: 'Moore Hensley',
//     gender: 'male',
//     balance: 2811,
//   },
//   {
//     name: 'Sharlene Bush',
//     gender: 'female',
//     balance: 3821,
//   },
//   {
//     name: 'Ross Vazquez',
//     gender: 'male',
//     balance: 3793,
//   },
//   {
//     name: 'Elma Head',
//     gender: 'female',
//     balance: 2278,
//   },
//   {
//     name: 'Carey Barr',
//     gender: 'male',
//     balance: 3951,
//   },
//   {
//     name: 'Blackburn Dotson',
//     gender: 'male',
//     balance: 1498,
//   },
//   {
//     name: 'Sheree Anthony',
//     gender: 'female',
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, 'male')); // 12053

// console.log(getTotalBalanceByGender(clients, 'female')); // 8863

// HomeWork 07

const formEl = document.querySelector("form.login-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = formEl.elements.email.value.trim();
  const password = formEl.elements.password.value.trim();
  if (email || password) {
    alert("All form fields must be filled in");
  }
  const data = { email, password };

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
