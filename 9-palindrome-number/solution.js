// Method 1
const isPalindrome = (x) => {
    const reversed = x.toString().split('').reverse().join('');
    return x.toString() === reversed;
};