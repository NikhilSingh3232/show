/*Write a JavaScript function processArray(arr) that takes an array of numbers as input and performs the following tasks:

Use sort() to sort the array in ascending order.
Use reverse() to reverse the sorted array.
Use Math.max() to find the maximum value in the array.
Use Math.min() to find the minimum value in the array.
Use the concept of creating a sorted copy of the array (tosorted()).
*/

function processArray(arr) {
    console.log("Original array:", arr);
  
    arr.sort((a, b) => a - b);
    console.log("Sorted array in ascending order:", arr);
  
    const reversedArray = [...arr].reverse();
    console.log("Reversed sorted array:", reversedArray);
  
    const maxValue = Math.max(...arr);
    console.log("Maximum value in the array:", maxValue);
  
    const minValue = Math.min(...arr);
    console.log("Minimum value in the array:", minValue);
  
    const sortedCopy = [...arr];
    console.log("Sorted copy of the original array:", sortedCopy);
  
    return {
        originalArray: arr,
        sortedArray: arr,
        reversedArray: reversedArray,
        maxValue: maxValue,
        minValue: minValue,
        sortedCopy: sortedCopy
    };
  }
  
  const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  console.log(processArray(arr));
