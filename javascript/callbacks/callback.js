// there are three different kinds of functions

// a regular function
function f1() {
    console.log('hello from f1');
}

// an anonymous function (here stored in a variable)
let f2 = function() {console.log('hello from f2');}

// a lambda or fat arrow function (here stored in a variable)
let f3 = () => {console.log('hello from f3');}

// these functions are put in a waiting queue, to be executed when
// the time has elapsed
setTimeout(f1, 1000);
setTimeout(f2, 2000);
setTimeout(f3, 3000);

// in the mean time this log statement will be run
console.log('first!');