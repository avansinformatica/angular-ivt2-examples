var Greeter = /** @class */ (function () {
    // public greeting: string; // equivalent to declaring 'greeting' in the constructor
    // declare members in the constructor
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hello, world!");
// the greeting can be seen with node and in the browser console
console.log(greeter.greet());
// when running in node 'document' is not defined!
document.body.innerHTML = greeter.greet();
//# sourceMappingURL=greeter.js.map