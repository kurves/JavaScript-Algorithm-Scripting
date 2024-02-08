function smallestCommonMultiple(arr){

    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }

    start = arr[0];
    end = arr[-1]
    for(let i =start; i <=end; i++){
        console.log(i)
    }

}
smallestCommonMultiple([1,5])