// ex-1
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("whether data");
            resolve(200);
        },2000);
    });
}
async function getWeatherData(){
    await api();  //1st call
    await api();  //2nd call
    await api();  //3rd call
}

// ex-2
function getdata(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}
// Async-await
async function getAllData(){
    console.log("getting data1...")
    await getdata(1);
    console.log("getting data2...")

    await getdata(2);
    console.log("getting data3...")

    await getdata(3);
    console.log("getting data4...")

    await getdata(4);
}