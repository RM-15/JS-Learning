// ------------------ GETTERS AND SETTERS IN JAVASCRIPT ------------------
// Getters/Setters teen alag tarikon se banaye ja sakte hain: Class, Constructor Function, aur Object Literal.
// getter (get) = Property ko read (access) karte waqt data ko manipulate/format karne ka tareeka.
// setter (set) = Property me nayi value daalte (write) waqt validation ya modification lagana.
// Underscore (_) = Ek developers' convention hai jo infinite loop (Call-Stack Overflow) ko rokne ke liye internal/private property ka kaam karta hai.

// ------------------ MODERN CLASS GETTERS & SETTERS ------------------
// Getters aur Setters ka use tab kiya jata hai jab hum data ko direct access karne ke bajay uspar thodi processing ya validation lagana chahte hain.
// Kaam ki baat: `get` aur `set` keywords lagane ke baad, method ko function ki tarah call () nahi kiya jata, balki normal property ki tarah read/write kiya jata hai.
// Crucial Trap: Agar property ka naam aur getter/setter ka naam exact same rakh diya, toh call-stack memory full ho jayegi aur code crash ho jayega!

// Ek class banao 'UserCredentials'.
// Constructor mein do parameters lo: 'email' aur 'password'.
// Iske andar ek getter `get password()` aur ek setter `set password(value)` banao.
// Memory crash se bachne ke liye data ko backend mein `this._password` (underscore lagakar) store karna.
// Getter ke andar password ko uppercase mein convert karke return karo, aur setter ke andar nayi value ko save karo.
// Ek naya instance banakar check karo kya `.password` safely read aur write ho raha hai bina () lagaye.

class UserCredentials {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get password() {
        return this._password.toUpperCase()
    }
    set password(value) {
        this._password = value
    }
}
const user1 = new UserCredentials("abc@123", "Impasskey")
console.log(user1.password); //IMPASSKEY
// ye uppercase is just an example so that if we have to give the password to someone but not the original one
// even we can use math.random or we can add some text before and after the password
// this is known ad Abstraction which is one the the principle of OOP


// ------------------ OLD SCHOOL DEFINETPROPERTY GETTER/SETTER ------------------
// ES6 classes se pehle (purane codes mein), constructor functions ke andar getters aur setters inject karne ke liye `Object.defineProperty()` ka use hota hai.
// Interview Perspective: Interviewer aksar puchta hai ki "bina class ke getter setter banakar dikhao".

// Ek normal constructor function banao 'OldUserEngine' (Parameters: email, password).
// Function ke andar `Object.defineProperty(this, 'password', { ... })` ka use karke getters aur setters define karo.
// Isme bhi underscore `this._password` ka context use karna memory management ke liye.
// Ek instance banakar check karo kya purane tarike se bhi getter/setter kaam kar raha hai.



function OldUserEngine(email, password) {
    this.email = email
    this._password = password
    Object.defineProperty(this , 'password', {
        get: function() {
            return `@#$%${this._password}@#$%`
        },
        set: function(value){
            this._password = value
        }
    })
}
const user2 = new OldUserEngine("im@email", "2456")
console.log(user2.password) //@#$%2456@#$%
// this is old school method,   but we can see how prefix and suffix is added to the password to manipulate it



// ------------------ OBJECT LITERAL BASED GETTERS/SETTERS ------------------
// Na constructor function, na class! Direct ek simple object literal `{}` ke andar bhi get aur set rules apply kiye ja sakte hain.

// Ek simple object banao 'mediaAccess'.
// Isme do basic properties rakho: 'streamName' aur '_accessLevel'.
// Object ke andar hi `get accessLevel()` aur `set accessLevel(val)` likho.
// Get karne par text ko modification ke sath return karo aur set karne par value change karo.
// Direct object property par query karke output test karo.

const mediaAccess = {
    streamName : "Science",
    _accessLevel :  "1234567890",
    get accessLevel(){
return '*'.repeat(this._accessLevel.length)
    },
    set accessLevel(value){
this._accessLevel = value.toString()
    }
}
console.log(mediaAccess.accessLevel) // **********
// this is another method to use getter and setter in JS
// the conversion of password into *** is known as 'Masking'.


// ------------------ FINAL VERDICT ------------------
// getter (get) = Property ko read karte waqt uske data ko modify karne ka tareeka.
// setter (set) = Property mein nayi value daalte waqt check ya modification lagana.
// Underscore (_) = Ek developers' convention hai jo batata hai ki ye property internal/private use ke liye hai aur infinite recursion loops ko rokta hai.