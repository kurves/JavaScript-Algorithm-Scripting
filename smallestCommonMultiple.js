function smallestCommonMultiple(arr){

    //sort arr
    arr.sort((a,b)=> a -b)
     let mult = arr[0]
     let range = []

for(let i =arr[0]; i < arr[i]; i++){
    range.push(i)
    


     while(isNotDivisible(mult, arr[0], arr[1])){
mult += arr[1]
     }
      return mult
    }
}

    function isNotDivisible(num,min, max){
for(let i =min; i <= max; i++){
if(num %i ==0){
    return false
}
return true
}
    }




   
smallestCommonMultiple([1,5])