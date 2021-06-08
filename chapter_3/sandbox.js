// Parte 1

/* for loops

// for(let i = 0; i < 5; i++){
//    console.log('dentro do loop', i);
// }

// console.log('Fim do loop');

const names = [ 'shaun', 'mario', 'luigi' ];

    for(let i = 0; i < names.length; i++){
        //console.log(i);
        //console.log(names[i]);
        let html = `<div>${names[i]}</div>`;
        console.log(html);
}*/

// Parte 2

/* while loops
const names = [ 'shaun', 'mario', 'luigi' ];
// let i = 0;

// while(i < 5){
    // console.log('dentro do loop', i);
    // i++

let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}*/

/* do while loops

let i = 3;

do{
    console.log('o valor de i é: ', i);
    i++;
} while(i < 5); */

// Parte 3

// if statements
// const age = 25;

// if(age > 20){
   // console.log('você te mais de 20 anos de idade')
// }

// const ninjas = [ 'shaun', 'ryu', 'mario', 'luigi', 'chaun-li' ];

// if(ninjas.length > 4){
   // console.log("São todos ninjas");
// }

// const password = 'p@ssword';

// if(password.length >= 12){
   // console.log('A senha é muito forte!');
// } else if(password.length >= 8){
   // console.log('A senha é longa o suficiente!');
// } else {
   // console.log('A senha não é longa o suficiente.')
// }

// logical operators - OR || and AND &&

// const password = 'p@ssword';

// if(password.length >= 12 && password.includes('@')){
  // console.log('A senha é muito forte!');
// } else if(password.length >= 8 || password.includes('@') && password.length > 5){
    // console.log('A senha é longa o suficiente!');
// } else {
    // console.log('A senha não é longa o suficiente.')
// }

// logical NOT (!)

// let user = false;

// if(!user){
   // console.log('Você precisa estar logado para continuar');
// }

// console.log(!true);
// console.log(!false);

// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

   // if(scores[i] === 0){
       // continue;
   // }

   // console.log('seu score: ', scores[i]);

   // if(scores[i] === 100){
       // console.log('parabéns, você obteve o score máximo!');
        // break;
    // }

// }

// switch statements
// const grade = 'G';

// switch(grade){
    // case 'A':
       // console.log('você obteve A!');
    // case 'B':
       // console.log('você obteve B!');
    // case 'C':
       // console.log('você obteve C!');
    // case 'D':
       // console.log('você obteve D!'); 
    // case 'E':
       // console.log('você obteve E!');
    // case 'F':
       // console.log('você obteve F!');
       // break;
    // default:
       // console.log('não é um grade válido');
// }

//using if statements
// if(grade === 'A'){

// } else if(grade === 'B'){

// } else if(grade === 'C'){
    
// } else if(grade === 'D'){
    
// } else if(grade === 'E'){
    
// } else {

// }

/* variables & block scope
const age = 30;

if(true){
    const age = 40;
    const name = 'shaun';
    console.log('inside 1st code block: ', age, name);

    if(true){
        const age = 50;
        console.log('inside 2nd code block', age);
        var test = 'hello';
    }
}

console.log('outside code block: ', age, name, test); */