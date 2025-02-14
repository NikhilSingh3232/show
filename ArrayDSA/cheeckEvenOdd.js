const n=(number)=>(number%2==0 ? "Even" : "Odd");
console.log(n(10));
console.log(n(7));

function a(number){
    return number % 2==0;
}
console.log(a(7))//False
console.log(a(10))//True

function CheeckEvenOdd(Number){
    if(Number%2==0){
        console.log(Number+ " Even");
    }
    else{
        console.log(Number+ " Odd");
    }
}

CheeckEvenOdd(10);
CheeckEvenOdd(7);