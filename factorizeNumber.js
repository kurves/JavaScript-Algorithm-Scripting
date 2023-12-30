function factorize(n){
    if (n <=0 ){
        return 1;
    }else{
      return n* factorize(n -1);
    }

}
factorize(5)