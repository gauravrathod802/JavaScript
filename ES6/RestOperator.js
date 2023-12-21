// Rest operator must be the last parameter of argument
// Rest operator takes the values in array.

function fruits(a,...z){
    console.warn("fruits",a,z);
}

fruits("apple","banana","kiwi","orange","papaya")