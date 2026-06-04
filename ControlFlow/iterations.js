// ITERATIONS IN JAVASCRIPT
// Iteration ka use repeated tasks ke liye hota hai.
// Common constructs: for, while, do-while, for-of, for-in
// Array methods bhi iteration ke liye use hote hain: forEach, map, filter, reduce

// ------------------ FOR LOOP ------------------
// For loop fixed iterations ke liye use hota hai.

// Q1: Print numbers from 1 to 10
for (let i = 1; i <=10; i++) {
   // console.log(i); // 1 2 3 .... 10
}
//Syntax of For Loop

// Q2: Print even numbers from 1 to 20
for (let i = 2; i <=20; i += 2) {
    // console.log(i); // 2 4 6 .... 20
}
//Syntax of For Loop


// Q3: Print multiplication table of 5
for (let i = 1; i <= 10; i++) {
   // console.log(`5 * ${i} = ${5 * i}`);
}
//Syntax of For Loop

// Q4: Find sum of first 10 natural numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i; 
}
//console.log("Sum of first 10 natural numbers =", sum); // 55
//Syntax of For Loop


// Q5: Reverse print numbers from 10 to 1
for (let i = 10; i >=1 ; i--) {
  //  console.log(i); // 10 9 8 ... 1   
}
//Syntax of For Loop


// ------------------ WHILE LOOP ------------------
// While loop condition ke basis pe run hota hai.

// Q1: Print numbers from 1 to 5
let i = 1;
while (i<=5) {
   // console.log(i); // 1 2 ... 5
    i++;
}
//Syntax of While Loop


// Q2: Print odd numbers till 15
let a = 1
while (a <= 15) {
   // console.log(a); // 1 3 5 ... 15
    a+=2;
}
//Syntax of While Loop


// Q3: Find factorial of a number
let f = 5;
let fact = 1;
while (f >= 1) {
    fact *= f;   
    f--;   
}
// console.log("Factorial =", fact); // 120
//Syntax of While Loop


// Q4: Print countdown from 20 to 1
let c = 20;
while (c>=1) {
    // console.log(c); // 20 19 18 ... 1
    c--;
}
//Syntax of While Loop


// Q5: Find sum of first 10 numbers
let s = 1;
while (i<=10) {
    s+= i;
    i++;
}
// console.log(`sum = ${s}`); // 41
//Syntax of While Loop


// ------------------ DO-WHILE LOOP ------------------
// Do-while loop at least ek baar run hota hai.

// Q1: Print numbers from 1 to 5
let d = 1;
do {
   // console.log(d); // 1 2 ... 5
    d++;
} while (d <= 5);
//code will run atleast one time


// Q2: Print even numbers till 10
let g = 2;
do {
   // console.log(g); // 2 4 6 ... 10
    g += 2;
} while (g <= 10);
//code will run atleast one time


// Q3: Print multiplication table of 3
let b = 1;
do {
   // console.log(`3 * ${b} = ${3 * b}`); // 3 * 1 = 3 //// 
    b++;
} while (b <= 10);
//code will run atleast one time


// Q4: Print countdown from 5
let h = 5;
do {
   // console.log(h); // 5 4 ... 1
    h--;
} while (h >= 1);
//code will run atleast one time


// Q5: Find sum of first 5 numbers
let e = 1;
let total = 0;
do {
    total += e;
    e++;
} while (e <= 5);
//console.log("Sum of first 5 numbers =", total); // 15
//code will run atleast one time


// ------------------ FOR-OF LOOP ------------------
// For-of loop array/iterable values ke liye use hota hai.

// Q1: Print all fruits from an array
const arr = ['apple', 'banana', 'cherry', 'orange']
for (const fruits of arr) {
  //  console.log(fruits); // apple banana cherry orange
}
//syntax for for of loop


// Q2: Print length of each fruit
for (const fruits of arr) {
  //  console.log(fruits.length); // 5 6 6 6  
}
//syntax for for of loop


// Q3: Print fruits in uppercase
for (const fruits of arr) {
  //  console.log(fruits.toUpperCase()); // APPLE ....
}
//syntax for for of loop


// Q4: Print index with fruit name
for (const [index,fruits] of arr.entries()) {
   // console.log(index , fruits); //  0 Apple ...
}
//syntax for for of loop


// Q5: Print only fruits starting with 'A'
for (const fruits of arr) {
    if (fruits.startsWith("a")) {
     //   console.log(fruits); // apple
    }
}
//syntax for for of loop


// ------------------ FOR-IN LOOP ------------------
// For-in loop object keys ke liye use hota hai.

// Q1: Print all keys of an object
const myobj = {
    name : 'Rehan',
    age : 18,
    city : 'Mumbai',
    number : 1234567890.
}
for (const key in myobj) {
    // console.log(key); // name age city number
}
//syntax of For in loop


// Q2: Print all values of an object
for (const key in myobj) {
    // console.log(myobj[key]); // Rehan 18 Mumbai 1234567890 
}
//syntax of For in loop


// Q3: Print key-value pairs
for (const key in myobj) {
// console.log(`${key} : ${myobj[key]}`); // name : Rehan ....
}
//syntax of For in loop


// Q4: Print only string values
for (const key in myobj) {
if (typeof myobj[key] === "string") {
    //  console.log(`${key} : ${myobj[key]}`); // name : Rehan city : Mumbai
}
}
//syntax of For in loop


// Q5: Count number of keys in an object
let count = 0;
for (const key in myobj) {
count++;
}
//console.log("Number of Keys =" , count); // 4
//syntax of For in loop


// ------------------ FOREACH ------------------
// forEach array ke har element pe function run karta hai.

// Q1: Print each number in an array
// Q2: Print square of each number
// Q3: Print index with number
// Q4: Print only even numbers
// Q5: Find sum of array elements


// ------------------ MAP ------------------
// map ek naya array return karta hai.

// Q1: Double each number in an array
// Q2: Square each number
// Q3: Convert numbers to string format
// Q4: Add 10 to each number
// Q5: Boolean check if number is even


// ------------------ FILTER ------------------
// filter condition ke basis pe naya array return karta hai.

// Q1: Get even numbers from an array
// Q2: Get odd numbers
// Q3: Get numbers greater than 5
// Q4: Get numbers less than 4
// Q5: Get numbers divisible by 3


// ------------------ REDUCE ------------------
// reduce array ko ek single value mein convert karta hai.

// Q1: Find sum of numbers
// Q2: Find product of numbers
// Q3: Find maximum number
// Q4: Find minimum number
// Q5: Concatenate all numbers into a string


// ------------------ FINAL VERDICT ------------------
// Loops aur array methods dono repetition ke liye use hote hain.
// Loops = basic iteration (manual control)
// Array methods = modern iteration (short aur expressive)
// Matlab: ab tumhare loops.js file complete hai aur practice ke liye perfect hai.
