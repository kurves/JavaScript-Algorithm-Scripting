function longestWordLength(str){
    // split str 
   let words= str.split(' ')
   maxLength =0;
 
// for loop 
    for(let i=0; i<words.length -1;i++){
        if (words[i].length > maxLength){
            maxLength = words[i].length
        }
      
    }
console.log(maxLength);
}

longestWordLength("What if we try a super-long word such as otorhinolaryngology ")