function process_value() {
    let input = document.getElementById('myinput').value;
    let result = document.getElementById('result');

    console.log('received ' + input);

    result.innerText = input;
}