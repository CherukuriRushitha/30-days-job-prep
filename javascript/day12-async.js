// Synchronous vs Asynchronous
console.log("Start");
setTimeout(() => {
    console.log("Inside timeout");
}, 2000);
console.log("End");

// Callback with asynchronous code
function fetchData(callback) {
    setTimeout(() => {
        const data = {
            name: "Sai",
            age: 22
        };
        callback(data);
    }, 2000);
}
fetchData((data) => {
    console.log(data);
});

// Creating a Promise
const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Data received");
    } else {
        reject("Something went wrong");
    }
});

// Consuming a Promise
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finished");
    });

// Promise returning an object
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Sai"
            });
        }, 1000);
    });
}

// Promise chaining
getUser()
    .then((user) => {
        console.log(user);

        return user.name;
    })
    .then((name) => {
        console.log(name);
    })
    .catch((error) => {
        console.log(error);
    });

// async and await
function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
async function showNumber() {
    const number = await getNumber();

    console.log(number);
}
showNumber();

// Error handling with try...catch
function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Cannot divide by zero");
        } else {
            resolve(a / b);
        }
    });
}
async function calculate() {
    try {
        const result = await divide(10, 2);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
calculate();

// Fetching data from an API
async function getPost() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getPost();

// Fetching multiple users
async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        console.log(users);
        users.forEach((user) => {
            console.log(user.name);
        });
    } catch (error) {
        console.log(error);
    }
}
getUsers();

// Making multiple API requests sequentially
async function getMultipleData() {
    try {
        const usersResponse = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const postsResponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const users = await usersResponse.json();
        const posts = await postsResponse.json();
        console.log(users);
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
}
getMultipleData();

// Making multiple API requests in parallel
async function getParallelData() {
    try {
        const [usersResponse, postsResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts")
        ]);
        const [users, posts] = await Promise.all([
            usersResponse.json(),
            postsResponse.json()
        ]);
        console.log(users);
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
}
getParallelData();

// Fetching a specific user
async function getUserById(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        // Check whether the HTTP response was successful
        if (!response.ok) {
            throw new Error("User not found");
        }
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}
getUserById(1);