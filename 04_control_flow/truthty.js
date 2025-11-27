// *  trthy values : "string", 1, true, [], {}, function() {} , "0", 'false', "false"," "

const userEmail = "" // 

if (userEmail) {
  console.log("The user's email is defined.")
}else {
  console.log("The user's email is not defined.")
}

// * falsy values: "", 0, null, undefined, NaN, false, BigInt 0n


if(userEmail.length === 0){
  console.log("Array is empty")
}

const emtyObject = {}

if(Object.keys(emtyObject).length === 0){
  console.log("Object is empty")
}


// * Nullish coalescing operator (??): null or undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

console.log(val1); 


// * Ternary operator
// conditon ? exprIfTrue : exprIfFalse
const iceTeaPrice = 10;
iceTeaPrice < 5 ? console.log("Ice tea is cheap") : console.log("Ice tea is expensive");

