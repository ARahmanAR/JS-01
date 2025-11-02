// All JavaScript variables must be declared before they are used. You can declare variables using `var`, `let`, or `const`.But `let` and `const` are the preferred ways in modern JavaScript.Never use undeclared variables, as this can lead to unexpected behavior. Also remember that `const` variables cannot be reassigned after their initial assignment. And var is function-scoped, while let and const are block-scoped.
let x = 5;
const y = 10;

x = x + y;

console.log("The value of x is:", x);