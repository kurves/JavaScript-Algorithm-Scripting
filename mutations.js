function mutations(arr){
    //Convert individual words to lowercase
    const firstWord = arr[0].toLowerCase()
    const secondWord = arr[1].toLowerCase()
    //loop through
     for (let i =0; i<arr.lenth; i++){
        
if (firstWord.indexOf(secondWord[i] < 0)){
    return false
}else{
    return true
}
}
}