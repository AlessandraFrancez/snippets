// Given 2 strings, write a function to determine if the 2nd string is an anagram of the first

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const counter1 = {};
  const counter2 = {};

  str1.split('').forEach((item) => (counter1[item] = ++counter1[item] || 1));
  str2.split('').forEach((item) => (counter2[item] = ++counter2[item] || 1));

  for (const key in counter1) {
    if (counter1[key] !== counter2[key]) return false;
  }

  return true;
};

console.log('should be true', isAnagram('cinema', 'iceman'));
console.log(
  'should be true',
  isAnagram('aaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaa')
);
console.log('should be true', isAnagram('qwerty', 'ytrewq'));
console.log('should be false', isAnagram('banana', 'apple'));
console.log('should be false', isAnagram('monkey', 'banana'));
