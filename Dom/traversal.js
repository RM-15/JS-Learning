// DOM TRAVERSAL IN JAVASCRIPT
// Traversal ka matlab hai ek element se uske relatives tak jump karna.
// Matlab: ek element ke Parent (upar waala), Child (andar waala),
// aur Sibling (same level ke bhai-behan) ko pakadna.
// Ye DOM ke tree structure ko explore karne ka tareeka hai.
// Why important? 
// Selectors se hum element pakadna seekh chuke ho,
// ab traversal se hum us element ke connections samjhoge.
// Isse hum UI ke andar relationships ko manipulate kar sakte ho
// jaise parent ka style change karna, child ka text update karna,
// ya sibling button ko disable karna.


// ------------------ PARENT TRAVERSAL ------------------
// Kisi element se uske upar waale container (Parent) tak pahunchne ke liye.
// Main properties: parentElement, parentNode, closest(), chain parentElement


// Target the span element using querySelector and find its immediate parentElement.
// const span = document.querySelector("p span");  as it is already declared in previous files
console.log(span.parentElement); // <p class="para3">...</p>
// parentElement sirf parent element return krta hai


// Find the parentNode of the first 'color-btn' button.
const buttons = document.querySelector(".color-btn");
console.log(buttons.parentNode); // <div class="wrapper">...</div>
// parentNode parent node (element + text bhi ho sakta hai) return karta hai


// Select a button and chain parentElement twice (parentElement.parentElement) to reach the body tag.
console.log(buttons.parentElement.parentElement); // <body class="bg-color">...</body>
//we can use it twice also 


// Use the modern .closest(".bg-color") method from a button to find its nearest wrapper container.
console.log(buttons.closest(".bg-color")); // <body class="bg-color">...</body>
// closest("selector")  nearest matching ancestor return karta hai


// ------------------ 2. CHILD TRAVERSAL ------------------
// Kisi parent wrapper se uske andar baithe hue components (Children) tak pahunchne ke liye.
// Main properties: children, firstElementChild, lastElementChild, childNodes


// Target the body element and fetch all its element children (HTMLCollection format).
const body = document.querySelector("body");
console.log(body.children); //HTMLCollection(10) [h1#heading, h3.description, h3.description, h3.description, p.para1, p.para2, p.para3, div.wrapper, script, script, heading: h1#heading]
// children sirf child elements (HTMLCollection) return krta hai


// Get the total count of direct child elements inside the body tag using .children.length.
console.log(body.childNodes); // NodeList(20) [text, h1#heading, text, h3.description, text, h3.description, text, h3.description, text, p.para1, text, p.para2, text, p.para3, text, div.wrapper, text, script, text, script]
// childNodes sabhi nodes (elements + text/white space)


// Target the body and print the innerText of its firstElementChild.
console.log(body.firstElementChild.innerText); // Hello DOM
// firstElementChild pehla child element return krta hai


// Target the body and print the innerText of its lastElementChild (the script tag or last button).
console.log(body.lastElementChild.innerText); // (<script src="traversal.js">empty</script>) because maine waha kuch scripting kari nhi hai 
// lastElementChild last child element return krta hai


// Print the difference between body.children (only tags) and body.childNodes (tags + white spaces/text).
console.log(body.children); // HTMLCollection(10) [h1#heading, h3.description, h3.description, h3.description, p.para1, p.para2, p.para3, div.wrapper, script, script, heading: h1#heading]
console.log(body.childNodes); // NodeList(20) [text, h1#heading, text, h3.description, text, h3.description, text, h3.description, text, p.para1, text, p.para2, text, p.para3, text, div.wrapper, text, script, text, script]
// body.children gives HTMLCollection where as body.childNodes give a NodeList


// ------------------ 3. SIBLING TRAVERSAL ------------------
// Ek hi level par baithe hue padosi elements (bhai-behan) tak aaju-baaju jump karne ke liye.
// Main properties: nextElementSibling, previousElementSibling


// Target 'para1' paragraph and find its immediate nextElementSibling.
const para1 = document.querySelector(".para1");
console.log(para1.nextElementSibling); //<p class="para2">This is second paragraph</p>
// nextElementSibling agla bhai element return krta hai


// Target 'para2' paragraph and find its immediate previousElementSibling.
const para2 = document.querySelector(".para2");
console.log(para2.previousElementSibling); //<p class="para1">This is first paragraph</p>
// previousElementSibling pichla bhai element return karta hai


// ------------------ FINAL VERDICT ------------------
// parentElement = element ke parent ko access karne ke liye.
// parentNode = parent node return karta hai (element + document + text nodes bhi ho sakte hain).
// closest(selector) = current element se upar jaake nearest ancestor return karta hai jo given CSS selector match karta ho.
// children = element ke andar ke saare child elements ko access karne ke liye.
// childNodes = ek NodeList return karta hai jisme child elements ke saath‑saath text nodes (white spaces, line breaks) bhi include hote hain.
// firstElementChild / lastElementChild = pehla ya last child element directly access karne ke liye.
// nextElementSibling / previousElementSibling = element ke agle/pehle sibling ko access karne ke liye.