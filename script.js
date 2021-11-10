const valorInput = document.getElementById('valorDaConta')
const pessoasInput = document.getElementById('numeroDePessoas')
const outraPorcentagemInput = document.getElementById('outraPorcentagem')

let warningValor = 0


valorInput.addEventListener("keypress", function (e) {
    let keyCode = (e.keyCode ? e.keyCode : e.which)
    if (keyCode == 45) {
        e.preventDefault();
    }

    setTimeout(() => {
        if (parseInt(valorInput.value) == 0 && warningValor == 0) {
        const novoEl = document.createElement('h3')
        const novoP = document.createTextNode('O valor não pode ser 0')
        novoEl.appendChild(novoP)
        const posicao = document.getElementById('wrap')
        novoEl.classList.add('warningValor')
        posicao.appendChild(novoEl)
        warningValor = 1
    } else if (parseInt(valorInput.value) != 0 && warningValor == 1) {
        const removerEl = document.getElementsByClassName('warningValor')[0]
        const container = removerEl.parentNode
        container.removeChild(removerEl)
        warningValor = 0
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

    if (pessoasInput.value.length > 100 || pessoasInput.value.length <= 0) {
        e.preventDefault()
    } else if (keyCode == 48) {

    }
})

outraPorcentagemInput.addEventListener("keypress", function (e) {
    let keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode == 45) {
        e.preventDefault();
    } else if (keyCode == 48) {

    }

    if (outraPorcentagemInput.value.length >= 4 || outraPorcentagemInput.value.length <= 0) {
        e.preventDefault()
    } else if (keyCode == 48) {
    }
})