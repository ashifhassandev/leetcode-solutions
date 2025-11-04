// Method 1:
function maximumWealth(accounts) {
  let richest = 0;

  for (const account of accounts) {
    let i = 0;
    let current = 0;

    while (i < account.length) {
      current += account[i];
      i++;
    }

    richest = Math.max(richest, current);
  }

  return richest;
}


// Method 2:
const maximumWealth = (accounts) => {
  let maxWealth = 0;

  for (const account of accounts) {
    const currentWealth = account.reduce((acc, curr) => acc + curr, 0);
    maxWealth = Math.max(maxWealth, currentWealth);
  }

  return maxWealth;
};