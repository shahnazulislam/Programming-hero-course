
  //arrey vs object
  var shoppingItem = ['books', 'sunglass', 'shose', 'pen'];
  var friendAge = [12, 45, 17, 18, 55, 60];
  var friendAge = {
    Rohim: 12,
    samad: 45,
    korim: 17,
    jamal:18,
    robi: 55,
    kazi: 60,
  }

  var shoppingCart ={
    books: 10,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shose: 2,
  }

  const keys = Object.keys(shoppingCart);
  console.log(keys);
  const value = Object.values(shoppingCart);
  console.log(value);

  for (let i = 0; i < keys.length; i++) {
    const propartyName = keys[i];
    const propartyValue = shoppingCart[propartyName];
    console.log(propartyName, ':' , propartyValue);
    
  }

  //for in loop how to work

  for (const propartyName in shoppingCart) {
      const element = shoppingCart[propartyName];
      console.log(propartyName);
     
  }
