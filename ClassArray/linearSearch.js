const arr=[2,4,6,12,7,9,74,86];
const target=12;
const result=linearSearch(arr,target);
function linearSearch(){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]==target){
            return `Element index is found ${i}`
            break;
        }
    }
    return `Element index is not found ${i}`;
}

console.log(`Result:${result}`);