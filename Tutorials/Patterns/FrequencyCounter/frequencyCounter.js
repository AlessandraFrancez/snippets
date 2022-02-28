// Write a function that takes in a string and returns the frequency of each character

/**
 * Assumptions:
 * - Only the characters that appear on the string need to be returned
 * - Case-insensitive
 * - Only alphanumeric characters
 */

const frequencyCounter = (str = '') => {
  const arr = str.replace(/[^a-z0-9]/g, '').toLowerCase().split('');
  const frequency = {}
  arr.forEach(letter => {
    // frequency[letter] = frequency[letter] ? frequency[letter] + 1 : 1;
    frequency[letter] = ++frequency[letter] || 1;
  })

  return frequency;
}

console.log(frequencyCounter('@@helloh world'));
