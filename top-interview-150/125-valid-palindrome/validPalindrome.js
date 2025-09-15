// Method 1:
const isPalindrome = (s) => {
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleaned.toLowerCase().split("").reverse().join("");

  return cleaned === reversed ? true : false;
};


// Method 2:
const checkPalindrome = (s) => {
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }

  return true;
};