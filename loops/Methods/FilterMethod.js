
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr)
arr.filter((value)=>{
    console.log(value);
})

let evenArr=arr.filter((value)=>{
    return value%2==0;
})
console.log(evenArr);


let oddArr=arr.filter((value)=>{
    return value%2!==0;
})
console.log(oddArr);


