// ------------------ ASYNC CALLBACKS IN JAVASCRIPT ------------------
// Callback = ek function jo dusre function ke andar pass hota hai aur baad mein execute hota hai.
// JavaScript mein async ke liye ye base concept hai.
// setTimeout aur clearTimeout ek pair hai: ek function ko delay ke baad run karne ke liye,
// aur agar zarurat ho to usse cancel karne ke liye.
// setInterval aur clearInterval bhi ek pair hai: ek function ko repeatedly run karne ke liye,
// aur agar zarurat ho to usse stop karne ke liye.

// ------------------ SET TIMEOUT() ------------------
// kisi function ko certain delay ke baad ek hi baar print krne ke liye setTimeout() use hota hai.


// Write a program that prints "Hello after 2 seconds" using setTimeout and then cancels it after 5 seconds using clearTimeout.

const timeout1 = setTimeout((e) => {
    console.log("i am timeout1"); //i am timeout1
}, 2000)

setTimeout(() => {
    clearTimeout(timeout1);
    console.log("Timeout cancelled after 5 seconds");
}, 5000);
// 2000 is milisecond, and settimeout sirf ek hi baar print karega and after given time in miliseconds.


// Create a function greet() and call it inside setTimeout after 3 seconds,then cancel the timeout before it executes using clearTimeout.
function greet() {
    console.log("I am timeout2" );
}
const timeout2 = setTimeout(greet, 3000);
clearTimeout(timeout2)
// "I m a Function inside a setTimeout" ye print hoga after 3 seconds


// Use multiple setTimeouts with different delays (1s, 2s, 3s) to print messages in sequence, and cancel one of them using clearTimeout.
const timeout3 = setTimeout(greet, 1000);
const timeout4 = setTimeout(greet, 2000);
const timeout5 = setTimeout(greet, 3000);
clearTimeout(timeout3);
// same hi function liya hai but different time pe print hoga


// ------------------ SET INTERVAL() ------------------
// har interval ke baad kisi function ko repeat krne ke liye setInterval() use hota hai.


// Write a program that prints a counter value every 1 second using setInterval, and stop it after 5 seconds using clearInterval.
const interval1 = setInterval(() => {
    console.log("i am interval1");

}, 1000)
setTimeout(() => {
    clearInterval(interval1);
console.log("interval1 stoped after 5 seconds");
},5000)
//second time settimeout() isliye use kiya hai because wo ek hi baar messege print krta hai,
// agar setinterval hi use krte to "interval1 stoped after 5 sceonds" baar baar print hoga


// Run a setInterval that stops automatically after 5 runs using clearInterval.
const interval2 = setInterval(() => {
    console.log("I am interval2");
}, 1000);

setTimeout(() => {
    clearInterval(interval2);
    console.log("interval2 stopped after 5 seconds");
}, 5000);
//same as previous one


// Write a program that starts a setInterval and cancels it immediately using clearInterval.
const interval3 = setInterval(() => {
    console.log("I am interval3");
}, 1000);

clearInterval(interval3);
console.log("interval3 cancelled immediately");
//print hi nhi hoga because immediate clear ho jaaega interval


// ------------------ FINAL VERDICT ------------------
// setTimeout = ek baar delay ke baad callback run karta hai.
// clearTimeout = scheduled timeout ko cancel karne ke liye use hota hai.
// setInterval = har interval ke baad callback repeatedly run karta hai.
// clearInterval = interval ko stop karne ke liye use hota hai.
// Ye dono async ke basic examples hain jo event loop ke through handle hote hain.
