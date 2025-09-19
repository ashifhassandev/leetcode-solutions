// Method 1:
const longestCommonPrefix = (strs) => {
  let commonPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;

    while (j < commonPrefix.length && strs[i][j] === commonPrefix[j]) {
      j++;
    }

    commonPrefix = commonPrefix.substring(0, j);
  }

  return commonPrefix || "";
};