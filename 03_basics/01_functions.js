function sayMyName(){
    console.log("Hello, This is Function");
}

// sayMyName; // Function Reference
// sayMyName(); // Function Execution

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    return (number1 + number2);
}
const result = addTwoNumbers(3, null);
// console.log(`This is sum: ${result}`);

function logInUserMessege(usename){
    if(!usename){
        console.log("Please enter your username.");
        return
    }
    return `${usename} just logged in.`
}

// console.log(logInUserMessege("Ali"));
// console.log(logInUserMessege());

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Ali",
    price: 100,

}

function handleObject(anyobject){
    console.log(`Username is: ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 599,
})


const MyNewArray = [200, 500, 600, 900]

function returnSecondValue(getArray){
    return getArray[0]; 
}

// console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([1, 2, 3, 4, 5, 6, 7, 8]));
