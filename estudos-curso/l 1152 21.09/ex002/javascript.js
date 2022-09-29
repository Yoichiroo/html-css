let produtos = []
show()

function show() {
    let pos = 0
    lista.innerHTML = ""

    while (pos < produtos.length){
        lista.innerHTML += `<br>${pos}. ${produtos[pos]}`
        pos++
    }
    if (pos == 0){
        lista.innerHTML = `Sua lista está vazia`
    }
}

function add() {
    let item = prompt("Qual item você gostaria de adicionar na lista?")
    produtos.push(item)
    show()
}

function remove() {
    let nome = prompt("Qual item você gostaria de remover?")
    let busca 
    let tot = 0
    
    while (true){
        busca = produtos.indexOf(nome)
        if(busca == -1) {
            break
        } else {
            produtos.splice(busca, 1)
            tot++
        }
    }
    if(tot == 0) {
        alert(`Não foi possível remover ${nome}`)
    } 
    else {
        alert(`${nome} removido com sucesso!`)
    }
    
    show()
}

function search() {
    let chave = prompt(`Qual item você deseja procurar?`)
    let ponto = 0
    let busca
    let cont = 0
    
    while (true) {
        busca = produtos.indexOf(chave, ponto)

        if(busca == -1) {
            break
        } else {
            alert(`${chave} se encontra na posição ${busca}`)
            ponto = busca + 1
            cont++
        }
    }
    if(cont == 0) {
        alert(`${chave} não foi encontrado.`)
    }
}