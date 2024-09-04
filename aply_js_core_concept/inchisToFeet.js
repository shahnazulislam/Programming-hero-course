// const myInches =12;
// const myFeet = myInches/12;
// console.log(myFeet);

// const dadaInches = 144;
// const dadaFeet = dadaInches/12;

// console.log('Dada feet:', dadaFeet); 

function inchesToFeet(inches) {
  const feet = inches/12;
  return feet;
}


const dadaInches = 144;
const dadaFeet = inchesToFeet(dadaInches);
console.log(dadaFeet);


//miles to kilomiter

function milesToKilomiter(kilomiter) {
  const toMiles = kilomiter/1.61;
  return toMiles;
}
const schoolKilometar = 100;
const totalDistance = milesToKilomiter(schoolKilometar);
console.log('School distance:', totalDistance);



function PisToHali(pis) {
  const hali = pis / 4;
  return hali;
}

const banana = 124;
const tatalHali = PisToHali(banana);
console.log('Banana Calculete:', tatalHali);


function picToDorjon(pis) {
  const dorjon = pis / 12;
  return dorjon;

}

let brash = 120;
let toDorjon = picToDorjon(brash);
console.log('Dorjon Calculate:', toDorjon);