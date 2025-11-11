// Method 1:
function defangIPaddr(address) {
  let defanged = "";

  for (const char of address) {
    if (char === ".") {
      defanged += "[.]";
    } else {
      defanged += char;
    }
  }

  return defanged;
}


// Method 2:
const defangIPaddr = (address) => address.replaceAll(".", "[.]");