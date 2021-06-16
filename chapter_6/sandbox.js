// Parte 1

// The DOM

// const para = document.querySelector('.error');

// console.log(para);

// const para = document.querySelector('div.error');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// paras.forEach(para => {
//    console.log(para);
// });

// console.log(paras[2]);

// console.log(errors);

// Parte 2

// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);


// get elements by therir tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);


// Parte 3

// const para = document.querySelector('p');

// // console.log(para.innerText);
// // para.innerText = 'Somos Ninjas!';

// const paras = document.querySelectorAll('p');

// // paras.forEach(para => {
// //    console.log(para.innerText);
// //    para.innerText += ' novo texto ';
// // });

// const content = document.querySelector('.content');

// // console.log(content.innerHTML);
// // content.innerHTML += '<h2> Este é um novo texto H2</h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//    content.innerHTML += `<p>${person}</p>`;
// });


// Parte 4

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'TheNet Ninja Website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'sucess');
// mssg.setAttribute('style', 'color: green;');


// Parte 5

// const title = document.querySelector('h1');

// // // title.setAttribute('style', 'margin: 50px;');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';

// Parte 6

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');


// Parte 7

const paras = document.querySelectorAll('p');

paras.forEach(p => {
   // console.log(p.textContent);
   if(p.textContent.includes('error')){
      p.classList.add('error');
   }
   if(p.innerText.includes('success')){
      p.classList.add('success');
   }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');