function SetUserName(username){
    // complex DB  calls
    this.username = username;
}

function createUser(username, email, password){
    SetUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new createUser('chai', 'chai@example.com', 'password123');
console.log(chai);