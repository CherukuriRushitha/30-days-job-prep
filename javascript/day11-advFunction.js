// 1. FUNCTION DECLARATION
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Sai");

// 2. FUNCTION EXPRESSION
const add = function (a, b) {
    return a + b;
};
console.log(add(10, 5));

// 3. ARROW FUNCTION
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(10, 5));


// 4. ARROW FUNCTION - IMPLICIT RETURN
const subtract = (a, b) => a - b;
console.log(subtract(10, 5));

// 5. ARROW FUNCTION - ONE PARAMETER
const square = num => num * num;
console.log(square(5));

// 6. DEFAULT PARAMETERS
function greetUser(name = "Guest") {
    console.log(`Hello ${name}`);
}
greetUser("Sai");
greetUser();

// 7. DEFAULT PARAMETERS WITH MULTIPLE PARAMETERS
function introduce(name, role = "Developer") {
    console.log(`${name} is a ${role}`);
}
introduce("Sai");
introduce("Rahul", "Designer");

// 8. REST PARAMETERS
function addNumbers(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 30, 40));
console.log(addNumbers(1, 2, 3, 4, 5));

// 9. REST PARAMETER WITH NORMAL PARAMETERS
function calculate(first, second, ...others) {
    console.log(first);
    console.log(second);
    console.log(others);
}
calculate(10, 20, 30, 40, 50);

// 10. CALLBACK FUNCTION
function greetPerson(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}
function sayBye() {
    console.log("Goodbye");
}
greetPerson("Sai", sayBye);

// 11. CALLBACK WITH ARROW FUNCTION
function processUser(name, callback) {
    console.log(`Processing ${name}`);
    callback();
}
processUser("Sai", () => {
    console.log("Done");
});

// 12. FUNCTION AS AN ARGUMENT
function calculateOperation(a, b, operation) {
    return operation(a, b);
}
const addition = (a, b) => a + b;
const multiplication = (a, b) => a * b;
console.log(calculateOperation(10, 5, addition));
console.log(calculateOperation(10, 5, multiplication));

// 13. HIGHER-ORDER FUNCTION// 
function operate(a, b, operation) {
    return operation(a, b);
}
console.log(
    operate(20, 10, (a, b) => a - b)
);

// 14. FUNCTION RETURNING A FUNCTION
function createGreeting(message) {
    return function (name) {
        console.log(`${message}, ${name}`);
    };
}
const hello = createGreeting("Hello");
hello("Sai");
hello("Rahul");

// 15. SCOPE - GLOBAL
const globalName = "Sai";
function showName() {
    console.log(globalName);
}
showName();

// 16. FUNCTION SCOPE
function testScope() {
    const message = "Inside function";
    console.log(message);
}
testScope();
// console.log(message); // ERROR

// 17. BLOCK SCOPE

if (true) {
    let blockMessage = "Inside block";
    const anotherMessage = "Also inside block";
    console.log(blockMessage);
    console.log(anotherMessage);
}
// console.log(blockMessage); // ERROR

// 18. VAR VS LET SCOPE
if (true) {
    var x = 10;
    let y = 20;
}
console.log(x);
// console.log(y); // ERROR


// 19. LEXICAL SCOPE
function outer() {
    const message = "Hello from outer";
    function inner() {
        console.log(message);
    }
    inner();
}
outer();

// 20. CLOSURE - BASIC
function outerFunction() {
    const message = "Hello";
    function innerFunction() {
        console.log(message);
    }
    return innerFunction;
}
const myFunction = outerFunction();
myFunction();

// 21. CLOSURE - COUNTER
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const counter = createCounter();
counter();
counter();
counter();

// 22. MULTIPLE CLOSURES
const counter1 = createCounter();
const counter2 = createCounter();
counter1();
counter1();
counter2();
counter2();

// 23. CLOSURE - PRIVATE DATA
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit(amount) {
            balance += amount;
            console.log(`Balance: ${balance}`);
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Balance: ${balance}`);
            } else {
                console.log("Insufficient balance");
            }
        },
        getBalance() {
            console.log(`Balance: ${balance}`);
        }
    };
}
const account = createBankAccount(1000);
account.getBalance();
account.deposit(500);
account.withdraw(200);
account.getBalance();

// 24. CALLBACK CALCULATOR
function calculator(a, b, operation) {
    return operation(a, b);
}
const addOperation = (a, b) => a + b;
const subtractOperation = (a, b) => a - b;
const multiplyOperation = (a, b) => a * b;
const divideOperation = (a, b) => a / b;
console.log(calculator(20, 10, addOperation));
console.log(calculator(20, 10, subtractOperation));
console.log(calculator(20, 10, multiplyOperation));
console.log(calculator(20, 10, divideOperation));

// 25. CUSTOM HIGHER-ORDER FUNCTION

function executeOperation(numbers, operation) {
    for (const num of numbers) {
        console.log(operation(num));
    }
}
const numbers = [1, 2, 3, 4, 5];
executeOperation(numbers, num => num * 2);
executeOperation(numbers, num => num * num);

// 26. CLOSURE - MULTIPLIER
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(10));
console.log(triple(10));

// 27. CLOSURE - PRIVATE COUNTER
function createPrivateCounter() {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        }
    };
}
const privateCounter = createPrivateCounter();
console.log(privateCounter.increment());
console.log(privateCounter.increment());
console.log(privateCounter.decrement());
console.log(privateCounter.getCount());

