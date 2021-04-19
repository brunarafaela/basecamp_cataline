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
const cars = ['fusca', 'civic', 'hb20']

// const hasfusca = cars.some(function(car) {
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

const fruits = ['laranja', 'morango', 'maçã']

// const a = fruits[0]
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

// const car = {
//     brand: null,
//     price: 0
// }
// const civic = car
// civic.brand = 'honda'
// civic.price = 130

// const hb20 = car
// hb20.brand = 'hyundai'
// hb20.price = 80

// console.log(civic, hb20)

// function Car(brand, price) {
//     this.brand = brand
//     this.price = price //referencia ao proprio escopo da funcao
// }

// const civic = new Car('honda', 130)
// const hb20 = new Car('hyundai', 80)

// console.log(civic)
// console.log(hb20)


//Classes

// class Car { //classe pode ter método
//     constructor(brand, price = 10) {
//         this.brand = brand,
//             this.price = price
//     }
//     run() {
//         console.log('correr')
//     }
// }

// const civic = new Car('honda', 130) //instanciando
// civic.run()
//     // console.log(civic.brand)
//     // console.log(civic.price)



// Get & Set //


// class Person {
//     constructor(name) {
//         this._name = name //underline propriedade privada que só pode ser acessada dentro da classe
//     }

//     get name() {
//         return this._name
//     }

//     set name(newName) {
//         this._name = newName
//     }
// }

// const person = new Person('bruna')
// person.name = 'rafinha'


// console.log(person.name)


// Funções + Métodos estáticos //

// class Calculator {
//     static sum(a, b) {
//         return a + b
//     }
// }

// console.log(Calculator.sum(10, 5))


// class Person {
//     constructor(firstName, secondName) {
//         this.firstName = firstName;
//         this.secondName = secondName;
//     }

//     get fullName() {
//         return Person.joinNames(this.firstName, this.secondName);
//     }

//     static joinNames(firstName, secondName) {
//         return `${firstName} ${secondName}`;
//     }
// }

// const person = new Person('Yung', 'silva')

// console.log(person.fullName)


//Herança

class Veiculo {
    //classe generica
    constructor(rodas) {
        this.rodas = rodas;
    }

    acelerar() {
        console.log("acelerou");
    }
}


class Moto extends Veiculo {
    //classe veiculo
    constructor(rodas, capacete) {
        super(rodas, combustivel); //new veiculo('2')
        this.capacete = capacete;
    }

    empinar() {
        console.log(`empinou com ${this.rodas} rodas`);
    }

    taUsandoCapacete() {
        console.log(this.capacete);
    }


    // acelerar() {
    //     //sobrescrevendo o método acelerar
    //     super.acelerar(); //referencia a classe pai mesma coisa que dizer veiculo.acelerar()
    //     console.log("acelerou MUITO");
    // }
}

const bross = new Moto(2, true);

bross.empinar()
bross.acelerar()
bross.taUsandoCapacete()



//              Configurando Webpack          // agrupa arquivos e otimiza eles