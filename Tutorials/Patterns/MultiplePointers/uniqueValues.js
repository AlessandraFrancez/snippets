// Write a function that accepts a sorted array and counts the unique values in the array

// Using sets - Complexity: O(n)
const uniqueValues = (arr) => {
  const unique = [...new Set(arr)];
  return unique.length;
}

console.log('\n Version 1')
console.log('should return 2', uniqueValues([1,1,1,1,1,2]));
console.log('should return 7', uniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log('should return 0', uniqueValues([]));
console.log('should return 4', uniqueValues([-2,-1,-1,0,1]));

// Using the multiple pointers pattern - Complexity: O(n)
const uniqueValues2 = (arr) => {

  if (arr.length === 0) return 0;
  
  let index = 0;
  let searcher = 1;
  let counter = 1;

  while(index < arr.length -1 ) {
    if(arr[searcher] === arr[index]) {
      searcher++;
    }

    if(arr[searcher] > arr[index]){
      counter++;
      index = searcher;
      searcher++;
    }
  }

  return counter;
}

console.log('\n Version 2')
console.log('should return 2', uniqueValues2([1,1,1,1,1,2]));
console.log('should return 7', uniqueValues2([1,2,3,4,4,4,7,7,12,12,13]));
console.log('should return 0', uniqueValues2([]));
console.log('should return 4', uniqueValues2([-2,-1,-1,0,1]));
console.log('should return 7', uniqueValues2([1,2,3,4,5,6,7]));

// Using the multiple pointers pattern - Complexity: O(n)
const uniqueValues3 = (arr) => {
  
  let i = 0;
  let counter = arr.length ? 1 : 0;

  for (let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]){
      i = j;
      counter++;
    }
  }

  return counter;
}

console.log('\n Version 3')
console.log('should return 2', uniqueValues3([1,1,1,1,1,2]));
console.log('should return 7', uniqueValues3([1,2,3,4,4,4,7,7,12,12,13]));
console.log('should return 0', uniqueValues3([]));
console.log('should return 4', uniqueValues3([-2,-1,-1,0,1]));
console.log('should return 7', uniqueValues3([1,2,3,4,5,6,7,7,7]));