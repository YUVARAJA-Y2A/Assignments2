// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(arr){

        // initialize ifPresent as false
        let ifPresent = false;
        let len = arr.length;
        // ArrayList to store the output
        let duplicates = new Array();


        for (let i = 0; i < len - 1; i++) {
            for (let j = i + 1; j < len; j++) {
                if (arr[i] == arr[j]) {
                    // checking if element is present in the ArrayList
                    // if not  present then break
                    if (duplicates.includes(arr[i])) {
                        break;
                    }

                        // if element is not present in the
                        // ArrayList then add it to ArrayList
                    // and make ifPresent at true
                    else {
                        duplicates.push(arr[i]);
                        ifPresent = true;
                    }
                }
            }
        }

        // if duplicates is present
        // then print ArrayList
        if (ifPresent == true) {

            console.log(duplicates);
        }
        else {
            console.log("No duplicates present in arrays");
        }
    }
    //Inputs to passed through parameters
    let ans3=findTheDuplicate([6,1,9,5,3,4,9]);
    console.log(ans3);
