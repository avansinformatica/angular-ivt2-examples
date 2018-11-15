let mySum1 = function (num1: any, num2: any): number {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}

console.log('result 1 = ' + mySum1('12', '34'));

let mySum2 = function (num1: any, num2: any): number  {
    let array: number[] = [+num1, +num2];
    console.log(array);
    for (let num in [num1, num2]) {
        if (typeof num === 'string') {
            let numx = parseInt(num);
        }
    }
    return (array[0] + array[1]);
}

console.log('result 2 = ' + mySum2('12', '34'));
