// Write a function that determines if 2 integers have the same frequency of digits

const sameFrequency = (a, b) => {
  let counter1 = {};
  let counter2 = {}

  a.toString().split('').forEach(item => counter1[item] = ++counter1[item] || 1);
  b.toString().split('').forEach(item => counter2[item] = ++counter2[item] || 1);

  for (const key in counter1) {
    if(counter1[key] !== counter2[key]) return false;
  }

  return true;
}


console.log('\n Version 1');
console.log('should return true', sameFrequency(182,281));
console.log('should return false',  sameFrequency(34,14));
console.log('should return true', sameFrequency(3589578,5879385));
console.log('should return false',  sameFrequency(22,222));