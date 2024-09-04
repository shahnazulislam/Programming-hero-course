function factorials(numbers) {

 let result = 1;
  for (let i = 1; i <= numbers; i++) {
    result = result * i;
  }
return result;

}
const result = factorials(7);
console.log(result);