// Method 1:
const longestConsecutive = (nums) => {
  const sorted = nums.sort((a, b) => a - b);

  let maxLength = 0;
  let count = 1;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] === sorted[i]) continue;

    if (sorted[i + 1] === sorted[i] + 1) {
      count++;
    } else {
      maxLength = Math.max(maxLength, count);
      count = 1;
    }
  }

  return maxLength;
};


// Method 2:
const getLongestConsecutive = (nums) => {
  const unique = new Set(nums);
  let maxLength = 0;

  for (const num of unique) {
    if (!unique.has(num - 1)) {
      let current = num;
      let count = 1;

      while (unique.has(current + 1)) {
        current++;
        count++;
      }

      maxLength = Math.max(maxLength, count);
    }
  }

  return maxLength;
};