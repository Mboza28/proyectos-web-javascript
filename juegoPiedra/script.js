const marcadorYo = document.getElementById("puntosYo");
const marcadorPC = document.getElementById("puntosPC");
const manoPC = document.getElementById("manoPC");
const mensaje = document.getElementById("mensaje");

const btnPiedra = document.getElementById("btnPiedra");
const btnPapel = document.getElementById("btnPapel");
const btnTijera = document.getElementById("btnTijera");

let puntosUsuario = 0;
let puntosPc = 0;

const opciones = ["piedra","papel","tijera"];

function jugar(eleccionUsuario) {

    const numeroAleatorio = Math.floor(Math.random() * 3);
    const eleccionPc = opciones[numeroAleatorio];

    const eleccion = {piedra: "🗿", papel: "📄", tijera: "✂️"};
    manoPC.textContent = eleccion[eleccionPc];

    if (eleccionUsuario === eleccionPc) {
        mensaje.textContent = "¡Empate!";
    } else if (
        (eleccionUsuario === 'piedra' && eleccionPc === 'tijera') ||
        (eleccionUsuario === 'tijera' && eleccionPc === 'papel') ||
        (eleccionUsuario === 'papel' && eleccionPc === 'piedra')
    ) {
        mensaje.textContent = "¡Ganaste esta ronda!";
        puntosUsuario++;
        marcadorYo.textContent = puntosUsuario;
    } else {
        mensaje.textContent = "¡Perdiste esta ronda!";
        puntosPc++;
        marcadorPC.textContent = puntosPc;
    }

    if (puntosUsuario >= 5 || puntosPc >= 5) {


        setTimeout(() => {
            if (puntosUsuario > puntosPc) {
                alert("🏆 ¡VICTORIA! Has ganado la partida.");
                mensaje.textContent = "¡Juega otra vez!";
            } else {
                alert("💀 GAME OVER. Eres una mierda.");
                mensaje.textContent = "Inténtalo de nuevo...";
            }
            puntosUsuario = 0;
            puntosPc = 0;
            marcadorYo.textContent = puntosUsuario;
            marcadorPC.textContent = puntosPc;
            manoPC.textContent = "❓";
        }, 200);
    }
}

btnPapel.addEventListener("click",() => jugar("papel"));
btnPiedra.addEventListener("click",() => jugar("piedra"));
btnTijera.addEventListener("click",() => jugar("tijera"));

