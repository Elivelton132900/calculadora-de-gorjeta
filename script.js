const valorInput = document.getElementById('valorDaConta')
const pessoasInput = document.getElementById('numeroDePessoas')
const outraPorcentagemInput = document.getElementById('outraPorcentagem')

const botao1 = document.querySelector('[botao1]')
const botao2 = document.querySelector('[botao2]')
const botao3 = document.querySelector('[botao3]')
const botao4 = document.querySelector('[botao4]')
const botao5 = document.querySelector('[botao5]')

const listaBotao = [botao1, botao2, botao3, botao4,
 botao5]


let botaoAtivo = false


let warningValor = false
let warningGorjeta = false
let warningPessoas = false

let valorDaGorjeta
let valorDaPessoa


valorInput.addEventListener("keypress", function (e) {
    let keyCode = (e.keyCode ? e.keyCode : e.which)
    if (keyCode == 45) {
        e.preventDefault();
    }

    setTimeout(() => {
        if (parseFloat(valorInput.value) == 0 && !warningValor) {
        const novoEl = document.createElement('h3')
        const novoP = document.createTextNode('O valor não pode ser 0')
        valorInput.classList.add('inputWarning')
        novoEl.appendChild(novoP)
        const posicao = document.getElementById('wrap')
        novoEl.classList.add('warningValor')
        posicao.appendChild(novoEl)
        warningValor = true
    } else if (parseFloat(valorInput.value) != 0 && warningValor) {
        const removerEl = document.getElementsByClassName('warningValor')[0]
        const container = removerEl.parentNode
        container.removeChild(removerEl)
        warningValor = false
        valorInput.classList.remove('inputWarning')
    }

    }, 100);
    
    
    if (valorInput.value.length >= 4) {
        e.preventDefault()
    }
})

pessoasInput.addEventListener("keypress", function (e) {
    let keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode == 45) {
        e.preventDefault();
    }

    setTimeout(() => {
        if (parseFloat(pessoasInput.value) == 0 && !warningPessoas) {
        const novoEl = document.createElement('h3')
        const novoP = document.createTextNode('O valor não pode ser 0')
        novoEl.appendChild(novoP)
        const posicao = document.getElementById('wrapPessoas')
        novoEl.classList.add('warningValor')
        posicao.appendChild(novoEl)
        pessoasInput.classList.add('inputWarning')
        warningPessoas = true
    } else if (parseFloat(valorInput.value) != 0 && warningPessoas) {
        const removerEl = document.getElementsByClassName('warningValor')[0]
        const container = removerEl.parentNode
        container.removeChild(removerEl)
        warningPessoas = false
        pessoasInput.classList.remove('inputWarning')
    }

    }, 100);

    if (pessoasInput.value.length >= 2){
        e.preventDefault()
    }
})

outraPorcentagemInput.addEventListener("keypress", function (e) {
    let keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode == 45) {
        e.preventDefault();
    }

    setTimeout(() => {
        if (parseFloat(outraPorcentagemInput.value) == 0 && !warningGorjeta) {
        const novoEl = document.createElement('h3')
        const novoP = document.createTextNode('O valor não pode ser 0')
        outraPorcentagemInput.classList.add('inputWarning')
        novoEl.appendChild(novoP)
        const posicao = document.getElementById('gorjetas')
        novoEl.classList.add('warningValorPorcentagem')
        posicao.appendChild(novoEl)
        warningGorjeta = 1
    } else if (parseFloat(valorInput.value) != 0 && warningGorjeta == 1) {
        outraPorcentagemInput.classList.remove('inputWarning')
        const removerEl = document.getElementsByClassName('warningValorPorcentagem')[0]
        const container = removerEl.parentNode
        container.removeChild(removerEl)
        warningGorjeta = 0
    }

    }, 100);

    if (outraPorcentagemInput.value.length >= 2) {
        e.preventDefault()
    }
})

function checaBotao() {
    for(let i = 0; i < listaBotao.length; i++) {
        if (listaBotao[i].hasAttribute('class', 'botaoClicado')) {
            botaoAtivo = true
        }
    }
}

function removeClasseBotao() {
    for(let i = 0; i < listaBotao.length; i++) {
        if (listaBotao[i].hasAttribute('class', 'botaoClicado')) {
            listaBotao[i].removeAttribute('class', 'botaoClicado')
            botaoAtivo = false
        }
    }
}

botao1.addEventListener('click', function(e) {
    checaBotao()
    if (botaoAtivo == false) {
        e.target.classList.add('botaoClicado')
    } else {
        removeClasseBotao()
        e.target.classList.add('botaoClicado')
    }
})

botao2.addEventListener('click', function(e) {
    checaBotao()
    if (botaoAtivo == false) {
        e.target.classList.add('botaoClicado')
    } else {
        removeClasseBotao()
        e.target.classList.add('botaoClicado')
    }
})

botao3.addEventListener('click', function(e) {
    checaBotao()
    if (botaoAtivo == false) {
        e.target.classList.add('botaoClicado')
    } else {
        removeClasseBotao()
        e.target.classList.add('botaoClicado')
    }
})

botao4.addEventListener('click', function(e) {
    checaBotao()
    if (botaoAtivo == false) {
        e.target.classList.add('botaoClicado')
    } else {
        removeClasseBotao()
        e.target.classList.add('botaoClicado')
    }
})

botao5.addEventListener('click', function(e) {
    checaBotao()
    if (botaoAtivo == false) {
        e.target.classList.add('botaoClicado')
    } else {
        removeClasseBotao()
        e.target.classList.add('botaoClicado')
    }
})