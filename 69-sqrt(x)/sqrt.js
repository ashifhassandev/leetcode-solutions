// Method 1
const mySqrt = (x) => Math.floor(Math.sqrt(x));


// Method 2:
const findSqrt = (x) => {
  if (x < 2) return x;

  let left = 1;
  let right = Math.floor(x / 2);
  let nearest = 0;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const sq = middle * middle;

    if (sq === x) return middle;

    if (sq < x) {
      nearest = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return nearest;
};