// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}***encrypted***`;
    }
    userName(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("Chai", "chai@example.com", "password123");
// console.log(chai.encryptPassword());
// console.log(chai.userName());

// behind the scenes

function UserOld(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

UserOld.prototype.encryptPassword = function() {
    return `${this.password}***encrypted***`;
};

UserOld.prototype.userName = function() {
    return `${this.username.toUpperCase()}`;
};

const Tea = new UserOld("Tea", "tea@example.com", "password456");
console.log(Tea.encryptPassword());
console.log(Tea.userName());