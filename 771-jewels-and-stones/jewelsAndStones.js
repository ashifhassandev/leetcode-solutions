// Method 1:
function numJewelsInStones(jewels, stones) {
  let count = 0;

  for (const stone of stones) {
    if (jewels.includes(stone)) {
      count++;
    }
  }

  return count;
}


// Method 2:
const numJewelsInStones = (jewels, stones) => {
  return stones
    .split("")
    .reduce((count, curr) => (jewels.includes(curr) ? count + 1 : count), 0);
};