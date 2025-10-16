// Method 1:
const summaryRanges = (nums) => {
  const ranges = [];

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    while (right + 1 < nums.length && nums[right + 1] === nums[right] + 1) {
      right++;
    }

    ranges.push(
      left === right ? String(nums[left]) : `${nums[left]}->${nums[right]}`
    );

    right++;
    left = right;
  }

  return ranges;
};