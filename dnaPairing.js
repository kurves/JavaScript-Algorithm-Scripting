function dnaPairing(str){
const pairs={
    A: "T",
    T: "A",
    C: "G",
    G: "C"
};
return str.split("")
.map(x=>[x, pairs[x]])
}