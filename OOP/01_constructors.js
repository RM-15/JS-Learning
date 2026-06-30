// ------------------ OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT ------------------
// OOP ek programming paradigm (tareeka) hai jo code ko real-world cheezon ke hisaab se structure karta hai.
// Kaam ki baat: Bahut saare alag-alag functions likhne ke bajay, poora code "Objects" aur "Classes" mein pack hota hai.


// Why OOP is Needed? (OOP Kyun Chahiye?)
// No Spaghetti Code: Variables aur functions poore page mein bikhre nahi hote, jisse code clean rehta hai.
// DRY Principle (Don't Repeat Yourself): Ek baar blueprint (template) banao aur usse hazaron unique copies memory mein generate karo.
// Easy State Management: Jaise hamare YouTube Clone mein 50 videos ka data hai, unka filtering aur states bina memory crash kiye manage karne ke liye OOP chahiye.


// 4 Core Principles of OOP:
// Abstraction: Complex internal working ko chupana aur sirf kaam ki cheez dikhana (e.g., fetch() ke andar ka logic hidden hai).
// Encapsulation: Data (properties) aur Actions (methods) ko ek hi dabba (Object) ke andar band rakhna.
// Inheritance: Ek template se doosri template mein properties aur logic pass karna taaki code repeat na ho.
// Polymorphism: Ek hi naam ka method alag-alag situations mein alag behavior show kare.


// ------------------ OBJECT LITERALS & 'THIS' CONTEXT ------------------
// Object Literal ek single entity hai. Iska nuksan ye hai ki agar 50 videos chahiye toh 50 baar manually duplicate copy-paste karna padega.
// 'this' keyword ka context environment ke hisaab se badal jaata hai. 
// Object ke andar 'this' us object ko point karta hai, par global scope mein ye Window object (ya khali object) ko point karta hai.

// Ek object literal banao jiska naam ho 'basicVideoCard'. 
// Isme teen properties dalo: title, channel, aur views.
// Iske andar ek method (function) banao 'renderMetaLog' jo 'this' keyword ka use karke console pe title print kare.
// Object ke bahar is method ko call karo aur global scope mein console.log(this) karke output check karo.
const basicVideoCard = {
    title: "Web-Development",
    Channel: "Rehan Mansuri",
    views:"3k",
    renderMetaLog() {
    console.log(this.title); // Web-Development
}
}
basicVideoCard.renderMetaLog();
console.log(this); // {} for node.js but jab hum browser pe karenge to hame windows krke ek context milega
// means jab hum this. use krte hai wo hum context dete hai ke ham kis scope ki baat kr rahe hai
// object ke bahar this print krne se empty parenthesis isliye aae because koi scope nhi tha , try printing this inside the object


// ------------------ THE CONSTRUCTOR FUNCTION ------------------
// Constructor function ek reusable template engine hai jo naye objects create karta hai.
// Iska naam hamesha Capital letter se shuru hota hai (naming convention).
// Agar hum 'new' keyword use karte hain, toh ye internally automatic 'this' ko return kar deta hai.

// Ek constructor function banao jiska naam ho 'YouTubeVideoEngine'.
// Yeh function 4 parameters accept karega: title, channel, views, aur duration.
// In inputs ko 'this' keyword ka use karke object ki properties banao.
// Iske andar ek method 'printStreamingStatus' bhi attach karo jo console pe ek dynamic message print kare.
function YouTubeVideoEngine(title, channel, views, duration){
    this.title = title
    this.channel = channel
    this.views = views
    this.duration = duration
    this.printStreamingStatus = function(){
        console.log(`Now Streaming: "${this.title}" by ${this.channel} | Views: ${this.views} | Duration: ${this.duration}`);        
    }
}
// ye constructor function hai
// Constructor Function ek template formula hai jo naye and multiple data cards generate karta hai.


// ------------------ THE CRITICAL 'NEW' KEYWORD IN ACTION ------------------
// 'new' keyword lagate hi memory mein kya 4 steps hote hain, dhyan se samjho:
// Step 1: Ek brand new khali object `{}` memory heap mein banta hai.
// Step 2: Constructor function call hota hai.
// Step 3: Function ka 'this' context us naye khali object `{}` se attach ho jaata hai.
// Step 4: Saari values us naye object mein bhar jaati hain aur object automatically return ho jaata hai.

// Upar banaye hue 'YouTubeVideoEngine' constructor ka use karke 2 alag-alag instances (objects) banao:
// 1. 'videoCard1' (Data: "JS Advanced OOP", "Chai aur Code", "200K", "45:12")
// 2. 'videoCard2' (Data: "Tailwind Responsive Grid", "RM-15", "850K", "12:22")
// Dono ke titles ko alag-alag console.log() karo aur dono par 'printStreamingStatus()' method chalao.
const videoCard1 = new  YouTubeVideoEngine("JS Advanced OOP", "Chai aur Code", "200K", "45:12")
const videoCard2 = new  YouTubeVideoEngine("Tailwind Responsive Grid", "RM-15", "850K", "12:22")
console.log(videoCard1.title); // JS Advanced OOP
console.log(videoCard2.title); // Tailwind Responsive Grid
videoCard1.printStreamingStatus() // Now Streaming: "JS Advanced OOP" by Chai aur Code | Views: 200K | Duration: 45:12
videoCard2.printStreamingStatus() // Now Streaming: "Tailwind Responsive Grid" by RM-15 | Views: 850K | Duration: 12:22
//agar hum new keyword nhi likhenge na to hamari values overwrite ho jaaegi
// har baar jab hum new likhte hai to hame object ka naya instance milta hai

// ------------------ CONSTRUCTOR PROTOTYPE LINK CHECK ------------------
// Kisi object ka original creator blueprint check karne ke liye `.constructor` property read karte hain.

// 'videoCard1' ki `.constructor` property ko console.log() karo aur check karo ki output mein kya aata hai.
console.log(videoCard1.constructor); // [Function: YouTubeVideoEngine]
//.constructor use krne se hame pata chalta hai ke object ka original creator kaun hai 


// ------------------ INSTANCEOF EVALUATION GATE ------------------
// instanceof operator check karta hai ki koi object kisi particular constructor chain ka hissa hai ya nahi.

// Check karo ki kya 'videoCard1' ek 'YouTubeVideoEngine' ka instance hai, aur kya wo ek 'Object' ka instance hai.
// Dono ka boolean output console.log() karo.
console.log(videoCard1 instanceof YouTubeVideoEngine); // true
console.log(videoCard1 instanceof Object); // true
// videoCard1 is instanceof Object kyunki JavaScript mein har object ultimately Object constructor se inherit karta hai.
// and instanceof YouTubeVideoEngine to hamne hi banaya hai


// ------------------ FINAL VERDICT ------------------
// OOP code ko clean, safe aur duplicate boilerplate se door rakhne ke liye zaroori hai.
// Object Literal ek single object ka state store karta hai par usse multiple copies nahi ban sakti.
// Constructor Function ek template formula hai jo naye and multiple data cards generate karta hai.
// 'this' keyword hamesha us object ko point karta hai jo current execution context mein chal raha ho.
// 'new' keyword memory mein naya isolated object block instantiate karne ke liye sabse mandatory trigger hai.
// .constructor property object ke origin source function ki details deti hai.
// instanceof operator se hum object ka inheritance validation structure check karta hai.