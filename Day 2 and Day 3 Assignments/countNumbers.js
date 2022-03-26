// add whatever parameters you deem necessary - good luck!

function countNumbers(arr) {
    return arr.filter //Applying filter to sort out the data
    (function(element)
    {
        return parseInt(element); //Parses the string and returns the integer
    }).length; //Length of the parsed string is returned

}


let var1=countNumbers(['a','b','2','awesome','4']);
console.log(var1);