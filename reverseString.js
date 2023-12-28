function reverseString(str){
    let reversedStr ="";
    for (let i=str.length; i>0;i--){
        console.log(reversedStr += str[i]);
    }
}
reverseString("hello");