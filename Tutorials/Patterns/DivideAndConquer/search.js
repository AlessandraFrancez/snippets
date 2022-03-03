// Given a *sorted* array of integers, write a function that returns the index of an item

// Naive approach - Complexity: O(n)
const search = (arr, item) => arr.indexOf(item);

console.log('\n Version 1');
console.log('should return 3', search([1, 2, 3, 4, 5, 6], 4));
console.log('should return 5', search([1, 2, 3, 4, 5, 6], 6));
console.log('should return -1', search([1, 2, 3, 4, 5, 6], -1));

// Using the divide and conquer pattern - Complexity: O(log(n))
const search2 = (arr, item) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    let curr = arr[middle];

    if (curr < item) {
      min = middle + 1;
    } else if (curr > item) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

console.log('\n Version 2');
console.log('should return 3', search2([1, 2, 3, 4, 5, 6], 4));
console.log('should return 5', search2([1, 2, 3, 4, 5, 6], 6));
console.log('should return -1', search2([1, 2, 3, 4, 5, 6], -1));
