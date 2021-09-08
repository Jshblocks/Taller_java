function calcularIMC(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = peso / (altura * altura);
    document.getElementById("resultado").innerHTML = "Tu índice de masa corporal es " + resultado.toFixed(2);

}