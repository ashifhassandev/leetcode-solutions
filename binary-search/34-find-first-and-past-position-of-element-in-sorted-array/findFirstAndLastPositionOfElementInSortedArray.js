// Method 1:
const findFirstPosition = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let first = -1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] >= target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }

    if (nums[middle] === target) first = middle;
  }

  return first;
};

const findLastPosition = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let last = -1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] <= target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }

    if (nums[middle] === target) last = middle;
  }

  return last;
};

const searchRange = (nums, target) => {
  return [findFirstPosition(nums, target), findLastPosition(nums, target)];
};