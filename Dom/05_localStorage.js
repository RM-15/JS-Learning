// LOCAL STORAGE IN JAVASCRIPT
// Local Storage browser ki memory ko reload ke baad bhi save rakhta hai.
// Normal JS variables page reload hote hi reset ho jaate hain,
// par Local Storage mein store kiya hua data browser band hone ya PC restart hone ke baad bhi safe rehta hai.
// Matlab: Client-side data ko permanently rakhne ka easy tareeqa hai.


// ------------------ CORE STORAGE MECHANISMS ------------------
// Local Storage ke main functions jo use hote hain:
// localStorage.setItem() = Ek key ke saath string value save kar deta hai.
// localStorage.getItem() = Saved value ko read kar deta hai.
// JSON.stringify() = Object/Array ko string format mein convert kar deta hai (direct store karne par "[object Object]" ban jaata hai).
// JSON.parse() = String ko wapas object/array mein convert kar deta hai.
// localStorage.removeItem() = Ek specific key ko delete kar deta hai.
// localStorage.clear() = Pure local storage ko ek hi baar mein empty kar deta hai.


//------------------ LOCALSTORAGE.SETITEM() ------------------
// LocalStorage strictly sirf String data types accept karta hai. Item store kar deta hai.

// Use localStorage.setItem() to save a key named 'appUser' with your name text string value.
localStorage.setItem('appUser', 'Rehan');
// localStorage.setItem() ek key ke saath string value save karta hai


//------------------ LOCALSTORAGE.GETITEM() ------------------
// Saved data values ko browser ki local memory se read karke nikal deta hai.

// Pull back that saved username using localStorage.getItem() and log it directly to confirm active persistence.
console.log(localStorage.getItem('appUser')); // "Rehan"
// localStorage.getItem() Saved value ko read karta hai.


//------------------ JSON.STRINGIFY() ------------------
// Agar tum custom JS Object ya full database Array direct storage me daaloge, toh browser use default format "[object Object]" me distort kar dega. Isliye object ko pehle string banaya jata hai.

// Convert a complex player state entity { name: "Naman", currentScore: 45 } into a single string stream format using JSON.stringify() and store it in a variable.
const player = { name: "Naman", currentScore: 45 };
const playerStr = JSON.stringify(player);
// JSON.stringify() Object/Array ko string format mein convert kar deta hai.


//------------------ JSON.PARSE() ------------------
// Browser memory se nikali gayi text string string data ko wapas live usable JavaScript Object format me reconstruct kar deta hai.
// Use JSON.parse() to convert your previously saved player string data back into a live operational object map, and log its internal property (like .name).
const savedPlayer = JSON.parse(localStorage.getItem('playerData'));
console.log(savedPlayer.name); // "Naman"
// JSON.parse() = String ko wapas object/array mein convert kar deta hai.


//------------------ LOCALSTORAGE.REMOVEITEM() ------------------
// Kisi single selective entry parameter specific key data ko remove kar deta hai.
// Use localStorage.removeItem() to delete strictly only a single targeted key entry from your browser storage instance while keeping other keys fully untouched.
localStorage.removeItem('appUser');
// localStorage.removeItem() ek specific key ko delete kar deta hai.


//------------------ LOCALSTORAGE.CLEAR() ------------------
// Pure storage block storage block parameters data values to ek bar me zero flush kar deta hai.
// Wipe out and clean up the entire local browser data cache buffer space completely inside a single statement using localStorage.clear().
localStorage.clear();
// localStorage.clear() Pure local storage ko ek hi baar mein empty kar deta hai.


// ------------------ FINAL VERDICT ------------------
// Local Storage ek simple client-side memory hai,
// jo bina database connect kiye tumhare web page ke data ko reload ke baad bhi safe rakh deta hai. 
// setItem('key','value') = Ek key ke saath string value save kar deta hai.
// getItem('key') = Saved value ko read kar deta hai.
// JSON.stringify(object) = Object/Array ko string format mein convert kar deta hai.
// JSON.parse(string) = String ko wapas object/array mein convert kar deta hai.
// removeItem() / clear() = Ek key delete karne ya pura storage empty kar deta hai.