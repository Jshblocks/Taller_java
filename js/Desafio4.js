var listaNumeros = [];
        var cantidadNumeros = 0;
        var i = 0;
        function ingresarNumeros(){
            cantidadNumeros = parseInt(document.getElementById("cantidadNumeros").value);
            document.getElementById("divNumeros").style.display = "";
        }
        function guardarNumeros(){
            i++;
            var num = parseInt(document.getElementById("numero").value);
            listaNumeros.push(num);
            document.getElementById("numero").value = "";
            if(cantidadNumeros === i){
                document.getElementById("sumarNumeros").removeAttribute("disabled");
                document.getElementById("guardarNumeros").setAttribute("disabled", "true");
            }
        }
        function sumarNumeros(){
            var suma = 0;
            listaNumeros.forEach (function(numero){
                suma += numero;
            });
            document.getElementById("resultado").innerHTML = "El resultado de la suma es: " + suma;
        }