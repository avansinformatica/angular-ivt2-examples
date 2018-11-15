var mySum1 = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log('result 1 = ' + mySum1('12', '34'));
var mySum2 = function (num1, num2) {
    var array = [num1, num2];
    console.log(array);
    for (var num in array) {
        if (typeof num === 'string') {
            num += parseInt(num);
        }
    }
    var a = array.forEach(function (num) {
        if (typeof num === 'string') {
            num += parseInt(num);
        }
    });
    console.log(array);
    return (array[0] + array[1]);
};
console.log('result 2 = ' + mySum2('12', '34'));
