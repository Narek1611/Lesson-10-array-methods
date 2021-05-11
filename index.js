let array = [4, 5, 74, -2, 0, -4, 36];
//console.log(array);

// //splice
// //console.log(array.splice(2, 2)); // mutable a, poxum a mer skzbnakan array-y, veradarcnum a hanac andamnery
// console.log(array); // ktrum a 2rd indexic 2 hat
// //karanq iran ogtagorcenq arrayi mej element avelacnelu hamar, prosty 2rd argumenty(deleteaCounty) talis enq 0, heto koxic grum enq en inch uzum enq avelacnel
// //uzum enq mer arrayi 3rd indexic heto grenq 45, 46
// array.splice(3, 0, 45, 46);
//  console.log(array); //[
// //     4, 5, 74, 45, 46,
// //    -2, 0, -4, 36
// //  ]

//slice
// console.log(array.slice(0, 3)); //[ 4, 5, 74 ]
// console.log(array);//slice metody immutable a, mer naxnakan array-y chi poxum, es depqum mer arrayic vercrel a 0ic 2 indexov elementnery(3y neraryal chi)

//concat

// console.log(array.concat(122, 555, [0, 0, 0])); //[
// //     4,  5,  74,  -2, 0,
// //    -4, 36, 122, 555, 0,
// //     0,  0
// //  ]
// console.log(array); // concat metody immutable a, hin array-y chi poxum

//forEach

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element);
// }
//es verevi for cikly karox enq grel ayl yexanakov, forEach-i mijocov
//forEach-y argumentum stanum e funkcia, vori argumentneric meky partadir piti nshi mer trvac arrayi tarry
//nerqevi depqum arrayi tary nshox forEachi meji funkciayi argumenty element-n a

// array.forEach((element) => console.log(element));

// //=

// array.forEach(function (element) {
//   console.log(element);
// });

//reduce

// let sum = array.reduce((total, element) => {
//   return total + element;
// }, 0);
// console.log(sum);

//map
//vercnum a naxnakan array-y, ira bolor andamneri vra kirarum argumentum stacac funkcian, veradarcnum nor poxvac array, naxnakan array-y chi poxvum
// let arrayX2 = array.map((element) => element * 2);
// console.log(arrayX2); //[
//   8, 10, 148, -4,
//   0, -8,  72
// ]

let numbers = [4, 2, 5, 1, 3];
function sorting(arr, str = "") {
  newArr = [];
  if (str === "Asc" || str === "") {
    newArr = arr.sort((a, b) => a - b);
    return newArr;
  } else if (str === "Desc") {
    newArr = arr.sort((a, b) => b - a);
    return newArr;
  }
}
console.log(sorting(numbers, "Desc"));
