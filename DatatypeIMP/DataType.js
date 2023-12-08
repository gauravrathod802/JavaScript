//Primitive data type in js: String, boolean, NUmber, NUll, Undefined
//Non :Array, Object, Regx


//contatination

var x="gaurav " + "rathod";
console.log(x.length);
console.log(x);


//coercions 
var a="abc";
var b=4;
var c=a+b;
console.log(c);
console.log(c.length); //.length is used to calculate the length.
console.log("type coercion:",0 == '0');

//number

var a="10";
var b="20";
var mul=a*b;
var sub=a-b;
var add=a/b;


var v="20";
var f="2a";
var fv=v-f;
console.log(mul, sub, add);

//If the result is false, the expression or literal is a valid number.
console.log(isNaN(fv)); //Not a number(naN)



//boolean 
console.log("Boolean");
console.log(20>10);
console.log(true || false);
console.log(false && true);
console.log(true=="true");
console.log(1==false);




//null
//In js you can define null to null is a datatype in js

var n=null
console.log(n);


//undefined

var u;
console.log(u)



//data type conversion

var s=10;        //number
s = s.toString(); //String
console.log(s);
console.log(Number("10.242"));


//difference bet parseInt and Number
console.log(parseInt("11.21a")); //11
console.log(Number("11.21a")); //NaN

console.log(parseFloat("11.09"));





//To know which datatype is 
var a1="Hello";
var a2=5;
var a3=true;
var a4=null;
var a5;
var a6=2.9;
console.log(typeof (''));

//strict equality operator.===
//It returns true only when both the data type as well as the values are equal. 

console.log(0 ==='0');

console.log(typeof a1, typeof a2, typeof a3,typeof a4,typeof a5,typeof a6);



