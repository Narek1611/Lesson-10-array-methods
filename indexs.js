let array = ["ayb", "ben", 0, "gim", "da", 45, null];

function barToTar(bar) {
  switch (bar) {
    case "ayb":
      console.log("a");
      break;
    case "ben":
      console.log("b");
      break;
    case "da":
      console.log("D");
      break;
    default:
      console.log("yesim");
  }
}

array.forEach(barToTar);

// function name(params) {}

// const name = function () {};

// const name = () => {};

console.log("_______");

let barToTiv = function (bar) {
  if (bar === "ayb") {
    console.log(1);
  } else if (bar === "ben") {
    console.log(2);
  } else if (bar === "da") {
    console.log(4);
  } else {
    console.log("yesim");
  }
};

let newArray = array.map((tarr) => tarr + "lakot");
console.log(newArray);
console.log(array);
