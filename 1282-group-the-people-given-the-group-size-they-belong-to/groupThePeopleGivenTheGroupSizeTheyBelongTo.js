// Method 1:
const groupThePeople = (groupSizes) => {
  const groupsMap = new Map();
  const groups = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];

    if (!groupsMap.has(size)) groupsMap.set(size, []);
    groupsMap.get(size).push(i);

    if (groupsMap.get(size).length === size) {
      groups.push(groupsMap.get(size));
      groupsMap.set(size, []);
    }
  }

  return groups;
};