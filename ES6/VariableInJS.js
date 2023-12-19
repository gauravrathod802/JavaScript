// this is introduced in 2022 version of ecmascript
// await Promise.resolve(console.log("Inkoop")) // Inkoop

var a=10;
{
    let a=20;
    console.warn("let has block scope",a);
}
console.warn("Var has global scope",a);

// check its difference in DatatypeIMP folder

// treaky question

for(var i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}
//in above code 10 is printed 10 times it doesn't print 0 1 2 3 ...

// solution to above code use let instead of var

for(let i=0; i<10;i++){
    setTimeout(()=>{
        console.log(i);
    }, 1000);
}