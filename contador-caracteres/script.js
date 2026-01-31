const ENTRADA = document.getElementById("miCuadro");
const CONTADOR = document.getElementById("contadorCaracteres");

function actualizarContador() {
    let letras = ENTRADA.value.length;
    console.log(letras);
    CONTADOR.textContent = letras;

    if(letras > 20){
        CONTADOR.style.color = 'red';
    }else{
        CONTADOR.style.color = 'black';
    }
}

ENTRADA.addEventListener("input", actualizarContador);