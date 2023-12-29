function factorize(n){
    if (n==0){
        return 1;
    }else{
        console.log(factorize(n +(n-1)));
    }

}
factorize(5)