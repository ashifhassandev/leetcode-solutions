// Method 1
const lengthOfLastWord = (s) => s.trim().split(" ").pop().length;


// Method 2:
const getLengthOfLastWord = (s) => {
  s = s.trimEnd();
  return s.length - 1 - s.lastIndexOf(" ");
};


//Method 3:
const findLengthOfLastWord = (s) => {
  s = s.trimEnd();
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") return count;
    count++;
  }

  return count;
};