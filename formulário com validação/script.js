function bloqueiaEnter(input){
input.addEventListener('keydown',(e) =>{
    if (e.key === "Enter") {
        e.preventDefault();
        return false;
    }
    })
}
  
function mostrarBotEnviar(input){
    input.addEventListener('blur',() =>{
         if (confirmSenhaInput.value !== '' ) {
             botEnviar.classList.add('visible')
         }else{
             botEnviar.classList.remove('visible')
         }
     })
     
 }
 
 function validarSenha(senha) {
    var regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;

    if (regex.test(senha)) {
        return true;
    } else {
        return false;
    }
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameLabel = document.querySelector('label[for="username"]');
let usernameInput = document.getElementById("username");
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener('focus',()=>{
    usernameLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener('blur',()=>{
    usernameLabel.classList.remove('required-popup')
})

// Validar valor do input
usernameInput.addEventListener('change',(e)=>{
   let valor = e.target.value

    if (valor.length < 5) {
        usernameHelper.classList.add('visible')
        usernameInput.classList.add('error')
        usernameInput.classList.remove('correct')
        usernameHelper.innerText = 'Seu username precisa de 5 caracteres ou mais'
    } else {
        usernameHelper.classList.remove('visible')
        usernameInput.classList.add('correct')
        usernameHelper.innerText = ''
        inputsCorretos.username = true
    }
    if (valor === '') {
        usernameHelper.classList.remove('visible')
        usernameInput.classList.remove('error')
        usernameInput.classList.remove('correct')
        usernameInput.classList.remove('correct')
        usernameHelper.innerText = ''
        inputsCorretos.username = false
    }
})
bloqueiaEnter(usernameInput)

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailLabel = document.querySelector('label[for="email"]');
let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

// Mostrar popup de campo obrigatório
emailInput.addEventListener('focus',()=>{
    emailLabel.classList.add('required-popup')
})
// Ocultar popup de campo obrigatório
emailInput.addEventListener('blur',()=>{
    emailLabel.classList.remove('required-popup')
})
// Validar valor do input
emailInput.addEventListener('change',(e)=>{
    let valor = e.target.value
    if (valor.includes('@') && valor.includes('.com')) {
        emailInput.classList.add('correct')
        emailHelper.classList.remove('visible')
        inputsCorretos.email = true

    } else {
        emailInput.classList.remove('correct')
        emailInput.classList.add('error')
        emailHelper.innerText = 'Verifique seu e-mail!'
        emailHelper.classList.add('visible')
        inputsCorretos.email = false
    }
    if (valor === '') {
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
        inputsCorretos.email = false

    }
})
bloqueiaEnter(emailInput)

// ---------- VALIDAÇÃO IDADE ---------- //
let idadeLabel = document.querySelector('label[for="idade"]')
let idadeInput = document.getElementById('idade')
let idadeHelp = document.getElementById('idade-helper')

// Validar valor do input
idadeInput.addEventListener('change',(e)=>{
    let valor = e.target.value
    if (valor < 18) {
        idadeInput.classList.add('error')
        idadeHelp.classList.add('visible')
        idadeInput.classList.remove('correct')
        idadeHelp.innerText = 'Só aceitamos maiores de 18 anos'
    } else {
        idadeInput.classList.add('correct')
        idadeHelp.classList.remove('visible')
        idadeHelp.innerText = ''
    }
    if (valor === '') {
        idadeHelp.classList.remove('visible')
        idadeInput.classList.remove('correct')
        idadeInput.classList.remove('error')
    }
})

bloqueiaEnter(idadeInput)

// ---------- VALIDAÇÃO SENHA ---------- //
let senhaLabel = document.querySelector('label[for="senha"]')
let senhaInput = document.getElementById('senha')
let senhaHelp = document.getElementById('senha-helper')

// Mostrar popup de campo obrigatório
senhaInput.addEventListener('focus',()=>{
    senhaLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório
senhaInput.addEventListener('blur',()=>{
    senhaLabel.classList.remove('required-popup')
})

// Validar valor do input
senhaInput.addEventListener('change',(e)=>{
    let senha = e.target.value

    if (validarSenha(senha) === true) {
        senhaInput.classList.add('correct')
        senhaInput.classList.remove('error')
        senhaHelp.classList.remove('visible')
        senhaHelp.innerText = ''
        confirmSenhaLabel.style.display = 'block'
        confirmSenhaInput.style.display = 'block'
        inputsCorretos.senha = true
    } else {
        senhaInput.classList.remove('correct')
        senhaInput.classList.add('error')
        senhaHelp.classList.add('visible')
        senhaHelp.innerText = `Requisitos de senha:

        8 Caracter ou mais
        1 Letra maiúscula
        1 Caracter especial
        `
        confirmSenhaLabel.style.display = 'none'
        confirmSenhaInput.style.display = 'none'
        inputsCorretos.senha = false
    }
    if (senha === '') {
        confirmSenhaInput.value = ''
        confirmSenhaInput.classList.remove('error')
        senhaInput.classList.remove('correct')
        senhaInput.classList.remove('error')
        senhaHelp.classList.remove('visible')   
        inputsCorretos.senha = false     
    }
    
})
bloqueiaEnter(senhaInput)

// ---------- VALIDAÇÃO CONFIRMA SENHA ---------- //
let confirmSenhaLabel = document.querySelector('label[for="confirma-senha"]')
let confirmSenhaInput = document.getElementById('confirma-senha')
let confirmSenhaHelp = document.getElementById('senha-helper2')

confirmSenhaInput.addEventListener('focus',()=> {
    confirmSenhaLabel.classList.add('required-popup')
})

confirmSenhaInput.addEventListener('blur',()=> {
    confirmSenhaLabel.classList.remove('required-popup')
})

confirmSenhaInput.addEventListener('change',(e) => {

    let senhaPrimeiroCampo = senhaInput.value

    let senhaConfirmacao = e.target.value

    if (senhaConfirmacao === senhaPrimeiroCampo) {
        confirmSenhaInput.classList.add('correct')
        confirmSenhaInput.classList.remove('error')
        inputsCorretos.confirmaSenha = true

    } else {
        confirmSenhaInput.classList.remove('correct')
        confirmSenhaInput.classList.add('error')
        confirmSenhaHelp.innerText = 'As senhas precisam ser iguais!'
        confirmSenhaHelp.classList.add('visible')
        inputsCorretos.confirmaSenha = false
    }
    
    if (senhaConfirmacao === '') {
        confirmSenhaInput.classList.remove('correct')
        confirmSenhaInput.classList.remove('error')
        confirmSenhaHelp.classList.remove('visible')
        inputsCorretos.confirmaSenha = false

    }  
})
bloqueiaEnter(confirmSenhaInput)

let botaoEnviar = document.getElementById('enviar');
let inputsCorretos = {
    username: false,
    email: false,
    senha: false,
    confirmaSenha: false
}

botaoEnviar.addEventListener('click',(e) =>{
    if (inputsCorretos.username == false ||
        inputsCorretos.email == false ||
        inputsCorretos.senha == false ||
        inputsCorretos.confirmaSenha == false){
        e.preventDefault()
    } else {
        alert('Formulário enviado com sucesso!!!')
    }
})
