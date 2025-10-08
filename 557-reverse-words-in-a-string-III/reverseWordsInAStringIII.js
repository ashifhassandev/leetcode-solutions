// Method 1:
const reverse = (s) =>
  s
    .split(" ")
    .map((str) => str.split("").reverse().join(""))
    .join(" ");


// Method 2:
const reverseWords = (s) => {
  const arr = s.split("");

  let start = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (i === arr.length || arr[i] === " ") {
      let left = start;
      let right = i - 1;

      while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }

      start = i + 1;
    }
  }

  return arr.join("");
};