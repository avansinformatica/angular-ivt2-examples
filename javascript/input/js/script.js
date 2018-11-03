//
// mijnscript.js
//
function processInput(){
    var value = document.getElementById('myinput').value;
    console.log('value = \'' + value + '\'');
    if (document.getElementById('myinput').value == '') {
        document.getElementById("result").innerHTML = 'The input was empty!';
    } else {
        // console.log('type is ' + (typeof value));
        document.getElementById("result").innerHTML = 'The value in input is \'' + value + '\'';
        document.getElementById('myinput').value = '';
    }

    // Empty fields after 1000 millisec.
    setTimeout(function () {
        document.getElementById("result").innerHTML = '';
        document.getElementById('myinput').value = '';
    }, 1000);
}


