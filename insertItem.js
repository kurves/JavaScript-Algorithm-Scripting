function insertItem(arr, num){
    //sort array
    arr.sort((a,b)=> a-b);
    // loop through array
for (let i =0; i <arr.length; i++){
    if (arr[i]  >= num){
       return i
    }else{
      return arr.length
        }
    
}
}