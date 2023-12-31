function longestWordLength(str){
   let words= str.split(' ')
    console.log(str)

    for(let i=0; i<words.length -1;i++){
        console.log(Math.max((words[i].length)));
    }

}

longestWordLength("kurves is good ")