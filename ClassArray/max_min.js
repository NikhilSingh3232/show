const a=[2,5,3,6,9];
let max=a[0];
let min=a[0];

for(let i=1; i<a.length;i++){
    if(a[i]>max){
        max=a[i];
    }
    if(a[i]<min){
        min=a[i];
    }
}
console.log("Maximum value" , max);
console.log(`minimum value ${min}`);