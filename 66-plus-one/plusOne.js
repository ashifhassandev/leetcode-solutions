// Method 1:
const plusOne = (digits) => {
  const num = BigInt(digits.join("")) + 1n;
  return num
    .toString()
    .split("")
    .map((num) => Number(num));
};


// Method 2:
const addOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};