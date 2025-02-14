// every

// check

function checkAge(age){
    if(age>18){
        console.log("people are adult");
    }
    else{
        console.log("people are not adult");
    }
}
checkAge(13)
// every
const arr=[58,23,45,67,89];
const result=arr.every(age=>age>=18);
console.log(result);

// some
const minnor=arr.some(age=>age<=18);
console.log(minnor);
