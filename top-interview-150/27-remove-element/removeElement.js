// Method 1:
const removeElement = (nums, val) => {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums.length;
};


// Method 2:
const removeElements = (nums, val) => {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[i] === val && nums[j] !== val) {
      nums[i++] = nums[j--];
    } else if (nums[i] === val && nums[j] === val) {
      j--;
    } else {
      i++;
    }
  }

  return i;
};


// Method 3:
const removeArrayElement = (nums, val) => {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};