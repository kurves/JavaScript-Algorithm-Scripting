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

    start = arr[0];
    end = arr[-1]
    for(let i =start; i <=end; i++){
        console.log(i)
    }

}
smallestCommonMultiple([1,5])