function calcular(){
    var numeros = document.getElementById("numeros").value.split(",");
    var suma = 0;
    var rango = 0.0;
    var varianza = 0;
    var desviacion = 0;
    numeros.forEach (function(numero){
        suma += parseInt(numero);
    });
    var media = parseFloat(suma / numeros.length);
    
    
    numeros.forEach (function(numero){
        rango += Math.pow(parseInt(numero) - media, 2);
    });
    varianza = parseFloat(rango / numeros.length);
    desviacion = Math.sqrt(varianza);
    document.getElementById("resultado").innerHTML = "La media es: " + media;
    document.getElementById("resultadoDesviacion").innerHTML = "La desviación estandar: " + desviacion;

}