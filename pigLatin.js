//altering enlish words
function pigLatin(str){
   if (str.match(/^[aeiou]/)) return str + "ways";

   const constants = str.match(/^[^aeiou]+/)[0]
   return str.substring(constants.length) + constants + "ay"
   


}
pigLatin("maureen")