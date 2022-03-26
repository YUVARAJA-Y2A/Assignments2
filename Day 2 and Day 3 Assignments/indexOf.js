// add whatever parameters you deem necessary - good luck!
function indexOf(array, value){

        let lastIndex;
        let i=array.length-1;
        while(!lastIndex && (i+1))
        {lastIndex = array[i]==value? i: lastIndex; i--;}
        return console.log(lastIndex);

}

let array = [5, 10, 15, 20];
indexOf(array, 20);
