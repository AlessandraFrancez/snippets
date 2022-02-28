// Write a function that accepts 2 arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values should be the same

// Solution without the frequency constraint - Complexity: O(n^2)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((item) => arr2.indexOf(Math.pow(item, 2)) !== -1);
};

console.log('should be true', same([1, 2, 3], [4, 9, 1]));
console.log('should be false', same([1, 2, 3], [4, 5, 6]));
console.log('should be false', same([1, 2, 1], [4, 4, 1]));

// Solution with frequency constraint - Complexity: O(n^2)
const same2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const counter1 = {};
  const counter2 = {};

  const match = arr1.every((item) => {
    counter1[item] = ++counter1[item] || 1;
    return arr2.indexOf(Math.pow(item, 2)) !== -1;
  });

  if (match) {
    arr2.forEach(
      (item) => (counter2[Math.sqrt(item)] = ++counter2[Math.sqrt(item)] || 1)
    );

    const keys = Object.keys(counter1);

    return keys.every((item) => counter1[item] === counter2[item]);
  }

  return false;
};

console.log('\nSame2 ***********');
console.log('should be true', same2([1, 2, 3], [4, 9, 1]));
console.log('should be false', same2([1, 2, 3], [4, 5, 6]));
console.log('should be false', same2([1, 2, 1], [4, 4, 1]));
console.log(
  'should be true',
  same2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [100, 81, 64, 49, 36, 25, 16, 9, 4, 1])
);

// Sligthly better solution - Complexity: O(n^2)
const same3 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(Math.pow(arr1[i], 2));
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }

  return true;
};

console.log('\nSame3 ***********');
console.log('should be true', same3([1, 2, 3], [4, 9, 1]));
console.log('should be false', same3([1, 2, 3], [4, 5, 6]));
console.log('should be false', same3([1, 2, 1], [4, 4, 1]));
console.log(
  'should be true',
  same2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [100, 81, 64, 49, 36, 25, 16, 9, 4, 1])
);

// Solution using the "frequency counter" pattern - Complexity: O(n)
const same4 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const counter1 = {};
  const counter2 = {};

  arr1.forEach((item) => {
    counter1[item] = ++counter1[item] || 1;
  });

  arr2.forEach((item) => {
    counter2[item] = ++counter2[item] || 1;
  });

  for (let item in counter1) {
    if (counter1[item] !== counter2[item ** 2]) return false;
  }
  return true;
};

console.log('\nSame4 ***********');
console.log('should be true', same4([1, 2, 3], [4, 9, 1]));
console.log('should be false', same4([1, 2, 3], [4, 5, 6]));
console.log('should be false', same4([1, 2, 1], [4, 4, 1]));
console.log(
  'should be true',
  same2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [100, 81, 64, 49, 36, 25, 16, 9, 4, 1])
);
