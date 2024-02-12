function smallestCommonMultiple(arr){

        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    
    return (a * b) / gcd(a, b);
}

   
smallestCommonMultiple([1,5])