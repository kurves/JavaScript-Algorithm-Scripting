function sumFibs(num){
    // function to sum oddufib nums
    if (num !=0){
        for (let n=0; n<= num;n++){
            
        
      
        sum =sumFibs(n-1) + sumFibs(n-2)
        console.log(sum)
        }
}

}
sumFibs(10)