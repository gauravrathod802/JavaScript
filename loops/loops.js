//for loop
/* 
for(let i=0;i<=5;i++){
    console.log(i);
}
//console.log(i)  // this will give error because i is decalred using let so let has block scope so it cannot be accessed outside that block 



console.log(i)                   //here i is undefined because var i is loaded in memory and its datatype is undefined 
for(var i=0;i<=5;i++){
    console.log(i)
}
console.log("value of i is ",i)  // i can be accessed outside because var has global scope 

*/


//for of loop: It is used to iterate over array and string

/*let str="gaurav"
for(let i of str){
    console.log(i);
}*/

//for in loop: It is used to iterate over objects,arrays in js 

let students={
    name : "gaurav",
    roll_no: 20,
    age: 23,
    isPassed: true 
}
for( let val in students){
    console.log("It will give keys:",val, "It will give values:",students[val])
}