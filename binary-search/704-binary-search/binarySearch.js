// Method 1:
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
};


// Method 2:
const binarySearch = (nums, target, left = 0, right = nums.length - 1) => {
  if (left > right) return -1;

  const middle = Math.floor((left + right) / 2);

  if (nums[middle] === target) {
    return middle;
  } else if (nums[middle] < target) {
    return search(nums, target, middle + 1, right);
  } else {
    return search(nums, target, left, middle - 1);
  }
};