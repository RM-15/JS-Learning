// ------------------ THE MYSTERY OF PROTOTYPE IN JAVASCRIPT ------------------
// JavaScript ka core behavior "Prototypal Inheritance" par chalta hai.
// Kaam ki baat: JS mein har cheez (Array, String, Function) ultimately ek Object hai. 
// Jab JS ko kisi object par koi property ya method nahi milta, toh wo uske "Parent Prototype" ke paas dhoodhne jaata hai. Is safar ko "Prototype Chain" kehte hain.


// Why Prototype is Needed? (Memory Optimization)
// Jab hum Constructor ke andar koi method likhte hain, toh har naye instance ke saath wo method memory mein baar-baar duplicate hota hai.
// Agar 10,000 video cards banaye, toh memory mein 10,000 baar same function create hoga, jo bilkul efficient nahi hai.
// Solution: Method ko individual object mein copy karne ke bajay, use Constructor ke common "Prototype" dabba mein daal do!


// ------------------ INJECTING CUSTOM METHODS INTO PROTOTYPE ------------------
// JavaScript ke har Function ke paas ek `.prototype` naam ka khali object default milta hai.
// Hum is dabba ke andar apna custom method inject kar sakte hain, jo saare instances ke liye shareable ban jaata hai.


// Ek normal Constructor Function banao 'CourseEngine' (Parameters: title, price).
// Properties ko 'this' se attach karo, par is baar andar koi method MAT banana.
// Constructor ke BAHAR, 'CourseEngine.prototype.getDetails' ka use karke ek method inject karo jo title aur price console kare.
// Do naye instances banao aur unpar '.getDetails()' call karke check karo.

function CourseEngine(title, price) {
    this.title = title
    this.price = price
}
CourseEngine.prototype.getDetails = function(){
    console.log(`title: ${this.title}, price: ${this.price}`);
}
const course1 = new CourseEngine("JavaScript Basics", 999);
const course2 = new CourseEngine("Advanced JS", 1999);
course1.getDetails()
course2.getDetails()
//means humne .prototype ka use krke khudka method banaya hai


// ------------------ BEHIND THE SCENES: THE '__proto__' LINK ------------------
// `.prototype` wo dabba hai jo Constructor ke paas hota hai.
// `__proto__` (Dunder Proto) wo reference pointer hai jo har generated instance (object) ke paas hota hai, jo apne parent (Constructor) ke prototype ko point karta hai.
// Modern JavaScript mein `__proto__` ki jagah `Object.getPrototypeOf()` use karne ki salah di jaati hai.


// Apne banaye hue instance ka `__proto__` check karo aur dekho kya wo 'CourseEngine.prototype' ke barabar hai?
// Console.log karke validation karo (Boolean true/false dekhne ke liye).
console.log(course1.__proto__ === CourseEngine.prototype); //true
console.log(Object.getPrototypeOf(course1) === CourseEngine.prototype); //true
// getPrototypeof is modern way to get prototype nowadays


// ------------------ THE ULTIMATE PROTOTYPE CHAIN (GRANDFATHER PARADIGM) ------------------
// Jab aap `array.toString()` ya `object.hasOwnProperty()` chalate ho, toh wo kahan se aate hain?
// Engine pehle object ke khud ke andar dhoodhta hai -> fir uske Prototype (`__proto__`) par -> fir Object ke Prototype par -> aur end mein milta hai `null`.


// Ek simple Array banao: `const myHeroList = ["Ironman", "Spiderman"]`.
// Prototype chain verify karo: Kya `myHeroList.__proto__` Array.prototype ke barabar hai?
// Kya `myHeroList.__proto__.__proto__` Object.prototype ke barabar hai?
// Aur uske bhi upar `myHeroList.__proto__.__proto__.__proto__` kya return karta hai? Saare levels console karo.

const myHeroList = ["Ironman", "Spiderman"]
// console.log(myHeroList.__proto__ === Array.prototype); //true
// console.log(myHeroList.__proto__.__proto__ === Object.prototype); //true
// console.log(myHeroList.__proto__.__proto__.__proto__); //null

console.log(Object.getPrototypeOf(myHeroList) === Array.prototype); // true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(myHeroList)) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(myHeroList)))); // null
//means hum agar prototupe search krte krte upar jaaege to last stage will be null


// ------------------ CRAFTING SUPERPOWERS (PROTOTYPE EXTENSION) ------------------
// Kyun ki JS me sab kuch object hai, hum pure JavaScript ke default ecosystems (jaise String ya Array) ko bhi modify karke unhe nayi superpowers de sakte hain.
// E.g., Agar hum chahein ki har string ke paas ek shortcut method ho jo uski true length (bina spaces ke) nikal ke de.


// JavaScript ke global `String` ke prototype mein ek naya custom property/method inject karo jiska naam ho `trueLength`.
// Is method ke andar `this` keyword ka use karke string ke aage-piche ke spaces remove (`.trim()`) karo aur uski real length return/console karo.
// Test data: `"Hitesh     ".trueLength()` chalao, output exactly 6 aana chahiye.

String.prototype.trueLength = function () {
    return this.trim().length;
};

console.log("Hitesh     ".trueLength()); // 6
// humne ek naya method banaya jo length bhi return kerega and trim bhi krdega 


// ------------------ MODERN PROTOTYPAL INHERITANCE (PROTOTYPE SHIFTING) ------------------
// Purane zamane mein do alag-alag objects ko aapas mein link karne ke liye `__proto__` manually assign karte the.
// Aaj ke time par hum modern methods use karte hain jaise `Object.setPrototypeOf(obj1, obj2)`.


// Teen alag-alag objects banao:
// - `Teacher` (Property: makeVideo: true)
// - `TeachingSupport` (Property: isAvailable: false)
// - `TSAssistant` (Property: createAssignment: true)
// Modern syntax `Object.setPrototypeOf` ka use karke `TeachingSupport` ko `Teacher` ki properties inherit karwao.
// `TSAssistant` ko `TeachingSupport` ki properties inherit karwao.
// Console pe check karo kya `TSAssistant.makeVideo` access ho pa raha hai?

const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TSAssistant = {
    createAssignment : true
}
Object.setPrototypeOf(TSAssistant, TeachingSupport);
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TSAssistant.makeVideo); // True
// setPrototypeof use krke hum kisi bhi object ki properties ko access kr sakte hai scope ki problem nhi hogi


// ------------------ FINAL VERDICT ------------------
// Prototype JS ka inbuilt mechanism hai jo methods ko duplicate hone se bachata hai aur memory optimize karta hai.
// `.prototype` constructor function ki property hoti hai, jabki `__proto__` har object instance ka pointer hota hai.
// Prototype Chain ka end point hamesha `null` hota hai.
// Global Objects (String, Array) ke prototype ko modify karke hum unme custom features embed kar sakte hain.