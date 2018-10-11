import { ArrayStack } from './stack';

let stack = new ArrayStack<String>();

stack.push("programmeren");
stack.push("is");
stack.push("cool!");

console.log( stack.pop() );
console.log( stack.pop() );
console.log( stack.pop() );


// Crash
console.log( stack.pop() );



