// Method 1:
function getSneakyNumbers(nums) {
  const freq = {};
  const duplicates = [];

  for (const num of nums) {
    if (!freq[num]) {
      freq[num] = true;
    } else {
      duplicates.push(num);
    }

    if (duplicates.length === 2) return duplicates;
  }

  return duplicates;
}


// Method 2:
const getSneakyNumbers = (nums) => {
  const freqMap = new Map();
  const duplicates = [];

  for (const num of nums) {
    if (!freqMap.has(num)) {
      freqMap.set(num, true);
    } else {
      duplicates.push(num);
    }

    if (duplicates.length >= 2) return duplicates;
  }

  return duplicates;
};


// Method 3:
const getSneakyNumbers = (nums) => {
  const set = new Set();
  const duplicates = [];

  for (const num of nums) {
    !set.has(num) ? set.add(num) : duplicates.push(num);
    if (duplicates.length === 2) return duplicates;
  }

  return duplicates;
};