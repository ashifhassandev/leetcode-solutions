// Method 1:
const isHappy = (n) => {
  const unique = [];

  while (n !== 1) {
    if (unique.includes(n)) return false;
    unique.push(n);

    const digits = String(n).split("");
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
      sum += digits[i] * digits[i];
    }

    n = sum;
  }

  return true;
};


// Method 2:
const isHappyNumber = (n) => {
  const seen = new Set();

  while (n !== 1) {
    if (seen.has(n)) return false;
    seen.add(n);

    n = String(n)
      .split("")
      .reduce((sum, digit) => sum + digit * digit, 0);
  }

  return true;
};