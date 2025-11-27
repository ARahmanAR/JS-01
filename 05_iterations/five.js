const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];
// * first way ( traditional function )
// coding.forEach( function (item){
//     console.log(item);
//     })

// * second way ( arrow function )
// coding.forEach( (item) => {
//     console.log(item);
// });

// * third way ( using a named function and passing it as a callback ) 
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr); 
// })


const MyCoding = [
    {
        name: 'JavaScript', 
        type: 'scripting'
    },
    {
        name: 'Python', 
        type: 'scripting'
    },
    {
        name: 'C++', 
        type: 'programming'
    }
]

MyCoding.forEach( (item) => {
    // console.log(item);
    console.log(item.name);
    console.log(item.type);
})