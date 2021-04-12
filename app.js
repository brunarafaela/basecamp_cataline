//________________________INTRODUCAO______________________

//variáveis

var name = 'Bruna Rafaela' //string
var age = 28 //integer
var weight = 66.5 //float
var alive = false //boolean
var food = null //null
var time //undefined
var fruits = ["Morango", "Manga", "Abacate", "Limão"]; //array ou vetor
var person = {
        name: name,
        age: 28,
        alive: true,
        height: 1.66,
        weight: 52,
    } //objeto

var blabla = ['', 28, 66.7, false, null, ]

//console.log(typeof age)
//console.log(person.age);
//console.log(fruits[3])
//console.log("Hawwwwlo Bruna");


//concatenação
var product = 'Camisa'
var price = 10

//console.log('O preço de ' + product + ' é R$' + price)


//Operadores aritméticos

//binários

var x = 10
var y = 3

var result = x % y
var result = (20 + 5) * 2

//console.log(result)

//unários

x++

//console.log(x++)
//console.log(x)
//console.log(++x)

//Operadores de atribuição

var x = 10
var y = 3

//x = x + y

x += y

//console.log(x)

var product = 'Camisa'
var text = 'Temos em estoque: '

text += product
text += product[0]

//console.log(text)

//Função

function action() {
    // console.log('realiza uma acao')
    return 100
}

//console.log(15 + action())

//action()

function sum(number1, number2) { //os numeros sao parametros q só sao acessiveis dentro da funcao
    return number1 + number2
}

//console.log(sum(10, 50)) //os nuneros sao argumentos


//Condicionais

var isActive = true
var message = ''

//condição

if (isActive) { //se
    message = 'Está ativo'
} else { //se nao
    message = 'Não está ativo'
}

//console.log(message)


var trafficLight = 'green'
var message = ''

if (trafficLight == 'green') { //se
    message = 'Pode passar'
} else if (trafficLight == 'red') { //se nao, se
    message = 'Pare'
} else if (trafficLight == 'yellow') { //se nao, se
    message = "Atençâo"
} else { //
    message = 'Inválido'
}

//console.log(message)

//um = atribuicao
//dois == é comparacao

switch (trafficLight) {
    case 'green':
        message = "Pode passar";
        break;
    case 'red':
        message = "Pare";
        break;
    case 'yellow':
        message = "Atençâo";
        break;
    default:
        message = "Inválido";
}

//console.log(message);

//Operadores de comparação



if (10 === '10') {
    // console.log('ok')
}

if (true === true) {
    //console.log("ok")
}
if (10 != 9) {
    //  console.log('é diferente')
}

if (10 >= 10) {
    //console.log("ok")
}

//Operadores lógicos

//AND, OR, NOT

var email = 'brunarafaelav@outlook.com'
var password = "1234";

if (email === 'brunarafaelav@outlook.com' && password === '1234') {
    //  console.log('Usuario autenticado')
} else {
    // console.log('Login incorreto')
}

var age = 28
var sex = 'F'

if (age >= 29 || sex === "M") {
    //console.log("Entrada liberada")
} else {
    //  console.log("Entrada barrada")
}

var sex = "F";

if (!sex === 'F') {
    // console.log("Entrada liberada");
} else {
    // console.log("Entrada barrada");
}

var isActive = true
isActive = !isActive
    //console.log(!isActive);


//Operadores ternários
var age = 18
var result = ''

if (age >= 18) {
    result = 'ok'
} else {
    result = 'nao ok'
}

//console.log(result)



var age = 19
var result = age >= 18 ? 'ok' : 'nao ok'
    //console.log(result)


//Estrutura de repetição

//for, while

for (var i = 1; i <= 10; i++) {
    //console.log(i)
}


var i = 0

while (i <= 10) {
    // console.log(i)
    i++;
}


//Escopo de função - nao deixa a variavel vazar pra fora do escopo

//escopo global

var car = 'AAA'

//escopo local
function showCar() {
    var car = "BMW";
    // console.log(car);
}

showCar()
    // console.log(car)

function soma(number1, number2) {
    var result = number1 + number2
    return result
}

//console.log(soma(3, 3))

var result = 'qualquer coisa'
    //console.log(result)



//Escopo de bloco - deixa a variavel vazar para todo o código

//if, for, while

var car = ''
if (true) {
    car = 'BMW'
}

//console.log(car)

if (true) {
    let carro = 'Fusca'
}

//console.log(carro);


//__________________________TUDO É OBJETO__________________-

//Operações em string

var person = {
    nome: 'Bruna',
    height: 1.60,
    sayHello: function() {
        // console.log('Haaawllo')
    },
}

person.sayHello()

var text = 'Hwlloewww sdftgyhujik'

var value = text.length

//console.log(value)


var text = 'Hwlloewww sdftgyhujik'

var value = text[10]

//console.log(value)

var text = "Hwlloewww sdftgyhujik";

var value = text.replace('H', 'Oassss')

//console.log(value);

var text = "Hwlloewww sdftgyhujik";

var value = text.toUpperCase()

//console.log(value);

var text = " Hwlloewww sdftgyhujik ";

var value = text.trim()

//console.log(value);


var text = "Hwlloewww sdftgyhujik";

var value = text.split(' ')

//console.log(value);

var text = "https.www.//brunalima.tech/cv";

var value = text.split('//');

//console.log(value[1]);

//Operações em números

var number = 123
var newValue = number.toString()

//console.log(newValue);

var number = 10.3;
var newValue = Math.trunc(number)

// console.log(newValue);

var number = 10.3;
var newValue = Math.ceil(number)

//console.log(newValue);


var number = 10.8;
var newValue = Math.round(number) //arredonda

//console.log(newValue)

//Operações em array

var array = ['Joao', 'Oliver', 'Maria']

// console.log(array.length)

// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]) 
// }

//var newValue = array.indexOf('Oliver') //posição de

//console.log(newValue)


var array = ["Joao", "Oliver", "Maria"]

array.pop() //tira o ultimo valor

//console.log(array.pop());


var array = ["Joao", "Oliver", "Maria"]

array.push('Young') //tira o ultimo valor

// console.log(array);

var array = ["Joao", "Oliver", "Maria"];
array.splice(0, 2)
    //console.log(array)

var array = ["Joao", "Oliver", "Maria"];

var index = array.indexOf("Maria");

array.splice(index, 1);

//console.log(array);

//Operações em objetos

var person = {
    name: 'Bruna',
    height: 1.65,
}

//Object.freeze(person) //congela o objeto para nao sofrer alterações

person.age = 15
    // console.log(person)

//associar dois objetos

var any = {
    age: 15
}

var newObject = Object.assign(person, any)

//console.log(newObject);


//____________________MANIPULACAO DO DOM___________________

//Objeto global


//window

// window.alert('qualquer coisa')

// console.log(window.innerHeight) //altura da tela
// console.log(window.innerWidth) //largura da tela

//window.location.href = 'https://google.com.br'

// alert('aaa')


//Seleção de elementos

// console.log(window.document.body)

var input = document.getElementById('idade')
    // console.log(input)

var input = document.getElementsByClassName("idade")[0]; //array
// console.log(input);

var input = document.getElementsByTagName("input")[0]; //array
// console.log(input);

var input = document.querySelector("div#app input.idade");
// console.log(input);

var input = document.querySelector("div#app input [name='idade']")
    // console.log(input);

var input = document.querySelector("div#app input [placeholder='Idade']");
// console.log(input);

var input = document.querySelector("div#app input#idade");
//console.log(input);

var input = document.querySelector("div#app input#idade");

//console.log(input.parentElement) //traz o elemento pai 
//console.log(input.parentElement.parentElement) //traz o elemento pai do pai
//console.log(input.previousElementSibling) //traz o elemento anterior
//console.log(input.nextElementSibling) //traz o próximo elemento
var list = document.querySelector("div#app ul");
//console.log(list.children[1]); //HTMLCollection com os filhos [0] com o primeiro filho


//Manipulação de eventos AÇOES

function sayHello(params) {
    alert('Hwllow Bruna')
}

var button = document.querySelector('#app button')
button.addEventListener('click', function() {
    // alert('Halllowowow Bruna')
})

var input = document.querySelector('#app input#idade')
input.addEventListener('keyup', function() {
    // alert('Halllowowow aaaa')
})

button.addEventListener('click', function() {
    //  alert('Sua idade é: ' + input.value)
})


function showAge() {
    //  alert("Sua idade é: " + input.value)
}
button.addEventListener('click', showAge)


//Prevenção padrão

var button = document.querySelector("#app button");
var input = document.querySelector("#app input#idade");

button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log(event)
    console.log("Sua idade é: " + input.value);
})

var link = document.querySelector("#app a").addEventListener('click', function(event) {
        event.preventDefault()
        console.log('foi clicado')
            //console.log("Sua idade é: " + input.value);
    }) //tira o #sobre da URL



//Alterando estilos

var element = document.querySelector('div#app')
    // element.style.background = '#cecece'
    // element.style.height = '200px'
    // element.style.width = '600px'

//Alterando conteúdo

var app = document.querySelector("div#app");

// app.innerText = "Olá";
// console.log(app.outerHTML) //todo o html do elemento

// console.log(app.innerHTML) //html interno

// console.log(app.innerText) //todo o texto, sem tags


//Operações em elementos

var app = document.querySelector("div#app")

var link = document.createElement('a')
var textLink = document.createTextNode('Visitar Google')

// link.href = 'https://google.com.br'

link.setAttribute('href', 'https://google.com.br')
link.appendChild(textLink)

//app.appendChild(link)


// var text = document.querySelector("div#app h1")
// console.log(text)

var app = document.querySelector("div#app");

var text = document.querySelector("div#app h1");
// app.removeChild(text)

//Intervalo e timeout

// window.setInterval(function() { //função anonima
//     console.log('executou')
// }, 3000)

function doAction() {
    //console.log('executou')
    //...
}

// setInterval(doAction, 3000) //passando o conteudo da funcao como argumento
//setTimeout(doAction, 3000)


//Armazenamento local - local storage -- no navegador
localStorage.theme = 'dark'
    //console.log(localStorage.theme)


//________________________JS assíncrono______________________


//Assíncrono VS síncrono

//síncrono - php
//assíncrono - javascript


//Promises 

var voceComprouOsProdutos = new Promise(function(resolve, reject) {
    // if () {
    //     resolve
    // } else {
    //     reject
    // }

    setTimeout(function() {
        var products = ["Camisa", "Sapatos", "Calça"];
        resolve(products)
            //reject("deu ruim");
    }, 3000)

})

voceComprouOsProdutos.then(function(products) {
    //  console.log(products)
}).catch(function(error) {
    // console.log(error)
})

// console.log(voceComprouOsProdutos)


//Requisições AJAX

var button = document.querySelector('#app button')
button.addEventListener('click', function() {
    var xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.github.com/users')
    xhr.send()

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText)
                //console.log(xhr.responseText)
                //console.log(JSON.parse(xhr.responseText)); //vem em formato de array com objeto
                // console.log(data[0].login); //pegando apenas 1 resultado
        }
    }
})

//Utilizando Axios -requisicoes HTTP e AJAX
var button = document.querySelector("#app button");
button.addEventListener("click", function() {
    axios
        .get("https://api.github.com/users"
            // , {
            //     params: {
            //         id: 10
            //     }
            // }
        )
        .then(function(response) {
            // console.log(response)
            // console.log(response.data[0].login)
            console.log(response.data)
        }).catch(function(error) {
            console.log(error)
        }).finally(function() {
            console.log('finalizou')
        })
});

//Praticando -PESQUISA DE CEP