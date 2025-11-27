// for of

// for (const element of object) {
    
// }

const array = ['a', 'b', 'c'];

for (const alphabet of array) {
//    console.log(alphabet);
    
}

const greeting = "Hello World";

for (const greet  of greeting) {
    // console.log(`Each char is: ${greet}`);
}

// Maps

const map = new Map();
map.set('BD', 'Bangladesh');
map.set('SA', 'South Africa');
map.set('UK', 'United Kingdom');
map.set('UK', 'United Kingdom');

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':' ,value);
}

const MyObject = {
    'game1': 'Hitman',
    'game2': 'Fifa',
    'game3': 'Minecraft'
}

for (const [key, value] of Object.entries(MyObject)) // converting object to array 
{
    // console.log(key, ':', value);
}

