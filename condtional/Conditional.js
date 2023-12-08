var num="1234";
var sum=0,d;

while(num > 0){

    d=num%10;
    sum=sum+d;
    num=parseInt(num/10);

}
console.log(sum);

/*
var num1 = prompt("Enter a number:");
num1 = parseInt(num1);
var sum1 = 0, n = num1;
while (n > 0) {
   sum1 += (n % 10);
   n = Math.floor(n / 10);
}
console.log("Sum of the digits of " + num1 + " = " + sum1);*/


// Use while loop to print all multiples of 7 between 1 and 100 (both inclusive)
var num2=1;
while(num2<100){
    if(num2%7==0){
        console.log(num2);
    }
    num2=num2+1;
}



//for loop
//product of 10 natural numbers
// Use for loop to print the product of numbers from 1 to 10 (both inclusive)
var num=10;
var pro=1;
for(var i=1;i<=num;i++){
    pro=pro*i;
}
console.log(pro);


// Write a program to print all the numbers divisible by 2 or 3 or 6 from 1 to n, where n can be any custom value
var num=14;
for(var i=1;i<14;i++){
    if(i%2==0 || i%3==0 || i%6==0){
        console.log(i);
    }
}


for (i = 1 ; i < 10 ; i++) {
    console.log(i);
    if (i % 3 === 0) {
        break;
    }
}





