function greatestOfThreeNumbers(val1, val2, val3) {
  if (val1 > val2 && val1 > val3) {
    return console.log(val1 + " is greater");
  } else if (val2 > val3) {
    return console.log(val2 + " is greater");
  } else {
    return console.log(val3 + " is greater");
  }
}

let ans = greatestOfThreeNumbers(40, 70, 60);
