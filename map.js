// const users = [
//   {
//     username: "Yuri Gagarin",
//     lang: "ru",
//   },
//   {
//     username: "Nil Armstrong",
//     lang: "ENG",
//   },
// ];

// function getUserNames(obj) {
//   let usernames = obj.map((astranaut) => astranaut.username);
//   return usernames;
// }

// function getUsernameLengths(obj) {
//   let usernameLengths = obj.map((astranaut) => astranaut.username.length);
//   return usernameLengths;
// }

// console.log(getUserNames(users));
// console.log(getUsernameLengths(users));

//-----------------------------------------------------------------------------------------------
// let strings = ["1", "px", "-42"];

// function parseInteger(arr) {
//   return arr.map((el) => {
//       return parseInt(el);}).map((el) => {
//       if (el) {
//         return el;
//       } else {
//         return (el = null);
//       }
//     });
// }

// console.log(parseInteger(strings));

//-------------------------------------------------------------------------------------------

// function filterNumbers(arr) {
//   return arr
//     .filter((element) => typeof element === "number")
//     .filter((item) => !isNaN(item));
// }
// const array = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
// console.log(filterNumbers(array));

//---------------------------------------------------------------------------------------------

// const users = [
//   {
//     username: "Yuri Gagarin",
//     lang: "ru",
//   },
//   {
//     username: "Nil Armstrong",
//     lang: "ENG",
//   },
// ];

// function filterUsers(obj) {
//   return obj.filter((element) => element.lang !== "ru");
// }

// console.log(filterUsers(users));

//-------------------------------------------------------------------------------------------

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Narek Karapetyan",
    lang: "ARM",
    isAstronaut: false,
  },
];

function filterByField(obj, field) {
  return obj.filter(function (element, field) {
    if (element.field === true) {
      return element;
    }
  });
}

console.log(filterByField(users, "isAstronaut"));
