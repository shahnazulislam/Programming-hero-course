const sections   = document.querySelectorAll('section');
// console.log(sections);

for(const section of sections){
    section.style.border ='5px solid tomato';
    section.style.borderRadius = '15px';
    section.style.marginBottom = '5px';
    section.style.padding = '5px';
    section.style.background ='lightgrey';
}

const headers = document.querySelectorAll('header');
for(const header of headers){
    header.style.border = '2px solid black';
    header.style.borderRadius = '15px';
    header.style.marginBottom = '7px';
    header.style.padding = '10px';
    header.style.background = 'red';
    header.style.color= 'white';
}