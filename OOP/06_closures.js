// ------------------ CLOSURES & LEXICAL SCOPING IN JAVASCRIPT ------------------
// JavaScript me functions sirf simple blocks nahi hote, balki unke paas memory aur unke "pedigree" (parents) ka track record hota hai.
// lexical scoping = Ek aisi pipeline jisme inner (child) function apne outer (parent) function ke data/variables ko bina kisi rok-tok ke read kar sakta hai.
// closure (get closure) = Jab ek function return hokar kisi dusre variable me store ho jata hai, tab bhi wo apne parent scope ki memory ko apne saath 'bind' (pack) karke le jata hai.
// State Preservation = Closure ka use tab kiya jata hai jab hume bina global variable banaye, kisi state ya value ko runtime memory (Heap) me zinda aur secure rakhna ho.

// ------------------ LEXICAL SCOPING CONCEPT ------------------
// Lexical Scoping ka matlab hai ki ek inner (nested) function hamesha apne outer (parent) function ke variables ko access kar sakta hai.
// Kaam ki baat: Scope ka execution boundary block predefined hota hai. Parent functions apne children ke variables ko nahi dekh sakte, par children apne parents ke variables ko access kar sakte hain.

// Ek function banao 'outerProfileEngine'. Isme ek variable rakho `let username = "Rehan"`.
// Iske andar do nested functions banao: 'innerDisplay' aur 'innerLogger'.
// Dono inner functions ke andar `console.log(username)` karke check karo kya parent ka variable mil raha hai.
// Aur 'innerDisplay' ke andar ek variable banao `let secret = "123"` aur use 'innerLogger' ya outer function mein access karne ki koshish karo aur check karo kya error aata hai.

function outerProfileEngine() {
    let username = "Rehan";
    function innerDisplay() {
        console.log(username) // Rehan
        let secret = "123"

    }
    function innerLogger() {
        console.log(username) // Rehan
        console.log(secret) // Error: secret is not defined
    }
    innerDisplay()
    innerLogger()
    console.log(secret);// Error: secret is not defined
    
}
outerProfileEngine();
//jo child function hai wo apne parent ki properties inherit kr sakta hai but sibling ki nhi
// and parent jo hai wo apne child ki properties ko access nhi kr sakta



// ------------------ THE CLOSURE MECHANISM ------------------
// Closure JavaScript ka ek dhasu feature hai. Jab hum ek function ke andar se dusra function **return** karte hain, toh inner function sirf apna code lekar nahi jata.
// Kaam ki baat: Wo apne pure lexical environment (parent ke variables ka memory reference) ko bhi saath pack karke le jata hai. Isliye parent function ke khatam (pop from call stack) hone ke baad bhi variables memory mein zinda rehte hain!

// Ek function banao 'clickCounterFactory'. Isme ek counter variable rakho `let count = 0`.
// Is function ke andar se ek anonymous ya normal function return karo jo `count++` kare aur use console.log kare.
// Object ke bahar `const increment = clickCounterFactory()` karke memory execute karo.
// `increment()` ko teen baar alag-alag call karo aur check karo ki kya count ki state memory mein save ho rahi hai (Output: 1, 2, 3 aana chahiye).

function clickCounterFactory(params) {
    let count = 0;
    return () => {
        count++
    console.log(count);
    }
}
const increment = clickCounterFactory();
increment(); // 1
increment(); // 2
increment(); // 3
// means child sirf apne parent ki properties inherit nhi krta balke 
// Wo apne pure lexical environment (parent ke variables ka memory reference) ko bhi saath pack karke le jata hai


// ------------------ REAL WORLD USE-CASE: DATA PRIVACY ------------------
// Closures ka sabse bada faida hai encapsulating data or private states, bina kisi class keyword ke encapsulation achieve karna.

// Ek function banao 'createSecureKey(initialKey)'. 
// Iske andar ek variable `let privateKey = initialKey` store karo.
// Is function ke andar se ek object return karo jisme ek method ho `getKey()` jo mask format me key return kare (e.g., hidden characters) aur `setKey(newKey)` jo key ko update kare.
// Bahar se `privateKey` ko directly access karne ki koshish karo aur dekho ki closures ne use kaise secure kiya hai.

function createSecureKey(initialKey) {
    let privateKey = initialKey; 
    return {
        getKey: function() {
            return `$$$${privateKey.toString().slice(-3)}`; 
        },
        setKey: function(newKey) {
            privateKey = newKey; 
        }
    }
}
const secureAccount = createSecureKey("secret123");
console.log(secureAccount.privateKey); // undefined 
console.log(secureAccount.getKey());    // $$$123 
secureAccount.setKey("newPass789");
console.log(secureAccount.getKey());    // $$$789 
// same we hd done in the previous file


// ------------------ FINAL VERDICT ------------------
// Lexical Scoping = Inner function ka outer function ke variables ko execute boundary ke andar access kar paana.
// Closure = Return hote waqt function ka apne pure lexical scope/environment ka memory reference wrap karke sath le jaana.
// Memory Lifecycle = Closures ki wajah se global context se context stack clear hone par bhi execution state heap memory me capture rehti hai.