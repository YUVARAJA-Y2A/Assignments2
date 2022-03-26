function max(arr) {
  let maximum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) maximum = arr[i];
  }
  return maximum;
}
let ans7 = max([5, 1, 4, 7, 1, 2]);
console.log(ans7);
