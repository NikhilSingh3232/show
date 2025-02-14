const arr = [1, 1, 1, 0, 0, 0, 0];

function countArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (arr[mid] == 0) {
            end = mid - 1;
        } else if (arr[mid] == 1 && arr[mid + 1] == 1) {
            start = mid + 1;
        } else if (arr[mid] == 1 && (arr[mid + 1] == 0 || mid == arr.length - 1)) {
            return mid + 1;
        }
    }
    return -1;
}

const result = countArray(arr);

(result === -1) 
    ? console.log("There are no 1s in the array") 
    : console.log(`There are ${result} 1s in the array`);
