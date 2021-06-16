// Parte 1

// object literals

// let user = {
//    name: 'crystal',
//    age: 30,
//    email: 'eletricafabio@gmail.com',
//    location: 'Salvador/BA',
//    blog: ['Estou aprendendo Js com os Net Ninjas', 'E vou ficar fera!']
// };

// console.log(user);
// console.log(user.name);

// // user.age = 35;
// console.log(user.age);

// const key = 'location';

// console.log(user['location']);

// console.log(user['email']);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);

// Parte 2

/* object literals

// const blogs = [
//    { title: 'Estou aprendendo Js com os Net Ninjas', likes: 30 },
//    { title: 'E vou ficar fera!', likes: 50 }
// ];

// console.log(blogs);

let user = {
   name: 'crystal',
   age: 30,
   email: 'eletricafabio@gmail.com',
   location: 'Salvador/BA',
   blogs: [
      { title: 'Estou aprendendo Js com os Net Ninjas', likes: 30 },
      { title: 'E vou ficar fera!', likes: 50 }
   ],
   // login: function(){
      login(){
      console.log('o usuário está logado');
   },
   // logout: function(){
      logout(){
      console.log('o usuário não está logado');
   },
   // logBlogs: function(){
      logBlogs(){
      // this.blogs
      // console.log(this);
      // console.log(this.blogs);
      console.log('this user has written the fallowing blogs: ');
      this.blogs.forEach(blog => {
         console.log(blog.title, blog.likes);
      })
   }
};

// user.login();
// user.logout();

// const name = 'mario';
// name.toUpperCase();

user.logBlogs();
// console.log(this); */

// Parte 3

// Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

// Parte 4

// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

// userOne.age = 40;
// userOne.age = 40;
userOne.name = 'chun-li';
console.log(userOne, userTwo);

