// Method 1:
function numIdenticalPairs(nums) {
  let pairCount = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) pairCount++;
    }
  }

  return pairCount;
}


// Method 2:
const numIdenticalPairs = (nums) => {
  const freq = {};
  let pairCount = 0;

  for (const num of nums) {
    if (freq[num]) {
      pairCount += freq[num];
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }

  return pairCount;
};


// Method 3:
const numIdenticalPairs = (nums) => {
  const freqMap = new Map();
  let pairCount = 0;

  for (const num of nums) {
    if (freqMap.has(num)) {
      pairCount += freqMap.get(num);
      freqMap.set(num, freqMap.get(num) + 1);
    } else {
      freqMap.set(num, 1);
    }
  }

  return pairCount;
};