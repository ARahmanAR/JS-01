// var c = 300
let a = 500;
if(true){
    let a = 10;
    const b = 20;
    // console.log("Inner: ", a);
    
}

console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "john";

    function two(){
        const website = "example.com";
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if(true){
    const userName = "Abdur Rahman";
    if(userName === "Abdur Rahman"){
        const website = " YouTube";
        // console.log(userName + website);
        
    }
    // console.log(website);
}
// console.log(userName);

// ++++++++++++++++++++++ interesting  +++++++++++++++++++++++

function addone(num){
    return num + 1;
}

addone(5);

const addTwo = function(num){
    return num + 2;
}

addTwo(5);