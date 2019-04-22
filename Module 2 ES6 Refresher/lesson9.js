// Here the var i is scoped to the function
function sayHello() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}

sayHello();



// Var decalred with let keyword to that block
function sayHello() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}

sayHello();
// const for constant are block scoped 
function sayHello() {
    for (const i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}

sayHello();

// Throw away var keywork 
// only use let 
//  and const for only constants