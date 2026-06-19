// ------------------ ASYNC / AWAIT IN JAVASCRIPT ------------------
// async function hamesha ek Promise return karta hai.
// await keyword execution ko pause karta hai jab tak Promise settle na ho.
// try/catch async errors ko handle karne ke liye use hota hai.


// ------------------ ASYNC FUNCTION BASICS ------------------
// Create a basic async function that returns a string. Consume it with .then().

async function promise1() {
    return "Hello Async!";
}
promise1().then((msg) => {
    console.log(msg); // Hello Async!
});
// async function hamesha ek Promise return karta hai.


// ------------------ AWAIT WITH PROMISE ------------------
// Use await with a Promise that resolves after 2 seconds.

function promise2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Done after 2s"), 2000);
    });
}
async function run() {
    const result = await promise2();
    console.log(result);
}
run();
// await keyword execution ko pause karta hai jab tak Promise settle na ho.


// ------------------ ERROR HANDLING (TRY/CATCH) ------------------
// Handle errors in async function using try/catch.

const promise3 = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("Data fetched successfully");
    } else {
        reject("Error: Failed to fetch data");
    }
});
async function consumePromise3() {
    try {
        const result = await promise3;
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
consumePromise3();
// try/catch async errors ko handle karne ke liye use hota hai.


// ------------------ MULTIPLE AWAITS SEQUENTIALLY ------------------
// Create an async function that calls two Promises sequentially using await and prints both results.

function promise4() {
    return new Promise(resolve => {
        setTimeout(() => resolve("First Promise resolved"), 3000);
    });
}
function promise5() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Second Promise resolved"), 4000);
    });
}
async function twopromise() {
    const firstpromise = await promise4()
    console.log(firstpromise);
    const secondpromise = await promise5()
    console.log(secondpromise);
}
twopromise();
// we can call two Promises sequentially using await


// ------------------ ASYNC FUNCTION WITH DELAY ------------------
// Create an async function that simulates a delay using setTimeout and prints a message after completion.

function promise6(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
async function delay() {
    await promise6(2000);
    console.log("Task completed after delay");
}
delay();
// we can delay a function using await and Promise


// ------------------ FINAL VERDICT ------------------
// async/await Promises ko likhne ka modern aur clean syntax hai.
// try/catch async errors ko handle karne ke liye best hai.
// await sequential tasks ko easy banata hai.
// Ye sab real-world API calls aur projects mein bahut useful hote hain.
