function AddNumbersFrom1to100(n, m) {
  let sum = 0;
  for (let index = n; index <= m; index++) {
    sum += index;      
  }  
  console.log(sum);
}

function Hello(greeting, place) {
  console.log(`${greeting}, ${place}`);
  console.log(greeting);
}
function Sum(x, y) {
  let sum = x + y;
  console.log("the value of sum is: " + sum);
}
function Product(x, y) {
  let product = x * y;
  console.log(`the product is ${product}`);
}
function Quotient(x, y) {
  if (y === 0) {
    console.log(`input a number higher than 0 to divide by`);
    return;
  }
  let quotient = x / y;
  console.log(`the quotient is ${quotient}`);
}
function Difference(x, y) {
  let difference = x - y
  console.log(`the difference is ${difference}`);
}
Sum(1, 5);
Sum(16, 7);
Difference(88, 55);
Difference(100, 5);
Quotient(55, 0);
Quotient(10, 2);
Product(2, 88);
Product(12, 55);

// //Make the AddNumbersFrom1to100 add numbers from n to m
 AddNumbersFrom1to100(89, 200);
// AddNumbersFrom1to100(1, 55);
// Hello("hello", "world");
// Hello("goodbye", "Home");
// // make the sum function below add two numbers x and y
// //make multiplication, division, subtraction

// const showh = document.getElementById("ShowHide");
// const hides = document.getElementById("HideShow");
// const box1 = document.querySelector(".number1");
// const box2 = document.querySelector(".number2");
// function display(box) {
//   if (box.style.display !== "none") {
//     box.style.display = "none";
//   } else {
//     box.style.display = "block";
//   }
// }
// hides.addEventListener("click", () => {
//   display(box1);
// });
// showh.addEventListener("click", () => {
//   display(box2);
// });
