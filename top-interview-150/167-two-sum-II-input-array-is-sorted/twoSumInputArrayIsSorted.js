// Method 1:
const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};


// Method 2:
const twoSumSortedArray = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (map.has(difference)) {
      return [map.get(difference) + 1, i + 1];
    }

    map.set(nums[i], i);
  }
};