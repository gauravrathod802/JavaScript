// when we want to get parameter we use rest operator

// when we pass the parameter we use spread operator.

let fruits=["apple","banana","kiwi"];
function printAll(...a){   //rest
    console.log(a);
}
printAll(...fruits)   //spread 



// merge two array in one array 

let otherFruits=["pineapple","custurd"];

let allFruits=[...fruits, ...otherFruits];
console.log(allFruits);

// merge two array without using third array

let otherFruits2=["grapes",...otherFruits];

console.log(otherFruits2);