// EVENTS IN JAVASCRIPT
// Events ka matlab hai user ke actions (click, hover, keypress, input) ko capture karna
// aur unke response mein JavaScript code chalana.
// Matlab: UI ko interactive banane ke liye event listeners use karte hain.
// Why important?
// Jab user button click kare, form submit kare, ya keyboard se type kare,
// tab hum JS ke through dynamic response dete hain (animations, validations, API calls).


// ------------------ ADDING EVENT LISTENERS ------------------
// addEventListener() browser ko bolta hai ki is element par event hone ka wait kare,
// Main properties to cover: addEventListener('eventName', callback), e.target, e.type, target.id
// aur event hote hi callback function execute kare. Ek element par multiple listeners attach kiye ja sakte hain.

// Target the 'Submit' button via ID and attach a basic click listener that logs "Button Pressed".
const sub = document.querySelector("#maisecondId");
sub.addEventListener('click', (e) => {
    sub.innerText = "Button Clicked"; //and it changes the text to Button CLicked
})
// addEventListener("eventName", callback) event attach karne ke liye hote hai 
// jaise maine button click kiya to text changed


// Target the 'Home' button and inside the event function, log the exact event target element using 'e.target'.
const home = document.querySelector("#maifirstId");
home.addEventListener('click', (e) => {
    console.log('event target element', e.target); // event target element <button>...</button>
})
// e.target jis element par event hua uska reference deta hai


// Use a single click event on a button to log both its event type ('e.type') and the clicked element's uniID.
const twobtn = document.querySelector("#imbtn2");
twobtn.addEventListener("click", (e) => {
    console.log(e.type); // clcik
    console.log(twobtn.id); // imbtn2
})
// e.type event ka type display krta hai (click, keydown, etc.).


// Target the 'Clear' button and use a click listener to dynamically log its innerText.
const clear = document.querySelector("#maithirdId");
clear.addEventListener('dblclick', (e) => {
    clear.innerText = "ThankYou"; // text changed to Thankyou but on double click
})
//dblclick means double click

// Target a form and attach a submit event listener that prevents default submission and logs "Form submitted".
const form = document.querySelector("#maiformhuRe");
form.addEventListener('submit', (e) => {
    e.preventDefault();
})
// event.preventDefault() use karne se wo default action cancel ho jaata hai, aur tum apna custom JavaScript code run kar sakte ho.


// ------------------ MOUSE MOVEMENTS & VISUAL ALTERATIONS ------------------
// Mouse events screen par cursor ki entry/exit ko track karke immediate visual styles update karte hain.
// Main properties to cover: addEventListener - mouseover, mouseleave

// Target the main heading and change its text color to 'coral' when the mouse pointer hovers over it ('mouseover').
const mainheading = document.querySelector('#heading');
mainheading.addEventListener('mouseover', (e) => {
mainheading.style.color = "blue";
})
//mouse jaise hi heading pe hover hoga uska color blue ho jaaega


// Target the same heading and reset its color back to 'white' when the mouse leaves the element zone ('mouseleave').
mainheading.addEventListener('mouseleave', (e) => {
mainheading.style.color = "white";
})
// mouse jaise hi heading se hatega to color again white ho jaaega


// Select the first paragraph and use a hover event to dynamically inject an inline padding style of '10px'.
//para1 already declared
para1.addEventListener('mouseover', (e) => {
para1.style.padding = "10px";
})
para1.addEventListener('mouseleave', (e) => {
para1.style.padding = "5px";
})
//again same thing


// ------------------ KEYBOARD EVENTS ------------------
// Keyboard events user ke typing actions ko capture karte hain aur uske response mein code chalate hain.
// Main properties to cover: keydown, keyup, event.key


// Add a keydown event to document that logs which key was pressed.
const input = document.querySelector("#inp");
input.addEventListener('keydown', (e) => {
    console.log(e.key);  //jo bhi press karoge
})
// event.key keyboard se press ki gayi key print krta hai


// Add a keyup event that shows the released key in console.
input.addEventListener('keyup', (e) => {
    console.log(e.key);  //jo bhi press karoge
})
//keydown tab uss key ko print karega jab hum usse press karege 
//keyup tab uss key to print karega jab hum us key ko release karege means press krna and release krna is different


// ------------------ REMOVE EVENT LISTENER ------------------
// Kisi element se event listener hatane ke liye use hota hai.
// Main property: removeEventListener("eventName", callback)

// Attach a click event to a button, then remove it after first trigger.
//already button par event lagaya tah uper
const newfn = (n) => subbtn.innerText= "Submitted";
const subbtn = document.querySelector("#maibhisubmithu")
subbtn.addEventListener('click', newfn)
subbtn.removeEventListener('click', newfn)
// removeEventListener("eventName", callback) event listener hatane ke liye.


// ------------------ FINAL VERDICT ------------------
// addEventListener("eventName", callback) = event attach karne ke liye (recommended).
// e.target = jis element par event hua uski reference.
// e.type = event ka type (click, keydown, etc.).
// event.key = keyboard se press ki gayi key.
// removeEventListener("eventName", callback) = event listener hatane ke liye.
// Matlab: Events ke through tum UI ko interactive aur dynamic bana sakte ho.
// User ke actions ke response mein JS code run hota hai, jo real‑time interactivity deta hai. 