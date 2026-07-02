// ------------------ THE 'THIS' CONTEXT PROBLEM IN JS ------------------
// JavaScript mein jab ek function dusre function ke andar se call hota hai, toh uska 'this' context lose ho jata hai.
// Kaam ki baat: Default behavior mein, nested function ka 'this' global object (window ya khali object) ko point karne lagta hai, jo hum nahi chahte.
// Solution: Hamein explicit taur par JS engine ko batana padta hai ki bhai, 'this' ka context ye wala object rakhna. Iske liye call(), apply(), aur bind() ka janam hua.


// Why Explicit Binding is Needed? (Zaroorat Kyun Padi?)
// Share Methods: Ek object ke method ko bina copy-paste kiye dusre object ke data par run karna.
// Chain Constructors: Ek constructor function ke andar dusre constructor function ki properties ko inherit karna.
// Event Listeners / Async Code: Jab function baad mein execute hona ho (jaise Click event par), tab context ko safe rakhna.


// ------------------ THE .CALL() METHOD (CONTEXT SHIFTING) ------------------
// .call() method kisi bhi function ko turant invoke (chalata) karta hai.
// Iska pehla argument hamesha wo OBJECT hota hai jise aap 'this' banana chahte ho.
// Uske baad ke arguments comma-separated (, ,) normal parameters hote hain.


// Constructor Chaining ke sath call() ka use karo.
// Ek constructor banao 'SetProfileEngine' jo sirf ek parameter le: 'username' aur use 'this.username' mein set kare.
// Ek dusra constructor banao 'CreateUserAccount' jo teen parameters le: 'username', 'email', aur 'password'.
// 'CreateUserAccount' ke andar 'SetProfileEngine' ko `.call()` ki madad se is tarah jodo ki username set ho jaye aur context leak na ho.
// Baki properties (email, password) ko normal 'this' se attach karo.
// Ek naya user instance banao aur use console.log() karke check karo kya username aa raha hai.

function SetProfileEngine(username) {
    this.username = username
}
function CreateUserAccount(username, email, password) {
    SetProfileEngine.call(this, username)
    this.email = email
    this.password = password
}
const user1 = new CreateUserAccount("Rehan", "abc@gmail.com", 123)
console.log(user1);  // CreateUserAccount {  username: 'Rehan',  email: 'abc@gmail.com',  password: 123}
//agar hum call mai sirf username likhte to username print nhi hota , isliye hame "this" likhna zaruri hai call mai


// ------------------ THE .APPLY() METHOD (ARRAY ARGUMENTS) ------------------
// .apply() bilkul `.call()` ki tarah hi kaam karta hai aur function ko turant chalata hai.
// Ek lauta farq: `.call()` mein arguments comma-separated hote hain, jabki `.apply()` baaki saare arguments ko ek single **Array []** ke roop mein accept karta hai.


// Ek general notification function ko alag objects par apply() se chalao.
// Ek normal function banao 'sendNotification(platform, status)'. Ye console pe ek message print karega: `[${platform}] Hey ${this.name}, your video is ${status}!`.
// Do alag objects banao: 'creator1' (name: "Hitesh") aur 'creator2' (name: "Sarthak").
// 'sendNotification' ko `.apply()` ka use karke 'creator1' aur 'creator2' par chalao.
// Platform aur Status ki values ko ek Array ke andar pass karo (e.g., ["YouTube", "Uploaded"]).

function sendNotification(platform, status) {
    console.log(`[${platform}] Hey ${this.name}, your video is ${status}!`);
}
const creator1 = {
    name: "Hitesh"
}
const creator2 = {
    name: "Sarthak"
}
sendNotification.apply(creator1, ["YouTube", "Uploaded"]);
sendNotification.apply(creator2, ["Instagram", "Processing"]);
// apply() array accept krta hai , uska syntax hai


// ------------------ THE .BIND() METHOD (FUTURE EXECUTION) ------------------
// `.call()` aur `.apply()` function ko turant execute kar dete hain.
// Lekin `.bind()` function ko turant nahi chalata. Yeh aapko us function ki ek **Nayi Copy (React/Event ready)** return karta hai, jisme 'this' ka context permanently bind ho chuka hota hai.
// Ise aap jab chahein, future mein invoke kar sakte hain.


// Event handler ya delayed execution ka simulation bind() se karo.
// Ek object banao 'YouTubeButton' jisme ek property ho 'buttonName: "Subscribe Button"' aur ek property ho 'clickCount: 0'.
// Is object ke andar ek method banao 'handleClick'. Iske andar 'this.clickCount++' karo aur console pe print karo `${this.buttonName} clicked ${this.clickCount} times`.
// Object ke bahar, ek normal `setTimeout` function likho jo 2 seconds baad chalega.
// `setTimeout` ke callback mein 'YouTubeButton.handleClick' ko `.bind()` ka use karke pass karo taaki 2 second baad chalne par bhi 'this' lose na ho.

const YouTubeButton = {
    buttonName: "Subscribe Button",
    clickCount: 0,
    handleClick(){
        this.clickCount++
        console.log(`${this.buttonName} clicked ${this.clickCount} times`); //  after 2sec 'Subscribe Button clicked 1 times'
    }
}
setTimeout(YouTubeButton.handleClick.bind(YouTubeButton), 2000);
// bind() ne ek nayi function copy banai hai jisme this permanently YouTubeButton object se bind ho jaata hai.


// ------------------ FINAL VERDICT ------------------
// call() = Function ko turant chalata hai, arguments ek-ek karke pass hote hain. Constructor chaining ke liye best hai.
// apply() = Function ko turant chalata hai, arguments array [] mein pass hote hain.
// bind() = Function ko chalata nahi hai, balki 'this' lock karke ek naya function return karta hai jise future mein call kiya ja sake.