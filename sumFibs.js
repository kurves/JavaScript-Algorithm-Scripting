function sumFibs(num){
    // function to sum oddufib nums]
    let a =0
    let b =1
    fib_sum =0

    while  (b<= num){
        fib_sum += b

    }
    if (num !=0){
        for (let n=0; n<= num;n++){
            if (n % 2 !== 0){
                console.log(n)
            }
            let a = 0;
            let b = 1;
            b + a 
            
        
      
        sum =sumFibs(n-1)
        console.log(sum)
        }
}

}
sumFibs(10)