// const array = [1, 22, 5, 36];
// function sumOf18(arr) {
//   return arr
//     .filter((item) => item >= 18)
//     .reduce((total, current) => total + current, 0);
// }

// console.log(sumOf18(array));

// // function gumar(arr) {
// //   let amount = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     const element = arr[i];
// //     if (element >= 18) {
// //       amount += element;
// //     }
// //   }
// //   return amount;
// // }
// // console.log(gumar(array));

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 50,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 26,
  },
];

function getAverageAge(arr) {
  return (
    arr.reduce(function (sum, property) {
      return sum + property.age;
    }, 0) / arr.length
  );
}

console.log(getAverageAge(users));
