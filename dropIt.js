//function to remove element until func is true

function dropElements(arr, func) {
    let indexRemove = 0;
    while (indexRemove < arr.length){
        
    }
    if (arr.length < 0){
        return [];
    }
    for(let i=0; i < arr.length; i++){
        while (!func){
            arr.shift(i)

        }
        console.log(arr)

    }
    return arr;
  }
  dropElements([1, 2, 3], function(n) {return n < 3; });