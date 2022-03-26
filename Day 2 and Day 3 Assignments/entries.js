// add whatever parameters you deem necessary - good luck!
function entries(obj){

    let arr=[];
    for(let item in obj)
    {
        arr.push([item,obj[item]])
    }
    return arr;
}

let ans2=entries({ a: 1, b: 2, c: 3 })
console.log(ans2)




