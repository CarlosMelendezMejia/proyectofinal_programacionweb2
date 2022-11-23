function nombre(){
    let nombre = prompt("¿Cual es tu nombre?");
    let cadena = "Hola! " + nombre + ", Mucho Gusto!!";
    document.getElementById("cad_1").innerHTML = cadena;
}

function suma(){
    let numA = parseInt(prompt("Introduce el primer sumando"));
    let numB = parseInt(prompt("Introduce el segundo sumando"));
    let resultado = numA + numB;
    let cadena = "El resultado de tu suma es: " + resultado;
    document.getElementById("cad_2").innerHTML = cadena;
}

function rango(){
    let numero = parseInt(prompt("Introduce un numero dentro del rango"))
    let cadena = ""
    if(numero > 0 && numero <= 10){
        cadena = "Tu numero se encuentra dentro del rango"
    } else {
        cadena = "Tu numero no se encuentra dentro del rango"
    }
    document.getElementById("cad_3").innerHTML = cadena;
}

function logica(){
    let var1 = confirm("Aceptar = VERDADERO o Cancelar = FALSO");
    let var2 = confirm("Aceptar = VERDADERO o Cancelar = FALSO");
    
    if(var1 && var2){
        cadena = "El valor de tus dos operandos es Verdadero"
    } else if(var1 || var2){
        cadena = "El valor de uno de los operandos es Verdadero"
    } else {
        cadena = "El valor de tus dos operandos es Falso"
    }
    document.getElementById("cad_4").innerHTML = cadena;
}

function adivina(){
    let numeroMaquina = Math.floor(Math.random()*(10-1)+1);
    let numeroUsuario = parseInt(prompt("Adivina el numero del 1 al 10"));
    let vidas = 3;
    let cadena;
    while((numeroMaquina !== numeroUsuario)&&vidas > 1){
        vidas--;
        if(numeroUsuario < numeroMaquina){
            numeroUsuario = parseInt(prompt("El numero que escogiste es menor, te quedan "+vidas+" vidas"));
        } else if (numeroUsuario > numeroMaquina){
            numeroUsuario = parseInt(prompt("El numero que escogiste es mayor, te quedan "+vidas+" vidas"));
        }
    }
    if(numeroMaquina === numeroUsuario){
        cadena="Ganaste!!! Felicidades";
    } else {
        cadena="Perdiste, el numero que querias adivinar es "+ numeroMaquina;
    }

    document.getElementById("cad_5").innerHTML = cadena;

}


