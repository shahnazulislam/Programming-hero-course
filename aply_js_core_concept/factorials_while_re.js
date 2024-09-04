function factorialRivers(numbers) {
  let num = numbers;
  let result = 1;
  while (num >= 1) {
    result = result * numbers;
    num --;
  }
  return result;
}

const output = factorialRivers(5);
console.log(output);

function print(a, b, c){
  // return a+2;
   //return a*b;
   return b*c+a;
}
console.log(print(1,2,3));