console.log("First javaScript Program!!");
console.log(10+5);
//declaring variable in js compulsory to var to declare variable
// var <- variable declaration     =10 <- litral




//console.log is print() in js.

var num=10;
console.log("number is number:"+num)
var sname="gaurav";
sname="gaurav rathod"
console.log(sname);



// Difference between var, let and const
var age=20;
var age=10;  //redeclaration
console.log("var redeclared the age:",age)



let age1=20;
//let age1=10;   //this will give error that Cannot redeclare block-scoped variable 'age1' but you can reassign variables of let 
let age4;    //this is possible while using let 
age4=3;
console.log(age4);
age1=40;
console.log("let reassigned the age:",age1)


const age2=20;
// const age3; this is not possible while using const you need to assign some value to it
//age2=30;       //this will give error TypeError: Assignment to constant variable.
console.log(age2)
