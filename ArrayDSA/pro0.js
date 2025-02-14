/*Write a JavaScript function manageNumbers(numbers) that takes an array of numbers (numbers) as input and performs the following tasks:

Convert to String: Convert the array of numbers into a comma-separated string using toString().
Join Strings: Join all elements in the array into a single string separated by a hyphen - using join().*/

function foo(numbers){
    console.log("InitalNumber",numbers);
    // convert String
    function ConverString(){
        console.log("ConvertTostring",numbers.toString());
    }
    // join 
    function JoinStrin(){
        console.log("joinString",numbers.join("-"));
    }
    // call
    ConverString();
    JoinStrin();
}
const numbers=[1,2,3,4,5,6];
foo(numbers);
