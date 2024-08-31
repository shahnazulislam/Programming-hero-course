var num1 = 112;
var num2 = 72;
var num3 = 100;
//else if condition use to fine largest number fined
/**if(num1 > num2){
  console.log(num1)
}else if(num2 > num3){
  console.log(num2)
}
else{
  console.log(num3)
} */

  //nexted condition using to fined largest number fined

  if(num1 > num2){
    if(num1 > num3){
      console.log(num1);
    }else{
        console.log(num3);
      }
  }else{
  if(num3 > num2){
    console.log(num3);
  } 
}