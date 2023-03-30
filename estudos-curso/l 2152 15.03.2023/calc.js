let res = document.getElementById("resCalc")

function inserir(num) {
    if (res.innerHTML == "0") {
        res.innerHTML = ""
    } 
    if (res.innerHTML.length >= 10) {
        res.innerHTML = "ERRO"
    } else {
        if (res.innerHTML == "ERRO") {
            res.innerHTML = ""
        } else {
            res.innerHTML += num
        }
    }
}

function limpar() {
    res.innerHTML = ""
}

function voltar() {
    let resultado = document.getElementById("resCalc").innerHTML
    res.innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
    let resultado = document.getElementById("resCalc").innerHTML
    if (resultado) {
        res.innerHTML = eval(resultado)
    }
}