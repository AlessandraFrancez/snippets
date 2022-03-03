// Write a function that determines if there are duplicates on the list of input variables

const hasDuplicates = (...arr) => {
  let counter = {};

  arr.forEach((item) => {
    counter[item] = ++counter[item] || 1;
  });

  for (const key in counter) {
    if (counter[key] > 1) return true;
  }

  return false;
};

console.log('\n Version 1');
console.log('should return false', hasDuplicates(1, 2, 3));
console.log('should return true', hasDuplicates(1, 2, 2));
console.log('should return true', hasDuplicates('a', 'b', 'c', 'a'));

const hasDuplicates2 = (...arr) => {
  return [...new Set(arr)].length !== arr.length
};

console.log('\n Version 2');
console.log('should return false', hasDuplicates2(1, 2, 3));
console.log('should return true', hasDuplicates2(1, 2, 2));
console.log('should return true', hasDuplicates2('a', 'b', 'c', 'a'));
