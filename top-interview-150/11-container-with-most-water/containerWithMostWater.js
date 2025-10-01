// Method 1:
const getHeight = (h, l) => h * l;

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const currentArea = getHeight(minHeight, right - left);
    maxArea = Math.max(maxArea, currentArea);

    height[left] < height[right] ? left++ : right--;
  }

  return maxArea;
};