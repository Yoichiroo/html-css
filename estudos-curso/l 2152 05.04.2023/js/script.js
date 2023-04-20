function calc() {
    let horarioFesta = document.formFesta.horario.value
    if (horarioFesta == "manha") {
        total = 1500.00
    } else if (horarioFesta == "tarde") {
        total = 1800.00
    } else {
        total = 2300.00
    }
    console.log(horarioFesta)
    document.getElementById("totalOrcamento").value = total
}

function trocarTema() {
    let temaFesta = document.getElementById("temaFesta").value
    if (temaFesta == "flamengo") {
        novoFundo = "img/flamengo.jpg"
    } else if (temaFesta == "princesaSofia") {
        novoFundo = "img/princesaSofia.jpg"
    } else if (temaFesta == "CoD") {
        novoFundo = "img/CoD.jpg"
    } else if (temaFesta == "LoL") {
        novoFundo = "img/LoL.jpg"
    } else if (temaFesta == "FF") {
        novoFundo = "img/freeFire.jpg"
    }
    document.body.style.backgroundImage = "url(" + novoFundo + ")"
    console.log(temaFesta)
}

function opcionais(valor, selecionado) {
    let total = document.getElementById("totalOrcamento").value
    if (selecionado) {
        total = Number(total) + Number(valor)
    } else {
        total = Number(total) - Number(valor)
    }
    document.getElementById("totalOrcamento").value = total
}