function muliplyBy5(num){
    return num * 5;
}

// muliplyBy5(4);
muliplyBy5.power = 2;

console.log(muliplyBy5(5));
console.log(muliplyBy5.power);
console.log(muliplyBy5.prototype);



function createUser(username, socre){
    this.username = username;
    this.socre = socre;

}

createUser.prototype.increment = function(){
    this.socre++;
}
createUser.prototype.printMe = function(){
    console.log(`socre is ${this.socre}`);
    
}

const chai = new  createUser("chai", 5);
const tea = new createUser("tea", 10);

chai.printMe();

