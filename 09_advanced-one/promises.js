const promiseOne = new Promise(function(resolve, reject) {
    // Do an asynchronous task
    // DB call
    // CryptoGraphy, Network
    setTimeout(function(){
        console.log('Async Task One Complete');   
        resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log('Promise consumed');
})


new Promise(function(resolve, reject) {
    setTimeout( () => {
        console.log("Async task two");
        resolve();
    }, 1000  );
}).then( () => {
    console.log("Promise two consumed");
});



const promiseThree = new Promise(function(resolve, reject) {
    setTimeout( () => {
        resolve({usename: 'john', password: '123'});
    }, 1000  );
});

promiseThree.then( (user) => {
    console.log("User logged in", user);
});


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout( () => {
        let error = false;
        if(!error){
            resolve({username: 'john', password: '123'});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000  );
});


promiseFour.then( (user) => {
    console.log("User logged in", user);
    return user.username;
}).then((username) => {
    console.log("Username is ", username);
}).catch( (error) => {
    console.log(error);
}).finally( () => {
    console.log("Your promise is either resolved or rejected.");
    
})


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout( () => {
        let error = true;
        if(!error){
            resolve({username: 'Alex', password: '123'});   
        } else {
            reject('Error: Something went wrong in promise five');
        }
    }, 1000  );
});

async function consumePromiseFive() {
    try{
            const response = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers() {
//     try{
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//             const data = await response.json()
//             console.log(data);
//     } catch(error) {
//         console.log("Error fetching users:",error);
//     }
    
// }
// getAllUsers();



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)  => {
    return response.json();
})
.catch((error) => {
    console.log("Error fetching users:", error);
})
.then((data) => {
    console.log(data);
});
