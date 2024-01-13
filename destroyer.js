function destroyer(arr){
const valRemove = Object.values(arguments).slice(1)
const filtered =[]
for (let i=0;i < arr.length;i++){
    let removeElem = false;
    for (let j=0;j< valRemove.length;j++){
        if(arr[i] === valRemove[j]){
            removeElem = true;
        }
    }
}
}