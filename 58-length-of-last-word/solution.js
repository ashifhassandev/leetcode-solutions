// Method 1
const lengthOfLastWord = (s) => {
    const trimmed = s.trim();
    const array = trimmed.split(' ');
    
    for (let i = 0; i < array.length; i++) {
        return array[array.length - 1].length;
    }
};