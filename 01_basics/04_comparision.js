// console.log("2" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null === 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined === 0);
// console.log(undefined >= 0);

// * Stack (Primiive), Heap (Non-Primiive)

// let myYoutubeName = "Abdul Rehman";

// let anotherName = myYoutubeName;
// anotherName = "AR Rehman";

// console.log(anotherName);
// console.log(myYoutubeName);

let userOne = {
  name: "Abdur Rahman",
  age: 22,
};

let userTwo = userOne;

userTwo.name = "AR Rahman";

console.log(userOne);
console.log(userTwo);