// const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];

// const values = coding.forEach((item) => {
//     console.log(`I love coding in ${item}!`);
//     return item;
// });

// console.log(values);

const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = MyNums.filter( (num) => num >4);

// const newNums = MyNums.filter( (num) => {
//     return num > 4
// })

const newNums = [];

// MyNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// })
// console.log(newNums);

const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        rating: 4.2,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        rating: 4.5,
    },
    { title: "1984", author: "George Orwell", genre: "Dystopian", rating: 4.4 },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        rating: 4.6,
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Classic",
        rating: 3.9,
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        rating: 4.7,
    },
    {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        genre: "Dystopian",
        rating: 4.1,
    },
];

let userBooks = books.filter((book) => book.genre === "Classic");
userBooks = books.filter((book) => book.rating >= 4.5 && book.genre === "Fantasy");

console.log(userBooks);
