// ------------------ CLASSES IN JAVASCRIPT ------------------
// class = Objects banane ka ek neat aur clean blueprint structure jo backend me prototype hi hai.
// extends = Ek class ka doosri class ke saath prototype link set karna bina manual mapping ke.
// super() = Parent ke constructor ko 'this' supply karke run karne ka trigger key.
// static = Aise methods jo objects se chhup jaate hain aur sirf Class name se call hote hain.


// JavaScript mein 'class' koi naya programming mechanism nahi hai, yeh sirf ek khubsoorat wrapper (Syntactic Sugar) hai.
// Behind the scenes, yeh abhi bhi pichle files wale 'Constructor Functions' aur 'Prototype Chain' ka hi use karti hai.

// Ek class banao 'VideoRenderer'.
// Constructor mein 2 parameters lo: 'title' aur 'format' (e.g., "1080p").
// Iske andar ek normal method banao 'getStreamUrl' jo console pe `${this.title} is rendering in ${this.format}...` print kare.
// Class ke bahar 'new' keyword se ek instance banao aur use variable me store karke method call karo.
class VideoRenderer {
    constructor(title, format) {
        this.title = title;
        this.format = format;
    }
    getStreamUrl() {
        console.log(`${this.title} is rendering in ${this.format}...`);
    }
}
const video1 = new VideoRenderer("HTML", "1080p");
video1.getStreamUrl(); // HTML is rendering in 1080p...
//like jese humne constructor function banaya tha same hi hai but yaha humne class and constructor keyword ka use kiya hai


// ------------------ CLASS EXTENDS (Basic Inheritance) ------------------
// 'extends' keyword ka use karke ek class doosri class ke saare methods aur properties ko apne andar copy (inherit) kar sakti hai.
// Isse baar-baar same code likhne ki zaroorat nahi padti aur prototype shift ho jata hai.

// Do classes banao: 'BasicPlan' (Parent) aur 'PremiumPlan' (Child).
// 'BasicPlan' ke paas ek property ho 'maxResolution' jiski value default "720p" ho aur ek method ho 'watchFreeContent' jo console pe message print kare.
// 'PremiumPlan' ko 'extends' karo 'BasicPlan' se. 
// 'PremiumPlan' ke andar ek naya method banao 'watch4KContent'.
// PremiumPlan ka ek naya object banakar check karo kya wo 'watchFreeContent()' aur 'watch4KContent()' dono ko chalapa raha hai.

// Parent Class
class BasicPlan {
    constructor(maxResolution = "720p") {
        this.maxResolution = maxResolution;
    }
    watchFreeContent() {
        console.log(`Default maxResolution is ${this.maxResolution}`);
    }
}

class PremiumPlan extends BasicPlan {
    watch4KContent() {
        console.log(`${this.maxResolution} → Enjoying 4K premium content!`);
    }
}

const video2 = new BasicPlan();
video2.watchFreeContent();  
const video3 = new PremiumPlan("1080p");
video3.watchFreeContent();  // Default maxResolution is 720p
video3.watch4KContent();    // 1080p → Enjoying 4K premium content!
// extends kya krta hai na wo doosri class ki properties ko inherit kr leta hai 
// and jiski property inherit krta hai wo parent class and khud child class ban jata hai


// ------------------ THE 'SUPER()' KEYWORD (Parent Constructor Chaining) ------------------
// Jab child class ke paas apna khud ka naya constructor hota hai, toh use parent class ke constructor ko call karna hi padta hai.
// 'super()' function parent ke constructor ko trigger karta hai aur wahan se properties ko child ke execution context mein 'this' ke sath load karta hai.

// Do classes banao: 'GenericUser' (Parent) aur 'CreatorAccount' (Child).
// 'GenericUser' ke constructor mein 'username' aur 'email' set karo.
// 'CreatorAccount' ko 'extends' karo 'GenericUser' se.
// 'CreatorAccount' ke constructor mein teen parameters lo: 'username', 'email', aur 'channelName'.
// `super()` ka use karke 'username' aur 'email' ko parent ke paas bhejo, aur 'channelName' ko normal 'this' se child mein set karo.
// CreatorAccount ka ek object banao aur check karo kya teeno properties safely initialize ho gayi hain console.log() karke.

class GenericUser {
    constructor(username, email) {
        this.username = username
        this.email = email
    }
}
class CreatorAccount extends GenericUser{
    constructor(username, email, channelName) {
        super(username,email)
        this.channelName = channelName
    }
}
const user1 = new CreatorAccount("Rehan", "abc@xyz.com", "Rehanch")
console.log(user1); // CreatorAccount { username: 'Rehan', email: 'abc@xyz.com', channelName: 'Rehanch' }
// means humne super keyword ka use krke username and email ko parent ke pass bhej diya
// and parent and child ki properties ek hi object mai aa gye


// ------------------ THE 'STATIC' KEYWORD (Secure Gatekeeper) ------------------
// 'static' keyword se banaye gaye methods ya properties ko class se bane hue instances (objects) access nahi kar sakte.
// Inhe sirf aur sirf main CLASS khud direct call kar sakti hai. Yeh utility functions ya secure internal IDs ke liye use hota hai.

// Ek class banao 'ApiKeyManager'.
// Iske andar ek `static` method banao 'generateToken' jo ek random string ya text return kare.
// Ek naya object instance banao `const myKey = new ApiKeyManager()`.
// Check karo: Kya `myKey.generateToken()` chal raha hai?.
// Phir class ke naam se direct chalao: `ApiKeyManager.generateToken()` aur output ko console karo.

class ApiKeyManager {
    static generateToken(){
        return 2+2;
    }
}
const myKey = new ApiKeyManager()  // no output until this point
console.log(ApiKeyManager.generateToken()) // 4
// because static method instance ke through accessible nahi hota

// ------------------ FINAL VERDICT ------------------
// class = Objects banane ka ek neat aur clean blueprint structure jo backend me function hi hai.
// extends = Ek class ka doosri class ke saath prototype link set karna bina manual proto mapping ke.
// super() = Parent ke constructor ko 'this' supply karke run karne ka trigger key.
// static = Aise methods jo objects se chhup jaate hain aur sirf Class name se call hote hain.