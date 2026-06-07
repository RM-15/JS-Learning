// What is an IIFE?
// IIFE = Immediately Invoked Function Expression
// Matlab: ek function jo turant execute ho jaata hai jaise hi define karte ho.
// Use case: global scope pollution avoid karna, variables ko encapsulate karna.

// Syntax:
// (function(){ ... })();
// Pehla () → function definition
// Dusra () → function execution

// Example 1: Simple IIFE
(function(){
    console.log("IIFE executed!");
})(); 
// Output: IIFE executed!


// Example 2: IIFE with Parameters
(function(name){
    console.log("Hello " + name);
})("Rehan");
// Output: Hello Rehan


// Example 3: Arrow Function IIFE
(() => {
    console.log("Arrow IIFE executed!");
})();
// Output: Arrow IIFE executed!


// Important Note:
// Agar multiple IIFE likh rahe ho to pehle wale ke baad ; lagana zaruri hai
// warna parser confuse ho jaata hai.
// Example:
(function(){ console.log("First IIFE"); })();
(function(){ console.log("Second IIFE"); })();


// Why use IIFE?
// - Encapsulation: variables/functions sirf IIFE ke andar accessible hote hain.
// - Avoid global scope pollution: global namespace clean rehta hai.
// - Initialization logic turant run karna (jaise config setup, default values).


// Interview Angle:
// IIFE is used to execute a function immediately and to prevent pollution of the global scope.
// Multiple functions/variables run karte waqt conflicts avoid karne ke liye IIFE helpful hai.


// Write an IIFE that prints "Hello IIFE".
(function(){
    console.log("Hello IIFE");
})();
//iife ka syntax and expression 


// Write an IIFE that takes a number and prints its square.
(function(a){
    console.log(a * a);
})(6);
//iife ka syntax and expression 


// Write an IIFE that checks if a number is even or odd.
(function(a){
    console.log(a % 2 === 0 ? "Even" : "Odd");
})(7);
//iife ka syntax and expression 


// Write an IIFE that adds two numbers and prints the result.
(function(a,b){
    console.log(a + b);
})(5,7);
//iife ka syntax and expression 


// Write an IIFE that reverses a string.
(function(str){
    console.log(str.split("").reverse().join(""));
})("hello");
//iife ka syntax and expression 


// Write an IIFE that returns the maximum of two numbers.
(function(a,b){
    console.log(a > b ? a : b);
})(45,67);
//iife ka syntax and expression 


// Write an IIFE that calculates factorial of a number.
(function(f){
    let result = 1;
    for(let i=1; i<=f; i++){
        result = result * i;
    }
    console.log(result);
})(5);
//iife ka syntax and expression 


// Write an IIFE that takes an array and prints the sum of all elements.
(function(arr){
    const sum = arr.reduce((acc,val) => acc + val, 0);
    console.log(sum);
})([1,2,3,4]);
//iife ka syntax and expression 


// Write an IIFE using arrow function that prints "Arrow IIFE executed".
(() => {
    console.log("Arrow IIFE executed");
})();
//iife ka syntax with arrow function and expression 


// Write two IIFEs back-to-back (with semicolon) that print different messages.
(function(){
    console.log("First IIFE");
})();
;(function(){
    console.log("Second IIFE");
})();
//iife ka syntax and expression 


// ------------------ Final Verdict ------------------
// IIFE ek function hai jo turant execute hota hai.
// Scope encapsulation karta hai aur global pollution avoid karta hai.
// Parameters pass kar sakte ho, arrow function bhi use kar sakte ho.
// Multiple IIFE likhte waqt semicolon zaruri hai.
// Mostly initialization aur private scope ke liye use hota hai.