
// 1. indexOf()
const colors = ["Red", "Green", "Blue"];
console.log(colors.indexOf("Green"));
console.log(colors.indexOf("Black"));

// ==============================================
// 2. includes()
console.log(colors.includes("Blue"));
console.log(colors.includes("Yellow"));

// ==============================================
// 3. find()- Returns first matching value
const numbers = [5, 10, 15, 20, 25];
const found = numbers.find((num) => num > 15);
console.log(found);

// =========================================================
// 4. findIndex()
const index = numbers.findIndex((num) => num > 15);
console.log(index);

// =========================================================
// 5. forEach()
numbers.forEach((num) => {
    console.log(num);});

// ==================================================
// 6. map()- Creates a NEW array
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
console.log(numbers);

// ==================================================
// 7. filter()
const even = numbers.filter((num) => num % 2 === 0);
console.log(even);

// ==========================================================
// 8. reduce()
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);

// ================================================
// 9. some()
console.log(numbers.some((num) => num > 20));
console.log(numbers.some((num) => num > 100));

// ========================================================
// 10. every()
console.log(numbers.every((num) => num > 0));
console.log(numbers.every((num) => num > 10));

// ===============================================
// 11. sort()

const marks = [50, 20, 100, 70, 5];
marks.sort((a, b) => a - b);
console.log(marks);

// ==================================================
// 12. reverse()
const nums7 = [1, 2, 3, 4, 5];
nums7.reverse();
console.log(nums7);

// ====================================================
// 13. join()

const words = ["I", "love", "JavaScript"];
console.log(words.join(" "));
console.log(words.join("-"));

// =========================================================
// 14. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged);

// ========================================================
// 15. Rest Operator
const [first, ...rest] = merged;
console.log(first);
console.log(rest);

// ================================================
// 16. Array Destructuring
const student = ["Sai", 22, "Developer"];
const [name, age, role] = student;
console.log(name);
console.log(age);
console.log(role);

// ====================================================================
// 17. Mini - Sum
const arr = [10, 25, 7, 42, 18];
let sum = 0;
for (const num of arr) {
    sum += num;
}
console.log(sum);

// 18. Largest
let largest = arr[0];
for (const num of arr) {
    if (num > largest) {
        largest = num;
    }
}
console.log(largest);

// 19.  Smallest
let smallest = arr[0];
for (const num of arr) {
    if (num < smallest) {
        smallest = num;
    }
}
console.log(smallest);
// 20. Remove Duplicates
const duplicate = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(duplicate)];
console.log(unique);
