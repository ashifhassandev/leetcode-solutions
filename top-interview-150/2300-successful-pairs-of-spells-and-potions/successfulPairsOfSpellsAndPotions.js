// Method 1:
const getSuccessfulPairs = (spells, potions, success) => {
  const pairs = [];

  for (let i = 0; i < spells.length; i++) {
    const num = spells[i];
    let count = 0;

    let j = 0;
    while (j < potions.length) {
      if (num * potions[j] >= success) count++;
      j++;
    }

    pairs.push(count);
  }

  return pairs;
};


// Method 2:
const successfulPairs = (spells, potions, success) => {
  const pairs = [];
  const sorted = [...potions].sort((a, b) => a - b);

  for (const spell of spells) {
    let left = 0;
    let right = sorted.length - 1;
    let smallestIndex = sorted.length;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      if (spell * sorted[middle] >= success) {
        smallestIndex = middle;
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }

    pairs.push(sorted.length - smallestIndex);
  }

  return pairs;
};