// Write a function that determines whether the first param is a substring of the second one. Order matters

// Assumptions: there's only one chance the word is hidden the whole sentence - possibly not relevant

const isSubsequence = (part, whole) => {
  let left = whole.indexOf(part[0]) + 1;
  let index = 1;

  if (left === 0 || left > whole.length) {
    return false;
  }

  while (left < whole.length) {
    if (whole[left] === part[index]) {
      index++;
      left++;
    } else {
      left++;
    }
  }

  return index === part.length;
};

console.log('\n Version 1')
console.log('should return true', isSubsequence('hello', 'hello world'));
console.log('should return true', isSubsequence('sing', 'sting'));
console.log('should return true', isSubsequence('abc', 'abacadabra'));
console.log('should return false', isSubsequence('abc', 'acb'));
console.log('should return true', isSubsequence('hello', 'hellsdsdf world  hello'));