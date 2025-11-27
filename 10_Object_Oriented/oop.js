const user = {
    username: 'john_doe',
    loginCount: 5,
    signIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Got login from ${this.username}`);
        console.log(this);
        
        
        
    }
}

// console.log(user.username);
// user.getUserDetails();

// console.log(this);


function User (username, loginCount, signIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signIn = signIn;
    this.greeting = function() {
        console.log(`Hello, ${this.username}`);
    }

    return this;
}

const userOne = new User('alice', 10, true);
const userTwo = new User('bob', 3, false);
console.log(userOne.constructor);
// console.log(userTwo.constructor);