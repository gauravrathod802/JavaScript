function getdata(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

// callback hell:
// calling nested callback is said to be callback hell.
// for resolving the problem of callback hell promises comes into picture.

getdata(1, ()=>{
    console.log("getting data2 ...");
    getdata(2, ()=>{
        console.log("getting data3 ...");
        getdata(3, ()=>{
            console.log("getting data ...");
            getdata(4);
        });
    });
});