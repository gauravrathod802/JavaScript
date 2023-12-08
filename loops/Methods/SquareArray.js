
let arr=[2,4,5,6,8];

arr.forEach((value)=>{
    console.log(value*value);
})
// console.log(arr)


// another way of passing callBackFunction

const square=(value)=>{
    console.log(value*value)
}
arr.forEach(square)         // callbackfun