function diffArray(arr1,arr2){
const newArr=[];
for (let i=0;i < arr1.length; i++){
    for(let j=0; j<arr2.length;j++){
        if (i != j){
            newArr.push(i)
        }
    }
    return newArr
}
}