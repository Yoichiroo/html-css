let compras = ["banana", "manga", "uva"]
mostrar()

function mostrar() {
    lista.innerHTML = ""

    if (compras.length == 0) {
        lista.innerHTML = "A lista está vazia."
    } else {
        for (let pos = 0; pos < compras.length; pos++) {
            lista.innerHTML += `${pos} - ${compras[pos]} <br>`
        }
    }
}

function adicionar() {
    let item = prompt("Qual item você gostaria de adicionar na lista?")

    if (temnalista(item)) {
        alert(`Você já adicionou ${item}.`)
    } else {
        compras.push(item)
        mostrar()
    }
}

function temnalista(produto) {
    if (compras.indexOf(produto) == -1) {
        return false
    } else {
        return true
    }
}

function remover() {
    let lixo = prompt("Qual item você quer remover?")

    if (temnalista(lixo)) {
        compras.splice(compras.indexOf(lixo), 1)
        mostrar()
    } else {
        alert(`Você não tem ${lixo} na lista!!!!!!!`)
    }
}

function buscar() {
    let chave = prompt("O que você quer achar?")

    if (temnalista(chave)) {
        alert(`Você tem ${chave} na posição ${compras.indexOf(chave)} da lista.`)
    } else {
        alert(`Não encontrei ${chave}.`)
        adicionar()
    }
}
