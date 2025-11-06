// Method 1:
function countConsistentStrings(allowed, words) {
  let count = 0;

  for (const str of words) {
    let i = 0;
    let consistent = true;

    while (i < str.length) {
      if (!allowed.includes(str[i])) {
        consistent = false;
        break;
      }

      i++;
    }

    if (consistent) count++;
  }

  return count;
}


// Method 2:
const countConsistentStrings = (allowed, words) => {
  return words.filter((word) =>
    [...word].every((char) => allowed.includes(char))
  ).length;
};