//conditionals

// let lives = 3;
// lives--;
// lives--;
// lives--;

// if (lives > 0) {
//   console.log("Not game over.");
// } else if (lives === 1) {
//   console.log("Only one life left");
// } else {
//   console.log("Game over");
// }

let drinkOrder;
const visitorAge = 21;
const visitorSober = true;

// //logical AND og OR
// if (visitorAge >= 18 && visitorSober === true) {
//   drinkOrder = "øl";
// } else {
//   drinkOrder = "saft";
// }
//ternary
//const drinkOrder = visitorAge >= 18 && visitorSober ? "øl" : "saft";
console.log(drinkOrder);

//Truty og falsey

const someText = "Some text";
if (someText) {
  console.log("?");
}

const firstName = "Ola";
const lastName = "Nordmann";
//const fullName = firstName + " " + lastName;
const fullName = `Velkommen ${firstName} ${lastName}`;
console.log(fullName);
