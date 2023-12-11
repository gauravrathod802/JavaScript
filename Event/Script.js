let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");

// Event
/*
btn1.onclick=()=>{
    console.log("btn1 was clicked!!!");
}

btn2.ondblclick=()=>{
    console.log("btn2 was double clicked!!!");
}

let div=document.querySelector("div");

div.onmouseenter=()=>{
    console.log("mouse entered into box")
}
*/


// eventListener
// syntax: addEventListener(event, callback)

btn1.addEventListener("click", (evt)=>{
    console.log("button1 was clicked - handler1");
    // console.log(evt);
});

btn1.addEventListener("click",()=>{
    console.log("Button1 was Clicked - handler2");
});

let handler3=()=>{
    console.log("Button1 was Clicked - handler3");
};
btn1.addEventListener("click",handler3);

btn1.removeEventListener("click",handler3);
