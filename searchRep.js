function searchReplace(str, before, after){
    const strArr = arr.spilt(" ")
    const wordReplace = strArr.filter(item=> item === before);
    const rep = wordReplace[0] === wordReplace.toUpperCase ? after[0].toUpperCase() + after.slice(1)
    : after[0].toLowerCase() + after.slice(1);
    return strArr.map(item =>(item === before ? replace: item))
}