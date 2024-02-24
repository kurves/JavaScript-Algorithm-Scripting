//function to remove element until func is true

function dropElements(arr, func) {
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