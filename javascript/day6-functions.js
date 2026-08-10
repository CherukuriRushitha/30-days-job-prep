function greet(){
    console.log("Welcome");
}
greet();

function greet1(name){
    console.log("Hello, "+ name);
}
greet1("Rushitha");
greet2("Gow");

function introduce(a,b){
    console.log("my name is" +a+ "and i am " + b+ "years old.");
}
introduce("Rushitha", 23);

function calculatetotal(price,quantity){
    console.log(price*quantity);
    
}
calculatetotal(100,3)

function calculateRectangleArea(length, width){
    console.log(length*width);

}calculateRectangleArea(10,5);

function Average(a,b,c){
    return (a+b+c)/3;

}console.log(Average(10,20,30));

function square(num){
    return num*num;
}
let res= square(7);
console.log(res);

function isAdult(age){
    if (age>=18){
        return true
    }
    else{
        return false
    }
}let res= isAdult(20);
console.log(res);