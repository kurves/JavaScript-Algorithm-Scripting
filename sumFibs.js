function sumFibs(num){
    // function to sum oddufib nums]
  let a =0
  let b =1
  let fib_sums = 0
  while (b <= num){
    if(num % 2 != 0){
fib_sums += b
[a,b] = [b, a+b]

    }
    return (fib_sums)
  }

}
sumFibs(10)