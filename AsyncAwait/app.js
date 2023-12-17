function print(){
console.log("hello");
}
setTimeout(print, 3000);  //it is a inbuilt funtion like sleep method 

// using arrow function
setTimeout(()=>{
    console.log("time out for some time");
}, 2000);