function frankenSplice(arr1, arr2,n){
let addedArr = arr2.slice();
addedArr.splice(n,0, ...arr1)
return addedArr;
}