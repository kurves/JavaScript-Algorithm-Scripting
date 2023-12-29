// function to reverse string
function reverseString(str){
    
    //intialize empty str
    let reversedStr ="";

    //loop through the str
    for (let i=str.length -1; i>=0;i--){
        reversedStr += str[i];
    }
    console.log(reversedStr);
}
reverseString("greetings from Earth");