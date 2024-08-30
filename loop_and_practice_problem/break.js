// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if(i >= 5){
//   break;
// }
// }

var items = ['vegetable', 'fruits', 'confectionary', 'fish']
for(var i = 0; i < items.length; i++){
  var item = items[i];
  if(item == 'confectionary'){
    break;
  }
  console.log(item); 
}

var numbers = [15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110] //this number varient use in two loops

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i]
  if(number > 100){
    break
  }
  console.log(number);
}