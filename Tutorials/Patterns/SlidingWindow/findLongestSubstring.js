// Write a function that returns the length of the longest substring with all distinct characters
const debug = false;
const findLongestSubstring = (str) => {
  let count = 0;
  let record = 0;
  let start = 0;

  let letters = {};

  while (start < str.length) {
    if (debug) console.log(str[start], start, letters[str[start]], record);
    if (letters[str[start]]) {
      record = Math.max(record, count);
      count = 0;
    } else {
      count++;
      letters[str[start]] = true;
    }
    start++;
  }

  return record;
}

// console.log('should return 0', findLongestSubstring(''));
console.log('should return 7', findLongestSubstring('rithmschool'));
console.log('should return 6', findLongestSubstring('thisisawesome'));
console.log('should return 7', findLongestSubstring('thecatinthehat'));
console.log('should return 1', findLongestSubstring('bbbbbb'));
console.log('should return 8', findLongestSubstring('longestsubstring'));
console.log('should return 6', findLongestSubstring('thisishowwedoit'));

