// read notes from pdf 

let arr=[1,2,3,4,5,6,7,8,9];

let sum=arr.reduce((preResult,curr)=>{
    return preResult+curr;
});
console.log(sum);



// Largest of array using reduce method

const max=arr.reduce((pre,cur)=>{
    return pre>cur?pre:cur;
})
console.log(max);

const min=arr.reduce((pre,cur)=>{
    return pre<cur?pre:cur;
})
console.log(min);