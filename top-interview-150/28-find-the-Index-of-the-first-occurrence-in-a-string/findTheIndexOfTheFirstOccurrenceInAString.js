// Method 1:
const strStr = (haystack, needle) => {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  }

  return -1;
};


// Method 2:
const findFirstIndex = (haystack, needle) => {
  const index = haystack.indexOf(needle);

  if (index === -1) {
    return -1;
  }

  return index;
};