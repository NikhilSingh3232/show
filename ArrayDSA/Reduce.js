const arr=[1,2,3,4,5]
console.log(arr.reduce((acc , cur)=>acc+cur,10));

const numbers=[1,2,3,4,5];
const[first,second,...rest]=numbers;
console.log(first,second,rest);

var x=5;
(function(){
    var X=10;
    console.log(X)
})();
console.log(x)

const arr1=["apple","banana","orange"];
for(const fruit of arr1){
    console.log(fruit);
}