// Method 1:
const removeStars = (s) => {
  const cleaned = [];

  for (const char of s) {
    if (char !== "*") {
      cleaned.push(char);
    } else {
      cleaned.pop();
    }
  }

  return cleaned.join("");
};