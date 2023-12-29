function reverseString(str){
    let reversedStr ="";
    for (let i=str.length; i>0;i--){
        reversedStr += i;
    }
    console.log(reversedStr);
}
reverseString("hello");