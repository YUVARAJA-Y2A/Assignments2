function lastIndexOf(arr, c) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === c) return i;
  }
  return -1;
}
let aa = lastIndexOf([1, 2, 3, 4, 2], 2);
console.log(aa);
