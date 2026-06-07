// JAVASCRIPT ELEMENT FACTORY & MODIFICATIONS
// Element Factory ka matlab hai bina HTML file ko touch kiye,
// pure JavaScript se naye HTML tags create karna aur unhe page par dynamically display karwana.
// Matlab: JS se on-the-fly elements generate karke UI ko update karna.
// Why important?
// Jab database se live data (products list, leaderboard values) aata hai,
// tab hum pre-written HTML use nahi kar sakte. Factory functions se runtime par elements banate hain.


// ------------------ CREATING ELEMENTS ------------------
// Kisi bhi naya HTML tag ko JS memory ke andar create karna aur usme content inject karna.
// Main properties: document.createElement(), innerText, innerHTML, element.id, outerHTML


// Create a brand new 'div' element in memory using document.createElement.
const newElement = document.createElement('div');
console.log(newElement); // <div></div>
// createElement("tagName") = naya element banane ke liye.


// Create a new anchor tag ('a') and inject dynamic text using innerText.
const anchortag = document.createElement('a');
anchortag.innerText = "Visit Google";
anchortag.href = "https://www.google.com";
console.log(anchortag); // <a href="https://www.google.com">Visit Google</a>
// innerText element ka sirf visible text deta hai (jo screen pe dikh raha hai).


// Create a custom paragraph ('p') and inject bold tags using innerHTML.
const customP = document.createElement('p')
customP.innerHTML = "<b>I am Bold </b>";
console.log(customP); // <p>...</p>
// innerHTML element ke andar ka pura HTML code deta hai (tags + text).


// Create a dynamic heading ('h2') and assign an ID using element.id.
const dynamicH2 = document.createElement('h2')
dynamicH2.id = "maiH2hu";
console.log(dynamicH2); // <h2 id="maiH2hu"></h2>
//we can add Id using yourelement.id


// Create a list item ('li') and log its outerHTML.
const li = document.createElement('li');
li.innerText = "I am a li"
console.log(li.outerHTML) // <li>I am a li</li>
// outerHTML element khud + uske andar ka HTML code deta hai.


// ------------------ CLASSLIST & ATTRIBUTE MODIFICATIONS ------------------
// Kisi element ke classes ko dynamically add/remove/toggle karna.
// Main properties: classList.add(), classList.remove(), classList.contains(), classList.toggle(), multi-class expression


// Target a div and append a class using classList.add().
const div = document.querySelector("#maiDivhu");
div.classList.add("wrapper");
console.log(div); // <div id="maiDivhu" class="wrapper">...</div>
// classList.add("className") element mein naya class add karne ke liye.


// Remove a specific class from an element using classList.remove().
div.classList.remove("wrapper");
console.log(div); // <div id="maiDivhu">...</div>
// classList.remove("className") element se class hatane ke liye.


// Check if a class exists using classList.contains() (returns true/false).
console.log(div.classList.contains("wrapper")) // false
// classList.contains("className") check karta hai ki element ke andar wo class lagi hai ya nahi, agar hai to true return karega warna false.


// Toggle a class on/off using classList.toggle().
div.classList.toggle("wrapper");
console.log(div); // <div id="maiDivhu" class=".wrapper">...</div>
// classList.toggle("className") agar class lagi hai to remove karega, agar nahi hai to add karega.


// ------------------ DOM INJECTION & INLINE STYLING ------------------
// Jo element memory mein create hua hai usko DOM tree mein inject karna aur inline style apply karna.
// Main properties: appendChild(), append(), element.style.property, element.style.fontSize, multi-style configuration


// Append a new div into '#maiDivhu' using appendChild().
// const div = document.querySelector("#maiDivhu");  already declared hai uper
const newdiv = document.createElement("div")
newdiv.innerText = "Hello mai ek new div hu";
div.appendChild(newdiv);
console.log(div); // <div id="maiDivhu">...<div> Hello mai ek new div hu </div></div>
// appendChild(element) kisi element ke andar naya child add karne ke liye.


// Inject a span at the bottom of body using append().
const newspan = document.createElement('span')
newspan.innerText = "Hello mai span hu mujhe append kiya gaya hai"
document.body.append(newspan);
console.log(body); // <body class="bg-color">...<span>Hello mai span hu mujhe append kiya gaya hai </span></body>
// append() ek parent element ke andar naye child inject karne ke liye use hota hai
// ye Node + text dono accept karta hai aur ek hi call mein multiple items add kar sakta hai.


// Select a div and set background color via element.style.backgroundColor.
div.style.backgroundColor = "#818181"; // bg-color changes to #818181
// style.property directly CSS property change karne ke liye.


// Modify paragraph fontSize using element.style.fontSize.
// const para1 = document.querySelector(".para1"); already declared in previous files
para1.style.fontSize = "20px";
// style.property directly CSS property change karne ke liye.


// Create a button, set padding/text properties inline, and mount it onto DOM.
const btn2 = document.createElement("button");
btn2.innerText = "Don't Click"; 
btn2.id = "imbtn2"
btn2.style.padding = "5px 5px"                            
document.body.appendChild(btn2);        
console.log(btn2); // <button style="padding: 5px;">Don't Click</button>
// append() = parent ke andar multiple children ya text ek hi call mein inject karne ke liye



// ------------------ FINAL VERDICT ------------------
// document.createElement("tagName") = runtime par naya raw HTML element banane ke liye.
// appendChild(element) = parent ke andar ek single child inject karne ke liye.
// append() = parent ke andar multiple children ya text ek hi call mein inject karne ke liye (Node + string dono accept karta hai).
// remove() = kisi element ko DOM se delete karne ke liye.
// element.style.property = directly inline CSS property set/change karne ke liye (ex: element.style.color = "red").
// classList.add("className") = element mein naya class add karne ke liye.
// classList.remove("className") = element se specific class hatane ke liye.
// classList.contains("className") = check karta hai ki class lagi hai ya nahi (true/false return karega).
// classList.toggle("className") = agar class lagi hai to remove karega, agar nahi hai to add karega.
// Matlab: JavaScript ke factory functions aur classList utilities ke through tum bina HTML file ko touch kiye
// elements create, style, inject aur modify kar sakte ho. Ye hi power hai dynamic UI banane ki, runtime par DOM ko
// transform karna aur user ke actions/data ke hisaab se page ko update karna. 
