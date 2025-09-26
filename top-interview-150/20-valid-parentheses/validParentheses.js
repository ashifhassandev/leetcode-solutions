// Method 1:
const isValid = (s) => {
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (const char of s) {
    if (obj[char]) {
      stack.push(char);
    } else if (stack.length === 0 || obj[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
};