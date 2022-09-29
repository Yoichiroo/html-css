let vetor = []
function adicionar(){
    let elemento = Number(prompt("Digite aqui um número"))
    vetor.push(elemento)
    vetores.innerHTML = ` [${vetor}]`
    resp.innerHTML = "Vetor adicionado com sucesso!"
}

function somar(){
    let soma = 0
    for (let pos = 0; pos < vetor.length; pos++){
        soma += vetor[pos];
    }
    resp.innerHTML += `<br> A soma desses <strong>${vetor.length}</strong> é <strong>${soma}.</strong>`
}

function maior(){
    let maior = Math.max.apply(null, vetor );
    resp.innerHTML += `<br> O maior entre eles é ${maior}`
}

function menor(){
    let menor = Math.min.apply(null, vetor );
    resp.innerHTML += `<br> O menor entre eles é ${menor}`
}

function par(){
    let par = 0
    for (let pos = 0; pos < vetor.length; pos++){
        if (vetor[pos] % 2 == 0){
            resp.innerHTML += `<br> Número par ${vetor[pos]} na posição ${pos}`
            par++
        }
    }
}

function impar(){
    let impar = 0
    for (let pos = 0; pos < vetor.length; pos++){
        if (vetor[pos] % 2 == 1){
            resp.innerHTML += `<br> Número ímpar ${vetor[pos]} na posição ${pos}`
            impar++
        }
    }
}

function limpar(){
    vetor = []
    resp.innerHTML = ""
    vetores.innerHTML = "O vetor está vazio."
}