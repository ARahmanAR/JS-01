// let myName = "Alice.    ";

// console.log(myName.trueLength);


let myHeros = ["Spiderman", "Ironman", "Hulk", "Thor"];

let heroPower = {
    Spiderman: "Web-slinging",
    Ironman: "High-tech suit",
    Hulk: "Super strength",
    Thor: "God of Thunder",

    getSpiderPower: function() {
        return `Spiderman's power is ${this.Spiderman}`;
    }
}
Object.prototype.AR = function() {
    console.log(`AR is present in all object.`);
    
}

Array.prototype.HayAR = function() {
    console.log(`Hay AR in array prototype`);
    
}

// heroPower.AR()

myHeros.AR()
myHeros.HayAR()
// heroPower.HayAR()


// inheritance 

const User = {
    name: "AR",
    email: "google@gmail.com"
}

const teacher  = {
    makeVideos: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fulltime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUser = "AR2     "
String.prototype.trueLength = function() {
    console.log(this);
    
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
}

anotherUser.trueLength()

"Apple".trueLength()
"   Banana   ".trueLength()