// add whatever parameters you deem necessary - good luck!
function countValues(arr,x) {
  let repeat = 0;
  let n = arr.length; //Taking the length of the array

    for (let i = 0; i < n; i++) {
    //Iterate till the length of the array
        if (x == arr[i]) repeat++;
    //If the value from the x matches the repeat will increamented.Else the repeat value stays 0
  }
  return repeat;
}


let ans1 = countValues([], 1);
console.log(ans1);
