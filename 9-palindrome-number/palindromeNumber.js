// Method 1: With converting integer to string
const checkPalindrome = (x) => {
  const reversed = x.toString().split("").reverse().join("");
  return x.toString() === reversed;
};


// Method 2:
const isNumberPalindrome = (x) => {
  const arr = x.toString().split("");

  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    if (arr[i++] !== arr[j--]) return false;
  }

  return true;
};


// Method 3: Without converting integer to string
const isPalindrome = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversedHalf = 0;
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};