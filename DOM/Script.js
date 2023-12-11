document.write("hello")
//window.alert("hello")
//alert("hii");  //alert is part of window object

console.log(window.document);
console.dir(window.document);  //to print object we use dir and it is a part of window object

console.log(document.body);
console.dir(document.body.children[1].innerText="Element changed using innerText");



// DOM Manipulation
//1. selecting with id
let heading=document.getElementById("header");
console.dir(heading);

//2. selecting with class
let doc=document.getElementsByClassName("heading2")
console.dir(doc)

//3. selecting with tagName
let para=document.getElementsByTagName("p");
console.log(para)

//* Query Selector
// A.select first element of any tag, class or id
let firstElement=document.querySelector("p");
console.log(firstElement);
document.querySelector(".heading2") // class is accessed like this
document.querySelector("#header")  // id is accessed like this 

// B.select  all element of any tag, class or id
let allElement=document.querySelectorAll("p");
console.log(allElement)



//* Properties of DOM manipulation
// 1.tagName: returns tag for element nodes
let div=document.querySelector("div")

// 2.innerText: returns the text content of the element and all its children
console.log(div.innerText);
// dynamically changing the html element using js
// console.log(div.innerText="hello");

// 3.innerHTML: returns the plain text or HTML contents in the element
console.log(div.innerHTML);
// console.log(div.innerHTML="<div>Hello</div>")
// 4.textContent: returns textual content even for hidden elements