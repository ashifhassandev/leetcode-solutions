const addBinary = (a, b) => {
  const num1 = BigInt("0b" + a);
  const num2 = BigInt("0b" + b);

  return (num1 + num2).toString(2);
};