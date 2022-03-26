// add whatever parameters you deem necessary - good luck!
/*
function minMaxKeyInObject(){

}

 */
// Supported in IE 9-11
const obj = { 1: 'Elie', 4: 'Matt', 2: 'Tim' };

const value = Object.valueOf(obj);

const values = value.map(value => {
    return obj[value];
});
console.log(values);

const max = Math.max.apply(null, values);


const min = Math.min.apply(null, values);
console.log([min,max]);
