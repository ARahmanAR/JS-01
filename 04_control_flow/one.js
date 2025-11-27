// * Control flow or logic flow in programming refers to the order in which individual statements, instructions, or function calls are executed or evaluated.
// * Control flow is typically managed through conditional statements, loops, and function calls.

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    // console.log("Welcome back, user!");
}

const socre = 200;

if(socre > 100){
    const power = "fly";
    // console.log(`User power: ${power}`);
    }

const balance = 1000;

// if(balance > 500) console.log("test") ; // !  implicit scope

// if(balance < 500){
//     console.log("less than 500");
    
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }


const isUserLoggedIn2 = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromemail = true;

if(isUserLoggedIn2 && debitCard && 2 == 2){
    console.log("Alow to buy course");
}


if(loggedInFromGoogle || loggedInFromemail){
    console.log("user logged in");
}