// Reverse string

// O(1)
const revString1 = (str) => {
  return str.split("").reverse().join("");
};

// O(n)
const revStringN = (str) => {
  let revStr = "";
  let counter = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
    counter++;
  }
  console.log('n solution executions: ', counter);
  return revStr;
};

// O(n^2)
const revStringN2 = (str) => {
  let revStr = [];
  let counter = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    for(let j = 0; j <= str.length; j++) {
      counter++;
      if (j === str.length) {
        revStr.push(str[i]);
        break;
      }
    }
  }
  console.log('n^2 solution executions: ', counter);
  return revStr.join('');
}

// O(n * log(n))
// ??


// O (log(n))
// ??


const result = revString1("elephant");
const resultN = revStringN("elephant");
const resultN2 = revStringN2("elephant");
console.log(result, resultN, resultN2);

/**
 * Time complexity:
 * Accessing objects by key or arrays by index takes constant time
 * Arithmetic operations and assignments are constant
 * Objects: Insert, removal, access are O(1); Searching: O(n) -> Searching if a value is found on any key
 * Arrays: 
 *    Access by index O(1)
 *    Insertions/Removals at the end O(1)
 *    Insertions/Removals at the beginning O(n)
 *    Sort O(n*log(n))
 *    forEach/map/filter/reduce O(n)
 * 
 * Space complexity:
 * Most primitives take constant space
 * Strings take O(n) space where n is the length of the string
 * Same for arrays and objects (amount of keys)
 */

// Regarding space complexity

// O(1)
const sumArray = (arr) => {
  let total = 0;

  arr.forEach(item => total += item);
  return total;
}

console.log('sumArray', sumArray([1,2,3]));

// O(n)
const doubleArr = (arr) => {
  let newArr = []
  arr.forEach(item => newArr.push(item * 2));
  return newArr;
}

console.log('doubleArr', doubleArr([1,2,3]));

