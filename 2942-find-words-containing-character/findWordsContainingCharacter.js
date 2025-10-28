// Method 1:
function findWordsContaining(words, x) {
  const indices = [];

  for (let i = 0; i < words.length; i++) {
    const index = words[i].indexOf(x);

    if (index !== -1) {
      indices.push(i);
    }
  }

  return indices;
}


// Method 2:
const findWordsContaining = (words, x) => {
  const indices = [];

  words.forEach((word, index) => {
    if (word.includes(x)) {
      indices.push(index);
    }
  });

  return indices;
};