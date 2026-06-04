// What is a Function?
// Function ek reusable block of code hota hai jo ek specific task perform karta hai.
// Matlab: ek baar likho, baar‑baar use karo.

// Syntax:
// function functionName(parameters) {
     // code to execute
//     return value; // optional
// }


// Function Parameters vs Arguments

// Parameters → placeholders (variables) jo function ke definition mein hote hain
// Arguments → actual values jo function ko call karte waqt pass kiye jaate hain

// Example:
function greet(name) {        // 'name' is a parameter
    return "Hello " + name;
}

console.log(greet("Rehan"));  // "Rehan" is an argument
// Yaha 'name' ek parameter hai, aur "Rehan" ek argument hai


// Write a function to add two numbers
// Call it with 5 and 7 → output 12
function addtwo(a,b) {
    return a + b;
}
console.log(addtwo(5,7)); // 12
// simple return mai hi dono number ko add kr do ya phir variable mai store karke variable return karo  jaise
function addtwo(a,b) {
    const c = a + b;
    return c;
}
console.log(addtwo(5,7)); // 12
//dono methods correct hai 


// Write a function to check if a number is even or odd
// Call it with 9 → output "Odd"
function check(a) {
  if (a % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
check(9); // odd
check(10); // even
// function banaya , condition lagaya if-else , function call kiya with different value and output according to the value


// Write a function that returns the square of a number
// Call it with 6 → output 36
function sq(a) {
    return a * a;
}
console.log(sq(6)); //36
// simple logic return mai multiplication kiya hai


// Write a function that takes a string and returns its length
// Call it with "Rehan" → output 5
function strlen(a) {
return a.length;
}
console.log(strlen('Rehan')); // 5
//.length string ki property hai jo length return krti hai 
//My mistake: maine a.length() likha isliye error aaya because () se javascript ko lagega ye function call hai  

// Write a function that converts Celsius to Fahrenheit
// Formula: F = (C * 9/5) + 32
// Call it with 0 → output 32
function conversion(c) {
   return (c * 9/5) + 32;
}
console.log(conversion(0));
// formula likha , return kiya 
//console kro , function call karo and argument thats all..


// Write a function that finds the maximum of two numbers
// Call it with 45 and 67 → output 67
function max(a,b){
    return a > b ? a : b;
}
console.log(max(67, 45)); //67
// maximum of two find krne ke liye ye simple expression hai jo har jagah kaaam aata hao
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(45, 67)); // 67
// if-else se bhi max find kar sakte hai if more than two number mai max find krna ho to


// Write a function that reverses a string
// Call it with "hello" → output "olleh"
function rev(a) {
 return a.split("").reverse().join("");    
}
console.log(rev('hello')); // olleh
//.split("") isne string ko array of character mai convert kiya ["h","e","l","l","o"]
// .reverse() ne reversekiya and .join("") ne join kiya thats it


// Write a function that calculates factorial of a number
// Call it with 5 → output 120
function fact(f) {
    let result = 1;
    for (let i = 1; i <= f; i++) {
        result = result * i;
    }
    return result;
}
console.log(fact(5)); //120
//pehle result ko base value 1 diya hai
// phir ek for loop hai jisme i=1 se n tak run hoga and every loop mai multiplication hoga result = result * i; 


// Write a function that takes an array and returns the sum of all elements
// Call it with [1,2,3,4] → output 10
function sum(a) {
return a.reduce((sum,acc) => sum + acc, 0);
}
console.log(sum([1,2,3,4])); // 10
//.reduce method ko return kiya hai


// Write a function that returns the first character of a string
// Call it with "JavaScript" → output "J"
function char(a) {
    return a.split("").shift()
}
console.log(char("javascript")); // j
//ye maine apna dimaag lagaya hai but isse simple hai
function char(a) {
    return a[0]; 
}
console.log(char("javaScript")); // j
// a[0] means first letter of an array
// .split() se string se array mai convert hoga and .shift ek first char of array remove hota hai jo maine return kiya hai 


// ------------------ Final Verdict ------------------
// Function → reusable block of code, ek baar likho, baar‑baar use karo
// Syntax → function functionName(parameters){ ... return value; }
// Parameters → placeholders in definition
// Arguments → actual values in function call
// return vs console.log → return reusable hai, console.log sirf print karta hai
// Properties vs Methods → 
//   .length → property (no ())
//   .split(), .reverse(), .join() → methods (need ())
// Naming → apne functions ko clear naam do (avoid built‑in names)
// Loops vs Recursion → dono se same task ho sakta hai (factorial, sum etc.)
// Array methods with functions → reduce(), filter(), map() useful for calculations