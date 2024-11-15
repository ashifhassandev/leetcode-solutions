// Method 1
const isPalindrome = (x) => {
    if (x < 0 || x % 10 === 0 && x !== 0) {
        return false;
    }

    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};

// Method 2
const checkPalindrome = (x) => {
    const reversed = x.toString().split('').reverse().join('');
    return x.toString() === reversed;
};