function factorials(numbers) {
  let result = 1;
  let num = 1;
  while (num <= 7) {
    result = result * num;
    num++;
  }
  return result;
}
fact = factorials(7);
console.log( fact);