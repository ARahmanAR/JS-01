class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
        
    }

    static createID(){
        return `123`
    }
}

const ar = new User('ariel');
// console.log(ar.createID());


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('iphone', 'iphone@example.com');
console.log(iphone.logMe());
console.log(iphone.createID());
