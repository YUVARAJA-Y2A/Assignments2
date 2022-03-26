//To Check whether two numbers are equal
function equalTo(x, y) {
  if (x == y) {
    return console.log("x and y values are equal");
  } else return console.log("x and y values are not equal");
}

//To Check whether two numbers are equal value or equal type
function equalValandType(x, y) {
  if (x === y) {
    return console.log("x and y values are equal");
  } else return console.log("x and y values are not equal");
}

////To Check whether two numbers are not equal
function notEqualTo(x, y) {
  if (x != y) {
    return console.log("x and y values are not equal");
  } else return console.log("x and y values are equal");
}

//To Check whether two numbers are not equal value or not equal type
function notEqualValandType(x, y) {
  if (x !== y) {
    return console.log("x and y values are not equal");
  } else return console.log("x and y values are not equal");
}

//To check the greatest of two numbers
function greaterThan(x, y) {
  if (x > y) {
    return console.log("x is greater than y");
  } else return console.log("x is not greater than y");
}

//To check the lowest of two numbers
function lesserThan(x, y) {
  if (x < y) {
    return console.log("x is lesser than y");
  } else return console.log("x is not lesser than y");
}

//To check the greatest or equal to
function greaterThanEqualTo(x, y) {
  if (x >= y) {
    return console.log("x is greater than or equal to y");
  } else return console.log("x is not greater than or equal to y");
}

//To check the lowest of two numbers
function lesserThanEqualTo(x, y) {
  if (x <= y) {
    return console.log("x is lesser than or equal to y");
  } else return console.log("x is not lesser than or not equal to y");
}

let ans = equalTo(5, 5);
let ans1 = equalValandType(5, "5");
let ans2 = notEqualTo(5, 4);
let ans3 = notEqualValandType(7, "7");
let ans4 = greaterThan(6, 5);
let ans5 = lesserThan(4, 6);
let ans6 = greaterThanEqualTo(5, 6);
let ans7 = lesserThanEqualTo(5, 6);
