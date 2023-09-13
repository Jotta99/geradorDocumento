// Elementos DOM
const alert = document.getElementById('alert')
const buttonAlert = document.getElementById('buttonalert')
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


function CloseAlert() {
    setTimeout(function(){
        alert.style.display = "none"
    }, 7000);
    
    buttonAlert.addEventListener('click', () => {
        alert.style.display = "none"
    });
}


buttonPrint.addEventListener('click', () => {
    if(!nameInput.value | !cpfInput.value |
    !rgInput.value | !cargoInput.value |
    !nomeEmpresaInput.value | !cnpjInput.value |
    !nameInput.value | !nameInput.value){
        alert.style.display = "flex"
        CloseAlert()
    }
    else {
        nameInputPreenchido.textContent = nameInput.value
        cpfInputPreenchido.textContent = cpfInput.value
        rgInputPreenchido.textContent = rgInput.value
        cargoInputPreenchido.textContent = cargoInput.value
        nomeEmpresaInputPreenchido.textContent = nomeEmpresaInput.value
        cnpjInputPreenchido.textContent = cnpjInput.value
        localInputPreenchido.textContent = cityInput.value + ', ' + ufInput.value.toUpperCase() + ', ' + day + ' de ' + arrMonth[month] + ' de ' + year
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
    let cpfLength = cpfInput.value.length
    if(cpfLength === 3 | cpfLength === 7) {
        cpfInput.value += '.'
    }
    if(cpfLength === 11) {
        cpfInput.value += '-'
    }
})

cnpjInput.addEventListener('keypress', () => {
    let cpfLength = cnpjInput.value.length
    if(cpfLength === 2 | cpfLength === 6) {
        cnpjInput.value += '.'
    }
    if(cpfLength === 10) {
        cnpjInput.value += '/'
    }
    if(cpfLength === 15) {
        cnpjInput.value += '-'
    }
})

enterInput.addEventListener('keypress', () => {
    let cpfLength = enterInput.value.length
    if(cpfLength === 2) {
        enterInput.value += ':'
    }
})

saidaInput.addEventListener('keypress', () => {
    let cpfLength = saidaInput.value.length
    if(cpfLength === 2) {
        saidaInput.value += ':'
    }
})

cpfInput.addEventListener('keypress', () => {
    let cpfLength = cpfInput.value.length
    if(cpfLength === 3 | cpfLength === 7) {
        cpfInput.value += '.'
    }
    if(cpfLength === 11) {
        cpfInput.value += '-'
    }
})