// Declare a variable with var, let, and const. Print them.
let a = 'Rehan';
var b = 'Rishabh';
const c = 'Sahil';
console.log(a,b,c); //Rehan Rishabh Sahil
// let and const hi use kara karo
// avoid var it is outdated


// Show hoisting behavior with var.
//JavaScript code run karne se pehle variables aur functions ko memory mein "lift" kar deta hai this is known as hosting.
 console.log(a1); // ReferenceError: Cannot access 'a1' before initialization
let a1 = 'Rehan'; 
 console.log(b1); // Undefined
var b1 = 'Rehan'; 
console.log(c1); // ReferenceError: Cannot access 'c1' before initialization
const c1 = 'Rehan'; 
//var hoist hota hai aur default value undefined assign ho jaati hai.
//let and const hoist hote hai but TDZ yani Temporal Dead Zone mai chale jaate hai isliye refernce error aata hai


// Demonstrate block scope difference between var and let.
{
    let a3 = 'Rehan';
}
console.log(a3); // ReferenceError: a3 is not defined
{
    var b3 = 'Rehan';
}
console.log(b3); // Rehan
// {} iske ander variable declare krke  we cannot access the variable outside the scope in let and const
// var doesnt respect scope , it prints variable outside the scope.


// Create a constant PI and try to reassign it.
const PI = 3.142;
console.log(PI);
const PI = 1235; //SyntaxError: Identifier 'PI' has already been declared
//we cannot reassign variables in const 


// Declare a variable without initializing, then assign later.
let a4;
console.log(a4); //Undefined
a4 = 24;
console.log(a4); // 24
//if value baad mai reassign to let use karo, var mai bhi reassign kr sakte hai but usko ignore kro.
//reasssignment const ke saath poisssible nhi hai.


// Show how re-declaration works with var vs let.
let a5= 'abcd';
var a6 = 'efgh';
console.log(a6); //efgh
let a5= 'hijk'; //SyntaxError: Identifier 'a5' has already been declared
var a6 = 'lmno'; 
console.log(a6); // lmno
//let ko redeclare nhi kar sakte
//var ko redeclarer kar sakte hai isliye ignore var


// Use template literals to print "My name is Rehan and I am 18 years old".
let name = "Rehan";
let age = 18;
console.log(`My name is ${name} and I am ${age} years old`); // My name is Rehan and I am 18 years old
//Backticks (`) jo hai wo template literals ke liye use hote hain , backticks ke ander ${} is mai hum variable ka naam likhe ge 
// and uski jo bhi value hogi wo print ho jaaegi iske badle


// Swap values of two variables without using a third variable.
let b4 = 10, c4 = 20;
[b4, c4] = [c4, b4];
console.log(b4, c4); // 20 10
//simple logic hai

// Show difference between undefined and null.
let b5;
let c5 = null;
console.log(b5); //undefined
console.log(c5); //null
//jab sirf variable declare hua haio but assign nhi hua to output undefined aata hai 
// null ek intentional assignment hota hai jo batata hai ki variable ki value "kuch nahi" hai.


// Final verdict
// Jab value fix ho (jaise PI, API_KEY, MAX_USERS) → const use karo.
// Jab value change ho sakti ho → let use karo.
// var avoid karo kyunki outdated hai aur scope issues create karta hai.