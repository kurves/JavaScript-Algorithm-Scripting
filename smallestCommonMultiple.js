function smallestCommonMultiple(arr){

    //sort arr
    arr.sort((a,b)=> a -b)
     let mult = arr[1]
     while(isNotDivisible(mult, arr[0], arr[1])){
mult += arr[1]
     }
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    


}

   
smallestCommonMultiple([1,5])