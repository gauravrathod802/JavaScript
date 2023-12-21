// Lexical Scope for this
// Lexical scope means what is the range of particular function or variable.

let Scope = {
    names:["gaurav","vaibhav","amol"],

    print(){
        console.log(this.names) // here this has its lexical scope defined here 

        this.names.map(function(item){
            console.warn(this.names,item)  // so here this does not have its lexical scope here so it is defining as undefined
        })

        // solution to above problem
        that=this.names
        this.names.map(function(item){
            console.warn(that,item);
        })

        // you can also use arrow function because arrow function doesnt have t own this so it points to the parent object
        this.names.map((item)=>{
            console.warn(this.names,item);
        })
    }
}

Scope.print();