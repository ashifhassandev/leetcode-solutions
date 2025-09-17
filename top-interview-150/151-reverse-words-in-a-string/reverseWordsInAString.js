// Method 1:
const reverseWords = (s) => {
  const cleaned = s.replace(/\s+/g, " ").trim();
  return cleaned.split(" ").reverse().join(" ");
};


// Method 2:
const reverseTheWords = (s) => s.trim().split(/\s+/).reverse().join(" ");


// Method 3:
const reverse = (s) => {
  const cleaned = s.replace(/\s+/g, " ").trim();
  const sArray = cleaned.split(" ");

  let left = 0;
  let right = sArray.length - 1;

  while (left < right) {
    [sArray[left], sArray[right]] = [sArray[right], sArray[left]];
    left++;
    right--;
  }

  return sArray.join(" ");
};