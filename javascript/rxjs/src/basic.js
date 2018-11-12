// callback
function dowork_callback(callback) {
    setTimeout(() => {
        callback('from callback');
    }, 1000);
}

let result;

dowork_callback((rtn) => {
    result = rtn;
    console.log('inside callback: ' + result);
});

console.log('inside main: ' + result);


// promise
function dowork_promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('from promise');
        }, 1000);
    });
}

dowork_promise()
    .then((promise_result) => {
        result = promise_result
        console.log('after promise: ' + result)
    });

console.log('inside main: ' + result);


// async await
async function dowork_async() {
    result = await dowork_promise();
    console.log('after await: ' + result)
}

dowork_async();

console.log('inside main: ' + result)