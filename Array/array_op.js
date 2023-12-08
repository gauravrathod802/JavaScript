/*var carNames = ['Honda','Ferrari','Porsche','Fiat'];

// Remove Fiat from the end of the array and then print the array carNames

// Add Mazda to the end of the array and then print the array carNames

// Remove Honda from the beginning of the array and then print the array carNames

// Add Ford to the beginning of the array and then print the array carNames
carNames.pop();
console.log(carNames);

carNames.push('Mazda');
console.log(carNames);

carNames.shift();
console.log(carNames);

carNames.unshift('Ford');
console.log(carNames);



//object in js

var book={
    title:"intro to ai",
    price:400,
    pages:1000
};
console.log(book);

//Accessing Keys of Objects

Dot Notation:
book.name
or
book.author

Bracket Notation:
book['name']
or
book[''author'']

var book1 = {

    title: "The Lord of the Rings",
    pages: 9250,
    "is-available": true
};

console.log(book1.title);
//console.log(book1[title]);

var music = {
    rock: 'guitar',
    classical: 'violin'
  };
  var classical = 'rock';
  var sound = music[classical];
  console.log(sound);
 

//for in loop

//syntax FOR for in loop:for(var key in objectName){}
// Instead of key you can write anything 

for(var key in music){
    console.log(key +"="+ music[key]);
}
*/

var itemsToBuy = {
    milk: {
        quantity : 5,
        price: 20
    },
    bread: {
        quantity : 2,
        price: 15
    },
    potato: {
        quantity : 3,
        price: 10
    }
}
itemsToBuy.bread;
// Print the array consisting of the names of the items here

// Print the array consisting of the prices of the items here
/*for(var k in itemsToBuy){
    //for(var k in itemsToBuy){

//console.log("["+ k+","+"]" +itemsToBuy[k])
//console.log(itemsToBuy[1].price);
}*/
//console.log([k]);

for(var keys in itemsToBuy){
console.log(Object.keys(itemsToBuy));

}
console.log(Object.keys(itemsToBuy));

console.log([itemsToBuy.milk.price,itemsToBuy.bread.price,itemsToBuy.potato.price])



  //console.log(k +""+ itemsToBuy[k]);  






  var person = {
    id: 101,
    email: 'alice11@gmail.com',
    personalInfo: {
        name: 'Alice',
        address: {
            locality: 'Smith Avenue',
        }
    }
}
console.log(person["personalInfo"]["name"]);


console.log(person["personalInfo"].name)


console.log(person.personalInfo.name)


console.log(person.personalInfo["name"])



// Update the value of the keys testKey1 and 'test-key2' to newValue1 and newValue2 respectively
var testObject = {
    testKey1 : 'testValue1',
    'test-Key2' : 'testValue2'
  };
  
  // Change the values here
  testObject.testKey1='newValue1';
  testObject['test-Key2']='newValue2';
  // Print testObject here
  console.log(testObject)
  






















