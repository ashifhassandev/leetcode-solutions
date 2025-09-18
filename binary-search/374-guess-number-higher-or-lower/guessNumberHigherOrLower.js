// Method 1:
/**
 * var guess = function(num) {}
 **/

const guessNumber = (n) => {
  let left = 1;
  let right = n;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const result = guess(middle);

    if (result === 0) {
      return middle;
    } else if (result === 1) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
};