// destructuring is done using index of array.

let fruits=["banana", "kiwi", "apple"];

let [f1,f2,f3,f4="unknown fruit"] = fruits;
console.log(f1,f2,f3,f4);

// how to skip value using destructuring 

let [fruit1,,fruit3]=fruits;
console.log(fruit1,fruit3);


// destructuring with rest operator

let[...fruit]=fruits;
console.log(fruit);