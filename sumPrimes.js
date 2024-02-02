function sumPrimes(num){
    //funtiion to sum primes
    let sum_prime =0;
    n = 1
    prime= (num % num == 0 && num% 1 == 0);
    for (let n = 1; n<= num ; n++){

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                prime = false;
                break;
            }
        while (n<= num){
            if (prime){
                sum_prime += num
            }

        }  }

    }
   

