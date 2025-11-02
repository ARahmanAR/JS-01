// Dates
// let myDate = new Date(); // Current date and time
// console.log("Current Date and Time:", myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

let myCreatedDate = new Date("2025-11-25");
let myCreatedDate2 = new Date(2025, 10, 25); // Month is 0-indexed (0 = January, 10 = November)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate.getTime());
console.log(myCreatedDate2.getDate());
console.log(myCreatedDate2.getMonth());
console.log(myCreatedDate2.getDay());
console.log(myCreatedDate2.getFullYear());
myCreatedDate.toLocaleString('default', {
    weekday: "long",
})


