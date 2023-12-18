const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector(".fact");
const getFact = document.querySelector("#btn");

// Using async await
const getFacts = async ()=>{
    console.log("getting data ...");
    let response = await fetch(URL);
    console.log(response); //JSON format 

    let data = await response.json();
    // console.log(data[0].text);
    factPara.innerText = data[0].text; 
};

//getFact.addEventListener("click", getFacts);




// similar thing using Promise chaining but complex to understand
function getFactUsingPromiseChaining(){
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[2].text;
    })
}
getFact.addEventListener("click", getFactUsingPromiseChaining)