function somar() {
    let n1 = parseFloat(document.getElementById("num1").value)
    let n2 = parseFloat(document.getElementById("num2").value)
    document.getElementById("resultado").innerText = "Seu resultado é " + (n1 + n2)
}

function subtrair() {
    let n1 = parseFloat(document.getElementById("num1").value)
    let n2 = parseFloat(document.getElementById("num2").value)
    document.getElementById("resultado").innerText = "Seu resultado é " + (n1 - n2)
}

function multiplicar() {
    let n1 = parseFloat(document.getElementById("num1").value)
    let n2 = parseFloat(document.getElementById("num2").value)
    document.getElementById("resultado").innerText = "Seu resultado é " + (n1 * n2)
}

function dividir() {
    let n1 = parseFloat(document.getElementById("num1").value)
    let n2 = parseFloat(document.getElementById("num2").value)
    document.getElementById("resultado").innerText = "Seu resultado é " + (n1 / n2)
}
