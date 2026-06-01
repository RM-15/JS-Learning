// How many datatypes are there in JavaScript?

// JavaScript has 2 categories of datatypes:

// 1. Primitive Datatypes (7 types)
//    - String 
//    - Number (includes special values: NaN, Infinity)
//    - Boolean
//    - Undefined
//    - Null
//    - Symbol
//    - BigInt

// 2. Non-Primitive (Reference) Datatypes
//    - Object
//    - Array
//    - Function

// Example:
let str = "Rehan";        // String (' ya "" quotes mai likhna zaruri hai)
let num = 18;             // Number
let isStudent = true;     // Boolean
let x;                    // Undefined
let y = null;             // Null
let sym = Symbol("id");   // Symbol
let big = 123456789n;     // BigInt

let obj = { name: "Rehan" }; // Object
let arr = ["HTML", "CSS"];   // Array
function greet() { return "Hello"; } // Function

// Special cases:
console.log(0/0);        // NaN (Not-a-Number, still type "number")
console.log(typeof NaN); // number
console.log(1/0);        // Infinity (also type "number")


//Difference between == and ===
console.log(5 == "5");   // true 
console.log(5 === "5");  // false 
//== only checks value
// === checks value and datatype also


//typeof null vs typeof undefined
console.log(typeof null);      // object 
console.log(typeof undefined); // undefined
//typeof null is object (special case bug)
//typeof undefined is undefined

//Demonstrate BigInt usage
let big = 123456789012345678901234567890n;
console.log(big);        // BigInt value
console.log(typeof big); // bigint
// when we have large number we store it in bigint and ends it with n.
// bigint is uesful for large numbers


//Demonstrate Symbol uniqueness
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false 
// symbols are always unique
// they cannot be same 


// Final Verdict
// 1. Primitive: String, Number (NaN, Infinity), Boolean, Undefined, Null, Symbol, BigInt
// 2. Non-Primitive: Object, Array, Function
// 3. Special cases: typeof null → object, typeof NaN → number
// 4. Prefer === over == for strict comparison


// Special Cases Table
// -------------------
// Value      | typeof result | Notes
// -------------------------------------------
// null       | object        | Historical bug in JS
// undefined  | undefined     | Variable declared but not assigned
// NaN        | number        | Special numeric value (Not-a-Number)
// Infinity   | number        | Result of division by zero