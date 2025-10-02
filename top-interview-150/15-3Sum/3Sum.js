// Method 1:
const threeSum = (nums) => {
  const triplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    while (j < nums.length - 1) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        j++;
        continue;
      }

      let k = j + 1;
      while (k < nums.length) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          k++;
          continue;
        }

        if (nums[i] + nums[j] + nums[k] === 0) {
          triplets.push([nums[i], nums[j], nums[k]]);
        }

        k++;
      }

      j++;
    }
  }

  return triplets;
};


// Method 2:
const getThreeSum = (nums) => {
  const triplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
};