// Conditionals in JavaScript
// Conditionals ka use decision making ke liye hota hai.
// Common constructs: if-else, switch, ternary operator, truthy/falsy values, logical operators.

// IF-ELSE
// If-else ek basic conditional hai jo ek condition check karta hai aur uske basis pe code run karta hai.

// Check if a number is positive or negative using if-else.
function check(n){
    if(n > 0){
    console.log("Number is positive");
}
else {
    console.log("Number is negative");
}
}
check(-9); // Number is negative
check(9);  // Number is positive
//simple function banaya hai jismai if-else use hua hai 


// Check if a number is even or odd using if-else.
function evenodd(n){
    if(n % 2 === 0){
        console.log("Number is Even");
    }
    else {
        console.log("Number is Odd");
    }
}
evenodd(7); // Number is Odd
//simple function banaya hai jismai if-else use hua hai 


// Find the largest of two numbers using if-else.
function max(a,b){
    if(a>b){
        console.log(`${a} is Larger`);
    }
    else {
        console.log(`${b} is Larger`);
    }
}
max(45,68); // 68 is Larger
//simple function banaya hai jismai if-else use hua hai 


// Check if a person is eligible to vote (age >= 18).
function vote(age){
    if(age >= 18){
        console.log("Eligible to vote");
    }
    else {
        console.log("Not eligible to vote");
    }
}
vote(17); // Not eligible to vote
//simple function banaya hai jismai if-else use hua hai 


// Check if a given year is a leap year using if-else.
function leap(year){
    if(year % 4 === 0){
        console.log(`${year} is a leap year`);
    }
    else {
        console.log(`${year} is not a leap year`);
    }
}
leap(2025); // 2025 is not a leap year
//simple function banaya hai jismai if-else use hua hai 



// SWITCH
// Switch multiple cases handle karne ke liye use hota hai, jab ek hi variable ke multiple values check karni ho.

// Print day of the week based on number (1 = Monday, 7 = Sunday).
function week(day) {
    switch (day) {
    case  1: 
        console.log("Monday");
        break;
    case  2: 
        console.log("Tuesday");
        break;
    case  3: 
        console.log("Wednesday");
        break;
    case  4: 
        console.log("Thursday");
        break;
    case  5: 
        console.log("Friday");
        break;
    case  6: 
        console.log("Saturday");
        break;
    case  7: 
        console.log("Sunday");
        break;
}
}
week(3); //Wednesday
//Normal function banaya hai and switch use kiya hai


// Print grade based on marks (A, B, C, D, F).
function grade(marks) {
    switch (true) {
        case (marks >= 90):
            console.log(`Marks: ${marks} = Grade A`);
            break;
        case (marks >= 75):
            console.log(`Marks: ${marks} = Grade B`);
            break;
        case (marks >= 60):
            console.log(`Marks: ${marks} = Grade C`);
            break;
        case (marks >= 40):
            console.log(`Marks: ${marks} = Grade D`);
            break;
        default:
            console.log(`Marks: ${marks} = Grade F`);
    }
}
grade(95); // Marks: 95 = Grade A
//Normal function banaya hai and switch use kiya hai


// Print month name based on number (1 = January, 12 = December).
function monthName(num) {
    switch (num) {
        case 1: console.log(`Month ${num} is January`); 
            break;
        case 2: console.log(`Month ${num} is February`); 
            break;
        case 3: console.log(`Month ${num} is March`); 
            break;
        case 4: console.log(`Month ${num} is April`); 
            break;
        case 5: console.log(`Month ${num} is May`); 
            break;
        case 6: console.log(`Month ${num} is June`); 
            break;
        case 7: console.log(`Month ${num} is July`); 
            break;
        case 8: console.log(`Month ${num} is August`); 
            break;
        case 9: console.log(`Month ${num} is September`); 
            break;
        case 10: console.log(`Month ${num} is October`); 
            break;
        case 11: console.log(`Month ${num} is November`); 
            break;
        case 12: console.log(`Month ${num} is December`); 
            break;
        default: console.log(`Month ${num} is Invalid`);
    }
}
monthName(5);  // Month 5 is May
//Normal function banaya hai and switch use kiya hai


// Print traffic light action (Red = Stop, Yellow = Wait, Green = Go).
function trafficLight(color) {
    switch (color.toLowerCase()) {
        case "red":
            console.log(`Light is ${color} = Stop`);
            break;
        case "yellow":
            console.log(`Light is ${color} = Wait`);
            break;
        case "green":
            console.log(`Light is ${color} = Go`);
            break;
        default:
            console.log(`Light is ${color} = Invalid color`);
    }
}
trafficLight("Red");    // Light is Red = Stop
//Normal function banaya hai and switch use kiya hai


// Print shape type based on number (1 = Circle, 2 = Square, 3 = Triangle).
function shapeType(num) {
    switch (num) {
        case 1:
            console.log(`Shape ${num} = Circle`);
            break;
        case 2:
            console.log(`Shape ${num} = Square`);
            break;
        case 3:
            console.log(`Shape ${num} = Triangle`);
            break;
        default:
            console.log(`Shape ${num} = Invalid shape number`);
    }
}
shapeType(1); // Shape 1 = Circle
//Normal function banaya hai and switch use kiya hai



// TERNARY OPERATOR
// Ternary operator ek short form hai if-else ka: condition ? expr1 : expr2

// Check if a number is positive or negative using ternary.
// Check if a number is even or odd using ternary.
// Print "Adult" if age >= 18 else "Minor".
// Print "Pass" if marks >= 40 else "Fail".
// Print "Valid" if input string length > 0 else "Invalid".


// LOGICAL OPERATORS
// Logical operators: AND (&&), OR (||), NOT (!)
// Ye multiple conditions combine karne ke liye use hote hain.

// Check if a number is between 10 and 20 using AND.
// Check if a person is eligible for discount (age < 18 OR age > 60).
// Check if a number is NOT zero using NOT.
// Check if a string is non-empty AND starts with "A".
// Check if a student passes (marks >= 40 AND attendance >= 75).


// TRUTHY AND FALSY
// JS mein kuch values truthy hoti hain (evaluate as true) aur kuch falsy (evaluate as false).
// Falsy values: false, 0, "", null, undefined, NaN

// Check if a variable is truthy or falsy.
// Check if an empty string is falsy.
// Check if 0 is falsy.
// Check if null is falsy.
// Check if a non-empty string is truthy.
