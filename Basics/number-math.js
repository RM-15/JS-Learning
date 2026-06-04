// NUMBERS & MATH IN JAVASCRIPT
// JavaScript mein numbers ke saath kaam karne ke liye built-in methods hote hain.
// Common operations: conversion, rounding, random generation, min/max, power, square root, absolute value.
// Is file mein hum number aur Math methods cover karenge with examples.


// Convert "123.45" into integer and float.
const a = 123.45;
// Convert to integer
let b = parseInt(a);
console.log(b); // 123
// Convert to float
let c = parseFloat(a)
console.log(c); //123.45
//parsint is used to convert to integer
//parsefloat is used to convert to float


// Round 5.6789 to 2 decimal places using toFixed().
const d = 5.6789
const e = d.toFixed(2);
console.log(e);
//tofixed() is used to round off the number after decimal
//toFixed() string return karta hai, number nahi.


// Check if NaN is returned when parsing "abc".
const f = "abc";
const g = parseInt(f);
console.log(g); //NaN
// since abc is a string therefore output is NaN
//NaN means NOt a Number


// Generate a random number between 1 and 100.
const h = Math.floor(Math.random() * 100) + 1;
console.log(h); //Random number between 1 to 100
// math.random() is used to generate a random number between 0 and 1
//so we multiplied it by 100 and add 1 because we needed a number between 1-100 not 1-99


// Find maximum and minimum from [45, 12, 98, 23, 67].
const i = [45, 12, 98, 23, 67]
const j = Math.min(...i)
console.log(j); // 12
const k = Math.max(...i)
console.log(k); // 98
//math.min and math.max is used to find minimum and maximum from an aray


// Use Math.floor() and Math.ceil() on 4.7.
const l = 4.7
console.log(Math.ceil(l)); // 5
console.log(Math.floor(l));// 4
// Math.ceil is used to round off to upar ke nearest number se even it is 4.1 it will round off to 5
// Math.floor is used to round off to neeche ke nearest number se even it is 4.9 it will round off to 4


// Calculate square root of 144.
const m = 144
console.log(Math.sqrt(144)); // 12
//Math.sqrt() is used to find out squareroot of a number


// Calculate power of 2³ using Math.pow().
console.log(Math.pow(2,3)); // 8
//Math.pow() is used to find out power of a number 
//in the bracket the first number is teh actual number and the second is the power


// Find absolute value of -56.
const o = -56 
console.log(Math.abs(o)); // 56
//Math.abs() is used to convert a negative number to positive
//means it always returns a non-negetive number


// Generate a random dice roll (1–6).
console.log(Math.floor(Math.random() * 6) + 1); // random number between 1-6
// since math.random() gives a number between 0 and 1 then it is multiplied by 6 so it gives value from 0 - 5.9999...
//math.floor is used to make the integer from 0-5 and +1 is used to make 0-6 


// ------------------ FINAL VERDICT ------------------
// parseInt / parseFloat = number conversion
// toFixed = round decimals (string)
// NaN = invalid conversion
// Math.random + formula = random numbers
// Math.max / Math.min = array extremes
// Math.ceil / Math.floor = round up/down
// Math.sqrt = square root
// Math.pow = power
// Math.abs = absolute value
// Dice roll = random 1–6
// Matlab: ye methods tumhe number handling aur math operations ke liye ready karte hain.