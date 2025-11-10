// const tinderUser = new Object()
const  tinderUser = {}

tinderUser.id = "1e45f5"
tinderUser.name = "Alex"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@me.info",
    fullName: {
        userNameFullName: {
            firstName: "Abdur",
            lastName: "Rahman"
        }
    }
}

// console.log(regularUser.fullName.userNameFullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3  = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "some@me.info",

    },
    {
        id: 2,
        email: "some@me.info",

    },

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLoggeOut'));


const course = {
    courseName: "JS in Hindi",
    Price: "999",
    courseInstructor: "Hitesh Choudhary"
}

// const {courseInstructor} = course
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Abdur Rahman",
//     "courseName": "JS in Hindi",
//     "Price": "free"
// }

