// find method:
// It will find the first starting from index 0 which is less than or anything that is given condition.

let data=[10,20,8,50,1,100];
let result=data.find(function(item){
    return item<50;
})

console.log(result);

// findIndex
function custom(item){
    return item<8 ;
}
let data1=[10,20,8,50,1,100];
let result1=data1.findIndex(custom);

console.log(result1);


// using above methods on array of object 

let data3=[
    {id:10, name:"a"},
    {id:8, name:"b"},
    {id:50, name:"c"},
    {id:1, name:"d"},
    {id:100, name:"e"},
]
function custom2(item){
    return item.id>50;
} 

let result3=data3.find(custom2);
console.warn(result3);