"use strict";

// npm run dev
//    VARIÁVEIS    //
//const & let //nao usar var pq pra usa-la precisa deixar tudo dentro do mesmo nivel de escopo {}
// const car = 'fusca' //const é para leitura, nao da para reeditar
// let car = "let" //o let deixa reatribuir/reeditar o valor da variavel
// car = "bh20";
//console.log(car)
// const person = {
//     name: "young",
//     age: 20
// }
// person.name = "oliver"
// console.log(person);
//let: quando tiver que reeatribuir valor a variavel
//var nao usar, pq ela é executada/vazada fora do escopo
//        Operações em array      // 
//Array ou vetor de numeros
//const numbers = [1, 2, 3, 4, 5]
//        FOR EACH      //
// numbers.forEach(function(number, index) {
//     // console.log(number, index)
//     numbers[index] = number + 1
// }) //vai contra a mutabilidade pq ele modifica o array original
// console.log(numbers)
//        MAP      //
// const newNumbers = numbers.map(function(number) {
//         return number + 1
//     })
// console.log(newNumbers)
// console.log(numbers)
//         REDUCE      //
// const total = numbers.reduce(function(total, next) {
//     return total + next
// })
// console.log(total)
//Array ou vetor de itens/objetos
// const todos = [
//     { text: "lavar louca", done: false },
//     { text: "lavar roupa", done: true },
//     { text: "lavar quintal", done: true },
// ]
//       FILTER      // 
// const doneTodos = todos.filter(function(todo) {
//     return todo.done === true //filtra os que tem algum false
// })
// console.log(doneTodos);
// const doneTodos = todos.filter(function(todo) {
//     return todo.text === 'lavar louca'; //filtra os que tem algum lavar louca
// });
// console.log(doneTodos);
//       FIND       //
// const find = todos.find(function(todo) {
//     return todo.text === 'lavar roupa'
// })
// console.log(find)
//     FIND INDEX   //
// const index = todos.findIndex(function(todo) {
//     return todo.text === 'lavar roupa'
// })
// console.log(index)
//Array ou vetor sim ou nao //boolean
var cars = ['fusca', 'civic', 'hb20']; // const hasfusca = cars.some(function(car) {
//     return car === 'fusca'
// })
// console.log(hasfusca)
//           Arrow functions      //
//Array ou vetor de itens/objetos
// const todos = [
//     { text: "lavar louca", done: false },
//     { text: "lavar roupa", done: true },
//     { text: "lavar quintal", done: true },
// ]
// const doneTodos = todos.filter((todo) => todo.done === true)
// console.log(doneTodos);
// function anything(){
//     console.log('teste')
// }
// anything()
// const anything = () => { console.log('testees') }
// anything()
// const anything = () => 'hello world'
// const anything = () => 1
// const anything = () => [1, 2, 3, 4]
// const anything = () => ({ name: 'bruna' })
// console.log(anything())
//   Parâmetro padrão   //
// function sayHello(name = 'Fulano') {
//     console.log('Olá, ' + name)
// }
// sayHello('bruna')
// const sayHello = (name = 'Fulano') => { console.log('Olá, ' + name) }
// sayHello()
//     Template strings    //
// const showProduct = (product, price) => {
//     console.log("O valor de " + product + " é de R$" + price + ", pode comprar!");
// }
// showProduct('Camisa', 15)
// const showProduct = (product, price) => {
//     console.log("O valor de ${product.toUppdercase()} é de R$ ${Math.round(price)}, pode comprar!");
// }
// showProduct('Camisa', 20.7)
//    Object Short Syntax  //
// const name = 'camisa'
// const price = 20
// const product = {
//     name,
//     price,
//     inStock: true
// }
// console.log(product)
//     Desestruturação     //

var fruits = ['laranja', 'morango', 'maçã']; // const a = fruits[0]
// const b = fruits[1]
// console.log(a, b)
// const [a, , c] = fruits
// console.log(a, c)
// const person = {
//     firstName: 'bruna',
//     secondName: 'silva',
//     age: 23,
//     address: {
//         city: 'sao paulo',
//         region: 'sp',
//     },
//     nickName: 'bru'
// }
// const firstName = person.firstName
// const secondName = person.secondName
// const city = person.address.city
// console.log(firstName, secondName, city)
// const { firstName, secondName, address: { city } } = person
// console.log(firstName, secondName, city)
// const showFullName = ({ firstName, secondName }) => {
//     console.log(`${firstName} ${secondName}`)
// }
// showFullName(person)
//     Operadores rest/spread   // 
// const numbers = [1, 2, 3, 4, 5]
// const [first, second, ddd, ...rest] = numbers //pega tudo exceto os tres primeiros
// console.log(rest)
// const person = {
//     name: 'bruna',
//     age: 23,
//     height: 1.65,
//     nickName: 'bru',
//     company: 'cataline'
// }
// const { name } = person
// console.log(name)
// const { name, ...rsrsrs } = person; //pega tudo EXCETO NAME
// console.log(rsrsrs);
//Rest//
// const sum = (...params) => {
//     return params.reduce((total, next) => total + next)
// }
// console.log(sum(5, 5, 10, 10))
//Spread - expande o conteudo em outro local
// const numbers1 = [1, 2, 3, 4, 5]
// const numbers2 = [5, 6, 7, 8, 9, 10]
// const numbers = [...numbers1, ...numbers2]
// const numbers = [...numbers1, 6, 7, 8, 9, 10];
// console.log(numbers)
// const person = {
//     name: 'bruna',
//     age: 23,
//     height: 1.65,
//     nickName: 'bru',
//     company: 'cataline'
// }
// const person1 = {
//     ...person,
//     company: 'google' //sobrescrever a companhia
// }
// console.log(person1)
//           CLASSES             //
//Função construtora
