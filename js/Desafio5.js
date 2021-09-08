function esPalindromo(){
    var palabra = document.getElementById("palabra").value;
    var palabraInvertida = palabra.split("").reverse().join("");
    if(palabraInvertida === palabra){
        document.getElementById("resultado").innerHTML = "La palabra es palíndromo";
    }else{
        document.getElementById("resultado").innerHTML = "La palabra NO es palíndromo";
    }
    

}