//print total marks of Student with marks greter than 60 after 20 marks has been  Added to those scored less tha 60

const Student=[
    {Name:"Nikhil",Marks:96,RollNumber:8},
    {Name:"Ranveer",Marks:80,RollNumber:3},
    {Name:"Rohan",Marks:40,RollNumber:4},
    {Name:"Shubhanshu",Marks:25,RollNumber:6},
    {Name:"Loard",Marks:50,RollNumber:7}
];
// update Marks
const updateMarks=Student.map(Student=>{
    if(Student.Marks<60){
        Student.Marks+=20;
    }
    return Student;
});
console.log(updateMarks);

//more than 60
const passed=Student.filter(Student=>Student.Marks>60);
console.log(passed);

// total Marks
const totalMarks=Student.reduce(function(acc , curr){
    acc+=curr.Marks;
    return acc;
},0)
console.log(totalMarks);