class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super (username);
        this.email = email;
        this.password = password;
    }

    addCourse(courseName){
        console.log(`Course ${courseName} added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "chai@example.com", "password123");
chai.addCourse("Mathematics");
chai.logMe();

const masalaChai = new User("MasalaChai");

masalaChai.logMe();

// console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);



