function soma() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let soma = n1 + n2;
    let resultado = document.getElementById("res");
    console.log(soma)
    resultado.innerHTML = `A soma de ${n1} + ${n2} é ${soma}`;
}