function bringSingara(money){
  var singaraPrice = 10;
  var quentity = money / singaraPrice;
  return quentity;
}

var mytaka = 150;
var singaras = bringSingara(mytaka);
console.log('Eating singaras:', singaras);