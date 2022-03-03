// Write a function that accepts an array of integers and a number n. Return the maximum sum of consecutive n numbers in the array

// Naive approach - Complexity: O(n^2)
const maxSubSum = (arr, n) => {
  let max = 0;

  for (let i = 0; i <= arr.length - n; i++) {
    const localMax = arr.slice(i, i + n).reduce((a, b) => a + b);
    if (localMax > max) max = localMax;
  }

  return max;
};

console.log('\n Version 1');
console.log('should return 10', maxSubSum([1, 2, 5, 2, 8, 1, 5], 2));
console.log('should return 17', maxSubSum([1, 2, 5, 2, 8, 1, 5], 4));
console.log('should return 6', maxSubSum([4, 2, 1, 6], 1));
console.log('should return 13', maxSubSum([4, 2, 1, 6, 2], 4));
console.log('should return 0', maxSubSum([], 4));

// Using the sliding window pattern - Complexity: O(n)
const maxSubSum2 = (arr, n) => {
  if (arr.length < n) return null;

  let max = -Infinity;
  let current = 0;

  for (let i = 0; i < arr.length; i++) {
    current += arr[i];
    if (i - n >= 0) current -= arr[i - n];
    if (current > max) max = current;
  }

  return max;
};

console.log('\n Version 2');
console.log('should return 10', maxSubSum2([1, 2, 5, 2, 8, 1, 5], 2));
console.log('should return 17', maxSubSum2([1, 2, 5, 2, 8, 1, 5], 4));
console.log('should return 6', maxSubSum2([4, 2, 1, 6], 1));
console.log('should return 13', maxSubSum2([4, 2, 1, 6, 2], 4));
console.log('should return null', maxSubSum2([], 4));

console.log('should return 700', maxSubSum2([100, 200, 300, 400], 2));
console.log('should return 39', maxSubSum2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log('should return 5', maxSubSum2([-3, 4, 0, -2, 6, -1], 2));
console.log('should return 5', maxSubSum2([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log('should return null', maxSubSum2([2, 3], 3));
