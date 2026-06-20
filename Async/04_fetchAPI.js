// ------------------ NETWORK FETCH IN JAVASCRIPT ------------------
// fetch() = browser ka native window method jo internet network servers se data request pipeline pull karta hai.
// fetch() automatically hamesha ek Promise return karta hai background memory status variables ke sath.
// 2-Step Extraction: Pehla step raw stream bytes read karta hai (response.json()), aur dusra step usable data arrays fetch karta hai.
// Hierarchy Priority: Fetch ke asynchronous response handlers seedha V8 engine ke specialized MICROTASK QUEUE mein register hote hain.


// ------------------ BASIC FETCH WITH response.ok ------------------
// Write an async function that hits fetch() on "https://api.github.com" and console.log only the boolean status of response.ok.
async function checkGithubStatus() {
    const response = await fetch("https://api.github.com");
    console.log(response.ok); // true if status 200-299, else false
}
checkGithubStatus();
// status code agar 200-299 hoga to response.ok true (fetch successful). Agar 300, 404, 500 type status hoga to response.ok false.
// Agar request hi fail ho, to response object banega hi nahi aur direct error throw hoga.


// ------------------ FETCH WITH ERROR HANDLING ------------------
// Write a network fetch operation inside a try...catch block to catch a broken URL route,
// manually throwing an Error if response.ok is false.

async function fetchBrokenUrl() {
    try {
        const response = await fetch("https://github.com/invalid-route");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log("Caught error:", err.message);
    }
}
fetchBrokenUrl();
// output is "Caught error: Network response was not ok"  because URL is invalid and agar invalid nhi hota to data fetch ho jata 


// ------------------ FETCH WITH .then() CHAINING ------------------
// Use the traditional .then() chaining framework to fetch "https://api.github.com/users/octocat/repos",
// parse it, and log your total public repo count.

fetch("https://api.github.com/users/octocat/repos")
    .then(response => response.json())
    .then(data => {
        console.log("Total repos:", data.length);
    })
    .catch(err => console.log("Error:", err));
// output = Total repos: 8, this is the classic use of fetch with two .then
// first .then is for json conversion and second .then is for processing the JSON data


// ------------------ FETCH WITH FINALLY ------------------
// Create an async function using fetch() that prints a clean console message
// "Loading Stream Initialized..." before the request starts, and "Loading Complete." inside a finally block.

async function fetchWithFinally() {
    console.log("Loading Stream Initialized...");
    try {
        const response = await fetch("https://api.github.com");
        const data = await response.json();
        console.log("Data received:", Object.keys(data));
    } catch (err) {
        console.log("Error:", err.message);
    } finally {
        console.log("Loading Complete.");
    }
}
fetchWithFinally();
// output = "Loading Stream Initialized..." then "Data received = [the data from api]" then "Loading Complete."


// ------------------ FINAL VERDICT ------------------
// fetch() method background thread block use karta hai bina browser viewport elements screen ko lag kiye.
// response.ok parameter validation variable trigger hai jo check karta hai ki server response codes 200-299 index bracket ke andar hain ya nahi.
// Raw response structure read-stream format mein hota hai, jise access karne ke liye await response.json() execution cycle chalana mandatory hai.
// .catch() blocks network errors ya rejected Promises ko handle karte hain.
// Microtask queue synchronization ke chalte, global fetch calls hamesha standard setTimeout macro-timers ke callback queues se pehle execution status clear karti hain.
