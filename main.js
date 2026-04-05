'use strict'

function limparInput() {
    const inputs = document.querySelectorAll('.input')
    inputs.forEach(input => {
        input.value = ""
    })
    document.getElementById('estado').value = ""
    const radios = document.querySelectorAll('input[name="genero"]')
    radios.forEach(radio => {
        radio.checked = false
    })
    const todosCampos = document.querySelectorAll('.input, select')
    todosCampos.forEach(campo => {
        campo.classList.remove('input-invalido')
    })
    const todasMensagens = document.querySelectorAll('.erro-mensagem')
    todasMensagens.forEach(mensagem => {
        mensagem.textContent = ""
    })
}

function limparMensagensErro() {
    const mensagens = ['nome', 'data', 'cpf', 'email', 'telefone', 'rua', 'bairro', 'cidade', 'estado', 'genero']
    mensagens.forEach(campo => {
        const spanErro = document.getElementById(`erro-${campo}`)
        if (spanErro) {
            spanErro.textContent = ""
        }
    })
}

function verificar() {
    const todosCampos = document.querySelectorAll('.input, select')
    todosCampos.forEach(campo => {
        campo.classList.remove('input-invalido')
    })
    
    limparMensagensErro()
    
    const campos = [
        { id: 'nome', nome: 'Nome Completo' },
        { id: 'data', nome: 'Data de Nascimento' },
        { id: 'cpf', nome: 'CPF' },
        { id: 'email', nome: 'E-mail' },
        { id: 'telefone', nome: 'Número de Telefone' },
        { id: 'rua', nome: 'Rua' },
        { id: 'bairro', nome: 'Bairro' },
        { id: 'cidade', nome: 'Cidade' },
        { id: 'estado', nome: 'Estado' }
    ]
    
    let primeiroCampoInvalido = null
    let temErro = false
    
    for (let campo of campos) {
        const campoElement = document.getElementById(campo.id)
        const valor = campoElement.value.trim()
        
        if (!valor) {
            const spanErro = document.getElementById(`erro-${campo.id}`)
            spanErro.textContent = `O campo ${campo.nome} é obrigatório`
            campoElement.classList.add('input-invalido')
            temErro = true
            
            if (!primeiroCampoInvalido) {
                primeiroCampoInvalido = campoElement
            }
        }
    }
    
    const generoSelecionado = document.querySelector('input[name="genero"]:checked')
    if (!generoSelecionado) {
        const spanErro = document.getElementById('erro-genero')
        spanErro.textContent = 'Por favor, selecione um gênero'
        temErro = true
    }
    
    if (temErro) {
        if (primeiroCampoInvalido) {
            primeiroCampoInvalido.focus()
        }
        return false
    }
    
    alert("Formulário enviado com sucesso!")
    return true
}

const camposValidacao = ['nome', 'data', 'cpf', 'email', 'telefone', 'rua', 'bairro', 'cidade']
camposValidacao.forEach(campo => {
    const elemento = document.getElementById(campo)
    elemento.addEventListener('input', function() {
        this.classList.remove('input-invalido')
        const spanErro = document.getElementById(`erro-${campo}`)
        if (spanErro) {
            spanErro.textContent = ""
        }
    })
})

document.getElementById('estado').addEventListener('change', function() {
    this.classList.remove('input-invalido')
    const spanErro = document.getElementById('erro-estado')
    if (spanErro) {
        spanErro.textContent = ""
    }
})

const radios = document.querySelectorAll('input[name="genero"]')
radios.forEach(radio => {
    radio.addEventListener('change', function() {
        const spanErro = document.getElementById('erro-genero')
        if (spanErro) {
            spanErro.textContent = ""
        }
    })
})