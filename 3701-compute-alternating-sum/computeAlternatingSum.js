// Method 1:
function alternatingSum(nums) {
  let sum = 0;
  let i = 0;
  let j = 1;

  if (nums.length === 1) return nums[i];

  while (i < nums.length && j < nums.length) {
    sum += nums[i];
    sum -= nums[j];

    i += 2;
    j += 2;
  }

  if (i < nums.length) sum += nums[i];

  return sum;
}


// Method 2:
const alternatingSum = (nums) => {
  let sum = 0;
  let num = 1;

  for (let i = 0; i < nums.length; i++) {
    sum += num * nums[i];
    num = -num;
  }

  return sum;
};


// Method 3:
const alternatingSum = (nums) => {
  return nums.reduce(
    (sum, num, index) => sum + (index % 2 === 0 ? num : -num),
    0
  );
};