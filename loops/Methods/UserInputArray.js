let n=prompt("Enter a number: ");

let arr=[];

for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

// sum of array element
let sum=arr.reduce((pre,cur)=>{
    return pre+cur;
});
console.log("Sum of array element: ",sum);


// factorial of number
let mul=arr.reduce((pre,cur)=>{
    return pre*cur;
});
console.log("Factorial of given number: ", mul);