// A callback is a function passed as an argument to another function.
// Higher Order Function/Methods:
//Higher order func or higher methods in js are methods that either take another fun as parameter inside them or they return another function as their output.
// forEach is a higher order function
// syntax:
// function fun(){}
// function fun2(callbackfunction) we have to pass that above fun() to fun2() function

function abc(){
    console.log("call back function");
}

function xyz(abc){           // this is called CallBackFunction abc is CallBackFunction
    console.log(abc);
}
xyz(abc);