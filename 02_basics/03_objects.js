
// singleton

// object literals
const mySym = Symbol("key1")
const JsUser = {
    "full name": 'John Doe',
    name: 'John',
    age: 30,
    isSignIn: false,
    [mySym]: 789
}
// console.log(JsUser.age);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof mySym); // symbol
// console.log(typeof JsUser[mySym]); // This is checking the type of the value, not the key. The value is a string/Number/Anything but the key is a symbol.


JsUser["full name"] = "Abdur Rahman"
// Object.freeze(JsUser)
JsUser["full name"] = "AR Rahman"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello, JS user!");
}

console.log(JsUser.greeting); // This is not a function
// console.log(JsUser.greeting()); // This is a function
JsUser.greeting();

JsUser.greeting2 = function(){
    console.log(`Hello, JS User, ${this["full name"]}`);
}
JsUser.greeting2();

