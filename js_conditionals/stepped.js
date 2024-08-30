const price = 4000;

if(price >= 5000){
  // 10% discount
  const disPrice = price * 10 / 100;
  const payAmount = price - disPrice;
  console.log(payAmount);
}else if(price > 2500){
  //5% discount
  const disPrice = price * 5 / 100; 
  const payAmount = price - disPrice;
console.log(payAmount);
}else{
  console.log('must you have been payment full');
}