// Method 1:
const minimumOperations = (nums) => {
  let count = 0;

  for (let num of nums) {
    if (num % 3 !== 0) count++;
  }

  return count;
};