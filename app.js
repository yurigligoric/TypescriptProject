function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (resultConversion === 'number') {
        return +result;
    }
    else {
        return result.toString();
    }
    //   return result;
}
var number1 = 2;
var number2 = 'String';
var combinedstringAges = combine(number1, number2, 'string');
console.log(combinedstringAges);
var number1a = 2;
var number2a = 3;
var combinedAges = combine(number1a, number2a, 'number');
console.log(combinedAges);
