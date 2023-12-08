
let nums=[2,3,4,5];
nums.map((value)=>{
    console.log(value*value);
})

// we can return new array using map method 
let newArr=nums.map((value)=>{
    return value;
})
console.log(newArr);




// the main difference between forEach and map is:
// forEach basically used for normal iteration work
// map is used for when we want generate the new array map is used 