// Write a function that receives a sorted array of integers and a target average and return whether the array contains a pair that matches the target average

// Time complexity: O(n)  Space complexity: O(1)
const averagePair = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  target = target * 2

  while(left < right) {
    let sum = arr[left] + arr[right]
    if (sum > target) {
      right--;
    } else if( sum < target) {
      left++;
    } else {
      return true;
    }
  }

  return false;
}

console.log('\n Version 2')
console.log('should return true', averagePair([1,2,3],2.5));
console.log('should return true', averagePair([1,3,3,5,6,7,10,12,19],8));
console.log('should return false', averagePair([-1,0,3,4,5,6],4.1));
console.log('should return false', averagePair([], 4));