for (let i = 0; i <  10; i++) {
console.log(i)
}

// for .. of loop is good for sending an email to every
// user for example. It works with arrays

const users = ['Max', 'Nadya', 'Anton'];

for (const user of users) {
    console.log(user) // executed each name separatly
}

// for ... in for objects

const loggedInUser = {
name: 'Lana',
age: 30,
isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName)
    console.log(loggedInUser[propertyName]); // even though its an 
    // object we can use sqare bracets to access each property
}

// while loop as long as the condition is true we continue
let isFinished = false;

while (!isFinished) {
isFinished = confirm('do you want to quit');
}

console.log('done');