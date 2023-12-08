function discount(cartAmount){
    var discount=100;
    cartAmount-=discount;
    return cartAmount;
}

console.log(discount(2000));

function applyDiscount(cartAmount, discount) {
    cartAmount -= discount;
    return cartAmount;
   }
   
   console.log(applyDiscount(1000, 100));




   var x = function(){
    return 4*4;
};
console.log(typeof(x))



//method
var author = {
    name: "Alan Moore",
    books: function() {
        console.log("Alan Moore is famous for his illustrated novels.");
    }
}
author.books();






var match = {
    team1: "Manchester City",
    team2: "Liverpool",
    winner: function() {
        alert("Manchester City beats Liverpool by 5-0");
    }
}

match.winner();




var x =35;
if (x > 34) {
   console.log('Greater than 34');
   console.log('Positive');
} else {
   console.log('Less than or equal to 34');
}
var x = 35;
if (x > 34) {
   console.log('Greater than 34');
   console.log('Positive');
} else {
   console.log('Less than or equal to 34');
   console.log('Positive');
}

var n = 2;
for (var i = n; i < 12; i = i + n) {
  console.log(i);
}


var input=prompt("Enter your name:");
console.log(input);















