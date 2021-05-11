function sortBy(arr, str = "") {
  newArr = [];
  if (str === "Asc" || str === "") {
    newArr = arr.sort((a, b) => a - b);
    return newArr;
  } else if (str === "Desc") {
    newArr = arr.sort((a, b) => b - a);
    return newArr;
  }
}
let numbers = [4, 2, 5, 1, 3];
console.log(sortBy([1, 3, 7, 9], "Desc"));
