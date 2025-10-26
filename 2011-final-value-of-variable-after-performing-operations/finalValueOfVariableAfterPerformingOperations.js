// Method 1:
function finalValueAfterOperations(operations) {
  let x = 0;

  for (let operation of operations) {
    if (operation === "++X" || operation === "X++") {
      x++;
    } else {
      x--;
    }
  }

  return x;
}


// Method 2:
const finalValueAfterOperations = (operations) => {
  let x = 0;

  for (let operation of operations) {
    x += operation.includes("++") ? 1 : -1;
  }

  return x;
};


//Method 3:
const finalValueAfterOperations = (operations) => {
  let x = 0;

  for (let operation of operations) {
    switch (operation) {
      case "++X":
      case "X++":
        x++;
        break;
      case "--X":
      case "X--":
        x--;
        break;
    }
  }

  return x;
};