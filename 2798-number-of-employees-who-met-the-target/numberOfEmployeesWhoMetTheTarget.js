// Method 1:
function numberOfEmployeesWhoMetTarget(hours, target) {
  let count = 0;

  for (const hour of hours) {
    if (hour >= target) count++;
  }

  return count;
}


// Method 2:
const numberOfEmployeesWhoMetTarget = (hours, target) => {
  return hours.filter((hour) => hour >= target).length;
};