// ARRAY METHODS IN JAVASCRIPT
// Array methods data ko manipulate karne ke liye use hote hain.
// Ye methods har element pe function run karte hain aur naya result return karte hain.
// Common methods: forEach, map, filter, reduce
// - forEach = har element pe function run karta hai (no return)
// - map = naya array return karta hai
// - filter = condition ke basis pe naya array return karta hai
// - reduce = array ko ek single total mein convert karta hai


// ------------------ FOREACH ------------------
// forEach array ke har element pe function run karta hai.

// Print each number in an array
const arr = [1, 2, 3, 4, 5]
arr.forEach( function (a) {
    console.log(a); // 1 2 ... 5
} )
//function hai but uska function name nhi include krna hai


// Print square of each number
arr.forEach( function (n) {
    console.log(n * n); // 1 4 ... 25
} )
//similar to previous one just expression is changed


// Print index with number
arr.forEach( function (total , index) {
    console.log(index, total); // 0 1 ... 4 5
} )
//index and total are visible


// Print only even numbers
arr.forEach( (n) => {
    if (n%2===0) {
        console.log(n); // 2 4
    }
} )
// similar we can do with arrow functions also


// Find sum of array elements
let sum = 0;
arr.forEach((n) => {
    sum += n;
});
console.log("sum =",sum); sum = 15
//using arrow function

// ------------------ MAP ------------------
// map ek naya array return karta hai.

// Double each number in an array
const double = arr.map( (n) => {
    return  n * 2;
} )
 console.log(double); // [2, 4, 6, 8, 10 ]
//.map returns a new array

// Square each number
const square = arr.map( (n) => {
    return n * n;
} )
console.log(square); // [1, 4, 9, 16, 25]
//.map returns a new array


// Convert numbers to string format
const str = arr.map( (n) => {
    return n.toString(); 
} )
console.log(str);  // [ '1', '2', '3', '4', '5' ]
//.map returns a new array


// Add 10 to each number
const add = arr.map( (n) => {
    return n + 10;
} )
console.log(add); // [11, 12, 13, 14, 15]
//.map returns a new array

// Boolean check if number is even
const check = arr.map(function(n) {
    return n % 2 === 0; 
});
console.log(check); // [false, true, false, true, false]
//.map returns a new array


// ------------------ FILTER ------------------
// filter condition ke basis pe naya array return karta hai.

// Get even numbers from an array
const newarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const even = newarr.filter( n => n % 2 === 0);
console.log(even); // [2, 4, 6, 8, 10]
//using implicit return means if  expression is small the we can write in same line only


// Get odd numbers
const odd = newarr.filter(n => n % 2 !== 0)
console.log(odd); // [1, 3, 5, 7, 9]
// implicit return mai return keyword nhi use hoga


// Get numbers greater than 5
const greater = newarr.filter( n => n > 5)
console.log(greater); // [6, 7, 8, 9, 10]
//again implicit return


// Get numbers less than 4
const small = newarr.filter( n => n < 4)
console.log(small); [ 1, 2, 3]
//same method

// Get numbers divisible by 3
const div = newarr.filter(n => n % 3 === 0)
console.log(div); // [3, 6, 9]
//same method use kr rahe hai sirf expression change ho raha hai


// ------------------ REDUCE ------------------
// reduce array ko ek single total mein convert karta hai.

// Find sum of numbers
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const join = arr2.reduce((acc,total) => acc + total, 0)
 console.log(join); // 55
// .reduce() method is use for various operations and i consist of an accumulator


// Find product of numbers
const multiple = arr2.reduce((acc,total) => acc * total, 1)
console.log(multiple); //3628800
// .reduce() method is use for various operations and i consist of an accumulator


// Find maximum number
const max = arr2.reduce((acc, total) => acc > total ? acc : total);
console.log(max); // 10
// .reduce() method is use for various operations and i consist of an accumulator


// Find minimum number
const min = arr2.reduce((acc, total) => acc < total ? acc : total);
console.log(min); // 1
// .reduce() method is use for various operations and i consist of an accumulator


// Concatenate all numbers into a string
const con = arr2.reduce((acc, total) => acc + total.toString(),"");
console.log(con); //12345678910
// .reduce() method is use for various operations and i consist of an accumulator


// ------------------ FINAL VERDICT ------------------
// Array methods JS mein data handling ke liye powerful tools hain.
// 1. forEach = sirf iterate karta hai, return nahi deta
// 2. map = transformation ke liye, naya array return karta hai
// 3. filter = selection ke liye, condition ke basis pe naya array return karta hai
// 4. reduce = aggregation ke liye, array ko ek single total mein convert karta hai
// Matlab: ye 4 methods tumhe loops ke bina hi array ke saath
// traversal, transformation, selection aur aggregation karne dete hain.