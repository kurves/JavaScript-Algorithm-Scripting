function sumFibs(num){
    // function to sum oddufib nums
    if (num !=0){
        for (let n=0; n<= num;n++){
            
        
      
        console.log( sumFibs(n-1) + sumFibs(n-2))
        }
}

}
sumFibs(10)