const student={
    name: "gaurav",
    address: "yavatmal",
    marks: 81,
    printMarks:function(){
        console.log("Marks: ",this.marks); //student.marks
    }
}
console.log(student)
arr=[10,20,30];
console.log(typeof(arr));   // the type of array is also object

const employee={
    // two ways to use function inside an object.
    calTax(){
        console('tax rate is 50%');
    },
    calTax2:function(){
        console.log("tax rate is 20%");
    }
}

const gaurav={
    salary: 50000,
};

const vaibhav={
    salary: 70000,
};

gaurav.__proto__=employee;
vaibhav.__proto__=employee;
console.log(gaurav);