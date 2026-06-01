// Create student object and print keys, values, entries.
const student = {
    name : 'Rehan',
    class : 'FYBsc CS',
    rollno : 12345
}
console.log(Object.keys(student)); // [ 'name', 'class', 'rollno' ]
console.log(Object.values(student)); // [ 'Rehan', 'FYBsc CS', 12345 ]
console.log(Object.entries(student)); // [ [ 'name', 'Rehan' ], [ 'class', 'FYBsc CS' ], [ 'rollno', 12345 ] ]
//.keys , .values & .entries are the methods of object. by using so we can get only keys, values & entries seperately 


// Freeze object and try changing property.
const student1 = {
    name : 'Rehan',
    class : 'FYBsc CS',
    rollno : 12345
}
Object.freeze(student1)
student1.name = 'sahil'
console.log(student1.name); // Rehan
// object.freeze() jo method hai ussse values jo hai wo lock ho jati hai and usko add, delete, ya modify  nhi kar sakte


// Destructure {name, age, marks}.
const student2 = {
    name : 'Rehan',
    age : 18,
    marks : 99
}
const {name, age, marks} = student2;
console.log(name);   // Rehan
console.log(age);    //18
console.log(marks);  //99
// Destructuring ka matlab hai object ke andar se properties ko directly variables mein extract karna. 
//means ab baar baar student2.name student2.age likhne ki zarurat nhi hai sirf name likhne se value mil jaaegi


// Merge {a:1,b:2} and {c:3,d:4}.
const b1 = { a:1, b:2}
const b2 = { c:3, d:4}
const b3 = {...b1, ...b2}
console.log(b3); //{ a: 1, b: 2, c: 3, d: 4 }
// jis tarah array mai spread operator (...) use kiya tha vaise hi same objects ke liye
//another method
const b4 = Object.assign({}, b1, b2);
console.log(b4); // { a:1, b:2, c:3, d:4 }
//object.assign is also used to merge two objects


// Add symbol as key in object.
const mysym = Symbol("key1")
const student3 = {
    name : 'Rehan',
    age : 18,
    marks : 99,
    [mysym] : "ImpInfo"
}
console.log(student3); // { name: 'Rehan', age: 18, marks: 99, Symbol(key1): 'ImpInfo' }
//symbol is a unique property, object.keys ko log karne par symbols print nhi hote wo hidden rehte hai


// Check property with .hasOwnProperty().
const student4 = {
    name : 'Rehan',
    age : 18,
    marks : 99
}
console.log(student4.hasOwnProperty('name'));   //true
console.log(student4.hasOwnProperty('rollno')); //false
console.log(student4.hasOwnProperty('marks'));  //true
//.hasOwnProperty just let us know whether the object directly contains certain property or not


// Use Object.seal() and try modifying, adding, and deleting properties.
const student5 = {
    name : 'Rehan',
    age : 18,
    marks : 99
}
Object.seal(student5);
student5.name = 'Rishabh'
student5.email = 'abcd@1234gmail.com'
delete student5.age;
console.log(student5); //{ name: 'Rishabh', age: 18, marks: 99 }
//Means object.seal karne ke baad hum values ko modify kr satke hai but add/remove nhi kr sakte
//object.freeze krne ke baad we cannot even modify also


// Create nested object and access inner property.
const student6 = {
    st1: {
        english:80,
        maths :90
    },
    st2: {
        english:75,
        maths :95
    }
}
console.log(student6.st1.english); // 80
console.log(student6.st2.english); // 75
//nested objects means objects ke ander objects jo .operator use krke we can access the property in nested object


// Use Object.assign() to merge.
const b5 = Object.assign({}, b1, b2);
console.log(b5); // { a:1, b:2, c:3, d:4 }
//object.assign is also used to merge two objects


// Use Object.defineProperty() to add a new property with custom settings.
const student7 = {
    name: "Rehan",
    age: 18
};
Object.defineProperty(student7, "marks", {value: 95});
console.log(student7.marks); // 95
student.marks = 100;        // change not allowed
console.log(student7.marks); // 95
console.log(student7); //{ name: 'Rehan', age: 18 }  object log krne se nhi dikhega
//object.define se jo ek baar define kar diya usko ko change nhi kr skate


// console.log({} + {});
console.log({} + {}); //[object Object][object Object]
// Kyunki jab + operator use hota hai, objects string mein convert ho jaate hain.
// {} becomes [object Object] and adding both makes [object Object][object Object] 


// console.log({name:"Rehan"} == {name:"Rehan"});
console.log({name:"Rehan"} == {name:"Rehan"}); //false
// Har baar ek naya object memory mein banta hai.
// Chahe properties same ho, references alag hote hain, isliye comparison false aata hai.


// Final Verdict
// 1. Object.keys / values / entries → extract properties
// 2. Object.freeze → no add/delete/modify allowed
// 3. Object.seal → modify allowed, add/delete not allowed
// 4. Destructuring → easy property extraction
// 5. Merge → spread operator or Object.assign()
// 6. Symbol → unique hidden property
// 7. hasOwnProperty → check if property exists directly
// 8. Nested objects → access with dot/bracket notation
// 9. Object.defineProperty → add property with custom settings (non-enumerable, non-writable)
// 10. {} + {} → string conversion → "[object Object][object Object]"
// 11. Comparing objects → always false unless same reference
