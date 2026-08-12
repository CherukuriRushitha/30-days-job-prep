const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);

//Updating an array
const fruits1 = ["Apple", "Banana", "Orange"];
fruits1[1] = "Mango";
console.log(fruits1);

const nums = [10, 20, 30];
nums.push(40);
console.log(nums);

// push()- end, pop()- end, 
// unshift()- add front, shift()- remove front
const nums1 = [10, 20, 30];
nums.shift();5
console.log(nums1);

//slice()   does NOT modify original- splice(start, end)
//splice()  DOES modify original-splice(start, deleteCount)
const nums2 = [10, 20, 30, 40, 50];
const result1 = nums2.slice(1, 4);
const result2= nums2.splice(1, 2);

//for ..of
const nums3 = [10, 20, 30, 40];
for (const num of nums3) {
    console.log(num);
}


//POTD
const nums4 = [10, 25, 7, 42, 18];
for (const num of nums4) {
    console.log(num);
}
let sum = 0;
for (const num of nums4) {
    sum =sum+ num;
}
console.log("Sum:", sum);
let largest = nums4[0];
for (const num of nums4) {
    if (num > largest) {
        largest = num;
    }
}
console.log("Largest:", largest);
