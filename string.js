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

// Final Verdict
// 1. length → total characters
// 2. toUpperCase / toLowerCase → case conversion
// 3. trim → remove spaces
// 4. includes → check substring
// 5. indexOf / lastIndexOf → position of character
// 6. slice → extract substring
// 7. replace / replaceAll → text replacement
// 8. split → convert string to array
// 9. charAt / charCodeAt → character + ASCII code
// 10. startsWith / endsWith → check prefix/suffix
