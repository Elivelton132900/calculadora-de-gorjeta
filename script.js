const spanInputValor = document.querySelector('.warningSpan')
const spanInputPessoas = document.querySelector('.warningSpanPessoas')
const botoes = document.getElementById('gorjetas')
const valorInput = document.getElementById('valorDaConta')
const pessoasInput = document.getElementById('numeroDePessoas')


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
    filhos.forEach(function(item, indice) {
        if (indice % 2 != 0) {
            if (item.hasAttribute('class', 'botaoClicado')) {
                item.removeAttribute('class', 'botaoClicado')
            }
        }
    })
}

botoes.addEventListener('click', function (e) {
    const inputPessoasChecado = (spanInputPessoas.getAttribute('style') == 'display: none;')
    const inputValorChecado = (spanInputValor.getAttribute('style') == 'display: none;')
    botaoDisparado = e.target

    if(botaoDisparado.tagName == 'BUTTON' && inputValorChecado && inputPessoasChecado) {
        removeClasseBotao()
        botaoDisparado.classList.add('botaoClicado')
        removeWarningPessoas()
        removeWarningValor()
    } else {
        if ((parseInt(valorInput.value) == 0 || valorInput.value == '')) {
            adicionaWarningValor()
        } else if (parseInt(pessoasInput.value) == 0 || pessoasInput.value == '') {
            adicionaWarningPessoas()
        }
    }
})