// DOM manipulation
//* Attributes
// 1. getAttribute(attr)      :to get the attribute value

let div=document.querySelector("div");
// console.log(div);
let pClass=document.querySelector("p");

let id=div.getAttribute("id");
let p=pClass.getAttribute("class");
let name=pClass.getAttribute("name");
console.log(id)
console.log(p);
console.log(name)

// 2. setAttribute(attr,value):to set the attribute val th
console.log(pClass.setAttribute("class","newClass"));

//* Style
// 1. node.style
console.log(div.style);
div.style.backgroundColor="yellow"
div.style.fontSize="40px";
div.innerText="hello!";


//* Insert Element
//1. node.append(el):adds at the end od node(inside)
let newButton=document.createElement("button");
let h1=document.createElement("h1")
h1.innerText="new text added!!!";
let div1=document.querySelector("div");
newButton.innerText="Submit";
div1.append(newButton);


//2.node.prepend(el):adds at the start of node(inside)
div1.prepend(newButton);
// div1.prepend(h1);


//3.node.before(el):adds before the node(outside)
div1.before(newButton);


//4.node.after(el):adds after the node(outside)
div1.after(newButton);
div1.after(h1);


//* Delete Element
// 1.node.remove(): removes the code 
div1.remove();