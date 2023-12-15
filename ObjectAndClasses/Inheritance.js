class Parent{
    constructor(){
        console.log("enter parent constructor")
        this.species="human";
        console.log("exit parent constructor")
    }
    hello(){
        console.log("hello");
    }
    eat(){
        console.log("Eat");
    }
}
class child extends Parent{
    constructor(branch){
        console.log("enter child constructor")
        super();           //you need to use super keyword if you have parent class constructor
        this.branch=branch;
        console.log("exit child constructor")
    }
    hello(){
        super.eat();
        console.log("method overriding");
    }
    programmer(){
        console.log("new feature");
    }
}

const childObj=new child();
console.log(childObj.programmer);
console.log(childObj.hello());  //calls the child class function