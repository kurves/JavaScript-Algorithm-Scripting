function sumFibs(num){
    // function to sum oddufib nums]
    let a =0
    let b =1
    fib_sum =0

    while  (b<= num){
        if (b% 2 ==0){
            fib_sum += b
        }
      a ,b = b, a+b
      print(fib_sum)

    }


}
sumFibs(10)