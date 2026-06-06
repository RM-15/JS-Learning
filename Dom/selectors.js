// JAVASCRIPT DOM SELECTORS 
// DOM selectors ka use HTML page ke elements ko pakadne ke liye hota hai.
// Matlab: page ke andar jo heading, paragraph, button hote hain unko JS ke variables mein laa sakte ho.
// Fir un variables ke through un elements ko change, style, ya interact kar sakte ho.


// ------------------ Core Selectors Covered: ------------------
// getElementById = ek unique id se element pakadna.
// getElementsByClassName = ek hi class wale saare elements pakadna.
// getElementsByTagName = ek particular tag (jaise <p>, <div>) ke saare elements pakadna.
// querySelector = CSS selector ke basis pe pehla matching element pakadna.
// querySelectorAll = CSS selector ke basis pe saare matching elements pakadna (NodeList return hota hai).


// ------------------ DOCUMENT.GETELEMENTBYID() ------------------
// getElementById ka use ek element ko uski unique id se pakadne ke liye hota hai.
// Har element ki id page mein unique hoti hai, isliye ye method fastest hai.


// Target the main heading using its unique ID.
const h1 = document.getElementById("heading");
console.log(h1); //<h1 id="heading">Hello DOM</h1>
// getElementById ka use ek element ko uski unique id se pakadne ke liye hota hai.
// Har element ki id page mein unique hoti hai, isliye ye method fastest hai.


// Get the visible text from the targeted heading.
const texth1= h1.innerText;
console.log(texth1); // Hello DOM
// innerText element ka sirf visible text deta hai (jo screen pe dikh raha hai).


// Get the raw hidden/unhidden text content from the heading.
const conth1 = h1.textContent;
console.log(conth1); // Hello DOM
// textContent element ka pura raw text deta hai (hidden text bhi include hota hai).


// Fetch the value of the 'id' attribute from the element.
const att = h1.getAttribute("id")
console.log(att); //heading
// getAttribute("attrName") element ke kisi attribute ka value nikalne ke liye.


// Add a new custom attribute 'data-status' with value 'active' to it.
h1.setAttribute("data-status", "active")
console.log(h1.getAttribute("data-status")); //active
// setAttribute("attrName", "value") element ke attribute ko set/update karne ke liye.


// ------------------ DOCUMENT.GETELEMENTSBYCLASSNAME() ------------------
// getElementsByClassName ka use ek hi class wale saare elements ko pakadne ke liye hota hai.
// Ye method ek HTMLCollection return karta hai (array jaisa hota hai, but pure array nahi).


// Target all elements sharing the class name 'color-btn'.
const button = document.getElementsByClassName("color-btn");
console.log(button); // HTMLCollection(3) [button.color-btn, button.color-btn, button.color-btn]
// HTMLCollection ek array‑like collection jo live hota hai (page change hote hi update ho jaata hai).


// Find the total number of elements inside the returned HTMLCollection.
console.log(button.length); // 3
//normal array.length property but ye array nhi hai HTMLCollection hai


// Access the second element from the collection using index brackets.
console.log(button[1]); //<button class="color-btn">Submit</button>
//again array property 


// Convert the array-like HTMLCollection into a real JavaScript Array.
const arrbutton = Array.from(button);
console.log(arrbutton); // (3) [button.color-btn, button.color-btn, button.color-btn]
//Array.from() is used to convert an array like property into an array
//now it is an Array 


// Run a forEach loop on the converted array to print each element's inner text.
arrbutton.forEach( n => console.log(n.innerText)); //  Home Submit Clear
//since it is an array so now we can apply foreach() loop on it and all elements ke properties print kar sakte hai one after another


// ------------------ DOCUMENT.GETELEMENTSBYTAGNAME() ------------------
// getElementsByTagName ka use ek particular tag ke saare elements ko pakadne ke liye hota hai.
// Jaise agar tum "p" tag doge to page ke saare <p> elements ek HTMLCollection mein mil jaayenge.


// Target all paragraph elements ('p') on the web page.
const p = document.getElementsByTagName("p")
console.log(p); // HTMLCollection(3) [p.para1, p.para2, p.para3]
// HTMLCollection ek array‑like collection jo live hota hai (page change hote hi update ho jaata hai).


// Check the length of the paragraph tags HTMLCollection.
console.log(p.length); // 3
//normal array.length property but ye array nhi hai HTMLCollection hai


// Access the first paragraph element directly from the collection.
console.log(p[0]); // <p class="para">This is first paragraph</p>
//again array property 


// Convert the paragraphs collection into a real array structure.
const arrayP = Array.from(p);
console.log(arrayP); // (3) [p.para, p.para, p.para3]
//Array.from() is used to convert an array like property into an array


// Run a loop on the converted array to print the class names of all paragraphs.
arrayP.forEach( n => console.log(n.className)) // para1 para2 para3
//since it is an array so now we can apply foreach() loop on it and all elements ke properties print kar sakte hai one after another


// ------------------ DOCUMENT.QUERYSELECTOR() ------------------
// querySelector ka use CSS selector ke basis pe element pakadne ke liye hota hai.
// Ye sirf pehla matching element return karta hai (first match).


// Target the very first element matching the class '.description'.
const desc = document.querySelector(".description");
console.log(desc); // <h3 class="description">I am heading3 1</h3>
// querySelector ne class name ke basis pe pehla matching element return kiya.


// Select the first 'h1' tag directly using its pure tag identifier.
const firsth1 = document.querySelector("h1");
console.log(firsth1); // <h1 id="heading" data-status="active">Hello DOM</h1>
// querySelector ne pure tag ke basis pe pehla matching element return kiya.


// Drill down and select a nested 'span' tag inside a paragraph element.
const span = document.querySelector("p span");
console.log(span); // <span>Inside div span</span>
// querySelector ne parent ke reference ke basis pe pehla matching element return kiya.


// Select an heading element specifically using its attribute block structure.
const attblockStrc = document.querySelector('h1[data-status="active"]')
console.log(attblockStrc); // <h1 id="heading" data-status="active">Hello DOM</h1>
// querySelector ne element ke attribute block structure ke basis pe pehla matching element return kiya.


// Print the innerHTML of the main title using querySelector.
const h1html = document.querySelector("h1");
console.log(h1html.innerHTML); // Hello DOM
// innerHTML element ke andar ka pura HTML code deta hai (tags + text).


// Print the outerHTML of the main title using querySelector.
const h1outer = document.querySelector("h1");
console.log(h1outer.outerHTML); // <h1 id="heading">Hello DOM</h1>
// outerHTML element khud + uske andar ka HTML code deta hai.


// ------------------ DOCUMENT.QUERYSELECTORALL() ------------------
// querySelectorAll ka use CSS selector ke basis pe saare matching elements pakadne ke liye hota hai.
// Ye ek NodeList return karta hai jisme multiple elements hote hain, aur ispe directly forEach loop chal sakta hai.


// Select all elements matching the class '.color-btn' using querySelectorAll.
const colorbuttons = document.querySelectorAll(".color-btn");
console.log(colorbuttons); // NodeList(3) [button#maifirstId.color-btn, button#maisecondId.color-btn, button#maithirdId.color-btn]
// NodeList ek array‑like collection jo static hota hai (page change hone par auto update nahi hota).


// Run a forEach loop directly on the returned NodeList to print their element IDs.
colorbuttons.forEach( n => console.log(n.id)) // maifirstId maisecondId maithirdId
// NodeList pe directly forEach loop chal sakta hai.


// Get the exact total element count inside this returned NodeList.
console.log(colorbuttons.length); // 3
//normal array.length property but ye array nhi hai NodeList hai


// Access the first node directly using standard array indexing notation.
console.log(colorbuttons[0]); //<button class="color-btn" id="maifirstId">Home</button>
//again an array property

// Run a loop on the NodeList to print the innerText of all selected buttons.
colorbuttons.forEach( n => console.log(n.innerText)); // Home Submit Clear
// NodeList pe directly forEach loop chal sakta hai.


// ------------------ FINAL VERDICT ------------------ 
// JavaScript DOM selectors ka use page ke elements ko pakadne ke liye hota hai.
// getElementById = ek single element ko uski unique id se pakadta hai (fastest).
// getElementsByClassName / TagName = ek class ya tag ke saare elements deta hai (HTMLCollection return hota hai).
// querySelector = CSS selector ke basis pe pehla matching element deta hai.
// querySelectorAll = CSS selector ke basis pe saare matching elements deta hai (NodeList return hota hai, forEach loop chal sakta hai).
// innerText = element ka sirf visible text deta hai (jo screen pe dikh raha hai).
// textContent = element ka pura raw text deta hai (hidden text bhi include hota hai).
// innerHTML = element ke andar ka pura HTML code deta hai (tags + text).
// outerHTML = element khud + uske andar ka HTML code deta hai.
// HTMLCollection = ek array‑like collection jo live hota hai (page change hote hi update ho jaata hai).
// NodeList = ek array‑like collection jo static hota hai (page change hone par auto update nahi hota).
// NodeList pe directly forEach loop chal sakta hai.
// getAttribute("attrName") = element ke kisi attribute ka value nikalne ke liye.
// setAttribute("attrName", "value") = element ke attribute ko set/update karne ke liye.