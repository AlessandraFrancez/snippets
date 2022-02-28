// Write a function that receives a sorted array of integers and returns the first pair that sums 0

// Naive approach - Complexity: O(n^2)
const sumZero = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[arr.length - 1] < Math.abs(arr[i])) {
      continue;
    }

    for (let j = arr.length -1 ; j > i; j--) {   
      if (arr[j] < Math.abs(arr[i])){
        break;
      }   
      if (arr[j] === Math.abs(arr[i])){
        return [arr[i], arr[j]];
      }
    }
  }

  return [];
}

console.log('should return a pair', sumZero([-3,-2,-1,0,1,2,3,4,5,6]));
console.log('should return a pair', sumZero([-3,-2,-1,0,1,2]));
console.log('should return empty', sumZero([-2,0,1,3]));
console.log('should return empty', sumZero([1,2,3]));

// Using the multiple pointers pattern - Complexity: O(n)
const sumZero2 = (arr) => {

  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }

    sum > 0 ? right-- : left++;
  }

  return [];
}

console.log('\n Version 2')
console.log('should return a pair', sumZero2([-3,-2,-1,0,1,2,3,4,5,6]));
console.log('should return a pair', sumZero2([-3,-2,-1,0,1,2]));
console.log('should return empty', sumZero2([-2,0,1,3]));
console.log('should return empty', sumZero2([1,2,3]));