// function getSumOfAnArrey(numbers){
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const index = [i];
//     const element =  numbers[index];
//     sum = sum + element;
//     console.log(index, element, sum);
    
//   }
//   return sum;
// }


// //Sum odd number in a arrey
// function sumOddNumberInArrey(numbers) {
//   const oddNumber =[];
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     if (element % 2 === 1) {
//       console.log(index, element);
//       oddNumber.push(element);
//     }
//   }
//   return oddNumber;
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91]; 
// const oddNumber = sumOddNumberInArrey(myNumbers);
// const oddNumbersSum = getSumOfAnArrey(oddNumber);
// console.log('Odd number sum', oddNumbersSum);  



function getSumOfAnArrey(numbers) {
  result = 0;
  for(let i = 0; i <numbers.lenth; i++){
    const index = i;
    const element = numbers(index);
    result = result + element;
  }
  return result;
}

var myNumbers = [12, 14, 16, 18, 20];
console.log(index, element, result)