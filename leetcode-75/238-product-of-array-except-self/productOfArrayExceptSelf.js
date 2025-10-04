// Method 1 (Less efficient):
const getProduct = (arr, index) => {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      product *= arr[i];
    }
  }

  return product;
};

const findProductExceptSelf = (nums) => {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    const product = getProduct(nums, i);
    answer.push(product);
  }

  return answer;
};


// Method 2:
const productExceptSelf = (nums) => {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
};