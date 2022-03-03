// Write a function that accepts an array of pos integers and a positive integer. Return the minimum length required to match the number. If there isn't one, return 0

// Using the sliding window pattern - Complexity: O(n)
const minSubArrayLen = (arr, target) => {
  let sum = 0;
  let start = 0;
  let end = 0;
  let record = Infinity;

  while (start < arr.length) {
    if (sum < target && end < arr.length) {
      sum += arr[end];
      end++;
    } else if (sum >= target) {
      record = Math.min(record, end - start);
      sum -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return record === Infinity ? 0 : record;
};

console.log('\n Version 1');
console.log('should return 2', minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log('should return 2', minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(
  'should return 1',
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)
);
console.log(
  'should return 3',
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)
);
console.log(
  'should return 5',
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)
);
console.log('should return 2', minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(
  'should return 0',
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)
);
