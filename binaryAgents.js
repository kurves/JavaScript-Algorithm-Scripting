function binaryAgents(binaryStr){
const binaryDigits = binaryStr.split('');
const asciiStr = binaryDigits.map(binaryDigit=>(
    
    let translatedString = '';
    for (let i =0; i < binaryDigits;){
        const decimalVal = parseInt(binaryDigits[1], 2)

        const char = string.formCharCode(decimalVal)

        translatedString += char;
    }
))


}