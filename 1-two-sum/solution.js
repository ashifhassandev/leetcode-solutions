// First Method: less than 0(n2) time complexity
const twoSum = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if (map.has(difference)) {
            return [map.get(difference), i];
        }

        map.set(nums[i], i);
    }
};


// Second Method: 0(n2) time complexity
const findTwoSum = (nums, target) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};