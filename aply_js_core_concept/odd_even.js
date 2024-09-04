function isEven(number) {
  const remainder = number % 2;

  if (remainder === 0) {
    return 'This is even number';
  }else{
    return 'This is odd number';
  }
}


const myNumber = 153;
const  checkRemainder = isEven(myNumber);
console.log('This number is:', checkRemainder);