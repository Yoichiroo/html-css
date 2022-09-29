let vet = Array(5, 2, 7, 8, 9, 5, 8, 4)
show()

function show() {
vetor.innerHTML = ""
for(let pos=0; pos<vet.length; pos++){
    vetor.innerHTML += `[${vet[pos]}] `
}
}

function search() {
    let chave = Number(prompt("Qual valor você procura?"))
    let ponto = 0
    let busca
    let cont = 0
    procura.innerHTML = `Resultado da busca: `

    while(true){
        busca = vet.indexOf(chave, ponto)
        if(busca == -1){
            break
        } else {
            procura.innerHTML += `Posição (${busca}) `
            ponto = busca + 1
            cont++
        }
    }
    if (cont == 0) {
        procura.innerHTML += `Não foi encontrado.`
    }
}

function removepos() {
    let pos = Number(prompt("Qual posição você quer remover?"))
    if(pos < 0 || pos >= vet.length){
        alert("Posição não existe, animal")
    } else {
        alert(`Removendo o valor ${vet[pos]} na posição ${pos}`)
        vet.splice(pos, 1)
    }
    show()
    search()
}

function removeval() {
    let valor = Number(prompt("Qual valor você quer remover?"))
    let busca
    let tot = 0
    while(true){
        busca = vet.indexOf(valor)
        if(busca == -1){
            break
        } else {
            vet.splice(busca, 1)
            tot++
        }
    } 
    mensagem.innerHTML = `Removi ${tot} elementos do vetor`
    show()
    search()
}