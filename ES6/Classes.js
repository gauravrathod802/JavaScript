class Cars{
    name="maruti";
    constructor(){
        console.warn("Constructor",this.name);
    }
    bolero(params){
        console.log("function call")
    }
}

let c=new Cars();
c.bolero();
console.log("Variable calling :",c.name);