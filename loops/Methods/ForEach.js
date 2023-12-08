// forEach is used for array only we cannot use it for string 
//forEach is a higher order function 

let arr=[1,2,3,4,5];

// forEach using normal function
arr.forEach(function printValue(value){
    console.log(value);
});


let strArray=["gaurav","vikas","ram"];
strArray.forEach((value, index, arr)=>{
    console.log(value.toUpperCase(), index, arr);
});