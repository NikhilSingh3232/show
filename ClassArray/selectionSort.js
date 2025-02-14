const arr = [76, 67, 56, 62, 70];
const n = arr.length;
let temp;

function selectionSort(arr, n) {
    for (let i = 0; i < n; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {  // Inner loop starts at i+1
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        // Swap the found minimum element with arr[i]
        temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }
}

selectionSort(arr, n);
console.log(arr);
