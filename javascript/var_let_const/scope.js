// variables can be captured in inner scope
function make_add2(x) {
    var a = 2;

    return function (x) {
        // 'a' can be used here and is still accessible after 
        // the function is returned
        return x + a;
    }
}

var add2 = make_add2();
console.log(add2(2)); // 'a' is used here!

// 'var' leaks to the outer scope
function greet1() {
    if(true) {
        var greeting = 'Hi there!';
    }

    return greeting;
}

console.log(greet1());

// 'let' has the familiar lexical scoping
function greet2() {
    if(true) {
        let greeting = 'Hi there!';
    }

    return greeting;
}

// console.log(greet2()); // error: 'greeting' undefined