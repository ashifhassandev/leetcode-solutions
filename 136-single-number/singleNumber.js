// Method 1 (Less efficient):
const singleNumber = (nums) => {
  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    let found = false;
    let j = 0;

    while (j < nums.length) {
      if (i !== j && nums[i] === nums[j]) {
        found = true;
        break;
      }

      j++;
    }

    if (!found) return nums[i];
  }
};


// Method 2:
const findSingleNumber = (nums) => {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      seen.delete(num);
    } else {
      seen.add(num);
    }
  }

  return [...seen][0];
};


// Method 3:
const getSingleNumber = (nums) => {
  let unique = 0;

  for (let num of nums) {
    unique ^= num;
  }

  return unique;
};