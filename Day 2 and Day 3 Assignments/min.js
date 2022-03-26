// add whatever parameters you deem necessary - good luck!
function min(arr){
    let minimum=arr[0];
    for (let i = 1; i < arr.length; i++)
    {
        if(arr[i]<minimum)
            minimum=arr[i];
    }
    return minimum;
}
let ans8=min([5, 1, 4, 7, 1, 2]);
console.log(ans8);
