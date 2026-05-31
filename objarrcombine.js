// Create array of student objects and print names.
const student = [
    {
        name : 'Rehan',
        state : 'Rajasthan',
        age : 18,
        marks:85
    },
    {
        name : 'Rishabh',
        state : 'Maharashtra',
        age : 27,
        marks:90
    },
    {
        name : 'Sahil',
        state : 'Bihar',
        age : 16,
        marks:75
    },
    {
        name : 'Naman',
        state : 'UttarPradesh',
        age : 24,
        marks : 79
    }
]
console.log(student[0].name); // Rehan
console.log(student[1].name); // Rishabh
console.log(student[2].name); // Sahil
console.log(student[3].name); // Naman
//this is the way to create an object inside an array 


// Filter students with marks > 80.
console.log(student);   // [{ name: 'Rehan', state: 'Rajasthan', age: 18, marks: 85 },{ name: 'Rishabh', state: 'Maharashtra', age: 18, marks: 90 },{ name: 'Sahil', state: 'Bihar', age: 18, marks: 75 },{ name: 'Naman', state: 'UttarPradesh', age: 18, marks: 79 }]
const c1 = student.filter(c => c.marks > 80)
console.log(c1); // [{ name: 'Rehan', state: 'Rajasthan', age: 18, marks: 85 },{ name: 'Rishabh', state: 'Maharashtra', age: 18, marks: 90 }]
//filter() tumhe directly new array de deta hai jo condition satisfy karta hai.
//Har element ek object hai, isliye tumhe s.marks likhna zaruri hai.


// Add new student object to array.
const c2= {
    name : 'Arush',
    state : 'Goa',
    age : 21,
    marks : 87
}
student.unshift(c2);
console.log(student);   //{ name: 'Arush', state: 'Goa', age: 18, marks: 87 }, { name: 'Rehan', state: 'Rajasthan', age: 18, marks: 85 },{ name: 'Rishabh', state: 'Maharashtra', age: 18, marks: 90 },{ name: 'Sahil', state: 'Bihar', age: 18, marks: 75 },{ name: 'Naman', state: 'UttarPradesh', age: 18, marks: 79 }
//as same as normal addition of array using unshift and other operations can work like pop, shift & push
// push se bhi add hota but unshift krne se starting mai add hua hai and visible hai 


// Sort array of objects by age.
console.log(student);   // [{ name: 'Rehan', state: 'Rajasthan', age: 18, marks: 85 },{ name: 'Rishabh', state: 'Maharashtra', age: 18, marks: 90 },{ name: 'Sahil', state: 'Bihar', age: 18, marks: 75 },{ name: 'Naman', state: 'UttarPradesh', age: 18, marks: 79 }]
student.sort((a,b) => a.age - b.age);
console.log(student);  //[{ name: 'Sahil', state: 'Bihar', age: 16, marks: 75 },{ name: 'Rehan', state: 'Rajasthan', age: 18, marks: 85 },{ name: 'Arush', state: 'Goa', age: 21, marks: 87 },{ name: 'Naman', state: 'UttarPradesh', age: 24, marks: 79 },{ name: 'Rishabh', state: 'Maharashtra', age: 27, marks: 90 }]
//same as sorting in array but .age mention karna zaruri hai


// Use map() to extract all student names.
console.log(student);   // [{ name: 'Rehan', state: 'Rajasthan', age: 18, marks: 85 },{ name: 'Rishabh', state: 'Maharashtra', age: 18, marks: 90 },{ name: 'Sahil', state: 'Bihar', age: 18, marks: 75 },{ name: 'Naman', state: 'UttarPradesh', age: 18, marks: 79 }]
const c3=student.map(n => n.name)
console.log(c3); //[ 'Sahil', 'Rehan', 'Arush', 'Naman', 'Rishabh' ]
//agar objects se specific value ko extract karna hai to .map method best hai
//.map always returns a new array


// Find the student object with the highest marks.
const c4 = student.reduce((a,b) => a.marks > b.marks ? a : b)
console.log(c4); // { name: 'Rishabh', state: 'Maharashtra', age: 27, marks: 90 }
//.reduce can b also use to find sum, diff,max ,min,etc
//same as array