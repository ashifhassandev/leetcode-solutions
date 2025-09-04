// Method 1:
const findUniqueOccurrences = (arr) => {
  const freqMap = new Map();

  for (const num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const seen = new Set();

  for (const freq of freqMap.values()) {
    if (seen.has(freq)) return false;
    seen.add(freq);
  }

  return true;
};


// Method 2:
const uniqueOccurrences = (arr) => {
  const freqMap = new Map();

  for (const num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const values = [...freqMap.values()];

  return new Set(values).size === values.length;
};


// Method 3:
const getUniqueOccurrences = (arr) => {
  const freqObj = {};

  for (const num of arr) {
    freqObj[num] = (freqObj[num] || 0) + 1;
  }

  const values = Object.values(freqObj);

  return new Set(values).size === values.length;
};


// Method 4:
const checkUniqueOccurrences = (arr) => {
  arr.sort((a, b) => a - b);

  const counts = [];
  let count = 1;

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      counts.push(count);
      count = 1;
    }
  }

  return new Set(counts).size === counts.length;
};