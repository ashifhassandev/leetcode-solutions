// Method 1:
const groupAnagrams = (strs) => {
  const grouped = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(str);
  }

  return [...grouped.values()];
};