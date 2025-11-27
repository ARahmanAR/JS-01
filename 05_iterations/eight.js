// reduce


const myNums = [1, 2, 3]

// const myTotal =  myNums.reduce(function(accmulator, currentValue) {
//     console.log(`accmulator: ${accmulator} and currentValue: ${currentValue}`);
    
//     return accmulator + currentValue
// }, 0);



const myTotal =  myNums.reduce((accmulator, currentValue) => accmulator + currentValue, 0);
// console.log(myTotal)


const ShoppingCart = [
    {
        itemName: "JS Course",
        price: 299
    },
    {
        itemName: "Python Course",
        price: 199
    },
    {
        itemName: "Django Course",
        price: 299
    },
    {
        itemName: "React Course",
        price: 399
    },
    {
        itemName: "Node Course",
        price: 499
    }
]

const priceToPay = ShoppingCart.reduce((accumulator, item) => accumulator + item.price, 0);
console.log(`Total Price to Pay is $${priceToPay}`);