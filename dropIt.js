//function to remove element until func is true

function dropElements(arr, func) {
    let indexRemove = 0;
    while (indexRemove < arr.length && !func(arr[indexRemove])){
        indexRemove ++

    }
    return indexRemove < arr.length ? arr.splice(indexRemove + 1): []
    

    }

 
  dropElements([1, 2, 3], function(n) {return n < 3; });