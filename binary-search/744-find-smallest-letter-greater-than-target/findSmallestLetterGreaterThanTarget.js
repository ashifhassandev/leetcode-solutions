// Method 1:
const nextGreatestLetter = (letters, target) => {
  for (const char of letters) {
    if (char > target) return char;
  }

  return letters[0];
};


// Method 2:
const nextGreatest = (letters, target) => {
  const set = new Set(letters);

  for (const char of set) {
    if (char > target) return char;
  }

  return letters[0];
};


// Method 3:
const nextGreatestThanTheTarget = (letters, target) => {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (letters[middle] <= target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return letters[left % letters.length];
};