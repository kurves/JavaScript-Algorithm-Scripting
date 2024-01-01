function largestNumber(arr){
    let largestArrNumber =0;
    for (let i =0; i < arr.length; i++){
        for (let j =0 ; j < arr[i]; j++){
            if (arr[i][j] > largestArrNumber){
                largestArrNumber = arr[i][j]
            }
            console.log(largestArrNumber);
        }
    
    }

}

largestNumber([[1,6,7,8],[2,3,7,1],[8,9,6,4],[7,5,4,2]])