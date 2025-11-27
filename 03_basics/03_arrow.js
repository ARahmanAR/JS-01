// ************************* This Keyword **************************

// In JavaScript, the value of 'this' depends on how a function is called.

// In the global context (outside of any function), 'this' refers to the global object (window in browsers, global in Node.js).
// console.log(this); // In a browser, this will log the Window object

// In a regular function, 'this' refers to the global object (or undefined in strict mode).
const user = {
    username: "alice",
    price: 999,
    welcomeMessage: function() {
        console.log(this);
        
        return `Welcome, ${this.username}! Your price is $${this.price}.`;
    }
}
// user.welcomeMessage(); // this not printing anything because we are not logging the output 
// console.log(user.welcomeMessage());
// user.username = "Bob";
// console.log(user.welcomeMessage());
// console.log(this);

function coffee(){
    let userName = "Charlie"; 
    console.log(this);
    
}
// coffee();

// ************************ Arrow Functions **************************

// Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding lexical context (the enclosing scope).

function regularFunction() { // * This is a regular function declaration
    console.log("Regular Function 'this':", this); // 'this' refers to the global object (or undefined in strict mode)
}
// regularFunction();

const regularFunc = function() { //*  This is a regular function expression with variable assignment
    console.log("Regular Func Expression 'this':", this); // 'this' refers to the global object (or undefined in strict mode)
};
// regularFunc(); 

const arrowFunction = () => { // * This is an arrow function
    console.log("Arrow Function 'this':", this); // 'this' refers to the surrounding lexical context
};
// arrowFunction();

() => {} // * This is an arrow function with no parameters and no body

const addTwo = (num1, num2) => { // *  This is an arrow function with parameters and a body, explicitly returning the sum
    return num1 + num2;
}
const addThree = (num1, num2) => num1 + num2; // * This implicitly returns the sum of num1 and num2
const addFour = (num1, num2) => (num1 + num2); // * This also implicitly returns the sum of num1 and num2 with parentheses

const object = (a, b) => ({usename: "david"}); // * This does NOT return an object, it is treated as a function body

// console.log(object());


const myArray = [1, 2, 3, 4, 5];


// myArray.forEach(function(){}); // * Regular function expression as a callback
// myArray.forEach(() => {}); // * Arrow function as a callback


