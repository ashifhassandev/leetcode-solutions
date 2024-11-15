// Method 1
const addBinary = function(a, b) {
    const num1 = BigInt('0b' + a);
    const num2 = BigInt('0b' + b);

    const sum = num1 + num2;

    return sum.toString(2);
};