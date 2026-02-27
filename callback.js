//A callback is: A function passed as an argument to another function, to be executed later.

function greet(name,callback) {
console.log("Hello "+name);
callback();
}

function sayBye() {
console.log("Goodbye");
}

greet("Doe",sayBye);