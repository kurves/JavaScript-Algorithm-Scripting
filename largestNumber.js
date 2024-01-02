function largestNumberOfArray(arr){
    // declare largestArrNumbervariable
    let largestArrNumber =[];
    // for loop 
    for (let i =0; i < arr.length; i++){
        let largestNumber = ar[i][0]
        for (let j =1 ; j < arr[i].length; j++){
            if (arr[i][j] > largestNumber){
                largestNumber = arr[i][j]
            }
           
        }
        largestArrNumber[i] = largestNumber
    }
return largestArrNumber
}

largestNumberOfArray([[1,6,7,8],[2,3,7,1],[8,9,6,4],[7,5,4,2]])