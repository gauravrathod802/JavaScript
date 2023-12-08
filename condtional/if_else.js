
var x=401;

if(x > 300 || x < 400) {
    console.log("I am in the if-block!");
 } else {
    console.log("I am in the else-block!");
 }

 console.log('2-2' == '2-2');

 //ternary operator
 var y = 10;
console.log(y % 2 === 0 ? "Even" : "Odd");
//or
 
var y= 10;
y % 2 === 0 ? console.log("Even") : console.log("Odd");

var city = "New Delhi";
console.log(city==='New Delhi' ? 'Capital of India' : 'Not a capital of India');



//nested if else

var num1=100,num2=90,num3=20;
if(num1>num2){
    if(num1>num3){
        console.log("num1 is greater");
    }else{
        console.log("num3 is greater");
    }
}else {
    if(num2>num3){
        console.log("num2 is greater");
    }
    else{
        console.log("num3 is greater");
    }
}




//switch case

/* 
You have to code a country code checker which checks which country does the given number belongs to

The options are as follows:
91 - India
55 - Brazil
81 - Japan
30 - Greece
47 - Norway
If a number does not belong from any country, then print "Other Country"
The number needs to be input as "CC-XXXXX-XXXXX" (CC being country code)
*/

var cc="55-99999-99999";
var con=parseInt(cc);
switch(con){
case 91:
    console.log("India");
    break;
case 55:
    console.log("Brazil");
    break;
case 81:
    console.log("Japan");
    break;
case 30:
    console.log("Greece");
    break;
case 47:
    console.log("Norway");
    break;
default:
    console.log("Other Country"); 
}