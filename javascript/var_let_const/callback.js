// expect 1, 2, 3, ...,  right?
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

// `i` is actually the same variable in all functions and is already set to 10
// before the first callback is ran.

// `let` gives a separate instance of the index
for (let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 1000 + 100 * i);
}