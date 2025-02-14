let arr1=[2,4,5,6,8,24];
let Min= Math.min(...arr1);
let Max=Math.max(...arr1);
console.log(`min:${Min},max:${Max}`);

//second method

const numbers = [50, 20, 5, 40, 15];

// Find the minimum value
const min = numbers.reduce((a, b) => (a < b ? a : b));

// Find the maximum value
const max = numbers.reduce((a, b) => (a > b ? a : b));

console.log(`Min: ${min}, Max: ${max}`);
// Output: Min: 5, Max: 50
