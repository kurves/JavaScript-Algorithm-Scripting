function largestNumber(arr){
    let largestArrNumber =0;
    for (let i =0; i < arr.length; i++){
        for (let j =i ; j < arr[i]; j++){
            console.log(arr[i][j]);
        }
    
    }

}

largestNumber([[1,6,7,8],[2,3,7,1],[8,9,6,4],[7,5,4,2]])