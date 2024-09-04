function factorialRivers(numbers) {
  let result = 1;
  for (let i = numbers; i >= 1 ; i--) {
     result = result * i;
    console.log(i);
  }
  return result;
}
const numbers = 6;
const fact = factorialRivers(numbers);
console.log(numbers, fact);
