/*
function add(){
    return 10+20;
}
console.log(add())

function add2(a,b){
    return a+b;
}
console.log(add2(10,30));
*/

// Default parameter

// passing default values
function sub(a,b=10,c){
    return a+b+c;
}
console.log(sub(40,undefined,20)); //here b will have its default value 10.  // but good practise is to put your default value variable at last.


// passing function as default parameter

function someVal(){
    return "hello";
}
function add(a,b="middle",c=someVal()){
    return a+" "+b+" "+c;
}
console.warn(add("hi","new value")); //here middle is overidden by new value string




function main(a,b=main()){
    return a+b;
}
main(); // will go in infinite loop recursion