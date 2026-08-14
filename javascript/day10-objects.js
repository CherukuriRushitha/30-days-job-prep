// Creating Objects
const student = {
    name: "Sai",
    age: 22,
    city: "Hyderabad"
};
console.log(student);

// 2. Accessing Properties
console.log(student.name);
console.log(student.age);
console.log(student.city);


// 3. Bracket Notation
console.log(student["name"]);
console.log(student["age"]);
const key = "city";
console.log(student[key]);

// 4. Add New Property
student.role = "Developer";
console.log(student);


// 5. Update Property
student.city = "Bangalore";
console.log(student);

// 6. Delete Property
delete student.age;
console.log(student);

// 7. Object.keys()
console.log(Object.keys(student));

// 8. Object.values()
console.log(Object.values(student));

// 9. Object.entries()
console.log(Object.entries(student));

// 10. hasOwnProperty()
console.log(student.hasOwnProperty("name"));
console.log(student.hasOwnProperty("salary"));

// 11. for...in Loop
for (const key in student) {
    console.log(key, student[key]);
}

// 12. Nested Objects
const employee = {
    id: 101,
    name: "Sai",
    address: {
        city: "Hyderabad",
        state: "Telangana",
        country: "India"
    }
};
console.log(employee.address.city);
console.log(employee.address.state);

// 13. Array of Objects
const users = [
    {
        id: 1,
        name: "Sai"
    },
    {
        id: 2,
        name: "Rahul"
    },
    {
        id: 3,
        name: "Priya"
    }
];
console.log(users);
console.log(users[0].name);
console.log(users[1].name);
console.log(users[2].name);

// 14. Object Destructuring
const person = {
    name: "Sai",
    age: 22,
    city: "Hyderabad"
};
const { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);

// 15. Rename while Destructuring
const {
    name: fullName,
    city: location
} = person;
console.log(fullName);
console.log(location);

// 16. Spread Operator
const student1 = {
    name: "Sai",
    age: 22
};
const student2 = {
    ...student1,
    city: "Hyderabad"
};
console.log(student2);

// 17. Merge Objects
const obj1 = {
    a: 10,
    b: 20
};
const obj2 = {
    c: 30,
    d: 40
};
const merged = {
    ...obj1,
    ...obj2
};
console.log(merged);

// 18. Object Methods
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    }
};
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));

// 19. this Keyword
const user = {
    name: "Sai",
    age: 22,
    greet() {
        console.log(`Hello ${this.name}`);
    }
};
user.greet();

// 20. Optional Chaining
const company = {
    employee: {
        name: "Sai"
    }
};
console.log(company.employee?.name);
console.log(company.address?.city);

// 21. Nullish Coalescing
const salary = company.salary ?? 50000;
console.log(salary);

// 22. Object.assign()
const source = {
    language: "JavaScript"
};
const target = {
    level: "Intermediate"
};
const result = Object.assign({}, source, target);
console.log(result);

// 23. Freeze Object
const mobile = {
    brand: "Samsung",
    model: "A36"
};
Object.freeze(mobile);
mobile.brand = "Apple";
console.log(mobile);

// 24. Seal Object
const laptop = {
    brand: "Dell",
    ram: "16GB"
};
Object.seal(laptop);
laptop.ram = "32GB";
delete laptop.brand;
laptop.color = "Black";
console.log(laptop);

// 25. Mini Practice
const book = {
    title: "Atomic Habits",
    author: "James Clear",
    price: 599
};
console.log(book.title);
book.price = 499;
book.pages = 320;
delete book.author;
console.log(book);

