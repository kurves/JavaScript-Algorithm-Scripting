function sumFibs(num){
    // function to sum oddufib nums
    if (num !=0){
        for (let n=0; n<= num;n++){
            if (n % 2 !== 0){
                console.log(n)
            }
            let a = 0;
            let b = 1;
            
        
      
        sum =sumFibs(n-1) + sumFibs(n-2)
        console.log(sum)
        }
}

}
sumFibs(10)