const age = 50;
const price = 500;
if(age <= 12){
  console.log('We will provide free foods');
}else if(age >= 60){
 // 50% discount foods
 const discount = price * 50 / 100;
 const payAmount = price - discount;
  console.log(payAmount);
}else if(age >= 50){
  const discount = price * 40 / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}else if(age >= 40){
  const discount = price * 30 / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}else if(age >= 30){
  const discount = price * 20 / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}else{
  console.log(price);
}
