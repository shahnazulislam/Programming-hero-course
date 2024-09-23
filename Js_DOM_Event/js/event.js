// Option: 1 inner html using

// option: 2 make onclick event
function bgred(){
    document.body.style.backgroundColor = 'red';
}
// option: 3
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.onclick = greenbutton;
function greenbutton(){
    document.body.style.backgroundColor='green';
}

// option: 3 another [we will use this some time]
const makeButtonPurple = document.getElementById('make-purple');
makeButtonPurple.onclick = function purpleButton(){
    document.body.style.backgroundColor = 'purple';
}
// option: 4  [most of case we will use it]

const makeblueButton = document.getElementById('make-blue');
makeblueButton.addEventListener('click', blueButton)
function blueButton(){
    document.body.style.backgroundColor = 'blue';
}
// option: 4 another [we will use this alwys]

document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
})