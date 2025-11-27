const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    java: 'Java'
};

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} stands for ${myObject[key]}`);
    
}

const programing = ['JavaScript', 'Python', 'Ruby', 'Java'];

for (const key in programing) {
    // console.log(key);
    console.log(programing[key]);
    
}


const map = new Map();
map.set('BD', 'Bangladesh');
map.set('SA', 'South Africa');
map.set('UK', 'United Kingdom');
map.set('UK', 'United Kingdom');

for (const key in map) {
    // console.log(key);
    // console.log(map[key]);
}