//Formatando CEP

var submitButton = document.querySelector('div#app form button')
var zipCodeField = document.querySelector("div#app form input")
var content = document.querySelector("div#app main");

submitButton.addEventListener('click', run)

function run(event) {
    event.preventDefault()
    var zipCode = zipCodeField.value
    zipCode = zipCode.replace(' ', '')
    zipCode = zipCode.replace(".", "")
    zipCode = zipCode.replace("-", "")
    zipCode = zipCode.trim()
        //console.log(zipCode)

    axios
        .get("https://viacep.com.br/ws/" + zipCode + "/json/")
        .then(function(response) {
            if (response.data.erro) {
                throw new Error('CEP inválido')
            }
            content.innerHTML = ''
                //console.log(response.data);
                // var line = document.createElement('p')
                // var text = document.createTextNode(response.data.logradouro)

            // line.appendChild(text)
            // content.appendChild(line)
            createLine(response.data.logradouro)
            createLine(response.data.bairro)
            createLine(response.data.localidade + ' - ' + response.data.uf)
        })
        .catch(function(error) {
            content.innerHTML = "";
            console.log(error)
            createLine('Ops, algo deu errado!')
        });
}

function createLine(text) {
    var line = document.createElement('p')
    var text = document.createTextNode(text)
    line.appendChild(text)
    content.appendChild(line)
}

//Lidando com erros