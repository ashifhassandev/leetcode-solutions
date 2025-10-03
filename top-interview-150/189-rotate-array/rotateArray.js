// Method 1:
const rotate = (nums, k) => {
  k = k % nums.length;
  let count = 0;

  while (count < k) {
    const num = nums.pop();
    nums.unshift(num);
    count++;
  }

  return nums;
};


// Method 2:
const reverse = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};

const rotateArray = (nums, k) => {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
};