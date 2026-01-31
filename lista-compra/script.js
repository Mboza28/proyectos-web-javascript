const lista = [];
const INPUT = document.getElementById("miCompra");
const BOTON = document.getElementById("miBoton");
const LISTACOMPRA = document.getElementById("listaCompra")
function agregarEntrada(){

    const nuevaEntrada = INPUT.value;

    if (nuevaEntrada === "") return;

    lista.push(nuevaEntrada);
    console.log(lista);

    const nuevoLi = document.createElement('li');

    nuevoLi.addEventListener("click",(evento =>{
        nuevoLi.remove();
    }))
    nuevoLi.textContent = nuevaEntrada;

    listaCompra.appendChild(nuevoLi);

    INPUT.value = "";
}

BOTON.addEventListener("click", agregarEntrada)
