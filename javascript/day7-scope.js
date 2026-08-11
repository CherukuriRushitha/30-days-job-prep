// Global Scope
let name = "Sai";
function greet() {
    console.log(name);
}
greet();


// Local Scope
function test() {
    let age = 22;
    console.log(age);
}
test();

// Uncomment the line below to observe the error
// console.log(age);
// Variable Shadowing
let x = 10;
function demo() {
    let x = 20;
    console.log(x);
}
demo();
console.log(x);