let a = undefined;
// setTimeout(()=>{
//     a="hello ecma";
// },3000);

// alert(a);

let promiseData = new Promise((resolved, reject)=>{
    setTimeout(()=>{
        a="hello ecma";
        resolved("done");
    },3000);
})

promiseData.then(()=>{
    alert(a);
})