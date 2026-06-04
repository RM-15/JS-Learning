// What is an Arrow Function?
// Arrow function ek shorter syntax hai function likhne ka.
// Matlab: concise, modern style, aur readable code.

// Syntax:
// const functionName = (parameters) => expression;
// Agar sirf ek expression hai to {} aur return ki zarurat nahi.

// Example:
const add = (a, b) => a + b;
console.log(add(5,7)); // 12


// Implicit Return
// Agar sirf ek line ka expression hai to return likhne ki zarurat nahi.
const square = x => x * x;
console.log(square(6)); // 36


// Parameters vs Arguments
// Parameters → placeholders in definition
// Arguments → actual values in function call
const greet = name => "Hello " + name;
console.log(greet("Rehan")); // "Hello Rehan"


// Arrow Function with Array Methods
// map(), filter(), reduce() ke saath arrow functions concise lagte hain
const nums = [1,2,3,4,5];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2,4]


// Arrow Function vs Normal Function
// Arrow functions apna 'this' nahi banate, wo outer scope ka 'this' use karte hain.
// Normal functions apna 'this' context create karte hain.
// Ye difference objects/classes ke andar important hai.


// Best Practices
// - Short, clean callbacks ke liye arrow functions use karo
// - Complex logic ke liye normal functions better hote hain
// - 'this' ka behavior samajhna zaruri hai


// Write an arrow function to add two numbers
// Call it with (5,7) → output 12
const addtwo = (a,b) => a + b;
console.log(addtwo(5,7));
//implicit return use kiya hai 


// Write an arrow function to check if a number is positive or negative
// Call it with (-9) → output "Negative"
const check = (a) => a > 0 ? "Positive" : "Negative";
console.log(check(-9)); // Negative
console.log(check(5));  // Positive
//again same implicit return hai 
//positive/negative ke liye expression hai if a > 0 then positive or else negative


// Write an arrow function that returns the square of a number
// Call it with (6) → output 36
const multiply = (a) => a * a;
console.log(multiply(6)); // 36
//again same implicit return hai 
//multiplication ke liye expression hai


// Write an arrow function that takes a string and returns its length
// Call it with ("Rehan") → output 5
const str = (a) => {
    return a.length
}
console.log(str("rehan")); // 5
//string return ka expression as we did earlier


// Write an arrow function that converts Celsius to Fahrenheit
// Formula: F = (C * 9/5) + 32
// Call it with (0) → output 32
const convert = (C) => {
    return F = (C * 9/5) + 32;
}
console.log(convert(0)); // 32
// return + expression using arrow function 


// Write an arrow function that finds the maximum of two numbers
// Call it with (45,67) → output 67
const max = (a,b) => a > b ? a : b;
console.log(max(5,7)); // 7 
// return + expression using arrow function


// Write an arrow function that reverses a string
// Call it with ("hello") → output "olleh"
const rev = (a) => {
    return a.split("").reverse().join("")
}
console.log(rev("hello")); //olleh
// return + expression using arrow function


// Write an arrow function that calculates factorial of a number
// Call it with (5) → output 120
const fact = (f) => {
    let result = 1;
    for (let i = 1; i <= f ; i++) {
         result = result * i;
        }
    return result;
}
console.log(fact(5)); // 120
// return + expression using arrow function


// Write an arrow function that takes an array and returns the sum of all elements
// Call it with ([1,2,3,4]) → output 10
const arr = (myarr) => {
    return myarr.reduce((sum,acc) => sum + acc, 0)
}
console.log(arr([1,2,3,4])); // 10
// return + expression using arrow function


// Write an arrow function that returns the first character of a string
// Call it with ("JavaScript") → output "J"
const first = (a) => {
    return a[0];
}
console.log(first("Javascript")); // J
// return + expression using arrow function


// ------------------ Final Verdict ------------------
// Arrow functions ek shorter, modern syntax hai functions likhne ka.
// Agar sirf ek expression hai to {} aur return ki zarurat nahi (implicit return).
// Callbacks ke liye best (map, filter, reduce).
// Arrow functions apna 'this' nahi banate, outer scope ka 'this' use karte hain.
// Short aur clean logic ke liye arrow functions use karo.
// Complex logic ya 'this' ke use ke liye normal functions better hote hain.