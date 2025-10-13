// Method 1:
const simplifyPath = (path) => {
  const stack = [];
  const arr = path.split(/(\/)/);

  for (let char of arr) {
    if (char === "/" && stack[stack.length - 1] !== "/") {
      stack.push(char);
    } else if (char === "..") {
      while (stack.length && stack[stack.length - 1] === "/") {
        stack.pop();
      }

      if (stack.length) stack.pop();
    } else if (char !== "." && char !== "" && char !== "/") {
      stack.push(char);
    }
  }

  if (stack[stack.length - 1] === "/") stack.pop();
  return stack.join("") || "/";
};