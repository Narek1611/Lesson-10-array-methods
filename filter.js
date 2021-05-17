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

function filterByField(array, field) {
  array.filter((element) => {
    if (element.field === true) {
      return element;
    }
  });
}

console.log(filterByField(users, "isAstronaut"));
