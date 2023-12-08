// functions with no parameter
function myFunction(){
    console.log("hello from myFunction()");
}
myFunction();

// functions with two parameter
function sum(a,b){
    return a+b;
}
const add=sum(10,45);
console.log(add);



// Modern JS function: arrow function
//1. arrow fun with no parameter
const msg=()=>{
    console.log("Arrow function")
}
msg();


//2. arrow fun with parameter
const mul=(x,y)=>{
    // console.log(x*y);
    return x*y;
}
console.log(mul(10,20));  //here we are passing values to the const variable as it is parameterised