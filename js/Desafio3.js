function calcular(){
    var valorUnidad = 450;
    var precioNormal = valorUnidad * parseInt(document.getElementById("numeroBarras").value);
    var descuento = precioNormal * 0.5;
    var costeTotal = precioNormal * 0.5;
    document.getElementById("precioNormal").innerHTML = "Precio habitual por barras Ingresadas: $" + precioNormal;
    document.getElementById("descuentoDia").innerHTML = "Descuento por no ser del día para barras ingresadas: " + descuento;
    document.getElementById("costeFinal").innerHTML = "Coste final: $" + costeTotal;

}