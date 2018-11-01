class Greeter {
    // public greeting: string; // equivalent to declaring 'greeting' in the constructor

    // declare members in the constructor
    constructor(public greeting: string) { }

    greet(): string {
        return "<h1>" + this.greeting + "</h1>";
    }
};

let greeter = new Greeter("Hello, world!");

// the greeting can be seen with node and in the browser console
console.log(greeter.greet());

// when running in node 'document' is not defined!
document.body.innerHTML = greeter.greet();
