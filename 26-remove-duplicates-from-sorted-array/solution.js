// Method 1
const removeDuplicates = (nums) => {
    let k = 1;

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};