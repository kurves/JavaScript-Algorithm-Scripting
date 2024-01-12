function diffArray(arr1,arr2){
const newArr=[];
function inFirst(first,second){
    for (let i=0;i < first.length; i++){
        if (second.indexOf(first[i]) === -1){
            newArr.push(first[i])
        }
    }

}
inFirst(arr1,arr2)
return newArr;

}
diffArray([1,4,5,7,8],[6,7,9,0,4])