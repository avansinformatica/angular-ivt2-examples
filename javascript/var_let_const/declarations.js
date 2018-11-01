// variables with 'var' can be overwritten
var x = 'first';
var x = 'second';

console.log(x);


// not allowed with 'let'
let y = 'first';
// let y = 'second'; // error

console.log(y);


// on top of that 'const' does not allow redefinition
const z = 'first';
// z = 'second'; // error

console.log(z);


// however, it is allowed to reassign to members in the object
const c = {name: 'John', age: 25};
c.age = 20;

console.log(c);