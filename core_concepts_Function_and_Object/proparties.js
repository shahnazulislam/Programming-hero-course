var shoppingCart = {
  Books: 3,
  sunglass: 1, 
  keyboard: 5,
  mouse: 1,
  pen: 25,
}


//use dot notetion when you know object variable  name
var penCount = shoppingCart.pen;
console.log(shoppingCart);

//when you know keys or proparties name then you called that
var penCount2 = shoppingCart['pen'];
console.log(penCount2);

var proparties = Object.keys(shoppingCart);
var propartyValue = Object.values(shoppingCart)
console.log(proparties);
console.log(propartyValue);


//set proparty value in js

// shoppingCart.mouse = 10;
// console.log(shoppingCart);

// shoppingCart['mouse'] = 15;
// console.log(shoppingCart);

// shoppingCart[propartyName] = 18;
// console.log(shoppingCart);

