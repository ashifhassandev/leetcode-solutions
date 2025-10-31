// Method 1:
function getSneakyNumbers(nums) {
  const seen = {};
  const duplicates = [];

  for (const num of nums) {
    if (!seen[num]) {
      seen[num] = true;
    } else {
      duplicates.push(num);
    }

    if (duplicates.length === 2) return duplicates;
  }

  return duplicates;
}


// Method 2:
const getSneakyNumbers = (nums) => {
  const seen = new Map();
  const duplicates = [];

  for (const num of nums) {
    if (!seen.has(num)) {
      seen.set(num, true);
    } else {
      duplicates.push(num);
    }

    if (duplicates.length === 2) return duplicates;
  }

  return duplicates;
};


// Method 3:
const getSneakyNumbers = (nums) => {
  const seen = new Set();
  const duplicates = [];

  for (const num of nums) {
    !seen.has(num) ? seen.add(num) : duplicates.push(num);
    if (duplicates.length === 2) return duplicates;
  }

  return duplicates;
};