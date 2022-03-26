// add whatever parameters you deem necessary - good luck!
function includes(a, obj){

        let i = a.length;
        while (i--) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
}

let ans4=includes({ 'a': 1, 'b': 2 }, 1);
console.log(ans4);