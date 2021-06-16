// Parte 1

/* function declaration

function greet(){
   console.log('Oi olá')
}

// function expression

const speak = function(){
   console.log('Bom dia!');
};

// greet();
// greet();
// greet();

// speak();
// speak();
// speak(); */

// Parte 2

// arguments & parameters

// const speak = function(name, time){
  // console.log(`Bom ${time} ${name}!`);
// };

// speak('mario', 'dia');

// returning values

// const speak = function(name = 'luigi', time = 'noite'){
  // console.log(`Bom ${time} ${name}!`);
// };

// speak();
// speak('mario');

// const calcArea = function(radius){
//    let area = 3.14 * radius**2;
//    return area;
// }

// const area = calcArea(5);
// console.log(area);

// mais limpo ainda

// const calcArea = function(radius){
//    return 3.14 * radius**2;
// }

// const area = calcArea(5);
// console.log(area);

// Parte 3

// arrow function

// const calcArea = radius => 3.14 * radius**2;


// const area = calcArea(5);
// console.log('a área é:', area);

// Parte 4

// practise arrow functions

// const greet = function(){
//    return 'olá, mundo';
// }

// const greet = () => 'olá, mundo!';
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//    let total = 0;
//    for(let i = 0; i < products.length; i++){
//       total += products[i] + products[i] * tax;
//    }

//    return total;
// }

// const bill = (products, tax) => {
//    let total = 0;
//    for(let i = 0; i < products.length; i++){
//       total += products[i] + products[i] * tax;
//    }
//    return total;
// };

// console.log(bill([10,15,30], 0.2))

// Parte 5

// const name = 'shaun'

// // functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// Parte 6

// callbacks & foreach

// const myFunc = (callbackFunc) => {
//    // do somenthing
//    let value = 50;
//    callbackFunc(value);
// };

// myFunc(function(value){
//    // do somenthing
//    console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach((person, index) => {
//    console.log(index, person);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//    console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

// Parte 7

// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
   // creat html template
   html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;