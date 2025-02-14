const arr=[2,4,5,8];// higher order function
 const SquarArray=arr.map(function square(x){
    return x*x;
 });
 console.log(SquarArray);

 // second Method

 let arr1=[3,4,5,6];// normal Function
 function Square(y){
    return y*y;
 }
 console.log(arr1.map(Square));

 // third Method // Arrow functon
 const arr3=[3,4,6,8,9];
 const Doubble=(arr3.map(z=>2*z));
 console.log(Doubble);

 // fourth Method
 const users=[
    {
        firstName:"Nikhil",
        lastName :"singh",
        Age:20
    },
    {
        firstName:"Ranveer",
        lastName :"singh",
        Age:40
    },
    {
        firstName:"Rahul",
        lastName :"singh",
        Age:50
    }
 ];
 // print only first Name user;
 const newArray=users.map(user=>user.firstName);
 console.log(newArray);
