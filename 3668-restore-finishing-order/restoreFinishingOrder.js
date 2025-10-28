// Method 1:
function recoverOrder(order, friends) {
  const idArray = [];

  for (const num of order) {
    if (friends.includes(num)) {
      idArray.push(num);
    }
  }

  return idArray;
}


// Method 2:
const recoverOrder = (order, friends) =>
  order.filter((num) => friends.includes(num));