// Method 1:
const minOperations = (nums, k) => {
  let sum = nums.reduce((sum, curr) => sum + curr, 0);
  let operations = 0;

  while (sum % k !== 0) {
    sum -= 1;
    operations++;
  }

  return operations;
};