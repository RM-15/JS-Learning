// ------------------ ASYNC PROMISES IN JAVASCRIPT ------------------
// Promise = ek object jo future mein ek value return karega (success ya failure).
// States: Pending → Fulfilled → Rejected
// .then() = success handle
// .catch() = error handle
// .finally() = hamesha run hota hai (cleanup)


// Create a Promise that simulates a backend server authorization check. Use setTimeout of 2 seconds, resolve with "Authorized" and log using .then().
const check = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve();
    }, 2000)
})
check.then(function () {
    console.log("Authorized"); // Authorized
})
//resolve() us ekrne se .then activate ho jata hai


// Create a Promise that resolves with an object { user: "RM-15", rollNo: 265404 }. Consume it with .then() and print the properties using template literals.
const promiseObj = new Promise((resolve, reject) => {
    resolve({ user: "RM-15", rollNo: 265404 });
});

promiseObj.then((data) => {
    console.log(`User: ${data.user}, Roll No: ${data.rollNo}`);
});
// hamne resolve mai ek object rakh diya 


// Create a Promise with a boolean variable networkFault = true. If false → resolve with "Data received", if true → reject with "Network Error". Handle both with .then() and .catch().
let networkFault = true;
const promise1 = new Promise((resolve, reject) => {
    if (!networkFault) {
        resolve("Data received");
    } else {
        reject("Network Error");
    }
});
promise1
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    });
//.then active hoga to success handle karega and .catch error handle karega


// Create a Promise that resolves { coreAsset: "yt-api" }. First .then() → return only the string value. Second .then() → print that string to console.
const promiseChain = new Promise((resolve, reject) => {
    resolve({ coreAsset: "yt-api" });
});
promiseChain
    .then((data) => {
        return data.coreAsset;
    })
    .then((asset) => {
        console.log(asset);
    });
//hum chaining bhi kar sakte hai ismai


// Create a Promise that conditionally resolves or rejects. Attach .then(), .catch(), and .finally(). Verify that .finally() runs no matter what.
let success = true; // try changing to false

const promiseFinal = new Promise((resolve, reject) => {
    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});
promiseFinal
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("This will always run");
    });
//.finally jo hai wo to kaam karega hi wahtever circumstances ho


// ------------------ FINAL VERDICT ------------------
// Promises async operations ko clean aur predictable banate hain.
// .then() success ke liye, .catch() error ke liye use hota hai.
// Chaining se data transformation easy ho jaata hai.
// .finally() hamesha run hota hai, chahe resolve ho ya reject.
// Promises microtask queue mein execute hote hain, isliye setTimeout se pehle flush hote hain.