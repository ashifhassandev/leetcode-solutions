// Method 1:
const intersection = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [];

  const longest = set1.size > set2.size ? set1 : set2;
  const smallest = set1.size > set2.size ? set2 : set1;

  for (const num of smallest) {
    if (longest.has(num)) result.push(num);
  }

  return result;
};