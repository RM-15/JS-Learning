// STRINGS IN JAVASCRIPT
// String ek sequence of characters hota hai.
// Common operations: length, case conversion, trimming, searching, extracting, replacing, splitting.
// Is file mein hum string ke important methods cover karenge with examples.


//Find length of a string
let str = "Rehan";
console.log(str.length); // 5
// .length property returns the length of a string


//Convert string to uppercase and lowercase?
console.log(str.toUpperCase()); // REHAN
console.log(str.toLowerCase()); // rehan
// toUpperCase() make the string to uppercase
// toLowerCase() make the string to lowercase


//Remove extra spaces from string
let str2 = "   Hello World   ";
console.log(str2.trim()); // "Hello World"
// trim() removes spaces from start and end


//Check if substring exists
console.log(str.includes("han")); // true
console.log(str.includes("xyz")); // false
// includes() returns true/false depending uopn the presence


//Find position of character
let str3 = "banana";
console.log(str3.indexOf("a"));      // 1
console.log(str3.lastIndexOf("a"));  // 5
// indexOf jo hai first occurrence batata hai
// lastIndexOf jo hai wo last occurrence batata hai 


//Extract part of string
console.log(str3.slice(1,4)); // "ana"
// slice(start,end) makes a substring


// How to replace text in string
let str4 = "I love JavaScript. JavaScript is fun!";
console.log(str4.replace("JavaScript","JS"));  // "I love JS. JavaScript is fun!"
console.log(str4.replaceAll("JavaScript","JS"));  // "I love JS. JS is fun!"
// replace()  replace only first match
// replaceAll() replaces all matches


//Convert string into array
let str5 = "apple,banana,orange";
console.log(str5.split(",")); // [ 'apple', 'banana', 'orange' ]
// split() converts string into an array using seperator


//Get character and ASCII code
let str6 = "ABC";
console.log(str6.charAt(1));     // "B"
console.log(str6.charCodeAt(1)); // 66
// charAt gives character at index
// charCodeAt Gives ASCII/Unicode value


//Check starting and ending of string
let str7 = "Hello World";
console.log(str7.startsWith("Hello")); // true
console.log(str7.endsWith("World"));   // true
// startsWith() and endsWith() checks the prefix/suffix

// ------------------ FINAL VERDICT ------------------
// length = total characters
// toUpperCase / toLowerCase = case conversion
// trim = remove spaces (start + end)
// includes = check substring presence
// indexOf / lastIndexOf = position of character
// slice = extract substring
// replace / replaceAll = text replacement
// split = convert string to array
// charAt / charCodeAt = character + ASCII/Unicode value
// startsWith / endsWith = check prefix/suffix
// Matlab: ye methods tumhe string manipulation ke saare common use cases ke liye ready karte hain.