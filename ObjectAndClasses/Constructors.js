class ToyotaCar{
    // javascript doesn't support constructor overloading
    constructor(){
        console.log("inside constructor");
    }
    // constructor(brand){
    //     this.brand=brand;
    //     console.log("parameterised constructor");
    // }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop")
    }
}

// const c=new ToyotaCar();
const c = new ToyotaCar("fortuner"); 
const c2 = new ToyotaCar("Lexus");
console.log(c," ",c2);
// c2.display();