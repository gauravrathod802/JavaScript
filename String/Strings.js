// String in js

let str="gaurav";  // 'gaurav'  is also allowed in js
console.log(str);
console.log(str[2]);


// Template literals in js 
// these are kind of special type of string
//syntax : `String text ${Expression} String text`
let str2=`gaurav`;
console.log(str2)

let obj={
    name:'gaurav',
    age:23
}
console.log("Name is",obj.name,"and Age is",obj.age)      // similar thing is done using template literals 
console.log(`Name is ${obj.name} and Age is ${obj.age}`)  // it is the easier way 

let SpecialString=`This is Special String ${1+2}`;
console.log(SpecialString);