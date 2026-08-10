function addNumbers(a,b){
    return a+b
}
let res= addNumbers(15,25);
console.log(res);

function subtract(a,b){
    return a-b
}
let res= subtract(50,18);
console.log(res);

function multiply(a,b){
    return a*b
}
let res= multiply(8,7);
console.log(res);

function isEven(a){
    return a%2===0
}
let res= isEven(12);
console.log(res);

function isLarger(a,b){
    if (a>b){
        return a
    }else{
        return b
    }
}
let res= isLarger(25,40);
console.log(res);

function countCharacters(a){
    return a.length
}
let res= countCharacters("javascript");
console.log(res);
