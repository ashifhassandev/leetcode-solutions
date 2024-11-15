// Method 1
const strStr = (haystack, needle) => {
    const index = haystack.indexOf(needle);

    if (index === -1) {
        return -1;
    }

    return index;
};