var frutas = [];
function GuardarFruta(){
    frutas.push({
        nombre: document.getElementById("nombre").value,
        precio: parseFloat(document.getElementById("precio").value) 
    });
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
}
function calcular(){
    var nombreFruta = document.getElementById("fruta").value;
    var kilos = parseInt(document.getElementById("kilos").value);
    var frutaEncontrada = frutas.filter(obj => {
        return obj.nombre === nombreFruta
    });
    if(frutaEncontrada.length === 0){
        document.getElementById("resultado").innerHTML = "Fruta no encontrada intentelo de nuevo";
    }else{
        document.getElementById("resultado").innerHTML = "El precio es: " + (kilos * frutaEncontrada[0].precio);
    }
}