num=5;

if(num>0){
    console.log("positive number");
    if(num<10){
        console.log("single digit positive number");
    }
    else{
        console.log("double digit positive number");
    }
}else{
    if(num>-10){
    console.log("single digit negative number");
    }
    else{
    console.log("double digit negative number");
    }

}

var n=0;
while(n<1000){
if(n%2===0){
    console.log("Even num:",n);
}
n++;
}