let val1 = 0;
let val2 = 1;
let temp;
let n = 10;

for (i = 0; i <= n; i++) {
  console.log(val1);
  temp = val1 + val2; //Adding the value of val1 and val2
  val1 = val2; // Swapping the val2 value to val1
  val2 = temp; //Swapping the added value in temp to val2
}
