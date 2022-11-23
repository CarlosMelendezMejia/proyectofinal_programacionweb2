function comprar(){
    const frutas = [];
    while (true){
        let validar = confirm("Quieres comprar algo:");
        if(validar){
            let entrada = prompt("Que fruta quieres comprar");
            if (entrada !== null && entrada !== ''){
                frutas.push(entrada);
            } 
        } else {
            break;
        }
    };
    let cadena = ""
    frutas.forEach(element => {
        cadena = cadena +" "+ element;
    });
    document.getElementById("answer").innerHTML = cadena;
}