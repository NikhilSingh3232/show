// Filter=>filter out content from an array based on some Condition;
// not modified Original Array
// return new array;


// first method
const arr=[2,3,4,5,6,7,67];
// even number 
function even (num){
    return num%2==0;
}
const filterArray=arr.filter(even);
console.log(filterArray);

// second Method
const filterArray1=arr.filter(function even1(num1){
    return num1%2==0;
});
console.log(filterArray1);

// third method

const even3=arr.filter(num=>num%2==0);
console.log(even3);

// metod fourth
function filterEvenNumbers(numbers) { 
	return numbers.filter(num=>num%2==0);

}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers));

// fifth Method
const Users=[
    {
        firstName:"Nikhil",
        marks:56,
        section:"c"
    },
    {
        firstName:"Ranveer",
        marks:65,
        section:"c"
    },
    {
        firstName:"Nikhil",
        marks:7,
        section:"c"
    }
];
console.log(Users.filter(user=>user.marks>50));
