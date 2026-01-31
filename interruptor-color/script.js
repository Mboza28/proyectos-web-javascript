const BOTON = document.getElementById('miBoton');
const BODY = document.body;



//Funcion para cambiar color floor redondea el numero y random da un aleatorio entre 0 y 1
function cambiarColor(){

    const rojo = Math.floor(Math.random()*256);
    const verde = Math.floor(Math.random()*256);
    const azul = Math.floor(Math.random()*256);

    const colorNuevo = `rgb(${rojo},${verde},${azul})`;

    BODY.style.backgroundColor = colorNuevo;
    BOTON.textContent = colorNuevo;

    console.log("El color actual es:", colorNuevo);
}

BOTON.addEventListener("click", cambiarColor);