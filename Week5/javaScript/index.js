// console.log("Hello World");
alert('Hello World');

window.document.write('<p>Welcome to CSEN 60! </p>');

// document.append('<p>This should come after the h1</p>');

/*
  Function to calculate the sum of two numbers.
  Inputs: a, b - numbers to be added.
  Output: returns the sum of a and b.
*/

// TODO: fix this function

/**
 * @description -- this function adds two numbers
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function add(a, b) {
    return a + b;
}


let x = 100;
/*let x as definition*/
/* x=2 -> initialization*/
if (true) {
    let x = 200; // Same variable!
}
console.log(x); // Outputs: 200

let y;
y = null;
let z = 0;
console.log(y,z);

let greeting = "Hello, world!";
let response = `The time is ${new Date()}`;
console.log(response);

const age = 20;

if(age>18){
  console.log("You are of age");
}else{
  console.log(`You aren't of age. Please wait ${18-age} years`);
}

let person = {
  name: "John",
  age: 30,
  isStudent: false
};

console.log(person.age);

console.log(typeof(Hello World));

// Strict equality -- 1. are these the same type? 2. are these the same value?
console.log(3 === '3'); // false

// Loose equality -- are these the same value?
console.log(3 == '3'); // true
