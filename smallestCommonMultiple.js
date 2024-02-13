function smallestCommonMultiple(arr){

    //sort arr
    arr.sort((a,b)=> a -b)
     let mult = arr[1]
     while(isNotDivisible(mult, arr[0], arr[1])){
mult += arr[1]
     }
      return mult
    }

    function isNotDivisible(){
for(let i =min; i <= max; i++){
if(num %i ==0){
    return False
}
}
    }




   
smallestCommonMultiple([1,5])