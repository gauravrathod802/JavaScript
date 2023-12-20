// normal function 
function hello(){
    return 1;
}

let test=function(){
    return 1;
}


// arrow function

let test2=()=>{
    return 1;
}
// console.warn(test2());
// console.warn(test());
// console.warn(hello());

// ex:2

let data=[10,40,30,89,50];
// using normal function
// if you are using normal function you need to use return 
let newData=data.map(
    function(item){
        return item*2;
    }
)

// using arrow function
// while using map or any looping you dont require to use return 
let newData2=data.map((item)=>item*2);

console.warn(newData);
console.warn(newData2);



// imp about arrow function :
// arrow function doesnt have its this so it calls parent class object.
// here in below example it will call to window object.
// ex:

let item={
    name:"gaurav",
    getName:function(){
        console.log("normal",this);
    },

    getNameArrow:()=>{
        console.log("Arrow",this)
    }
}

item.getName();
item.getNameArrow();