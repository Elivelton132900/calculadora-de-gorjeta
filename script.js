const valorInput = document.getElementById('valorDaConta')
const pessoasInput = document.getElementById('numeroDePessoas')
const outraPorcentagemInput = document.getElementById('outraPorcentagem')

let warningValor = false
let warningGorjeta = false
let warningPessoas = false


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