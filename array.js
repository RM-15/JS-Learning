// Slice vs Splice on [10,20,30,40,50].
const Myarr = [10,20,30,40,50]
const n1 = Myarr.slice(1,3)
console.log(n1);     //[ 20, 30 ]
console.log(Myarr);  //[ 10, 20, 30, 40, 50 ]
// slice original array ko change nhi karta 
const n2 = Myarr.splice(1,3)
console.log(n2); //[ 20, 30, 40 ]
console.log(Myarr) //[ 10, 50 ]
//splice original array ko change karta hai 


// Merge two arrays with concat and spread.
const a1 = [ 10, 20, 30, 40, 50 ]
const a2 = [ 60, 70, 80, 90, 100 ]
const a3 = a1.concat(a2)
console.log(a3); //[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// concat jo hai wo ek array mai doosre ko add krta hai
const a4 = [...a1 , ...a2]
console.log(a4); //[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//spread jo hai wo flexible hai hai and kitne bhi array merge kr sakta hai and single values bhi add kr sakta hai


// Flatten [1,2,[3,4],[5,[6,7]]].
const flatarr = [1,2,[3,4],[5,[6,7]]]
const flatarr1 = flatarr.flat(Infinity);
console.log(flatarr1); // [1, 2, 3, 4, 5, 6, 7]
//flat() use krke hum many sub arrays ko single array mai convertv kr sakte hai


// Convert "Hitesh" into array using Array.from().
let a5 = "hitesh";  
const a6 = Array.from(a5);
console.log(a6); // [ 'h', 'i', 't', 'e', 's', 'h' ]
//Array.form() is used to convert string to array


// Add/remove elements with push, pop, shift, unshift.
const a7 = [1, 2, 3, 4, 5]
const a8 = a7.push(6)
console.log(a7); // [ 1, 2, 3, 4, 5, 6 ]
const a9 = a7.pop()
console.log(a7); // [ 1, 2, 3, 4, 5 ]
const a10 = a7.shift()
console.log(a7); // [ 2, 3, 4, 5 ]
const a11 = a7.unshift(1)
console.log(a7); // [ 1, 2, 3, 4, 5 ]
// if start of the array se item ko add/remove krna hai to shift/unshift use karo
// and if end se item ko add/remove karna hai to push/pop use karo
// push/unshift return new length
// pop/shift return removed element


// Check if "Rehan" is an array using Array.isArray().
const Rehan = [ 'Naman', 'Rishabh', 'Sahil', 'Rehan', 'Arush', 'Shounak']
console.log(Array.isArray(Rehan)); // True   because Rehan is already declared array
console.log(Array.isArray('Rehan')); // False 'Rehan' is a string
//Array.isarray() check krta hai ki whether the argument passed is an array or not
// Array.isArray([]) → true
// Array.isArray({}) → false
// Array.isArray(undefined) → false


// Create array of numbers and find sum using reduce().
const num = [ 100, 90, 80, 70, 60]
const sum = num.reduce((total,value) => total + value, 0);
console.log(sum); // 400
// reduce() method se hum operations perform kr sakte hai like add , sub, multiply, divide, max, min etc.. syntax compulsory hai
// arrow function ke baad changes ho sakte hai according to the operations 
//more operations
// Subtraction
const diff = num.reduce((total, value) => total - value);
console.log(diff); // 200
// Multiplication
const product = num.reduce((total, value) => total * value, 1);
console.log(product); // 3024000000
// Division
const division = num.reduce((total, value) => total / value);
console.log(division); // 0.0000033068783068783074
// Maximum
const max = num.reduce((total, value) => total > value ? total : value);
console.log(max); // 100
// Minimum
const min = num.reduce((total, value) => total < value ? total : value);
console.log(min); // 60


// Filter even numbers from [1,2,3,4,5,6].
const a12 =  [ 1, 2, 3, 4, 5, 6]
const even = a12.filter((acc) => acc % 2===0)
console.log(even); // [ 2, 4, 6 ]
// again same filter() same hum many operations perform kar sakte hai

// Map array [1,2,3] to squares.
const a13 = [1,2,3];
const a14 = a13.map(num => num * num);
console.log(a14); // [ 1, 4, 9 ]
//map is very important and always returns a new array
// used for various operations


// Sort [40,10,30,20].
const a15 = [40,10,30,20];
const a16 = a15.sort((a,b) => a-b) // a-b for ascending order
console.log(a16); // [ 10, 20, 30, 40 ]
const a17 = a15.sort((a,b) => b-a) // b-a for descending order
console.log(a17); // [ 40, 30, 20, 10 ]
// sort() is used to sort the array


// Final Verdict
// 1. slice() → returns new array, original unchanged
// 2. splice() → modifies original array
// 3. concat() & spread → merge arrays
// 4. flat() → flatten nested arrays
// 5. Array.from() → convert string/iterable to array
// 6. push/pop → add/remove from end
// 7. shift/unshift → add/remove from start
// 8. Array.isArray() → check if variable is array
// 9. reduce() → sum, subtraction, multiplication, division, max, min
// 10. filter() → select elements by condition
// 11. map() → transform elements, always returns new array
// 12. sort() → arrange elements (ascending/descending with compare function)
