let marks=[70,78,90,99,89];
let sum=0;
for(let val of marks){
    sum=sum+val;
}
let average=sum/marks.length;
console.log(`Average marks is = ${average}`);