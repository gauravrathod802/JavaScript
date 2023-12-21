class Category{
    dryFruits(){
        return "almonds"
    }
}


class Fruits extends Category{
    constructor(){
        super();
        console.warn("constructor");
    }
    getFruits(){
        return "you got apple";
    }
}
let f1=new Fruits();
console.warn(f1.getFruits());
console.log(f1.dryFruits());