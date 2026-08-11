// Function Declaration
function greet1(name) {
    console.log("Hello " + name);
}

greet1("Sai");

// Function Expression
const greet2 = function (name) {
    console.log("Hi " + name);
};

greet2("Rahul");

// typeof function
console.log(typeof greet1);
console.log(typeof greet2);

// Assigning one function to another variable
const anotherGreet = greet2;

anotherGreet("Priya");