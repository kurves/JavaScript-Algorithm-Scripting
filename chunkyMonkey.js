function chunkyMonkey(arr, size){
    new_array = []
    for (let i=0; i < arr.length; i++){
        new_array.push(arr.slice(i, i +size))
    }
return new_array
}