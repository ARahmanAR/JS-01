const name = "Abdur Rahman";
const repoCount = 50;

// console.log("Hello, my name is " + name + " and I have " + repoCount + " repositories on GitHub."); // Old way of concatenation
console.log(`Hello, my name is ${name.toUpperCase()} and I have ${repoCount} repositories on GitHub.`); // Using template literals , which is more readable

const gameName = new String("The-Witcher");
console.log(gameName[0]); // Accessing first character of the string
console.log(gameName.length); // Length of the string
console.log(gameName.toUpperCase()); // Converting string to uppercase
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, -6);
console.log(anotherString);

const newStringOne = "  Hello World   ";
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://www.example.com/path/to/page?query=123";
console.log(url.replace('123', '789'))

console.log(url.includes('www'));
console.log(url.includes('abc'));
console.log(gameName.split('-'));


