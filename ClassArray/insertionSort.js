const arr=[19,30,20,45,18,7];
const n=arr.length;

function insertionSort(arr,n){
    let key,j;
    for(let i=0;i<n;i++){
        key=arr[i];
        j=i-1;
       while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j];
        j--;
       }
    arr[j+1]=key;
    }
    return arr;
}

const resultArr=insertionSort(arr,n);
console.log(`result:${resultArr}`);

// TimeComplexity : O(n^2)// wrost case 
// best Case:O(n)