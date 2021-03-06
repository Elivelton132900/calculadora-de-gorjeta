const spanInputValor = document.querySelector('.warningSpan')
const spanInputPessoas = document.querySelector('.warningSpanPessoas')
const botoes = document.getElementById('gorjetas')
const valorInput = document.getElementById('valorDaConta')
const pessoasInput = document.getElementById('numeroDePessoas')
let valorDividido = document.getElementById('valorDividido')
let valorTotal = document.getElementById('valorTotal')
let porcentagem
let botaoReset = document.getElementById('botaoDeReset')


valorInput.addEventListener('keyup', function () {
    if (parseInt(valorInput.value) == 0 || valorInput.value == '') {
        adicionaWarningValor()
    } else {
        removeWarningValor()
    }
})

pessoasInput.addEventListener('keyup', function () {
    if (parseInt(pessoasInput.value) == 0 || pessoasInput.value == '') {
        adicionaWarningPessoas()
    } else {
        removeWarningPessoas()
    }
})

function adicionaWarningPessoas() {
    spanInputPessoas.setAttribute('style', 'display: inline;')
    pessoasInput.classList.add('inputWarning')
}

function removeWarningPessoas() {
    spanInputPessoas.setAttribute('style', 'display: none;')
    pessoasInput.classList.remove('inputWarning')
}

function adicionaWarningValor() {
    spanInputValor.setAttribute('style', 'display: inline;')
    valorInput.classList.add('inputWarning')
}

function removeWarningValor() {
    spanInputValor.setAttribute('style', 'display: none;')
    valorInput.classList.remove('inputWarning')
}

function removeClasseBotao() {
    let filhos = botoes.childNodes
    filhos.forEach(function (item, indice) {
        if (indice % 2 != 0) {
            if (item.hasAttribute('class', 'botaoClicado')) {
                item.removeAttribute('class', 'botaoClicado')
            }
        }
    })
}

function atualizaGorjeta() {
    let conta = (valorInput.value * porcentagem / 100) / pessoasInput.value
    valorDividido.textContent = (`R$ ${conta.toFixed(2).replace('.', ',')}`)
}

function atualizaValorTotal() {
    let conta = ((valorInput.value * porcentagem / 100) + parseFloat(valorInput.value)) / 5
    valorTotal.textContent = (`R$ ${conta.toFixed(2).replace('.', ',')}`)
}

function funcaoMestre() {
    atualizaGorjeta()
    atualizaValorTotal()
    removeWarningPessoas()
    removeWarningValor()
}

botoes.addEventListener('click', function (e) {
    const inputPessoasChecado = (spanInputPessoas.getAttribute('style') == 'display: none;')
    const inputValorChecado = (spanInputValor.getAttribute('style') == 'display: none;')
    botaoDisparado = e.target
    console.log(botaoDisparado.tagName)

    if ((botaoDisparado.tagName == 'BUTTON' || botaoDisparado.tagName == 'INPUT') && inputValorChecado && inputPessoasChecado) {
        if (botaoDisparado.tagName == 'BUTTON') {
            removeClasseBotao()
            botaoDisparado.classList.add('botaoClicado')
            porcentagem = botaoDisparado.textContent.replace('%', '')
            funcaoMestre()
        }  else if (botaoDisparado.tagName == 'INPUT') {
            addEventListener("keyup", () => {     
                if(outraPorcentagem.value == '') {
                    removeClasseBotao()
                    valorDividido.textContent = 'R$ 0,00'
                    valorTotal.textContent = 'R$ 0,00'
                } else {
                    removeClasseBotao()
                    porcentagem = parseFloat(botaoDisparado.value)
                    funcaoMestre()
                }
            })
        }
    } else if (!inputValorChecado || !inputPessoasChecado){
        if ((parseInt(valorInput.value) == 0 || valorInput.value == '')) {
            adicionaWarningValor()
        } else if (parseInt(pessoasInput.value) == 0 || pessoasInput.value == '') {
            adicionaWarningPessoas()
        }
    }
})

botaoReset.addEventListener('click', () => {
    valorDividido.textContent = 'R$ 0,00'
    valorTotal.textContent = 'R$ 0,00'
    removeClasseBotao()
    pessoasInput.value = ''
    valorInput.value = ''
    outraPorcentagem.value = ''
})

outraPorcentagem.addEventListener('click', (e) => {
    if (outraPorcentagem.value != '') {
        removeClasseBotao()
        porcentagem = parseFloat(outraPorcentagem.value)
        funcaoMestre()
    }
})