function calcularPaga(){
    var horasTrabajadas = parseInt(document.getElementById("horasTrabajadas").value);
    var costeHora = parseFloat(document.getElementById("costeHora").value);
    var resultado = horasTrabajadas * costeHora;
    document.getElementById("resultado").innerHTML = "La paga que le corresponde es: " + resultado;

}