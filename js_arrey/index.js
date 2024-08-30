var numbers = [10, 12, 14, 16, 18, 20]

//gate elament by index
var elament = numbers[1];
console.log(elament)
numbers[1] = 77;
numbers[3] = 45;
numbers[4] = 68;

console.log(numbers);

var positionIndex = numbers.indexOf(20);
console.log(positionIndex);