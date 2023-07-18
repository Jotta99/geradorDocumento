// Elementos DOM
const nameInput = document.getElementById('nameinput')
const cpfInput = document.getElementById('cpfinput')
const rgInput = document.getElementById('rginput')
const cargoInput = document.getElementById('cargoinput')
const nomeEmpresaInput = document.getElementById('nomeempresainput')
const cnpjInput = document.getElementById('cnpjinput')
const cityInput = document.getElementById('cityinput')
const ufInput = document.getElementById('ufinput')
const dateInput = document.getElementById('dateinput')
const enterInput = document.getElementById('enterinput')
const saidaInput = document.getElementById('saidainput')
const buttonPrint = document.getElementById('buttonprint')
const buttonView = document.getElementById('buttonview')
const date = new Date()
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()
const arrMonth = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    console.log(year)

// Impressão
// Elementos DOM
const nameInputPreenchido = document.getElementById('nomepreenchido')
const cpfInputPreenchido = document.getElementById('cpfpreenchido')
const rgInputPreenchido = document.getElementById('rgpreenchido')
const cargoInputPreenchido = document.getElementById('cargopreenchido')
const nomeEmpresaInputPreenchido = document.getElementById('empresapreenchido')
const cnpjInputPreenchido = document.getElementById('cnpjpreenchido')
const localInputPreenchido = document.getElementById('location')
const dataInputPreenchido = document.getElementById('datapreenchida')
const enterInputPreenchido = document.getElementById('entradapreenchido')
const saidaInputPreenchido = document.getElementById('saidapreenchido')

// Eventos e Funções

buttonPrint.addEventListener('click', () => {
    if(nameInput.value === '' | cpfInput.value === '' |
    rgInput.value === '' | cargoInput.value === '' |
    nomeEmpresaInput.value === '' | cnpjInput.value === '' |
    nameInput.value === '' | nameInput.value === ''){
        alert('Campos em branco!')
    }
    else {
        nameInputPreenchido.textContent = nameInput.value
        cpfInputPreenchido.textContent = cpfInput.value
        rgInputPreenchido.textContent = rgInput.value
        cargoInputPreenchido.textContent = cargoInput.value
        nomeEmpresaInputPreenchido.textContent = nomeEmpresaInput.value
        cnpjInputPreenchido.textContent = cnpjInput.value
        localInputPreenchido.textContent = cityInput.value + ', ' + ufInput.value + ', ' + day + ' de ' + arrMonth[month] + ' de ' + year
        enterInputPreenchido.textContent = enterInput.value
        saidaInputPreenchido.textContent = saidaInput.value
        let regexDateFormat = dateInput.value.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1')
        dataInputPreenchido.textContent = regexDateFormat
        window.print()
    }
})

console.log(rgInputPreenchido.textContent)


// Masks Input

cpfInput.addEventListener('keypress', () => {
    console.log(cpfInput.value.length)
    if (cpfInput.value.length === 3) {
        cpfInput.value + cpfInput.value + '.'
    }
})
